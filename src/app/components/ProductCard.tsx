'use client';

import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: {
    documentId: string;
    Title: string;
    price: number;
    image: {
      url: string;
      formats?: {
        medium?: { url: string };
        small?: { url: string };
      };
    };
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();

  const imageUrl = product.image?.formats?.medium?.url || product.image?.url || '';
  const fullImageUrl = imageUrl.startsWith('http') 
    ? imageUrl 
    : `http://localhost:1337${imageUrl}`;

  const handleAddToCart = () => {
    addItem({
      documentId: product.documentId,
      Title: product.Title,
      price: product.price,
      image: fullImageUrl,
    });
  };

  return (
    <div className="border rounded-lg p-4 hover:shadow-lg transition">
      <img
        src={fullImageUrl}
        alt={product.Title}
        className="w-full h-64 object-cover rounded mb-4"
      />
      <h2 className="text-xl font-semibold mb-2">{product.Title}</h2>
      <p className="text-gray-600 mb-4">{product.price}€</p>
      <button 
        onClick={handleAddToCart}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Ajouter au panier
      </button>
    </div>
  );
}
