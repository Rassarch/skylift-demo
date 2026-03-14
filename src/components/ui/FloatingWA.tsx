'use client'

import { motion } from 'motion/react'
import { WhatsappLogo } from '@phosphor-icons/react'

export default function FloatingWA() {
  return (
    <motion.a
      href="https://wa.me/6282160966686?text=Halo%20Skylift!%20Saya%20ingin%20info%20membership."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-[#25D366] text-white px-4 py-3 shadow-lg group"
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 2, duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      data-cursor
    >
      <WhatsappLogo size={20} weight="fill" />
      <span className="text-[11px] font-medium tracking-wide uppercase hidden sm:block">
        Chat Kami
      </span>
      {/* Ping dot */}
      <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full">
        <span className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-75" />
      </span>
    </motion.a>
  )
}
