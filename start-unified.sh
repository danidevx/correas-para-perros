#!/bin/bash

echo "🚀 Servidor Unificado - Setup y Ejecución"
echo "=========================================="
echo ""

# Navegar al directorio del proyecto
cd "$(dirname "$0")" || exit

# Mostrar estado actual
echo "📁 Directorio: $(pwd)"
echo ""

# Verificar si node_modules existe
if [ ! -d "node_modules" ]; then
    echo "📦 Instalando dependencias..."
    bun install
    echo ""
fi

# Compilar React
echo "🏗️  Compilando React..."
bun run build

if [ $? -ne 0 ]; then
    echo "❌ Error en la compilación"
    exit 1
fi

echo ""
echo "✅ Build completado"
echo ""

# Iniciar servidor
echo "🚀 Iniciando servidor en puerto 3001..."
echo ""
node server.js
