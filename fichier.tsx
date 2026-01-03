cd ~/mon-ecommerce/frontend
echo "=== STRUCTURE ==="
ls -la src/app
echo ""
echo "=== PRODUCTS PAGE ==="
cat src/app/products/page.tsx
echo ""
echo "=== LAYOUT ==="
head -20 src/app/layout.tsx
echo ""
echo "=== PROCESSUS NEXT ==="
ps aux | grep next | grep -v grep

