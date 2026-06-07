import { CartProvider, useCart } from "@/context/CartContext";
import { Home } from "@/pages/Home";
import { CustomerDashboard } from "@/pages/CustomerDashboard";
import { AdminDashboard } from "@/pages/AdminDashboard";
import { OrderStatusTracker } from "@/components/cart/OrderStatusTracker";
import { Toaster } from "sonner";

export default function App() {
  return (
    <CartProvider>
      <Toaster position="top-center" richColors />
      <AppContent />
    </CartProvider>
  );
}

function AppContent() {
  const { currentPath } = useCart();

  if (currentPath === "/dashboard") {
    return (
      <>
        <CustomerDashboard />
        <OrderStatusTracker />
      </>
    );
  }

  if (currentPath === "/admin") {
    return <AdminDashboard />;
  }

  return <Home />;
}
