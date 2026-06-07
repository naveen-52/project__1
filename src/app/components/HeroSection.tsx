import heroImg from "figma:asset/b3db7f6b9f30f2d1b3f492f5449da592e2143648.png";
import svgPaths from "../../imports/Html→Body/svg-ouny3aa258";
import { useCart } from "../context/CartContext";

function TrustBadge({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-[#006e2f]">{icon}</span>
      <span className="text-sm font-medium text-[#0b1c30] tracking-wide">{label}</span>
    </div>
  );
}

export function HeroSection() {
  const { setSearchOpen } = useCart();

  return (
    <section
      id="home-section"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at 100% 0%, rgba(34,197,94,0.1) 0%, transparent 40%), radial-gradient(circle at 0% 100%, rgba(249,115,22,0.1) 0%, transparent 40%), #f8f9ff",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6 w-full pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <div className="flex flex-col gap-10 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-[rgba(34,197,94,0.1)] px-4 py-1.5 rounded-full w-fit">
              <svg width="16.5" height="15.75" viewBox="0 0 16.5 15.75" fill="none">
                <path d={svgPaths.pf8747d7} fill="#006E2F" />
              </svg>
              <span className="text-[#006e2f] text-sm font-medium">Store Owner Verified Delivery</span>
            </div>

            <div>
              <h1 className="text-[32px] md:text-[48px] font-bold text-[#0b1c30] leading-tight tracking-tight">
                Fresh Groceries
                <br />
                <span className="text-[#006e2f]">Delivered Right</span>
                <br />
                To Your Doorstep
              </h1>
            </div>

            <p className="text-[#3d4a3d] text-lg leading-relaxed max-w-xl">
              Order groceries online in minutes. Browse products, place your order, and get it
              confirmed by the store owner for fast and reliable delivery.
            </p>

            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => setSearchOpen(true)}
                className="bg-gradient-to-r from-[#006e2f] via-[#22c55e] to-[#006e2f] text-white font-semibold px-12 py-4 rounded-full text-lg hover:opacity-90 transition-opacity shadow-lg cursor-pointer"
              >
                Start Shopping
              </button>
              <button 
                onClick={() => {
                  const element = document.getElementById("categories-section");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="border-2 border-[#6d7b6c] text-[#0b1c30] font-semibold px-12 py-4 rounded-full text-lg hover:bg-gray-50 transition-colors cursor-pointer"
              >
                View Products
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-[#bccbb9]">
              <TrustBadge
                icon={
                  <svg width="17" height="17" viewBox="0 0 16.9955 16.9923" fill="none">
                    <path d={svgPaths.p12cee600} fill="#006E2F" />
                  </svg>
                }
                label="Fresh Products"
              />
              <TrustBadge
                icon={
                  <svg width="20" height="16" viewBox="0 0 20.0017 16" fill="none">
                    <path d={svgPaths.p18737380} fill="#006E2F" />
                  </svg>
                }
                label="Fast Delivery"
              />
              <TrustBadge
                icon={
                  <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
                    <path d={svgPaths.p2bdb86e0} fill="#006E2F" />
                  </svg>
                }
                label="Secure Ordering"
              />
              <TrustBadge
                icon={
                  <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
                    <path d={svgPaths.p15aec574} fill="#006E2F" />
                  </svg>
                }
                label="Owner Verified"
              />
            </div>
          </div>

          {/* Right: Hero Illustration */}
          <div className="relative flex items-center justify-center order-1 lg:order-2">
            <div className="absolute inset-0 bg-[rgba(0,110,47,0.05)] blur-3xl rounded-full" />
            <div className="relative w-full max-w-[584px]">
              <img
                src={heroImg}
                alt="FreshMart grocery delivery ecosystem"
                className="w-full rounded-[32px] object-cover"
              />

              {/* Floating card: Order confirmed */}
              <div className="absolute -left-4 top-8 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 border border-[#bccbb9]">
                <div className="w-10 h-10 bg-[rgba(34,197,94,0.1)] rounded-full flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d={svgPaths.p1a406200} fill="#006E2F" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#0b1c30]">Order Confirmed!</p>
                  <p className="text-xs text-[#3d4a3d]">Delivery in 30 mins</p>
                </div>
              </div>

              {/* Floating card: Rating */}
              <div className="absolute -right-4 bottom-12 bg-white rounded-2xl shadow-xl px-4 py-3 border border-[#bccbb9]">
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="12" height="12" viewBox="0 0 20 19" fill="none">
                      <path d={svgPaths.p1f93f980} fill="#FD761A" />
                    </svg>
                  ))}
                </div>
                <p className="text-xs font-semibold text-[#0b1c30]">4.9 Rating</p>
                <p className="text-xs text-[#3d4a3d]">5,000+ customers</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "10,000+", label: "Orders Delivered" },
            { value: "5,000+", label: "Happy Customers" },
            { value: "30 min", label: "Avg Delivery" },
            { value: "4.9★", label: "Star Rating" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white border border-[#bccbb9] rounded-2xl px-6 py-4 text-center shadow-sm"
            >
              <p className="text-2xl font-bold text-[#006e2f]">{stat.value}</p>
              <p className="text-sm text-[#3d4a3d] mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
