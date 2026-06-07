import { Product } from "@/data/products";
import { ProductCard } from "./ProductCard";

interface ProductGridProps {
  products: Product[];
  onSelect: (product: Product) => void;
  onAddToCart: (item: any) => void;
}

export function ProductGrid({ products, onSelect, onAddToCart }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onSelect={onSelect}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
}
