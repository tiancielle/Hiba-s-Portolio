import { useState, useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { CERTIFICATES, CERTS_SECTION } from '../data/data'
import useFadeIn from '../hooks/useFadeIn'
import styles from './Certificates.module.css'

const ORG_COLORS = {
  'IBM':                    { bg: '#1F70C1', fg: '#fff' },
  'Meta':                   { bg: '#0866FF', fg: '#fff' },
  'EPFL':                   { bg: '#E2001A', fg: '#fff' },
  'University of Michigan': { bg: '#00274C', fg: '#FFCB05' },
  'Coursera':               { bg: '#0056D2', fg: '#fff' },
}
const DEFAULT_COL = { bg: '#FFB5B5', fg: '#1C1C1C' }

function OrgLogo({ org, logoUrl, size = 52 }) {
  const [err, setErr] = useState(false)
  const col = ORG_COLORS[org] || DEFAULT_COL
  const initials = org.split(' ').slice(0, 2).map(w => w[0]).join('').toUpperCase()
  return (
    <div className={styles.orgLogo} style={{ width: size, height: size, background: err || !logoUrl ? col.bg : 'transparent' }}>
      {logoUrl && !err
        ? <img src={logoUrl} alt={org} className={styles.orgLogoImg} onError={() => setErr(true)} />
        : <span className={styles.orgLogoFallback} style={{ color: col.fg, background: col.bg }}>{initials}</span>
      }
    </div>
  )
}

function CertLightbox({ cert, t, onClose }) {
  const handleKey = useCallback(e => { if (e.key === 'Escape') onClose() }, [onClose])
  useEffect(() => {
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', handleKey); document.body.style.overflow = '' }
  }, [handleKey])

  /* ↓ Portal: renders directly on <body>, completely outside the card DOM tree.
       This is why the lightbox was clipped before — it was inside overflow:hidden. */
  return createPortal(
    <div className={styles.lbBackdrop} onClick={onClose} role="dialog" aria-modal="true">
      <div className={styles.lbBox} onClick={e => e.stopPropagation()}>
        <button className={styles.lbClose} onClick={onClose} aria-label="Fermer">✕</button>
        {cert.certImage
          ? <img src={cert.certImage} alt={cert.name} className={styles.lbImg} />
          : (
            <div className={styles.lbEmpty}>
              <span className={styles.lbEmptyIcon}>🎓</span>
              <p className={styles.lbEmptyLabel}>{t.noImg}</p>
              <code className={styles.lbEmptyPath}>/assets/certificates/{cert.id}.png</code>
            </div>
          )
        }
        <div className={styles.lbFooter}>
          <OrgLogo org={cert.org} logoUrl={cert.orgLogo} size={36} />
          <div>
            <p className={styles.lbName}>{cert.name}</p>
            <p className={styles.lbOrg}>{cert.org} · {cert.year}</p>
          </div>
          {cert.verify && (
            <a href={cert.verify} className={styles.lbVerify} target="_blank" rel="noopener noreferrer">Vérifier ↗</a>
          )}
        </div>
      </div>
    </div>,
    document.body   /* ← mounted here, not inside the card */
  )
}

function CertCard({ cert, t }) {
  const [open, setOpen] = useState(false)
  const col = ORG_COLORS[cert.org] || DEFAULT_COL

  return (
    <>
      <div className={`${styles.card} cert-card`} style={{ '--org-color': col.bg, '--org-fg': col.fg }}>
        <div className={styles.strip} style={{ background: col.bg }} />
        <div className={styles.cardHead}>
          <OrgLogo org={cert.org} logoUrl={cert.orgLogo} size={52} />
          <div className={styles.platformBadge}>
            {cert.platformLogo
              ? <img src={cert.platformLogo} alt={cert.platform} className={styles.platformLogo} />
              : <span className={styles.platformText}>{cert.platform}</span>
            }
          </div>
        </div>
        <div className={styles.cardBody}>
          <p className={styles.orgName} style={{ color: col.bg }}>{cert.org}</p>
          <h3 className={styles.certName}>{cert.name}</h3>
          <span className={styles.year}>{cert.year}</span>
        </div>
        <div className={styles.cardFoot}>
          <button className={styles.viewBtn} onClick={() => setOpen(true)} style={{ '--btn-bg': col.bg }}>
            🎓 {t.verify}
          </button>
        </div>
      </div>
      {open && <CertLightbox cert={cert} t={t} onClose={() => setOpen(false)} />}
    </>
  )
}

export default function Certificates({ lang }) {
  const t   = CERTS_SECTION[lang]
  const ref = useFadeIn()
  return (
    <section id="certificates" className="section section-alt" ref={ref}>
      <div className="container">
        <div className="fade-up">
          <span className="section-label">{t.label}</span>
          <h2 className="section-title">{t.title}</h2>
          <div className="section-sep" />
          <p className="section-sub">{t.sub}</p>
        </div>
        <div className={styles.grid}>
          {CERTIFICATES.map((cert, i) => (
            <div key={cert.id} className={`fade-up d${Math.min(i + 1, 5)}`}>
              <CertCard cert={cert} t={t} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}