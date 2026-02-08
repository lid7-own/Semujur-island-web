# SEMUJUR ISLAND - Complete Project Structure

## 📁 Directory Overview

```
semujur-island/
│
├── 📂 app/                          # Next.js App Router
│   ├── layout.tsx                   # Root layout, metadata, fonts
│   ├── page.tsx                     # Main landing page (all sections)
│   └── globals.css                  # Global styles, Tailwind config
│
├── 📂 components/                   # React Components
│   ├── Navbar.tsx                   # Sticky navigation + language switcher
│   ├── Hero.tsx                     # Hero section with CTA
│   ├── About.tsx                    # About Us (Mission & Vision)
│   ├── Services.tsx                 # Services/Products cards
│   ├── Gallery.tsx                  # Photo gallery + lightbox
│   ├── Testimonials.tsx             # Customer reviews with ratings
│   └── Contact.tsx                  # Contact information + social links
│
├── 📂 context/                      # React Context
│   └── LanguageContext.tsx          # Language state management (EN/ID)
│
├── 📂 content/                      # Content Management (CMS)
│   └── site-content.ts              # ⭐ ALL TEXT CONTENT HERE
│                                     #    - English translations
│                                     #    - Indonesian translations
│                                     #    - Contact info
│                                     #    - Image paths
│
├── 📂 public/                       # Static Assets
│   ├── logo.webp                    # Company logo
│   └── 📂 images/
│       ├── README.md                # Image placement guide
│       └── 📂 gallery/              # Gallery photos
│           ├── anemone.jpg          # Photo 1
│           ├── clownfish.jpg        # Photo 2
│           ├── angelfish.jpg        # Photo 3
│           └── blue-tang.jpg        # Photo 4
│
├── 📂 hooks/                        # Custom React Hooks
│   └── use-toast.ts                 # Toast notification system
│
├── 📂 lib/                          # Utility Functions
│   └── utils.ts                     # Helper functions
│
├── 📂 components/ui/                # shadcn/ui Components
│   └── [Various UI components]      # Pre-built UI elements
│
├── 📄 package.json                  # Dependencies
├── 📄 next.config.js                # Next.js configuration
├── 📄 tailwind.config.ts            # Tailwind CSS configuration
├── 📄 tsconfig.json                 # TypeScript configuration
├── 📄 README.md                     # Project documentation
├── 📄 CONTENT-GUIDE.md              # Content update guide
└── 📄 PROJECT-STRUCTURE.md          # This file

```

## 🎯 Key Files for Customization

### 1. Content Management
**File**: `content/site-content.ts`
- Contains ALL text content
- English and Indonesian translations
- Easy to edit without touching code
- Single source of truth

### 2. Images
**Folder**: `public/images/gallery/`
- Replace placeholder images with real photos
- Keep the same filenames
- Recommended: 1200x1200px, square aspect ratio

### 3. Contact Information
**File**: `content/site-content.ts` (contactInfo object)
- WhatsApp number and link
- Instagram URL
- Email address
- Logo path

## 🧩 Component Breakdown

### Navbar.tsx (Navigation)
**Features:**
- Sticky header with blur effect
- Language switcher (EN/ID)
- Smooth scroll to sections
- Mobile responsive menu
- Logo integration

**Props:** None (uses LanguageContext)

**Styling:**
- Background: Transparent → Blur on scroll
- Colors: Slate-900, Cyan-400

---

### Hero.tsx (Hero Section)
**Features:**
- Large headline with subtitle
- Animated entrance (fade-in)
- WhatsApp CTA button
- Scroll indicator animation
- Ocean gradient background

**Props:** None (uses LanguageContext)

**Animations:**
- Fade in from bottom
- Staggered text animations
- Bounce scroll indicator

---

### About.tsx (About Section)
**Features:**
- Company description
- Mission card with icon
- Vision card with icon
- Scroll-triggered animations

**Props:** None (uses LanguageContext)

**Layout:** 2-column grid on desktop

---

### Services.tsx (Services Section)
**Features:**
- 3 service cards
- Icon for each service
- Hover animations
- Dark ocean theme

**Props:** None (uses LanguageContext)

**Services Displayed:**
1. Saltwater Fish (Fish icon)
2. Coral Reef Collections (Waves icon)
3. Natural Seawater (Droplet icon)

---

### Gallery.tsx (Gallery Section)
**Features:**
- 4-image grid
- Lightbox on click
- Hover effects
- Smooth transitions
- Close button in lightbox

**Props:** None (uses LanguageContext)

**Images:**
- Anemone
- Clownfish
- Angelfish
- Blue Tang

---

### Testimonials.tsx (Testimonials Section)
**Features:**
- 3 testimonial cards
- 5-star rating display
- Quote icons
- Customer name and role
- Hover effects

**Props:** None (uses LanguageContext)

**Layout:** 3-column grid

---

### Contact.tsx (Contact Section)
**Features:**
- 3 contact method cards
- WhatsApp link
- Instagram link
- Email link
- Gradient icons
- Footer text

**Props:** None (uses LanguageContext)

---

## 🎨 Design System

### Colors
```typescript
// Primary Colors
Ocean Blue:   #0f172a (slate-900)
Cyan:         #06b6d4 (cyan-500)
Light Cyan:   #22d3ee (cyan-400)

// Accent Colors
Coral Pink:   #ec4899 (pink-500)
Blue:         #3b82f6 (blue-500)

// Gradients
Primary:      from-slate-900 via-blue-900 to-cyan-900
Hero:         from-slate-900 via-blue-900 to-slate-900
Services:     from-slate-900 via-blue-900 to-slate-900
```

### Typography
```typescript
// Headings
H1: 5xl → 7xl (48px → 72px)
H2: 4xl → 5xl (36px → 48px)
H3: 2xl (24px)

// Body Text
Large: xl (20px)
Regular: lg (18px)
Small: base (16px)
```

### Spacing
```typescript
Section Padding: py-24 (96px)
Container: max-w-7xl (1280px)
Gap: 8 (32px) for grids
```

### Animations
```typescript
Duration: 0.8s for most animations
Delay: Staggered by 0.2s
Hover: scale(1.05) or y(-10px)
Transition: ease-out
```

## 🔧 Technical Details

### Dependencies
```json
{
  "next": "13.5.1",
  "react": "18.2.0",
  "framer-motion": "latest",
  "lucide-react": "latest",
  "tailwindcss": "3.3.3"
}
```

### Page Performance
- Static Site Generation (SSG)
- Optimized images with Next.js Image
- Lazy loading animations
- Minimal JavaScript bundle

### Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- iOS Safari
- Chrome Mobile

## 📱 Responsive Breakpoints

```css
sm: 640px   (Mobile landscape)
md: 768px   (Tablet)
lg: 1024px  (Desktop)
xl: 1280px  (Large desktop)
```

### Mobile Optimizations
- Hamburger menu on mobile
- Stacked sections
- Touch-friendly buttons
- Optimized image sizes

## 🚀 Deployment Checklist

- [ ] Replace placeholder images
- [ ] Update all text content
- [ ] Verify contact information
- [ ] Test both languages
- [ ] Check mobile responsiveness
- [ ] Test all links (WhatsApp, Instagram, Email)
- [ ] Run `npm run build`
- [ ] Deploy to hosting

## 📞 Contact Information

**SEMUJUR ISLAND**
- WhatsApp: +62 852-7118-8910
- Instagram: @semujurisland12
- Email: semujurisland4@gmail.com

---

**Last Updated**: 2024
**Version**: 1.0.0
**Framework**: Next.js 13
**License**: © 2024 SEMUJUR ISLAND
