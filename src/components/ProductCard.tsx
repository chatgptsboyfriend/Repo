'use client';

import { useCart } from "@/context/CartContext";

interface Product {
  id: number;
  name: string;
  description?: string;
  price: number;
  image: string | null;
  stock?: number;
}

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const imageUrl = product.image || '/placeholder.png';

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48 bg-gray-200">
        <img
          src={imageUrl}
          alt={product.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = '/placeholder.png';
          }}
        />
      </div>

      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {product.name}
        </h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description || "Aucune description"}
        </p>

        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold text-blue-600">
            {product.price.toFixed(2)} €
          </span>
        </div>

        <button
          onClick={() => {
            console.log("PRODUCT:", product);
            addToCart(product);
          }}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
        >
          Ajouter au panier
        </button>
      </div>
    </div>
  );
}
