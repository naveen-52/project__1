import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { HowItWorksSection } from "./components/HowItWorksSection";
import { CategoriesSection } from "./components/CategoriesSection";
import { FeaturedProductsSection } from "./components/FeaturedProductsSection";
import { VerificationSection } from "./components/VerificationSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { CTASection } from "./components/CTASection";
import { FooterSection } from "./components/FooterSection";

import { CartProvider, useCart } from "./context/CartContext";
import { CartDrawer } from "./components/ui/CartDrawer";
import { SearchModal } from "./components/ui/SearchModal";
import { VerifyModal } from "./components/ui/VerifyModal";
import { ProductDetailsModal } from "./components/ui/ProductDetailsModal";
import { OrderStatusTracker } from "./components/ui/OrderStatusTracker";
import { CustomerDashboard } from "./components/CustomerDashboard";
import { AdminDashboard } from "./components/AdminDashboard";
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

  return (
    <div className="min-h-screen bg-[#f8f9ff]" style={{ fontFamily: "Inter, sans-serif" }}>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <CategoriesSection />
        <FeaturedProductsSection />
        <VerificationSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <FooterSection />
      
      {/* Global Modals & Drawers */}
      <CartDrawer />
      <SearchModal />
      <VerifyModal />
      <ProductDetailsModal />
      <OrderStatusTracker />
    </div>
  );
}
