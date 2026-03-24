import { useState, useEffect } from 'react'
import Navbar           from './components/Navbar.jsx'
import Hero             from './components/Hero.jsx'
import About            from './components/About.jsx'
import Experience       from './components/Experience.jsx'
import Extracurricular  from './components/Extracurricular.jsx'
import Skills           from './components/Skills.jsx'
import Projects         from './components/Projects.jsx'
import Certificates     from './components/Certificates.jsx'
import Contact          from './components/Contact.jsx'
import Footer           from './components/Footer.jsx'
import ScrollProgress   from './components/ScrollProgress.jsx'
import CustomCursor     from './components/CustomCursor.jsx'

export default function App() {
  const [lang,  setLang]  = useState('fr')
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <Navbar
        lang={lang}  toggleLang={() => setLang(l => l === 'fr' ? 'en' : 'fr')}
        theme={theme} toggleTheme={() => setTheme(t => t === 'light' ? 'dark' : 'light')}
      />
      <main>
        <Hero            lang={lang} />
        <About           lang={lang} />
        <Experience      lang={lang} />
        <Extracurricular lang={lang} />
        <Skills          lang={lang} />
        <Projects        lang={lang} />
        <Certificates    lang={lang} />
        <Contact         lang={lang} />
      </main>
      <Footer lang={lang} />
    </>
  )
}
