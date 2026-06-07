import { categories } from "@/data/categories";

import svgPaths from "../../imports/Html→Body/svg-ouny3aa258";
import { useCart } from "@/context/CartContext";



export function CategoriesSection() {
  const { setSearchOpen } = useCart();

  return (
    <section
      id="categories-section"
      className="bg-[#f8f9ff] py-20"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex items-end justify-between mb-16">
          <div>
            <h2 className="text-[48px] font-bold text-[#0b1c30] tracking-tight leading-tight">
              Shop By Category
            </h2>
            <p className="text-[#3d4a3d] text-base mt-2">Discover the freshest picks from every department</p>
          </div>
          <button 
            onClick={() => setSearchOpen(true)}
            className="hidden sm:flex items-center gap-1 text-[#006e2f] font-bold text-base hover:gap-2 transition-all cursor-pointer"
          >
            View All
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d={svgPaths.p1a406200} fill="#006E2F" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.name}
              onClick={() => setSearchOpen(true)}
              className="group relative overflow-hidden rounded-[32px] h-64 cursor-pointer"
            >
              <img
                src={cat.img}
                alt={cat.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white text-base font-normal">{cat.name}</p>
                <p className="text-white/80 text-base">{cat.count}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
