import svgPaths from "../../imports/Html→Body/svg-ouny3aa258";

const features = [
  {
    icon: (
      <svg width="25" height="25" viewBox="0 0 24.9769 25" fill="none">
        <path d={svgPaths.paaa4980} fill="#006E2F" />
      </svg>
    ),
    bg: "bg-[rgba(34,197,94,0.1)]",
    title: "Easy Ordering",
    description:
      "Intuitive interface designed for a seamless grocery shopping journey from start to finish.",
  },
  {
    icon: (
      <svg width="25" height="20" viewBox="0 0 25 20.0938" fill="none">
        <path d={svgPaths.p822e640} fill="#9D4300" />
      </svg>
    ),
    bg: "bg-[rgba(253,118,26,0.1)]",
    title: "Owner Confirmation",
    description:
      "Real store owners verify every item's availability to ensure you get exactly what you ordered.",
  },
  {
    icon: (
      <svg width="27.5" height="20" viewBox="0 0 27.5 20" fill="none">
        <path d={svgPaths.pc00c480} fill="#006E2F" />
      </svg>
    ),
    bg: "bg-[rgba(34,197,94,0.1)]",
    title: "Fast Delivery",
    description:
      "Optimized routing and local dispatchers ensure your groceries arrive fresh and on time.",
  },
  {
    icon: (
      <svg width="25" height="25" viewBox="0 0 25.0312 25" fill="none">
        <path d={svgPaths.p92aa400} fill="#9D4300" />
      </svg>
    ),
    bg: "bg-[rgba(253,118,26,0.1)]",
    title: "Fresh Quality",
    description:
      "Direct sourcing from farms and premium markets to guarantee peak nutritional value.",
  },
  {
    icon: (
      <svg width="27.5" height="20" viewBox="0 0 27.5 20" fill="none">
        <path d={svgPaths.p3fb16680} fill="#006E2F" />
      </svg>
    ),
    bg: "bg-[rgba(34,197,94,0.1)]",
    title: "Secure Payments",
    description:
      "Multiple encrypted payment options for your peace of mind and convenience.",
  },
  {
    icon: (
      <svg width="20" height="25" viewBox="0 0 20 25" fill="none">
        <path d={svgPaths.p682b940} fill="#9D4300" />
      </svg>
    ),
    bg: "bg-[rgba(253,118,26,0.1)]",
    title: "Order Tracking",
    description:
      "Real-time GPS tracking so you know exactly when your fresh delivery will arrive.",
  },
];

export function FeaturesSection() {
  return (
    <section
      className="bg-[#eff4ff] py-20"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[48px] font-bold text-[#0b1c30] tracking-tight leading-tight">
            Why Choose Our Platform?
          </h2>
          <p className="text-[#3d4a3d] text-lg mt-4 max-w-[672px] mx-auto">
            We combine modern technology with local store reliability to give you the best shopping experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-[#f8f9ff] border border-[#bccbb9] rounded-[32px] p-10 flex flex-col gap-2 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className={`${feature.bg} rounded-full w-14 h-14 flex items-center justify-center shrink-0`}>
                {feature.icon}
              </div>
              <h3 className="text-[#0b1c30] text-xl font-semibold mt-4">{feature.title}</h3>
              <p className="text-[#3d4a3d] text-base leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
