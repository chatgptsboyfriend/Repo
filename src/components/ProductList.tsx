'use client';

import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

interface StrapiProduct {
  id: number;
  Title: string;
  description?: string;
  price: number;
  stock?: number;
  image?: {
    url: string;
  };
}

interface Product {
  id: number;
  name: string;
  description?: string;
  price: number;
  stock?: number;
  image: string | null;
}

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:1337/api/products?populate=*")
      .then(res => res.json())
      .then(json => {
        console.log("🔥 RAW STRAPI RESPONSE =", json);

        // Strapi v5: les champs sont au niveau supérieur
        const formatted: Product[] = json.data.map((item: StrapiProduct) => {
          const imageUrl = item.image?.url
            ? "http://localhost:1337" + item.image.url
            : null;

          return {
            id: item.id,
            name: item.Title,
            description: item.description || "",
            price: item.price || 0,
            stock: item.stock || 0,
            image: imageUrl
          };
        });

        console.log("✅ FORMATTED PRODUCTS =", formatted);
        setProducts(formatted);
        setLoading(false);
      })
      .catch(err => {
        console.error("❌ Erreur Strapi:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center text-2xl p-8">⏳ Chargement...</p>;
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-xl">Aucun produit disponible pour le moment.</p>
        <p className="text-gray-500 mt-2">
          Ajoutez des produits dans Strapi : 
          <a href="http://localhost:1337/admin" className="text-blue-600 underline ml-1">
            Admin Panel
          </a>
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">🛍️ Nos Produits</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
