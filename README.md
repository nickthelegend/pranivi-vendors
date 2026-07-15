# Pranivi — Vendor & Procurement Portal

> A Next.js procurement-management frontend with an Algorand wallet-gated vendor dashboard.

## Overview

Pranivi is a web frontend for a procurement-management platform. It pairs a marketing
landing page with a dedicated **vendor portal** where suppliers connect an Algorand wallet
to access their dashboard and manage day-to-day procurement activities — orders, shipments,
invoices, payments, bids, quality reports, and shipment-tracking QR codes.

Wallet connection acts as the authentication gate: the vendor area redirects to a connect
screen until a wallet is active, so there are no passwords to manage. The app targets the
Algorand **TestNet** and supports the Defly, Pera, Exodus, and Lute wallets.

## Features

- **Wallet-based access** — connect via Defly, Pera, Exodus, or Lute using
  `@txnlab/use-wallet-react`; the vendor dashboard is gated behind an active account.
- **Vendor dashboard** — a card-based hub linking to every vendor workflow, showing the
  connected wallet address.
- **Procurement workflows** — dedicated pages for Orders, Shipments, Invoices, Payments,
  Bids (with a bid-creation flow), Quality Reports, Profile, and Settings.
- **QR code tools** — a QR-codes section with a generator for tracking codes.
- **Marketing site** — landing page with hero, features, dashboard preview, download,
  testimonials, and footer sections, plus About, Contact, Help, and Products pages.
- **Themed, responsive UI** — built on shadcn/ui (Radix primitives) and Tailwind CSS,
  with light/dark theming via `next-themes` and toast notifications.

## Tech Stack

- **Framework:** Next.js 15 (App Router) with React 19 and TypeScript
- **Styling:** Tailwind CSS 3, `tailwindcss-animate`, shadcn/ui + Radix UI primitives
- **Wallet / blockchain:** `@txnlab/use-wallet-react`, `algosdk`, Pera / Defly / Lute /
  Magic connectors, WalletConnect
- **Forms & validation:** React Hook Form + Zod
- **UI extras:** Recharts, Lucide icons, React Toastify / Sonner, Embla Carousel

## Getting Started

```bash
# Install dependencies
npm install

# Start the development server
npm run dev

# Build for production
npm run build
npm run start
```

Then open <http://localhost:3000>. Connect a supported Algorand wallet (configured for
TestNet) to enter the vendor dashboard at `/vendors`.

## Project Structure

```
.
├── app/                  # Next.js App Router
│   ├── page.tsx          # Landing page
│   ├── layout.tsx        # Root layout + theming
│   ├── about/ contact/ help/ products/
│   └── vendors/          # Wallet-gated vendor portal
│       ├── connect/      # Wallet connect screen
│       ├── orders/ shipments/ invoices/ payments/
│       ├── bids/         # + bids/create
│       ├── quality/ profile/ settings/
│       └── qr-codes/     # + qr-codes/generate
├── components/           # UI + section components (shadcn/ui in components/ui)
├── providers/            # Wallet provider wrapper
├── hooks/                # use-mobile, use-toast
├── lib/                  # Utilities
├── public/               # Static assets
└── styles/               # Global styles
```

---

Built by [nickthelegend](https://github.com/nickthelegend) · [nickthelegend.tech](https://nickthelegend.tech)
