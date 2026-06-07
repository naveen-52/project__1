import { useState } from "react";
import svgPaths from "../../imports/Html→Body/svg-ouny3aa258";
import { toast } from "sonner";

export function FooterSection() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address!");
      return;
    }
    toast.success("🎉 Subscribed successfully! Thank you for joining FreshMart.");
    setEmail("");
  };

  return (
    <footer
      className="bg-[#eff4ff] border-t border-[#bccbb9]"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <div className="max-w-[1280px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <p className="text-[#006e2f] text-xl font-bold">FreshMart</p>
            <p className="text-[#3d4a3d] text-base leading-relaxed">
              Your trusted partner for organic freshness and reliable delivery.
              Straight from the local market to your home.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-[#f8f9ff] rounded-full flex items-center justify-center hover:bg-[#dce9ff] transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d={svgPaths.pf778600} fill="#0B1C30" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#f8f9ff] rounded-full flex items-center justify-center hover:bg-[#dce9ff] transition-colors"
              >
                <svg width="18" height="20" viewBox="0 0 18 20" fill="none">
                  <path d={svgPaths.p2b729200} fill="#0B1C30" />
                </svg>
              </a>
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-col gap-6">
            <p className="text-[#0b1c30] font-bold text-base">Categories</p>
            <ul className="flex flex-col gap-4">
              {["Rice & Grains", "Fresh Foods", "Produce", "Snacks"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-[#3d4a3d] text-base hover:text-[#006e2f] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="flex flex-col gap-6">
            <p className="text-[#0b1c30] font-bold text-base">Support</p>
            <ul className="flex flex-col gap-4">
              {["Help Center", "Contact Us", "Privacy Policy", "Terms of Service"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-[#3d4a3d] text-base hover:text-[#006e2f] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-4">
            <p className="text-[#0b1c30] font-bold text-base">Stay Updated</p>
            <p className="text-[#3d4a3d] text-base leading-relaxed">
              Get fresh deals and recipes in your inbox.
            </p>
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full bg-[#f8f9ff] border border-[#bccbb9] rounded-full px-6 py-4 text-base text-[#0b1c30] placeholder-[#6b7280] outline-none focus:border-[#006e2f] pr-16"
              />
              <button
                onClick={handleSubscribe}
                className="absolute right-2 top-2 w-10 h-10 bg-[#006e2f] rounded-full flex items-center justify-center hover:bg-[#005a25] transition-colors cursor-pointer"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d={svgPaths.p1a406200} fill="white" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 border-t border-[#bccbb9] py-6 text-center">
        <p className="text-[#3d4a3d] text-base">
          © 2024 FreshMart Online. All rights reserved. Organic freshness delivered.
        </p>
      </div>
    </footer>
  );
}
