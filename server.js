import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// ==================== MIDDLEWARE ====================
app.use(express.json());

// Servir archivos estáticos de React build
const distPath = path.join(__dirname, 'dist');
if (fs.existsSync(distPath)) {
    console.log(`📁 Sirviendo archivos estáticos desde: ${distPath}`);
    app.use(express.static(distPath));
}

// Request logging middleware (solo para API)
app.use((req, res, next) => {
    if (!req.path.startsWith('/api')) {
        return next();
    }
    const timestamp = new Date().toLocaleString('es-ES');
    console.log(`\n📋 [${timestamp}] ${req.method} ${req.path}`);
    if (Object.keys(req.body).length > 0) {
        console.log(`📝 Body:`, req.body);
    }
    next();
});

// ==================== DATABASE FUNCTIONS ====================
const dbPath = path.join(__dirname, 'src/database/usuarios.js');

const leerUsuarios = () => {
    try {
        if (!fs.existsSync(dbPath)) {
            console.log('📁 Creando archivo de usuarios...');
            fs.mkdirSync(path.dirname(dbPath), { recursive: true });
            const contenidoInicial = `export default [
    {
        id: 1,
        email: 'demo@example.com',
        password: 'demo123',
        nombre: 'Usuario Demo'
    }
];
`;
            fs.writeFileSync(dbPath, contenidoInicial, 'utf-8');
            return JSON.parse(contenidoInicial.match(/\[([\s\S]*?)\]/)[0]);
        }

        const contenido = fs.readFileSync(dbPath, 'utf-8');
        const match = contenido.match(/export default (\[[\s\S]*?\]);/);
        if (match) {
            return JSON.parse(match[1]);
        }
        return [];
    } catch (error) {
        console.error('❌ Error al leer usuarios:', error.message);
        return [];
    }
};

const guardarUsuarios = (usuarios) => {
    try {
        const contenido = `export default ${JSON.stringify(usuarios, null, 4)};
`;
        fs.writeFileSync(dbPath, contenido, 'utf-8');
        console.log('✅ Base de datos actualizada');
        return true;
    } catch (error) {
        console.error('❌ Error al guardar usuarios:', error.message);
        return false;
    }
};

// ==================== API ENDPOINTS ====================

// Health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Login endpoint
app.post('/api/auth/login', (req, res) => {
    const { email, password } = req.body;
    console.log(`🔐 Login: ${email}`);

    if (!email || !password) {
        return res.status(400).json({ success: false, message: 'Email y contraseña requeridos' });
    }

    const usuarios = leerUsuarios();
    const user = usuarios.find(u => u.email === email && u.password === password);

    if (user) {
        console.log(`✅ Login exitoso: ${email}`);
        const { password: _, ...userSafe } = user;
        res.json({ success: true, message: 'Login exitoso', user: userSafe });
    } else {
        console.log(`❌ Credenciales inválidas: ${email}`);
        res.status(401).json({ success: false, message: 'Email o contraseña incorrectos' });
    }
});

// Register endpoint
app.post('/api/auth/register', (req, res) => {
    const { email, password, nombre } = req.body;
    console.log(`📝 Registro: ${email}`);

    if (!email || !password || !nombre) {
        return res.status(400).json({ success: false, message: 'Todos los campos son requeridos' });
    }

    const usuarios = leerUsuarios();
    
    if (usuarios.find(u => u.email === email)) {
        console.log(`❌ Email ya existe: ${email}`);
        return res.status(400).json({ success: false, message: 'El email ya está registrado' });
    }

    const newUser = {
        id: Math.max(...usuarios.map(u => u.id), 0) + 1,
        email,
        password,
        nombre
    };

    usuarios.push(newUser);
    
    if (guardarUsuarios(usuarios)) {
        console.log(`✅ Usuario registrado: ${email}`);
        const { password: _, ...userSafe } = newUser;
        res.json({ success: true, message: 'Registro exitoso', user: userSafe });
    } else {
        res.status(500).json({ success: false, message: 'Error al guardar usuario' });
    }
});

// Get all users (development only)
app.get('/api/users', (req, res) => {
    const usuarios = leerUsuarios();
    const safe = usuarios.map(u => ({ id: u.id, email: u.email, nombre: u.nombre }));
    res.json(safe);
});

// ==================== SPA FALLBACK ====================
// Sirve index.html para todas las rutas que no sean API
app.use((req, res, next) => {
    if (req.path.startsWith('/api')) {
        return next();
    }
    const indexPath = path.join(distPath, 'index.html');
    if (fs.existsSync(indexPath)) {
        res.sendFile(indexPath);
    } else {
        res.status(404).json({ error: 'Build de React no encontrado. Ejecuta: npm run build' });
    }
});

// 404 para API routes no encontradas
app.use('/api', (req, res) => {
    res.status(404).json({ error: 'Ruta API no encontrada' });
});

// ==================== START SERVER ====================
app.listen(PORT, () => {
    console.log(`\n🚀 Servidor unificado corriendo en http://localhost:${PORT}`);
    console.log(`📁 Base de datos: ${dbPath}`);
    console.log(`📦 Archivos estáticos: ${distPath}\n`);
});
