import svgPaths from "./svg-uch5ik5e7d";
import imgAdminAvatar from "./221710a21eb2f24a6512a11f34a9062c00da9d93.png";
import imgCustomerAvatar from "./676555aa9a702335bfce006647e2a71a3c686758.png";
import imgCustomerAvatar1 from "./5932d6a99bec5be1620bd201c5c63c664f8a1b14.png";
import imgCustomerAvatar2 from "./856c6e30a369109e6c35649ca1896370ccbf516c.png";
import imgAlphonsoMangoes from "./651e4c41d803b330f0774b9faabef6ce17fe77af.png";
import imgTenderCoconut from "./3c7f9a3bde0e1df7d3e0ceef16568a488ed9154e.png";
import imgMalabarParotta from "./061f363b1857a5af8fb78cfc76b5ddc921372387.png";
import imgNendranBanana from "./ecd5447192ea260070be78a4db079dda1adeca5a.png";

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#161d16] text-[32px] tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[40px]">Dashboard Overview</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">{`Welcome back, Lakshmi. Here's what's happening today.`}</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[431.33px]" data-name="Container">
      <Heading1 />
      <Container1 />
    </div>
  );
}

function Container4() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[14px] tracking-[0.14px] w-full">
          <p className="leading-[normal]">Search data...</p>
        </div>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#edf6ea] relative rounded-[9999px] shrink-0 w-[256px]" data-name="Input">
      <div className="content-stretch flex items-start justify-center overflow-clip pb-[9px] pl-[41px] pr-[17px] pt-[8px] relative rounded-[inherit] size-full">
        <Container4 />
      </div>
      <div aria-hidden className="absolute border border-[#bccbb9] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute bottom-[14.71%] content-stretch flex flex-col items-start left-[12px] top-[14.71%]" data-name="Container">
      <div className="relative shrink-0 size-[18px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <path d={svgPaths.p8a35e00} fill="var(--fill-0, #6D7B6C)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Input />
      <Container5 />
    </div>
  );
}

function AdminAvatar() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[32px]" data-name="Admin Avatar">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[9999px]">
        <div className="absolute bg-[#22c55e] inset-0 rounded-[9999px]" />
        <div className="absolute inset-0 overflow-hidden rounded-[9999px]">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgAdminAvatar} />
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#161d16] text-[14px] tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[16px]">Lakshmi Iyer</p>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#e2ebde] content-stretch flex gap-[12px] items-center pl-[8px] pr-[16px] py-[8px] relative rounded-[9999px] shrink-0" data-name="Background">
      <AdminAvatar />
      <Container6 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container">
      <Container3 />
      <Background />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[24px] right-[24px] top-[24px]" data-name="Header">
      <Container />
      <Container2 />
    </div>
  );
}

function Overlay() {
  return (
    <div className="h-[32px] relative shrink-0 w-[38px]" data-name="Overlay">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 32">
        <g id="Overlay">
          <rect fill="var(--fill-0, #22C55E)" fillOpacity="0.2" height="32" rx="8" width="38" />
          <path d={svgPaths.p3f437800} fill="var(--fill-0, #006E2F)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[6px] relative shrink-0 w-[10px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 6">
        <g id="Container">
          <path d={svgPaths.p313692c0} fill="var(--fill-0, #006E2F)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] mr-[-0.01px] not-italic relative shrink-0 text-[#006e2f] text-[12px] whitespace-nowrap">
        <p className="leading-[14px]">+12.5%</p>
      </div>
      <Container9 />
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative size-full">
        <Overlay />
        <Container8 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[12px] tracking-[0.6px] uppercase w-full">
        <p className="leading-[14px]">TOTAL REVENUE</p>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#161d16] text-[24px] w-full">
        <p className="leading-[32px]">₹3,56,890.00</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container11 />
      <Heading2 />
    </div>
  );
}

function Margin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <Container10 />
      </div>
    </div>
  );
}

function OverlayBorderShadowOverlayBlur() {
  return (
    <div className="backdrop-blur-[4px] bg-[rgba(255,255,255,0.7)] col-1 justify-self-stretch relative rounded-[16px] row-1 self-start shrink-0" data-name="Overlay+Border+Shadow+OverlayBlur">
      <div aria-hidden className="absolute border border-[#bccbb9] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)]" />
      <div className="content-stretch flex flex-col items-start justify-between p-[17px] relative size-full">
        <Container7 />
        <Margin />
      </div>
    </div>
  );
}

function Overlay1() {
  return (
    <div className="h-[35px] relative shrink-0 w-[37.976px]" data-name="Overlay">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37.9758 35">
        <g id="Overlay">
          <rect fill="var(--fill-0, #2170E4)" fillOpacity="0.2" height="35" rx="8" width="37.9758" />
          <path d={svgPaths.p787848} fill="var(--fill-0, #0058BE)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[6px] relative shrink-0 w-[10px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 6">
        <g id="Container">
          <path d={svgPaths.p313692c0} fill="var(--fill-0, #006E2F)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] mr-[-0.01px] not-italic relative shrink-0 text-[#006e2f] text-[12px] whitespace-nowrap">
        <p className="leading-[14px]">+8.2%</p>
      </div>
      <Container14 />
    </div>
  );
}

function Container12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative size-full">
        <Overlay1 />
        <Container13 />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[12px] tracking-[0.6px] uppercase w-full">
        <p className="leading-[14px]">NEW ORDERS</p>
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#161d16] text-[24px] w-full">
        <p className="leading-[32px]">1,240</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container16 />
      <Heading3 />
    </div>
  );
}

function Margin1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <Container15 />
      </div>
    </div>
  );
}

function OverlayBorderShadowOverlayBlur1() {
  return (
    <div className="backdrop-blur-[4px] bg-[rgba(255,255,255,0.7)] col-2 justify-self-stretch relative rounded-[16px] row-1 self-start shrink-0" data-name="Overlay+Border+Shadow+OverlayBlur">
      <div aria-hidden className="absolute border border-[#bccbb9] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)]" />
      <div className="content-stretch flex flex-col items-start justify-between p-[17px] relative size-full">
        <Container12 />
        <Margin1 />
      </div>
    </div>
  );
}

function Overlay2() {
  return (
    <div className="h-[32px] relative shrink-0 w-[38px]" data-name="Overlay">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 32">
        <g id="Overlay">
          <rect fill="var(--fill-0, #FF8B7C)" fillOpacity="0.2" height="32" rx="8" width="38" />
          <path d={svgPaths.p17aca680} fill="var(--fill-0, #9E4036)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[6px] relative shrink-0 w-[10px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 6">
        <g id="Container">
          <path d={svgPaths.p1c766e00} fill="var(--fill-0, #BA1A1A)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] mr-[-0.01px] not-italic relative shrink-0 text-[#ba1a1a] text-[12px] whitespace-nowrap">
        <p className="leading-[14px]">-2.1%</p>
      </div>
      <Container19 />
    </div>
  );
}

function Container17() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative size-full">
        <Overlay2 />
        <Container18 />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[12px] tracking-[0.6px] uppercase w-full">
        <p className="leading-[14px]">NEW CUSTOMERS</p>
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#161d16] text-[24px] w-full">
        <p className="leading-[32px]">856</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container21 />
      <Heading4 />
    </div>
  );
}

function Margin2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <Container20 />
      </div>
    </div>
  );
}

function OverlayBorderShadowOverlayBlur2() {
  return (
    <div className="backdrop-blur-[4px] bg-[rgba(255,255,255,0.7)] col-3 justify-self-stretch relative rounded-[16px] row-1 self-start shrink-0" data-name="Overlay+Border+Shadow+OverlayBlur">
      <div aria-hidden className="absolute border border-[#bccbb9] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)]" />
      <div className="content-stretch flex flex-col items-start justify-between p-[17px] relative size-full">
        <Container17 />
        <Margin2 />
      </div>
    </div>
  );
}

function Overlay3() {
  return (
    <div className="h-[36px] relative shrink-0 w-[35.55px]" data-name="Overlay">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.55 36">
        <g id="Overlay">
          <rect fill="var(--fill-0, #6BFF8F)" fillOpacity="0.2" height="36" rx="8" width="35.55" />
          <path d={svgPaths.p37122080} fill="var(--fill-0, #006E2F)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container22() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative size-full">
        <Overlay3 />
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[12px] whitespace-nowrap">
          <p className="leading-[14px]">Stable</p>
        </div>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[12px] tracking-[0.6px] uppercase w-full">
        <p className="leading-[14px]">STOCK LEVELS</p>
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#161d16] text-[24px] w-full">
        <p className="leading-[32px]">94%</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container24 />
      <Heading5 />
    </div>
  );
}

function Margin3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <Container23 />
      </div>
    </div>
  );
}

function OverlayBorderShadowOverlayBlur3() {
  return (
    <div className="backdrop-blur-[4px] bg-[rgba(255,255,255,0.7)] col-4 justify-self-stretch relative rounded-[16px] row-1 self-start shrink-0" data-name="Overlay+Border+Shadow+OverlayBlur">
      <div aria-hidden className="absolute border border-[#bccbb9] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)]" />
      <div className="content-stretch flex flex-col items-start justify-between p-[17px] relative size-full">
        <Container22 />
        <Margin3 />
      </div>
    </div>
  );
}

function SectionTopStatsBentoGrid() {
  return (
    <div className="absolute gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[_136px] left-[24px] right-[24px] top-[120px]" data-name="Section - Top Stats Bento Grid">
      <OverlayBorderShadowOverlayBlur />
      <OverlayBorderShadowOverlayBlur1 />
      <OverlayBorderShadowOverlayBlur2 />
      <OverlayBorderShadowOverlayBlur3 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 4">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#161d16] text-[24px] whitespace-nowrap">
        <p className="leading-[32px]">Sales Statistics (₹)</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#22c55e] content-stretch flex flex-col items-center justify-center px-[12px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#004b1e] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[14px]">Weekly</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[12px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[14px]">Monthly</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Container">
      <Button />
      <Button1 />
    </div>
  );
}

function Container25() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Heading6 />
        <Container26 />
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[8px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[12px] w-full">
          <p className="leading-[14px]">Mon</p>
        </div>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[8px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[12px] w-full">
          <p className="leading-[14px]">Tue</p>
        </div>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[8px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[12px] w-full">
          <p className="leading-[14px]">Wed</p>
        </div>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[8px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[12px] w-full">
          <p className="leading-[14px]">Thu</p>
        </div>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[8px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[12px] w-full">
          <p className="leading-[14px]">Fri</p>
        </div>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[8px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[12px] w-full">
          <p className="leading-[14px]">Sat</p>
        </div>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[8px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[12px] w-full">
          <p className="leading-[14px]">Sun</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="h-[256px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#bccbb9] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-end size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-end justify-between pb-px pl-[16px] pr-[16.01px] relative size-full">
          <Container27 />
          <Container28 />
          <Container29 />
          <Container30 />
          <Container31 />
          <Container32 />
          <Container33 />
        </div>
      </div>
    </div>
  );
}

function SectionSalesStatisticsChart7Columns() {
  return (
    <div className="backdrop-blur-[4px] bg-[rgba(255,255,255,0.7)] col-[1/span_8] justify-self-stretch relative rounded-[16px] row-1 self-start shrink-0" data-name="Section - Sales Statistics Chart (7 columns)">
      <div aria-hidden className="absolute border border-[#bccbb9] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[25px] relative size-full">
        <Container25 />
        <HorizontalBorder />
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 4">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#161d16] text-[24px] whitespace-nowrap">
        <p className="leading-[32px]">Top Customers</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#006e2f] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[14px]">View All</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pr-[0.01px] relative size-full">
          <Heading7 />
          <Button2 />
        </div>
      </div>
    </div>
  );
}

function CustomerAvatar() {
  return (
    <div className="pointer-events-none relative rounded-[9999px] shrink-0 size-[40px]" data-name="Customer avatar">
      <div className="absolute inset-0 overflow-hidden rounded-[9999px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgCustomerAvatar} />
      </div>
      <div aria-hidden className="absolute border border-[#bccbb9] border-solid inset-0 rounded-[9999px]" />
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#161d16] text-[14px] tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[16px]">Ananya Menon</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[12px] whitespace-nowrap">
        <p className="leading-[14px]">12 Orders</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[103.34px]" data-name="Container">
      <Container39 />
      <Container40 />
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <CustomerAvatar />
      <Container38 />
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#006e2f] text-[14px] tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[16px]">₹12,240</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[8px] relative size-full">
          <Container37 />
          <Container41 />
        </div>
      </div>
    </div>
  );
}

function CustomerAvatar1() {
  return (
    <div className="pointer-events-none relative rounded-[9999px] shrink-0 size-[40px]" data-name="Customer avatar">
      <div className="absolute inset-0 overflow-hidden rounded-[9999px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgCustomerAvatar1} />
      </div>
      <div aria-hidden className="absolute border border-[#bccbb9] border-solid inset-0 rounded-[9999px]" />
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#161d16] text-[14px] tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[16px]">Karthik Raja</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[12px] whitespace-nowrap">
        <p className="leading-[14px]">9 Orders</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[82.89px]" data-name="Container">
      <Container45 />
      <Container46 />
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <CustomerAvatar1 />
      <Container44 />
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#006e2f] text-[14px] tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[16px]">₹9,982</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[8px] pr-[8.01px] py-[8px] relative size-full">
          <Container43 />
          <Container47 />
        </div>
      </div>
    </div>
  );
}

function CustomerAvatar2() {
  return (
    <div className="pointer-events-none relative rounded-[9999px] shrink-0 size-[40px]" data-name="Customer avatar">
      <div className="absolute inset-0 overflow-hidden rounded-[9999px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgCustomerAvatar2} />
      </div>
      <div aria-hidden className="absolute border border-[#bccbb9] border-solid inset-0 rounded-[9999px]" />
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#161d16] text-[14px] tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[16px]">Meera Reddy</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[12px] whitespace-nowrap">
        <p className="leading-[14px]">8 Orders</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[91.08px]" data-name="Container">
      <Container51 />
      <Container52 />
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <CustomerAvatar2 />
      <Container50 />
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#006e2f] text-[14px] tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[16px]">₹7,756</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[8px] pr-[8.01px] py-[8px] relative size-full">
          <Container49 />
          <Container53 />
        </div>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative size-full">
        <Container36 />
        <Container42 />
        <Container48 />
      </div>
    </div>
  );
}

function SectionCustomerList4Columns() {
  return (
    <div className="backdrop-blur-[4px] bg-[rgba(255,255,255,0.7)] col-[9/span_4] justify-self-stretch relative rounded-[16px] row-1 self-start shrink-0" data-name="Section - Customer List (4 columns)">
      <div aria-hidden className="absolute border border-[#bccbb9] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start pb-[81px] pt-[25px] px-[25px] relative size-full">
        <Container34 />
        <Container35 />
      </div>
    </div>
  );
}

function Heading8() {
  return (
    <div className="relative shrink-0" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#161d16] text-[24px] whitespace-nowrap">
          <p className="leading-[32px]">Orders Management</p>
        </div>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="h-[7px] relative shrink-0 w-[10.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 7">
        <g id="Container">
          <path d={svgPaths.p3592ed80} fill="var(--fill-0, #161D16)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#f3fcef] content-stretch flex gap-[7.99px] items-center px-[17px] py-[9px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[#bccbb9] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Container55 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#161d16] text-[14px] text-center tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[16px]">Filter</p>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="relative shrink-0 size-[9.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 9.33333">
        <g id="Container">
          <path d={svgPaths.p21f4d300} fill="var(--fill-0, #161D16)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#f3fcef] content-stretch flex gap-[8px] items-center px-[17px] py-[9px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[#bccbb9] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Container56 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#161d16] text-[14px] text-center tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[16px]">Export</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[15.99px] items-start relative size-full">
        <Button3 />
        <Button4 />
      </div>
    </div>
  );
}

function OverlayHorizontalBorder() {
  return (
    <div className="bg-[rgba(237,246,234,0.5)] relative shrink-0 w-full" data-name="Overlay+HorizontalBorder">
      <div aria-hidden className="absolute border-[#bccbb9] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[25px] pl-[24px] pr-[23.99px] pt-[24px] relative size-full">
          <Heading8 />
          <Container54 />
        </div>
      </div>
    </div>
  );
}

function Cell() {
  return (
    <div className="relative shrink-0 w-[142.56px]" data-name="Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[16px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[14px] tracking-[0.14px] whitespace-nowrap">
          <p className="leading-[16px]">Order ID</p>
        </div>
      </div>
    </div>
  );
}

function Cell1() {
  return (
    <div className="relative shrink-0 w-[168.61px]" data-name="Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[16px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[14px] tracking-[0.14px] whitespace-nowrap">
          <p className="leading-[16px]">Customer</p>
        </div>
      </div>
    </div>
  );
}

function Cell2() {
  return (
    <div className="relative shrink-0 w-[243.92px]" data-name="Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[16px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[14px] tracking-[0.14px] whitespace-nowrap">
          <p className="leading-[16px]">Items</p>
        </div>
      </div>
    </div>
  );
}

function Cell3() {
  return (
    <div className="relative shrink-0 w-[113.81px]" data-name="Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[16px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[14px] tracking-[0.14px] whitespace-nowrap">
          <p className="leading-[16px]">Amount</p>
        </div>
      </div>
    </div>
  );
}

function Cell4() {
  return (
    <div className="relative shrink-0 w-[123.16px]" data-name="Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[16px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[14px] tracking-[0.14px] whitespace-nowrap">
          <p className="leading-[16px]">Status</p>
        </div>
      </div>
    </div>
  );
}

function Cell5() {
  return (
    <div className="relative shrink-0 w-[199.92px]" data-name="Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[16px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[14px] tracking-[0.14px] whitespace-nowrap">
          <p className="leading-[16px]">Actions</p>
        </div>
      </div>
    </div>
  );
}

function HeaderRow() {
  return (
    <div className="bg-[#edf6ea] content-stretch flex items-start justify-center mb-[-1px] pb-px relative shrink-0 w-full" data-name="Header → Row">
      <div aria-hidden className="absolute border-[#bccbb9] border-b border-solid inset-0 pointer-events-none" />
      <Cell />
      <Cell1 />
      <Cell2 />
      <Cell3 />
      <Cell4 />
      <Cell5 />
    </div>
  );
}

function Data() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[16.5px] relative shrink-0 w-[142.56px]" data-name="Data">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#161d16] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">#ORD-9021</p>
      </div>
    </div>
  );
}

function Data1() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[16.5px] relative shrink-0 w-[168.61px]" data-name="Data">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#161d16] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Suresh Vijay</p>
      </div>
    </div>
  );
}

function Data2() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[16.5px] relative shrink-0 w-[243.92px]" data-name="Data">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#161d16] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Malabar Parotta (5)</p>
      </div>
    </div>
  );
}

function Data3() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[16.5px] relative shrink-0 w-[113.81px]" data-name="Data">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#161d16] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">₹450.20</p>
      </div>
    </div>
  );
}

function Overlay4() {
  return (
    <div className="bg-[rgba(255,139,124,0.3)] content-stretch flex items-start px-[12px] py-[4.5px] relative rounded-[9999px] shrink-0" data-name="Overlay">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#9e4036] text-[12px] whitespace-nowrap">
        <p className="leading-[14px]">Pending</p>
      </div>
    </div>
  );
}

function Data4() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[17.5px] pt-[16.5px] px-[24px] relative shrink-0 w-[123.16px]" data-name="Data">
      <Overlay4 />
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#006e2f] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[8px] shrink-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
        <p className="leading-[14px]">Confirm</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-[#f3fcef] content-stretch flex items-center justify-center px-[13px] py-[5px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[#ba1a1a] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#ba1a1a] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[14px]">Reject</p>
      </div>
    </div>
  );
}

function Data5() {
  return (
    <div className="content-stretch flex gap-[12.5px] items-center px-[24px] py-[16.5px] relative shrink-0 w-[199.92px]" data-name="Data">
      <Button5 />
      <Button6 />
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex items-start justify-center mb-[-1px] relative shrink-0 w-full" data-name="Row">
      <Data />
      <Data1 />
      <Data2 />
      <Data3 />
      <Data4 />
      <Data5 />
    </div>
  );
}

function Data6() {
  return (
    <div className="relative shrink-0 w-[142.56px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[16px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#161d16] text-[16px] whitespace-nowrap">
          <p className="leading-[24px]">#ORD-9022</p>
        </div>
      </div>
    </div>
  );
}

function Data7() {
  return (
    <div className="relative shrink-0 w-[168.61px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[16px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#161d16] text-[16px] whitespace-nowrap">
          <p className="leading-[24px]">Priya Chandran</p>
        </div>
      </div>
    </div>
  );
}

function Data8() {
  return (
    <div className="relative shrink-0 w-[243.92px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[16px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#161d16] text-[16px] whitespace-nowrap">
          <p className="leading-[24px]">Alphonso Mangoes (2kg)</p>
        </div>
      </div>
    </div>
  );
}

function Data9() {
  return (
    <div className="relative shrink-0 w-[113.81px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[16px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#161d16] text-[16px] whitespace-nowrap">
          <p className="leading-[24px]">₹842.00</p>
        </div>
      </div>
    </div>
  );
}

function Overlay5() {
  return (
    <div className="bg-[rgba(255,139,124,0.3)] content-stretch flex items-start px-[12px] py-[4.5px] relative rounded-[9999px] shrink-0" data-name="Overlay">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#9e4036] text-[12px] whitespace-nowrap">
        <p className="leading-[14px]">Pending</p>
      </div>
    </div>
  );
}

function Data10() {
  return (
    <div className="relative shrink-0 w-[123.16px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[17px] pt-[16.5px] px-[24px] relative size-full">
        <Overlay5 />
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-[#006e2f] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[8px] shrink-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
        <p className="leading-[14px]">Confirm</p>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-[#f3fcef] content-stretch flex items-center justify-center px-[13px] py-[5px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[#ba1a1a] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#ba1a1a] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[14px]">Reject</p>
      </div>
    </div>
  );
}

function Data11() {
  return (
    <div className="relative shrink-0 w-[199.92px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12.5px] items-center px-[24px] py-[16px] relative size-full">
        <Button7 />
        <Button8 />
      </div>
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex items-start justify-center pt-px relative shrink-0 w-full" data-name="Row">
      <div aria-hidden className="absolute border-[#bccbb9] border-solid border-t inset-0 pointer-events-none" />
      <Data6 />
      <Data7 />
      <Data8 />
      <Data9 />
      <Data10 />
      <Data11 />
    </div>
  );
}

function Body() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Body">
      <Row />
      <Row1 />
    </div>
  );
}

function Table() {
  return (
    <div className="relative shrink-0 w-full" data-name="Table">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-auto relative rounded-[inherit] size-full">
        <HeaderRow />
        <Body />
      </div>
    </div>
  );
}

function SectionOrdersManagementTable12Columns() {
  return (
    <div className="backdrop-blur-[4px] bg-[rgba(255,255,255,0.7)] col-[1/span_12] justify-self-stretch relative rounded-[16px] row-2 self-start shrink-0" data-name="Section - Orders Management Table (12 columns)">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <OverlayHorizontalBorder />
        <Table />
      </div>
      <div aria-hidden className="absolute border border-[#bccbb9] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Heading9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 4">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#161d16] text-[24px] whitespace-nowrap">
        <p className="leading-[32px]">Product Management</p>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="relative shrink-0 size-[8.167px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.16667 8.16667">
        <g id="Container">
          <path d={svgPaths.p10ad69c0} fill="var(--fill-0, #004B1E)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button9() {
  return (
    <div className="bg-[#22c55e] content-stretch flex gap-[7.99px] items-center px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="Button">
      <Container58 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#004b1e] text-[14px] text-center tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[16px]">New Product</p>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Heading9 />
        <Button9 />
      </div>
    </div>
  );
}

function AlphonsoMangoes() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Alphonso Mangoes">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgAlphonsoMangoes} />
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="absolute bg-[#006e2f] content-stretch flex flex-col items-start left-[4px] px-[8px] py-[2px] rounded-[9999px] top-[4px]" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-white whitespace-nowrap">
        <p className="leading-[15px]">Premium</p>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="absolute bg-[#e2ebde] content-stretch flex flex-col items-start justify-center left-[17px] overflow-clip rounded-[8px] size-[80px] top-[17px]" data-name="Background">
      <AlphonsoMangoes />
      <Background2 />
    </div>
  );
}

function Heading10() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Heading 5">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#161d16] text-[14px] tracking-[0.14px] w-full">
        <p className="leading-[16px]">Alphonso Mangoes</p>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[12px] w-full">
        <p>
          <span className="leading-[14px]">{`Stock: `}</span>
          <span className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[14px] not-italic text-[#006e2f]">124 kg</span>
        </p>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Heading10 />
      <Container62 />
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#006e2f] text-[14px] tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[16px]">₹499/kg</p>
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="relative shrink-0 size-[10.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
        <g id="Container">
          <path d={svgPaths.p2cbc1080} fill="var(--fill-0, #6D7B6C)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button10() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[4px] relative rounded-[4px] shrink-0" data-name="Button">
      <Container65 />
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container64 />
      <Button10 />
    </div>
  );
}

function Container60() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[17px_-22.01px_17px_113px] items-start justify-between" data-name="Container">
      <Container61 />
      <Container63 />
    </div>
  );
}

function ProductItemMangoes() {
  return (
    <div className="col-1 h-[114px] justify-self-stretch relative rounded-[12px] row-1 shrink-0" data-name="Product Item: Mangoes">
      <div aria-hidden className="absolute border border-[#bccbb9] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Background1 />
      <Container60 />
    </div>
  );
}

function TenderCoconut() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Tender Coconut">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgTenderCoconut} />
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#e2ebde] relative rounded-[8px] shrink-0 size-[80px]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
        <TenderCoconut />
      </div>
    </div>
  );
}

function Heading11() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Heading 5">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#161d16] text-[14px] tracking-[0.14px] w-full">
        <p className="leading-[16px]">Tender Coconut</p>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[12px] w-full">
        <p>
          <span className="leading-[14px]">{`Stock: `}</span>
          <span className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[14px] not-italic text-[#ba1a1a]">42 units</span>
        </p>
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Heading11 />
      <Container68 />
    </div>
  );
}

function Container70() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#006e2f] text-[14px] tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[16px]">₹50</p>
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="relative shrink-0 size-[10.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
        <g id="Container">
          <path d={svgPaths.p2cbc1080} fill="var(--fill-0, #6D7B6C)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button11() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[4px] relative rounded-[4px] shrink-0" data-name="Button">
      <Container71 />
    </div>
  );
}

function Container69() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container70 />
      <Button11 />
    </div>
  );
}

function Container66() {
  return (
    <div className="h-full relative shrink-0 w-[110.67px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-between relative size-full">
        <Container67 />
        <Container69 />
      </div>
    </div>
  );
}

function ProductItemCoconutWater() {
  return (
    <div className="col-2 h-[114px] justify-self-stretch relative rounded-[12px] row-1 shrink-0" data-name="Product Item: Coconut Water">
      <div aria-hidden className="absolute border border-[#bccbb9] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex gap-[16px] items-start p-[17px] relative size-full">
        <Background3 />
        <Container66 />
      </div>
    </div>
  );
}

function MalabarParotta() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Malabar Parotta">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgMalabarParotta} />
      </div>
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#e2ebde] relative rounded-[8px] shrink-0 size-[80px]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
        <MalabarParotta />
      </div>
    </div>
  );
}

function Heading12() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Heading 5">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#161d16] text-[14px] tracking-[0.14px] w-full">
        <p className="leading-[16px]">Malabar Parotta</p>
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[12px] w-full">
        <p>
          <span className="leading-[14px]">{`Stock: `}</span>
          <span className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[14px] not-italic text-[#006e2f]">85 units</span>
        </p>
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Heading12 />
      <Container74 />
    </div>
  );
}

function Container76() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#006e2f] text-[14px] tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[16px]">₹90/pack</p>
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="relative shrink-0 size-[10.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
        <g id="Container">
          <path d={svgPaths.p2cbc1080} fill="var(--fill-0, #6D7B6C)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button12() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[4px] relative rounded-[4px] shrink-0" data-name="Button">
      <Container77 />
    </div>
  );
}

function Container75() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container76 />
      <Button12 />
    </div>
  );
}

function Container72() {
  return (
    <div className="h-full relative shrink-0 w-[109.39px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-between relative size-full">
        <Container73 />
        <Container75 />
      </div>
    </div>
  );
}

function ProductItemParotta() {
  return (
    <div className="col-3 h-[114px] justify-self-stretch relative rounded-[12px] row-1 shrink-0" data-name="Product Item: Parotta">
      <div aria-hidden className="absolute border border-[#bccbb9] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex gap-[16px] items-start p-[17px] relative size-full">
        <Background4 />
        <Container72 />
      </div>
    </div>
  );
}

function NendranBanana() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Nendran Banana">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgNendranBanana} />
      </div>
    </div>
  );
}

function Background5() {
  return (
    <div className="absolute bg-[#e2ebde] content-stretch flex flex-col items-start justify-center left-[17px] overflow-clip rounded-[8px] size-[80px] top-[17px]" data-name="Background">
      <NendranBanana />
    </div>
  );
}

function Heading13() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Heading 5">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#161d16] text-[14px] tracking-[0.14px] w-full">
        <p className="leading-[16px]">Nendran Banana</p>
      </div>
    </div>
  );
}

function Container80() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[12px] w-full">
        <p>
          <span className="leading-[14px]">{`Stock: `}</span>
          <span className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[14px] not-italic text-[#006e2f]">88 units</span>
        </p>
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Heading13 />
      <Container80 />
    </div>
  );
}

function Container82() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#006e2f] text-[14px] tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[16px]">₹80/kg</p>
      </div>
    </div>
  );
}

function Container83() {
  return (
    <div className="relative shrink-0 size-[10.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
        <g id="Container">
          <path d={svgPaths.p2cbc1080} fill="var(--fill-0, #6D7B6C)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button13() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[4px] relative rounded-[4px] shrink-0" data-name="Button">
      <Container83 />
    </div>
  );
}

function Container81() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container82 />
      <Button13 />
    </div>
  );
}

function Container78() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[17px_-3.23px_17px_113px] items-start justify-between" data-name="Container">
      <Container79 />
      <Container81 />
    </div>
  );
}

function ProductItemBanana() {
  return (
    <div className="col-4 h-[114px] justify-self-stretch relative rounded-[12px] row-1 shrink-0" data-name="Product Item: Banana">
      <div aria-hidden className="absolute border border-[#bccbb9] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Background5 />
      <Container78 />
    </div>
  );
}

function Container59() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[_114px] relative size-full">
        <ProductItemMangoes />
        <ProductItemCoconutWater />
        <ProductItemParotta />
        <ProductItemBanana />
      </div>
    </div>
  );
}

function SectionProductManagementList12Columns() {
  return (
    <div className="backdrop-blur-[4px] bg-[rgba(255,255,255,0.7)] relative rounded-[16px] shrink-0 w-full" data-name="Section - Product Management List (12 columns)">
      <div aria-hidden className="absolute border border-[#bccbb9] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[25px] relative size-full">
        <Container57 />
        <Container59 />
      </div>
    </div>
  );
}

function SectionProductManagementList12ColumnsMargin() {
  return (
    <div className="col-[1/span_12] content-stretch flex flex-col items-start justify-self-stretch pb-[24px] relative row-3 self-start shrink-0" data-name="Section - Product Management List (12 columns):margin">
      <SectionProductManagementList12Columns />
    </div>
  );
}

function MainDataLayout() {
  return (
    <div className="absolute gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[___362px_251px_248px] left-[24px] right-[24px] top-[288px]" data-name="Main Data Layout">
      <SectionSalesStatisticsChart7Columns />
      <SectionCustomerList4Columns />
      <SectionOrdersManagementTable12Columns />
      <SectionProductManagementList12ColumnsMargin />
    </div>
  );
}

function MainContentArea() {
  return (
    <div className="bg-[#f3fcef] flex-[1_0_0] min-w-px relative self-stretch" data-name="Main Content Area">
      <Header />
      <SectionTopStatsBentoGrid />
      <MainDataLayout />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#006e2f] text-[24px] w-full">
        <p className="leading-[32px]">Admin Panel</p>
      </div>
    </div>
  );
}

function Container85() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-70 relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[12px] w-full">
        <p className="leading-[14px]">FreshMarket South</p>
      </div>
    </div>
  );
}

function Container84() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[32px] relative size-full">
        <Heading />
        <Container85 />
      </div>
    </div>
  );
}

function Container86() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p20793584} fill="var(--fill-0, #004B1E)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container87() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#004b1e] text-[14px] tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[16px]">Overview</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="bg-[#22c55e] relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[8px] relative size-full">
          <Container86 />
          <Container87 />
        </div>
      </div>
    </div>
  );
}

function Container88() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p643d217} fill="var(--fill-0, #3D4A3D)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container89() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[14px] tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[16px]">Inventory</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[8px] relative size-full">
          <Container88 />
          <Container89 />
        </div>
      </div>
    </div>
  );
}

function Container90() {
  return (
    <div className="h-[16px] relative shrink-0 w-[22px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 16">
        <g id="Container">
          <path d={svgPaths.p39955c80} fill="var(--fill-0, #3D4A3D)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container91() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[14px] tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[16px]">Customers</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[8px] relative size-full">
          <Container90 />
          <Container91 />
        </div>
      </div>
    </div>
  );
}

function Container92() {
  return (
    <div className="h-[16px] relative shrink-0 w-[22px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 16">
        <g id="Container">
          <path d={svgPaths.p146eb80} fill="var(--fill-0, #3D4A3D)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container93() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[14px] tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[16px]">Orders</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[8px] relative size-full">
          <Container92 />
          <Container93 />
        </div>
      </div>
    </div>
  );
}

function Container94() {
  return (
    <div className="h-[20px] relative shrink-0 w-[20.1px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.1 20">
        <g id="Container">
          <path d={svgPaths.p3cdadd00} fill="var(--fill-0, #3D4A3D)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container95() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[14px] tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[16px]">Settings</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[8px] relative size-full">
          <Container94 />
          <Container95 />
        </div>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Nav">
      <div className="content-stretch flex flex-col gap-[4px] items-start pb-[635px] pt-[4px] px-[8px] relative size-full">
        <Link />
        <Link1 />
        <Link2 />
        <Link3 />
        <Link4 />
      </div>
    </div>
  );
}

function NavMargin() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Nav:margin">
      <div className="flex flex-col justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center pt-[16px] relative size-full">
          <Nav />
        </div>
      </div>
    </div>
  );
}

function Container97() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Container">
          <path d={svgPaths.p2bb32400} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button14() {
  return (
    <div className="bg-[#006e2f] content-stretch flex gap-[8px] items-center justify-center py-[12px] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" data-name="Button:shadow" />
      <Container97 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[16px]">Add New Product</p>
      </div>
    </div>
  );
}

function Container96() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[16px] relative size-full">
        <Button14 />
      </div>
    </div>
  );
}

function Container98() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p2816f2c0} fill="var(--fill-0, #3D4A3D)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container99() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[14px] tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[16px]">Help</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center px-[16px] py-[8px] relative size-full">
          <Container98 />
          <Container99 />
        </div>
      </div>
    </div>
  );
}

function Container100() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p3e9df400} fill="var(--fill-0, #3D4A3D)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container101() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[14px] tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[16px]">Logout</p>
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center px-[16px] py-[8px] relative size-full">
          <Container100 />
          <Container101 />
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#bccbb9] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] pt-[17px] px-[16px] relative size-full">
        <Link5 />
        <Link6 />
      </div>
    </div>
  );
}

function AsideSideNavBar() {
  return (
    <div className="absolute bg-[#edf6ea] content-stretch flex flex-col h-[1174px] items-start justify-between left-0 pr-px top-0 w-[256px]" data-name="Aside - SideNavBar">
      <div aria-hidden className="absolute border-[#bccbb9] border-r border-solid inset-0 pointer-events-none" />
      <div className="absolute bg-[rgba(255,255,255,0)] h-[1174px] left-0 shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] top-0 w-[256px]" data-name="Aside - SideNavBar:shadow" />
      <Container84 />
      <NavMargin />
      <Container96 />
      <HorizontalBorder1 />
    </div>
  );
}

export default function HtmlBody() {
  return (
    <div className="content-stretch flex items-start justify-center pl-[256px] relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(243, 252, 239) 0%, rgb(243, 252, 239) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Html → Body">
      <MainContentArea />
      <AsideSideNavBar />
    </div>
  );
}