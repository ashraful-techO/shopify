# GHLAM Shopify Store

A luxury modest-fashion storefront built on Shopify using the officially purchased **Prestige** theme and customised for the GHLAM brand.

The project follows a minimal, editorial, and timeless visual direction with warm ivory, beige, taupe, charcoal, and gold accents.

---

## Store Preview

> Replace the image filenames below with the exact filenames inside your `views` folder.

### Desktop

### Mobile

---

## Project Overview

- **Platform:** Shopify
- **Theme:** Prestige
- **Brand:** GHLAM
- **Industry:** Luxury modest fashion
- **Primary market:** Australia
- **Template language:** Liquid
- **Styling:** CSS
- **Scripts:** JavaScript
- **Development workflow:** Shopify CLI + GitHub

---

## Brand Direction

GHLAM is designed around a luxury editorial aesthetic.

### Visual Style

- Luxury
- Minimal
- Editorial
- Timeless
- Modest
- Premium

### Colour Palette

| Purpose | HEX |
|---|---|
| Warm ivory background | `#F8F3EE` |
| Secondary cream | `#F4EFE8` |
| Primary text | `#2B241F` |
| Muted text | `#6F655D` |
| Gold accent | `#B89A5A` |
| Gold hover | `#A7884C` |
| Border | `#E4D9CD` |
| White | `#FFFFFF` |

### Typography

- Elegant serif font for headings
- Modern sans-serif font for body content
- Uppercase editorial section titles
- Generous spacing and refined letter spacing

---

## Homepage Structure

The homepage follows the approved GHLAM blueprint:

1. Announcement bar
2. Transparent header
3. Full-screen hero slider
4. New arrivals
5. Shop by category
6. The GHLAM story
7. Featured collection
8. Why choose GHLAM
9. Customer reviews
10. Instagram gallery
11. Newsletter
12. Footer

---

## Custom Sections

```text
sections/
├── custom-footer.liquid
├── ghlam-hero-slider.liquid
├── ghlam-new-arrivals.liquid
├── ghlam-category-grid.liquid
├── ghlam-story-section.liquid
└── ghlam-featured-collection.liquid
```

Associated assets:

```text
assets/
├── custom-footer.css
├── ghlam-hero-slider.css
├── ghlam-hero-slider.js
├── ghlam-new-arrivals.css
├── ghlam-category-grid.css
├── ghlam-story-section.css
└── ghlam-featured-collection.css
```

---

## Features

### Header

- Prestige mega menu
- Transparent header support
- Search
- Customer account
- Cart drawer
- Currency and country selector
- Mobile navigation drawer

### Hero Slider

- Image slides
- Video slides
- Separate desktop and mobile media
- Autoplay
- Swipe support
- Pagination dots
- Configurable image positioning
- Editable overlay content
- Collection CTA button

### Product Sections

- Dynamic Shopify collection selection
- Four-column desktop layout
- Two-product mobile slider
- Product title and price
- Sale pricing
- View-all collection links
- Mobile pagination dots

### Category Grid

- Four-column desktop layout
- Two-by-two mobile grid
- Collection links
- Image overlays
- Hover animation
- Custom links

### Story Section

- Split editorial layout
- Separate desktop and mobile styling
- Editable image, heading, text, and CTA
- Custom mobile image crop positioning

### Footer

- Shopify newsletter form
- Dynamic navigation menus
- Social media icons
- Mobile accordion menus
- Optional payment icons
- Editable colours and content

---

## Responsive Design

The storefront is optimised for:

- Desktop
- Laptop
- Tablet
- Mobile

Mobile-specific behaviour includes:

- Two-column product cards
- Swipeable product sliders
- Portrait hero media
- Accordion footer menus
- Touch-friendly buttons
- Mobile-specific image cropping

---

## Project Structure

```text
.
├── assets
├── blocks
├── config
├── layout
├── locales
├── sections
├── snippets
├── templates
├── views
└── README.md
```

The `views` folder contains project screenshots used in this README.

---

## Local Development

### Requirements

Install:

- Node.js
- Shopify CLI
- Git

Check Shopify CLI:

```bash
shopify version
```

Log in:

```bash
shopify auth login
```

---

## Run the Theme Locally

From the project root:

```bash
shopify theme dev --store your-store.myshopify.com
```

Example:

```bash
shopify theme dev --store ghlamofficial.myshopify.com
```

Shopify CLI will provide:

- Local preview URL
- Theme Editor URL
- Development theme preview

While the command is running, local changes sync to the development theme.

---

## Pull Theme Changes

```bash
shopify theme pull --store your-store.myshopify.com
```

Pull a specific theme:

```bash
shopify theme pull \
  --store your-store.myshopify.com \
  --theme THEME_ID
```

---

## Push Theme Changes

Push to an unpublished theme:

```bash
shopify theme push \
  --store your-store.myshopify.com \
  --unpublished
```

Push to a specific theme:

```bash
shopify theme push \
  --store your-store.myshopify.com \
  --theme THEME_ID
```

Avoid pushing directly to the live theme before testing.

---

## Recommended Workflow

1. Pull the latest theme.
2. Start `shopify theme dev`.
3. Make local changes.
4. Test desktop, tablet, and mobile.
5. Review Theme Editor settings.
6. Commit changes to Git.
7. Push to an unpublished Shopify theme.
8. Perform final QA.
9. Publish after approval.

---

## Git Workflow

Create a branch:

```bash
git checkout -b feature/section-name
```

Stage changes:

```bash
git add .
```

Commit changes:

```bash
git commit -m "Add GHLAM featured collection section"
```

Push branch:

```bash
git push origin feature/section-name
```

---

## Shopify Configuration

Navigation menus:

```text
Shopify Admin
→ Content
→ Menus
```

Collections:

```text
Shopify Admin
→ Products
→ Collections
```

Social media links:

```text
Theme Editor
→ Theme settings
→ Social media
```

Homepage and footer sections:

```text
Online Store
→ Themes
→ Customize
```

---

## Performance Guidelines

- Use Shopify responsive image filters
- Include image width and height attributes
- Lazy-load below-the-fold images
- Use eager loading only for the first hero slide
- Upload separate portrait media for mobile
- Compress large images and videos
- Avoid unnecessary external scripts
- Keep custom JavaScript modular

---

## SEO Checklist

- Product and collection meta titles
- Meta descriptions
- Descriptive image ALT text
- Clean collection URLs
- Internal links
- Structured data
- XML sitemap
- Robots.txt review
- Google Search Console
- Google Merchant Center

---

## Testing Checklist

Before publishing, test:

- Header navigation
- Mega menus
- Mobile drawer
- Search
- Product links
- Collection links
- Cart drawer
- Newsletter form
- Social links
- Footer accordions
- Desktop layout
- Tablet layout
- Mobile layout
- Image cropping
- Video autoplay
- Shopify checkout

---

## Screenshot Setup

Recommended names inside the `views` folder:

```text
views/
├── desktop-homepage.png
├── mobile-homepage.png
├── header.png
├── mobile-menu.png
├── footer.png
└── mobile-footer.png
```

GitHub paths are case-sensitive. Make sure the names in this README exactly match the image filenames in the repository.

Example:

```md
![Desktop Homepage](views/desktop-homepage.png)
```

---

## Important Notes

- This project uses the officially purchased Prestige theme.
- Original theme functionality should be preserved wherever possible.
- Custom sections should remain editable in the Shopify Theme Editor.
- Do not modify the approved branding, layout, or customer journey without client approval.
- Never commit Shopify credentials, access tokens, or private environment files.

---

## Licence

This repository contains customisations for a commercially purchased Shopify theme.

The Prestige theme source code must not be redistributed, resold, or shared outside the licensed project.

---

## Author

Developed for **GHLAM**.

Luxury modest fashion crafted with elegance, intention, and timeless style.
