import business from '../data/business'
import translations from '../data/translations'

function Contact({ language }) {
  const t = translations[language]

  const whatsappUrl =
    `https://wa.me/${business.whatsapp}`

  return (
    <section id="contact" className="contact">

      <div className="contact-content">

        <span className="hero-label">
          {t.contacts}
        </span>

        <h2>
          {t.contactTitle}
        </h2>

        <p>
          {t.contactDescription}
        </p>

        <div className="contact-info">

          <div className="contact-item">

            <span>
              📍 {t.address}
            </span>

            <strong>
              {business.address}
            </strong>

          </div>

          <div className="contact-item">

            <span>
              ⏰ {t.workingHours}
            </span>

            <strong>
              {business.workingHours}
            </strong>

          </div>

          <div className="contact-item">

            <span>
              📞 {t.phone}
            </span>

            <strong>
              +{business.phone}
            </strong>

          </div>

        </div>

        <div className="contact-actions">

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="primary-button"
          >
            {t.whatsapp}
          </a>

          <a
            href={business.instagram}
            target="_blank"
            rel="noreferrer"
            className="secondary-button"
          >
            {t.instagram}
          </a>

          <a
            href={business.telegram}
            target="_blank"
            rel="noreferrer"
            className="secondary-button"
          >
            {t.telegram}
          </a>

        </div>

      </div>

    </section>
  )
}

export default Contact