# The Four Udasis - Cinematic Journey

A Next.js web experience depicting the four sacred journeys (Udasis) of Guru Nanak Dev Ji through immersive 3D parallax animations, cinematic visuals, and smooth scrolling interactions.

## 🎨 Project Overview

This project creates a scrollable, cinematic website similar to [Prometheus Fuels](https://prometheusfuels.com/) but tailored to tell the story of Guru Nanak Dev Ji's four Udasis:

1. **East (Bengal & Assam)** - The Awakening
2. **South (Sri Lanka)** - The Vastness of Unity
3. **North (Tibet & Kashmir)** - Into the Silence
4. **West (Mecca & Baghdad)** - The Path of Truth

## 🚀 Tech Stack

- **Next.js 14+** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling with custom color palettes
- **Framer Motion** - Animations and scroll triggers
- **Three.js + React Three Fiber** - 3D rendering (ready for advanced scenes)
- **Lenis** - Smooth scrolling
- **GSAP** - Advanced timeline animations (ready to use)

## 📦 Installation & Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Color Palettes

Each Udasi has its own cinematic color palette:

### East (Udasi 1)
- Saffron: `#FF9944`
- Gold: `#FFD57E`
- Teal: `#468C98`

### South (Udasi 2)
- Ocean: `#345D9D`
- Turquoise: `#89CFF0`
- Coral: `#FF7A5C`

### North (Udasi 3)
- Frost: `#F4F4F4`
- Slate: `#778899`
- Crimson: `#B23A48`

### West (Udasi 4)
- Sand: `#C9A46A`
- Midnight: `#1A2238`
- Moonlight: `#E9E3D0`

## 📁 Project Structure

```
udasis/
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Main page with all scenes
│   └── globals.css         # Global styles & Tailwind
├── components/
│   ├── scenes/
│   │   ├── UdasiOne.tsx    # East journey scene
│   │   ├── UdasiTwo.tsx    # South journey scene
│   │   ├── UdasiThree.tsx  # North journey scene
│   │   └── UdasiFour.tsx   # West journey scene
│   ├── 3d/
│   │   ├── ParallaxLayer.tsx       # Parallax scroll effect
│   │   └── AtmosphericEffects.tsx  # Particles (mist, dust, snow, stars)
│   ├── ui/
│   │   ├── ChapterTitle.tsx        # Animated chapter titles
│   │   └── ScrollProgress.tsx      # Progress bar
│   └── SmoothScroll.tsx    # Lenis smooth scroll wrapper
├── public/
│   └── assets/             # Place images/videos here
│       ├── udasi1/
│       ├── udasi2/
│       ├── udasi3/
│       └── udasi4/
└── lib/                    # Utility functions (ready to add)
```

## 🎬 Adding Assets

### Image Assets
Place your cinematic images in the appropriate folder:
- Background layers: `public/assets/udasi[1-4]/bg_*.webp`
- Midground elements: `public/assets/udasi[1-4]/mg_*.png`
- Foreground elements: `public/assets/udasi[1-4]/fg_*.png`

### Using Images in Components
```tsx
import Image from 'next/image';

<Image
  src="/assets/udasi1/bg_sunrise.webp"
  alt="Bengal sunrise"
  fill
  className="object-cover"
  priority
/>
```

## 🎨 Customization Guide

### Adjust Parallax Speed
In scene components, modify the `speed` prop:
```tsx
<ParallaxLayer speed={0.5}>  {/* 0 = static, 1 = fast */}
```

### Change Atmospheric Effects
```tsx
<AtmosphericEffects
  type="mist"           // 'mist' | 'dust' | 'snow' | 'stars'
  intensity={30}         // Number of particles
  color="rgba(255, 213, 126, 0.2)"
/>
```

### Modify Animation Timing
```tsx
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 1.5, delay: 0.3 }}
>
```

## 🎥 Next Steps

### 1. Add Real Images
Replace placeholder emojis with actual cinematic images following your style guide.

### 2. Advanced 3D Scenes
Use React Three Fiber for interactive 3D elements:
```tsx
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
```

### 3. Add Sound Design
Install `howler.js` for ambient sounds:
```bash
npm install howler @types/howler
```

### 4. Optimize Performance
- Use `next/image` for all images
- Lazy load components with `next/dynamic`
- Add loading states

### 5. Enhanced Interactions
- Add cursor effects
- Implement GSAP timelines for complex animations
- Add scroll-snapping for section transitions

## 🔧 Configuration

### Tailwind Config
Custom colors, fonts, and animations are defined in [tailwind.config.ts](tailwind.config.ts)

### Next.js Config
Image optimization and webpack settings in [next.config.mjs](next.config.mjs)

## 📖 Documentation References

- [Style Guide](./styleguide.md)
- [Character Guide](./gurunanakcharacterguide.md)
- [Asset Details](./assetsDetails.csv)

## 🙏 Credits

**Created by:** Amandeep Singh
**Purpose:** To honor the sacred journey of Guru Nanak Dev Ji through modern cinematic storytelling

---

*"The Journey Never Ends" - ੴ*
