import './App.css'
import Menu from './components/Menu'
import business from './data/business'
import Contact from './components/Contact'
import { useState } from 'react'
import translations from './data/translations'
import Footer from './components/Footer'

function App() {
  const [language, setLanguage] = useState('ru')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const t = translations[language]

  function toggleLanguage() {
    setLanguage(language === 'ru' ? 'kz' : 'ru')
  }

  function closeMobileMenu() {
    setIsMenuOpen(false)
  }

  return (
    <>
      <header className="header">

        <a
          href="#"
          className="logo"
          onClick={closeMobileMenu}
        >
          <span className="logo-icon">☕</span>
          <span>{business.name}</span>
        </a>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <a href="#menu" onClick={closeMobileMenu}>
            {t.menu}
          </a>

          <a href="#about" onClick={closeMobileMenu}>
            {t.about}
          </a>

          <a href="#reviews" onClick={closeMobileMenu}>
            {t.reviews}
          </a>

          <a href="#contact" onClick={closeMobileMenu}>
            {t.contacts}
          </a>
        </nav>

        <div className="header-actions">

          <button
            className="language-button"
            onClick={toggleLanguage}
          >
            {language.toUpperCase()}
          </button>

          <a
            href="#contact"
            className="header-button"
            onClick={closeMobileMenu}
          >
            {t.reserve}
          </a>

        </div>

        <button
          className={`mobile-menu-button ${isMenuOpen ? 'active' : ''
            }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Открыть меню"
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </header>

      <main>

        <section className="hero">

          <div className="hero-content">

            <span className="hero-label">
              {t.heroLabel} • {business.city.toUpperCase()}
            </span>

            <h1>
              {t.heroTitle}
            </h1>

            <p>
              {t.heroDescription}
            </p>

            <div className="hero-actions">

              <a
                href="#menu"
                className="primary-button"
              >
                {t.menuButton}
              </a>

              <a
                href="#contact"
                className="secondary-button"
              >
                {t.findUs}
              </a>

            </div>

            <div className="hero-info">

              <div>
                <strong>
                  {business.workingHours}
                </strong>

                <span>
                  {language === 'kz'
                    ? 'Күн сайын'
                    : 'Каждый день'}
                </span>
              </div>

              <div>
                <strong>
                  {business.city}
                </strong>

                <span>
                  {business.address}
                </span>
              </div>

            </div>

          </div>

          <div className="hero-visual">

            <div className="hero-image">
              <span>COFFEE</span>
            </div>

            <div className="hero-badge">
              <strong>100%</strong>
              <span>Arabica</span>
            </div>

          </div>

        </section>

        <Menu language={language} />

        <Contact language={language} />

        <Footer language={language} />

      </main>
    </>
  )
}

export default App