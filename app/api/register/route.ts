import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { fullName, email, phone, batchStartDate, batchName } = body

  if (!fullName || !email || !phone) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  // Split full name into first and last
  const nameParts = fullName.trim().split(' ')
  const firstName = nameParts[0] || ''
  const lastName = nameParts.slice(1).join(' ') || ''

  try {
    // Get Dynamics 365 access token
    const tokenResponse = await fetch(
      `https://login.microsoftonline.com/${process.env.DYNAMICS_TENANT_ID}/oauth2/v2.0/token`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          grant_type: 'client_credentials',
          client_id: process.env.DYNAMICS_CLIENT_ID!,
          client_secret: process.env.DYNAMICS_CLIENT_SECRET!,
          scope: `${process.env.DYNAMICS_URL}/.default`,
        }),
      }
    )

    const tokenData = await tokenResponse.json()
    const accessToken = tokenData.access_token

    if (!accessToken) {
      throw new Error('Failed to obtain access token')
    }

    // Create Lead in Dynamics 365
    const leadResponse = await fetch(
      `${process.env.DYNAMICS_URL}/api/data/v9.2/leads`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
          'OData-MaxVersion': '4.0',
          'OData-Version': '4.0',
          'Prefer': 'return=representation',
        },
        body: JSON.stringify({
          firstname: firstName,
          lastname: lastName,
          emailaddress1: email,
          telephone1: phone,
          subject: `Training Registration — ${batchName || 'Chamco Digital AI Training'}`,
          description: `Batch: ${batchName || 'Not specified'}\nBatch Start Date: ${batchStartDate || 'Not specified'}\nRegistered via: chamcodigital.com/learning-chamcodigital`,
          leadsourcecode: 8, // Web
          companyname: 'Training Registrant',
        }),
      }
    )

    if (!leadResponse.ok) {
      const errorText = await leadResponse.text()
      throw new Error(`Dynamics 365 error: ${errorText}`)
    }

    // Get Graph API access token
    const graphTokenResponse = await fetch(
      `https://login.microsoftonline.com/${process.env.DYNAMICS_TENANT_ID}/oauth2/v2.0/token`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          grant_type: 'client_credentials',
          client_id: process.env.DYNAMICS_CLIENT_ID!,
          client_secret: process.env.DYNAMICS_CLIENT_SECRET!,
          scope: 'https://graph.microsoft.com/.default',
        }),
      }
    )
    const graphTokenData = await graphTokenResponse.json()
    const graphAccessToken = graphTokenData.access_token

    await fetch(
      `https://graph.microsoft.com/v1.0/users/${process.env.EMAIL_USER}/sendMail`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${graphAccessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: {
            subject: `New Training Registration: ${fullName} — ${batchName}`,
            body: {
              contentType: 'HTML',
              content: `
                <div style="font-family: Arial, sans-serif; max-width: 600px;">
                  <h2 style="color: #2563eb;">New Training Registration</h2>
                  <table style="width: 100%; border-collapse: collapse;">
                    <tr><td style="padding: 8px; font-weight: bold; width: 160px;">Full Name:</td><td style="padding: 8px;">${fullName}</td></tr>
                    <tr><td style="padding: 8px; font-weight: bold;">Email:</td><td style="padding: 8px;">${email}</td></tr>
                    <tr><td style="padding: 8px; font-weight: bold;">Phone:</td><td style="padding: 8px;">${phone}</td></tr>
                    <tr><td style="padding: 8px; font-weight: bold;">Batch:</td><td style="padding: 8px;">${batchName || 'Not specified'}</td></tr>
                    <tr><td style="padding: 8px; font-weight: bold;">Batch Start Date:</td><td style="padding: 8px;">${batchStartDate || 'Not specified'}</td></tr>
                  </table>
                  <p style="margin-top: 16px; color: #666;">This lead has been automatically created in Dynamics 365 CRM.</p>
                </div>
              `,
            },
            toRecipients: [
              { emailAddress: { address: 'training@chamco.ai' } }
            ],
          },
          saveToSentItems: true,
        }),
      }
    )

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json({ error: 'Registration failed. Please try again.' }, { status: 500 })
  }
}
