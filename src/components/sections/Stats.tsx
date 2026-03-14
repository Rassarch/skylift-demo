'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'

const STATS = [
  { num: '4.7', label: 'Google Rating', suffix: '★' },
  { num: '39', label: 'Reviews Positif', suffix: '+' },
  { num: '11', label: 'Program & Kelas', suffix: '' },
  { num: '100', label: 'Alat Impor', suffix: '+' },
  { num: '250', label: 'Harga Member', suffix: 'K/bln' },
  { num: '07.00', label: 'Buka Setiap Hari', suffix: '–22.30' },
]

function AnimatedNumber({ value, inView }: { value: string, inView: boolean }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      {value}
    </motion.span>
  )
}

export default function StatsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-5%' })

  return (
    <section ref={ref} className="relative border-y border-sk-border overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-sk-orange/[0.03]" />
      <motion.div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at center, rgba(232,87,26,0.06) 0%, transparent 60%)' }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-x divide-y md:divide-y-0 divide-sk-border">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            className="flex flex-col items-center justify-center py-12 px-6 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 * i, duration: 0.6 }}
          >
            <div className="font-display leading-none text-sk-white mb-1" style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}>
              <AnimatedNumber value={stat.num} inView={inView} />
              {stat.suffix && (
                <span className="text-sk-orange">{stat.suffix}</span>
              )}
            </div>
            <div className="text-[10px] text-sk-concrete tracking-[0.2em] uppercase font-medium">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
