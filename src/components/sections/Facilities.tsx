'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'motion/react'
import { Barbell, Thermometer, Users, Certificate, Coffee, Lock, ArrowRight } from '@phosphor-icons/react'
import { FACILITIES } from '@/lib/utils'

const ICONS: Record<string, React.ElementType> = {
  Barbell, Thermometer, Users, Certificate, Coffee, Lock
}

export default function Facilities() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <section id="fasilitas" ref={ref} className="py-24 md:py-32 relative">

      {/* Section accent line */}
      <motion.div
        className="absolute top-0 left-0 h-[1px] bg-sk-orange"
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
        style={{ originX: 0, width: '100%' }}
      />

      <div className="px-6 md:px-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <motion.div
              className="flex items-center gap-2 mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="w-6 h-[1px] bg-sk-orange" />
              <span className="text-[10px] text-sk-orange tracking-[0.3em] uppercase">Fasilitas</span>
            </motion.div>

            <div className="overflow-hidden">
              <motion.h2
                className="font-display text-[clamp(44px,7vw,80px)] leading-none tracking-wide text-sk-white"
                initial={{ y: '100%' }}
                animate={inView ? { y: 0 } : {}}
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              >
                SEMUA YANG
              </motion.h2>
            </div>
            <div className="overflow-hidden">
              <motion.h2
                className="font-display text-[clamp(44px,7vw,80px)] leading-none tracking-wide text-stroke"
                initial={{ y: '100%' }}
                animate={inView ? { y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
              >
                KAMU BUTUHKAN
              </motion.h2>
            </div>
          </div>

          <motion.p
            className="text-sm text-sk-concrete font-light leading-relaxed max-w-xs"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
          >
            Fasilitas kelas dunia yang sebelumnya hanya ada di gym-gym kota besar, kini hadir di Metro.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-sk-border">
          {FACILITIES.map((item, i) => {
            const Icon = ICONS[item.icon]
            const isHovered = hovered === item.id
            return (
              <motion.div
                key={item.id}
                className="relative bg-sk-bg2 p-8 overflow-hidden cursor-pointer group"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * i, duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
                onMouseEnter={() => setHovered(item.id)}
                onMouseLeave={() => setHovered(null)}
                data-cursor
              >
                {/* Hover fill */}
                <motion.div
                  className="absolute inset-0 bg-sk-bg3"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
                  style={{ originY: 1 }}
                />

                {/* Top orange line */}
                <motion.div
                  className="absolute top-0 left-0 h-[2px] bg-sk-orange"
                  animate={{ width: isHovered ? '100%' : '0%' }}
                  transition={{ duration: 0.4 }}
                />

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <motion.div
                      animate={{ color: isHovered ? '#E8571A' : '#8a8880' }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon size={28} weight="thin" />
                    </motion.div>
                    <span className="font-display text-5xl text-sk-white/[0.04] leading-none">
                      {item.id}
                    </span>
                  </div>

                  <div className="mb-1">
                    <span className="text-[9px] text-sk-orange tracking-[0.2em] uppercase">{item.tag}</span>
                  </div>
                  <h3 className="font-display text-2xl tracking-wide text-sk-white mb-3">
                    {item.name.toUpperCase()}
                  </h3>
                  <p className="text-sm text-sk-concrete font-light leading-relaxed">
                    {item.desc}
                  </p>

                  <motion.div
                    className="flex items-center gap-2 mt-6 text-sk-orange text-[11px] tracking-widest uppercase"
                    animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span>Selengkapnya</span>
                    <ArrowRight size={12} weight="bold" />
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
