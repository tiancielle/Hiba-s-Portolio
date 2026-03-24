import { useState, useEffect } from 'react'
import { NAV_LINKS } from '../data/data'
import styles from './Navbar.module.css'

export default function Navbar({ lang, toggleLang, theme, toggleTheme }) {
  const [active,   setActive]   = useState('#hero')
  const [scrolled, setScrolled] = useState(false)
  const [open,     setOpen]     = useState(false)

  useEffect(() => {
    const sections = NAV_LINKS.map(l => document.querySelector(l.href)).filter(Boolean)
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive(`#${e.target.id}`) }),
      { threshold: 0.3 }
    )
    sections.forEach(s => obs.observe(s))
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => { obs.disconnect(); window.removeEventListener('scroll', onScroll) }
  }, [])

  const go = (e, href) => { e.preventDefault(); setOpen(false); document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' }) }

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <a href="#hero" className={styles.logo} onClick={e => go(e, '#hero')}>Hiba.dev</a>

      <ul className={styles.links}>
        {NAV_LINKS.map(l => (
          <li key={l.href}>
            <a href={l.href} className={`${styles.link} ${active === l.href ? styles.active : ''}`} onClick={e => go(e, l.href)}>
              {l[lang]}
            </a>
          </li>
        ))}
      </ul>

      <div className={styles.controls}>
        <button className={styles.langBtn} onClick={toggleLang}>{lang === 'fr' ? 'EN' : 'FR'}</button>
        <button className={`${styles.themeSwitch} ${theme === 'dark' ? styles.dark : ''}`} onClick={toggleTheme} aria-label="Toggle theme">
          <span className={styles.track}><span className={styles.thumb}>{theme === 'dark' ? '🌙' : '☀️'}</span></span>
        </button>
        <button className={`${styles.burger} ${open ? styles.open : ''}`} onClick={() => setOpen(v => !v)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </div>

      {open && (
        <div className={styles.mobileMenu}>
          {NAV_LINKS.map(l => (
            <a key={l.href} href={l.href} className={`${styles.mobileLink} ${active === l.href ? styles.active : ''}`} onClick={e => go(e, l.href)}>{l[lang]}</a>
          ))}
        </div>
      )}
    </nav>
  )
}
