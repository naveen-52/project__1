import imgRice from "@/assets/5cb9aa7be8d95727d14e238c4d624ea8b57dbd13.png";
import imgBatter from "@/assets/41a9c49a773e547d7b02068335fcd81110e4843a.png";
import imgMango from "@/assets/651e4c41d803b330f0774b9faabef6ce17fe77af.png";
import imgChips from "@/assets/ecd5447192ea260070be78a4db079dda1adeca5a.png";
import svgPaths from "../../imports/Html→Body/svg-ouny3aa258";
import { useCart } from "../context/CartContext";

const categories = [
  { img: imgRice, name: "Rice & Grains", count: "120+ Staples" },
  { img: imgBatter, name: "Fresh Foods", count: "45+ Daily Batters" },
  { img: imgMango, name: "Fresh Produce", count: "210+ Fresh Items" },
  { img: imgChips, name: "Bakery & Snacks", count: "95+ Traditional Savories" },
];

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
