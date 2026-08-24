import business from '../data/business'
import translations from '../data/translations'

function Footer({ language }) {
  const t = translations[language]

  return (
    <footer className="footer">

      <div className="footer-content">

        <div className="footer-brand">

          <a href="#" className="logo">
            <span className="logo-icon">☕</span>
            <span>{business.name}</span>
          </a>

          <p>
            {business.description}
          </p>

        </div>


        <div className="footer-links">

          <a href="#menu">
            {t.menu}
          </a>

          <a href="#about">
            {t.about}
          </a>

          <a href="#contact">
            {t.contacts}
          </a>

        </div>


        <div className="footer-socials">

          <a
            href={business.instagram}
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>

          <a
            href={business.telegram}
            target="_blank"
            rel="noreferrer"
          >
            Telegram
          </a>

          <a
            href={`https://wa.me/${business.whatsapp}`}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>

        </div>

      </div>


      <div className="footer-bottom">

        <span>
          © {new Date().getFullYear()} {business.name}
        </span>

        <span>
          {business.city}
        </span>

      </div>

    </footer>
  )
}

export default Footer