import React from 'react';
import { useCart } from '../context/CartContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();

    return (
        <div className="product-card">
            <div className="product-image-wrapper">
                <img src={product.image} alt={product.title} className="product-image" />
            </div>
            <div className="product-info">
                <div className="product-category">{product.category}</div>
                <h3 className="product-title">{product.title}</h3>
                <p className="product-price">{product.price}</p>
                <div className="product-actions">
                    <button
                        className="btn btn-primary btn-card"
                        onClick={() => addToCart(product)}
                    >
                        Añadir
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
