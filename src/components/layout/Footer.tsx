'use client'

import { motion } from 'motion/react'
import { InstagramLogo, TiktokLogo, WhatsappLogo, ArrowUp } from '@phosphor-icons/react'

const NAV_LINKS = [
  { label: 'Fasilitas', href: '#fasilitas' },
  { label: 'Kelas', href: '#kelas' },
  { label: 'Membership', href: '#membership' },
  { label: 'Testimoni', href: '#testimoni' },
  { label: 'Kontak', href: '#kontak' },
]

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="border-t border-sk-border bg-sk-bg">
      {/* Main footer */}
      <div className="px-6 md:px-16 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div
              className="w-5 h-5 bg-sk-orange"
              style={{ clipPath: 'polygon(50% 0%, 100% 35%, 100% 100%, 0% 100%, 0% 35%)' }}
            />
            <span className="font-display text-xl tracking-[0.15em] text-sk-white">SKYLIFT</span>
          </div>
          <p className="text-sm text-sk-concrete font-light leading-relaxed max-w-xs mb-6">
            Gym premium berstandar internasional di jantung Kota Metro. Fasilitas terbaik, harga terjangkau.
          </p>
          <div className="flex gap-3">
            {[
              { icon: <InstagramLogo size={16} />, href: 'https://instagram.com' },
              { icon: <TiktokLogo size={16} />, href: 'https://tiktok.com' },
              { icon: <WhatsappLogo size={16} weight="fill" />, href: 'https://wa.me/6282160966686' },
            ].map((s, i) => (
              <motion.a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-sk-border flex items-center justify-center text-sk-concrete hover:border-sk-orange hover:text-sk-orange transition-colors"
                whileHover={{ y: -2 }}
                data-cursor
              >
                {s.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Links */}
        <div>
          <div className="text-[10px] text-sk-orange tracking-[0.3em] uppercase mb-5">Navigasi</div>
          <div className="flex flex-col gap-3">
            {NAV_LINKS.map(link => (
              <button
                key={link.href}
                onClick={() => {
                  const el = document.querySelector(link.href)
                  if (el) el.scrollIntoView({ behavior: 'smooth' })
                }}
                className="text-sm text-sk-concrete hover:text-sk-white transition-colors text-left tracking-wide group flex items-center gap-2"
                data-cursor
              >
                <span className="w-0 h-[1px] bg-sk-orange group-hover:w-4 transition-all duration-300" />
                {link.label}
              </button>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <div className="text-[10px] text-sk-orange tracking-[0.3em] uppercase mb-5">Kontak</div>
          <div className="flex flex-col gap-3 text-sm text-sk-concrete font-light">
            <div>Jl. Brigjend Sutiyoso, Metro Pusat</div>
            <div>Kota Metro, Lampung 34124</div>
            <div className="pt-1">
              <a href="tel:+6282160966686" className="hover:text-sk-orange transition-colors" data-cursor>
                0821-6096-6686
              </a>
            </div>
            <div className="text-sk-concrete/60">Buka setiap hari · 07.00–22.30</div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-sk-border px-6 md:px-16 py-5 flex items-center justify-between">
        <span className="text-[11px] text-sk-concrete/40 tracking-widest">
          © 2025 SKYLIFT FITNESS CENTER · ALL RIGHTS RESERVED
        </span>
        <button
          onClick={scrollTop}
          className="flex items-center gap-2 text-[11px] text-sk-concrete hover:text-sk-orange transition-colors tracking-widest uppercase"
          data-cursor
        >
          Back to top
          <ArrowUp size={12} />
        </button>
      </div>
    </footer>
  )
}
