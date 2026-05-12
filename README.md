# Chamco Digital — Marketing Website

Marketing and lead-generation site for **Chamco Digital**, a Microsoft Partner specializing in AI and cloud technology training, workforce enablement, and managed services.

## Tech stack

- **Framework**: Next.js 16 (App Router, Turbopack)
- **UI**: React 19, TypeScript 5, Tailwind CSS 4
- **Payments**: Stripe (registration flow)
- **CRM**: Microsoft Dynamics 365 Web API (lead capture)
- **Email**: Microsoft Graph API (contact + registration notifications)
- **Blog**: WordPress REST API (`chamcodigital.com/wp-json/wp/v2/`)
- **Hosting**: Vercel

## Project structure

```
app/                          App Router pages (38 static + 3 dynamic)
├── api/
│   ├── contact/route.ts      Contact form → Graph API email
│   ├── register/route.ts     Training registration → Dynamics 365 lead + email
│   └── webhook/route.ts      Stripe webhook → confirmed payment processing
├── services/[slug]/          9 service pages
├── industries/[slug]/        7 industry pages
├── blog/                     Blog index (dynamic [slug] route pending — Bucket 5)
└── ...                       Marketing, legal, and training pages

components/                   Page-content and shared UI components
public/images/                Static image assets
```

## Prerequisites

- Node.js 20+
- npm 10+
- Azure App Registration with `Mail.Send` (Application) permission granted and admin-consented
- Stripe account with payment link configured

## Environment variables

Create a `.env.local` file in the project root with:

| Variable | Purpose |
|---|---|
| `EMAIL_USER` | Mailbox the Graph API sends from (e.g. `develop@chamcodigital.com`) |
| `DYNAMICS_TENANT_ID` | Azure AD tenant ID |
| `DYNAMICS_CLIENT_ID` | Azure App Registration client ID |
| `DYNAMICS_CLIENT_SECRET` | Azure App Registration client secret |
| `DYNAMICS_URL` | Dynamics 365 environment URL (e.g. `https://<org>.crm.dynamics.com`) |
| `STRIPE_SECRET_KEY` | Stripe secret key (`sk_live_...` or `sk_test_...`) |
| `STRIPE_WEBHOOK_SECRET` | Stripe webhook signing secret (`whsec_...`) |
| `NEXT_PUBLIC_STRIPE_PAYMENT_URL` | Stripe-hosted payment link the registration form redirects to |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL (e.g. `https://chamcodigital.com`) |

In Vercel, set the same variables under **Settings → Environment Variables** for the Production environment.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available scripts

| Script | Description |
|---|---|
| `npm run dev` | Start dev server (Turbopack, hot reload) |
| `npm run build` | Production build |
| `npm run start` | Serve the production build locally |
| `npm run lint` | Run ESLint |

## API routes

- `POST /api/contact` — Contact form submission. Sends notification to `develop@chamcodigital.com` via Microsoft Graph.
- `POST /api/register` — Training registration. Sends notification to `training@chamco.ai` via Microsoft Graph. Frontend then redirects to Stripe.
- `POST /api/webhook` — Stripe webhook (`checkout.session.completed`). Creates a Dynamics 365 lead and emails confirmation. Configure the endpoint in the Stripe dashboard and copy the signing secret into `STRIPE_WEBHOOK_SECRET`.

## Deployment

1. Connect the GitHub repository in Vercel and import the project.
2. Add all environment variables above in Vercel settings.
3. Connect the custom domain (DNS records via Namecheap → Vercel).
4. Every push to `main` triggers a new production deployment.

Update the Stripe webhook endpoint URL in the Stripe dashboard to point at `https://<your-domain>/api/webhook` after the first deployment.
