import avatar1 from "figma:asset/4af3fe1be425b84a3cbbe852247d52d0495d1d6d.png";
import avatar2 from "figma:asset/d4dc34abcf0acaac940ac5d180be5a0eb85b3776.png";
import avatar3 from "figma:asset/764f4c3bb13a0f50ac5d53226d26c286a700bc95.png";
import avatar4 from "figma:asset/f7097dc27238baeeca99d636398772f7002e51ff.png";
import avatar5 from "figma:asset/3527993bb5ae42cc8d2d1e3e38c82b6cfa1434b9.png";
import avatar6 from "figma:asset/7457f851dfe1c46fe552ef4376ddb1e4de7fa62b.png";
import svgPaths from "../../imports/Html→Body/svg-ouny3aa258";

const testimonials = [
  {
    avatar: avatar1,
    name: "Sarah Jenkins",
    quote:
      '"The quality of the vegetables is better than what I pick myself! The owner verification makes a huge difference."',
  },
  {
    avatar: avatar2,
    name: "Michael Chen",
    quote:
      '"Fastest delivery I\'ve ever experienced. I ordered at 10 AM and had everything for lunch by 11:30!"',
  },
  {
    avatar: avatar3,
    name: "Elena Rodriguez",
    quote:
      '"The app is so easy to use. I can shop while waiting for my coffee and everything shows up perfectly."',
  },
  {
    avatar: avatar4,
    name: "David Wilson",
    quote:
      '"I love that I\'m supporting local stores while getting the convenience of an online app. It\'s a win-win."',
  },
  {
    avatar: avatar5,
    name: "Anita Gupta",
    quote:
      '"The substitution process is fantastic. They actually found a better brand for my coffee when my usual was out."',
  },
  {
    avatar: avatar6,
    name: "Robert T.",
    quote:
      '"FreshMart has changed our family\'s weekly routine. We save hours and the food quality is always top-notch."',
  },
];

function StarRating({ size = 11 }: { size?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 11.6667 11.0833" fill="none">
          <path d={svgPaths.p21398000} fill="#FD761A" />
        </svg>
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section id="testimonials-section" className="py-20" style={{ fontFamily: "Inter, sans-serif" }}>
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[48px] font-bold text-[#0b1c30] tracking-tight leading-tight">
            What Our Happy Shoppers Say
          </h2>
          <div className="flex items-center justify-center gap-1 mt-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="20" height="19" viewBox="0 0 20 19" fill="none">
                <path d={svgPaths.p1f93f980} fill="#FD761A" />
              </svg>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-[#f8f9ff] border border-[#bccbb9] rounded-[32px] p-10 flex flex-col gap-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover shrink-0"
                />
                <div>
                  <p className="text-[#0b1c30] font-bold text-base">{t.name}</p>
                  <StarRating />
                </div>
              </div>
              <p className="text-[#3d4a3d] text-base italic leading-relaxed">{t.quote}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 flex flex-wrap justify-center gap-12">
          <div className="text-center">
            <p className="text-4xl font-bold text-[#006e2f]">4.9</p>
            <p className="text-[#3d4a3d] text-sm mt-1">Average Rating</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-[#006e2f]">98%</p>
            <p className="text-[#3d4a3d] text-sm mt-1">Satisfaction Rate</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-[#006e2f]">5,000+</p>
            <p className="text-[#3d4a3d] text-sm mt-1">Happy Customers</p>
          </div>
        </div>
      </div>
    </section>
  );
}
