'use client'

import { useEffect } from 'react'

export function useCustomCursor() {
  useEffect(() => {
    const dot = document.getElementById('cursor-dot')
    const ring = document.getElementById('cursor-ring')
    if (!dot || !ring) return

    let mouseX = 0, mouseY = 0
    let ringX = 0, ringY = 0
    let animId: number

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`
    }

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12
      ring.style.transform = `translate(${ringX - 16}px, ${ringY - 16}px)`
      animId = requestAnimationFrame(animate)
    }

    const onEnter = () => ring.classList.add('expanded')
    const onLeave = () => ring.classList.remove('expanded')

    window.addEventListener('mousemove', onMove)
    animId = requestAnimationFrame(animate)

    const interactives = document.querySelectorAll('button, a, [data-cursor]')
    interactives.forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(animId)
    }
  }, [])
}
