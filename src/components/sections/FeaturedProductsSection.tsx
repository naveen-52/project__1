import { useCart } from "@/context/CartContext";
import { ProductGrid } from "@/components/product/ProductGrid";

export function FeaturedProductsSection() {
  const { productList, addToCart, setSelectedProduct } = useCart();
  const displayProducts = productList.slice(0, 12);

  return (
    <section 
      id="featured-products-section"
      className="py-24 bg-white" 
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-[48px] font-bold text-[#0b1c30] tracking-tight leading-tight">
            Featured Products
          </h2>
          <p className="text-[#3d4a3d] text-lg max-w-2xl mx-auto">
            Hand-picked fresh items for your healthy lifestyle, verified for peak quality by local store owners.
          </p>
        </div>

        <ProductGrid
          products={displayProducts}
          onSelect={setSelectedProduct}
          onAddToCart={addToCart}
        />
      </div>
    </section>
  );
}
