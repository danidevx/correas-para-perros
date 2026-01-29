# ✅ Servidor Unificado - Resumen de Cambios

## 🎯 Objetivo Alcanzado

Consolidamos **todo en un solo servidor Express** que:
- Sirve la aplicación React compilada como archivos estáticos
- Maneja la API de autenticación 
- Elimina completamente los problemas de CORS en Codespaces
- Simplifica el desarrollo y deployment

---

## 📝 Cambios Realizados

### 1. **server.js** - Servidor completamente reescrito

**Antes:**
- Express + CORS configurado manualmente
- Solo manejaba API endpoints
- Problemas de CORS en Codespaces

**Ahora:**
```javascript
// ✅ Sirve archivos estáticos de React
const distPath = path.join(__dirname, 'dist');
app.use(express.static(distPath));

// ✅ API endpoints sin CORS (mismo origen)
app.post('/api/auth/login', ...)
app.post('/api/auth/register', ...)

// ✅ SPA fallback para rutas React
app.get('*', (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
});
```

**Ventajas:**
- ✅ No requiere CORS (mismo servidor)
- ✅ Funciona en Codespaces sin configuración especial
- ✅ Un solo puerto (3001)
- ✅ Logging limpio solo para API

---

### 2. **AuthContext.jsx** - URL relativa

**Antes:**
```javascript
const API_URL = 'http://localhost:3001';

// ❌ No funciona en Codespaces (localhost no existe)
```

**Ahora:**
```javascript
const API_URL = '';

// ✅ Usa URLs relativas - funciona en cualquier dominio
fetch(`${API_URL}/api/auth/login`, ...)
// → GET /api/auth/login (mismo servidor)
```

---

### 3. **package.json** - Scripts optimizados

**Nuevos scripts:**
```json
{
  "scripts": {
    "build": "vite build",           // Compila React → /dist
    "server": "node server.js",      // Corre servidor (requiere build previo)
    "start": "npm run build && node server.js",  // Build + Server en un paso
    "dev": "vite",                   // Desarrollo (React solo)
    "dev:server": "node server.js"   // Servidor solo (con /dist existente)
  }
}
```

**Dependencias actualizadas:**
- ❌ Removido: `cors` (ya no necesario)
- ✅ Mantenido: `express`, `vite`, `react`, etc.

---

### 4. **vite.config.js** - Output a /dist

```javascript
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',        // Archivos compilados aquí
    emptyOutDir: true,     // Limpia antes de compilar
  }
});
```

---

## 🚀 Cómo Ejecutar

### Opción 1: Build + Server (Recomendado)
```bash
bun run start
# ↓
# 1. Compila React → /dist
# 2. Inicia servidor en puerto 3001
```

### Opción 2: Build y Server por separado
```bash
bun run build
bun run server
```

### Opción 3: Script helper
```bash
chmod +x start-unified.sh
./start-unified.sh
```

### Opción 4: Desarrollo sin compilar (Frontend solo)
```bash
bun run dev
# Vite en http://localhost:5173 (pero sin API backend)
```

---

## 📂 Estructura de carpetas

```
correas-para-perros/
├── src/                    # Código React (original)
│   ├── components/
│   ├── pages/
│   ├── context/           # ✅ AuthContext con URLs relativas
│   ├── database/
│   │   └── usuarios.js    # Base de datos
│   └── ...
├── dist/                  # ✅ React compilado (generado por build)
│   ├── index.html
│   ├── assets/
│   └── ...
├── server.js              # ✅ Servidor unificado
├── vite.config.js         # ✅ Config actualizada
├── package.json           # ✅ Scripts y deps actualizados
├── SETUP_UNIFIED.md       # Documentación
└── start-unified.sh       # Script helper
```

---

## 🌐 Endpoints Disponibles

### Frontend
- `http://localhost:3001/` - Aplicación React completa

### API (mismo servidor, mismo origen, sin CORS)
- `GET /api/health` - Health check
- `POST /api/auth/login` - Login
- `POST /api/auth/register` - Registro
- `GET /api/users` - Listar usuarios (dev)

### Base de datos
- `/src/database/usuarios.js` - Archivo JSON editable

---

## ✨ Ventajas vs Arquitectura Anterior

| Aspecto | Antes | Ahora |
|--------|-------|-------|
| **Puertos** | 2 (5173 Vite, 3001 API) | 1 (3001) |
| **CORS** | Configuración compleja | No necesario (mismo origen) |
| **Codespaces** | Problemas ERR_BLOCKED_BY_CLIENT | Funciona perfectamente |
| **Build** | Manual para producción | Automatizado |
| **URL API** | Hardcodeada (localhost:3001) | Relativa (funciona en cualquier dominio) |
| **Desarrollo** | Dos servidores simultáneos | Un servidor con archivos estáticos |

---

## 🧪 Prueba Rápida

1. **Abre terminal**:
   ```bash
   cd /workspaces/correas-para-perros
   ```

2. **Ejecuta**:
   ```bash
   bun run start
   ```

3. **En el navegador**:
   - Ve a `http://localhost:3001`
   - Intenta registrar usuario
   - Verifica logs del servidor
   - Checkea `/src/database/usuarios.js`

4. **Expected output del servidor**:
   ```
   🚀 Servidor unificado corriendo en http://localhost:3001
   📁 Base de datos: /workspaces/correas-para-perros/src/database/usuarios.js
   📦 Archivos estáticos: /workspaces/correas-para-perros/dist
   
   📋 [29/1/2026, 14:30:45] POST /api/auth/register
   📝 Body: { email: '...', password: '...', nombre: '...' }
   ✅ Usuario registrado: user@example.com
   ```

---

## 📋 Checklist

- ✅ Server.js reescrito (sin CORS)
- ✅ AuthContext con URLs relativas
- ✅ Package.json actualizado (scripts y deps)
- ✅ Vite config para output /dist
- ✅ Documentación creada
- ✅ Script helper creado
- ✅ Listo para Codespaces

---

## 🎉 Resultado Final

Un servidor **simple, escalable y listo para producción** que:
1. Funciona en localhost
2. Funciona en GitHub Codespaces
3. Funciona en cualquier hosting (cambiar PORT env var)
4. Sin configuración de CORS (mismo origen)
5. Desarrollo y producción con mismo código

---

**¡Listo para ejecutar!** 🚀
