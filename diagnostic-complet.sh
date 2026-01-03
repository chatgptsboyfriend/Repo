#!/bin/bash

echo "=========================================="
echo "🔍 DIAGNOSTIC COMPLET SITE_1"
echo "=========================================="
echo ""

echo "📍 1. LOCALISATION :"
pwd
echo ""

echo "📂 2. STRUCTURE DU PROJET :"
ls -la
echo ""

echo "📄 3. FICHIER .env.local :"
if [ -f .env.local ]; then
  echo "✅ Existe"
  echo "Contenu :"
  cat .env.local
else
  echo "❌ N'EXISTE PAS"
fi
echo ""

echo "📝 4. FICHIER app/lib/strapi.ts :"
if [ -f app/lib/strapi.ts ]; then
  echo "✅ Existe"
  cat app/lib/strapi.ts
else
  echo "❌ N'EXISTE PAS"
fi
echo ""

echo "🔌 5. STRAPI EST-IL ACTIF ? :"
curl -s http://localhost:1337/api/products?pagination[limit]=1 || echo "❌ STRAPI NE RÉPOND PAS"
echo ""

echo "🔥 6. PROCESSUS ACTIFS :"
ps aux | grep -E "node|next|strapi" | grep -v grep
echo ""

echo "💾 7. ESPACE DISQUE :"
df -h ~
echo ""

echo "🌡️ 8. MÉMOIRE RAM :"
free -h
echo ""

echo "📦 9. VERSIONS :"
echo "Node: $(node -v)"
echo "npm: $(npm -v)"
grep '"next"' package.json 2>/dev/null || echo "❌ package.json introuvable"
echo ""

echo "🗂️ 10. DOSSIERS CACHE :"
ls -la .next 2>/dev/null || echo "❌ .next n'existe pas"
ls -la node_modules/.cache 2>/dev/null || echo "❌ node_modules/.cache n'existe pas"
echo ""

echo "=========================================="
echo "✅ DIAGNOSTIC TERMINÉ"
echo "=========================================="
