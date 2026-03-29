import { useState } from 'react'
import { CONTACT, SOCIALS } from '../data/data'
import useFadeIn from '../hooks/useFadeIn'
import styles from './Contact.module.css'
import emailjs from '@emailjs/browser'

export default function Contact({ lang }) {
  const t   = CONTACT[lang]
  const ref = useFadeIn()
  const [form,   setForm]   = useState({ nom: '', email: '', sujet: '', message: '' })
  const [status, setStatus] = useState('idle')

  const change = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const submit = e => {
  e.preventDefault()
  setStatus('sending')

  emailjs.send(
    'service_9p1x00l',    
    'template_epnv84m',   
    {
      from_name:  form.nom,
      from_email: form.email,
      subject:    form.sujet,
      message:    form.message,
    },
    'qLFZkC9Gh4RX9oflA'       // ← ta Public Key
  )
  .then(() => {
    setStatus('success')
    setForm({ nom: '', email: '', sujet: '', message: '' })
    setTimeout(() => setStatus('idle'), 3200)
  })
  .catch((error) => {
    console.log('EmailJS error:', error) 
    setStatus('idle')
    // console.log('EmailJS error:', error) 
    alert('Erreur lors de l\'envoi. Réessaye.')
  })
}

  const label = status === 'success' ? t.success : status === 'sending' ? t.sending : t.submit

  return (
    <section id="contact" className="section" ref={ref}>
      <div className="container">
        <div className="fade-up">
          <span className="section-label">{t.label}</span>
          <h2 className="section-title">{t.title}</h2>
          <div className="section-sep" />
        </div>
        <div className={styles.wrap}>
          <div className={`${styles.info} fade-up d1`}>
            <p className={styles.intro}>{t.intro}</p>
            <div className={styles.socials}>
              {SOCIALS.map(s => (
                <a key={s.label} href={s.href} className={styles.social}
                  target={s.href.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer">
                  {s.label}
                </a>
              ))}
            </div>
          </div>
          <form className={`${styles.form} fade-up d2`} onSubmit={submit} noValidate>
            <div className={styles.row}>
              <div className={styles.group}>
                <label className={styles.label}>{t.fields.nom}</label>
                <input type="text" name="nom" required className={styles.input} placeholder={t.placeholders.nom} value={form.nom} onChange={change} />
              </div>
              <div className={styles.group}>
                <label className={styles.label}>{t.fields.email}</label>
                <input type="email" name="email" required className={styles.input} placeholder={t.placeholders.email} value={form.email} onChange={change} />
              </div>
            </div>
            <div className={styles.group}>
              <label className={styles.label}>{t.fields.sujet}</label>
              <input type="text" name="sujet" required className={styles.input} placeholder={t.placeholders.sujet} value={form.sujet} onChange={change} />
            </div>
            <div className={styles.group}>
              <label className={styles.label}>{t.fields.message}</label>
              <textarea name="message" rows={5} required className={`${styles.input} ${styles.ta}`} placeholder={t.placeholders.message} value={form.message} onChange={change} />
            </div>
            <button type="submit" disabled={status !== 'idle'} className={`${styles.submit} ${status === 'success' ? styles.ok : ''}`}>
              {label}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
