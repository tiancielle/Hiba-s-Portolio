import { ABOUT } from '../data/data'
import useFadeIn from '../hooks/useFadeIn'
import styles from './About.module.css'

export default function About({ lang }) {
  const t = ABOUT[lang]
  const ref = useFadeIn()
  return (
    <section id="about" className="section section-alt" ref={ref}>
      <div className="two-col container">
        <div className="two-col-hdr fade-up">
          <span className="section-label">{t.label}</span>
          <h2 className="section-title">{t.title}</h2>
          <div className="section-sep" />
        </div>
        <div>
          <blockquote className={`${styles.highlight} fade-up d1`}>{t.highlight}</blockquote>
          <p className={`${styles.body} fade-up d2`}>{t.text}</p>
          <div className={`${styles.stats} fade-up d3`}>
            {t.stats.map(s => (
              <div key={s.l} className={styles.stat}>
                <span className={styles.n}>{s.n}</span>
                <span className={styles.l}>{s.l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
