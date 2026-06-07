import { useState, useEffect } from "react";
import { ShoppingCart, Search, Menu, X } from "lucide-react";
import { useCart } from "../context/CartContext";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { cartCount, setCartOpen, setSearchOpen, navigateTo } = useCart();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["Home", "Products", "How it Works", "Testimonials"];

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    e.preventDefault();
    setMobileOpen(false);
    
    let elementId = "";
    if (link === "Home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    } else if (link === "Products") {
      elementId = "categories-section";
    } else if (link === "How it Works") {
      elementId = "how-it-works-section";
    } else if (link === "Testimonials") {
      elementId = "testimonials-section";
    }

    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[rgba(248,249,255,0.95)] backdrop-blur-md shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]"
          : "bg-[rgba(248,249,255,0.9)] backdrop-blur-sm"
      }`}
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <div className="max-w-[1280px] mx-auto px-6 h-20 flex items-center justify-between">
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-[#006e2f] text-2xl font-bold tracking-tight cursor-pointer"
        >
          FreshMart
        </div>

        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link, i) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
              onClick={(e) => handleScrollToSection(e, link)}
              className={`text-sm font-medium tracking-wide transition-colors hover:text-[#006e2f] ${
                i === 0
                  ? "text-[#006e2f] border-b-2 border-[#006e2f] pb-0.5"
                  : "text-[#3d4a3d]"
              }`}
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={() => setSearchOpen(true)}
            className="p-2 text-[#3d4a3d] hover:text-[#006e2f] transition-colors cursor-pointer"
          >
            <Search size={20} />
          </button>
          <button 
            onClick={() => setCartOpen(true)}
            className="p-2 text-[#3d4a3d] hover:text-[#006e2f] transition-colors relative cursor-pointer"
          >
            <ShoppingCart size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-bounce">
                {cartCount}
              </span>
            )}
          </button>
          <button
            onClick={() => navigateTo("/dashboard")}
            className="text-sm font-bold text-[#3d4a3d] hover:text-[#006e2f] transition-colors px-2 cursor-pointer"
          >
            Dashboard
          </button>
          <button
            onClick={() => navigateTo("/admin")}
            className="text-sm font-bold text-[#3d4a3d] hover:text-[#006e2f] transition-colors px-2 cursor-pointer"
          >
            Admin
          </button>
          <button 
            onClick={() => setSearchOpen(true)}
            className="bg-[#006e2f] text-white text-sm font-bold tracking-wide px-6 py-2 rounded-full hover:bg-[#005a25] transition-colors cursor-pointer"
          >
            Shop Now
          </button>
        </div>

        <button
          className="md:hidden p-2 text-[#3d4a3d]"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-[#f8f9ff] border-t border-[#bccbb9] px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a 
              key={link} 
              href="#" 
              onClick={(e) => handleScrollToSection(e, link)}
              className="text-sm font-medium text-[#3d4a3d] hover:text-[#006e2f]"
            >
              {link}
            </a>
          ))}
          <div className="flex gap-4 items-center">
            <button 
              onClick={() => { setMobileOpen(false); setSearchOpen(true); }}
              className="p-2 text-[#3d4a3d] hover:text-[#006e2f] transition-colors"
            >
              <Search size={20} />
            </button>
            <button 
              onClick={() => { setMobileOpen(false); setCartOpen(true); }}
              className="p-2 text-[#3d4a3d] hover:text-[#006e2f] transition-colors relative"
            >
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button 
              onClick={() => { setMobileOpen(false); setSearchOpen(true); }}
              className="bg-[#006e2f] text-white text-sm font-bold px-6 py-2 rounded-full"
            >
              Shop Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
