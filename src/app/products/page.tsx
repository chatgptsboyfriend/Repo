import ProductCard from '../components/ProductCard';

interface Product {
  id: number;
  documentId: string;
  Title: string;
  text: any[];
  price: number;
  image: {
    url: string;
    formats?: {
      medium?: { url: string };
      small?: { url: string };
    };
  };
}

async function getProducts() {
  try {
    const res = await fetch('http://localhost:1337/api/products?populate=*', {
      cache: 'no-store'
    });
    
    if (!res.ok) {
      throw new Error('Failed to fetch products');
    }
    
    const data = await res.json();
    return data.data || [];
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

export default async function ProductsPage() {
  const products: Product[] = await getProducts();

  if (products.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Nos Produits</h1>
        <p>Aucun produit disponible pour le moment.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nos Produits</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.documentId} product={product} />
        ))}
      </div>
    </div>
  );
}
