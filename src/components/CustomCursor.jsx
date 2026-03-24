import { useEffect, useRef } from 'react'
export default function CustomCursor() {
  const ring = useRef(null); const dot = useRef(null)
  useEffect(() => {
    const r = ring.current, d = dot.current
    if (!r || !d) return
    let mx = 0, my = 0, rx = 0, ry = 0, raf
    const mv = e => { mx = e.clientX; my = e.clientY; d.style.left = `${mx}px`; d.style.top = `${my}px` }
    const lerp = (a, b, n) => a + (b - a) * n
    const tick = () => { rx = lerp(rx, mx, .12); ry = lerp(ry, my, .12); r.style.left = `${rx}px`; r.style.top = `${ry}px`; raf = requestAnimationFrame(tick) }
    const on = () => r.classList.add('hovered'), off = () => r.classList.remove('hovered')
    document.addEventListener('mousemove', mv)
    raf = requestAnimationFrame(tick)
    const els = document.querySelectorAll('a,button,.project-card,.skill-cat,.cert-card,input,textarea,.exp-card,.extra-card')
    els.forEach(el => { el.addEventListener('mouseenter', on); el.addEventListener('mouseleave', off) })
    return () => { document.removeEventListener('mousemove', mv); cancelAnimationFrame(raf); els.forEach(el => { el.removeEventListener('mouseenter', on); el.removeEventListener('mouseleave', off) }) }
  }, [])
  return (<><div ref={ring} className="cursor-ring" /><div ref={dot} className="cursor-dot" /></>)
}
