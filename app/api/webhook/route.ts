import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

export async function POST(req: NextRequest) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2026-04-22.dahlia',
  })

  const body = await req.text()
  const signature = req.headers.get('stripe-signature')!

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (err) {
    console.error('Webhook signature verification failed:', err)
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  // Only process successful payments
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session

    const {
      fullName,
      email,
      phone,
      batchName,
      batchStartDate,
      discountCode,
    } = session.metadata || {}

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

      let campaignId: string | null = null

      // If discount code used, find or create Campaign folder in Dynamics 365
      if (discountCode && discountCode.trim()) {
        const normalizedCode = discountCode.trim().toUpperCase()

        // Search for existing campaign
        const searchResponse = await fetch(
          `${process.env.DYNAMICS_URL}/api/data/v9.2/campaigns?$filter=name eq '${normalizedCode}'&$select=campaignid,name`,
          {
            headers: {
              'Authorization': `Bearer ${accessToken}`,
              'OData-MaxVersion': '4.0',
              'OData-Version': '4.0',
              'Accept': 'application/json',
            },
          }
        )
        const searchData = await searchResponse.json()

        if (searchData.value && searchData.value.length > 0) {
          campaignId = searchData.value[0].campaignid
        } else {
          // Create new campaign folder for this discount code
          const campaignResponse = await fetch(
            `${process.env.DYNAMICS_URL}/api/data/v9.2/campaigns`,
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
                name: normalizedCode,
                description: `Affiliate discount code: ${normalizedCode}. Auto-created by Chamco Digital registration system on first successful payment.`,
                typecode: 6,
                statuscode: 0,
              }),
            }
          )
          const campaignData = await campaignResponse.json()
          campaignId = campaignData.campaignid
        }
      }

      // Create Lead in Dynamics 365
      const nameParts = (fullName || '').trim().split(' ')
      const firstName = nameParts[0] || ''
      const lastName = nameParts.slice(1).join(' ') || ''

      const leadBody: Record<string, unknown> = {
        firstname: firstName,
        lastname: lastName,
        emailaddress1: email,
        telephone1: phone,
        subject: `Paid Training Registration — ${batchName}`,
        description: `Batch: ${batchName}\nBatch Start Date: ${batchStartDate}\nDiscount Code: ${discountCode || 'None'}\nPayment: Confirmed via Stripe\nStripe Session: ${session.id}`,
        leadsourcecode: 8,
        companyname: 'Training Registrant',
      }

      if (campaignId) {
        leadBody['campaignid@odata.bind'] = `/campaigns(${campaignId})`
      }

      await fetch(
        `${process.env.DYNAMICS_URL}/api/data/v9.2/leads`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
            'OData-MaxVersion': '4.0',
            'OData-Version': '4.0',
          },
          body: JSON.stringify(leadBody),
        }
      )

      // Get Graph API token for email notification
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

      // Send email notification
      if (graphAccessToken) {
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
                subject: `✅ Confirmed Payment: ${fullName} — ${batchName}${discountCode ? ` [Code: ${discountCode}]` : ''}`,
                body: {
                  contentType: 'HTML',
                  content: `
                    <div style="font-family: Arial, sans-serif; max-width: 600px;">
                      <h2 style="color: #2563eb;">✅ New Confirmed Training Registration</h2>
                      <div style="background: #f0fdf4; border: 1px solid #86efac; padding: 12px 16px; border-radius: 6px; margin-bottom: 16px;">
                        <strong>Payment confirmed via Stripe</strong>
                      </div>
                      ${discountCode ? `<div style="background: #eff6ff; border: 1px solid #bfdbfe; padding: 12px 16px; border-radius: 6px; margin-bottom: 16px;"><strong>Affiliate Code: ${discountCode}</strong> — Lead created under this campaign folder in Dynamics 365</div>` : ''}
                      <table style="width: 100%; border-collapse: collapse;">
                        <tr><td style="padding: 8px; font-weight: bold; width: 160px;">Full Name:</td><td style="padding: 8px;">${fullName}</td></tr>
                        <tr><td style="padding: 8px; font-weight: bold;">Email:</td><td style="padding: 8px;">${email}</td></tr>
                        <tr><td style="padding: 8px; font-weight: bold;">Phone:</td><td style="padding: 8px;">${phone}</td></tr>
                        <tr><td style="padding: 8px; font-weight: bold;">Batch:</td><td style="padding: 8px;">${batchName}</td></tr>
                        <tr><td style="padding: 8px; font-weight: bold;">Start Date:</td><td style="padding: 8px;">${batchStartDate}</td></tr>
                        <tr><td style="padding: 8px; font-weight: bold;">Discount Code:</td><td style="padding: 8px;">${discountCode || 'None'}</td></tr>
                        <tr><td style="padding: 8px; font-weight: bold;">Stripe Session:</td><td style="padding: 8px;">${session.id}</td></tr>
                      </table>
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
      }

    } catch (error) {
      console.error('Post-payment processing error:', error)
    }
  }

  return NextResponse.json({ received: true })
}
