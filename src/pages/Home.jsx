import React from 'react';
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

const Home = () => {
    return (
        <div className="home-page">
            <Hero />

            <section className="products-section" id="shop">
                <h2 className="section-title">Colección Destacada</h2>
                <div className="products-grid">
                    {products.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
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
