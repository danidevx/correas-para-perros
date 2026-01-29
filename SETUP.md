# Correas Aventura - Tienda Online

## 🚀 Inicio Rápido

### Requisitos
- Node.js o Bun instalado
- Puerto 5173 (Vite) y 3001 (Servidor API) disponibles

### Opción 1: Ejecutar ambos servidores juntos (RECOMENDADO)

```bash
# Terminal única - ejecuta ambos servidores
bun run dev:full
```

O usando el script bash:
```bash
chmod +x dev-full.sh
./dev-full.sh
```

### Opción 2: Ejecutar servidores por separado

**Terminal 1 - Servidor API (Puerto 3001)**
```bash
bun run server
```

**Terminal 2 - Servidor de Desarrollo (Puerto 5173)**
```bash
bun run dev
```

---

## 🔐 Sistema de Autenticación

### Características
- ✅ Registro de usuarios
- ✅ Login seguro
- ✅ Base de datos en archivo `/src/database/usuarios.js`
- ✅ Sesiones guardadas en localStorage
- ✅ Modal profesional de auth

### Usuario Demo
- **Email**: demo@example.com
- **Contraseña**: demo123

### Cómo usar
1. Click en el icono de "Cuenta" (User) en el header
2. Registrate con tu email y contraseña
3. O inicia sesión con el usuario demo
4. Los datos se guardan automáticamente en `/src/database/usuarios.js`

---

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── Header.jsx          # Header con autenticación
│   ├── AuthModal.jsx       # Modal de login/registro
│   ├── CartDrawer.jsx      # Carrito de compras
│   ├── ProductCard.jsx     # Tarjeta de producto
│   └── Footer.jsx          # Footer profesional
├── context/
│   ├── AuthContext.jsx     # Context de autenticación
│   └── CartContext.jsx     # Context del carrito
├── pages/
│   ├── Home.jsx            # Página de inicio
│   ├── Shop.jsx            # Tienda con búsqueda
│   ├── About.jsx           # Nosotros
│   └── Contact.jsx         # Contacto
├── database/
│   └── usuarios.js         # Base de datos de usuarios
├── styles/
│   └── Home.css            # Estilos de inicio
├── App.jsx                 # App principal
└── index.css               # Estilos globales

server.js                    # Servidor Express API
```

---

## 🎨 Características

### Frontend
- ✅ Diseño responsivo y moderno
- ✅ Animaciones optimizadas
- ✅ Sistema de categorías con filtrado
- ✅ Carrito de compras funcional
- ✅ Newsletter suscripción
- ✅ Footer profesional

### Backend
- ✅ API REST con Express
- ✅ CORS configurado
- ✅ Lectura/escritura de usuarios.js
- ✅ Validaciones de datos

---

## 📦 Dependencias Principales

```json
{
  "express": "^5.2.1",
  "cors": "^2.8.5",
  "react": "^19.2.0",
  "react-router-dom": "^7.12.0",
  "lucide-react": "^0.562.0"
}
```

---

## 🔧 Configuración

### Puertos
- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:3001

### URLs de API
- `POST /api/auth/login` - Login
- `POST /api/auth/register` - Registro
- `GET /api/users` - Obtener usuarios (dev)

---

## 📝 Notas de Desarrollo

- Las contraseñas se guardan en texto plano (solo para desarrollo)
- Los usuarios se persisten en `/src/database/usuarios.js`
- Las sesiones se guardan en localStorage del navegador
- Para producción, implementar JWT y hashear contraseñas

---

## 🐛 Troubleshooting

### Error: "Error de conexión con el servidor"
- Asegúrate de que el servidor Express esté corriendo en puerto 3001
- Usa `bun run dev:full` para ejecutar ambos automáticamente

### Error: "ERR_BLOCKED_BY_CLIENT"
- Desactiva extensiones de bloqueo (AdBlock, etc.)
- Verifica que CORS esté habilitado en server.js

### Puerto ocupado
```bash
# Liberar puerto 3001
lsof -ti:3001 | xargs kill -9

# Liberar puerto 5173
lsof -ti:5173 | xargs kill -9
```

---

## 📄 Licencia

Proyecto privado - Correas Aventura 2026
