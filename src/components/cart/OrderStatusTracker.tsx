import { useCart } from "@/context/CartContext";
import { X, CheckCircle, Package, Truck, Smile, ShieldAlert } from "lucide-react";

export function OrderStatusTracker() {
  const { isTrackingOpen, setTrackingOpen, activeOrder } = useCart();

  if (!isTrackingOpen) return null;

  // Default fallback order if activeOrder is null (so tracker works gracefully)
  const order = activeOrder || {
    id: "FM-88421",
    date: new Date().toLocaleDateString(),
    items: [
      { id: "p1", name: "Sona Masoori Rice", price: 650, quantity: 1 },
      { id: "p2", name: "Idli Batter", price: 85, quantity: 2 }
    ],
    total: 820,
    status: "Order Placed" as const,
    estimatedTime: "30-45 mins",
    deliveryPartner: {
      name: "Marcus Thompson",
      rating: 4.9,
      vehicle: "Scooter (Electric)"
    }
  };

  const steps = [
    { label: "Order Placed", key: "Order Placed" },
    { label: "Owner Reviewing", key: "Owner Reviewing" },
    { label: "Order Confirmed", key: "Order Confirmed" },
    { label: "Packing", key: "Packing" },
    { label: "Out For Delivery", key: "Out For Delivery" },
    { label: "Delivered", key: "Delivered" }
  ];

  const currentStatusIndex = steps.findIndex((step) => step.key === order.status);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-gray-50 flex flex-col" style={{ fontFamily: "Inter, sans-serif" }}>
      {/* Header Bar */}
      <header className="bg-white border-b border-gray-100 py-5 px-6 shadow-sm flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <span className="text-[#006e2f] text-2xl font-bold tracking-tight">FreshMart</span>
          <span className="text-xs bg-gray-100 text-gray-800 font-semibold px-2.5 py-1 rounded-full">
            Track Order #{order.id}
          </span>
        </div>
        <button
          onClick={() => setTrackingOpen(false)}
          className="p-2 text-gray-500 hover:text-black rounded-full hover:bg-gray-100 transition-colors"
        >
          <X size={20} />
        </button>
      </header>

      {/* Main Grid */}
      <div className="max-w-[1280px] mx-auto px-6 py-10 w-full grid grid-cols-1 lg:grid-cols-3 gap-8 flex-1">
        
        {/* Left 2 Cols: Timeline & Delivery details */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Status Timeline */}
          <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm">
            <h3 className="text-xl font-bold text-[#0b1c30] mb-8">Delivery Status</h3>
            
            {/* Visual timeline */}
            <div className="relative flex flex-col md:flex-row md:justify-between items-start md:items-center gap-6">
              {/* Connecting line */}
              <div className="absolute left-[15px] top-[15px] bottom-[15px] w-0.5 md:left-[30px] md:right-[30px] md:top-[15px] md:h-0.5 md:w-auto bg-gray-200 -z-0" />
              
              {/* Active filled connecting line */}
              {currentStatusIndex > 0 && (
                <div 
                  className="absolute left-[15px] top-[15px] w-0.5 md:left-[30px] md:top-[15px] md:h-0.5 bg-[#006e2f] -z-0 transition-all duration-500"
                  style={{
                    height: "100%",
                    width: window.innerWidth >= 768 ? `${(currentStatusIndex / (steps.length - 1)) * 100}%` : "0.5px"
                  }}
                />
              )}

              {steps.map((step, idx) => {
                const isCompleted = idx < currentStatusIndex;
                const isActive = idx === currentStatusIndex;
                
                return (
                  <div key={step.key} className="flex md:flex-col items-center gap-4 md:gap-3 z-10 relative">
                    {/* Step circle */}
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all ${
                        isCompleted
                          ? "bg-[#006e2f] border-[#006e2f] text-white"
                          : isActive
                          ? "bg-white border-[#006e2f] text-[#006e2f] ring-4 ring-green-100"
                          : "bg-white border-gray-200 text-gray-400"
                      }`}
                    >
                      {isCompleted ? (
                        <CheckCircle size={14} fill="currentColor" className="text-white" />
                      ) : (
                        <span className="text-xs font-bold">{idx + 1}</span>
                      )}
                    </div>

                    {/* Step label */}
                    <div className="text-left md:text-center">
                      <p
                        className={`text-sm font-bold transition-all ${
                          isActive
                            ? "text-[#006e2f]"
                            : idx < currentStatusIndex
                            ? "text-[#0b1c30]"
                            : "text-gray-400"
                        }`}
                      >
                        {step.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Delivery Details Card */}
          <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* ETA */}
            <div className="space-y-4">
              <span className="text-xs font-bold text-[#006e2f] uppercase tracking-wider bg-green-50 px-3 py-1.5 rounded-full">
                Estimated Arrival
              </span>
              <p className="text-[42px] font-extrabold text-[#0b1c30] leading-none">
                {order.status === "Delivered" ? "Delivered" : order.estimatedTime}
              </p>
              <p className="text-sm text-[#3d4a3d]">
                {order.status === "Delivered" 
                  ? "Your order has been verified and successfully delivered."
                  : "Your items are being carefully picked and verified by the store owner."}
              </p>
            </div>

            {/* Courier partner details */}
            <div className="flex gap-4 p-5 rounded-2xl bg-[#f8f9ff] border border-gray-100 h-fit items-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden border border-gray-100">
                <Smile className="text-gray-500" size={32} />
              </div>
              <div className="flex-1">
                <p className="text-xs font-bold text-gray-400">Delivery Partner</p>
                <p className="text-base font-bold text-[#0b1c30]">{order.deliveryPartner?.name}</p>
                <div className="flex items-center gap-3 mt-1">
                  <span className="text-xs font-bold text-[#006e2f] bg-green-100 px-2 py-0.5 rounded">
                    ★ {order.deliveryPartner?.rating}
                  </span>
                  <span className="text-xs text-gray-500 font-medium">
                    {order.deliveryPartner?.vehicle}
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Right 1 Col: Summary invoice details */}
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm flex flex-col justify-between h-full">
            <div>
              <h3 className="text-xl font-bold text-[#0b1c30] mb-6">Order Summary</h3>
              
              {/* Items List */}
              <div className="space-y-4 max-h-[280px] overflow-y-auto pr-2">
                {order.items.map((item) => (
                  <div key={item.id} className="flex justify-between items-center text-sm">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-[#0b1c30]">{item.quantity}x</span>
                      <span className="text-[#3d4a3d] font-medium">{item.name}</span>
                    </div>
                    <span className="font-bold text-[#0b1c30]">₹{item.price * item.quantity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Price Breakdown */}
            <div className="border-t border-dashed border-gray-200 pt-6 mt-6 space-y-3">
              <div className="flex justify-between text-sm text-[#3d4a3d]">
                <span>Subtotal</span>
                <span>₹{order.total}</span>
              </div>
              <div className="flex justify-between text-sm text-[#3d4a3d]">
                <span>Delivery Fee</span>
                <span className="text-[#006e2f] font-bold">FREE</span>
              </div>
              <div className="flex justify-between text-base font-extrabold text-[#0b1c30] pt-3 border-t border-gray-100">
                <span>Total Paid</span>
                <span>₹{order.total}</span>
              </div>
              
              <button
                onClick={() => setTrackingOpen(false)}
                className="w-full bg-[#006e2f] hover:bg-[#005a25] text-white py-3.5 rounded-full font-bold text-sm transition-colors mt-6 cursor-pointer text-center flex items-center justify-center gap-2 shadow"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
