import business from '../data/business'

function ProductCard({ product, language }) {

  const name = product.name[language]
  const description = product.description[language]

  const orderText = language === 'kz'
    ? 'Тапсырыс беру'
    : 'Заказать'

  function handleOrder() {
    const phone = business.phone

    const message =
      language === 'kz'
        ? `Сәлеметсіз бе! ${name} тапсырыс бергім келеді. Бағасы: ${product.price.toLocaleString('ru-RU')} ₸`
        : `Здравствуйте! Хочу заказать ${name}. Цена: ${product.price.toLocaleString('ru-RU')} ₸`

    const whatsappUrl =
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`

    window.open(whatsappUrl, '_blank')
  }

  function handleImageError(event) {
    event.currentTarget.style.display = 'none'
    event.currentTarget.parentElement.classList.add('image-fallback')
  }

  return (
    <article className="product-card">

      <div className="product-image">

        <img
          src={product.image}
          alt={name}
          onError={handleImageError}
        />

        <div className="fallback-content">
          <span>{product.emoji || '☕'}</span>
          <strong>AROMA</strong>
        </div>

      </div>

      <div className="product-info">

        <div className="product-top">

          <h3>{name}</h3>

          <strong>
            {product.price.toLocaleString('ru-RU')} ₸
          </strong>

        </div>

        <p>{description}</p>

        <button
          className="order-button"
          onClick={handleOrder}
        >
          {orderText}
        </button>

      </div>

    </article>
  )
}

export default ProductCard