'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'motion/react'
import { Check, ArrowRight, WhatsappLogo } from '@phosphor-icons/react'
import { MEMBERSHIPS } from '@/lib/utils'
import { cn } from '@/lib/utils'

export default function Membership() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })
  const [hovered, setHovered] = useState<number | null>(null)

  const waMessage = (plan: string) => {
    const msg = encodeURIComponent(`Halo Skylift! Saya tertarik dengan membership ${plan}. Bisa info lebih lanjut?`)
    window.open(`https://wa.me/6282160966686?text=${msg}`, '_blank')
  }

  return (
    <section id="membership" ref={ref} className="py-24 md:py-32 relative overflow-hidden">

      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-20" />
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(232,87,26,0.08) 0%, transparent 60%)' }}
      />

      <div className="relative z-10 px-6 md:px-16">
        {/* Header */}
        <div className="mb-16">
          <motion.div
            className="flex items-center gap-2 mb-4"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
          >
            <div className="w-6 h-[1px] bg-sk-orange" />
            <span className="text-[10px] text-sk-orange tracking-[0.3em] uppercase">Harga & Paket</span>
          </motion.div>
          <div className="overflow-hidden">
            <motion.h2
              className="font-display text-[clamp(44px,7vw,80px)] leading-none text-sk-white"
              initial={{ y: '100%' }}
              animate={inView ? { y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            >
              PILIH
            </motion.h2>
          </div>
          <div className="overflow-hidden">
            <motion.h2
              className="font-display text-[clamp(44px,7vw,80px)] leading-none text-stroke"
              initial={{ y: '100%' }}
              animate={inView ? { y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
            >
              MEMBERSHIP
            </motion.h2>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-sk-border">
          {MEMBERSHIPS.map((plan, i) => (
            <motion.div
              key={plan.period}
              className={cn(
                'relative p-8 flex flex-col overflow-hidden cursor-pointer',
                plan.featured ? 'bg-sk-orange' : 'bg-sk-bg2 hover:bg-sk-bg3 transition-colors duration-300'
              )}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.12 * i, duration: 0.6 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              data-cursor
            >
              {/* Featured glow */}
              {plan.featured && (
                <motion.div
                  className="absolute inset-0 bg-white/5"
                  animate={{ opacity: hovered === i ? 1 : 0 }}
                />
              )}

              {/* Badge */}
              {plan.badge && (
                <div className="inline-flex mb-4">
                  <span className="text-[9px] tracking-[0.2em] uppercase bg-white/20 text-white px-3 py-1">
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Period */}
              <div className={cn(
                'text-[10px] tracking-[0.2em] uppercase mb-4',
                plan.featured ? 'text-white/70' : 'text-sk-concrete'
              )}>
                {plan.period}
              </div>

              {/* Price */}
              <div className={cn(
                'font-display leading-none mb-1',
                plan.featured ? 'text-white' : 'text-sk-white',
                plan.price.length > 6 ? 'text-4xl' : 'text-5xl'
              )}>
                {plan.price}
              </div>
              <div className={cn(
                'text-[10px] tracking-wide mb-8',
                plan.featured ? 'text-white/60' : 'text-sk-concrete'
              )}>
                {plan.unit}
              </div>

              {/* Divider */}
              <div className={cn('h-[1px] mb-6', plan.featured ? 'bg-white/20' : 'bg-sk-border')} />

              {/* Features */}
              <div className="flex flex-col gap-3 flex-1">
                {plan.features.map(feat => (
                  <div key={feat} className="flex items-center gap-3">
                    <div className={cn(
                      'w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0',
                      plan.featured ? 'bg-white/20' : 'bg-sk-bg3 border border-sk-border'
                    )}>
                      <Check size={8} weight="bold" className={plan.featured ? 'text-white' : 'text-sk-orange'} />
                    </div>
                    <span className={cn(
                      'text-xs font-light',
                      plan.featured ? 'text-white/80' : 'text-sk-concrete'
                    )}>
                      {feat}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <motion.button
                onClick={() => waMessage(plan.period)}
                className={cn(
                  'mt-8 flex items-center justify-center gap-2 py-3 text-[11px] tracking-[0.15em] uppercase font-medium transition-colors',
                  plan.featured
                    ? 'bg-white text-sk-orange hover:bg-white/90'
                    : 'border border-sk-border text-sk-concrete hover:border-sk-orange hover:text-sk-orange'
                )}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                data-cursor
              >
                <WhatsappLogo size={14} weight="fill" />
                Daftar via WA
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.p
          className="text-center text-[11px] text-sk-concrete mt-8 tracking-wide"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
        >
          * Harga belum termasuk program personal training. Hubungi kami untuk paket custom.
        </motion.p>
      </div>
    </section>
  )
}
