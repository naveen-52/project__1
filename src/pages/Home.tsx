import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { CategoriesSection } from "@/components/sections/CategoriesSection";
import { FeaturedProductsSection } from "@/components/sections/FeaturedProductsSection";
import { VerificationSection } from "@/components/sections/VerificationSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CTASection } from "@/components/sections/CTASection";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { SearchModal } from "@/components/search/SearchModal";
import { VerifyModal } from "@/components/sections/VerifyModal";
import { ProductModal } from "@/components/product/ProductModal";
import { OrderStatusTracker } from "@/components/cart/OrderStatusTracker";

export function Home() {
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
      <Footer />
      
      {/* Global Modals & Drawers */}
      <CartDrawer />
      <SearchModal />
      <VerifyModal />
      <ProductModal />
      <OrderStatusTracker />
    </div>
  );
}
