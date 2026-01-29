import React, { useState } from 'react';
import { X, Mail, Lock, User } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import './AuthModal.css';

const AuthModal = ({ isOpen, onClose }) => {
    const [isLogin, setIsLogin] = useState(true);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        nombre: ''
    });

    const { login, register } = useAuth();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

        try {
            let result;
            if (isLogin) {
                result = await login(formData.email, formData.password);
            } else {
                result = await register(formData.email, formData.password, formData.nombre);
            }

            setMessage(result.message);

            if (result.success) {
                setTimeout(() => {
                    onClose();
                    setFormData({ email: '', password: '', nombre: '' });
                    setIsLogin(true);
                }, 1500);
            }
        } catch (error) {
            setMessage('Error: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="auth-modal-overlay" onClick={onClose}>
            <div className="auth-modal" onClick={(e) => e.stopPropagation()}>
                <button className="auth-modal-close" onClick={onClose}>
                    <X size={24} />
                </button>

                <div className="auth-modal-header">
                    <h2>{isLogin ? 'Iniciar Sesión' : 'Registrarse'}</h2>
                    <p>{isLogin ? 'Accede a tu cuenta' : 'Crea una nueva cuenta'}</p>
                </div>

                <form onSubmit={handleSubmit} className="auth-form">
                    {!isLogin && (
                        <div className="form-group">
                            <label htmlFor="nombre">
                                <User size={18} />
                                <span>Nombre</span>
                            </label>
                            <input
                                type="text"
                                id="nombre"
                                name="nombre"
                                placeholder="Tu nombre completo"
                                value={formData.nombre}
                                onChange={handleChange}
                                required={!isLogin}
                            />
                        </div>
                    )}

                    <div className="form-group">
                        <label htmlFor="email">
                            <Mail size={18} />
                            <span>Email</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="tu@email.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">
                            <Lock size={18} />
                            <span>Contraseña</span>
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Mínimo 6 caracteres"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            minLength="6"
                        />
                    </div>

                    {message && (
                        <div className={`auth-message ${message.includes('Error') || message.includes('incorrectos') ? 'error' : 'success'}`}>
                            {message}
                        </div>
                    )}

                    <button 
                        type="submit" 
                        className="auth-submit-btn"
                        disabled={loading}
                    >
                        {loading ? 'Procesando...' : (isLogin ? 'Iniciar Sesión' : 'Registrarse')}
                    </button>
                </form>

                <div className="auth-toggle">
                    <p>
                        {isLogin ? '¿No tienes cuenta? ' : '¿Ya tienes cuenta? '}
                        <button
                            type="button"
                            onClick={() => {
                                setIsLogin(!isLogin);
                                setMessage('');
                                setFormData({ email: '', password: '', nombre: '' });
                            }}
                        >
                            {isLogin ? 'Registrate' : 'Inicia sesión'}
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AuthModal;
