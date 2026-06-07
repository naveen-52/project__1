import { useState } from "react";
import { useCart } from "../context/CartContext";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { 
  DollarSign, ShoppingBag, Users, AlertTriangle, Plus, Trash2, Edit2, 
  ArrowLeft, CheckCircle, XCircle, ArrowUpRight, TrendingUp 
} from "lucide-react";
import { toast } from "sonner";
import { Product } from "../data/products";
import imgRice from "@/assets/5cb9aa7be8d95727d14e238c4d624ea8b57dbd13.png";

// Static sales mock data for the chart
const salesData = [
  { name: "Mon", sales: 2400 },
  { name: "Tue", sales: 1398 },
  { name: "Wed", sales: 9800 },
  { name: "Thu", sales: 3908 },
  { name: "Fri", sales: 4800 },
  { name: "Sat", sales: 3800 },
  { name: "Sun", sales: 4300 }
];

export function AdminDashboard() {
  const {
    productList,
    addProduct,
    removeProduct,
    updateProduct,
    orderHistory,
    confirmOrder,
    rejectOrder,
    advanceOrderStatus,
    navigateTo
  } = useCart();

  const [showAddForm, setShowAddForm] = useState(false);
  const [newName, setNewName] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [newStock, setNewStock] = useState("");
  const [newCategory, setNewCategory] = useState("Rice & Grains");
  const [newDescription, setNewDescription] = useState("");

  // Calculate stats
  const totalSales = orderHistory.reduce((acc, order) => {
    if (order.status !== "Rejected") {
      return acc + order.total;
    }
    return acc;
  }, 42890.00); // Seeding with initial base sales from mockup

  const pendingCount = orderHistory.filter(o => o.status === "Order Placed" || o.status === "Owner Reviewing").length;

  const handleAddProductSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName || !newPrice || !newStock || !newDescription) {
      toast.error("Please fill out all product details!");
      return;
    }

    const priceNum = parseFloat(newPrice);
    const stockNum = parseInt(newStock);

    if (isNaN(priceNum) || priceNum <= 0) {
      toast.error("Invalid price value.");
      return;
    }
    if (isNaN(stockNum) || stockNum < 0) {
      toast.error("Invalid stock value.");
      return;
    }

    // Creating new product entry
    const newProd: Product = {
      id: `p-${Math.floor(1000 + Math.random() * 9000)}`,
      name: newName,
      price: priceNum,
      category: newCategory,
      image: imgRice, // Fallback to Sona Masoori Rice image
      description: newDescription,
      rating: 5.0,
      stock: stockNum,
      badge: "New"
    };

    addProduct(newProd);

    // Resetting inputs
    setNewName("");
    setNewPrice("");
    setNewStock("");
    setNewCategory("Rice & Grains");
    setNewDescription("");
    setShowAddForm(false);
  };

  const handleStockIncrement = (product: Product, delta: number) => {
    const nextStock = Math.max(0, product.stock + delta);
    updateProduct({ ...product, stock: nextStock });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row" style={{ fontFamily: "Inter, sans-serif" }}>
      
      {/* Sidebar navigation */}
      <aside className="w-full md:w-64 bg-white border-r border-gray-100 flex flex-col justify-between py-8 px-6 shrink-0 shadow-sm">
        <div className="space-y-8">
          <button 
            onClick={() => navigateTo("/")}
            className="flex items-center gap-2 text-[#006e2f] hover:text-[#005a25] font-bold text-lg cursor-pointer"
          >
            <ArrowLeft size={18} />
            <span>Back to Store</span>
          </button>

          <div className="p-3 bg-green-50 border border-green-100 rounded-2xl">
            <p className="text-xs font-bold text-[#006e2f] uppercase tracking-wider">Admin Control</p>
            <p className="text-sm font-bold text-[#0b1c30] mt-0.5">Manager Portal</p>
          </div>

          <nav className="flex flex-col gap-2">
            <a href="#" className="flex items-center gap-3 px-4 py-3 bg-[#f8f9ff] text-[#006e2f] font-bold rounded-xl text-sm">
              <TrendingUp size={18} />
              <span>Overview</span>
            </a>
          </nav>
        </div>

        <div className="pt-6 border-t border-gray-100 text-xs text-gray-400">
          © 2024 FreshMart Owner Portal.
        </div>
      </aside>

      {/* Content panel */}
      <main className="flex-1 p-6 md:p-10 space-y-8 overflow-y-auto">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-extrabold text-[#0b1c30]">Dashboard Overview</h1>
            <p className="text-[#3d4a3d] text-sm mt-1">Welcome back, Owner. Here is what is happening today.</p>
          </div>

          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="bg-[#006e2f] hover:bg-[#005a25] text-white px-6 py-3 rounded-full text-sm font-bold flex items-center gap-2 cursor-pointer shadow-md"
          >
            <Plus size={18} />
            <span>Add New Product</span>
          </button>
        </div>

        {/* Add Product Form Overlay */}
        {showAddForm && (
          <div className="bg-white p-6 md:p-8 rounded-[32px] border border-gray-100 shadow-xl space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-bold text-[#0b1c30]">New Inventory Product details</h3>
              <button onClick={() => setShowAddForm(false)} className="text-gray-400 hover:text-black">
                <XCircle size={20} />
              </button>
            </div>
            <form onSubmit={handleAddProductSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                required
                placeholder="Product Name (e.g. Organic Strawberries)"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#bccbb9]"
              />
              <input
                type="text"
                required
                placeholder="Price (₹ e.g. 150)"
                value={newPrice}
                onChange={(e) => setNewPrice(e.target.value)}
                className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#bccbb9]"
              />
              <input
                type="text"
                required
                placeholder="Initial Stock Qty (e.g. 50)"
                value={newStock}
                onChange={(e) => setNewStock(e.target.value)}
                className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#bccbb9]"
              />
              <select
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#bccbb9]"
              >
                {["Rice & Grains", "Fresh Foods", "Beverages", "Oils", "Personal Care", "Snacks", "Produce", "Bakery", "Spices", "Instant Mix", "Pulses", "Pooja Needs"].map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
              <textarea
                required
                placeholder="Enter description..."
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
                className="w-full sm:col-span-2 bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#bccbb9] h-24"
              />
              <button
                type="submit"
                className="sm:col-span-2 bg-[#006e2f] hover:bg-[#005a25] text-white py-3.5 rounded-xl font-bold text-sm shadow transition-colors cursor-pointer"
              >
                Confirm Add to Stock List
              </button>
            </form>
          </div>
        )}

        {/* KPI Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-[28px] border border-gray-100 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Total Sales</p>
              <p className="text-2xl font-extrabold text-[#0b1c30] mt-1">₹{totalSales.toLocaleString()}</p>
            </div>
            <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center text-[#006e2f]">
              <DollarSign size={22} />
            </div>
          </div>

          <div className="bg-white p-6 rounded-[28px] border border-gray-100 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">New Orders</p>
              <p className="text-2xl font-extrabold text-[#0b1c30] mt-1">{pendingCount}</p>
            </div>
            <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600">
              <ShoppingBag size={22} />
            </div>
          </div>

          <div className="bg-white p-6 rounded-[28px] border border-gray-100 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">New Customers</p>
              <p className="text-2xl font-extrabold text-[#0b1c30] mt-1">1,240</p>
            </div>
            <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
              <Users size={22} />
            </div>
          </div>

          <div className="bg-white p-6 rounded-[28px] border border-gray-100 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Stock Alert Level</p>
              <p className="text-2xl font-extrabold text-[#0b1c30] mt-1">92% OK</p>
            </div>
            <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600">
              <AlertTriangle size={22} />
            </div>
          </div>
        </div>

        {/* Charts & Top Customers */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Charts panel */}
          <div className="lg:col-span-2 bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm space-y-6">
            <h3 className="text-xl font-bold text-[#0b1c30]">Sales Statistics</h3>
            <div className="w-full h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={salesData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                  <XAxis dataKey="name" stroke="#9ca3af" fontSize={12} />
                  <YAxis stroke="#9ca3af" fontSize={12} />
                  <Tooltip cursor={{ fill: "rgba(34,197,94,0.05)" }} />
                  <Bar dataKey="sales" fill="#006e2f" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Top customer list */}
          <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm space-y-6">
            <h3 className="text-xl font-bold text-[#0b1c30]">Top Customers</h3>
            <div className="space-y-4">
              {[
                { name: "Sarah Connor", purchases: 12, spent: 4890 },
                { name: "Robert T.", purchases: 9, spent: 3120 },
                { name: "James Bond", purchases: 8, spent: 2890 }
              ].map((cust, idx) => (
                <div key={idx} className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-xl transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-green-50 rounded-full flex items-center justify-center text-[#006e2f] font-bold text-sm">
                      {cust.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#0b1c30]">{cust.name}</p>
                      <p className="text-xs text-gray-400 font-semibold">{cust.purchases} Orders placed</p>
                    </div>
                  </div>
                  <span className="text-sm font-extrabold text-[#0b1c30]">₹{cust.spent}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Order Verification Board */}
        <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm space-y-6">
          <h3 className="text-xl font-bold text-[#0b1c30]">Order Verification System</h3>
          
          {orderHistory.length === 0 ? (
            <div className="text-center py-8 text-[#3d4a3d]">
              <p className="font-bold text-sm text-[#0b1c30]">No active customer orders currently</p>
              <p className="text-xs mt-0.5">Go to the shop, checkout items, and verify them here.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-100 text-xs font-bold text-gray-400 uppercase tracking-wider">
                    <th className="pb-4">Order ID</th>
                    <th className="pb-4">Customer</th>
                    <th className="pb-4">Items count</th>
                    <th className="pb-4">Amount</th>
                    <th className="pb-4">Current Status</th>
                    <th className="pb-4 text-right">Owner Verification actions</th>
                  </tr>
                </thead>
                <tbody>
                  {orderHistory.map((order) => (
                    <tr key={order.id} className="border-b border-gray-50 text-sm hover:bg-gray-50 transition-colors">
                      <td className="py-4 font-bold text-[#0b1c30]">{order.id}</td>
                      <td className="py-4 font-semibold text-[#3d4a3d]">Alex Morgan</td>
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
                      <td className="py-4 text-right space-x-2">
                        {order.status === "Order Placed" || order.status === "Owner Reviewing" ? (
                          <>
                            <button
                              onClick={() => confirmOrder(order.id)}
                              className="bg-green-500 hover:bg-green-600 text-white font-bold text-xs px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                            >
                              Confirm
                            </button>
                            <button
                              onClick={() => rejectOrder(order.id)}
                              className="bg-red-500 hover:bg-red-600 text-white font-bold text-xs px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                            >
                              Reject
                            </button>
                          </>
                        ) : order.status !== "Delivered" && order.status !== "Rejected" ? (
                          <button
                            onClick={() => advanceOrderStatus(order.id)}
                            className="bg-[#006e2f] hover:bg-[#005a25] text-white font-bold text-xs px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                          >
                            Advance Status →
                          </button>
                        ) : (
                          <span className="text-gray-400 text-xs font-semibold">Processed</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Product Inventory Management */}
        <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm space-y-6">
          <h3 className="text-xl font-bold text-[#0b1c30]">Product Stock Management</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {productList.map((product) => (
              <div key={product.id} className="p-4 bg-gray-50 border border-gray-100 rounded-2xl flex flex-col justify-between hover:shadow-md transition-all">
                <div className="flex gap-3">
                  <img src={product.image} alt={product.name} className="w-12 h-12 rounded-xl object-cover bg-white" />
                  <div>
                    <h4 className="text-sm font-bold text-[#0b1c30] line-clamp-1">{product.name}</h4>
                    <p className="text-xs text-gray-400 font-semibold">{product.category}</p>
                    <p className="text-sm font-bold text-[#006e2f] mt-0.5">₹{product.price}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-4 pt-3 border-t border-dashed border-gray-200">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-gray-400 uppercase">Stock Level</span>
                    <span className={`text-sm font-extrabold ${product.stock < 10 ? "text-red-500 animate-pulse" : "text-[#0b1c30]"}`}>
                      {product.stock} items
                    </span>
                  </div>

                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => handleStockIncrement(product, -5)}
                      className="p-1 hover:bg-white border border-gray-200 rounded-lg text-gray-500"
                    >
                      -5
                    </button>
                    <button
                      onClick={() => handleStockIncrement(product, 5)}
                      className="p-1 hover:bg-white border border-gray-200 rounded-lg text-gray-500"
                    >
                      +5
                    </button>
                    <button
                      onClick={() => removeProduct(product.id)}
                      className="p-1.5 hover:bg-red-50 text-red-500 rounded-lg ml-1"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </main>
    </div>
  );
}
