import React, { useState } from 'react';
import { Mail, MapPin, Phone, Instagram, Facebook, Twitter, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [subscribeStatus, setSubscribeStatus] = useState('');

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (email) {
            setSubscribeStatus('success');
            setEmail('');
            setTimeout(() => setSubscribeStatus(''), 3000);
        }
    };

    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Main Content */}
                <div className="footer-content">
                    {/* About Section */}
                    <div className="footer-section">
                        <h3 className="footer-title">Correas Aventura</h3>
                        <p className="footer-description">
                            Equipamiento táctico y de cuero para los aventureros más exigentes. 
                            Cada correa está diseñada para resistir cualquier desafío.
                        </p>
                        <div className="footer-socials">
                            <a href="#" className="social-link" aria-label="Instagram">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="social-link" aria-label="Facebook">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="social-link" aria-label="Twitter">
                                <Twitter size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-section">
                        <h4 className="footer-subtitle">Tienda</h4>
                        <ul className="footer-links">
                            <li><Link to="/shop">Ver Colección</Link></li>
                            <li><Link to="/shop">Correas Tácticas</Link></li>
                            <li><Link to="/shop">Cuero Clásico</Link></li>
                            <li><Link to="/shop">Nuevos Productos</Link></li>
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div className="footer-section">
                        <h4 className="footer-subtitle">Empresa</h4>
                        <ul className="footer-links">
                            <li><Link to="/about">Nosotros</Link></li>
                            <li><Link to="/about">Nuestra Historia</Link></li>
                            <li><a href="#blog">Blog</a></li>
                            <li><a href="#press">Prensa</a></li>
                        </ul>
                    </div>

                    {/* Support Links */}
                    <div className="footer-section">
                        <h4 className="footer-subtitle">Soporte</h4>
                        <ul className="footer-links">
                            <li><Link to="/contact">Contacto</Link></li>
                            <li><a href="#faq">Preguntas Frecuentes</a></li>
                            <li><a href="#returns">Devoluciones</a></li>
                            <li><a href="#warranty">Garantía</a></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="footer-section footer-newsletter">
                        <h4 className="footer-subtitle">Newsletter</h4>
                        <p className="footer-description footer-newsletter-text">
                            Suscríbete para recibir noticias sobre nuevos productos y ofertas exclusivas.
                        </p>
                        <form onSubmit={handleSubscribe} className="newsletter-form">
                            <div className="newsletter-input-group">
                                <input
                                    type="email"
                                    placeholder="Tu email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="newsletter-input"
                                />
                                <button type="submit" className="newsletter-btn" aria-label="Suscribirse">
                                    <Send size={18} />
                                </button>
                            </div>
                            {subscribeStatus === 'success' && (
                                <span className="newsletter-success">¡Suscrito exitosamente!</span>
                            )}
                        </form>
                    </div>
                </div>

                {/* Contact Info Bar */}
                <div className="footer-contact-bar">
                    <a href="tel:+34912345678" className="contact-item">
                        <Phone size={18} />
                        <span>+34 912 345 678</span>
                    </a>
                    <a href="mailto:hola@correasaventura.com" className="contact-item">
                        <Mail size={18} />
                        <span>hola@correasaventura.com</span>
                    </a>
                    <div className="contact-item">
                        <MapPin size={18} />
                        <span>Madrid, España</span>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="footer-bottom">
                    <div className="footer-copyright">
                        <p>&copy; 2026 Correas Aventura. Todos los derechos reservados.</p>
                    </div>
                    <div className="footer-legal">
                        <a href="#privacy">Privacidad</a>
                        <span className="divider">•</span>
                        <a href="#terms">Términos</a>
                        <span className="divider">•</span>
                        <a href="#cookies">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
