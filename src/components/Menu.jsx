import translations from '../data/translations'
import ProductCard from './ProductCard'
import products from '../data/products'
import { useState } from 'react'

function Menu({ language }) {
    const t = translations[language]

    const [activeCategory, setActiveCategory] = useState('all')

    const categories = [
        { id: 'all', label: 'Все' },
        { id: 'coffee', label: '☕ Кофе' },
        { id: 'desserts', label: '🍰 Десерты' },
        { id: 'bakery', label: '🥐 Выпечка' },
        { id: 'drinks', label: '🧃 Напитки' },
    ]

    const filteredProducts =
        activeCategory === 'all'
            ? products
            : products.filter(
                (product) => product.category === activeCategory
            )

    return (
        <section id="menu" className="menu-section">

            <div className="section-header">
                <span className="section-label">
                    AROMA
                </span>

                <h2>{t.menuTitle}</h2>

                <p>
                    Авторский кофе, десерты и свежая выпечка.
                </p>
            </div>

            <div className="category-buttons">
                {categories.map((category) => (
                    <button
                        key={category.id}
                        className={
                            activeCategory === category.id
                                ? 'active'
                                : ''
                        }
                        onClick={() =>
                            setActiveCategory(category.id)
                        }
                    >
                        {category.label}
                    </button>
                ))}
            </div>

            <div className="products-grid">
                {filteredProducts.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        language={language}
                    />
                ))}
            </div>

        </section>
    )
}

export default Menu