import React, { useState, useMemo } from 'react';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import '../styles/Home.css';
import product1 from '../assets/product1.png';
import product2 from '../assets/product2.png';
import product3 from '../assets/product3.png';

const products = [
    {
        id: 1,
        title: 'Correa Táctica K9',
        price: '34.99 €',
        category: 'Táctico',
        image: product1
    },
    {
        id: 2,
        title: 'Cuero Ranger',
        price: '49.99 €',
        category: 'Clásico',
        image: product2
    },
    {
        id: 3,
        title: 'Cuerda Alpina',
        price: '29.99 €',
        category: 'Aventura',
        image: product3
    },
    {
        id: 4,
        title: 'Correa Táctica Negra',
        price: '34.99 €',
        category: 'Táctico',
        image: product1
    },
    {
        id: 5,
        title: 'Cuero Vintage',
        price: '54.99 €',
        category: 'Clásico',
        image: product2
    },
    {
        id: 6,
        title: 'Cuerda Marina',
        price: '29.99 €',
        category: 'Aventura',
        image: product3
    }
];

const CATEGORIES = [
    { id: 'all', name: 'Todos' },
    { id: 'Táctico', name: 'Táctico' },
    { id: 'Clásico', name: 'Clásico' },
    { id: 'Aventura', name: 'Aventura' }
];

const Home = () => {
    const [activeCategory, setActiveCategory] = useState('all');

    const filteredProducts = useMemo(() => {
        if (activeCategory === 'all') {
            return products;
        }
        return products.filter(product => product.category === activeCategory);
    }, [activeCategory]);

    return (
        <div className="home-page">
            <Hero />

            <section className="products-section" id="shop">
                <div className="section-header">
                    <div>
                        <h2 className="section-title">Colección Destacada</h2>
                        <p className="section-subtitle">
                            Descubre nuestras mejores correas seleccionadas para ti
                        </p>
                    </div>
                </div>

                {/* Category Filter */}
                <div className="category-filter">
                    {CATEGORIES.map(category => (
                        <button
                            key={category.id}
                            className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                            onClick={() => setActiveCategory(category.id)}
                        >
                            <span className="category-label">{category.name}</span>
                        </button>
                    ))}
                </div>

                {/* Products Grid */}
                <div className="products-container">
                    {filteredProducts.length > 0 ? (
                        <div className="products-grid">
                            {filteredProducts.map((product, index) => (
                                <div 
                                    key={product.id} 
                                    className="product-item"
                                    style={{
                                        animation: `slideInUp 0.5s ease-out ${index * 0.1}s both`
                                    }}
                                >
                                    <ProductCard product={product} />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="no-products">
                            <p>No hay productos en esta categoría</p>
                        </div>
                    )}
                </div>

                {/* Products Count */}
                <div className="products-count">
                    <p>Mostrando <strong>{filteredProducts.length}</strong> de <strong>{products.length}</strong> productos</p>
                </div>
            </section>

            <section className="about-summary">
                <h2 className="section-title">Nuestra Misión</h2>
                <p>
                    En Correas Aventura, fusionamos la durabilidad del equipo táctico con la elegancia del diseño clásico.
                    Cada correa está diseñada para resistir las condiciones más extremas, asegurando que tú y tu compañero
                    canino estéis listos para cualquier desafío.
                </p>
                <button className="btn btn-primary">Conócenos</button>
            </section>
        </div>
    );
};

export default Home;
