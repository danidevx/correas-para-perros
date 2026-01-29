# 🚀 EJECUCIÓN RÁPIDA

## En GitHub Codespaces

### Paso 1: Abrir terminal

```bash
cd /workspaces/correas-para-perros
```

### Paso 2: Ejecutar

```bash
# Opción A: Build + Server automático (RECOMENDADO)
bun run start

# Opción B: Si ya tienen dist compilado
bun run server
```

### Paso 3: Acceder

En el navegador: **http://localhost:3001** *(o la URL que te genere Codespaces)*

---

## Eso es todo 🎉

El servidor:
- ✅ Sirve React automáticamente
- ✅ Maneja la API de autenticación
- ✅ Persiste datos en `/src/database/usuarios.js`
- ✅ Sin CORS (mismo servidor)
- ✅ Funciona en Codespaces

---

## Si algo falla

```bash
# Recompilar React
bun run build

# Verificar que /dist existe
ls -la dist/

# Revisar logs del servidor
bun run server  # Verás los logs en consola
```

---

**Usuario demo:**
- Email: `demo@example.com`
- Password: `demo123`

---

**¡Listo! Disfruta tu ecommerce.** 🎊
