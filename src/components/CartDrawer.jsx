import React from 'react';
import { X, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './CartDrawer.css';

const CartDrawer = () => {
    const {
        isCartOpen,
        setIsCartOpen,
        cartItems,
        removeFromCart,
        updateQuantity,
        total
    } = useCart();

    const handleBackdropClick = (e) => {
        if (e.target.classList.contains('cart-overlay')) {
            setIsCartOpen(false);
        }
    };

    return (
        <div
            className={`cart-overlay ${isCartOpen ? 'open' : ''}`}
            onClick={handleBackdropClick}
        >
            <div className="cart-drawer">
                <div className="cart-header">
                    <h2 className="cart-title">Tu Carrito</h2>
                    <button className="close-btn" onClick={() => setIsCartOpen(false)}>
                        <X size={24} />
                    </button>
                </div>

                <div className="cart-items">
                    {cartItems.length === 0 ? (
                        <div className="empty-cart">
                            <p>Tu carrito está vacío.</p>
                            <p>¡Equipa a tu compañero!</p>
                        </div>
                    ) : (
                        cartItems.map(item => (
                            <div key={item.id} className="cart-item">
                                <img src={item.image} alt={item.title} className="cart-item-img" />
                                <div className="cart-item-details">
                                    <h3 className="cart-item-title">{item.title}</h3>
                                    <p className="cart-item-price">{item.price}</p>
                                    <div className="cart-item-controls">
                                        <button
                                            className="qty-btn"
                                            onClick={() => updateQuantity(item.id, -1)}
                                        >-</button>
                                        <span>{item.quantity}</span>
                                        <button
                                            className="qty-btn"
                                            onClick={() => updateQuantity(item.id, 1)}
                                        >+</button>
                                        <button
                                            className="remove-btn"
                                            onClick={() => removeFromCart(item.id)}
                                        >
                                            <Trash2 size={16} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {cartItems.length > 0 && (
                    <div className="cart-footer">
                        <div className="cart-total">
                            <span>Total:</span>
                            <span>{total.toFixed(2)} €</span>
                        </div>
                        <button className="btn btn-primary btn-checkout" onClick={() => alert('Checkout no implementado')}>
                            Proceder al Pago
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartDrawer;
