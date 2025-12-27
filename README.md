# Land in US

A next-generation real estate lead generation platform designed for US Realtors operating in slow markets. Built with precision, intelligence, and ethical practices.

## 🎥 Hero Video Setup

The hero section features an auto-playing property video with premium effects. 

### Quick Start:
1. **Generate AI Video**: Visit `/ai-video-helper` for ready-to-use prompts
2. **Add Video**: Place at `public/videos/hero-property.mp4`
3. **Done!**: Video auto-plays with all effects

See `AI_VIDEO_GENERATION_GUIDE.md` for complete instructions.

## Philosophy

"The market is slow — not dead. Precision replaces volume. Calm systems beat loud promises."

## Tech Stack

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations)
- **Recharts** (data visualization)
- **Lucide React** (icons)

## Design System

### Color Palette (Light Theme Only)
- Base White: `#FAFAF8`
- Warm Pearl: `#F2EFEA`
- Soft Beige: `#E9E4DA`
- Muted Gold: `#C6A75E` (accents)
- Slate Blue: `#5F6F82`
- Soft Sage Green: `#7E9C8C`
- Divider Gray: `#DADADA`
- Primary Text: `#2F2F2F`
- Secondary Text: `#6A6A6A`

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)
- Line height: ≥ 1.7

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── how-it-works/      # How It Works page
│   ├── lead-types/        # Lead Types page
│   ├── pricing/           # Pricing page
│   ├── dashboard/         # Agent Dashboard
│   ├── why-now/           # Why Now page
│   ├── about/             # About page
│   ├── blog/              # Blog/Insights page
│   └── contact/           # Contact/Onboarding page
├── components/            # React components
│   ├── home/             # Home page components
│   ├── how-it-works/     # How It Works components
│   ├── lead-types/       # Lead Types components
│   ├── pricing/          # Pricing components
│   ├── dashboard/        # Dashboard components
│   ├── why-now/          # Why Now components
│   ├── about/            # About components
│   ├── blog/             # Blog components
│   ├── contact/          # Contact components
│   ├── Navigation.tsx    # Main navigation
│   └── Footer.tsx        # Footer component
└── public/               # Static assets
```

## Key Features

- **Precision Lead Generation**: Intent-verified leads with AI behavior analysis
- **Human Verification**: Every lead reviewed by real people
- **Transparent Pricing**: No hidden fees, month-to-month flexibility
- **Agent Dashboard**: Complete lead management with analytics
- **Ethical Practices**: No reselling, fair distribution, feedback-driven system

## Design Principles

- Massive whitespace
- Rounded cards (16-24px)
- Soft shadows
- Smooth hover elevation
- Scroll-based storytelling
- Apple-level polish
- Subtle Framer Motion animations

## Build

```bash
npm run build
```

## Production

```bash
npm start
```

## License

Private - All rights reserved

