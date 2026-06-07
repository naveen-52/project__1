import { useState } from "react";
import { useCart } from "../../context/CartContext";
import { X, Plus, Minus, ShoppingBag, Trash2 } from "lucide-react";
import { toast } from "sonner";

export function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setCartOpen,
    updateQuantity,
    removeFromCart,
    cartTotal,
    clearCart,
    checkout,
  } = useCart();

  const [loading, setLoading] = useState(false);
  const [simulateError, setSimulateError] = useState(false);

  if (!isCartOpen) return null;

  const handleCheckout = () => {
    setLoading(true);
    
    // Simulate network latency
    setTimeout(() => {
      setLoading(false);
      if (simulateError) {
        toast.error("❌ Checkout Failed: Network Connection Error. Please try again.");
        return;
      }
      
      checkout();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" style={{ fontFamily: "Inter, sans-serif" }}>
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={() => setCartOpen(false)}
      />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        {/* Sliding Panel */}
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col h-full transform transition-transform duration-300">
          {/* Header */}
          <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between bg-[#f8f9ff]">
            <div className="flex items-center gap-2">
              <ShoppingBag className="text-[#006e2f]" size={24} />
              <h2 className="text-xl font-bold text-[#0b1c30]">Your Cart</h2>
            </div>
            <button
              onClick={() => setCartOpen(false)}
              className="p-2 text-[#3d4a3d] hover:text-[#0b1c30] rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <X size={20} />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {/* Simulation Controls */}
            {cart.length > 0 && (
              <div className="p-3 bg-gray-50 border border-gray-200 rounded-xl flex items-center justify-between text-xs">
                <span className="font-semibold text-gray-500">Error Simulation:</span>
                <label className="flex items-center gap-1.5 cursor-pointer text-[#0b1c30] font-bold">
                  <input
                    type="checkbox"
                    checked={simulateError}
                    onChange={(e) => setSimulateError(e.target.checked)}
                    className="rounded text-[#006e2f] focus:ring-[#006e2f]"
                  />
                  Simulate Connection Fail
                </label>
              </div>
            )}

            {loading ? (
              /* Skeleton Loader for Cart Checkout */
              <div className="space-y-4 py-8 animate-pulse">
                {[...Array(2)].map((_, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-2xl border border-gray-100 bg-gray-50">
                    <div className="w-20 h-20 bg-gray-200 rounded-xl" />
                    <div className="flex-1 space-y-2 py-1">
                      <div className="h-4 bg-gray-200 rounded w-3/4" />
                      <div className="h-4 bg-gray-200 rounded w-1/4" />
                      <div className="h-6 bg-gray-200 rounded-full w-24 mt-2" />
                    </div>
                  </div>
                ))}
                <p className="text-center text-xs text-gray-400 font-semibold mt-4">Verifying prices and store stocks...</p>
              </div>
            ) : cart.length === 0 ? (
              /* Aligned Empty Cart State */
              <div className="h-full flex flex-col items-center justify-center text-center gap-6 py-20 px-4">
                <div className="w-24 h-24 bg-[rgba(34,197,94,0.08)] rounded-full flex items-center justify-center text-[#006e2f]">
                  <ShoppingBag size={42} />
                </div>
                <div className="space-y-2">
                  <p className="text-xl font-extrabold text-[#0b1c30]">Your cart is lonely</p>
                  <p className="text-sm text-[#3d4a3d] leading-relaxed">
                    It seems like you haven't added any fresh produce or groceries to your basket yet.
                  </p>
                </div>
                <button
                  onClick={() => setCartOpen(false)}
                  className="bg-[#006e2f] text-white px-8 py-3.5 rounded-full text-sm font-bold hover:bg-[#005a25] transition-colors cursor-pointer shadow"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-4 rounded-2xl border border-gray-100 bg-[#f8f9ff] relative group hover:border-[#bccbb9] transition-all"
                >
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 rounded-xl object-cover border border-gray-100"
                    />
                  )}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="text-base font-bold text-[#0b1c30] pr-6">{item.name}</h4>
                      <p className="text-sm font-semibold text-[#006e2f] mt-0.5">
                        ₹{item.price} each
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      {/* Quantity Selector */}
                      <div className="flex items-center border border-[#bccbb9] bg-white rounded-full p-1 gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-6 h-6 rounded-full flex items-center justify-center hover:bg-gray-100 text-[#3d4a3d] transition-colors cursor-pointer"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="text-sm font-bold text-[#0b1c30] min-w-[20px] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-6 h-6 rounded-full flex items-center justify-center hover:bg-gray-100 text-[#3d4a3d] transition-colors cursor-pointer"
                        >
                          <Plus size={12} />
                        </button>
                      </div>

                      <span className="text-base font-bold text-[#0b1c30]">
                        ₹{item.price * item.quantity}
                      </span>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="absolute top-4 right-4 text-[#3d4a3d] hover:text-red-500 p-1.5 rounded-full hover:bg-white transition-all shadow-sm opacity-0 group-hover:opacity-100 cursor-pointer"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer Checkout Summary */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-gray-100 space-y-4 bg-[#f8f9ff]">
              <div className="space-y-1.5">
                <div className="flex justify-between text-sm text-[#3d4a3d]">
                  <span>Subtotal</span>
                  <span>₹{cartTotal}</span>
                </div>
                <div className="flex justify-between text-sm text-[#3d4a3d]">
                  <span>Delivery Fee</span>
                  <span className="text-green-600 font-medium">FREE</span>
                </div>
                <div className="flex justify-between text-base font-bold text-[#0b1c30] pt-2 border-t border-dashed border-[#bccbb9]">
                  <span>Total</span>
                  <span>₹{cartTotal}</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleCheckout}
                  className="w-full bg-[#006e2f] hover:bg-[#005a25] text-white py-4 rounded-full font-bold text-base shadow-lg transition-colors flex items-center justify-center gap-2"
                >
                  Confirm Order & Checkout
                </button>
                <p className="text-center text-xs text-[#3d4a3d] mt-2">
                  *Order will be reviewed and confirmed by the store owner before dispatch.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
