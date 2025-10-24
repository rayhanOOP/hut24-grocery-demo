# Rayora Grocery Demo

A Dookan-style South Asian grocery storefront demo built with **Next.js 14 (App Router)** + **Tailwind CSS**.

## ✨ Features
- Hero section + categories
- Featured products grid (dummy data in `app/products.json`)
- Simple cart with context and a slide-in drawer
- Responsive, clean UI (Tailwind)
- Ready for Vercel deploy

## ▶️ Quick Start

```bash
# 1) Install deps
npm install

# 2) Run dev server
npm run dev

# 3) Open
http://localhost:3000
```

## 🚀 Deploy to Vercel
- Create a new project from this repo in Vercel
- Framework preset: **Next.js**
- Root directory: project root
- Hit Deploy

## 🗂️ Structure
```
app/
  layout.tsx
  page.tsx
  products.json
components/
  Header.tsx
  Footer.tsx
  Hero.tsx
  Categories.tsx
  ProductCard.tsx
  CartDrawer.tsx
lib/
  cart.tsx
public/
  images/*.svg
styles/
  (Tailwind via app/globals.css)
tailwind.config.ts
postcss.config.js
next.config.js
tsconfig.json
package.json
```

## 📌 Notes
- Images are placeholder SVGs in `/public/images`.
- Stripe/checkout is a placeholder button for demo.
- You can replace products with real data from a CMS/DB later.
```

## 💳 Stripe Test Checkout

1. Copy `.env.example` to `.env.local` and fill your Stripe test keys.
2. `npm install` (adds `stripe` package).
3. Start dev server and click **Checkout (Stripe Test)** in the cart.

> Uses `/api/checkout` to create a Stripe Checkout Session.

## 🔐 Admin (Demo CRUD)

- Visit `/admin?key=demo` to access the demo admin.
- Edit inline, add/delete products, and **Export JSON**.
- Replace `app/products.json` in your repo with the exported file to publish changes.
