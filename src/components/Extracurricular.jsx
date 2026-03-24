import { EXTRACURRICULAR, EXTRA_SECTION } from '../data/data'
import useFadeIn from '../hooks/useFadeIn'
import styles from './Extracurricular.module.css'

const TYPE_COLORS = {
  role:        { bg: '#FF7F7F', light: 'rgba(255,127,127,.12)' },
  hackathon:   { bg: '#FFB5B5', light: 'rgba(255,181,181,.15)' },
  event:       { bg: '#FF9A9A', light: 'rgba(255,154,154,.12)' },
  volunteer:   { bg: '#FF7F7F', light: 'rgba(255,127,127,.12)' },
  competition: { bg: '#FFB5B5', light: 'rgba(255,181,181,.15)' },
}

function ExtraCard({ item, lang, index }) {
  const d = item[lang]
  const col = TYPE_COLORS[item.type] || TYPE_COLORS.role

  return (
    <div
      className={`${styles.card} extra-card fade-up d${Math.min(index + 1, 4)}`}
      style={{ '--strip-color': item.color || col.bg }}
    >
      {/* Colour strip */}
      <div className={styles.strip} style={{ background: item.color || col.bg }} />

      {/* Icon bubble */}
      <div className={styles.iconWrap} style={{ background: col.light, border: `1.5px solid ${item.color || col.bg}33` }}>
        <span className={styles.icon}>{item.icon}</span>
      </div>

      {/* Content */}
      <div className={styles.content}>
        <div className={styles.topRow}>
          <h3 className={styles.title}>{d.title}</h3>
          <span className={styles.period}>{d.period}</span>
        </div>

        <p className={styles.org} style={{ color: item.color || 'var(--accent-text)' }}>{d.org}</p>
        <p className={styles.desc}>{d.desc}</p>

        <div className={styles.tags}>
          {d.tags?.map(tag => <span key={tag} className="tag">{tag}</span>)}
        </div>
      </div>
    </div>
  )
}

export default function Extracurricular({ lang }) {
  const t   = EXTRA_SECTION[lang]
  const ref = useFadeIn()

  return (
    <section id="extracurricular" className="section" ref={ref}>
      <div className="container">
        <div className="fade-up" style={{ marginBottom: '3rem' }}>
          <span className="section-label">{t.label}</span>
          <h2 className="section-title">{t.title}</h2>
          <div className="section-sep" />
          <p className="section-sub">{t.sub}</p>
        </div>

        <div className={styles.grid}>
          {EXTRACURRICULAR.map((item, i) => (
            <ExtraCard key={item.id} item={item} lang={lang} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
