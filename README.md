# SUZAA Landing Page

A modern, responsive single-page marketing landing site built with Next.js App Router and Tailwind CSS.

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── globals.css      # Global styles with SUZAA color palette
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Main landing page
├── components/
│   ├── Header.tsx       # Navigation header
│   ├── Hero.tsx         # Hero section
│   ├── Stats.tsx        # Stats strip
│   ├── Features.tsx     # Features section
│   ├── HowItWorks.tsx   # How it works section
│   ├── Pricing.tsx      # Pricing section
│   └── Contact.tsx       # Contact section
└── package.json
```

## Features

- ✅ Fully responsive design
- ✅ Smooth scroll navigation
- ✅ Mobile-friendly menu
- ✅ SUZAA brand color palette
- ✅ Clean, modern SaaS design
- ✅ TypeScript support
- ✅ Tailwind CSS utilities

## Color Palette

The design uses the SUZAA color palette defined in `app/globals.css`:

- Primary Blue: `#0a84ff`
- Dark Navy: `#0d1b2a`
- Teal: `#00b8a9`
- Deep Ink: `#111827`
- Slate: `#6b7280`
- Off White: `#f9fafb`
- Light Gray: `#e5e7eb`

## Customization

All components are located in the `components/` directory and can be easily customized. The color palette is defined in `app/globals.css` and can be adjusted there.

