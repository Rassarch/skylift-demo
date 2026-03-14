'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'motion/react'
import { List, X, Phone } from '@phosphor-icons/react'

const NAV_LINKS = [
  { label: 'Fasilitas', href: '#fasilitas' },
  { label: 'Kelas', href: '#kelas' },
  { label: 'Membership', href: '#membership' },
  { label: 'Testimoni', href: '#testimoni' },
  { label: 'Kontak', href: '#kontak' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (val) => {
    setScrolled(val > 60)
  })

  const scrollTo = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
      >
        <nav
          className={`flex items-center justify-between h-16 transition-all duration-500 ${
            scrolled
              ? 'my-2 px-6 bg-sk-bg/90 backdrop-blur-md border border-sk-border rounded-xl'
              : 'border-b border-sk-border'
          }`}
        >
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 group"
            data-cursor
          >
            <motion.div
              className="w-5 h-5 bg-sk-orange"
              style={{ clipPath: 'polygon(50% 0%, 100% 35%, 100% 100%, 0% 100%, 0% 35%)' }}
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.4 }}
            />
            <span className="font-display text-xl tracking-[0.15em] text-sk-white">
              SKYLIFT
            </span>
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-[12px] text-sk-concrete hover:text-sk-white tracking-widest uppercase font-medium transition-colors duration-200 relative group"
                data-cursor
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-sk-orange group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+6282160966686"
              className="flex items-center gap-1.5 text-[11px] text-sk-concrete hover:text-sk-white tracking-widest uppercase transition-colors"
              data-cursor
            >
              <Phone size={12} weight="bold" />
              0821-6096-6686
            </a>
            <button
              onClick={() => scrollTo('#membership')}
              className="bg-sk-orange hover:bg-sk-orangeDim text-white text-[11px] tracking-[0.15em] uppercase font-medium px-5 py-2.5 transition-colors duration-200"
              data-cursor
            >
              Daftar
            </button>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-sk-white"
            onClick={() => setMenuOpen(!menuOpen)}
            data-cursor
          >
            {menuOpen ? <X size={22} /> : <List size={22} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <motion.div
        className="fixed inset-0 z-40 bg-sk-bg/98 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden"
        initial={{ opacity: 0, clipPath: 'circle(0% at 95% 5%)' }}
        animate={{
          opacity: menuOpen ? 1 : 0,
          clipPath: menuOpen ? 'circle(150% at 95% 5%)' : 'circle(0% at 95% 5%)',
        }}
        transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        style={{ pointerEvents: menuOpen ? 'all' : 'none' }}
      >
        {NAV_LINKS.map((link, i) => (
          <motion.button
            key={link.href}
            onClick={() => scrollTo(link.href)}
            className="font-display text-5xl tracking-widest text-sk-white hover:text-sk-orange transition-colors"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: menuOpen ? 1 : 0, x: menuOpen ? 0 : -30 }}
            transition={{ delay: 0.1 * i, duration: 0.4 }}
          >
            {link.label}
          </motion.button>
        ))}
        <motion.a
          href="tel:+6282160966686"
          className="text-sk-concrete text-sm tracking-widest uppercase mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: menuOpen ? 1 : 0 }}
          transition={{ delay: 0.5 }}
        >
          0821-6096-6686
        </motion.a>
      </motion.div>
    </>
  )
}
