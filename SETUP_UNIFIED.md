# 🚀 Servidor Unificado - Configuración Completa

## Cambios Realizados

### 1. **Server.js Reescrito**
- Eliminado CORS (ya no necesario)
- Express sirve archivos estáticos de React desde `/dist`
- Rutas API integradas sin CORS
- Todos los endpoints funcionan en el mismo servidor

### 2. **AuthContext.jsx Actualizado**
- Cambio de `http://localhost:3001` a URL relativa `''`
- Las llamadas van a `/api/auth/login` y `/api/auth/register`
- Funciona automáticamente en localhost y Codespaces

### 3. **Package.json Scripts**
- `npm run build` - Compila React
- `npm run server` - Corre el servidor (necesita build previo)
- `npm run start` - Build + Server (recomendado)

### 4. **Vite Config**
- Salida a `/dist` para que Express pueda servir archivos

## 🎯 Pasos para Ejecutar

```bash
# En la terminal del VS Code:

# 1. Instalar dependencias (si no las tiene)
bun install

# 2. Compilar React
bun run build

# 3. Ejecutar servidor unificado
bun run server
```

O en un paso:
```bash
bun run start
```

## 🌐 Resultado

- Frontend: `http://localhost:3001` (o tu URL de Codespaces)
- API: `http://localhost:3001/api/auth/login` (mismo servidor)
- Base de datos: `/src/database/usuarios.js`

## ✨ Ventajas

✅ Un solo puerto (3001)
✅ Sin CORS (mismo origen)
✅ Funciona perfecto en Codespaces
✅ Más simple de mantener
✅ Mejor rendimiento

## 🧪 Probar

1. Abre `http://localhost:3001` en el navegador
2. Intenta registrar un usuario
3. Revisa logs del servidor
4. Verifica archivo `/src/database/usuarios.js`
