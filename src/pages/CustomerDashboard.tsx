import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { User, MapPin, Award, CreditCard, ChevronRight, ArrowLeft, Plus, Clock, CheckCircle } from "lucide-react";

export function CustomerDashboard() {
  const {
    userName,
    loyaltyPoints,
    orderHistory,
    savedAddresses,
    addAddress,
    activeOrder,
    setTrackingOpen,
    navigateTo
  } = useCart();

  const [newLabel, setNewLabel] = useState("");
  const [newAddress, setNewAddress] = useState("");
  const [showAddAddr, setShowAddAddr] = useState(false);

  // Compute total purchases
  const totalPurchases = orderHistory.reduce((acc, order) => {
    if (order.status !== "Rejected") {
      return acc + order.total;
    }
    return acc;
  }, 0);

  const handleAddAddress = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newLabel || !newAddress) return;
    addAddress({ label: newLabel, address: newAddress });
    setNewLabel("");
    setNewAddress("");
    setShowAddAddr(false);
  };

  const active = activeOrder || (orderHistory.length > 0 ? orderHistory[0] : null);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row" style={{ fontFamily: "Inter, sans-serif" }}>
      {/* Sidebar navigation */}
      <aside className="w-full md:w-64 bg-white border-r border-gray-100 flex flex-col justify-between py-8 px-6 shrink-0 shadow-sm">
        <div className="space-y-8">
          {/* Logo / Back home button */}
          <button 
            onClick={() => navigateTo("/")}
            className="flex items-center gap-2 text-[#006e2f] hover:text-[#005a25] font-bold text-lg cursor-pointer"
          >
            <ArrowLeft size={18} />
            <span>Back to Store</span>
          </button>

          {/* User profile minimal */}
          <div className="flex items-center gap-3 p-3 bg-[#f8f9ff] rounded-2xl border border-gray-50">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-[#006e2f] font-bold">
              AM
            </div>
            <div>
              <p className="text-sm font-bold text-[#0b1c30]">{userName}</p>
              <p className="text-xs font-semibold text-green-700">Gold Member</p>
            </div>
          </div>

          <nav className="flex flex-col gap-2">
            <a href="#" className="flex items-center gap-3 px-4 py-3 bg-[#f8f9ff] text-[#006e2f] font-bold rounded-xl text-sm">
              <User size={18} />
              <span>Overview</span>
            </a>
            <a 
              href="#" 
              onClick={() => {
                if (active) setTrackingOpen(true);
              }}
              className="flex items-center gap-3 px-4 py-3 text-[#3d4a3d] hover:bg-gray-50 font-medium rounded-xl text-sm transition-colors"
            >
              <Clock size={18} />
              <span>Track Orders</span>
            </a>
          </nav>
        </div>

        <div className="pt-6 border-t border-gray-100 text-xs text-gray-400">
          © 2024 FreshMart Online. All rights reserved.
        </div>
      </aside>

      {/* Main Content Pane */}
      <main className="flex-1 p-6 md:p-10 space-y-8 overflow-y-auto">
        <div>
          <h1 className="text-3xl font-extrabold text-[#0b1c30]">Welcome back, Alex</h1>
          <p className="text-[#3d4a3d] text-sm mt-1">Here is what is happening with your fresh groceries today.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Card: Purchases */}
          <div className="bg-white p-6 rounded-[28px] border border-gray-100 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center text-[#006e2f]">
              <CreditCard size={22} />
            </div>
            <div>
              <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Total Purchases</p>
              <p className="text-xl font-extrabold text-[#0b1c30]">₹{totalPurchases}</p>
            </div>
          </div>

          {/* Card: Loyalty points */}
          <div className="bg-white p-6 rounded-[28px] border border-gray-100 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
              <Award size={22} />
            </div>
            <div>
              <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Loyalty Points</p>
              <p className="text-xl font-extrabold text-[#0b1c30]">{loyaltyPoints} pts</p>
            </div>
          </div>

          {/* Card: Active order notification */}
          <div className="bg-white p-6 rounded-[28px] border border-gray-100 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600">
              <Clock size={22} />
            </div>
            <div>
              <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Active Orders</p>
              <p className="text-xl font-extrabold text-[#0b1c30]">
                {activeOrder ? "1 Order Pending" : "0 Orders Active"}
              </p>
            </div>
          </div>
        </div>

        {/* Active Order Card */}
        {active && active.status !== "Delivered" && active.status !== "Rejected" && (
          <div className="bg-white p-6 md:p-8 rounded-[32px] border border-gray-100 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <div>
                <span className="text-xs bg-orange-100 text-orange-800 font-bold px-3 py-1 rounded-full">
                  ACTIVE ORDER #{active.id}
                </span>
                <p className="text-sm text-gray-400 mt-1.5">Estimated delivery: {active.estimatedTime}</p>
              </div>

              <button
                onClick={() => setTrackingOpen(true)}
                className="flex items-center gap-1.5 text-sm text-[#006e2f] font-bold hover:underline cursor-pointer"
              >
                <span>Track Details</span>
                <ChevronRight size={16} />
              </button>
            </div>

            {/* Simple progress bar */}
            <div className="relative pt-1.5">
              <div className="flex mb-2 items-center justify-between">
                <div>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-50">
                    Status: {active.status}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold inline-block text-[#0b1c30]">
                    {active.status === "Order Placed" ? "15%" : active.status === "Owner Reviewing" ? "35%" : active.status === "Order Confirmed" ? "55%" : active.status === "Packing" ? "75%" : "90%"}
                  </span>
                </div>
              </div>
              <div className="overflow-hidden h-2.5 text-xs flex rounded-full bg-gray-100">
                <div
                  style={{
                    width: active.status === "Order Placed" ? "15%" : active.status === "Owner Reviewing" ? "35%" : active.status === "Order Confirmed" ? "55%" : active.status === "Packing" ? "75%" : "90%"
                  }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#006e2f] transition-all duration-500"
                />
              </div>
            </div>
          </div>
        )}

        {/* Grid: Order History & Saved Addresses */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Col 1 & 2: Order History */}
          <div className="lg:col-span-2 bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm space-y-6">
            <h3 className="text-xl font-bold text-[#0b1c30]">Order History</h3>

            {orderHistory.length === 0 ? (
              <div className="text-center py-12 text-[#3d4a3d]">
                <p className="font-bold text-base text-[#0b1c30]">No order history found</p>
                <p className="text-sm mt-1">Place your first order to populate the dashboard.</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-100 text-xs font-bold text-gray-400 uppercase tracking-wider">
                      <th className="pb-4">Order ID</th>
                      <th className="pb-4">Date</th>
                      <th className="pb-4">Items count</th>
                      <th className="pb-4">Total Price</th>
                      <th className="pb-4">Status</th>
                      <th className="pb-4 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orderHistory.map((order) => (
                      <tr key={order.id} className="border-b border-gray-50 text-sm hover:bg-gray-50 transition-colors">
                        <td className="py-4 font-bold text-[#0b1c30]">{order.id}</td>
                        <td className="py-4 text-[#3d4a3d]">{order.date}</td>
                        <td className="py-4 text-[#3d4a3d]">{order.items.reduce((a, b) => a + b.quantity, 0)} items</td>
                        <td className="py-4 font-bold text-[#0b1c30]">₹{order.total}</td>
                        <td className="py-4">
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                              order.status === "Delivered"
                                ? "bg-green-100 text-green-800"
                                : order.status === "Rejected"
                                ? "bg-red-100 text-red-800"
                                : "bg-orange-100 text-orange-800 animate-pulse"
                            }`}
                          >
                            {order.status}
                          </span>
                        </td>
                        <td className="py-4 text-right">
                          <button
                            onClick={() => {
                              // Open status tracker for this order
                              setTrackingOpen(true);
                            }}
                            className="text-[#006e2f] hover:text-[#005a25] font-bold text-xs"
                          >
                            Track
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Col 3: Saved Addresses */}
          <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold text-[#0b1c30]">Saved Addresses</h3>
              <button
                onClick={() => setShowAddAddr(!showAddAddr)}
                className="p-1.5 bg-[#f8f9ff] border border-[#bccbb9] hover:bg-[#eff4ff] text-[#006e2f] rounded-full transition-colors cursor-pointer"
              >
                <Plus size={16} />
              </button>
            </div>

            {showAddAddr && (
              <form onSubmit={handleAddAddress} className="p-4 bg-gray-50 rounded-2xl border border-gray-100 space-y-3">
                <input
                  type="text"
                  required
                  placeholder="Label (e.g. Home, Work)"
                  value={newLabel}
                  onChange={(e) => setNewLabel(e.target.value)}
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2 text-sm outline-none"
                />
                <input
                  type="text"
                  required
                  placeholder="Street Address details"
                  value={newAddress}
                  onChange={(e) => setNewAddress(e.target.value)}
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2 text-sm outline-none"
                />
                <button
                  type="submit"
                  className="w-full bg-[#006e2f] text-white py-2 rounded-xl text-sm font-bold hover:bg-[#005a25] transition-colors"
                >
                  Save Address
                </button>
              </form>
            )}

            <div className="space-y-4">
              {savedAddresses.map((addr) => (
                <div key={addr.id} className="flex gap-3 p-4 bg-[#f8f9ff] rounded-2xl border border-gray-50">
                  <MapPin className="text-[#006e2f] shrink-0 mt-0.5" size={18} />
                  <div>
                    <p className="text-sm font-bold text-[#0b1c30]">{addr.label}</p>
                    <p className="text-xs text-[#3d4a3d] mt-1 leading-normal">{addr.address}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
