import { NextResponse } from 'next/server'
import { appendRow } from '@/lib/googleSheets'

export async function POST(request) {
  try {
    const body = await request.json()
    const { fullName, phone, email } = body || {}
    const selectedPackage = (body?.packageName || body?.package || '').toString()

    if (!fullName || !phone || !email || !selectedPackage) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    let spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID || process.env.GOOGLE_SHEET_ID || process.env.SHEET_ID || process.env.SHEETS_ID
    const contactSheetName = process.env.GOOGLE_SHEETS_CONTACT_SHEET_NAME || process.env.SHEET_NAME || 'Contact'
    if (!spreadsheetId && process.env.SHEETS_URL) {
      const m = process.env.SHEETS_URL.match(/\/d\/([a-zA-Z0-9-_]+)/)
      spreadsheetId = m ? m[1] : undefined
    }

    const webhookUrl = process.env.SHEETS_WEBHOOK_URL
    const hasServiceAccount = !!(process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || process.env.GOOGLE_CLIENT_EMAIL)

    if (!spreadsheetId && !webhookUrl) {
      return NextResponse.json({ error: 'Missing spreadsheet ID' }, { status: 500 })
    }

    const nowIso = new Date().toISOString()

    if (hasServiceAccount && spreadsheetId) {
      await appendRow({
        spreadsheetId,
        range: `${contactSheetName}!A:E`,
        values: [nowIso, fullName, phone, email, selectedPackage]
      })
    } else if (webhookUrl) {
      const targetSheet = process.env.SHEET_NAME || process.env.GOOGLE_SHEETS_CONTACT_SHEET_NAME || 'Contact'

      // Prepare payload with multiple aliases
      const payload = {
        timestamp: nowIso,
        name: fullName,
        fullName,
        phone,
        mobile: phone,
        mobileNo: phone,
        email,
        package: selectedPackage,
        packageName: selectedPackage,
        selectedPackage: selectedPackage,
        Package: selectedPackage,
        PackageName: selectedPackage,
        package_selected: selectedPackage,
        'Package Selected': selectedPackage,
        // For existing Apps Script that reads `message`, map package to message
        message: selectedPackage,
        sheet: targetSheet,
        sheetName: targetSheet,
        'Date Time': nowIso,
        'Full Name': fullName,
        'Moblie no': phone,
        'Email adree': email
      }

      // Try JSON first (original working approach), then fall back to URL-encoded
      let resp = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })

      if (!resp.ok) {
        const form = new URLSearchParams()
        Object.entries(payload).forEach(([k, v]) => form.append(k, String(v ?? '')))
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
    console.error('Contact submission error', err)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}


