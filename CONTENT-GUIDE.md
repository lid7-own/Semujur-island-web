# Content Update Guide - SEMUJUR ISLAND

This guide will help you easily update the content on your website without technical knowledge.

## Where is Everything?

All your website content is in **ONE FILE**: `/content/site-content.ts`

## How to Update Content

### Step 1: Open the Content File

Navigate to: `content/site-content.ts`

### Step 2: Find What You Want to Change

The file is organized by sections:

```
- nav (Navigation menu)
- hero (Main banner)
- about (About Us section)
- services (Your services)
- gallery (Photo gallery)
- testimonials (Customer reviews)
- contact (Contact information)
```

### Step 3: Edit the Text

#### Example 1: Change Hero Title

**Find this:**
```typescript
hero: {
  title: "SEMUJUR ISLAND",
  subtitle: "Premium Marine Aquarium Experience",
  description: "Discover the finest collection...",
  cta: "Contact Us on WhatsApp"
}
```

**Change the text inside the quotes:**
```typescript
hero: {
  title: "YOUR NEW TITLE",
  subtitle: "Your New Subtitle",
  description: "Your new description...",
  cta: "Your New Button Text"
}
```

#### Example 2: Update Contact Information

**Find this:**
```typescript
export const contactInfo = {
  whatsapp: "+6285271188910",
  whatsappLink: "https://wa.me/6285271188910",
  instagram: "https://www.instagram.com/...",
  email: "semujurisland4@gmail.com",
  logo: "/logo.webp"
};
```

**Change the values:**
```typescript
export const contactInfo = {
  whatsapp: "+62YOURNUMBER",
  whatsappLink: "https://wa.me/62YOURNUMBER",
  instagram: "https://www.instagram.com/YOUR_HANDLE",
  email: "youremail@example.com",
  logo: "/logo.webp"
};
```

## Common Updates

### Update Services

Find the `services` section and edit:

```typescript
services: {
  title: "Our Services",
  subtitle: "Premium Marine Solutions",
  items: [
    {
      title: "Saltwater Fish",  // Change this
      description: "Your description here",  // Change this
      icon: "fish"  // Don't change this
    },
    // ... more items
  ]
}
```

### Update Testimonials

Find the `testimonials` section:

```typescript
testimonials: {
  items: [
    {
      name: "Customer Name",  // Change this
      role: "Their Role",  // Change this
      text: "Their review",  // Change this
      rating: 5  // Keep this as 5 for 5 stars
    },
    // ... more testimonials
  ]
}
```

### Update About Us

Find the `about` section:

```typescript
about: {
  title: "About Us",
  description: "Your company description...",
  mission: "Our Mission",
  missionText: "Your mission statement...",
  vision: "Our Vision",
  visionText: "Your vision statement..."
}
```

## Important Notes

### Both Languages

The file has TWO languages: `en` (English) and `id` (Indonesian).

When you update content, **update BOTH languages**:

```typescript
export const siteContent = {
  en: {
    // English content here
  },
  id: {
    // Indonesian content here
  }
};
```

### Keep the Structure

- Don't remove the commas (`,`)
- Don't remove the quotes (`"` or `'`)
- Don't change the keys (left side before `:`)
- Only change the values (right side after `:`)

### Icons

Don't change these icon names:
- `"fish"`
- `"waves"`
- `"droplet"`

They control which icon appears.

## Updating Images

### Logo

1. Replace the file: `/public/logo.webp`
2. Keep the same filename: `logo.webp`

### Gallery Images

Replace these files in `/public/images/gallery/`:
- `anemone.jpg` - Your first photo
- `clownfish.jpg` - Your second photo
- `angelfish.jpg` - Your third photo
- `blue-tang.jpg` - Your fourth photo

**Important**: Keep the exact same filenames!

## After Making Changes

1. Save the file
2. Refresh your browser
3. If developing locally, the changes appear automatically
4. If on production, deploy the changes

## Need Help?

If something breaks:

1. **Check for missing commas**: Each line should end with `,` except the last one in a section
2. **Check for missing quotes**: All text should be inside `"quotes"`
3. **Check for matching brackets**: Every `{` needs a closing `}`

## Quick Checklist

- [ ] Updated English (`en`) content
- [ ] Updated Indonesian (`id`) content
- [ ] Kept all commas and quotes
- [ ] Saved the file
- [ ] Tested on the website

## Examples of Common Mistakes

### ❌ Wrong (Missing comma)

```typescript
hero: {
  title: "SEMUJUR ISLAND"  // Missing comma!
  subtitle: "Premium Marine Aquarium Experience"
}
```

### ✅ Correct

```typescript
hero: {
  title: "SEMUJUR ISLAND",  // Has comma
  subtitle: "Premium Marine Aquarium Experience"
}
```

### ❌ Wrong (Missing quote)

```typescript
email: semujurisland4@gmail.com  // Missing quotes!
```

### ✅ Correct

```typescript
email: "semujurisland4@gmail.com"  // Has quotes
```

## Contact for Technical Help

- Email: semujurisland4@gmail.com
- WhatsApp: +62 852-7118-8910

---

**Remember**: The content file is your control center. Update it carefully, and your website will reflect the changes!
