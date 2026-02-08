# SEMUJUR ISLAND - Premium Marine Aquarium Landing Page

A professional, high-end landing page for SEMUJUR ISLAND, a premium marine aquarium store specializing in saltwater fish, corals, and natural seawater.

## Features

- **Multilingual Support**: English and Indonesian language switcher
- **Smooth Animations**: Framer Motion scroll-triggered animations
- **Responsive Design**: Mobile-first approach with full responsiveness
- **Modern UI**: Clean, luxurious aesthetic with ocean-inspired colors
- **Sticky Navigation**: Blur effect navbar with smooth scrolling
- **Interactive Gallery**: Lightbox effect for featured photos
- **Testimonials**: 5-star rating cards
- **Direct Contact**: WhatsApp, Instagram, and Email integration

## Tech Stack

- **Framework**: Next.js 13 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript

## Project Structure

```
project/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx          # Sticky navigation with language switcher
│   ├── Hero.tsx            # Hero section with CTA
│   ├── About.tsx           # About Us section
│   ├── Services.tsx        # Services/Products section
│   ├── Gallery.tsx         # Photo gallery with lightbox
│   ├── Testimonials.tsx    # Customer testimonials
│   └── Contact.tsx         # Contact information
├── context/
│   └── LanguageContext.tsx # Language state management
├── content/
│   └── site-content.ts     # All text content (EN/ID)
└── public/
    ├── logo.webp           # Company logo
    └── images/
        └── gallery/        # Gallery images
            ├── anemone.jpg
            ├── clownfish.jpg
            ├── angelfish.jpg
            └── blue-tang.jpg
```

## Quick Start

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

## Content Management

### Updating Text Content

All text content is centralized in `/content/site-content.ts`. This file contains:

- Navigation labels
- Hero section content
- About Us information
- Services descriptions
- Gallery image paths and titles
- Testimonials
- Contact information

**Example:**
```typescript
export const siteContent = {
  en: {
    hero: {
      title: "SEMUJUR ISLAND",
      subtitle: "Premium Marine Aquarium Experience",
      // ... more content
    }
  },
  id: {
    hero: {
      title: "SEMUJUR ISLAND",
      subtitle: "Pengalaman Akuarium Laut Premium",
      // ... more content
    }
  }
};
```

### Updating Contact Information

Edit the `contactInfo` object in `/content/site-content.ts`:

```typescript
export const contactInfo = {
  whatsapp: "+6285271188910",
  whatsappLink: "https://wa.me/6285271188910",
  instagram: "https://www.instagram.com/semujurisland12?igsh=Y3Btb2w1cWV6Mnoz",
  email: "semujurisland4@gmail.com",
  logo: "/logo.webp"
};
```

### Adding Images

Replace the placeholder images with your actual photos:

1. **Logo**: Place your logo at `/public/logo.webp`
2. **Gallery Images**: Place images in `/public/images/gallery/`:
   - `anemone.jpg` - Sea Anemone photo
   - `clownfish.jpg` - Clownfish photo
   - `angelfish.jpg` - Angelfish photo
   - `blue-tang.jpg` - Blue Tang fish photo

**Recommended Image Specs:**
- Format: JPG, PNG, or WebP
- Size: 1200x1200px for gallery images
- Aspect Ratio: Square (1:1) for best results

## Design Customization

### Color Scheme

The design uses ocean-inspired colors:
- **Deep Ocean Blue**: `#0f172a` (slate-900)
- **Cyan**: `#06b6d4` (cyan-500)
- **Coral Pink**: `#ec4899` (pink-500)

To change colors, edit Tailwind classes in component files or update the theme in `tailwind.config.ts`.

### Animations

All animations use Framer Motion. To customize:
- Edit animation variants in component files
- Adjust `initial`, `animate`, and `transition` props
- Modify scroll trigger settings in `useInView` hooks

## Sections Overview

### 1. Navbar
- Sticky header with blur effect
- Language switcher (EN/ID)
- Smooth scroll navigation
- Mobile-responsive menu

### 2. Hero Section
- Eye-catching headline
- Animated entrance
- Direct WhatsApp CTA button
- Scroll indicator

### 3. About Us
- Company story
- Mission and Vision cards
- Fade-in animations

### 4. Services
- Three service cards:
  - Saltwater Fish
  - Coral Reef Collections
  - Natural Seawater
- Icon-based design

### 5. Gallery
- 4-image grid layout
- Click to open lightbox
- Smooth transitions
- Image titles on hover

### 6. Testimonials
- 3 customer reviews
- 5-star ratings
- Quote icons
- Hover effects

### 7. Contact
- WhatsApp link
- Instagram link
- Email link
- Social media integration

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance

- Static site generation for optimal performance
- Image optimization with Next.js Image component
- Lazy loading for animations
- Minimal JavaScript bundle

## SEO

The site includes:
- Proper meta tags
- Open Graph tags
- Twitter Card tags
- Semantic HTML structure
- Smooth scroll behavior

## Deployment

### Netlify (Recommended)

The project is pre-configured for Netlify:

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Deploy automatically

### Vercel

```bash
npm install -g vercel
vercel
```

### Other Platforms

Build the static site and deploy the `.next` folder:

```bash
npm run build
```

## Support

For questions or issues:
- Email: semujurisland4@gmail.com
- WhatsApp: +62 852-7118-8910

## License

© 2024 SEMUJUR ISLAND. All rights reserved.
