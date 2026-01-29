#!/bin/bash

# Script para ejecutar el servidor Express y Vite en paralelo

echo "🚀 Iniciando servidores..."
echo "📡 Servidor Express en http://localhost:3001"
echo "🌐 Servidor Vite en http://localhost:5173"
echo ""
echo "Presiona Ctrl+C para detener ambos servidores"
echo ""

# Ejecutar ambos comandos en paralelo
bun run server &
SERVER_PID=$!

sleep 2

bun run dev &
DEV_PID=$!

# Trap para matar ambos procesos cuando se cierre el script
trap "kill $SERVER_PID $DEV_PID" EXIT

# Esperar a que ambos procesos terminen
wait $SERVER_PID $DEV_PID
