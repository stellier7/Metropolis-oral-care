# Metrópolis Oral Care

Mobile-first, bilingual (ES/EN) dental practice website built from the [dentist-template](https://github.com/stellier7/dentist-template).

All client-specific content lives in `js/config.js`. Drop image assets under `assets/images/` (see TODO comments in config).

## Quick start

```bash
npx serve .
# or: python3 -m http.server 3000
```

Visit `http://localhost:3000` and use the **ES / EN** toggle to switch languages.

## Image assets directory

Drop client images here:

```
assets/images/
  logo.png              ← branding.logoUrl (optional)
  hero.jpg              ← branding.heroImageUrl
  dentist.jpg           ← dentists[].photoUrl
  gallery/              ← gallery[] (when ready)
  financing/            ← financingImages[] (BAC + Ficohsa included)
```
