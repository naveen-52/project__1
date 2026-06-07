export function CTASection() {
  return (
    <section className="px-6 py-16" style={{ fontFamily: "Inter, sans-serif" }}>
      <div className="max-w-[1280px] mx-auto">
        <div className="relative bg-gradient-to-r from-[#006e2f] to-[#22c55e] rounded-[32px] p-16 text-center overflow-hidden shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1)]">
          <div className="absolute top-[-96px] right-[-96px] w-64 h-64 bg-white/10 blur-3xl rounded-full" />
          <div className="absolute bottom-[-96px] left-[-96px] w-64 h-64 bg-white/10 blur-3xl rounded-full" />

          <div className="relative z-10 flex flex-col items-center gap-4">
            <h2 className="text-[48px] font-bold text-white tracking-tight leading-tight">
              Ready To Order Fresh Groceries Online?
            </h2>
            <p className="text-white/90 text-lg max-w-[576px]">
              Join thousands of satisfied customers and experience the best grocery delivery service today.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-6">
              <button className="bg-white text-[#006e2f] font-bold px-16 py-4 rounded-full text-xl shadow-md hover:shadow-lg transition-shadow">
                Get Started Now
              </button>
              <button className="border-2 border-white/40 text-white font-bold px-16 py-4 rounded-full text-xl hover:bg-white/10 transition-colors">
                Download App
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
