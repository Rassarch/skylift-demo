'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'motion/react'
import { SCHEDULES } from '@/lib/utils'
import { cn } from '@/lib/utils'

const INTENSITY_COLOR: Record<string, string> = {
  High: 'text-red-400 bg-red-400/10 border-red-400/20',
  Med: 'text-sk-orange bg-sk-orange/10 border-sk-orange/20',
  Low: 'text-green-400 bg-green-400/10 border-green-400/20',
}

export default function Schedule() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })
  const [activeDay, setActiveDay] = useState(0)

  return (
    <section id="jadwal" ref={ref} className="py-24 md:py-32 px-6 md:px-16 relative">

      {/* Header */}
      <div className="mb-16">
        <motion.div
          className="flex items-center gap-2 mb-4"
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="w-6 h-[1px] bg-sk-orange" />
          <span className="text-[10px] text-sk-orange tracking-[0.3em] uppercase">Jadwal Kelas</span>
        </motion.div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="overflow-hidden">
              <motion.h2
                className="font-display text-[clamp(44px,7vw,80px)] leading-none tracking-wide text-sk-white"
                initial={{ y: '100%' }}
                animate={inView ? { y: 0 } : {}}
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              >
                PROGRAM
              </motion.h2>
            </div>
            <div className="overflow-hidden">
              <motion.h2
                className="font-display text-[clamp(44px,7vw,80px)] leading-none tracking-wide text-stroke"
                initial={{ y: '100%' }}
                animate={inView ? { y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
              >
                & KELAS
              </motion.h2>
            </div>
          </div>
          <motion.p
            className="text-sm text-sk-concrete max-w-xs font-light leading-relaxed"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            Berbagai kelas tersedia setiap hari, dipandu trainer bersertifikat untuk semua level.
          </motion.p>
        </div>
      </div>

      {/* Day selector */}
      <motion.div
        className="flex gap-[1px] bg-sk-border mb-[1px] overflow-x-auto pb-0"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        {SCHEDULES.map((s, i) => (
          <button
            key={s.day}
            onClick={() => setActiveDay(i)}
            className={cn(
              'relative flex-1 min-w-[90px] py-3 text-[10px] tracking-[0.15em] uppercase font-medium transition-colors duration-200 whitespace-nowrap px-3',
              activeDay === i
                ? 'bg-sk-orange text-white'
                : 'bg-sk-bg2 text-sk-concrete hover:text-sk-white hover:bg-sk-bg3'
            )}
            data-cursor
          >
            {s.day}
          </button>
        ))}
      </motion.div>

      {/* Classes */}
      <div className="bg-sk-bg2 border-t-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDay}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-sk-border"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
          >
            {SCHEDULES[activeDay].classes.map((cls, i) => (
              <motion.div
                key={i}
                className="bg-sk-bg2 p-5 flex items-center gap-5 group hover:bg-sk-bg3 transition-colors cursor-pointer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * i }}
                data-cursor
              >
                {/* Time */}
                <div className="font-display text-xl text-sk-white flex-shrink-0 w-14 leading-none">
                  {cls.time}
                </div>

                {/* Divider */}
                <div className="w-[1px] h-10 bg-sk-border flex-shrink-0 group-hover:bg-sk-orange transition-colors duration-300" />

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="font-display text-lg tracking-wide text-sk-white truncate leading-tight">
                    {cls.name.toUpperCase()}
                  </div>
                  <div className="text-[10px] text-sk-concrete mt-1 truncate">{cls.trainer} · {cls.duration}</div>
                </div>

                {/* Intensity badge */}
                <div className={cn(
                  'text-[9px] tracking-widest uppercase border px-2 py-1 flex-shrink-0',
                  INTENSITY_COLOR[cls.intensity]
                )}>
                  {cls.intensity}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

    </section>
  )
}
