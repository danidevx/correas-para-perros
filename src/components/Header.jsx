import React from 'react';
import { ShoppingCart, User, Search, Menu } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const { cartItems, setIsCartOpen } = useCart();
    const navigate = useNavigate();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    const handleSearchClick = () => {
        navigate('/shop', { state: { focusSearch: true } });
    };

    return (
        <header className="header">
            <Link to="/" className="header-logo" onClick={() => setIsMenuOpen(false)}>
                Correas Aventura
            </Link>

            <nav className={`header-nav ${isMenuOpen ? 'active' : ''}`}>
                <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>Inicio</Link>
                <Link to="/shop" className="nav-link" onClick={() => setIsMenuOpen(false)}>Tienda</Link>
                <Link to="/about" className="nav-link" onClick={() => setIsMenuOpen(false)}>Nosotros</Link>
                <Link to="/contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>Contacto</Link>
            </nav>

            <div className="header-actions">
                <button className="icon-btn" aria-label="Search" onClick={handleSearchClick}>
                    <Search size={20} />
                </button>
                <button className="icon-btn" aria-label="Account">
                    <User size={20} />
                </button>
                <button className="icon-btn" aria-label="Cart" onClick={() => setIsCartOpen(true)}>
                    <div style={{ position: 'relative' }}>
                        <ShoppingCart size={20} />
                        {cartCount > 0 && (
                            <span style={{
                                position: 'absolute',
                                top: '-8px',
                                right: '-8px',
                                background: 'var(--color-primary)',
                                color: 'var(--color-bg-dark)',
                                borderRadius: '50%',
                                width: '18px',
                                height: '18px',
                                fontSize: '0.7rem',
                                fontWeight: 'bold',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                {cartCount}
                            </span>
                        )}
                    </div>
                </button>
                <button className="icon-btn mobile-menu-btn" aria-label="Menu" onClick={toggleMenu}>
                    {isMenuOpen ? <Menu size={24} className="rotate-90" /> : <Menu size={24} />}
                </button>
            </div>
        </header>
    );
};

export default Header;
