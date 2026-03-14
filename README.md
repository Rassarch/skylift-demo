# Skylift Fitness Center — Website

Website premium untuk **Skylift Fitness Center**, Kota Metro, Lampung.

## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS v3**
- **Motion.dev** — animasi & transitions
- **@phosphor-icons/react** — icon library
- **React Hook Form + Zod** — form validation
- **clsx + tailwind-merge** — class utilities

## Cara Menjalankan

### 1. Install dependencies
```bash
npm install
```

### 2. Jalankan development server
```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000)

### 3. Build untuk production
```bash
npm run build
npm start
```

## Deploy ke Vercel

1. Push ke GitHub
2. Import repo di [vercel.com](https://vercel.com)
3. Deploy otomatis — zero config!

## Struktur Folder

```
src/
├── app/
│   ├── layout.tsx       # Root layout + font setup
│   ├── page.tsx         # Homepage
│   └── globals.css      # Global styles + custom cursor
├── components/
│   ├── ui/
│   │   ├── LoadingScreen.tsx   # Animated loading screen
│   │   ├── CustomCursor.tsx    # Custom orange cursor
│   │   ├── FloatingWA.tsx      # Floating WhatsApp button
│   │   └── Reveal.tsx          # Scroll reveal wrapper
│   ├── layout/
│   │   ├── Navbar.tsx          # Sticky navbar + mobile menu
│   │   └── Footer.tsx          # Footer
│   └── sections/
│       ├── Hero.tsx            # Hero section + ticker
│       ├── Stats.tsx           # Stats bar
│       ├── About.tsx           # About / brand story
│       ├── Facilities.tsx      # Fasilitas grid
│       ├── Schedule.tsx        # Jadwal kelas interaktif
│       ├── Membership.tsx      # Paket harga
│       ├── Reviews.tsx         # Testimoni carousel
│       └── Contact.tsx         # Form + info kontak
└── lib/
    └── utils.ts                # Data constants + cn()
```

## Fitur

- ✅ Loading screen dengan progress counter
- ✅ Custom cursor (orange dot + ring)
- ✅ Sticky navbar dengan scroll effect + mobile menu
- ✅ Hero dengan parallax + ticker
- ✅ Stats section dengan animated numbers
- ✅ Facilities grid dengan hover effects
- ✅ Jadwal kelas interaktif (filter per hari)
- ✅ Membership cards dengan WhatsApp integration
- ✅ Review carousel
- ✅ Form kontak → langsung ke WhatsApp
- ✅ Floating WhatsApp button
- ✅ Custom scrollbar
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Dark industrial aesthetic (orange + concrete + dark)

## Kustomisasi

Edit data di `src/lib/utils.ts`:
- `FACILITIES` — fasilitas gym
- `MEMBERSHIPS` — paket harga
- `REVIEWS` — testimoni
- `SCHEDULES` — jadwal kelas
- `STATS` — angka statistik

Edit nomor WhatsApp di `src/lib/utils.ts` atau cari `6282160966686` dan replace dengan nomor yang benar.
