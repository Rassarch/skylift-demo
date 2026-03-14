'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'motion/react'
import { ArrowRight } from '@phosphor-icons/react'

const AMBIENT_ITEMS = [
  { label: 'Diresmikan', value: 'Mei 2025', sub: 'oleh Walikota Metro' },
  { label: 'Program', value: '11 Kelas', sub: 'Aerobics s/d Aerial Yoga' },
  { label: 'Lokasi', value: 'Pusat Kota', sub: 'Jl. Brigjend Sutiyoso' },
]

export default function About() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const yBg = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  return (
    <section ref={ref} className="py-24 md:py-32 px-6 md:px-16 relative overflow-hidden border-b border-sk-border">

      {/* Decorative text bg */}
      <motion.div
        className="absolute -right-8 top-1/2 -translate-y-1/2 font-display text-[180px] md:text-[260px] text-sk-white/[0.015] leading-none select-none pointer-events-none whitespace-nowrap"
        style={{ y: yBg }}
      >
        SKYLIFT
      </motion.div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Text */}
        <div>
          <motion.div
            className="flex items-center gap-2 mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
          >
            <div className="w-6 h-[1px] bg-sk-orange" />
            <span className="text-[10px] text-sk-orange tracking-[0.3em] uppercase">Tentang Kami</span>
          </motion.div>

          <div className="overflow-hidden mb-2">
            <motion.h2
              className="font-display text-[clamp(44px,6vw,72px)] leading-none text-sk-white"
              initial={{ y: '100%' }}
              animate={inView ? { y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            >
              BUKAN SEKADAR
            </motion.h2>
          </div>
          <div className="overflow-hidden mb-6">
            <motion.h2
              className="font-display text-[clamp(44px,6vw,72px)] leading-none text-sk-orange"
              initial={{ y: '100%' }}
              animate={inView ? { y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
            >
              GYM BIASA
            </motion.h2>
          </div>

          <motion.div
            className="flex flex-col gap-4 text-sm text-sk-concrete font-light leading-relaxed max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <p>
              Skylift Fitness Center hadir sebagai jawaban bagi warga Kota Metro yang selama ini harus pergi ke luar kota hanya untuk merasakan gym premium.
            </p>
            <p>
              Dengan peralatan impor berstandar internasional, dua studio kelas, sauna gratis, dan trainer bersertifikat — semua kini ada di jantung kota, dengan harga yang membumi.
            </p>
          </motion.div>

          {/* Ambient stats */}
          <motion.div
            className="grid grid-cols-3 gap-[1px] bg-sk-border mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {AMBIENT_ITEMS.map(item => (
              <div key={item.label} className="bg-sk-bg2 px-4 py-5">
                <div className="text-[9px] text-sk-concrete tracking-[0.2em] uppercase mb-1">{item.label}</div>
                <div className="font-display text-xl text-sk-white leading-none mb-0.5">{item.value}</div>
                <div className="text-[10px] text-sk-concrete/60">{item.sub}</div>
              </div>
            ))}
          </motion.div>

          <motion.button
            onClick={() => document.getElementById('fasilitas')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center gap-2 mt-8 text-sm text-sk-orange hover:gap-4 transition-all duration-300 group"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.7 }}
            data-cursor
          >
            Jelajahi fasilitas kami
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        {/* Right: Visual composition */}
        <motion.div
          className="relative h-[400px] md:h-[520px]"
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {/* Main block */}
          <div className="absolute inset-0 bg-sk-bg3 border border-sk-border overflow-hidden">
            {/* Orange mesh ceiling (inspired by the gym photos) */}
            <div className="absolute inset-0 opacity-20">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="mesh" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M0 0 L40 0 L40 40 L0 40 Z" fill="none" stroke="#E8571A" strokeWidth="0.5"/>
                    <path d="M0 0 L40 40 M40 0 L0 40" stroke="#E8571A" strokeWidth="0.3"/>
                  </pattern>
                </defs>
                <rect width="100%" height="40%" fill="url(#mesh)"/>
              </svg>
            </div>

            {/* Dark lower section */}
            <div className="absolute bottom-0 left-0 right-0 h-[60%] bg-sk-bg2" />

            {/* Reception desk simulation */}
            <div className="absolute bottom-[15%] left-[10%] right-[10%] h-20 bg-sk-bg4 border border-sk-border flex items-center justify-center">
              <div className="font-display text-2xl tracking-[0.3em] text-sk-white/20">SKYLIFT</div>
            </div>

            {/* Hanging lamps */}
            {[25, 50, 75].map((x, i) => (
              <div key={i} className="absolute top-0 flex flex-col items-center" style={{ left: `${x}%`, transform: 'translateX(-50%)' }}>
                <div className="w-[1px] bg-sk-concrete/20" style={{ height: '35%' }} />
                <div className="w-10 h-10 rounded-full border border-sk-concrete/20 bg-sk-bg3 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-sk-white/10" />
                </div>
              </div>
            ))}

            {/* Orange bench accent (bottom) */}
            <div className="absolute bottom-[5%] left-[5%] right-[5%] h-4 bg-sk-orange/70" />
          </div>

          {/* Overlay label */}
          <div className="absolute top-4 left-4 bg-sk-bg/80 backdrop-blur-sm border border-sk-border px-3 py-2">
            <div className="text-[9px] text-sk-orange tracking-[0.2em] uppercase">Interior</div>
            <div className="text-xs text-sk-concrete">Jl. Brigjend Sutiyoso</div>
          </div>

          {/* Corner accent */}
          <div className="absolute -bottom-3 -right-3 w-24 h-24 border-b-2 border-r-2 border-sk-orange/30" />
          <div className="absolute -top-3 -left-3 w-24 h-24 border-t-2 border-l-2 border-sk-orange/30" />
        </motion.div>
      </div>
    </section>
  )
}
