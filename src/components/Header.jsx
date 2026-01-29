import React, { useState, useRef, useEffect } from 'react';
import { ShoppingCart, User, Search, Menu, LogOut } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import AuthModal from './AuthModal';
import './Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
    const [userMenuPos, setUserMenuPos] = useState({ top: 0, right: 0 });
    const userButtonRef = useRef(null);
    const { cartItems, setIsCartOpen } = useCart();
    const { user, isAuthenticated, logout } = useAuth();
    const navigate = useNavigate();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    const handleSearchClick = () => {
        navigate('/shop', { state: { focusSearch: true } });
    };

    const handleAccountClick = () => {
        if (isAuthenticated) {
            // Mostrar menu de usuario
        } else {
            setIsAuthModalOpen(true);
        }
    };

    const handleLogout = () => {
        logout();
    };

    // Actualizar posición del dropdown cuando el componente monte
    useEffect(() => {
        const updatePosition = () => {
            if (userButtonRef.current) {
                const rect = userButtonRef.current.getBoundingClientRect();
                setUserMenuPos({
                    top: rect.bottom,
                    right: window.innerWidth - rect.right
                });
            }
        };

        updatePosition();
        window.addEventListener('resize', updatePosition);
        return () => window.removeEventListener('resize', updatePosition);
    }, []);

    return (
        <>
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
                    
                    <div className="user-menu-wrapper">
                        <button 
                            ref={userButtonRef}
                            className="icon-btn" 
                            aria-label="Account"
                            onClick={handleAccountClick}
                            title={isAuthenticated ? user?.nombre : 'Cuenta'}
                        >
                            <User size={20} />
                        </button>
                    </div>

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

            {isAuthenticated && (
                <div 
                    className="user-menu-dropdown-portal"
                    style={{
                        position: 'fixed',
                        top: `${userMenuPos.top}px`,
                        right: `${userMenuPos.right}px`,
                        zIndex: 2000,
                        pointerEvents: 'auto'
                    }}
                >
                    <div className="user-menu-dropdown">
                        <div className="user-info">
                            <p className="user-name">{user?.nombre}</p>
                            <p className="user-email">{user?.email}</p>
                        </div>
                        <button 
                            className="logout-btn"
                            onClick={handleLogout}
                        >
                            <LogOut size={16} />
                            Cerrar Sesión
                        </button>
                    </div>
                </div>
            )}

            <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
        </>
    );
};

export default Header;
