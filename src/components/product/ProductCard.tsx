import { Star, ShoppingCart } from "lucide-react";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
  onAddToCart: (item: any) => void;
}

export function ProductCard({ product, onSelect, onAddToCart }: ProductCardProps) {
  const hasDiscount = product.originalPrice && product.originalPrice > product.price;
  const discountPct = hasDiscount 
    ? Math.round(((product.originalPrice! - product.price) / product.originalPrice!) * 100)
    : 0;

  return (
    <div
      onClick={() => onSelect(product)}
      className="group bg-[#f8f9ff] border border-gray-100 hover:border-[#bccbb9] rounded-[32px] p-5 flex flex-col justify-between transition-all duration-300 hover:shadow-xl cursor-pointer relative"
    >
      {/* Badges */}
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
        {product.badge && (
          <span className="bg-[#006e2f] text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            {product.badge}
          </span>
        )}
        {hasDiscount && (
          <span className="bg-[#e06c00] text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            -{discountPct}% OFF
          </span>
        )}
      </div>

      {/* Product Image */}
      <div className="w-full aspect-square rounded-2xl overflow-hidden bg-white relative flex items-center justify-center border border-gray-50 mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Info */}
      <div className="flex-1 flex flex-col">
        <span className="text-xs font-semibold text-[#3d4a3d] uppercase tracking-wider mb-1">
          {product.category}
        </span>
        <h3 className="text-lg font-bold text-[#0b1c30] group-hover:text-[#006e2f] transition-colors mb-2 line-clamp-1">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1.5 mb-4">
          <div className="flex text-amber-500">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
                className="stroke-current"
              />
            ))}
          </div>
          <span className="text-xs font-bold text-[#0b1c30]">{product.rating}</span>
          <span className="text-xs text-[#3d4a3d]">(120+ reviews)</span>
        </div>
      </div>

      {/* Price & Action */}
      <div className="flex items-center justify-between pt-3 border-t border-dashed border-[#bccbb9] mt-auto">
        <div className="flex flex-col">
          <span className="text-xl font-extrabold text-[#0b1c30]">
            ₹{product.price}
          </span>
          {hasDiscount && (
            <span className="text-sm font-medium text-[#6b7280] line-through">
              ₹{product.originalPrice}
            </span>
          )}
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onAddToCart({ id: product.id, name: product.name, price: product.price, image: product.image });
          }}
          className="bg-[#006e2f] hover:bg-[#005a25] text-white p-3.5 rounded-full transition-colors flex items-center justify-center shadow-md cursor-pointer"
        >
          <ShoppingCart size={18} />
        </button>
      </div>
    </div>
  );
}
