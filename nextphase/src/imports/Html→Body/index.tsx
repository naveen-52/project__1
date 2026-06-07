import svgPaths from "./svg-mw2y2lmqrn";
import imgHeroSection from "./5fceba155401e3e5a31a869732f1aa37e8273dc2.png";
import imgPhoto158620137576183865001E31C from "./5cb9aa7be8d95727d14e238c4d624ea8b57dbd13.png";
import imgPhoto166823654309082Eba5Ee5976 from "./41a9c49a773e547d7b02068335fcd81110e4843a.png";
import imgPhoto1559056199641A0Ac8B55E from "./5e624f7ee8030a936defcd0b52bf0c53d4f81139.png";
import imgPhoto160085706224198E5Dba7F214 from "./c973ad63a2ba7459a4635ef7a2b41911cf03958a.png";
import imgPhoto15994886157317E5C2823Ff28 from "./1293d5eaa6bce055f5f45ed4e713a4249a80a512.png";
import imgPhoto1565557623262B51C2513A641 from "./2a46a7ca78f4ea9ee30be502fde9c2f660a895b5.png";
import imgUserProfileAvatar from "./3120419942ae727bb64fb9d94a2bcc4d66b853a7.png";
import imgAb6AXuB3YAnq6W9UlEiPqCmc80T7AAyLkrMyni80R9Ug6Jo28XRCzgEjgPlWh4KpaCJ601VoVmlIZxguQnb09BheLjAoSg8BFvicKbRxyFg9PLbLgpPfvcwwCzkkDghxZUhOrylUxZplZnZr7Eu3VYal3A7DTbYrjr3JmNv7O7Ktg1QQxfbDv2QexNzN81HB3QzYNgdchwxRFjaVDd404Jztdq9M64N8PfyPnneRvuLBaapowU25GnoayozIyU8NJfvuBeBm8MjjV from "./5254d54fbaa8ce3569254a50ce7ec6f0e3c9f568.png";

function Button() {
  return (
    <div className="absolute bg-[#006e2f] content-stretch flex items-center justify-center left-[48px] px-[32px] py-[16px] rounded-[9999px] top-[216px]" data-name="Button">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[9999px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" data-name="Button:shadow" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[16px]">Shop Staples</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[264px] relative shrink-0 w-[768px]" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-bold justify-center leading-[0] left-[48px] not-italic text-[48px] text-white top-[55.5px] tracking-[-0.96px] whitespace-nowrap">
        <p className="leading-[56px] mb-0">South Indian staples,</p>
        <p className="leading-[56px]">delivered home.</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[48px] not-italic opacity-90 text-[18px] text-white top-[155.5px] whitespace-nowrap">
        <p className="leading-[28px] mb-0">Experience the authentic taste of Sona Masoori, Filter Coffee, and</p>
        <p className="leading-[28px]">cold-pressed oils sourced from the heart of South India.</p>
      </div>
      <Button />
    </div>
  );
}

function HeroSection() {
  return (
    <div className="content-stretch flex h-[400px] items-center overflow-clip relative rounded-[12px] shrink-0 w-full" data-name="Hero Section">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[308%] left-0 max-w-none top-[-104%] w-full" src={imgHeroSection} />
      </div>
      <div className="absolute bg-gradient-to-r from-[rgba(22,29,22,0.6)] inset-0 to-[rgba(22,29,22,0)]" data-name="Gradient" />
      <Container />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#161d16] text-[32px] tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[40px]">Featured Staples</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Hand-picked essentials for your kitchen</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[301.2px]" data-name="Container">
      <Heading />
      <Container3 />
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#006e2f] text-[14px] text-center tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[16px]">View All Products</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Container">
      <Container2 />
      <Button1 />
    </div>
  );
}

function Photo158620137576183865001E31C() {
  return (
    <div className="h-[288px] relative shrink-0 w-full" data-name="photo-1586201375761-83865001e31c">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-24.91%] max-w-none top-0 w-[149.81%]" src={imgPhoto158620137576183865001E31C} />
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="absolute bg-[#22c55e] content-stretch flex flex-col items-start left-[8px] px-[8px] py-[4px] rounded-[9999px] top-[8px]" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#004b1e] text-[12px] whitespace-nowrap">
        <p className="leading-[14px]">5kg Pack</p>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#edf6ea] relative shrink-0 w-full z-[2]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative size-full">
        <Photo158620137576183865001E31C />
        <Background1 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[12px] tracking-[0.6px] uppercase w-full">
        <p className="leading-[14px]">{`RICE & GRAINS`}</p>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#161d16] text-[24px] w-full">
        <p className="leading-[32px]">Sona Masoori Rice</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[11.083px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.0833">
        <g id="Container">
          <path d={svgPaths.p232c0780} fill="var(--fill-0, #9E4036)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[11.083px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.0833">
        <g id="Container">
          <path d={svgPaths.p232c0780} fill="var(--fill-0, #9E4036)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[11.083px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.0833">
        <g id="Container">
          <path d={svgPaths.p232c0780} fill="var(--fill-0, #9E4036)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[11.083px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.0833">
        <g id="Container">
          <path d={svgPaths.p232c0780} fill="var(--fill-0, #9E4036)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[11.083px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.0833">
        <g id="Container">
          <path d={svgPaths.p232c0780} fill="var(--fill-0, #9E4036)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0" data-name="Margin">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">(24)</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex gap-[4px] items-center pt-[4px] relative shrink-0 w-full" data-name="Container">
      <Container8 />
      <Container9 />
      <Container10 />
      <Container11 />
      <Container12 />
      <Margin />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#006e2f] text-[24px] whitespace-nowrap">
        <p className="leading-[32px]">₹650</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[21px] relative shrink-0 w-[20.7px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.7 21">
        <g id="Container">
          <path d={svgPaths.p7fb5300} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#006e2f] content-stretch flex items-center p-[8px] relative rounded-[8px] shrink-0" data-name="Button">
      <Container15 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex items-center justify-between pt-[16px] relative shrink-0 w-full" data-name="Container">
      <Container14 />
      <Button2 />
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0 w-full z-[1]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[16px] relative size-full">
        <Container6 />
        <Heading1 />
        <Container7 />
        <Container13 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow() {
  return (
    <div className="bg-[#f3fcef] col-1 justify-self-stretch relative rounded-[12px] row-1 self-start shrink-0" data-name="Background+Border+Shadow">
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[33px] pt-px px-px relative rounded-[inherit] size-full">
        <Background />
        <Container5 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Photo166823654309082Eba5Ee() {
  return (
    <div className="h-[288px] relative shrink-0 w-full" data-name="photo-1668236543090-82eba5ee5976">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-24.91%] max-w-none top-0 w-[149.81%]" src={imgPhoto166823654309082Eba5Ee5976} />
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="absolute bg-[#22c55e] content-stretch flex flex-col items-start left-[8px] px-[8px] py-[4px] rounded-[9999px] top-[8px]" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#004b1e] text-[12px] whitespace-nowrap">
        <p className="leading-[14px]">Freshly Ground</p>
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#edf6ea] relative shrink-0 w-full z-[2]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative size-full">
        <Photo166823654309082Eba5Ee />
        <Background3 />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[12px] tracking-[0.6px] uppercase w-full">
        <p className="leading-[14px]">FRESH FOODS</p>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#161d16] text-[24px] w-full">
        <p className="leading-[32px]">Idli Batter</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[11.083px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.0833">
        <g id="Container">
          <path d={svgPaths.p232c0780} fill="var(--fill-0, #9E4036)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[11.083px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.0833">
        <g id="Container">
          <path d={svgPaths.p232c0780} fill="var(--fill-0, #9E4036)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[11.083px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.0833">
        <g id="Container">
          <path d={svgPaths.p232c0780} fill="var(--fill-0, #9E4036)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[11.083px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.0833">
        <g id="Container">
          <path d={svgPaths.p232c0780} fill="var(--fill-0, #9E4036)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[11.083px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.0833">
        <g id="Container">
          <path d={svgPaths.p232c0780} fill="var(--fill-0, #9E4036)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0" data-name="Margin">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">(24)</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex gap-[4px] items-center pt-[4px] relative shrink-0 w-full" data-name="Container">
      <Container19 />
      <Container20 />
      <Container21 />
      <Container22 />
      <Container23 />
      <Margin1 />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#006e2f] text-[24px] whitespace-nowrap">
        <p className="leading-[32px]">₹85</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[21px] relative shrink-0 w-[20.7px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.7 21">
        <g id="Container">
          <path d={svgPaths.p7fb5300} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#006e2f] content-stretch flex items-center p-[8px] relative rounded-[8px] shrink-0" data-name="Button">
      <Container26 />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex items-center justify-between pt-[16px] relative shrink-0 w-full" data-name="Container">
      <Container25 />
      <Button3 />
    </div>
  );
}

function Container16() {
  return (
    <div className="relative shrink-0 w-full z-[1]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[16px] relative size-full">
        <Container17 />
        <Heading2 />
        <Container18 />
        <Container24 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow1() {
  return (
    <div className="bg-[#f3fcef] col-2 justify-self-stretch relative rounded-[12px] row-1 self-start shrink-0" data-name="Background+Border+Shadow">
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[33px] pt-px px-px relative rounded-[inherit] size-full">
        <Background2 />
        <Container16 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Photo1559056199641A0Ac8B55E() {
  return (
    <div className="h-[288px] relative shrink-0 w-full" data-name="photo-1559056199-641a0ac8b55e">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-24.91%] max-w-none top-0 w-[149.81%]" src={imgPhoto1559056199641A0Ac8B55E} />
      </div>
    </div>
  );
}

function Background5() {
  return (
    <div className="absolute bg-[#22c55e] content-stretch flex flex-col items-start left-[8px] px-[8px] py-[4px] rounded-[9999px] top-[8px]" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#004b1e] text-[12px] whitespace-nowrap">
        <p className="leading-[14px]">Premium Blend</p>
      </div>
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#edf6ea] relative shrink-0 w-full z-[2]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative size-full">
        <Photo1559056199641A0Ac8B55E />
        <Background5 />
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[12px] tracking-[0.6px] uppercase w-full">
        <p className="leading-[14px]">BEVERAGES</p>
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#161d16] text-[24px] w-full">
        <p className="leading-[32px]">Filter Coffee Powder</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[11.083px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.0833">
        <g id="Container">
          <path d={svgPaths.p232c0780} fill="var(--fill-0, #9E4036)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[11.083px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.0833">
        <g id="Container">
          <path d={svgPaths.p232c0780} fill="var(--fill-0, #9E4036)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[11.083px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.0833">
        <g id="Container">
          <path d={svgPaths.p232c0780} fill="var(--fill-0, #9E4036)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[11.083px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.0833">
        <g id="Container">
          <path d={svgPaths.p232c0780} fill="var(--fill-0, #9E4036)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[11.083px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.0833">
        <g id="Container">
          <path d={svgPaths.p232c0780} fill="var(--fill-0, #9E4036)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0" data-name="Margin">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">(24)</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex gap-[4px] items-center pt-[4px] relative shrink-0 w-full" data-name="Container">
      <Container30 />
      <Container31 />
      <Container32 />
      <Container33 />
      <Container34 />
      <Margin2 />
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#006e2f] text-[24px] whitespace-nowrap">
        <p className="leading-[32px]">₹240</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[21px] relative shrink-0 w-[20.7px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.7 21">
        <g id="Container">
          <path d={svgPaths.p7fb5300} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#006e2f] content-stretch flex items-center p-[8px] relative rounded-[8px] shrink-0" data-name="Button">
      <Container37 />
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex items-center justify-between pt-[16px] relative shrink-0 w-full" data-name="Container">
      <Container36 />
      <Button4 />
    </div>
  );
}

function Container27() {
  return (
    <div className="relative shrink-0 w-full z-[1]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[16px] relative size-full">
        <Container28 />
        <Heading3 />
        <Container29 />
        <Container35 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow2() {
  return (
    <div className="bg-[#f3fcef] col-3 justify-self-stretch relative rounded-[12px] row-1 self-start shrink-0" data-name="Background+Border+Shadow">
      <div className="content-stretch flex flex-col isolate items-start overflow-clip pb-[33px] pt-px px-px relative rounded-[inherit] size-full">
        <Background4 />
        <Container27 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Photo14749792664047Eaacbadcbaf() {
  return <div className="h-[288px] relative shrink-0 w-full" data-name="photo-1474979266404-7eaacbadcbaf" />;
}

function Background7() {
  return (
    <div className="absolute bg-[#22c55e] content-stretch flex flex-col items-start left-[8px] px-[8px] py-[4px] rounded-[9999px] top-[8px]" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#004b1e] text-[12px] whitespace-nowrap">
        <p className="leading-[14px]">Pure</p>
      </div>
    </div>
  );
}

function Background6() {
  return (
    <div className="bg-[#edf6ea] relative shrink-0 w-full z-[2]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative size-full">
        <Photo14749792664047Eaacbadcbaf />
        <Background7 />
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[12px] tracking-[0.6px] uppercase w-full">
        <p className="leading-[14px]">OILS</p>
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#161d16] text-[24px] w-full">
        <p className="leading-[32px] mb-0">Cold Pressed</p>
        <p className="leading-[32px]">Coconut Oil</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="h-[11.083px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.0833">
        <g id="Container">
          <path d={svgPaths.p232c0780} fill="var(--fill-0, #9E4036)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container42() {
  return (
    <div className="h-[11.083px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.0833">
        <g id="Container">
          <path d={svgPaths.p232c0780} fill="var(--fill-0, #9E4036)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container43() {
  return (
    <div className="h-[11.083px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.0833">
        <g id="Container">
          <path d={svgPaths.p232c0780} fill="var(--fill-0, #9E4036)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container44() {
  return (
    <div className="h-[11.083px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.0833">
        <g id="Container">
          <path d={svgPaths.p232c0780} fill="var(--fill-0, #9E4036)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container45() {
  return (
    <div className="h-[11.083px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.0833">
        <g id="Container">
          <path d={svgPaths.p232c0780} fill="var(--fill-0, #9E4036)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0" data-name="Margin">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">(24)</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex gap-[4px] items-center pt-[4px] relative shrink-0 w-full" data-name="Container">
      <Container41 />
      <Container42 />
      <Container43 />
      <Container44 />
      <Container45 />
      <Margin3 />
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#006e2f] text-[24px] whitespace-nowrap">
        <p className="leading-[32px]">₹320</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="h-[21px] relative shrink-0 w-[20.7px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.7 21">
        <g id="Container">
          <path d={svgPaths.p7fb5300} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#006e2f] content-stretch flex items-center p-[8px] relative rounded-[8px] shrink-0" data-name="Button">
      <Container48 />
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex items-center justify-between pt-[16px] relative shrink-0 w-full" data-name="Container">
      <Container47 />
      <Button5 />
    </div>
  );
}

function Container38() {
  return (
    <div className="relative shrink-0 w-full z-[1]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[16px] relative size-full">
        <Container39 />
        <Heading4 />
        <Container40 />
        <Container46 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow3() {
  return (
    <div className="bg-[#f3fcef] col-4 justify-self-stretch relative rounded-[12px] row-1 self-start shrink-0" data-name="Background+Border+Shadow">
      <div className="content-stretch flex flex-col isolate items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Background6 />
        <Container38 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Photo160085706224198E5Dba7F() {
  return (
    <div className="h-[288px] relative shrink-0 w-full" data-name="photo-1600857062241-98e5dba7f214">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[116.75%] left-0 max-w-none top-[-8.37%] w-full" src={imgPhoto160085706224198E5Dba7F214} />
      </div>
    </div>
  );
}

function Background9() {
  return (
    <div className="absolute bg-[#22c55e] content-stretch flex flex-col items-start left-[8px] px-[8px] py-[4px] rounded-[9999px] top-[8px]" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#004b1e] text-[12px] whitespace-nowrap">
        <p className="leading-[14px]">Pack of 3</p>
      </div>
    </div>
  );
}

function Background8() {
  return (
    <div className="bg-[#edf6ea] relative shrink-0 w-full z-[2]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative size-full">
        <Photo160085706224198E5Dba7F />
        <Background9 />
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[12px] tracking-[0.6px] uppercase w-full">
        <p className="leading-[14px]">PERSONAL CARE</p>
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#161d16] text-[24px] w-full">
        <p className="leading-[32px]">Mysore Sandal Soap</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="h-[11.083px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.0833">
        <g id="Container">
          <path d={svgPaths.p232c0780} fill="var(--fill-0, #9E4036)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container53() {
  return (
    <div className="h-[11.083px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.0833">
        <g id="Container">
          <path d={svgPaths.p232c0780} fill="var(--fill-0, #9E4036)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container54() {
  return (
    <div className="h-[11.083px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.0833">
        <g id="Container">
          <path d={svgPaths.p232c0780} fill="var(--fill-0, #9E4036)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container55() {
  return (
    <div className="h-[11.083px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.0833">
        <g id="Container">
          <path d={svgPaths.p232c0780} fill="var(--fill-0, #9E4036)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container56() {
  return (
    <div className="h-[11.083px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.0833">
        <g id="Container">
          <path d={svgPaths.p232c0780} fill="var(--fill-0, #9E4036)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin4() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0" data-name="Margin">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">(24)</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex gap-[4px] items-center pt-[4px] relative shrink-0 w-full" data-name="Container">
      <Container52 />
      <Container53 />
      <Container54 />
      <Container55 />
      <Container56 />
      <Margin4 />
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#006e2f] text-[24px] whitespace-nowrap">
        <p className="leading-[32px]">₹150</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="h-[21px] relative shrink-0 w-[20.7px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.7 21">
        <g id="Container">
          <path d={svgPaths.p7fb5300} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-[#006e2f] content-stretch flex items-center p-[8px] relative rounded-[8px] shrink-0" data-name="Button">
      <Container59 />
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex items-center justify-between pt-[16px] relative shrink-0 w-full" data-name="Container">
      <Container58 />
      <Button6 />
    </div>
  );
}

function Container49() {
  return (
    <div className="relative shrink-0 w-full z-[1]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[16px] relative size-full">
        <Container50 />
        <Heading5 />
        <Container51 />
        <Container57 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow4() {
  return (
    <div className="bg-[#f3fcef] col-1 justify-self-stretch relative rounded-[12px] row-2 self-start shrink-0" data-name="Background+Border+Shadow">
      <div className="content-stretch flex flex-col isolate items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Background8 />
        <Container49 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Photo1628102476625594B74E() {
  return <div className="h-[288px] relative shrink-0 w-full" data-name="photo-1628102476625-594b74e83546" />;
}

function Background11() {
  return (
    <div className="absolute bg-[#22c55e] content-stretch flex flex-col items-start left-[8px] px-[8px] py-[4px] rounded-[9999px] top-[8px]" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#004b1e] text-[12px] whitespace-nowrap">
        <p className="leading-[14px]">Kerala Special</p>
      </div>
    </div>
  );
}

function Background10() {
  return (
    <div className="bg-[#edf6ea] relative shrink-0 w-full z-[2]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative size-full">
        <Photo1628102476625594B74E />
        <Background11 />
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[12px] tracking-[0.6px] uppercase w-full">
        <p className="leading-[14px]">SNACKS</p>
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#161d16] text-[24px] w-full">
        <p className="leading-[32px]">Banana Chips</p>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="h-[11.083px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.0833">
        <g id="Container">
          <path d={svgPaths.p232c0780} fill="var(--fill-0, #9E4036)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container64() {
  return (
    <div className="h-[11.083px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.0833">
        <g id="Container">
          <path d={svgPaths.p232c0780} fill="var(--fill-0, #9E4036)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container65() {
  return (
    <div className="h-[11.083px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.0833">
        <g id="Container">
          <path d={svgPaths.p232c0780} fill="var(--fill-0, #9E4036)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container66() {
  return (
    <div className="h-[11.083px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.0833">
        <g id="Container">
          <path d={svgPaths.p232c0780} fill="var(--fill-0, #9E4036)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container67() {
  return (
    <div className="h-[11.083px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.0833">
        <g id="Container">
          <path d={svgPaths.p232c0780} fill="var(--fill-0, #BCCBB9)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin5() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0" data-name="Margin">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">(24)</p>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex gap-[4px] items-center pt-[4px] relative shrink-0 w-full" data-name="Container">
      <Container63 />
      <Container64 />
      <Container65 />
      <Container66 />
      <Container67 />
      <Margin5 />
    </div>
  );
}

function Container69() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#006e2f] text-[24px] whitespace-nowrap">
        <p className="leading-[32px]">₹120</p>
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="h-[21px] relative shrink-0 w-[20.7px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.7 21">
        <g id="Container">
          <path d={svgPaths.p7fb5300} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-[#006e2f] content-stretch flex items-center p-[8px] relative rounded-[8px] shrink-0" data-name="Button">
      <Container70 />
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex items-center justify-between pt-[16px] relative shrink-0 w-full" data-name="Container">
      <Container69 />
      <Button7 />
    </div>
  );
}

function Container60() {
  return (
    <div className="relative shrink-0 w-full z-[1]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[16px] relative size-full">
        <Container61 />
        <Heading6 />
        <Container62 />
        <Container68 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow5() {
  return (
    <div className="bg-[#f3fcef] col-2 justify-self-stretch relative rounded-[12px] row-2 self-start shrink-0" data-name="Background+Border+Shadow">
      <div className="content-stretch flex flex-col isolate items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Background10 />
        <Container60 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Photo161548447777131C2A() {
  return <div className="h-[288px] relative shrink-0 w-full" data-name="photo-1615484477771-31c2a0919139" />;
}

function Background13() {
  return (
    <div className="absolute bg-[#22c55e] content-stretch flex flex-col items-start left-[8px] px-[8px] py-[4px] rounded-[9999px] top-[8px]" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#004b1e] text-[12px] whitespace-nowrap">
        <p className="leading-[14px]">Organic</p>
      </div>
    </div>
  );
}

function Background12() {
  return (
    <div className="bg-[#edf6ea] relative shrink-0 w-full z-[2]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative size-full">
        <Photo161548447777131C2A />
        <Background13 />
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[12px] tracking-[0.6px] uppercase w-full">
        <p className="leading-[14px]">PRODUCE</p>
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#161d16] text-[24px] w-full">
        <p className="leading-[32px]">Fresh Curry Leaves</p>
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="h-[11.083px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.0833">
        <g id="Container">
          <path d={svgPaths.p232c0780} fill="var(--fill-0, #9E4036)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container75() {
  return (
    <div className="h-[11.083px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.0833">
        <g id="Container">
          <path d={svgPaths.p232c0780} fill="var(--fill-0, #9E4036)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container76() {
  return (
    <div className="h-[11.083px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.0833">
        <g id="Container">
          <path d={svgPaths.p232c0780} fill="var(--fill-0, #9E4036)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container77() {
  return (
    <div className="h-[11.083px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.0833">
        <g id="Container">
          <path d={svgPaths.p232c0780} fill="var(--fill-0, #9E4036)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container78() {
  return (
    <div className="h-[11.083px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.0833">
        <g id="Container">
          <path d={svgPaths.p232c0780} fill="var(--fill-0, #9E4036)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin6() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0" data-name="Margin">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">(24)</p>
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="content-stretch flex gap-[4px] items-center pt-[4px] relative shrink-0 w-full" data-name="Container">
      <Container74 />
      <Container75 />
      <Container76 />
      <Container77 />
      <Container78 />
      <Margin6 />
    </div>
  );
}

function Container80() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#006e2f] text-[24px] whitespace-nowrap">
        <p className="leading-[32px]">₹20</p>
      </div>
    </div>
  );
}

function Container81() {
  return (
    <div className="h-[21px] relative shrink-0 w-[20.7px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.7 21">
        <g id="Container">
          <path d={svgPaths.p7fb5300} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-[#006e2f] content-stretch flex items-center p-[8px] relative rounded-[8px] shrink-0" data-name="Button">
      <Container81 />
    </div>
  );
}

function Container79() {
  return (
    <div className="content-stretch flex items-center justify-between pt-[16px] relative shrink-0 w-full" data-name="Container">
      <Container80 />
      <Button8 />
    </div>
  );
}

function Container71() {
  return (
    <div className="relative shrink-0 w-full z-[1]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[16px] relative size-full">
        <Container72 />
        <Heading7 />
        <Container73 />
        <Container79 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow6() {
  return (
    <div className="bg-[#f3fcef] col-3 justify-self-stretch relative rounded-[12px] row-2 self-start shrink-0" data-name="Background+Border+Shadow">
      <div className="content-stretch flex flex-col isolate items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Background12 />
        <Container71 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Photo158599419273223C2A0D() {
  return <div className="h-[288px] relative shrink-0 w-full" data-name="photo-1585994192732-23c2a0d16556" />;
}

function Background15() {
  return (
    <div className="absolute bg-[#22c55e] content-stretch flex flex-col items-start left-[8px] px-[8px] py-[4px] rounded-[9999px] top-[8px]" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#004b1e] text-[12px] whitespace-nowrap">
        <p className="leading-[14px]">1kg</p>
      </div>
    </div>
  );
}

function Background14() {
  return (
    <div className="bg-[#edf6ea] relative shrink-0 w-full z-[2]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative size-full">
        <Photo158599419273223C2A0D />
        <Background15 />
      </div>
    </div>
  );
}

function Container83() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[12px] tracking-[0.6px] uppercase w-full">
        <p className="leading-[14px]">PULSES</p>
      </div>
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#161d16] text-[24px] w-full">
        <p className="leading-[32px]">Toor Dal</p>
      </div>
    </div>
  );
}

function Container85() {
  return (
    <div className="h-[11.083px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.0833">
        <g id="Container">
          <path d={svgPaths.p232c0780} fill="var(--fill-0, #9E4036)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container86() {
  return (
    <div className="h-[11.083px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.0833">
        <g id="Container">
          <path d={svgPaths.p232c0780} fill="var(--fill-0, #9E4036)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container87() {
  return (
    <div className="h-[11.083px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.0833">
        <g id="Container">
          <path d={svgPaths.p232c0780} fill="var(--fill-0, #9E4036)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container88() {
  return (
    <div className="h-[11.083px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.0833">
        <g id="Container">
          <path d={svgPaths.p232c0780} fill="var(--fill-0, #9E4036)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container89() {
  return (
    <div className="h-[11.083px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.0833">
        <g id="Container">
          <path d={svgPaths.p232c0780} fill="var(--fill-0, #BCCBB9)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin7() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0" data-name="Margin">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">(24)</p>
      </div>
    </div>
  );
}

function Container84() {
  return (
    <div className="content-stretch flex gap-[4px] items-center pt-[4px] relative shrink-0 w-full" data-name="Container">
      <Container85 />
      <Container86 />
      <Container87 />
      <Container88 />
      <Container89 />
      <Margin7 />
    </div>
  );
}

function Container91() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#006e2f] text-[24px] whitespace-nowrap">
        <p className="leading-[32px]">₹180</p>
      </div>
    </div>
  );
}

function Container92() {
  return (
    <div className="h-[21px] relative shrink-0 w-[20.7px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.7 21">
        <g id="Container">
          <path d={svgPaths.p7fb5300} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button9() {
  return (
    <div className="bg-[#006e2f] content-stretch flex items-center p-[8px] relative rounded-[8px] shrink-0" data-name="Button">
      <Container92 />
    </div>
  );
}

function Container90() {
  return (
    <div className="content-stretch flex items-center justify-between pt-[16px] relative shrink-0 w-full" data-name="Container">
      <Container91 />
      <Button9 />
    </div>
  );
}

function Container82() {
  return (
    <div className="relative shrink-0 w-full z-[1]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[16px] relative size-full">
        <Container83 />
        <Heading8 />
        <Container84 />
        <Container90 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow7() {
  return (
    <div className="bg-[#f3fcef] col-4 justify-self-stretch relative rounded-[12px] row-2 self-start shrink-0" data-name="Background+Border+Shadow">
      <div className="content-stretch flex flex-col isolate items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Background14 />
        <Container82 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Photo15994886157317E5C2823Ff() {
  return (
    <div className="h-[288px] relative shrink-0 w-full" data-name="photo-1599488615731-7e5c2823ff28">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[150%] left-0 max-w-none top-[-25%] w-full" src={imgPhoto15994886157317E5C2823Ff28} />
      </div>
    </div>
  );
}

function Background17() {
  return (
    <div className="absolute bg-[#22c55e] content-stretch flex flex-col items-start left-[8px] px-[8px] py-[4px] rounded-[9999px] top-[8px]" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#004b1e] text-[12px] whitespace-nowrap">
        <p className="leading-[14px]">Extra Hot</p>
      </div>
    </div>
  );
}

function Background16() {
  return (
    <div className="bg-[#edf6ea] relative shrink-0 w-full z-[2]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative size-full">
        <Photo15994886157317E5C2823Ff />
        <Background17 />
      </div>
    </div>
  );
}

function Container94() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[12px] tracking-[0.6px] uppercase w-full">
        <p className="leading-[14px]">SPICES</p>
      </div>
    </div>
  );
}

function Heading9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#161d16] text-[24px] w-full">
        <p className="leading-[32px]">Guntur Red Chillies</p>
      </div>
    </div>
  );
}

function Container96() {
  return (
    <div className="h-[11.083px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.0833">
        <g id="Container">
          <path d={svgPaths.p232c0780} fill="var(--fill-0, #9E4036)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container97() {
  return (
    <div className="h-[11.083px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.0833">
        <g id="Container">
          <path d={svgPaths.p232c0780} fill="var(--fill-0, #9E4036)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container98() {
  return (
    <div className="h-[11.083px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.0833">
        <g id="Container">
          <path d={svgPaths.p232c0780} fill="var(--fill-0, #9E4036)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container99() {
  return (
    <div className="h-[11.083px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.0833">
        <g id="Container">
          <path d={svgPaths.p232c0780} fill="var(--fill-0, #9E4036)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container100() {
  return (
    <div className="h-[11.083px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.0833">
        <g id="Container">
          <path d={svgPaths.p232c0780} fill="var(--fill-0, #BCCBB9)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin8() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0" data-name="Margin">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">(24)</p>
      </div>
    </div>
  );
}

function Container95() {
  return (
    <div className="content-stretch flex gap-[4px] items-center pt-[4px] relative shrink-0 w-full" data-name="Container">
      <Container96 />
      <Container97 />
      <Container98 />
      <Container99 />
      <Container100 />
      <Margin8 />
    </div>
  );
}

function Container102() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#006e2f] text-[24px] whitespace-nowrap">
        <p className="leading-[32px]">₹90</p>
      </div>
    </div>
  );
}

function Container103() {
  return (
    <div className="h-[21px] relative shrink-0 w-[20.7px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.7 21">
        <g id="Container">
          <path d={svgPaths.p7fb5300} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button10() {
  return (
    <div className="bg-[#006e2f] content-stretch flex items-center p-[8px] relative rounded-[8px] shrink-0" data-name="Button">
      <Container103 />
    </div>
  );
}

function Container101() {
  return (
    <div className="content-stretch flex items-center justify-between pt-[16px] relative shrink-0 w-full" data-name="Container">
      <Container102 />
      <Button10 />
    </div>
  );
}

function Container93() {
  return (
    <div className="relative shrink-0 w-full z-[1]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[16px] relative size-full">
        <Container94 />
        <Heading9 />
        <Container95 />
        <Container101 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow8() {
  return (
    <div className="bg-[#f3fcef] col-1 justify-self-stretch relative rounded-[12px] row-3 self-start shrink-0" data-name="Background+Border+Shadow">
      <div className="content-stretch flex flex-col isolate items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Background16 />
        <Container93 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Photo() {
  return <div className="h-[288px] relative shrink-0 w-full" data-name="photo-1626132646529-500637532537" />;
}

function Background19() {
  return (
    <div className="absolute bg-[#22c55e] content-stretch flex flex-col items-start left-[8px] px-[8px] py-[4px] rounded-[9999px] top-[8px]" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#004b1e] text-[12px] whitespace-nowrap">
        <p className="leading-[14px]">New</p>
      </div>
    </div>
  );
}

function Background18() {
  return (
    <div className="bg-[#edf6ea] relative shrink-0 w-full z-[2]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative size-full">
        <Photo />
        <Background19 />
      </div>
    </div>
  );
}

function Container105() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[12px] tracking-[0.6px] uppercase w-full">
        <p className="leading-[14px]">INSTANT MIX</p>
      </div>
    </div>
  );
}

function Heading10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#161d16] text-[24px] w-full">
        <p className="leading-[32px]">Medhuvada Mix</p>
      </div>
    </div>
  );
}

function Container107() {
  return (
    <div className="h-[11.083px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.0833">
        <g id="Container">
          <path d={svgPaths.p232c0780} fill="var(--fill-0, #9E4036)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container108() {
  return (
    <div className="h-[11.083px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.0833">
        <g id="Container">
          <path d={svgPaths.p232c0780} fill="var(--fill-0, #9E4036)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container109() {
  return (
    <div className="h-[11.083px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.0833">
        <g id="Container">
          <path d={svgPaths.p232c0780} fill="var(--fill-0, #9E4036)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container110() {
  return (
    <div className="h-[11.083px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.0833">
        <g id="Container">
          <path d={svgPaths.p232c0780} fill="var(--fill-0, #9E4036)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container111() {
  return (
    <div className="h-[11.083px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.0833">
        <g id="Container">
          <path d={svgPaths.p232c0780} fill="var(--fill-0, #9E4036)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin9() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0" data-name="Margin">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">(24)</p>
      </div>
    </div>
  );
}

function Container106() {
  return (
    <div className="content-stretch flex gap-[4px] items-center pt-[4px] relative shrink-0 w-full" data-name="Container">
      <Container107 />
      <Container108 />
      <Container109 />
      <Container110 />
      <Container111 />
      <Margin9 />
    </div>
  );
}

function Container113() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#006e2f] text-[24px] whitespace-nowrap">
        <p className="leading-[32px]">₹110</p>
      </div>
    </div>
  );
}

function Container114() {
  return (
    <div className="h-[21px] relative shrink-0 w-[20.7px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.7 21">
        <g id="Container">
          <path d={svgPaths.p7fb5300} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button11() {
  return (
    <div className="bg-[#006e2f] content-stretch flex items-center p-[8px] relative rounded-[8px] shrink-0" data-name="Button">
      <Container114 />
    </div>
  );
}

function Container112() {
  return (
    <div className="content-stretch flex items-center justify-between pt-[16px] relative shrink-0 w-full" data-name="Container">
      <Container113 />
      <Button11 />
    </div>
  );
}

function Container104() {
  return (
    <div className="relative shrink-0 w-full z-[1]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[16px] relative size-full">
        <Container105 />
        <Heading10 />
        <Container106 />
        <Container112 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow9() {
  return (
    <div className="bg-[#f3fcef] col-2 justify-self-stretch relative rounded-[12px] row-3 self-start shrink-0" data-name="Background+Border+Shadow">
      <div className="content-stretch flex flex-col isolate items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Background18 />
        <Container104 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Photo1565557623262B51C2513A() {
  return (
    <div className="h-[288px] relative shrink-0 w-full" data-name="photo-1565557623262-b51c2513a641">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-42.17%] max-w-none top-0 w-[184.33%]" src={imgPhoto1565557623262B51C2513A641} />
      </div>
    </div>
  );
}

function Background21() {
  return (
    <div className="absolute bg-[#22c55e] content-stretch flex flex-col items-start left-[8px] px-[8px] py-[4px] rounded-[9999px] top-[8px]" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#004b1e] text-[12px] whitespace-nowrap">
        <p className="leading-[14px]">Handmade</p>
      </div>
    </div>
  );
}

function Background20() {
  return (
    <div className="bg-[#edf6ea] relative shrink-0 w-full z-[2]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative size-full">
        <Photo1565557623262B51C2513A />
        <Background21 />
      </div>
    </div>
  );
}

function Container116() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[12px] tracking-[0.6px] uppercase w-full">
        <p className="leading-[14px]">SNACKS</p>
      </div>
    </div>
  );
}

function Heading11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#161d16] text-[24px] w-full">
        <p className="leading-[32px]">Papads</p>
      </div>
    </div>
  );
}

function Container118() {
  return (
    <div className="h-[11.083px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.0833">
        <g id="Container">
          <path d={svgPaths.p232c0780} fill="var(--fill-0, #9E4036)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container119() {
  return (
    <div className="h-[11.083px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.0833">
        <g id="Container">
          <path d={svgPaths.p232c0780} fill="var(--fill-0, #9E4036)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container120() {
  return (
    <div className="h-[11.083px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.0833">
        <g id="Container">
          <path d={svgPaths.p232c0780} fill="var(--fill-0, #9E4036)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container121() {
  return (
    <div className="h-[11.083px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.0833">
        <g id="Container">
          <path d={svgPaths.p232c0780} fill="var(--fill-0, #9E4036)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container122() {
  return (
    <div className="h-[11.083px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.0833">
        <g id="Container">
          <path d={svgPaths.p232c0780} fill="var(--fill-0, #BCCBB9)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin10() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0" data-name="Margin">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">(24)</p>
      </div>
    </div>
  );
}

function Container117() {
  return (
    <div className="content-stretch flex gap-[4px] items-center pt-[4px] relative shrink-0 w-full" data-name="Container">
      <Container118 />
      <Container119 />
      <Container120 />
      <Container121 />
      <Container122 />
      <Margin10 />
    </div>
  );
}

function Container124() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#006e2f] text-[24px] whitespace-nowrap">
        <p className="leading-[32px]">₹65</p>
      </div>
    </div>
  );
}

function Container125() {
  return (
    <div className="h-[21px] relative shrink-0 w-[20.7px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.7 21">
        <g id="Container">
          <path d={svgPaths.p7fb5300} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button12() {
  return (
    <div className="bg-[#006e2f] content-stretch flex items-center p-[8px] relative rounded-[8px] shrink-0" data-name="Button">
      <Container125 />
    </div>
  );
}

function Container123() {
  return (
    <div className="content-stretch flex items-center justify-between pt-[16px] relative shrink-0 w-full" data-name="Container">
      <Container124 />
      <Button12 />
    </div>
  );
}

function Container115() {
  return (
    <div className="relative shrink-0 w-full z-[1]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[16px] relative size-full">
        <Container116 />
        <Heading11 />
        <Container117 />
        <Container123 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow10() {
  return (
    <div className="bg-[#f3fcef] col-3 justify-self-stretch relative rounded-[12px] row-3 self-start shrink-0" data-name="Background+Border+Shadow">
      <div className="content-stretch flex flex-col isolate items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Background20 />
        <Container115 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Photo1602165003882628D36371C() {
  return <div className="h-[288px] relative shrink-0 w-full" data-name="photo-1602165003882-628d36371c12" />;
}

function Background23() {
  return (
    <div className="absolute bg-[#22c55e] content-stretch flex flex-col items-start left-[8px] px-[8px] py-[4px] rounded-[9999px] top-[8px]" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#004b1e] text-[12px] whitespace-nowrap">
        <p className="leading-[14px]">Sandalwood</p>
      </div>
    </div>
  );
}

function Background22() {
  return (
    <div className="bg-[#edf6ea] relative shrink-0 w-full z-[2]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative size-full">
        <Photo1602165003882628D36371C />
        <Background23 />
      </div>
    </div>
  );
}

function Container127() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[12px] tracking-[0.6px] uppercase w-full">
        <p className="leading-[14px]">POOJA NEEDS</p>
      </div>
    </div>
  );
}

function Heading12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#161d16] text-[24px] w-full">
        <p className="leading-[32px]">Incense Sticks</p>
      </div>
    </div>
  );
}

function Container129() {
  return (
    <div className="h-[11.083px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.0833">
        <g id="Container">
          <path d={svgPaths.p232c0780} fill="var(--fill-0, #9E4036)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container130() {
  return (
    <div className="h-[11.083px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.0833">
        <g id="Container">
          <path d={svgPaths.p232c0780} fill="var(--fill-0, #9E4036)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container131() {
  return (
    <div className="h-[11.083px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.0833">
        <g id="Container">
          <path d={svgPaths.p232c0780} fill="var(--fill-0, #9E4036)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container132() {
  return (
    <div className="h-[11.083px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.0833">
        <g id="Container">
          <path d={svgPaths.p232c0780} fill="var(--fill-0, #9E4036)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container133() {
  return (
    <div className="h-[11.083px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.0833">
        <g id="Container">
          <path d={svgPaths.p232c0780} fill="var(--fill-0, #9E4036)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin11() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0" data-name="Margin">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">(24)</p>
      </div>
    </div>
  );
}

function Container128() {
  return (
    <div className="content-stretch flex gap-[4px] items-center pt-[4px] relative shrink-0 w-full" data-name="Container">
      <Container129 />
      <Container130 />
      <Container131 />
      <Container132 />
      <Container133 />
      <Margin11 />
    </div>
  );
}

function Container135() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#006e2f] text-[24px] whitespace-nowrap">
        <p className="leading-[32px]">₹45</p>
      </div>
    </div>
  );
}

function Container136() {
  return (
    <div className="h-[21px] relative shrink-0 w-[20.7px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.7 21">
        <g id="Container">
          <path d={svgPaths.p7fb5300} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button13() {
  return (
    <div className="bg-[#006e2f] content-stretch flex items-center p-[8px] relative rounded-[8px] shrink-0" data-name="Button">
      <Container136 />
    </div>
  );
}

function Container134() {
  return (
    <div className="content-stretch flex items-center justify-between pt-[16px] relative shrink-0 w-full" data-name="Container">
      <Container135 />
      <Button13 />
    </div>
  );
}

function Container126() {
  return (
    <div className="relative shrink-0 w-full z-[1]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[16px] relative size-full">
        <Container127 />
        <Heading12 />
        <Container128 />
        <Container134 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow11() {
  return (
    <div className="bg-[#f3fcef] col-4 justify-self-stretch relative rounded-[12px] row-3 self-start shrink-0" data-name="Background+Border+Shadow">
      <div className="content-stretch flex flex-col isolate items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Background22 />
        <Container126 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Container4() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[___480px_448px_448px] relative shrink-0 w-full" data-name="Container">
      <BackgroundBorderShadow />
      <BackgroundBorderShadow1 />
      <BackgroundBorderShadow2 />
      <BackgroundBorderShadow3 />
      <BackgroundBorderShadow4 />
      <BackgroundBorderShadow5 />
      <BackgroundBorderShadow6 />
      <BackgroundBorderShadow7 />
      <BackgroundBorderShadow8 />
      <BackgroundBorderShadow9 />
      <BackgroundBorderShadow10 />
      <BackgroundBorderShadow11 />
    </div>
  );
}

function FeaturedProductsSection() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Featured Products Section">
      <Container1 />
      <Container4 />
    </div>
  );
}

function Main() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Main">
      <div className="content-stretch flex flex-col gap-[64px] items-start max-w-[inherit] pb-[64px] pt-[96px] px-[24px] relative size-full">
        <HeroSection />
        <FeaturedProductsSection />
      </div>
    </div>
  );
}

function Container139() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#006e2f] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">FreshMarket</p>
      </div>
    </div>
  );
}

function Container140() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[320px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[14px] whitespace-nowrap">
        <p className="leading-[20px] mb-0">Connecting you with local farms for the freshest</p>
        <p className="leading-[20px]">South Indian groceries delivered daily.</p>
      </div>
    </div>
  );
}

function Container138() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[318.47px]" data-name="Container">
      <Container139 />
      <Container140 />
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[12px] whitespace-nowrap">
        <p className="leading-[14px]">Privacy Policy</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[12px] whitespace-nowrap">
        <p className="leading-[14px]">Terms of Service</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[12px] whitespace-nowrap">
        <p className="leading-[14px]">Shipping Info</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[12px] whitespace-nowrap">
        <p className="leading-[14px]">Contact Us</p>
      </div>
    </div>
  );
}

function Container141() {
  return (
    <div className="content-stretch flex gap-[24px] h-[14px] items-start justify-center relative shrink-0" data-name="Container">
      <Link />
      <Link1 />
      <Link2 />
      <Link3 />
    </div>
  );
}

function Container143() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[14px] text-right whitespace-nowrap">
        <p className="leading-[20px]">© 2024 FreshMarket. All rights reserved.</p>
      </div>
    </div>
  );
}

function Container145() {
  return (
    <div className="content-stretch flex flex-col items-end relative self-stretch shrink-0" data-name="Container">
      <div className="h-[16px] relative shrink-0 w-[20px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
          <path d={svgPaths.p25774b00} fill="var(--fill-0, #6D7B6C)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container146() {
  return (
    <div className="content-stretch flex flex-col items-end relative self-stretch shrink-0" data-name="Container">
      <div className="h-[18px] relative shrink-0 w-[19px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 18">
          <path d={svgPaths.p53fc80} fill="var(--fill-0, #6D7B6C)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container147() {
  return (
    <div className="content-stretch flex flex-col items-end relative self-stretch shrink-0" data-name="Container">
      <div className="h-[16px] relative shrink-0 w-[22px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 16">
          <path d={svgPaths.p146eb80} fill="var(--fill-0, #6D7B6C)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container144() {
  return (
    <div className="content-stretch flex gap-[16px] h-[18px] items-start justify-end relative shrink-0 w-full" data-name="Container">
      <Container145 />
      <Container146 />
      <Container147 />
    </div>
  );
}

function Container142() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[270.63px]" data-name="Container">
      <Container143 />
      <Container144 />
    </div>
  );
}

function Container137() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between max-w-[inherit] pl-[24px] pr-[23.99px] py-[32px] relative size-full">
          <Container138 />
          <Container141 />
          <Container142 />
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start pt-px relative shrink-0 w-full" data-name="Footer">
      <div aria-hidden className="absolute border-[#bccbb9] border-solid border-t inset-0 pointer-events-none" />
      <Container137 />
    </div>
  );
}

function Container150() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#006e2f] text-[24px] whitespace-nowrap">
        <p className="leading-[32px]">FreshMarket</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[2px] relative self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border-[#006e2f] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#006e2f] text-[14px] tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[16px]">Shop</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[14px] tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[16px]">Deals</p>
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[14px] tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[16px]">Orders</p>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="content-stretch flex gap-[24px] h-[18px] items-start relative shrink-0" data-name="Nav">
      <Link4 />
      <Link5 />
      <Link6 />
    </div>
  );
}

function Container149() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0" data-name="Container">
      <Container150 />
      <Nav />
    </div>
  );
}

function Container152() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[14px] w-full">
        <p className="leading-[normal]">Search for staples, snacks and more...</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#edf6ea] relative rounded-[9999px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center pb-[10px] pl-[40px] pr-[16px] pt-[9px] relative size-full">
          <Container152 />
        </div>
      </div>
    </div>
  );
}

function Container153() {
  return (
    <div className="absolute bottom-[16.67%] content-stretch flex flex-col items-start left-[12px] top-[16.67%]" data-name="Container">
      <div className="relative shrink-0 size-[18px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <path d={svgPaths.p8a35e00} fill="var(--fill-0, #6D7B6C)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container151() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Input />
      <Container153 />
    </div>
  );
}

function Margin12() {
  return (
    <div className="flex-[1_0_0] max-w-[512px] min-w-px relative" data-name="Margin">
      <div className="content-stretch flex flex-col items-start max-w-[inherit] px-[32px] relative size-full">
        <Container151 />
      </div>
    </div>
  );
}

function Container155() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Container">
          <path d={svgPaths.p164b49c0} fill="var(--fill-0, #3D4A3D)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button14() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[9999px] shrink-0" data-name="Button">
      <Container155 />
      <div className="absolute bg-[#ba1a1a] right-[3.99px] rounded-[9999px] size-[8px] top-[4px]" data-name="Background" />
    </div>
  );
}

function Container156() {
  return (
    <div className="h-[20px] relative shrink-0 w-[19.982px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9815 20">
        <g id="Container">
          <path d={svgPaths.pb5c2400} fill="var(--fill-0, #3D4A3D)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button15() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[9999px] shrink-0" data-name="Button">
      <Container156 />
    </div>
  );
}

function UserProfileAvatar() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[32px]" data-name="User Profile Avatar">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[9999px]">
        <div className="absolute bg-[#e2ebde] inset-0 rounded-[9999px]" />
        <div className="absolute inset-0 overflow-hidden rounded-[9999px]">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgUserProfileAvatar} />
        </div>
      </div>
    </div>
  );
}

function Button16() {
  return (
    <div className="content-stretch flex items-center p-[4px] relative rounded-[9999px] shrink-0" data-name="Button">
      <UserProfileAvatar />
    </div>
  );
}

function Container154() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container">
      <Button14 />
      <Button15 />
      <Button16 />
    </div>
  );
}

function Container148() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between max-w-[inherit] px-[24px] py-[16px] relative size-full">
          <Container149 />
          <Margin12 />
          <Container154 />
        </div>
      </div>
    </div>
  );
}

function HeaderTopNavBar() {
  return (
    <div className="absolute bg-[#f3fcef] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col items-start left-0 top-0 w-[1280px]" data-name="Header - TopNavBar">
      <Container148 />
    </div>
  );
}

function Ab6AXuB3YAnq6W9UlEiPqCmc80T7AAyLkrMyni80R9Ug6Jo28XRCzgEjgPlWh4KpaCJ601VoVmlIZxguQnb09BheLjAoSg8BFvicKbRxyFg9PLbLgpPfvcwwCzkkDghxZUhOrylUxZplZnZr7Eu3VYal3A7DTbYrjr3JmNv7O7Ktg1QQxfbDv2QexNzN81HB3QzYNgdchwxRFjaVDd404Jztdq9M64N8PfyPnneRvuLBaapowU25GnoayozIyU8NJfvuBeBm8MjjV() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="AB6AXuB3YAnq6w9ulEiPqCMC80-t7AAyLKRMyni80R9UG6Jo28xRCzgEjgPlWH4kpa-cJ601VOVmlIZxguQnb09BheLJAo-Sg8bFVIC_kbRxyFg9pLbLGPPfvcwwCzkkDghxZUhORYLUxZplZnZR7EU-3vYal3A7DTbYrjr3jmNv7o7ktg1qQxfbDV2QexNzN81hB3qzYNgdchwxRFja-vDd404jztdq9m64n8PFYPnneRvuLBaapowU-25GnoayozIyU8nJFVUBeBm8MjjV">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-15.18%] max-w-none top-0 w-[130.36%]" src={imgAb6AXuB3YAnq6W9UlEiPqCmc80T7AAyLkrMyni80R9Ug6Jo28XRCzgEjgPlWh4KpaCJ601VoVmlIZxguQnb09BheLjAoSg8BFvicKbRxyFg9PLbLgpPfvcwwCzkkDghxZUhOrylUxZplZnZr7Eu3VYal3A7DTbYrjr3JmNv7O7Ktg1QQxfbDv2QexNzN81HB3QzYNgdchwxRFjaVDd404Jztdq9M64N8PfyPnneRvuLBaapowU25GnoayozIyU8NJfvuBeBm8MjjV} />
      </div>
    </div>
  );
}

function ModalImage() {
  return (
    <div className="bg-[#edf6ea] content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px overflow-clip relative self-stretch" data-name="Modal Image">
      <Ab6AXuB3YAnq6W9UlEiPqCmc80T7AAyLkrMyni80R9Ug6Jo28XRCzgEjgPlWh4KpaCJ601VoVmlIZxguQnb09BheLjAoSg8BFvicKbRxyFg9PLbLgpPfvcwwCzkkDghxZUhOrylUxZplZnZr7Eu3VYal3A7DTbYrjr3JmNv7O7Ktg1QQxfbDv2QexNzN81HB3QzYNgdchwxRFjaVDd404Jztdq9M64N8PfyPnneRvuLBaapowU25GnoayozIyU8NJfvuBeBm8MjjV />
    </div>
  );
}

function Background24() {
  return (
    <div className="bg-[#22c55e] content-stretch flex flex-col items-start px-[12px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#004b1e] text-[12px] whitespace-nowrap">
        <p className="leading-[14px]">{`Rice & Grains`}</p>
      </div>
    </div>
  );
}

function Container158() {
  return (
    <div className="relative shrink-0 size-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
        <g id="Container">
          <path d={svgPaths.p3cf2be00} fill="var(--fill-0, #3D4A3D)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background25() {
  return (
    <div className="bg-[#e2ebde] content-stretch flex gap-[4px] items-center px-[12px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Background">
      <Container158 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[12px] whitespace-nowrap">
        <p className="leading-[14px]">In Stock</p>
      </div>
    </div>
  );
}

function Container157() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Background24 />
      <Background25 />
    </div>
  );
}

function Margin13() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0 w-full" data-name="Margin">
      <Container157 />
    </div>
  );
}

function Heading13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#161d16] text-[32px] tracking-[-0.32px] w-full">
        <p className="leading-[40px] mb-0">Premium Sona Masoori</p>
        <p className="leading-[40px]">Rice</p>
      </div>
    </div>
  );
}

function Heading2Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0 w-full" data-name="Heading 2:margin">
      <Heading13 />
    </div>
  );
}

function Container161() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="h-[19px] relative shrink-0 w-[20px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 19">
          <path d={svgPaths.p1f93f980} fill="var(--fill-0, #9E4036)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container162() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="h-[19px] relative shrink-0 w-[20px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 19">
          <path d={svgPaths.p1f93f980} fill="var(--fill-0, #9E4036)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container163() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="h-[19px] relative shrink-0 w-[20px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 19">
          <path d={svgPaths.p1f93f980} fill="var(--fill-0, #9E4036)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container164() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="h-[19px] relative shrink-0 w-[20px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 19">
          <path d={svgPaths.p1f93f980} fill="var(--fill-0, #9E4036)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container165() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="h-[19px] relative shrink-0 w-[20px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 19">
          <path d={svgPaths.p1f93f980} fill="var(--fill-0, #9E4036)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container160() {
  return (
    <div className="content-stretch flex h-[19px] items-start relative shrink-0" data-name="Container">
      <Container161 />
      <Container162 />
      <Container163 />
      <Container164 />
      <Container165 />
    </div>
  );
}

function Container166() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">(124 customer reviews)</p>
      </div>
    </div>
  );
}

function Container159() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Container160 />
      <Container166 />
    </div>
  );
}

function Margin14() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] relative shrink-0 w-full" data-name="Margin">
      <Container159 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="[word-break:break-word] font-['Inter:Regular',sans-serif] h-[56px] leading-[0] not-italic relative shrink-0 tracking-[-0.96px] w-full whitespace-nowrap" data-name="Paragraph">
      <div className="-translate-y-1/2 absolute flex flex-col font-bold justify-center left-0 text-[#006e2f] text-[48px] top-[27.5px]">
        <p className="leading-[56px]">{`₹650 `}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-normal justify-center left-[135.39px] text-[#3d4a3d] text-[24px] top-[36.5px]">
        <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid leading-[32px] line-through">₹720</p>
      </div>
    </div>
  );
}

function Margin15() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] relative shrink-0 w-full" data-name="Margin">
      <Paragraph />
    </div>
  );
}

function Container167() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[16px] w-full">
        <p className="leading-[26px] mb-0">Sourced from the fertile fields of Karnataka and</p>
        <p className="leading-[26px] mb-0">Andhra Pradesh, our aged Sona Masoori rice is</p>
        <p className="leading-[26px] mb-0">known for its delicate aroma, lightweight texture,</p>
        <p className="leading-[26px] mb-0">and exceptional taste. Perfect for daily meals,</p>
        <p className="leading-[26px]">biryani, or pongal.</p>
      </div>
    </div>
  );
}

function Margin16() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[32px] relative shrink-0 w-full" data-name="Margin">
      <Container167 />
    </div>
  );
}

function Container170() {
  return (
    <div className="h-[2px] relative shrink-0 w-[14px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 2">
        <g id="Container">
          <path d="M0 2V0H14V2H0V2" fill="var(--fill-0, #161D16)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button17() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[16px] relative size-full">
        <Container170 />
      </div>
    </div>
  );
}

function Container171() {
  return (
    <div className="relative shrink-0 w-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#161d16] text-[16px] text-center whitespace-nowrap">
          <p className="leading-[24px]">1</p>
        </div>
      </div>
    </div>
  );
}

function Container172() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Container">
          <path d={svgPaths.p2bb32400} fill="var(--fill-0, #161D16)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button18() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[16px] relative size-full">
        <Container172 />
      </div>
    </div>
  );
}

function Border() {
  return (
    <div className="h-[48px] relative rounded-[9999px] shrink-0" data-name="Border">
      <div className="content-stretch flex items-center overflow-clip p-px relative rounded-[inherit] size-full">
        <Button17 />
        <Container171 />
        <Button18 />
      </div>
      <div aria-hidden className="absolute border border-[#bccbb9] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Container173() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[12px] whitespace-nowrap">
        <p className="leading-[14px]">Max 2 bags per order</p>
      </div>
    </div>
  );
}

function Container169() {
  return (
    <div className="content-stretch flex gap-[23.99px] items-center relative shrink-0 w-full" data-name="Container">
      <Border />
      <Container173 />
    </div>
  );
}

function Container174() {
  return (
    <div className="h-[20px] relative shrink-0 w-[19.982px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9815 20">
        <g id="Container">
          <path d={svgPaths.pb5c2400} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button19() {
  return (
    <div className="bg-[#006e2f] content-stretch flex gap-[16px] h-[56px] items-center justify-center pb-[12.5px] pt-[11.5px] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div className="absolute bg-[rgba(255,255,255,0)] h-[56px] left-0 right-0 rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-0" data-name="Button:shadow" />
      <Container174 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-center text-white whitespace-nowrap">
        <p className="leading-[32px]">Add to Cart - ₹650</p>
      </div>
    </div>
  );
}

function Container168() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <Container169 />
      <Button19 />
    </div>
  );
}

function ModalInfo() {
  return (
    <div className="flex-[1_0_0] min-w-px relative self-stretch" data-name="Modal Info">
      <div className="content-stretch flex flex-col items-start justify-between p-[32px] relative size-full">
        <Margin13 />
        <Heading2Margin />
        <Margin14 />
        <Margin15 />
        <Margin16 />
        <Container168 />
      </div>
    </div>
  );
}

function Container175() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Container">
          <path d={svgPaths.p15494480} fill="var(--fill-0, #161D16)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button20() {
  return (
    <div className="absolute bg-[rgba(243,252,239,0.5)] content-stretch flex flex-col items-center justify-center p-[8px] right-[16px] rounded-[9999px] top-[16px]" data-name="Button">
      <Container175 />
    </div>
  );
}

function BackgroundShadow() {
  return (
    <div className="bg-[#f3fcef] content-stretch flex items-start max-w-[896px] overflow-clip relative rounded-[12px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] shrink-0 w-[896px]" data-name="Background+Shadow">
      <ModalImage />
      <ModalInfo />
      <Button20 />
    </div>
  );
}

function ProductDetailsModalOpenForSonaMasooriRice() {
  return (
    <div className="absolute backdrop-blur-[2px] bg-[rgba(22,29,22,0.4)] content-stretch flex inset-0 items-center justify-center p-[16px]" data-name="Product Details Modal (Open for Sona Masoori Rice)">
      <BackgroundShadow />
    </div>
  );
}

export default function HtmlBody() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(243, 252, 239) 0%, rgb(243, 252, 239) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Html → Body">
      <Main />
      <Footer />
      <HeaderTopNavBar />
      <ProductDetailsModalOpenForSonaMasooriRice />
    </div>
  );
}