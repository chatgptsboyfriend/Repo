export default function HomePage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 text-center">
      <h1 className="text-4xl font-bold mb-6">
        Bienvenue sur Mon‑Ecommerce
      </h1>

      <p className="text-gray-600 mb-8">
        Découvrez nos produits dès maintenant.
      </p>

      <a
        href="/products"
        className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800"
      >
        Voir les produits
      </a>
    </main>
  );
}
