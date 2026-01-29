import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

// Usar URL relativa para que funcione tanto en localhost como en Codespaces
const API_URL = '';

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth debe usarse dentro de AuthProvider');
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    // Cargar usuario desde localStorage al montar
    useEffect(() => {
        const savedUser = localStorage.getItem('currentUser');
        if (savedUser) {
            try {
                setUser(JSON.parse(savedUser));
                setIsAuthenticated(true);
                console.log('✅ Usuario cargado desde localStorage');
            } catch (error) {
                console.error('❌ Error al cargar usuario:', error);
            }
        }
        setLoading(false);
    }, []);

    const login = async (email, password) => {
        console.log('\n🔐 === INICIANDO LOGIN ===');
        console.log('📧 Email:', email);
        console.log('🔗 URL:', `${API_URL}/api/auth/login`);
        
        try {
            const response = await fetch(`${API_URL}/api/auth/login`, {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password })
            });

            console.log('📊 Status:', response.status);
            const result = await response.json();
            console.log('📝 Respuesta del servidor:', result);

            if (result.success) {
                setUser(result.user);
                setIsAuthenticated(true);
                localStorage.setItem('currentUser', JSON.stringify(result.user));
                console.log('✅ Login exitoso');
            }

            return result;
        } catch (error) {
            console.error('❌ Error en login:', error);
            return { success: false, message: 'Error de conexión: ' + error.message };
        }
    };

    const register = async (email, password, nombre) => {
        console.log('\n📝 === INICIANDO REGISTRO ===');
        console.log('📧 Email:', email);
        console.log('👤 Nombre:', nombre);
        console.log('🔗 URL:', `${API_URL}/api/auth/register`);
        
        try {
            console.log('📤 Enviando solicitud...');
            const response = await fetch(`${API_URL}/api/auth/register`, {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password, nombre })
            });

            console.log('📊 Status HTTP:', response.status);
            const result = await response.json();
            console.log('📝 Respuesta del servidor:', result);

            if (result.success) {
                setUser(result.user);
                setIsAuthenticated(true);
                localStorage.setItem('currentUser', JSON.stringify(result.user));
                console.log('✅ Registro exitoso');
            }

            return result;
        } catch (error) {
            console.error('❌ Error en registro:', error);
            return { success: false, message: 'Error de conexión: ' + error.message };
        }
    };

    const logout = () => {
        console.log('🚪 === CERRANDO SESIÓN ===');
        setUser(null);
        setIsAuthenticated(false);
        localStorage.removeItem('currentUser');
        console.log('✅ Sesión cerrada');
    };

    const value = {
        user,
        isAuthenticated,
        loading,
        login,
        register,
        logout
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};
