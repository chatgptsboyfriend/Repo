'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function Header() {
  const { cart } = useCart();

  return (
<header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold hover:text-gray-300">
          🛒 Mon E-commerce
        </Link>
        <div className="flex gap-6">
          <Link href="/" className="hover:text-gray-300 transition">
            Accueil
          </Link>
          <Link href="/products" className="hover:text-gray-300 transition">
            Produits
          </Link>
          <Link href="/cart" className="hover:text-gray-300 transition">
            Panier <span className="bg-red-500 text-white rounded-full px-2 py-1 text-sm ml-1">{cart.length}</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
