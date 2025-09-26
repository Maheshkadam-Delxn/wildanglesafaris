import { NextResponse } from 'next/server'
import { appendRow } from '@/lib/googleSheets'

export async function POST(request) {
  try {
    const body = await request.json()
    const {
      fullName,
      email,
      phone,
      referralSource,
      checkInDate,
      checkOutDate,
      adults,
      kids,
      transportation,
      agreeTerms
    } = body || {}

    if (!fullName || !email || !phone || !referralSource || !checkInDate || !checkOutDate || !adults || transportation == null || agreeTerms !== true) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    let spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID || process.env.GOOGLE_SHEET_ID || process.env.SHEET_ID || process.env.SHEETS_ID
    const bookingSheetName = process.env.GOOGLE_SHEETS_BOOKING_SHEET_NAME || 'Bookings Enquiries'
    if (!spreadsheetId && process.env.SHEETS_URL) {
      const m = process.env.SHEETS_URL.match(/\/d\/([a-zA-Z0-9-_]+)/)
      spreadsheetId = m ? m[1] : undefined
    }

    // Prefer a dedicated webhook for bookings if provided
    const webhookUrl = process.env.SHEETS_WEBHOOK_URL_BOOKINGS || process.env.SHEETS_WEBHOOK_URL
    const hasServiceAccount = !!(process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || process.env.GOOGLE_CLIENT_EMAIL)
    if (!spreadsheetId && !webhookUrl) {
      return NextResponse.json({ error: 'Missing spreadsheet ID' }, { status: 500 })
    }

    const nowIso = new Date().toISOString()

    if (hasServiceAccount && spreadsheetId) {
      // Exact column order for "Bookings Enquiries"
      await appendRow({
        spreadsheetId,
        range: `${bookingSheetName}!A:L`,
        values: [
          nowIso,                    // Date Time
          fullName,                  // Full Name
          email,                     // Email Address
          referralSource,            // Where did you find us?
          phone,                     // Mobile Number
          checkInDate,               // Check-in Date
          checkOutDate,              // Check-out Date
          adults,                    // Number of Adults
          kids,                      // Number of Kids (0-11 yrs)
          '',                        // Choice of Jungle (not in form)
          '',                        // Number of Safaris (not in form)
          transportation             // Transportation Required (yes/no)
        ]
      })
    } else if (webhookUrl) {
      // Also send explicit keys matching the requested column headers
      const bookingPayload = {
        'Date Time': nowIso,
        'Full Name': fullName,
        'Email Address': email,
        'Where did you find us?': referralSource,
        'Mobile Number': phone,
        'Check-in Date': checkInDate,
        'Check-out Date': checkOutDate,
        'Number of Adults': adults,
        'Number of Kids (0-11 yrs)': kids,
        'Choice of Jungle': '',
        'Number of Safaris': '',
        'Transportation Required': transportation,
        sheetName: bookingSheetName,
        sheet: bookingSheetName
      }

      const message = `Referral: ${referralSource} | Dates: ${checkInDate} → ${checkOutDate} | Guests: ${adults} adults, ${kids} kids | Transportation: ${transportation}`

      // Try JSON payload (both structured fields and summary message for backwards compat)
      let resp = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          timestamp: nowIso,
          name: fullName,
          email,
          phone,
          message,
          ...bookingPayload
        })
      })
      if (!resp.ok) {
        const form = new URLSearchParams()
        form.append('timestamp', nowIso)
        form.append('name', fullName)
        form.append('email', email)
        form.append('phone', phone)
        form.append('message', message)
        Object.entries(bookingPayload).forEach(([k, v]) => form.append(k, String(v ?? '')))
        resp = await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
          body: form.toString()
        })
      }
      if (!resp.ok) {
        return NextResponse.json({ error: 'Webhook failed' }, { status: 502 })
      }
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Booking submission error', err)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}



