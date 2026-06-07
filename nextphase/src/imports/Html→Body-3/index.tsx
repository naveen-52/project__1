import svgPaths from "./svg-l080eunncu";

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#161d16] text-[32px] tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[40px]">Welcome back, Alex</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">{`Here is what's happening with your groceries today.`}</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[393.11px]" data-name="Container">
      <Heading1 />
      <Container1 />
    </div>
  );
}

function Background() {
  return (
    <div className="h-[48px] relative shrink-0 w-[54px]" data-name="Background">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54 48">
        <g id="Background">
          <rect fill="var(--fill-0, #22C55E)" height="48" rx="24" width="54" />
          <path d={svgPaths.p3a370d80} fill="var(--fill-0, #004B1E)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[12px] whitespace-nowrap">
        <p className="leading-[14px]">Total Purchases</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#006e2f] text-[24px] whitespace-nowrap">
        <p className="leading-[32px]">$450.00</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 w-[102.05px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container3 />
        <Container4 />
      </div>
    </div>
  );
}

function OverlayBorderShadowOverlayBlur() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.7)] content-stretch flex gap-[15.99px] items-center p-[25px] relative rounded-[12px] shrink-0" data-name="Overlay+Border+Shadow+OverlayBlur">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Background />
      <Container2 />
    </div>
  );
}

function WelcomeHeaderStatsGrid() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Welcome Header & Stats Grid">
      <Container />
      <OverlayBorderShadowOverlayBlur />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#fefcff] text-[14px] tracking-[0.14px] w-full">
        <p className="leading-[16px]">Next Scheduled Delivery</p>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0 w-full" data-name="Margin">
      <Container5 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#fefcff] text-[24px] w-full">
        <p className="leading-[32px]">Oct 14, 2024</p>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#2170e4] col-1 justify-self-stretch relative rounded-[12px] row-1 self-start shrink-0" data-name="Background">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[24px] relative size-full">
          <Margin />
          <Container6 />
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#7f2a21] text-[14px] tracking-[0.14px] w-full">
        <p className="leading-[16px]">Loyalty Points</p>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0 w-full" data-name="Margin">
      <Container7 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#7f2a21] text-[24px] w-full">
        <p className="leading-[32px]">2,480 pts</p>
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#ffdad5] col-1 justify-self-stretch relative rounded-[12px] row-2 self-start shrink-0" data-name="Background">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[24px] relative size-full">
          <Margin1 />
          <Container8 />
        </div>
      </div>
    </div>
  );
}

function QuickActionsMiniStats() {
  return (
    <div className="col-[9/span_4] gap-x-[24px] gap-y-[24px] grid grid-cols-[_293.33px] grid-rows-[repeat(2,minmax(0,1fr))] justify-self-stretch relative row-1 self-start shrink-0" data-name="Quick Actions / Mini Stats">
      <Background1 />
      <Background2 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="relative shrink-0" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#161d16] text-[24px] whitespace-nowrap">
          <p className="leading-[32px]">Order History</p>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#006e2f] text-[14px] text-center tracking-[0.14px] whitespace-nowrap">
          <p className="leading-[16px]">View All</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[rgba(188,203,185,0.3)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[25px] pt-[24px] px-[24px] relative size-full">
          <Heading2 />
          <Button />
        </div>
      </div>
    </div>
  );
}

function Cell() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[16px] relative shrink-0 w-[157.97px]" data-name="Cell">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
        <p className="leading-[14px]">ORDER ID</p>
      </div>
    </div>
  );
}

function Cell1() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[16px] relative shrink-0 w-[178.25px]" data-name="Cell">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
        <p className="leading-[14px]">DATE</p>
      </div>
    </div>
  );
}

function Cell2() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[16px] relative shrink-0 w-[166.7px]" data-name="Cell">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
        <p className="leading-[14px]">ITEMS</p>
      </div>
    </div>
  );
}

function Cell3() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[16px] relative shrink-0 w-[135.42px]" data-name="Cell">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
        <p className="leading-[14px]">TOTAL</p>
      </div>
    </div>
  );
}

function Cell4() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[16px] relative shrink-0 w-[143.47px]" data-name="Cell">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
        <p className="leading-[14px]">STATUS</p>
      </div>
    </div>
  );
}

function Cell5() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[16px] relative shrink-0 w-[144.17px]" data-name="Cell">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
        <p className="leading-[14px]">ACTION</p>
      </div>
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Row">
      <Cell />
      <Cell1 />
      <Cell2 />
      <Cell3 />
      <Cell4 />
      <Cell5 />
    </div>
  );
}

function Header() {
  return (
    <div className="bg-[#edf6ea] content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Header">
      <Row />
    </div>
  );
}

function Data() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[16px] relative shrink-0 w-[157.97px]" data-name="Data">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#161d16] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">#FM-8712</p>
      </div>
    </div>
  );
}

function Data1() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[16px] relative shrink-0 w-[178.25px]" data-name="Data">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Oct 08, 2024</p>
      </div>
    </div>
  );
}

function Data2() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[16px] relative shrink-0 w-[166.7px]" data-name="Data">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#161d16] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">12 Products</p>
      </div>
    </div>
  );
}

function Data3() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[16px] relative shrink-0 w-[135.42px]" data-name="Data">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#161d16] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">$84.20</p>
      </div>
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(74,225,118,0.3)] content-stretch flex items-start px-[8px] relative rounded-[9999px] shrink-0" data-name="Overlay">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#161d16] text-[10px] whitespace-nowrap">
        <p className="leading-[20px]">Delivered</p>
      </div>
    </div>
  );
}

function Data4() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[16px] relative shrink-0 w-[143.47px]" data-name="Data">
      <Overlay />
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[11.667px] relative shrink-0 w-[10.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 11.6667">
        <g id="Container">
          <path d={svgPaths.p2f844780} fill="var(--fill-0, #0058BE)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Button">
      <Container9 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#0058be] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">Details</p>
      </div>
    </div>
  );
}

function Data5() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[16px] relative shrink-0 w-[144.17px]" data-name="Data">
      <Button1 />
    </div>
  );
}

function Row1() {
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
    <div className="relative shrink-0 w-[157.97px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[17px] pt-[16px] px-[24px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#161d16] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">#FM-8699</p>
        </div>
      </div>
    </div>
  );
}

function Data7() {
  return (
    <div className="relative shrink-0 w-[178.25px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[17px] pt-[16px] px-[24px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">Oct 05, 2024</p>
        </div>
      </div>
    </div>
  );
}

function Data8() {
  return (
    <div className="relative shrink-0 w-[166.7px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[17px] pt-[16px] px-[24px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#161d16] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">5 Products</p>
        </div>
      </div>
    </div>
  );
}

function Data9() {
  return (
    <div className="relative shrink-0 w-[135.42px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[17px] pt-[16px] px-[24px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#161d16] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">$42.15</p>
        </div>
      </div>
    </div>
  );
}

function Overlay1() {
  return (
    <div className="bg-[rgba(74,225,118,0.3)] content-stretch flex items-start px-[8px] relative rounded-[9999px] shrink-0" data-name="Overlay">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#161d16] text-[10px] whitespace-nowrap">
        <p className="leading-[20px]">Delivered</p>
      </div>
    </div>
  );
}

function Data10() {
  return (
    <div className="relative shrink-0 w-[143.47px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[16.5px] relative size-full">
        <Overlay1 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[11.667px] relative shrink-0 w-[10.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 11.6667">
        <g id="Container">
          <path d={svgPaths.p2f844780} fill="var(--fill-0, #0058BE)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Button">
      <Container10 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#0058be] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">Details</p>
      </div>
    </div>
  );
}

function Data11() {
  return (
    <div className="relative shrink-0 w-[144.17px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[16px] relative size-full">
        <Button2 />
      </div>
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex items-start justify-center mb-[-1px] pt-px relative shrink-0 w-full" data-name="Row">
      <div aria-hidden className="absolute border-[rgba(188,203,185,0.2)] border-solid border-t inset-0 pointer-events-none" />
      <Data6 />
      <Data7 />
      <Data8 />
      <Data9 />
      <Data10 />
      <Data11 />
    </div>
  );
}

function Data12() {
  return (
    <div className="relative shrink-0 w-[157.97px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[17px] pt-[16px] px-[24px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#161d16] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">#FM-8540</p>
        </div>
      </div>
    </div>
  );
}

function Data13() {
  return (
    <div className="relative shrink-0 w-[178.25px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[17px] pt-[16px] px-[24px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">Sep 28, 2024</p>
        </div>
      </div>
    </div>
  );
}

function Data14() {
  return (
    <div className="relative shrink-0 w-[166.7px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[17px] pt-[16px] px-[24px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#161d16] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">24 Products</p>
        </div>
      </div>
    </div>
  );
}

function Data15() {
  return (
    <div className="relative shrink-0 w-[135.42px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[17px] pt-[16px] px-[24px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#161d16] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">$192.00</p>
        </div>
      </div>
    </div>
  );
}

function Overlay2() {
  return (
    <div className="bg-[rgba(74,225,118,0.3)] content-stretch flex items-start px-[8px] relative rounded-[9999px] shrink-0" data-name="Overlay">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#161d16] text-[10px] whitespace-nowrap">
        <p className="leading-[20px]">Delivered</p>
      </div>
    </div>
  );
}

function Data16() {
  return (
    <div className="relative shrink-0 w-[143.47px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[16.5px] relative size-full">
        <Overlay2 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[11.667px] relative shrink-0 w-[10.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 11.6667">
        <g id="Container">
          <path d={svgPaths.p2f844780} fill="var(--fill-0, #0058BE)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Button">
      <Container11 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#0058be] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">Details</p>
      </div>
    </div>
  );
}

function Data17() {
  return (
    <div className="relative shrink-0 w-[144.17px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[16px] relative size-full">
        <Button3 />
      </div>
    </div>
  );
}

function Row3() {
  return (
    <div className="content-stretch flex items-start justify-center mb-[-1px] pt-px relative shrink-0 w-full" data-name="Row">
      <div aria-hidden className="absolute border-[rgba(188,203,185,0.2)] border-solid border-t inset-0 pointer-events-none" />
      <Data12 />
      <Data13 />
      <Data14 />
      <Data15 />
      <Data16 />
      <Data17 />
    </div>
  );
}

function Data18() {
  return (
    <div className="relative shrink-0 w-[157.97px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[17px] pt-[16px] px-[24px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#161d16] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">#FM-8421</p>
        </div>
      </div>
    </div>
  );
}

function Data19() {
  return (
    <div className="relative shrink-0 w-[178.25px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[17px] pt-[16px] px-[24px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">Sep 21, 2024</p>
        </div>
      </div>
    </div>
  );
}

function Data20() {
  return (
    <div className="relative shrink-0 w-[166.7px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[17px] pt-[16px] px-[24px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#161d16] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">8 Products</p>
        </div>
      </div>
    </div>
  );
}

function Data21() {
  return (
    <div className="relative shrink-0 w-[135.42px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[17px] pt-[16px] px-[24px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#161d16] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">$65.40</p>
        </div>
      </div>
    </div>
  );
}

function Overlay3() {
  return (
    <div className="bg-[rgba(74,225,118,0.3)] content-stretch flex items-start px-[8px] relative rounded-[9999px] shrink-0" data-name="Overlay">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#161d16] text-[10px] whitespace-nowrap">
        <p className="leading-[20px]">Delivered</p>
      </div>
    </div>
  );
}

function Data22() {
  return (
    <div className="relative shrink-0 w-[143.47px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[16.5px] relative size-full">
        <Overlay3 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[11.667px] relative shrink-0 w-[10.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 11.6667">
        <g id="Container">
          <path d={svgPaths.p2f844780} fill="var(--fill-0, #0058BE)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Button">
      <Container12 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#0058be] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">Details</p>
      </div>
    </div>
  );
}

function Data23() {
  return (
    <div className="relative shrink-0 w-[144.17px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[16px] relative size-full">
        <Button4 />
      </div>
    </div>
  );
}

function Row4() {
  return (
    <div className="content-stretch flex items-start justify-center mb-[-1px] pt-px relative shrink-0 w-full" data-name="Row">
      <div aria-hidden className="absolute border-[rgba(188,203,185,0.2)] border-solid border-t inset-0 pointer-events-none" />
      <Data18 />
      <Data19 />
      <Data20 />
      <Data21 />
      <Data22 />
      <Data23 />
    </div>
  );
}

function Data24() {
  return (
    <div className="relative shrink-0 w-[157.97px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[16px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#161d16] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">#FM-8332</p>
        </div>
      </div>
    </div>
  );
}

function Data25() {
  return (
    <div className="relative shrink-0 w-[178.25px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[16px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">Sep 14, 2024</p>
        </div>
      </div>
    </div>
  );
}

function Data26() {
  return (
    <div className="relative shrink-0 w-[166.7px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[16px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#161d16] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">10 Products</p>
        </div>
      </div>
    </div>
  );
}

function Data27() {
  return (
    <div className="relative shrink-0 w-[135.42px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[16px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#161d16] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">$76.25</p>
        </div>
      </div>
    </div>
  );
}

function Overlay4() {
  return (
    <div className="bg-[rgba(74,225,118,0.3)] content-stretch flex items-start px-[8px] relative rounded-[9999px] shrink-0" data-name="Overlay">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#161d16] text-[10px] whitespace-nowrap">
        <p className="leading-[20px]">Delivered</p>
      </div>
    </div>
  );
}

function Data28() {
  return (
    <div className="relative shrink-0 w-[143.47px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[16px] relative size-full">
        <Overlay4 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[11.667px] relative shrink-0 w-[10.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 11.6667">
        <g id="Container">
          <path d={svgPaths.p2f844780} fill="var(--fill-0, #0058BE)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Button">
      <Container13 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#0058be] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">Details</p>
      </div>
    </div>
  );
}

function Data29() {
  return (
    <div className="relative shrink-0 w-[144.17px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[16px] relative size-full">
        <Button5 />
      </div>
    </div>
  );
}

function Row5() {
  return (
    <div className="content-stretch flex items-start justify-center pt-px relative shrink-0 w-full" data-name="Row">
      <div aria-hidden className="absolute border-[rgba(188,203,185,0.2)] border-solid border-t inset-0 pointer-events-none" />
      <Data24 />
      <Data25 />
      <Data26 />
      <Data27 />
      <Data28 />
      <Data29 />
    </div>
  );
}

function Body() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Body">
      <Row1 />
      <Row2 />
      <Row3 />
      <Row4 />
      <Row5 />
    </div>
  );
}

function Table() {
  return (
    <div className="relative shrink-0 w-full" data-name="Table">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-auto relative rounded-[inherit] size-full">
        <Header />
        <Body />
      </div>
    </div>
  );
}

function OrderHistoryTable() {
  return (
    <div className="bg-white col-[1/span_12] justify-self-stretch relative rounded-[12px] row-2 self-start shrink-0" data-name="Order History Table">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <HorizontalBorder />
        <Table />
      </div>
      <div aria-hidden className="absolute border border-[rgba(188,203,185,0.3)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function AtmosphericBackgroundElement() {
  return (
    <div className="absolute bottom-[-39px] h-[190px] right-[-38.99px] w-[219.758px]" data-name="Atmospheric Background Element">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 219.758 190">
        <g id="Atmospheric Background Element" opacity="0.05">
          <path d={svgPaths.p38e12680} fill="var(--fill-0, #161D16)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#22c55e] content-stretch flex items-start px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#004b1e] text-[12px] whitespace-nowrap">
        <p className="leading-[14px]">In Transit</p>
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#161d16] text-[24px] whitespace-nowrap">
        <p className="leading-[32px]">Active Order #FM-8829</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Estimated arrival: Today, 4:30 PM - 5:15 PM</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Background3 />
      <Heading3 />
      <Container17 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container16 />
      <div className="h-[24px] relative shrink-0 w-[33px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 24">
          <path d={svgPaths.p1ab32e00} fill="var(--fill-0, #006E2F)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[12px] whitespace-nowrap">
        <p className="leading-[14px]">Order Placed</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[12px] whitespace-nowrap">
        <p className="leading-[14px]">Processing</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#006e2f] text-[12px] whitespace-nowrap">
        <p className="leading-[14px]">On the Way</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[12px] whitespace-nowrap">
        <p className="leading-[14px]">Delivered</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex h-[14px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container19 />
      <Container20 />
      <Container21 />
      <Container22 />
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#e2ebde] h-[8px] overflow-clip relative rounded-[9999px] shrink-0 w-full" data-name="Background">
      <div className="absolute bg-[#006e2f] bottom-0 left-0 right-1/4 rounded-[9999px] top-0" data-name="Background" />
    </div>
  );
}

function ProgressBar() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Progress Bar">
      <Container18 />
      <Background4 />
    </div>
  );
}

function Container14() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[32px] items-start relative size-full">
        <Container15 />
        <ProgressBar />
      </div>
    </div>
  );
}

function ActiveOrderTrackingHighFocusCard() {
  return (
    <div className="bg-white col-[1/span_8] justify-self-stretch relative rounded-[12px] row-1 self-start shrink-0" data-name="Active Order Tracking (High Focus Card)">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pb-[55px] pt-[25px] px-[25px] relative size-full">
          <AtmosphericBackgroundElement />
          <Container14 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[rgba(188,203,185,0.3)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#161d16] text-[24px] w-full">
        <p className="leading-[32px]">Saved Addresses</p>
      </div>
    </div>
  );
}

function Margin2() {
  return (
    <div className="h-[33px] relative shrink-0 w-[25px]" data-name="Margin">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 33">
        <g id="Margin">
          <path d={svgPaths.p2e1e2d00} fill="var(--fill-0, #3D4A3D)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container24() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[14px] tracking-[0.14px] whitespace-nowrap">
          <p className="leading-[16px]">Add New Address</p>
        </div>
      </div>
    </div>
  );
}

function Border() {
  return (
    <div className="col-3 justify-self-stretch relative rounded-[12px] row-1 self-start shrink-0" data-name="Border">
      <div aria-hidden className="absolute border-2 border-[rgba(188,203,185,0.5)] border-dashed inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[26px] py-[55.5px] relative size-full">
          <Margin2 />
          <Container24 />
        </div>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[18px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 18">
        <g id="Container">
          <path d={svgPaths.p12a32500} fill="var(--fill-0, #006E2F)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#161d16] text-[14px] tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[16px]">Home (Default)</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Container27 />
      <Container28 />
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[16px] relative shrink-0 w-[4px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 16">
        <g id="Container" opacity="0.5">
          <path d={svgPaths.p3caf0c80} fill="var(--fill-0, #3D4A3D)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container25() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
          <Container26 />
          <Container29 />
        </div>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[14px] w-full">
          <p className="leading-[20px] mb-0">123 Fresh Lane, Apt 4B</p>
          <p className="leading-[20px]">Greenfield, GF 54321</p>
        </div>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#006e2f] text-[12px] text-center whitespace-nowrap">
          <p className="leading-[14px]">Edit Address</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[rgba(188,203,185,0.3)] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[17px] relative size-full">
        <Button6 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[12px] row-1 self-start shrink-0" data-name="Background+Border+Shadow">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[26px] relative size-full">
          <Container25 />
          <Container30 />
          <HorizontalBorder1 />
          <div className="absolute bg-[rgba(0,110,47,0.05)] bottom-[-14px] right-[-14px] rounded-[9999px] size-[64px]" data-name="Background Accent" />
        </div>
      </div>
      <div aria-hidden className="absolute border-2 border-[#006e2f] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[19px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 19">
        <g id="Container">
          <path d={svgPaths.p1230f680} fill="var(--fill-0, #3D4A3D)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#161d16] text-[14px] tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[16px]">Office</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex gap-[7.99px] items-center relative shrink-0" data-name="Container">
      <Container33 />
      <Container34 />
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[16px] relative shrink-0 w-[4px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 16">
        <g id="Container" opacity="0.5">
          <path d={svgPaths.p3caf0c80} fill="var(--fill-0, #3D4A3D)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container31() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
          <Container32 />
          <Container35 />
        </div>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[14px] w-full">
          <p className="leading-[20px] mb-0">500 Corporate Plaza, Suite 1200</p>
          <p className="leading-[20px]">Central City, CC 10101</p>
        </div>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#006e2f] text-[12px] text-center whitespace-nowrap">
          <p className="leading-[14px]">Edit Address</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder2() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[rgba(188,203,185,0.3)] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[17px] relative size-full">
        <Button7 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow1() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[12px] row-1 self-start shrink-0" data-name="Background+Border+Shadow">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start pb-[27px] pt-[25px] px-[25px] relative size-full">
          <Container31 />
          <Container36 />
          <HorizontalBorder2 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[rgba(188,203,185,0.3)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Container23() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[_171px] relative shrink-0 w-full" data-name="Container">
      <Border />
      <BackgroundBorderShadow />
      <BackgroundBorderShadow1 />
    </div>
  );
}

function SavedAddressesGrid() {
  return (
    <div className="col-[1/span_12] content-stretch flex flex-col gap-[16px] items-start justify-self-stretch relative row-3 self-start shrink-0" data-name="Saved Addresses Grid">
      <Heading4 />
      <Container23 />
    </div>
  );
}

function DashboardBentoGrid() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[___224px_393px_219px] relative shrink-0 w-full" data-name="Dashboard Bento Grid">
      <QuickActionsMiniStats />
      <OrderHistoryTable />
      <ActiveOrderTrackingHighFocusCard />
      <SavedAddressesGrid />
    </div>
  );
}

function MainContent() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start max-w-[1280px] relative shrink-0 w-[928px]" data-name="Main Content">
      <WelcomeHeaderStatsGrid />
      <DashboardBentoGrid />
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#006e2f] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">FreshMarket</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">© 2024 FreshMarket. All rights reserved.</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[270.63px]" data-name="Container">
      <Container39 />
      <Container40 />
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[12px] whitespace-nowrap">
        <p className="leading-[14px]">Privacy Policy</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[12px] whitespace-nowrap">
        <p className="leading-[14px]">Terms of Service</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[12px] whitespace-nowrap">
        <p className="leading-[14px]">Shipping Info</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[12px] whitespace-nowrap">
        <p className="leading-[14px]">Contact Us</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex gap-[24px] h-[14px] items-start relative shrink-0" data-name="Container">
      <Link />
      <Link1 />
      <Link2 />
      <Link3 />
    </div>
  );
}

function Container37() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between max-w-[inherit] relative size-full">
        <Container38 />
        <Container41 />
      </div>
    </div>
  );
}

function SimpleFooterBottomLevelRelativeToMain() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Simple Footer (Bottom-level relative to Main)">
      <div aria-hidden className="absolute border-[#bccbb9] border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pb-[32px] pt-[33px] px-[24px] relative size-full">
        <Container37 />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#006e2f] text-[24px] w-full">
        <p className="leading-[32px]">FreshMarket</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-70 relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[12px] w-full">
        <p className="leading-[14px]">Management Dashboard</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[32px] relative size-full">
        <Heading />
        <Container43 />
      </div>
    </div>
  );
}

function Container44() {
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

function Link4() {
  return (
    <div className="bg-[#22c55e] relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[8px] relative size-full">
          <Container44 />
          <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#004b1e] text-[14px] tracking-[0.14px] whitespace-nowrap">
            <p className="leading-[16px]">Overview</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container45() {
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

function Link5() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[8px] relative size-full">
          <Container45 />
          <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[14px] tracking-[0.14px] whitespace-nowrap">
            <p className="leading-[16px]">Orders</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Container">
          <path d={svgPaths.p1869180} fill="var(--fill-0, #3D4A3D)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link6() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[8px] relative size-full">
          <Container46 />
          <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[14px] tracking-[0.14px] whitespace-nowrap">
            <p className="leading-[16px]">Addresses</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container47() {
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

function Link7() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[8px] relative size-full">
          <Container47 />
          <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[14px] tracking-[0.14px] whitespace-nowrap">
            <p className="leading-[16px]">Settings</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Nav">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start pb-[747px] pt-[4px] px-[8px] relative size-full">
        <Link4 />
        <Link5 />
        <Link6 />
        <Link7 />
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-[#006e2f] content-stretch flex items-center justify-center py-[12px] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" data-name="Button:shadow" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[16px]">Add New Product</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[24px] relative size-full">
        <Button8 />
      </div>
    </div>
  );
}

function Container49() {
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

function Link8() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center px-[16px] py-[8px] relative size-full">
          <Container49 />
          <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[14px] tracking-[0.14px] whitespace-nowrap">
            <p className="leading-[16px]">Help</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container50() {
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

function Link9() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center px-[16px] py-[8px] relative size-full">
          <Container50 />
          <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[14px] tracking-[0.14px] whitespace-nowrap">
            <p className="leading-[16px]">Logout</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder3() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#bccbb9] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start pb-[28px] pt-[21px] px-[8px] relative size-full">
        <Link8 />
        <Link9 />
      </div>
    </div>
  );
}

function AsideSideNavBarComponent() {
  return (
    <div className="absolute bg-[#edf6ea] content-stretch flex flex-col h-[1254px] items-start left-0 pr-px top-0 w-[256px]" data-name="Aside - SideNavBar Component">
      <div aria-hidden className="absolute border-[#bccbb9] border-r border-solid inset-0 pointer-events-none" />
      <div className="absolute bg-[rgba(255,255,255,0)] h-[1254px] left-0 shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] top-0 w-[256px]" data-name="Aside - SideNavBar Component:shadow" />
      <Container42 />
      <Nav />
      <Container48 />
      <HorizontalBorder3 />
    </div>
  );
}

export default function HtmlBody() {
  return (
    <div className="content-stretch flex flex-col gap-[184px] items-center pl-[256px] pt-[48px] relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(243, 252, 239) 0%, rgb(243, 252, 239) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Html → Body">
      <MainContent />
      <SimpleFooterBottomLevelRelativeToMain />
      <AsideSideNavBarComponent />
    </div>
  );
}