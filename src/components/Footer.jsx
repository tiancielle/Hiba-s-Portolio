import { FOOTER } from '../data/data'
import styles from './Footer.module.css'

export default function Footer({ lang }) {
  return (
    <footer className={styles.footer}>
      <span className={styles.copy}>© {new Date().getFullYear()} <strong>Hiba Nasri</strong></span>
      <span className={styles.made}>{FOOTER[lang]}</span>
      <span className={styles.loc}>Rabat, Maroc</span>
    </footer>
  )
}
