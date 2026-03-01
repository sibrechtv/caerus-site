# Caerus - EPFL Summer Preparation Program

A bilingual (French/English) marketing website for Caerus, a summer preparation program for incoming EPFL students.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Internationalization**: next-intl
- **Fonts**: Satoshi + General Sans (via Fontshare)

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm (comes with Node.js)

### Installation

```bash
# Navigate to the project directory
cd C:\Users\sibiv\OneDrive\Desktop\Caerus

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
├── src/
│   ├── app/
│   │   ├── [locale]/           # Locale-based routing
│   │   │   ├── layout.tsx      # Root layout with Navbar/Footer
│   │   │   ├── page.tsx        # Home page
│   │   │   ├── pricing/        # Pricing page
│   │   │   ├── about/          # About page
│   │   │   └── faq/            # FAQ page
│   │   └── globals.css         # Global styles
│   ├── components/             # Reusable UI components
│   ├── i18n/                   # Internationalization config
│   └── middleware.ts           # Locale routing middleware
├── messages/
│   ├── fr.json                 # French translations
│   └── en.json                 # English translations
├── tailwind.config.ts          # Tailwind configuration
└── package.json
```

## Editing Translations

All text content is stored in JSON files in the `messages/` directory:

- **French**: `messages/fr.json` (default)
- **English**: `messages/en.json`

To edit content, simply modify the corresponding JSON file. The structure is organized by page/section:

```json
{
  "hero": {
    "title": "Your headline here",
    "subtitle": "Your subtitle here"
  },
  "pricing": {
    "card": {
      "price": "49",
      "features": ["Feature 1", "Feature 2"]
    }
  }
}
```

## Customizing Pricing

Pricing is configured in the translation files under `pricing.card`:

```json
{
  "pricing": {
    "card": {
      "price": "49",           // Change the price here
      "currency": "€",         // Currency symbol
      "period": "/month",      // Billing period
      "features": [...]        // List of included features
    }
  }
}
```

Update both `fr.json` and `en.json` to keep translations in sync.

## Customizing Design

Design tokens are defined in `tailwind.config.ts`:

- **Colors**: Accent (teal), Coral (CTA), backgrounds, text
- **Typography**: Satoshi (display), General Sans (body)
- **Spacing**: Section padding, component spacing
- **Shadows**: Soft, medium, elevated

## Building for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

## Routes

| Path | Description |
|------|-------------|
| `/` | Home (French) |
| `/en` | Home (English) |
| `/pricing` | Pricing (French) |
| `/en/pricing` | Pricing (English) |
| `/about` | About (French) |
| `/en/about` | About (English) |
| `/faq` | FAQ (French) |
| `/en/faq` | FAQ (English) |

## License

© 2025 Caerus. All rights reserved.
