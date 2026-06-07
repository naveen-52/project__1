import svgPaths from "./svg-q4led8ctxq";
import imgDeliveryPartner from "./dcc692d0b6e9dbf5460347ee1fdb182bdd8c67ad.png";
import imgEmptyCartIllustration from "./9aa9032b2f9c477ce2554ce07106ab6ebb51a23c.png";

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#161d16] text-[32px] tracking-[-0.32px] w-full">
        <p className="leading-[40px]">Track Order #FM-98421</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[16px] w-full">
        <p className="leading-[24px]">{`We're getting your groceries ready for delivery.`}</p>
      </div>
    </div>
  );
}

function HeaderSection() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Header Section">
      <Heading />
      <Container />
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[10.021px] relative shrink-0 w-[13.583px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5833 10.0208">
        <g id="Container">
          <path d={svgPaths.p127da640} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#006e2f] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Background">
      <Container2 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#161d16] text-[14px] tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[16px]">Order Placed</p>
      </div>
    </div>
  );
}

function Step1OrderPlaced() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-center relative shrink-0" data-name="Step 1: Order Placed">
      <Background />
      <Container3 />
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[10.021px] relative shrink-0 w-[13.583px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5833 10.0208">
        <g id="Container">
          <path d={svgPaths.p127da640} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#006e2f] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Background">
      <Container4 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#161d16] text-[14px] tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[16px]">Owner Reviewing</p>
      </div>
    </div>
  );
}

function Step2OwnerReviewing() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-center relative shrink-0" data-name="Step 2: Owner Reviewing">
      <Background1 />
      <Container5 />
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[10.021px] relative shrink-0 w-[13.583px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5833 10.0208">
        <g id="Container">
          <path d={svgPaths.p127da640} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#006e2f] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Background">
      <Container6 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#161d16] text-[14px] tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[16px]">Order Confirmed</p>
      </div>
    </div>
  );
}

function Step3OrderConfirmed() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-center relative shrink-0" data-name="Step 3: Order Confirmed">
      <Background2 />
      <Container7 />
    </div>
  );
}

function Container8() {
  return (
    <div className="relative size-[16.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
        <g id="Container">
          <path d={svgPaths.p4bc5c00} fill="var(--fill-0, #004B1E)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#22c55e] content-stretch flex items-center justify-center p-[2px] relative rounded-[9999px] shrink-0 size-[40px]" data-name="Background+Border">
      <div aria-hidden className="absolute border-2 border-[#006e2f] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex items-center justify-center relative shrink-0 size-[17.516px]">
        <div className="flex-none rotate-3">
          <Container8 />
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#006e2f] text-[14px] tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[16px]">Packing</p>
      </div>
    </div>
  );
}

function Step4PackingCurrentState() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-center relative shrink-0" data-name="Step 4: Packing (Current State)">
      <BackgroundBorder />
      <Container9 />
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[13.333px] relative shrink-0 w-[18.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 13.3333">
        <g id="Container">
          <path d={svgPaths.pfffa80} fill="var(--fill-0, #6D7B6C)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-[#edf6ea] content-stretch flex items-center justify-center p-[2px] relative rounded-[9999px] shrink-0 size-[40px]" data-name="Background+Border">
      <div aria-hidden className="absolute border-2 border-[#bccbb9] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Container10 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[14px] tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[16px]">Out For Delivery</p>
      </div>
    </div>
  );
}

function Step5OutForDelivery() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-center relative shrink-0" data-name="Step 5: Out For Delivery">
      <BackgroundBorder1 />
      <Container11 />
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[15px] relative shrink-0 w-[13.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 15">
        <g id="Container">
          <path d={svgPaths.p2ce8a370} fill="var(--fill-0, #6D7B6C)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="bg-[#edf6ea] content-stretch flex items-center justify-center p-[2px] relative rounded-[9999px] shrink-0 size-[40px]" data-name="Background+Border">
      <div aria-hidden className="absolute border-2 border-[#bccbb9] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Container12 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[14px] tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[16px]">Delivered</p>
      </div>
    </div>
  );
}

function Step6Delivered() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-center relative shrink-0" data-name="Step 6: Delivered">
      <BackgroundBorder2 />
      <Container13 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 absolute bg-[#bccbb9] h-[4px] left-0 right-0 top-1/2" data-name="Progress Line Background" />
      <div className="-translate-y-1/2 absolute bg-[#006e2f] h-[4px] left-0 right-[40%] top-1/2" data-name="Progress Line Active" />
      <Step1OrderPlaced />
      <Step2OwnerReviewing />
      <Step3OrderConfirmed />
      <Step4PackingCurrentState />
      <Step5OutForDelivery />
      <Step6Delivered />
    </div>
  );
}

function SectionVisualTrackingTimeline() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] relative rounded-[12px] shrink-0 w-full" data-name="Section - Visual Tracking Timeline">
      <div className="content-stretch flex flex-col items-start p-[32px] relative size-full">
        <Container1 />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p256e1340} fill="var(--fill-0, #006E2F)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#006e2f] text-[14px] tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[16px]">Estimated Arrival</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Container16 />
      <Container17 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#161d16] text-[48px] tracking-[-0.96px] w-full">
        <p className="leading-[56px]">30-45 mins</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[16px] w-full">
        <p className="leading-[24px] mb-0">Your items are being carefully picked and packed at</p>
        <p className="leading-[24px]">FreshMarket Central.</p>
      </div>
    </div>
  );
}

function TimeEstimate() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Time Estimate">
      <Container15 />
      <Container18 />
      <Container19 />
    </div>
  );
}

function DeliveryPartner1() {
  return (
    <div className="pointer-events-none relative rounded-[9999px] shrink-0 size-[64px]" data-name="Delivery Partner">
      <div className="absolute inset-0 overflow-hidden rounded-[9999px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgDeliveryPartner} />
      </div>
      <div aria-hidden className="absolute border-2 border-solid border-white inset-0 rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function BackgroundBorder3() {
  return (
    <div className="absolute bottom-[-4px] h-[24.25px] right-[-4px] w-[24.833px]" data-name="Background+Border">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.8333 24.25">
        <g id="Background+Border">
          <rect fill="var(--fill-0, #006E2F)" height="22.25" rx="11.125" width="22.8333" x="1" y="1" />
          <rect height="22.25" rx="11.125" stroke="var(--stroke-0, #EDF6EA)" strokeWidth="2" width="22.8333" x="1" y="1" />
          <path d={svgPaths.p2839ddc0} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container20() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <DeliveryPartner1 />
        <BackgroundBorder3 />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#161d16] text-[14px] tracking-[0.14px] w-full">
        <p className="leading-[16px]">Marcus Thompson</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[12px] w-full">
        <p className="leading-[14px]">Top Rated Partner</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[12.667px] relative shrink-0 w-[13.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 12.6667">
        <g id="Container">
          <path d={svgPaths.p265d2480} fill="var(--fill-0, #FACC15)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#161d16] text-[12px] whitespace-nowrap">
        <p className="leading-[14px]">4.9</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6d7b6c] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">•</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[41.49px] relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[12px] whitespace-nowrap">
        <p className="leading-[14px] mb-0">1,200+</p>
        <p className="leading-[14px]">deliveries</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex gap-[4px] items-center pt-[4px] relative shrink-0 w-full" data-name="Container">
      <Container24 />
      <Container25 />
      <Container26 />
      <Container27 />
    </div>
  );
}

function Container21() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading2 />
        <Container22 />
        <Container23 />
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p3ffd6800} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#006e2f] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] relative rounded-[9999px] shrink-0 size-[40px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container28 />
      </div>
    </div>
  );
}

function DeliveryPartner() {
  return (
    <div className="bg-[#edf6ea] content-stretch flex gap-[16px] items-center p-[17px] relative rounded-[8px] shrink-0 w-[320px]" data-name="Delivery Partner">
      <div aria-hidden className="absolute border border-[rgba(188,203,185,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Container20 />
      <Container21 />
      <Button />
    </div>
  );
}

function Container14() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] items-center p-[32px] relative size-full">
          <TimeEstimate />
          <DeliveryPartner />
        </div>
      </div>
    </div>
  );
}

function Container30() {
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

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#161d16] text-[14px] tracking-[0.14px] whitespace-nowrap">
        <p>
          <span className="leading-[16px]">{`Delivery to: `}</span>
          <span className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic">Home (123 Market St.)</span>
        </p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container30 />
        <Container31 />
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Container">
          <path d={svgPaths.p256c25e0} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#006e2f] relative rounded-[9999px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center px-[32px] py-[8px] relative size-full">
        <Container32 />
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[0.14px] whitespace-nowrap">
          <p className="leading-[16px]">Support</p>
        </div>
      </div>
    </div>
  );
}

function ActionFooter() {
  return (
    <div className="bg-[#e8f0e4] relative shrink-0 w-full" data-name="Action Footer">
      <div aria-hidden className="absolute border-[#bccbb9] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[16px] pl-[16px] pr-[16.01px] pt-[17px] relative size-full">
          <Container29 />
          <Button1 />
        </div>
      </div>
    </div>
  );
}

function DeliveryStatusCard() {
  return (
    <div className="bg-white col-[1/span_8] justify-self-stretch relative rounded-[12px] row-1 self-start shrink-0" data-name="Delivery Status Card">
      <div className="content-stretch flex flex-col items-start overflow-clip pb-[76px] pt-px px-px relative rounded-[inherit] size-full">
        <Container14 />
        <ActionFooter />
      </div>
      <div aria-hidden className="absolute border border-[#bccbb9] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Heading3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#161d16] text-[24px] w-full">
          <p className="leading-[32px]">Order Details</p>
        </div>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[16px] whitespace-nowrap">
          <p className="leading-[24px]">Subtotal</p>
        </div>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#161d16] text-[16px] whitespace-nowrap">
          <p className="leading-[24px]">₹3,540.00</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="content-stretch flex items-center justify-between pb-[9px] pt-[8px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[rgba(188,203,185,0.3)] border-b border-solid inset-0 pointer-events-none" />
      <Container34 />
      <Container35 />
    </div>
  );
}

function Container36() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[16px] whitespace-nowrap">
          <p className="leading-[24px]">Delivery Fee</p>
        </div>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#006e2f] text-[16px] whitespace-nowrap">
          <p className="leading-[24px]">FREE</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="content-stretch flex items-center justify-between pb-[9px] pt-[8px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[rgba(188,203,185,0.3)] border-b border-solid inset-0 pointer-events-none" />
      <Container36 />
      <Container37 />
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#161d16] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Total</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#161d16] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">₹3,540.00</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex items-center justify-between py-[16px] relative shrink-0 w-full" data-name="Container">
      <Container39 />
      <Container40 />
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2px] py-[18px] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div aria-hidden className="absolute border-2 border-[#006e2f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#006e2f] text-[14px] text-center tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[16px]">View Receipt</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative size-full">
        <HorizontalBorder />
        <HorizontalBorder1 />
        <Container38 />
        <Button2 />
      </div>
    </div>
  );
}

function QuickSummaryCard() {
  return (
    <div className="bg-white col-[9/span_4] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] justify-self-stretch relative rounded-[12px] row-1 self-start shrink-0" data-name="Quick Summary Card">
      <div aria-hidden className="absolute border border-[#bccbb9] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[33px] relative size-full">
        <Heading3 />
        <Container33 />
      </div>
    </div>
  );
}

function TrackingInfoDeliveryCardGrid() {
  return (
    <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[_352px] relative shrink-0 w-full" data-name="Tracking Info & Delivery Card Grid">
      <DeliveryStatusCard />
      <QuickSummaryCard />
    </div>
  );
}

function Heading1() {
  return (
    <div className="opacity-50 relative shrink-0 w-full" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[24px] text-center tracking-[2.4px] uppercase whitespace-nowrap">
          <p className="leading-[32px]">REFERENCE: EMPTY STATE</p>
        </div>
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#161d16] text-[32px] text-center tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[40px]">Your cart is lonely</p>
      </div>
    </div>
  );
}

function Heading3Margin() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[164.36px] pb-[8px] top-[290px]" data-name="Heading 3:margin">
      <Heading4 />
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[384px] pl-[1.52px] pr-[1.53px] relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[24px] mb-0">{`It seems like you haven't added any fresh produce`}</p>
        <p className="leading-[24px]">or groceries to your basket yet.</p>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[108px] max-w-[384px] pb-[32px] top-[338px]" data-name="Margin">
      <Container41 />
    </div>
  );
}

function Button3() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#006e2f] content-stretch flex flex-col items-center justify-center left-1/2 px-[64px] py-[16px] rounded-[9999px] top-[418px]" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[16px]">Continue Shopping</p>
      </div>
    </div>
  );
}

function EmptyCartIllustration() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Empty Cart Illustration">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-[8.33%] max-w-none size-[83.33%] top-[8.33%]" src={imgEmptyCartIllustration} />
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 size-[192px]" data-name="Container">
      <div className="absolute bg-[rgba(0,110,47,0.1)] inset-0 rounded-[9999px]" data-name="Illustration Container" />
      <EmptyCartIllustration />
    </div>
  );
}

function Margin1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[224px] items-start left-[204px] pb-[32px] top-[66px] w-[192px]" data-name="Margin">
      <Container42 />
    </div>
  );
}

function BackgroundBorder4() {
  return (
    <div className="bg-[#f3fcef] h-[532px] max-w-[600px] relative rounded-[24px] shrink-0 w-[600px]" data-name="Background+Border">
      <div aria-hidden className="absolute border-2 border-[rgba(188,203,185,0.5)] border-dashed inset-0 pointer-events-none rounded-[24px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Heading3Margin />
        <Margin />
        <Button3 />
        <Margin1 />
      </div>
    </div>
  );
}

function EmptyCartSectionForReference() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center pt-[49px] relative shrink-0 w-full" data-name="Empty Cart Section (For Reference)">
      <div aria-hidden className="absolute border-[#bccbb9] border-solid border-t inset-0 pointer-events-none" />
      <Heading1 />
      <BackgroundBorder4 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-center opacity-50 relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[24px] text-center tracking-[2.4px] uppercase whitespace-nowrap">
        <p className="leading-[32px]">LOADING STATES</p>
      </div>
    </div>
  );
}

function SearchSkeleton() {
  return (
    <div className="bg-[#edf6ea] col-[1/span_4] h-[64px] justify-self-stretch relative rounded-[12px] row-1 shrink-0" data-name="Search Skeleton">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[16px] relative size-full">
          <div className="bg-gradient-to-r from-1/4 from-[#e2ebde] relative rounded-[9999px] shrink-0 size-[32px] to-3/4 to-[#e2ebde] via-1/2 via-[#f3fcef]" data-name="Gradient" />
          <div className="bg-gradient-to-r flex-[1_0_0] from-1/4 from-[#e2ebde] h-[24px] min-w-px relative rounded-[6px] to-3/4 to-[#e2ebde] via-1/2 via-[#f3fcef]" data-name="Gradient" />
          <div className="bg-gradient-to-r from-1/4 from-[#e2ebde] h-[32px] relative rounded-[9999px] shrink-0 to-3/4 to-[#e2ebde] via-1/2 via-[#f3fcef] w-[80px]" data-name="Gradient" />
        </div>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <div className="bg-gradient-to-r from-1/4 from-[#e2ebde] h-[16px] relative rounded-[4px] shrink-0 to-3/4 to-[#e2ebde] via-1/2 via-[#f3fcef] w-[192px]" data-name="Gradient" />
        <div className="bg-gradient-to-r from-1/4 from-[#e2ebde] h-[12px] opacity-60 relative rounded-[4px] shrink-0 to-3/4 to-[#e2ebde] via-1/2 via-[#f3fcef] w-[128px]" data-name="Gradient" />
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[16px] relative size-full">
        <div className="bg-gradient-to-r from-1/4 from-[#e2ebde] h-[24px] relative rounded-[4px] shrink-0 to-3/4 to-[#e2ebde] via-1/2 via-[#f3fcef] w-[64px]" data-name="Gradient" />
        <div className="bg-gradient-to-r from-1/4 from-[#e2ebde] relative rounded-[9999px] shrink-0 size-[32px] to-3/4 to-[#e2ebde] via-1/2 via-[#f3fcef]" data-name="Gradient" />
      </div>
    </div>
  );
}

function ProductCardSkeleton() {
  return (
    <div className="bg-white col-1 drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] justify-self-stretch relative rounded-[12px] row-2 self-start shrink-0" data-name="Product Card Skeleton 1">
      <div aria-hidden className="absolute border border-[#bccbb9] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[17px] relative size-full">
        <div className="aspect-square bg-gradient-to-r from-1/4 from-[#e2ebde] relative rounded-[8px] shrink-0 to-3/4 to-[#e2ebde] via-1/2 via-[#f3fcef] w-full" data-name="Gradient" />
        <Container44 />
        <Container45 />
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <div className="bg-gradient-to-r from-1/4 from-[#e2ebde] h-[16px] relative rounded-[4px] shrink-0 to-3/4 to-[#e2ebde] via-1/2 via-[#f3fcef] w-[170.66px]" data-name="Gradient" />
        <div className="bg-gradient-to-r from-1/4 from-[#e2ebde] h-[12px] opacity-60 relative rounded-[4px] shrink-0 to-3/4 to-[#e2ebde] via-1/2 via-[#f3fcef] w-[85.33px]" data-name="Gradient" />
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[16px] relative size-full">
        <div className="bg-gradient-to-r from-1/4 from-[#e2ebde] h-[24px] relative rounded-[4px] shrink-0 to-3/4 to-[#e2ebde] via-1/2 via-[#f3fcef] w-[56px]" data-name="Gradient" />
        <div className="bg-gradient-to-r from-1/4 from-[#e2ebde] relative rounded-[9999px] shrink-0 size-[32px] to-3/4 to-[#e2ebde] via-1/2 via-[#f3fcef]" data-name="Gradient" />
      </div>
    </div>
  );
}

function ProductCardSkeleton1() {
  return (
    <div className="bg-white col-2 drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] justify-self-stretch relative rounded-[12px] row-2 self-start shrink-0" data-name="Product Card Skeleton 2">
      <div aria-hidden className="absolute border border-[#bccbb9] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[17px] relative size-full">
        <div className="aspect-square bg-gradient-to-r from-1/4 from-[#e2ebde] relative rounded-[8px] shrink-0 to-3/4 to-[#e2ebde] via-1/2 via-[#f3fcef] w-full" data-name="Gradient" />
        <Container46 />
        <Container47 />
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <div className="bg-gradient-to-r from-1/4 from-[#e2ebde] h-[16px] relative rounded-[4px] shrink-0 to-3/4 to-[#e2ebde] via-1/2 via-[#f3fcef] w-[213.33px]" data-name="Gradient" />
        <div className="bg-gradient-to-r from-1/4 from-[#e2ebde] h-[12px] opacity-60 relative rounded-[4px] shrink-0 to-3/4 to-[#e2ebde] via-1/2 via-[#f3fcef] w-[170.66px]" data-name="Gradient" />
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[16px] relative size-full">
        <div className="bg-gradient-to-r from-1/4 from-[#e2ebde] h-[24px] relative rounded-[4px] shrink-0 to-3/4 to-[#e2ebde] via-1/2 via-[#f3fcef] w-[80px]" data-name="Gradient" />
        <div className="bg-gradient-to-r from-1/4 from-[#e2ebde] relative rounded-[9999px] shrink-0 size-[32px] to-3/4 to-[#e2ebde] via-1/2 via-[#f3fcef]" data-name="Gradient" />
      </div>
    </div>
  );
}

function ProductCardSkeleton2() {
  return (
    <div className="bg-white col-3 drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] justify-self-stretch relative rounded-[12px] row-2 self-start shrink-0" data-name="Product Card Skeleton 3">
      <div aria-hidden className="absolute border border-[#bccbb9] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[17px] relative size-full">
        <div className="aspect-square bg-gradient-to-r from-1/4 from-[#e2ebde] relative rounded-[8px] shrink-0 to-3/4 to-[#e2ebde] via-1/2 via-[#f3fcef] w-full" data-name="Gradient" />
        <Container48 />
        <Container49 />
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <div className="bg-gradient-to-r from-1/4 from-[#e2ebde] h-[16px] relative rounded-[4px] shrink-0 to-3/4 to-[#e2ebde] via-1/2 via-[#f3fcef] w-[128px]" data-name="Gradient" />
        <div className="bg-gradient-to-r from-1/4 from-[#e2ebde] h-[12px] opacity-60 relative rounded-[4px] shrink-0 to-3/4 to-[#e2ebde] via-1/2 via-[#f3fcef] w-[192px]" data-name="Gradient" />
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[16px] relative size-full">
        <div className="bg-gradient-to-r from-1/4 from-[#e2ebde] h-[24px] relative rounded-[4px] shrink-0 to-3/4 to-[#e2ebde] via-1/2 via-[#f3fcef] w-[48px]" data-name="Gradient" />
        <div className="bg-gradient-to-r from-1/4 from-[#e2ebde] relative rounded-[9999px] shrink-0 size-[32px] to-3/4 to-[#e2ebde] via-1/2 via-[#f3fcef]" data-name="Gradient" />
      </div>
    </div>
  );
}

function ProductCardSkeleton3() {
  return (
    <div className="bg-white col-4 drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] justify-self-stretch relative rounded-[12px] row-2 self-start shrink-0" data-name="Product Card Skeleton 4">
      <div aria-hidden className="absolute border border-[#bccbb9] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[17px] relative size-full">
        <div className="aspect-square bg-gradient-to-r from-1/4 from-[#e2ebde] relative rounded-[8px] shrink-0 to-3/4 to-[#e2ebde] via-1/2 via-[#f3fcef] w-full" data-name="Gradient" />
        <Container50 />
        <Container51 />
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[__64px_402px] relative shrink-0 w-full" data-name="Container">
      <SearchSkeleton />
      <ProductCardSkeleton />
      <ProductCardSkeleton1 />
      <ProductCardSkeleton2 />
      <ProductCardSkeleton3 />
    </div>
  );
}

function SkeletonLoadersSection() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start pt-[48px] relative shrink-0 w-full" data-name="Skeleton Loaders Section">
      <Heading5 />
      <Container43 />
    </div>
  );
}

function Main() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[48px] items-start left-0 max-w-[1280px] px-[24px] py-[32px] right-0 top-[64px]" data-name="Main">
      <HeaderSection />
      <SectionVisualTrackingTimeline />
      <TrackingInfoDeliveryCardGrid />
      <EmptyCartSectionForReference />
      <SkeletonLoadersSection />
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0" data-name="Margin">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#006e2f] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">FreshMarket</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Margin2 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">© 2024 FreshMarket. All rights reserved.</p>
      </div>
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

function Container54() {
  return (
    <div className="content-stretch flex gap-[32px] h-[14px] items-start relative shrink-0" data-name="Container">
      <Link />
      <Link1 />
      <Link2 />
      <Link3 />
    </div>
  );
}

function Container52() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between max-w-[inherit] px-[24px] py-[32px] relative size-full">
          <Container53 />
          <Container54 />
        </div>
      </div>
    </div>
  );
}

function FooterImplementation() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 pt-px right-0 top-[2179px]" data-name="Footer Implementation">
      <div aria-hidden className="absolute border-[#bccbb9] border-solid border-t inset-0 pointer-events-none" />
      <Container52 />
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#006e2f] text-[24px] whitespace-nowrap">
        <p className="leading-[32px]">FreshMarket</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[14px] tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[16px]">Shop</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#3d4a3d] text-[14px] tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[16px]">Deals</p>
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[2px] relative self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border-[#006e2f] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#006e2f] text-[14px] tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[16px]">Orders</p>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex gap-[16px] h-[18px] items-start relative shrink-0" data-name="Container">
      <Link4 />
      <Link5 />
      <Link6 />
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0" data-name="Container">
      <Container57 />
      <Container58 />
    </div>
  );
}

function Button4() {
  return (
    <div className="h-[28px] relative shrink-0 w-[24px]" data-name="Button">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 28">
        <g id="Button">
          <path d={svgPaths.p1551b300} fill="var(--fill-0, #3D4A3D)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="h-[28px] relative shrink-0 w-[27.982px]" data-name="Button">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.9815 28">
        <g id="Button">
          <path d={svgPaths.p13a03200} fill="var(--fill-0, #006E2F)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Button">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Button">
          <path d={svgPaths.p33c4ad00} fill="var(--fill-0, #3D4A3D)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container">
      <Button4 />
      <Button5 />
      <Button6 />
    </div>
  );
}

function Container55() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between max-w-[inherit] px-[24px] py-[16px] relative size-full">
          <Container56 />
          <Container59 />
        </div>
      </div>
    </div>
  );
}

function TopNavBarImplementation() {
  return (
    <div className="absolute bg-[#f3fcef] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col items-start left-0 right-0 top-0" data-name="TopNavBar Implementation">
      <Container55 />
    </div>
  );
}

export default function HtmlBody() {
  return (
    <div className="relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(243, 252, 239) 0%, rgb(243, 252, 239) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Html → Body">
      <Main />
      <FooterImplementation />
      <TopNavBarImplementation />
    </div>
  );
}