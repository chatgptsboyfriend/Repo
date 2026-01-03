'use client';

import Link from 'next/link';
import { useCart } from '../context/CartContext';

export default function Header() {
  const { items } = useCart();
  
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Mon-Ecommerce
        </Link>
        <div className="flex gap-6 items-center">
          <Link href="/products" className="hover:text-gray-300">
            Produits
          </Link>
          <Link href="/cart" className="hover:text-gray-300 relative">
            Panier
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Link>
        </div>
      </nav>
    </header>
  );
}
