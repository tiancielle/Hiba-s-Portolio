import { useState, useEffect } from 'react'
export default function ScrollProgress() {
  const [w, setW] = useState(0)
  useEffect(() => {
    const fn = () => { const d = document.documentElement; setW(d.scrollHeight - d.clientHeight > 0 ? (d.scrollTop / (d.scrollHeight - d.clientHeight)) * 100 : 0) }
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])
  return <div className="scroll-progress" style={{ width: `${w}%` }} />
}
