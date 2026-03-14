'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true)
  const [count, setCount] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setVisible(false), 600)
          return 100
        }
        return prev + Math.floor(Math.random() * 8) + 3
      })
    }, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-sk-bg flex flex-col items-center justify-center overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Grid background */}
          <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-40" />

          {/* Orange glow */}
          <motion.div
            className="absolute w-[600px] h-[600px] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(232,87,26,0.12) 0%, transparent 65%)' }}
            animate={{ scale: [1, 1.15, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Logo */}
          <motion.div
            className="relative z-10 flex flex-col items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          >
            {/* Icon */}
            <motion.div
              className="w-12 h-12 bg-sk-orange"
              style={{ clipPath: 'polygon(50% 0%, 100% 35%, 100% 100%, 0% 100%, 0% 35%)' }}
              animate={{ rotateY: [0, 360] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', repeatDelay: 1 }}
            />

            {/* Text */}
            <div className="font-display text-6xl tracking-[0.2em] text-sk-white">
              SKYLIFT
            </div>
            <div className="text-sk-orange text-[10px] tracking-[0.4em] uppercase font-medium">
              Fitness Center
            </div>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            className="absolute bottom-16 left-1/2 -translate-x-1/2 w-64"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-[10px] text-sk-concrete tracking-widest uppercase">Loading</span>
              <span className="text-[10px] text-sk-orange font-display text-sm">{Math.min(count, 100)}</span>
            </div>
            <div className="h-[1px] bg-sk-border w-full">
              <motion.div
                className="h-full bg-sk-orange origin-left"
                style={{ scaleX: Math.min(count, 100) / 100 }}
                transition={{ duration: 0.05 }}
              />
            </div>
          </motion.div>

          {/* Horizontal lines decoration */}
          {[0, 1, 2].map(i => (
            <motion.div
              key={i}
              className="absolute left-0 h-[1px] bg-sk-border w-full"
              style={{ top: `${25 + i * 25}%` }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.1 * i, duration: 1, ease: [0.76, 0, 0.24, 1] }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
