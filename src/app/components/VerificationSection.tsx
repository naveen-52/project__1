import verifyImg from "figma:asset/c704db3cbb8abd7f824d4d0494d83e3358f81f62.png";
import svgPaths from "../../imports/Html→Body/svg-ouny3aa258";
import { useCart } from "../context/CartContext";

const checkmarks = [
  {
    title: "Personal Substitution",
    description: "Owners call you personally if an item needs a high-quality substitute.",
  },
  {
    title: "Quality Control",
    description: "Hands-on inspection of all perishables before they leave the store.",
  },
  {
    title: "Direct Communication",
    description: "Chat directly with the store for special requests or order changes.",
  },
];

export function VerificationSection() {
  const { setVerifyOpen } = useCart();

  return (
    <section
      id="verification-section"
      className="bg-[#e5eeff] py-20"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Illustration */}
          <div className="relative rounded-[32px] overflow-hidden shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1)]">
            <img
              src={verifyImg}
              alt="Owner Verification Process"
              className="w-full object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="flex flex-col gap-6">
            <h2 className="text-[48px] font-bold text-[#0b1c30] tracking-tight leading-tight">
              Every Order Is Personally Verified
            </h2>
            <p className="text-[#3d4a3d] text-lg leading-relaxed">
              Unlike automated warehouses, our platform connects you directly with local supermarket
              owners. This ensures that every tomato is ripe, every milk carton has a long expiry,
              and your specific requests are actually heard.
            </p>

            <div className="flex flex-col gap-4 mt-2">
              {checkmarks.map((item) => (
                <div key={item.title} className="flex gap-4 items-start">
                  <div className="shrink-0 mt-0.5">
                    <svg width="24.3" height="20.025" viewBox="0 0 24.3 20.025" fill="none">
                      <rect fill="#22C55E" fillOpacity="0.2" height="20.025" rx="10.0125" width="24.3" />
                      <path d={svgPaths.p3cf9580} fill="#006E2F" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[#0b1c30] font-bold text-base">{item.title}</p>
                    <p className="text-[#3d4a3d] text-sm font-medium tracking-wide">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <button 
              onClick={() => setVerifyOpen(true)}
              className="bg-[#9d4300] text-white px-16 py-4 rounded-full text-base w-fit hover:bg-[#7c3500] transition-colors mt-2 cursor-pointer font-semibold"
            >
              Learn About Verification
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
