import { useState } from 'react'
import { EXPERIENCES, EXPERIENCE_SECTION } from '../data/data'
import useFadeIn from '../hooks/useFadeIn'
import styles from './Experience.module.css'

/* Company logo with letter fallback */
function CompanyLogo({ company, logoUrl, color }) {
  const [err, setErr] = useState(false)
  const initial = company[0].toUpperCase()
  return (
    <div className={styles.logo} style={{ background: err || !logoUrl ? (color || '#FFB5B5') : '#fff' }}>
      {logoUrl && !err
        ? <img src={logoUrl} alt={company} className={styles.logoImg} onError={() => setErr(true)} />
        : <span className={styles.logoFallback} style={{ background: color || '#FFB5B5' }}>{initial}</span>
      }
    </div>
  )
}

/* Type badge */
const TYPE_LABELS = {
  internship: { fr: 'Stage',    en: 'Internship' },
  freelance:  { fr: 'Freelance', en: 'Freelance' },
  job:        { fr: 'CDI / CDD', en: 'Full-time'  },
}

function ExperienceCard({ exp, lang, index }) {
  const [open, setOpen] = useState(index === 0)
  const d = exp[lang]
  const typeLabel = TYPE_LABELS[exp.type]?.[lang] || exp.type

  return (
    <div className={`${styles.card} exp-card fade-up d${Math.min(index + 1, 4)}`}>
      {/* Top strip */}
      <div className={styles.strip} style={{ background: exp.logoColor || 'var(--accent-d)' }} />

      {/* Header — always visible */}
      <div className={styles.header}>
        <CompanyLogo company={exp.company} logoUrl={exp.logo} color={exp.logoColor} />

        <div className={styles.meta}>
          <div className={styles.metaTop}>
            <div>
              <h3 className={styles.role}>{d.role}</h3>
              <p className={styles.company}>{exp.companyFull || exp.company}</p>
            </div>
            <span className={styles.typeBadge} style={{ color: exp.logoColor || 'var(--accent-text)', borderColor: exp.logoColor || 'var(--border)' }}>
              {typeLabel}
            </span>
          </div>
          <div className={styles.metaBottom}>
            <span className={styles.period}>📅 {d.period}</span>
            <span className={styles.location}>📍 {exp.location}</span>
          </div>
        </div>

        <button className={`${styles.toggle} ${open ? styles.toggleOpen : ''}`} onClick={() => setOpen(v => !v)} aria-label="Expand">›</button>
      </div>

      {/* Expandable body */}
      <div className={`${styles.body} ${open ? styles.bodyOpen : ''}`}>
        <div className={styles.bodyInner}>
          <p className={styles.desc}>{d.desc}</p>

          {d.tasks?.length > 0 && (
            <ul className={styles.tasks}>
              {d.tasks.map((task, i) => (
                <li key={i} className={styles.task}>
                  <span className={styles.taskDot} />
                  {task}
                </li>
              ))}
            </ul>
          )}

          <div className={styles.tags}>
            {exp.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Experience({ lang }) {
  const t   = EXPERIENCE_SECTION[lang]
  const ref = useFadeIn()

  return (
    <section id="experience" className="section section-alt" ref={ref}>
      <div className="two-col container">
        <div className="two-col-hdr fade-up">
          <span className="section-label">{t.label}</span>
          <h2 className="section-title">{t.title}</h2>
          <div className="section-sep" />
          <p className="section-sub">{t.sub}</p>
        </div>

        <div className={styles.list}>
          {EXPERIENCES.map((exp, i) => (
            <ExperienceCard key={exp.id} exp={exp} lang={lang} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
