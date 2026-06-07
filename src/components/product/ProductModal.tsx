import { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";
import { X, Star, ShoppingCart, Plus, Minus, ShieldCheck } from "lucide-react";

export function ProductModal() {
  const { selectedProduct, setSelectedProduct, addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  // Reset quantity to 1 when a new product is selected
  useEffect(() => {
    setQuantity(1);
  }, [selectedProduct]);

  if (!selectedProduct) return null;

  const product = selectedProduct;
  const hasDiscount = product.originalPrice && product.originalPrice > product.price;
  const isOutOfStock = product.stock <= 0;
  
  const handleAddToCart = () => {
    addToCart(
      { id: product.id, name: product.name, price: product.price, image: product.image },
      quantity
    );
    setSelectedProduct(null);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" style={{ fontFamily: "Inter, sans-serif" }}>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={() => setSelectedProduct(null)}
      />

      <div className="flex items-center justify-center min-h-screen p-4">
        {/* Modal Box */}
        <div className="relative bg-white rounded-[32px] max-w-2xl w-full shadow-2xl overflow-hidden transform transition-all flex flex-col md:flex-row border border-gray-100">
          
          {/* Close button */}
          <button
            onClick={() => setSelectedProduct(null)}
            className="absolute top-4 right-4 z-10 p-2 text-gray-500 hover:text-black bg-white/80 hover:bg-white rounded-full transition-colors shadow-sm"
          >
            <X size={20} />
          </button>

          {/* Left: Image */}
          <div className="md:w-1/2 bg-[#f8f9ff] flex items-center justify-center p-8 border-r border-gray-50 relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto max-h-[300px] object-cover rounded-2xl"
            />
            {product.badge && (
              <span className="absolute top-4 left-4 bg-[#006e2f] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                {product.badge}
              </span>
            )}
          </div>

          {/* Right: Info */}
          <div className="md:w-1/2 p-8 flex flex-col justify-between">
            <div className="space-y-4">
              <div>
                <span className="text-xs font-semibold text-[#006e2f] uppercase tracking-wider">
                  {product.category}
                </span>
                <h3 className="text-2xl font-bold text-[#0b1c30] mt-1">{product.name}</h3>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1.5">
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

              {/* Price */}
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-extrabold text-[#0b1c30]">
                  ₹{product.price}
                </span>
                {hasDiscount && (
                  <span className="text-base font-medium text-[#6b7280] line-through">
                    ₹{product.originalPrice}
                  </span>
                )}
              </div>

              {/* Stock status */}
              <div>
                {isOutOfStock ? (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                    Out of Stock
                  </span>
                ) : product.stock < 10 ? (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800 animate-pulse">
                    Only {product.stock} left in stock!
                  </span>
                ) : (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    In Stock
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-sm text-[#3d4a3d] leading-relaxed line-clamp-4">
                {product.description}
              </p>

              {/* Quality verification assurance */}
              <div className="flex gap-2 items-center bg-[rgba(34,197,94,0.05)] border border-[rgba(34,197,94,0.1)] p-3 rounded-2xl">
                <ShieldCheck size={18} className="text-[#006e2f] shrink-0" />
                <span className="text-[11px] font-semibold text-[#006e2f] leading-normal">
                  Freshness verified by store manager before dispatch.
                </span>
              </div>
            </div>

            {/* Action Row */}
            <div className="mt-6 space-y-4">
              {!isOutOfStock && (
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-[#0b1c30]">Quantity:</span>
                  
                  <div className="flex items-center border border-[#bccbb9] bg-[#f8f9ff] rounded-full p-1.5 gap-3">
                    <button
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white text-[#3d4a3d] transition-all"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="text-base font-bold text-[#0b1c30] min-w-[24px] text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity((q) => Math.min(product.stock, q + 1))}
                      className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white text-[#3d4a3d] transition-all"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
              )}

              <button
                disabled={isOutOfStock}
                onClick={handleAddToCart}
                className="w-full bg-[#006e2f] hover:bg-[#005a25] disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-4 rounded-full font-bold text-base shadow-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <ShoppingCart size={20} />
                Add to Cart — ₹{product.price * quantity}
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
