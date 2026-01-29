import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import product1 from '../assets/product1.png';
import product2 from '../assets/product2.png';
import product3 from '../assets/product3.png';
import '../styles/Home.css'; // Reusing grid styles

// Product data (mock)
const allProducts = [
    { id: 1, title: 'Correa Táctica K9', price: '34.99 €', category: 'Táctico', image: product1 },
    { id: 2, title: 'Cuero Ranger', price: '49.99 €', category: 'Clásico', image: product2 },
    { id: 3, title: 'Cuerda Alpina', price: '29.99 €', category: 'Aventura', image: product3 },
    { id: 4, title: 'Correa Táctica Negra', price: '34.99 €', category: 'Táctico', image: product1 },
    { id: 5, title: 'Cuero Vintage', price: '54.99 €', category: 'Clásico', image: product2 },
    { id: 6, title: 'Cuerda Marina', price: '29.99 €', category: 'Aventura', image: product3 }
];

const Shop = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const location = useLocation();

    // Handle auto-focus search from header
    useEffect(() => {
        if (location.state?.focusSearch) {
            document.getElementById('shop-search')?.focus();
        }
    }, [location]);

    const filteredProducts = allProducts.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container" style={{ paddingTop: '100px', minHeight: '80vh' }}>
            <header style={{ marginBottom: '40px', textAlign: 'center' }}>
                <h1 className="section-title">Tienda</h1>
                <input
                    id="shop-search"
                    type="text"
                    placeholder="Buscar correas..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{
                        padding: '12px 20px',
                        width: '100%',
                        maxWidth: '500px',
                        borderRadius: '30px',
                        border: '1px solid rgba(255,255,255,0.2)',
                        background: 'var(--color-bg-panel)',
                        color: '#fff',
                        fontSize: '1rem',
                        marginBottom: '20px'
                    }}
                />
                <p style={{ color: 'var(--color-text-muted)' }}>
                    Mostrando {filteredProducts.length} productos
                </p>
            </header>

            <div className="products-grid">
                {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
                {filteredProducts.length === 0 && (
                    <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '40px', color: '#888' }}>
                        No se encontraron productos que coincidan con "{searchTerm}"
                    </div>
                )}
            </div>
        </div>
    );
};

export default Shop;
