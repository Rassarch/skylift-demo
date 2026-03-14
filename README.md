# 🏋️ Skylift Fitness Center — Official Website

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Motion](https://img.shields.io/badge/Motion.dev-11-FF5733?style=for-the-badge)
![Phosphor Icons](https://img.shields.io/badge/Phosphor_Icons-2.1-8B5CF6?style=for-the-badge)

**Website resmi Skylift Fitness Center — gym premium berstandar internasional di Kota Metro, Lampung.**

[🌐 Live Demo](#) · [📸 Instagram @skyliftgym](https://instagram.com/skyliftgym) · [📍 Google Maps](https://maps.google.com/?q=Skylift+Fitness+Center+Metro+Lampung)

</div>

---

## 🔥 Tentang Proyek

Website ini dibangun untuk **Skylift Fitness Center** (`@skyliftgym`), mega gym pertama di Kota Metro, Lampung yang resmi dibuka pada Mei 2025 dan diresmikan langsung oleh Walikota Metro. Dengan rating **4.7 ⭐ di Google Maps** dan lebih dari 5.400 followers Instagram, Skylift memposisikan diri sebagai pusat kebugaran premium berstandar internasional pertama di kota Metro.

Desain website terinspirasi langsung dari interior fisik gym — **dark industrial aesthetic** dengan dominasi orange yang kuat, concrete texture, dan tipografi bold yang mencerminkan karakter premium sekaligus raw dari brand Skylift.

---

## ✨ Fitur Unggulan

### 🎬 Animasi & Interaksi (Motion.dev)
- **Loading screen** — progress counter animated + smooth fade exit
- **Custom cursor** — orange dot + lagging ring effect (full desktop)
- **Hero reveal** — staggered word-by-word animation dengan easing custom
- **Parallax scrolling** — hero title dan background bergerak saat scroll
- **Hover microinteractions** — card fill dari bawah, top accent line, icon color transition
- **Mobile menu** — full-screen overlay dengan clip-path animation

### 📄 Sections
| Section | Deskripsi |
|---|---|
| **Hero** | Big typography, parallax, animated ticker 11 program, stats card |
| **Stats Bar** | 6 angka kunci dengan scroll-triggered entrance |
| **About** | Brand story + ilustrasi SVG interior gym |
| **Facilities** | Grid 6 fasilitas dengan hover state premium |
| **Programs** | 11 program dengan filter kategori + animated layout transitions |
| **Schedule** | Jadwal kelas interaktif per hari (Senin–Minggu) |
| **Membership** | 4 paket harga, direct CTA ke WhatsApp |
| **Reviews** | Carousel testimoni dari Google Maps |
| **Contact** | Form pendaftaran → otomatis buka WhatsApp dengan pesan terformat |

### 💅 Detail Premium
- Custom orange scrollbar
- Floating WhatsApp button dengan live ping indicator
- Responsive penuh — mobile, tablet, desktop
- `cursor: none` + fully custom cursor di desktop
- Form validation dengan React Hook Form + Zod

---

## 🏟️ Tentang Skylift Fitness Center

> *"The best fitness gym in the area. Have a lot of programs, new tools, sauna room, clean bathroom & toilets, amazing services from all the staff."*
> — Cahya Sukma Riyandi, Local Guide (Google Maps)

**Skylift Fitness Center** hadir sebagai jawaban bagi warga Kota Metro yang selama ini harus pergi ke luar kota untuk merasakan gym premium. Didirikan oleh Koh Ivan dan diresmikan Mei 2025, Skylift menawarkan:

- 🏋️ **100+ alat impor** berstandar internasional
- 🧘 **11 program & kelas** — Aerobics, Kickboxing, Yoga, Aerial Yoga, Zumba, dan lainnya
- 🔥 **Sauna gratis** untuk seluruh member aktif
- 🎓 **Personal Trainer bersertifikat** + Nutrition Consulting
- 👦 **Youth Classes** khusus usia 10–17 tahun
- ☕ **Souleats Cafe** — healthy cafe in-house
- 📍 Jl. Brigjend Sutiyoso, Metro Pusat, Kota Metro, Lampung
- 🕐 Buka setiap hari pukul 07.00–22.30 WIB

**Harga membership** mulai dari Rp 40.000/hari hingga Rp 250.000/bulan (unlimited).

---

## 🛠️ Tech Stack

```
Framework     Next.js 15 (App Router)
Language      TypeScript 5.6
Styling       Tailwind CSS 3.4
Animation     Motion.dev 11
Icons         @phosphor-icons/react 2.1
Forms         React Hook Form + Zod + @hookform/resolvers
Utilities     clsx + tailwind-merge
Fonts         Bebas Neue (display) · DM Sans (body) via next/font/google
Deployment    Vercel (recommended)
```

---

## 📁 Struktur Proyek

```
skylift/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout — font setup, metadata
│   │   ├── page.tsx            # Homepage — assembly semua sections
│   │   └── globals.css         # Global styles, custom cursor, scrollbar
│   ├── components/
│   │   ├── ui/
│   │   │   ├── LoadingScreen.tsx   # Animated loading screen
│   │   │   ├── CustomCursor.tsx    # Custom orange cursor
│   │   │   ├── FloatingWA.tsx      # Floating WhatsApp button
│   │   │   └── Reveal.tsx          # Scroll reveal wrapper utility
│   │   ├── layout/
│   │   │   ├── Navbar.tsx          # Sticky navbar + glass scroll effect + mobile menu
│   │   │   └── Footer.tsx          # Footer dengan social links
│   │   └── sections/
│   │       ├── Hero.tsx            # Hero + parallax + animated ticker
│   │       ├── Stats.tsx           # Stats bar (6 angka kunci)
│   │       ├── About.tsx           # Brand story + interior illustration
│   │       ├── Facilities.tsx      # Fasilitas grid (6 cards)
│   │       ├── Programs.tsx        # 11 program + filter kategori ✨
│   │       ├── Schedule.tsx        # Jadwal kelas interaktif (7 hari)
│   │       ├── Membership.tsx      # Paket harga + WA integration
│   │       ├── Reviews.tsx         # Testimoni carousel
│   │       └── Contact.tsx         # Form + info lokasi
│   ├── hooks/
│   │   └── useCustomCursor.ts      # Custom cursor logic
│   └── lib/
│       └── utils.ts                # Data constants (PROGRAMS, SCHEDULES, dll) + cn()
├── tailwind.config.js
├── next.config.js
├── tsconfig.json
└── package.json
```

---

## 🚀 Cara Menjalankan

### Prerequisites
- Node.js 18+
- npm / yarn / pnpm

### 1. Clone repo
```bash
git clone https://github.com/username/skylift-fitness.git
cd skylift-fitness
```

### 2. Install dependencies
```bash
npm install
```

### 3. Jalankan development server
```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

### 4. Build production
```bash
npm run build
npm start
```

---

## ☁️ Deploy ke Vercel

Cara tercepat untuk deploy:

1. Push repo ke GitHub
2. Buka [vercel.com/new](https://vercel.com/new)
3. Import repo ini
4. Klik **Deploy** — zero config, otomatis detect Next.js

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

---

## ⚙️ Kustomisasi

Semua data konten ada di satu file: **`src/lib/utils.ts`**

```ts
// Ubah nomor WhatsApp
// Cari: 6282160966686
// Ganti dengan nomor WA aktif Skylift

// Edit program & kelas
export const PROGRAMS = [ ... ]

// Edit jadwal
export const SCHEDULES = [ ... ]

// Edit paket harga
export const MEMBERSHIPS = [ ... ]

// Edit fasilitas
export const FACILITIES = [ ... ]

// Edit testimoni
export const REVIEWS = [ ... ]
```

---

## 🎨 Design System

```
Background    #0e0e0d  (near black)
Surface       #161614 / #1e1e1b
Orange        #E8571A  (brand accent — diambil dari interior gym)
Concrete      #8a8880  (secondary text)
White         #f0ede8  (primary text)

Display Font  Bebas Neue  (headings, numbers, labels)
Body Font     DM Sans 300/400/500  (paragraf, UI)
```

---

## 📜 Lisensi

Proyek ini dibuat secara custom untuk **Skylift Fitness Center**, Kota Metro, Lampung.  
© 2025 Skylift Fitness Center. All rights reserved.

---

<div align="center">
  <sub>Built with ❤️ for Skylift Fitness Center · Kota Metro, Lampung</sub>
</div>
