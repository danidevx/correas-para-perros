# Sistema de Autenticación - Correas Aventura

## Configuración

### 1. Instalar dependencias
```bash
npm install
# o
bun install
```

### 2. Ejecutar el servidor de autenticación y desarrollo

**Opción A: Ejecutar ambos servidores simultáneamente**
```bash
npm run dev:full
```

**Opción B: Ejecutar servidores por separado**

Terminal 1 - Servidor de autenticación (Puerto 3001):
```bash
npm run server
```

Terminal 2 - Servidor de desarrollo (Puerto 5173):
```bash
npm run dev
```

## Características del Sistema de Autenticación

### Base de Datos
- **Ubicación**: `/src/database/usuarios.js`
- **Formato**: Array de objetos con estructura:
  ```js
  {
    id: number,
    email: string,
    password: string,
    nombre: string
  }
  ```
- El archivo se modifica automáticamente al registrar nuevos usuarios

### Endpoints de API

#### Login
```
POST http://localhost:3001/api/auth/login
Body: { email, password }
Response: { success, message, user }
```

#### Registro
```
POST http://localhost:3001/api/auth/register
Body: { email, password, nombre }
Response: { success, message, user }
```

#### Obtener Usuarios (desarrollo)
```
GET http://localhost:3001/api/users
Response: array de usuarios (sin contraseñas)
```

### Usuario Demo
- **Email**: demo@example.com
- **Contraseña**: demo123

## Cómo Funciona

1. **Click en el botón Account** en el header
2. **Aparece el modal de autenticación**
3. **Puedes Login o Registrarte**
4. **Los datos se guardan en `/src/database/usuarios.js`**
5. **La sesión se guarda en localStorage**
6. **Al cerrar sesión, se limpia localStorage**

## Archivos Clave

- `server.js` - Servidor Express con API de autenticación
- `src/context/AuthContext.jsx` - Context de autenticación
- `src/components/AuthModal.jsx` - Modal de login/registro
- `src/components/Header.jsx` - Header integrado con autenticación
- `src/database/usuarios.js` - Base de datos de usuarios

## Seguridad

⚠️ **Nota**: Este sistema es para desarrollo/demostración. En producción:
- Usar HTTPS
- Hashear contraseñas (bcrypt, argon2)
- Implementar JWT tokens
- Usar base de datos real (MongoDB, PostgreSQL, etc.)
- Validaciones más estrictas en el servidor
- CORS configurado correctamente
