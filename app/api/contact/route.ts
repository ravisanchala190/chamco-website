import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { name, phone, email, subject, message, services } = body

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  try {
    // Get Graph API access token using Azure App Registration
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

    if (!graphAccessToken) {
      throw new Error('Failed to obtain Graph API access token')
    }

    // Send email via Microsoft Graph API
    const emailResponse = await fetch(
      `https://graph.microsoft.com/v1.0/users/${process.env.EMAIL_USER}/sendMail`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${graphAccessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: {
            subject: `New Contact Form Submission: ${subject}`,
            body: {
              contentType: 'HTML',
              content: `
                <div style="font-family: Arial, sans-serif; max-width: 600px;">
                  <h2 style="color: #2563eb;">New Contact Form Submission</h2>
                  <table style="width: 100%; border-collapse: collapse;">
                    <tr><td style="padding: 8px; font-weight: bold; width: 140px;">Name:</td><td style="padding: 8px;">${name}</td></tr>
                    <tr><td style="padding: 8px; font-weight: bold;">Email:</td><td style="padding: 8px;">${email}</td></tr>
                    <tr><td style="padding: 8px; font-weight: bold;">Phone:</td><td style="padding: 8px;">${phone || 'Not provided'}</td></tr>
                    <tr><td style="padding: 8px; font-weight: bold;">Subject:</td><td style="padding: 8px;">${subject}</td></tr>
                    <tr><td style="padding: 8px; font-weight: bold;">Services:</td><td style="padding: 8px;">${services?.join(', ') || 'None selected'}</td></tr>
                    <tr><td style="padding: 8px; font-weight: bold; vertical-align: top;">Message:</td><td style="padding: 8px;">${message.replace(/\n/g, '<br/>')}</td></tr>
                  </table>
                </div>
              `,
            },
            toRecipients: [
              { emailAddress: { address: 'develop@chamcodigital.com' } }
            ],
            replyTo: [
              { emailAddress: { address: email, name: name } }
            ],
          },
          saveToSentItems: true,
        }),
      }
    )

    if (!emailResponse.ok) {
      const errorText = await emailResponse.text()
      throw new Error(`Graph API error: ${errorText}`)
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Failed to send message. Please try again.' }, { status: 500 })
  }
}
