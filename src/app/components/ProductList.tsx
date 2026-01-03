import ProductCard from './ProductCard';

type StrapiProduct = {
  id: number;
  attributes: {
    name: string;
    price: number;
    image?: {
      data?: {
        attributes: {
          url: string;
        }
      }
    }
  }
};

export default function ProductList({ products }: { products: StrapiProduct[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard 
          key={product.id} 
          product={{
            id: product.id.toString(),
            name: product.attributes.name,
            price: product.attributes.price,
            image: product.attributes.image?.data?.attributes.url 
              ? `http://localhost:1337${product.attributes.image.data.attributes.url}`
              : '/placeholder.jpg'
          }} 
        />
      ))}
    </div>
  );
}
