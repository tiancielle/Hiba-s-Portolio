import { useState, useEffect, useMemo } from 'react'
import { HERO, TYPING_TEXTS } from '../data/data'
import styles from './Hero.module.css'

function useTyping(texts) {
  const [out, setOut] = useState(''); const [idx, setIdx] = useState(0)
  const [ch, setCh] = useState(0); const [del, setDel] = useState(false)
  useEffect(() => {
    const cur = texts[idx]; let t
    if (!del) { if (ch < cur.length) { t = setTimeout(() => { setOut(cur.slice(0, ch + 1)); setCh(c => c + 1) }, 65) } else { t = setTimeout(() => setDel(true), 1800) } }
    else { if (ch > 0) { t = setTimeout(() => { setOut(cur.slice(0, ch - 1)); setCh(c => c - 1) }, 38) } else { setDel(false); setIdx(i => (i + 1) % texts.length) } }
    return () => clearTimeout(t)
  }, [ch, del, idx, texts])
  return out
}

export default function Hero({ lang }) {
  const t = HERO[lang]
  const displayed = useTyping(TYPING_TEXTS[lang])
  const particles = useMemo(() => Array.from({ length: 16 }, (_, i) => ({ id: i, size: Math.random() * 7 + 3, left: Math.random() * 100, top: Math.random() * 100, delay: Math.random() * 6, dur: Math.random() * 6 + 7 })), [])
  const go = href => e => { e.preventDefault(); document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' }) }

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.blobA} /><div className={styles.blobB} />
      <div className={styles.particles} aria-hidden>
        {particles.map(p => <span key={p.id} className={styles.particle} style={{ width: p.size, height: p.size, left: `${p.left}%`, top: `${p.top}%`, animationDelay: `${p.delay}s`, animationDuration: `${p.dur}s` }} />)}
      </div>
      <div className={styles.inner}>
        <div className={styles.copy}>
          <div className={styles.eyebrow}><span className={styles.dot} />{t.eyebrow}</div>
          <h1 className={styles.name}><em>Hiba</em><br />Nasri</h1>
          <p className={styles.role}>{displayed}<span className={styles.cursor} /></p>
          <p className={styles.tagline}>{t.tagline}</p>
          <div className={styles.btns}>
            <a href="#projects" className="btn btn-primary" onClick={go('#projects')}>{t.cta}</a>
            <a href="#contact"  className="btn btn-outline"  onClick={go('#contact')}>{t.ctaGhost}</a>
          </div>
        </div>
        <div className={styles.visual}>
          <div className={styles.frame}>
            {/* Replace with: <img src="/assets/images/hiba.jpg" alt="Hiba Nasri" /> */}
            <div className={styles.fallback}>✦</div>
          </div>
          <div className={`${styles.badge} ${styles.badgeL}`}><span className={styles.bl}>{t.badge1.label}</span><span className={styles.bv}>{t.badge1.value}</span></div>
          <div className={`${styles.badge} ${styles.badgeR}`}><span className={styles.bl}>{t.badge2.label}</span><span className={styles.bv}>{t.badge2.value}</span></div>
        </div>
      </div>
    </section>
  )
}
