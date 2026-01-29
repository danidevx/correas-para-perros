#!/bin/bash

echo "╔════════════════════════════════════════════════════════════╗"
echo "║           VERIFICACIÓN DE CONFIGURACIÓN                   ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""

cd /workspaces/correas-para-perros

# Verificar archivos clave
echo "📋 Verificando archivos..."
echo ""

files=(
    "server.js"
    "src/context/AuthContext.jsx"
    "vite.config.js"
    "package.json"
    "src/database/usuarios.js"
)

for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        echo "✅ $file"
    else
        echo "❌ $file (NO ENCONTRADO)"
    fi
done

echo ""
echo "📦 Verificando dependencias en package.json..."
echo ""

# Verificar que cors no esté
if grep -q '"cors"' package.json; then
    echo "⚠️  CORS aún está en package.json (pero no lo necesitas)"
else
    echo "✅ CORS removido de dependencias"
fi

# Verificar express
if grep -q '"express"' package.json; then
    echo "✅ Express está en package.json"
else
    echo "❌ Express NO está en package.json"
fi

echo ""
echo "🔍 Verificando configuración..."
echo ""

# Verificar server.js
if grep -q "express.static" server.js; then
    echo "✅ server.js sirve archivos estáticos"
else
    echo "❌ server.js NO sirve archivos estáticos"
fi

if grep -q "import cors" server.js; then
    echo "⚠️  server.js aún importa cors"
else
    echo "✅ server.js no importa cors"
fi

# Verificar AuthContext
if grep -q "const API_URL = '';" src/context/AuthContext.jsx; then
    echo "✅ AuthContext usa URLs relativas"
else
    echo "⚠️  AuthContext podría no usar URLs relativas"
fi

echo ""
echo "📁 Verificando carpetas..."
echo ""

if [ -d "dist" ]; then
    echo "✅ Carpeta /dist existe ($(ls dist | wc -l) archivos)"
else
    echo "⚠️  Carpeta /dist no existe (ejecuta: bun run build)"
fi

if [ -d "node_modules" ]; then
    echo "✅ Carpeta /node_modules existe"
else
    echo "⚠️  Carpeta /node_modules no existe (ejecuta: bun install)"
fi

echo ""
echo "╔════════════════════════════════════════════════════════════╗"
echo "║                    PRÓXIMOS PASOS                         ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""
echo "1. bun install         (si falta node_modules)"
echo "2. bun run build       (compila React)"
echo "3. bun run server      (inicia servidor en puerto 3001)"
echo ""
echo "O en un paso:"
echo "   bun run start"
echo ""
echo "Luego accede a: http://localhost:3001"
echo ""
