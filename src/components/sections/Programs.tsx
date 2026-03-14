'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence, LayoutGroup } from 'motion/react'
import { ArrowRight, WhatsappLogo } from '@phosphor-icons/react'
import { PROGRAMS, PROGRAM_CATEGORIES } from '@/lib/utils'
import { cn } from '@/lib/utils'

const CATEGORY_COLORS: Record<string, string> = {
  cardio:   'text-orange-400 bg-orange-400/10 border-orange-400/20',
  strength: 'text-red-400 bg-red-400/10 border-red-400/20',
  combat:   'text-red-500 bg-red-500/10 border-red-500/20',
  dance:    'text-pink-400 bg-pink-400/10 border-pink-400/20',
  mindful:  'text-teal-400 bg-teal-400/10 border-teal-400/20',
  wellness: 'text-green-400 bg-green-400/10 border-green-400/20',
  recovery: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
  youth:    'text-yellow-400 bg-yellow-400/10 border-yellow-400/20',
  private:  'text-purple-400 bg-purple-400/10 border-purple-400/20',
}

export default function Programs() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })
  const [activeCategory, setActiveCategory] = useState('all')
  const [hovered, setHovered] = useState<string | null>(null)

  const filtered = activeCategory === 'all'
    ? PROGRAMS
    : PROGRAMS.filter(p => p.category === activeCategory)

  const waInquiry = (name: string) => {
    const msg = encodeURIComponent(`Halo Skylift! Saya ingin info lebih lanjut tentang kelas ${name}. Bisa bantu?`)
    window.open(`https://wa.me/6282160966686?text=${msg}`, '_blank')
  }

  return (
    <section id="kelas" ref={ref} className="py-24 md:py-32 relative overflow-hidden">

      {/* Subtle background */}
      <div className="absolute inset-0 bg-sk-bg2/40" />
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-20" />

      <div className="relative z-10 px-6 md:px-16">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <motion.div
              className="flex items-center gap-2 mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="w-6 h-[1px] bg-sk-orange" />
              <span className="text-[10px] text-sk-orange tracking-[0.3em] uppercase">Kelas & Program</span>
            </motion.div>
            <div className="overflow-hidden">
              <motion.h2
                className="font-display text-[clamp(44px,7vw,80px)] leading-none text-sk-white"
                initial={{ y: '100%' }}
                animate={inView ? { y: 0 } : {}}
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              >
                11 PROGRAM
              </motion.h2>
            </div>
            <div className="overflow-hidden">
              <motion.h2
                className="font-display text-[clamp(44px,7vw,80px)] leading-none text-stroke"
                initial={{ y: '100%' }}
                animate={inView ? { y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
              >
                TERSEDIA
              </motion.h2>
            </div>
          </div>
          <motion.p
            className="text-sm text-sk-concrete font-light leading-relaxed max-w-xs"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
          >
            Dari Aerial Yoga hingga Kickboxing, dari Youth Classes hingga Personal Training — semua ada di satu atap.
          </motion.p>
        </div>

        {/* Category filter */}
        <motion.div
          className="flex gap-2 flex-wrap mb-10"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.35, duration: 0.6 }}
        >
          {PROGRAM_CATEGORIES.map(cat => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={cn(
                'relative text-[10px] tracking-[0.18em] uppercase font-medium px-4 py-2 border transition-all duration-200',
                activeCategory === cat.key
                  ? 'bg-sk-orange border-sk-orange text-white'
                  : 'bg-transparent border-sk-border text-sk-concrete hover:border-sk-orange/50 hover:text-sk-light'
              )}
              data-cursor
            >
              {cat.label}
              {activeCategory === cat.key && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 bg-sk-orange -z-10"
                  transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Count indicator */}
        <motion.div
          className="flex items-center gap-3 mb-6"
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={filtered.length}
              className="font-display text-4xl text-sk-orange"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.25 }}
            >
              {filtered.length}
            </motion.span>
          </AnimatePresence>
          <span className="text-xs text-sk-concrete tracking-widest uppercase">
            program {activeCategory !== 'all' ? `· ${PROGRAM_CATEGORIES.find(c => c.key === activeCategory)?.label}` : 'tersedia'}
          </span>
        </motion.div>

        {/* Programs grid */}
        <LayoutGroup>
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[1px] bg-sk-border">
            <AnimatePresence mode="popLayout">
              {filtered.map((program, i) => {
                const isHovered = hovered === program.id
                const catColor = CATEGORY_COLORS[program.category] ?? 'text-sk-concrete bg-sk-bg3 border-sk-border'

                return (
                  <motion.div
                    key={program.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.92 }}
                    transition={{ duration: 0.3, delay: i * 0.04 }}
                    className="relative bg-sk-bg2 p-6 flex flex-col overflow-hidden group cursor-pointer"
                    onMouseEnter={() => setHovered(program.id)}
                    onMouseLeave={() => setHovered(null)}
                    data-cursor
                  >
                    {/* Hover fill from bottom */}
                    <motion.div
                      className="absolute inset-0 bg-sk-bg3 origin-bottom"
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: isHovered ? 1 : 0 }}
                      transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
                    />

                    {/* Top accent line */}
                    <motion.div
                      className="absolute top-0 left-0 h-[2px] bg-sk-orange"
                      animate={{ width: isHovered ? '100%' : '0%' }}
                      transition={{ duration: 0.35 }}
                    />

                    <div className="relative z-10 flex flex-col h-full">
                      {/* Top row: icon + number */}
                      <div className="flex items-start justify-between mb-5">
                        <motion.div
                          className="text-2xl leading-none select-none"
                          animate={{ color: isHovered ? '#E8571A' : '#8a8880' }}
                          transition={{ duration: 0.25 }}
                        >
                          {program.icon}
                        </motion.div>
                        <span className="font-display text-[42px] leading-none text-sk-white/[0.04]">
                          {program.id}
                        </span>
                      </div>

                      {/* Category badge */}
                      <div className="mb-2">
                        <span className={cn('text-[9px] tracking-[0.2em] uppercase border px-2 py-0.5', catColor)}>
                          {program.category}
                        </span>
                      </div>

                      {/* Name */}
                      <h3 className="font-display text-[22px] leading-tight tracking-wide text-sk-white mb-3">
                        {program.name.toUpperCase()}
                      </h3>

                      {/* Desc */}
                      <p className="text-[12px] text-sk-concrete font-light leading-relaxed flex-1">
                        {program.desc}
                      </p>

                      {/* Meta */}
                      <div className="flex items-center justify-between mt-5 pt-4 border-t border-sk-border">
                        <div className="flex flex-col gap-0.5">
                          <span className="text-[9px] text-sk-concrete/60 tracking-widest uppercase">Level</span>
                          <span className="text-[11px] text-sk-light font-medium">{program.level}</span>
                        </div>
                        <div className="flex flex-col gap-0.5 text-right">
                          <span className="text-[9px] text-sk-concrete/60 tracking-widest uppercase">Durasi</span>
                          <span className="text-[11px] text-sk-light font-medium">{program.duration}</span>
                        </div>
                      </div>

                      {/* CTA on hover */}
                      <motion.button
                        onClick={(e) => { e.stopPropagation(); waInquiry(program.name) }}
                        className="flex items-center gap-2 mt-4 text-[10px] tracking-[0.15em] uppercase text-sk-orange font-medium"
                        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 6 }}
                        transition={{ duration: 0.25 }}
                        data-cursor
                      >
                        <WhatsappLogo size={12} weight="fill" />
                        Tanya via WA
                        <ArrowRight size={10} weight="bold" />
                      </motion.button>
                    </div>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>

        {/* Bottom note */}
        <motion.div
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-10 pt-8 border-t border-sk-border"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <p className="text-xs text-sk-concrete font-light">
            * Jadwal kelas dapat berubah. Private lessons & Nutrition Consulting tersedia dengan reservasi.
          </p>
          <button
            onClick={() => document.getElementById('kontak')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center gap-2 text-[11px] text-sk-orange hover:gap-4 transition-all duration-300 tracking-widest uppercase font-medium flex-shrink-0"
            data-cursor
          >
            Lihat jadwal lengkap
            <ArrowRight size={12} weight="bold" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
