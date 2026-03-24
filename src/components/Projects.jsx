import { useState, useEffect, useCallback } from 'react'
import { PROJECTS, PROJECTS_SECTION } from '../data/data'
import useFadeIn from '../hooks/useFadeIn'
import styles from './Projects.module.css'

function GitHubIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
    </svg>
  )
}

/* ── Album modal ── */
function AlbumModal({ project, lang, t, onClose }) {
  const [idx, setIdx] = useState(0)
  const album = project.album || []
  const total = album.length
  const shot  = album[idx] || null

  const handleKey = useCallback(e => {
    if (e.key === 'Escape')     onClose()
    if (e.key === 'ArrowRight') setIdx(i => (i + 1) % total)
    if (e.key === 'ArrowLeft')  setIdx(i => (i - 1 + total) % total)
  }, [onClose, total])

  useEffect(() => {
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', handleKey); document.body.style.overflow = '' }
  }, [handleKey])

  return (
    <div className={styles.backdrop} onClick={onClose} role="dialog" aria-modal="true">
      <div className={styles.modal} onClick={e => e.stopPropagation()}>

        {/* Top bar */}
        <div className={styles.modalTop}>
          <div className={styles.modalLeft}>
            <h2 className={styles.modalTitle}>{project[lang].title}</h2>
            <div className={styles.modalTags}>{project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}</div>
          </div>
          <div className={styles.modalRight}>
            {project.github && (
              <a href={project.github} className={styles.githubBtn} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}>
                <GitHubIcon />{t.codeBtn}
              </a>
            )}
            <button className={styles.closeBtn} onClick={onClose}>✕</button>
          </div>
        </div>

        {/* Image viewer */}
        <div className={styles.viewer}>
          {total > 1 && <button className={`${styles.navBtn} ${styles.navPrev}`} onClick={e => { e.stopPropagation(); setIdx(i => (i - 1 + total) % total) }}>‹</button>}
          <div className={styles.imgBox} style={{ background: shot?.src ? 'var(--bg)' : project.gradient }}>
            {shot?.src
              ? <img key={idx} src={shot.src} alt={shot[lang]?.caption || `Screenshot ${idx + 1}`} className={styles.mainImg} />
              : (
                <div className={styles.imgEmpty}>
                  <span className={styles.emptyIcon}>🖼</span>
                  <span className={styles.emptyLabel}>{t.noImg}</span>
                  <code className={styles.emptyPath}>/assets/images/{project.id}-{idx + 1}.png</code>
                </div>
              )
            }
          </div>
          {total > 1 && <button className={`${styles.navBtn} ${styles.navNext}`} onClick={e => { e.stopPropagation(); setIdx(i => (i + 1) % total) }}>›</button>}
        </div>

        {/* Caption */}
        <div className={styles.captionRow}>
          <p className={styles.caption}>{shot?.[lang]?.caption || ''}</p>
          {total > 1 && <span className={styles.counter}>{idx + 1}&nbsp;{t.ofLabel}&nbsp;{total}</span>}
        </div>

        {/* Thumbnail strip */}
        {total > 1 && (
          <div className={styles.strip}>
            {album.map((s, i) => (
              <button key={i} className={`${styles.thumb} ${i === idx ? styles.thumbOn : ''}`} onClick={e => { e.stopPropagation(); setIdx(i) }}>
                {s.src
                  ? <img src={s.src} alt="" className={styles.thumbImg} />
                  : <div className={styles.thumbBlank} style={{ background: project.gradient }}><span>{i + 1}</span></div>
                }
                {i === idx && <div className={styles.thumbBar} />}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

/* ── Project card ── */
function ProjectCard({ project, lang, t, onOpen }) {
  const cover = project.album?.find(s => s.src)
  const count = project.album?.length || 0
  return (
    <article className={`${styles.card} project-card`} onClick={onOpen} role="button" tabIndex={0} onKeyDown={e => e.key === 'Enter' && onOpen()}>
      <div className={styles.cardVisual} style={{ background: project.gradient }}>
        {cover && <img src={cover.src} alt={project[lang].title} className={styles.cardCover} />}
        <div className={styles.cardOverlay}>
          <span className={styles.overlayPill}>{count > 0 ? (lang === 'fr' ? `${count} captures` : `${count} screenshots`) : (lang === 'fr' ? 'Explorer →' : 'Explore →')}</span>
        </div>
        {count > 0 && <span className={styles.badge}>{count}</span>}
      </div>
      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{project[lang].title}</h3>
        <p className={styles.cardDesc}>{project[lang].desc}</p>
        <div className={styles.cardTags}>{project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}</div>
        <div className={styles.cardFooter}>
          <span className={styles.cardHint}>{lang === 'fr' ? 'Cliquer pour explorer' : 'Click to explore'} →</span>
          {project.github && (
            <a href={project.github} className={styles.cardGhBtn} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} title="GitHub">
              <GitHubIcon />
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export default function Projects({ lang }) {
  const t   = PROJECTS_SECTION[lang]
  const ref = useFadeIn()
  const [active, setActive] = useState(null)
  return (
    <section id="projects" className="section" ref={ref}>
      <div className="container">
        <div className="fade-up">
          <span className="section-label">{t.label}</span>
          <h2 className="section-title">{t.title}</h2>
          <div className="section-sep" />
          <p className="section-sub">{t.sub}</p>
        </div>
        <div className={styles.grid}>
          {PROJECTS.map((p, i) => (
            <div key={p.id} className={`fade-up d${Math.min(i + 1, 4)}`}>
              <ProjectCard project={p} lang={lang} t={t} onOpen={() => setActive(p.id)} />
            </div>
          ))}
        </div>
      </div>
      {active && <AlbumModal project={PROJECTS.find(p => p.id === active)} lang={lang} t={t} onClose={() => setActive(null)} />}
    </section>
  )
}
