import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { X, Search as SearchIcon, ShoppingCart, Plus } from "lucide-react";
import { products } from "@/data/products";

const mockProducts = products;

export function SearchModal() {
  const { isSearchOpen, setSearchOpen, addToCart } = useCart();
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  if (!isSearchOpen) return null;

  const handleQueryChange = (val: string) => {
    setQuery(val);
    setLoading(true);
    // Simulate brief typing debounce/fetching animation
    const timer = setTimeout(() => {
      setLoading(false);
    }, 400);
    return () => clearTimeout(timer);
  };

  const filteredProducts = mockProducts.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase()) ||
    product.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" style={{ fontFamily: "Inter, sans-serif" }}>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={() => setSearchOpen(false)}
      />

      <div className="flex items-start justify-center min-h-screen pt-20 px-4 pb-6">
        {/* Modal Content */}
        <div className="relative bg-white rounded-[32px] max-w-2xl w-full shadow-2xl overflow-hidden transform transition-all flex flex-col border border-gray-100">
          
          {/* Search Header */}
          <div className="p-6 border-b border-gray-100 flex items-center gap-4 bg-[#f8f9ff]">
            <SearchIcon className="text-[#3d4a3d]" size={24} />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => handleQueryChange(e.target.value)}
              placeholder="Search rice, batters, spices, or traditional snacks..."
              className="flex-1 bg-transparent border-none outline-none text-lg text-[#0b1c30] placeholder-[#6b7280]"
            />
            <button
              onClick={() => setSearchOpen(false)}
              className="p-2 text-[#3d4a3d] hover:text-[#0b1c30] rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <X size={20} />
            </button>
          </div>

          {/* Search Results */}
          <div className="max-h-[450px] overflow-y-auto p-6 space-y-6">
            <div>
              <p className="text-sm font-semibold text-[#3d4a3d] mb-4">
                {query ? `Search Results (${filteredProducts.length})` : "Popular Fresh Picks"}
              </p>

              {loading ? (
                /* Skeleton Loader for search results */
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-pulse">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex items-center gap-4 p-3 rounded-2xl border border-gray-100 bg-gray-50">
                      <div className="w-12 h-12 bg-gray-200 rounded-xl" />
                      <div className="flex-1 space-y-2">
                        <div className="h-3.5 bg-gray-200 rounded w-3/4" />
                        <div className="h-3 bg-gray-200 rounded w-1/2" />
                      </div>
                    </div>
                  ))}
                </div>
              ) : filteredProducts.length === 0 ? (
                /* Product Not Found & Empty search result error state */
                <div className="text-center py-12 px-4 space-y-3">
                  <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto">
                    <X size={28} />
                  </div>
                  <div>
                    <p className="font-extrabold text-lg text-[#0b1c30]">Product Not Found</p>
                    <p className="text-sm text-[#3d4a3d] mt-1">
                      We couldn't find any matches for "{query}". Try checking the spelling or searching other items.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {filteredProducts.map((product) => (
                    <div
                      key={product.id}
                      className="flex items-center gap-4 p-3 rounded-2xl border border-gray-100 hover:border-[#bccbb9] hover:bg-[#f8f9ff] transition-all justify-between animate-fadeIn"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-12 h-12 rounded-xl object-cover border border-gray-100"
                        />
                        <div>
                          <p className="text-sm font-bold text-[#0b1c30] line-clamp-1">{product.name}</p>
                          <p className="text-xs text-[#3d4a3d] font-medium">{product.category}</p>
                          <p className="text-sm font-semibold text-[#006e2f] mt-0.5">₹{product.price}</p>
                        </div>
                      </div>

                      <button
                        onClick={() => addToCart({ id: product.id, name: product.name, price: product.price, image: product.image })}
                        className="bg-[#006e2f] text-white p-2 rounded-full hover:bg-[#005a25] transition-colors shadow-sm shrink-0 flex items-center justify-center cursor-pointer"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
