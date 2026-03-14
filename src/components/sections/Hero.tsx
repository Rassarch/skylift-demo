'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { ArrowDown, MapPin, Star } from '@phosphor-icons/react'

const TICKER_ITEMS = [
  'Aerobics',
  'Kickboxing',
  'Nutrition Consulting',
  'Personal Training',
  'Private Lessons',
  'Youth Classes',
  'Zumba',
  'Gym Weightlifting',
  'Yoga',
  'Aerial Yoga',
  'Sauna Premium',
]

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  const scrollDown = () => {
    const next = document.getElementById('fasilitas')
    if (next) next.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col overflow-hidden">

      {/* Grid background */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-50" />

      {/* Orange glow orbs */}
      <motion.div
        className="absolute top-0 right-0 w-[50vw] h-[50vw] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(232,87,26,0.10) 0%, transparent 60%)' }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-[35vw] h-[35vw] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(232,87,26,0.06) 0%, transparent 60%)' }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      {/* Diagonal lines decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" preserveAspectRatio="none">
          {Array.from({ length: 8 }).map((_, i) => (
            <line
              key={i}
              x1={`${-20 + i * 18}%`} y1="0%"
              x2={`${20 + i * 18}%`} y2="100%"
              stroke="#E8571A" strokeWidth="1"
            />
          ))}
        </svg>
      </div>

      {/* Main hero content */}
      <motion.div
        className="relative z-10 flex-1 flex flex-col justify-end pb-16 px-6 md:px-16 pt-28 md:pt-32"
        style={{ y, opacity }}
      >
        {/* Location badge */}
        <motion.div
          className="flex items-center gap-2 mb-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="w-8 h-[1px] bg-sk-orange" />
          <MapPin size={12} className="text-sk-orange" weight="fill" />
          <span className="text-[10px] text-sk-orange tracking-[0.3em] uppercase font-medium">
            Kota Metro, Lampung
          </span>
        </motion.div>

        {/* Main title */}
        <div className="overflow-hidden mb-2">
          <motion.h1
            className="font-display text-[clamp(72px,14vw,160px)] leading-[0.88] tracking-[0.02em] text-sk-white"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ delay: 0.5, duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          >
            LIFT
          </motion.h1>
        </div>

        <div className="flex items-end gap-4 md:gap-8 mb-2">
          <div className="overflow-hidden flex-shrink-0">
            <motion.h1
              className="font-display text-[clamp(72px,14vw,160px)] leading-[0.88] tracking-[0.02em] text-stroke"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ delay: 0.62, duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
            >
              YOUR
            </motion.h1>
          </div>

          {/* Stats card inlined */}
          <motion.div
            className="hidden md:flex flex-col gap-3 mb-4 ml-auto"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.7 }}
          >
            {[
              { n: '4.7', l: 'Google Rating' },
              { n: '250K', l: 'Member / Bulan' },
              { n: '100+', l: 'Alat Impor' },
            ].map(stat => (
              <div key={stat.l} className="text-right border-r-2 border-sk-orange pr-4">
                <div className="font-display text-3xl text-sk-white leading-none">{stat.n}</div>
                <div className="text-[10px] text-sk-concrete tracking-widest uppercase mt-0.5">{stat.l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="overflow-hidden">
          <motion.h1
            className="font-display text-[clamp(72px,14vw,160px)] leading-[0.88] tracking-[0.02em] text-sk-orange"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ delay: 0.74, duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          >
            LIMITS
          </motion.h1>
        </div>

        {/* Bottom row */}
        <motion.div
          className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mt-10 md:mt-14 border-t border-sk-border pt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.7 }}
        >
          <div className="max-w-sm">
            <p className="text-sk-concrete text-sm font-light leading-relaxed">
              Gym premium berstandar internasional. Alat impor, trainer bersertifikat, sauna, dan 2 studio kelas — semua di jantung Kota Metro.
            </p>
            {/* Stars */}
            <div className="flex items-center gap-2 mt-4">
              <div className="flex gap-0.5">
                {Array.from({length: 5}).map((_, i) => (
                  <Star key={i} size={12} className="text-sk-orange" weight="fill" />
                ))}
              </div>
              <span className="text-[11px] text-sk-concrete">4.7 · 39 ulasan Google</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => document.getElementById('membership')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-sk-orange hover:bg-sk-orangeDim text-white text-[11px] tracking-[0.15em] uppercase font-medium px-8 py-4 transition-colors duration-200 clip-path-arrow"
              data-cursor
            >
              Mulai Sekarang
            </button>
            <button
              onClick={() => document.getElementById('fasilitas')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-[11px] text-sk-concrete hover:text-sk-white tracking-widest uppercase transition-colors"
              data-cursor
            >
              Lihat Fasilitas →
            </button>
          </div>
        </motion.div>
      </motion.div>

      {/* Ticker strip */}
      <motion.div
        className="relative z-10 border-t border-sk-border overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        <div className="flex animate-ticker py-3 gap-0" style={{ width: 'max-content' }}>
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <div key={i} className="flex items-center gap-3 px-6 flex-shrink-0">
              <div className="w-1 h-1 rounded-full bg-sk-orange" />
              <span className="text-[11px] text-sk-concrete tracking-[0.2em] uppercase whitespace-nowrap">
                {item}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollDown}
        className="absolute bottom-20 right-8 hidden md:flex flex-col items-center gap-2 text-sk-concrete hover:text-sk-orange transition-colors z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        data-cursor
      >
        <span className="text-[9px] tracking-[0.3em] uppercase" style={{ writingMode: 'vertical-rl' }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={14} />
        </motion.div>
      </motion.button>

    </section>
  )
}
