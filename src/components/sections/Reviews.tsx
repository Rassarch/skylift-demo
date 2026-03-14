'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'motion/react'
import { Star, ArrowLeft, ArrowRight, GoogleLogo } from '@phosphor-icons/react'
import { REVIEWS } from '@/lib/utils'

export default function Reviews() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })
  const [active, setActive] = useState(0)

  const prev = () => setActive(a => (a - 1 + REVIEWS.length) % REVIEWS.length)
  const next = () => setActive(a => (a + 1) % REVIEWS.length)

  return (
    <section id="testimoni" ref={ref} className="py-24 md:py-32 px-6 md:px-16 relative border-y border-sk-border">

      {/* Background */}
      <div className="absolute inset-0 bg-sk-bg2/50" />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <motion.div
              className="flex items-center gap-2 mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
            >
              <div className="w-6 h-[1px] bg-sk-orange" />
              <span className="text-[10px] text-sk-orange tracking-[0.3em] uppercase">Testimoni</span>
            </motion.div>
            <div className="overflow-hidden">
              <motion.h2
                className="font-display text-[clamp(44px,7vw,80px)] leading-none text-sk-white"
                initial={{ y: '100%' }}
                animate={inView ? { y: 0 } : {}}
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              >
                APA KATA
              </motion.h2>
            </div>
            <div className="overflow-hidden">
              <motion.h2
                className="font-display text-[clamp(44px,7vw,80px)] leading-none text-stroke"
                initial={{ y: '100%' }}
                animate={inView ? { y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
              >
                MEMBER KAMI
              </motion.h2>
            </div>
          </div>

          {/* Rating block */}
          <motion.div
            className="flex items-center gap-6"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
          >
            <div className="text-right">
              <div className="font-display text-7xl text-sk-white leading-none">4.7</div>
              <div className="flex gap-0.5 justify-end mt-1">
                {Array.from({length: 5}).map((_, i) => (
                  <Star key={i} size={14} className="text-sk-orange" weight="fill" />
                ))}
              </div>
              <div className="flex items-center gap-1.5 justify-end mt-1">
                <GoogleLogo size={12} className="text-sk-concrete" />
                <span className="text-[11px] text-sk-concrete">39 ulasan</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Review carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              className="border-l-2 border-sk-orange pl-10 md:pl-16 py-4 max-w-3xl"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            >
              {/* Quote mark */}
              <div className="font-display text-[100px] leading-none text-sk-orange/10 absolute -top-4 left-0 select-none">
                "
              </div>

              <p className="text-lg md:text-2xl font-light text-sk-light leading-relaxed italic mb-8">
                "{REVIEWS[active].text}"
              </p>

              <div className="flex items-center gap-4">
                {/* Avatar */}
                <div className="w-10 h-10 rounded-full bg-sk-bg4 border border-sk-border flex items-center justify-center font-display text-sm text-sk-orange">
                  {REVIEWS[active].name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-medium text-sk-white">{REVIEWS[active].name}</div>
                  <div className="text-[11px] text-sk-concrete">{REVIEWS[active].role} · {REVIEWS[active].time}</div>
                </div>
                <div className="flex gap-0.5 ml-auto">
                  {Array.from({length: REVIEWS[active].rating}).map((_, i) => (
                    <Star key={i} size={12} className="text-sk-orange" weight="fill" />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <motion.div
          className="flex items-center gap-4 mt-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <button
            onClick={prev}
            className="w-12 h-12 border border-sk-border flex items-center justify-center text-sk-concrete hover:border-sk-orange hover:text-sk-orange transition-colors"
            data-cursor
          >
            <ArrowLeft size={16} />
          </button>
          <button
            onClick={next}
            className="w-12 h-12 border border-sk-border flex items-center justify-center text-sk-concrete hover:border-sk-orange hover:text-sk-orange transition-colors"
            data-cursor
          >
            <ArrowRight size={16} />
          </button>
          {/* Dots */}
          <div className="flex gap-2 ml-2">
            {REVIEWS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`transition-all duration-300 ${
                  i === active
                    ? 'w-8 h-1 bg-sk-orange'
                    : 'w-2 h-1 bg-sk-border hover:bg-sk-concrete'
                }`}
                data-cursor
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
