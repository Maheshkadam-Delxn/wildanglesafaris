import 'server-only'
import { google } from 'googleapis'

let sheetsClient = null

function getJwtClient() {
  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || process.env.GOOGLE_CLIENT_EMAIL
  let privateKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY || process.env.GOOGLE_PRIVATE_KEY
  if (!clientEmail || !privateKey) {
    throw new Error('Missing Google service account credentials')
  }
  // Normalize private key: remove surrounding quotes and fix newlines
  privateKey = privateKey.trim()
  if ((privateKey.startsWith('"') && privateKey.endsWith('"')) || (privateKey.startsWith("'") && privateKey.endsWith("'"))) {
    privateKey = privateKey.slice(1, -1)
  }
  const key = privateKey.replace(/\\n/g, '\n')
  return new google.auth.JWT({
    email: clientEmail,
    key,
    scopes: ['https://www.googleapis.com/auth/spreadsheets']
  })
}

export function getSheets() {
  if (!sheetsClient) {
    const auth = getJwtClient()
    sheetsClient = google.sheets({ version: 'v4', auth })
  }
  return sheetsClient
}

export async function appendRow({ spreadsheetId, range, values }) {
  const sheets = getSheets()
  const response = await sheets.spreadsheets.values.append({
    spreadsheetId,
    range,
    valueInputOption: 'USER_ENTERED',
    insertDataOption: 'INSERT_ROWS',
    requestBody: { values: [values] }
  })
  return response.data
}


