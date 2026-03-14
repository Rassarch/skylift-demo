'use client'

import { useCustomCursor } from '@/hooks/useCustomCursor'

export default function CustomCursor() {
  useCustomCursor()

  return (
    <>
      <div id="cursor-dot" className="cursor-dot" />
      <div id="cursor-ring" className="cursor-ring" />
    </>
  )
}
