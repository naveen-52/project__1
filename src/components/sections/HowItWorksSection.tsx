export function HowItWorksSection() {
  const steps = [
    {
      number: "1",
      title: "Browse",
      description: "Explore our wide selection of fresh organic produce.",
    },
    {
      number: "2",
      title: "Add to Cart",
      description: "Pick your favorites and build your customized basket.",
    },
    {
      number: "3",
      title: "Place Order",
      description: "Checkout securely with your preferred payment method.",
    },
    {
      number: "4",
      title: "Verification",
      description: "Owner confirms items and dispatches delivery fast.",
    },
  ];

  return (
    <section id="how-it-works-section" className="py-20 overflow-hidden" style={{ fontFamily: "Inter, sans-serif" }}>
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[48px] font-bold text-[#0b1c30] tracking-tight leading-tight">
            How It Works
          </h2>
          <p className="text-[#3d4a3d] text-base mt-4">Getting fresh food is as simple as 1-2-3-4</p>
        </div>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Dashed connecting line (desktop only) */}
          <div className="hidden lg:block absolute top-8 left-[calc(12.5%+32px)] right-[calc(12.5%+32px)] border-t-2 border-dashed border-[#bccbb9]" />

          {steps.map((step) => (
            <div key={step.number} className="flex flex-col items-center text-center gap-2 relative">
              <div className="relative z-10 w-16 h-16 bg-[#dce9ff] border-4 border-[#f8f9ff] rounded-full flex items-center justify-center shrink-0">
                <span className="text-[#006e2f] text-2xl font-bold">{step.number}</span>
              </div>
              <h4 className="text-[#0b1c30] text-base font-normal mt-2">{step.title}</h4>
              <p className="text-[#3d4a3d] text-base text-center leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
