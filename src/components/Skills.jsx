import { useState, useRef, useEffect } from 'react'
import { SKILL_CATEGORIES, SKILLS_SECTION } from '../data/data'
import useFadeIn from '../hooks/useFadeIn'
import styles from './Skills.module.css'

function SkillLogo({ src, name }) {
  const [err, setErr] = useState(false)
  if (!src || err) return <span className={styles.logoFallback}>{name[0]}</span>
  return <img src={src} alt={name} className={styles.logoImg} onError={() => setErr(true)} />
}

function SkillRow({ skill, animate }) {
  return (
    <div className={styles.skillRow}>
      <div className={styles.skillInfo}>
        <div className={styles.logoWrap}><SkillLogo src={skill.logo} name={skill.name} /></div>
        <span className={styles.skillName}>{skill.name}</span>
        <span className={styles.skillPct}>{skill.level}%</span>
      </div>
      <div className={styles.barTrack}>
        <div className={styles.barFill} style={{ width: animate ? `${skill.level}%` : '0%' }} />
      </div>
    </div>
  )
}

function CategoryCard({ cat, lang, defaultOpen }) {
  const [open,    setOpen]    = useState(defaultOpen || false)
  const [animate, setAnimate] = useState(defaultOpen || false)

  useEffect(() => {
    if (open) { const t = setTimeout(() => setAnimate(true), 180); return () => clearTimeout(t) }
    else { setAnimate(false) }
  }, [open])

  return (
    <div className={`${styles.catCard} skill-cat ${open ? styles.catOpen : ''}`}>
      <button className={styles.catHeader} onClick={() => setOpen(v => !v)} aria-expanded={open}>
        <span className={styles.catIcon}>{cat.icon}</span>
        <div className={styles.catMeta}>
          <span className={styles.catName}>{cat[lang].name}</span>
          <span className={styles.catDesc}>{cat[lang].desc}</span>
        </div>
        <span className={styles.catCount}>{cat.skills.length}</span>
        <span className={`${styles.chevron} ${open ? styles.chevronUp : ''}`}>›</span>
      </button>
      <div className={styles.catBody} style={{ maxHeight: open ? `${cat.skills.length * 68 + 32}px` : '0px' }}>
        <div className={styles.catBodyInner}>
          {cat.skills.map(s => <SkillRow key={s.name} skill={s} animate={animate} />)}
        </div>
      </div>
    </div>
  )
}

export default function Skills({ lang }) {
  const t   = SKILLS_SECTION[lang]
  const ref = useFadeIn()
  return (
    <section id="skills" className="section section-alt" ref={ref}>
      <div className="container">
        <div className="fade-up" style={{ marginBottom: '3rem', maxWidth: 560 }}>
          <span className="section-label">{t.label}</span>
          <h2 className="section-title">{t.title}</h2>
          <div className="section-sep" />
          <p className="section-sub">{t.sub}</p>
        </div>
        <div className={styles.grid}>
          {SKILL_CATEGORIES.map((cat, i) => (
            <div key={cat.id} className={`fade-up d${Math.min(i + 1, 5)}`}>
              <CategoryCard cat={cat} lang={lang} defaultOpen={i === 0} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
