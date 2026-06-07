import { useCart } from "../../context/CartContext";
import { X, CheckCircle, ShieldCheck, UserCheck, PhoneCall, ShoppingCart } from "lucide-react";
import verifyImg from "figma:asset/c704db3cbb8abd7f824d4d0494d83e3358f81f62.png";

export function VerifyModal() {
  const { isVerifyOpen, setVerifyOpen } = useCart();

  if (!isVerifyOpen) return null;

  const steps = [
    {
      icon: <ShoppingCart className="text-blue-500" size={20} />,
      title: "Step 1: Order Placement",
      description: "You place your order online via our app. The order is automatically forwarded to the local supermarket manager.",
    },
    {
      icon: <UserCheck className="text-orange-500" size={20} />,
      title: "Step 2: Owner Hands-on Review",
      description: "The store owner manually inspects item stock levels. If perishables don't meet strict freshness rules, they select replacement candidates.",
    },
    {
      icon: <PhoneCall className="text-[#006e2f]" size={20} />,
      title: "Step 3: Direct Call / Confirmation",
      description: "You receive a quick direct notification or call for approval on substitute items. No automated surprises at your door.",
    },
    {
      icon: <ShieldCheck className="text-[#006e2f]" size={20} />,
      title: "Step 4: Reliable Dispatch",
      description: "Your verified order is safely packed, sealed, and handed to a local courier for delivery within 30 minutes.",
    },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" style={{ fontFamily: "Inter, sans-serif" }}>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={() => setVerifyOpen(false)}
      />

      <div className="flex items-center justify-center min-h-screen p-4">
        {/* Modal Panel */}
        <div className="relative bg-white rounded-[32px] max-w-2xl w-full shadow-2xl overflow-hidden transform transition-all flex flex-col border border-gray-100">
          
          {/* Header */}
          <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-[#f8f9ff]">
            <div className="flex items-center gap-2">
              <ShieldCheck className="text-[#006e2f]" size={24} />
              <h2 className="text-xl font-bold text-[#0b1c30]">Owner Verification Process</h2>
            </div>
            <button
              onClick={() => setVerifyOpen(false)}
              className="p-2 text-[#3d4a3d] hover:text-[#0b1c30] rounded-full hover:bg-gray-100 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 overflow-y-auto space-y-6 max-h-[500px]">
            <div className="flex flex-col gap-4">
              <img
                src={verifyImg}
                alt="Verification Workflow Diagram"
                className="w-full h-48 object-cover rounded-2xl border border-gray-100"
              />
              <p className="text-[#3d4a3d] text-sm leading-relaxed mt-2">
                At **FreshMart**, we don't believe in picking random boxes off warehouse shelves. Every order goes through a direct human verification step by local store owners to ensure absolute freshness.
              </p>
            </div>

            {/* Timeline steps */}
            <div className="space-y-6 border-l-2 border-dashed border-[#bccbb9] pl-6 ml-4">
              {steps.map((step, idx) => (
                <div key={idx} className="relative">
                  {/* Timeline point */}
                  <div className="absolute -left-[45px] top-0.5 bg-white border-2 border-[#006e2f] w-8 h-8 rounded-full flex items-center justify-center shadow-sm">
                    {step.icon}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#0b1c30]">{step.title}</h4>
                    <p className="text-sm text-[#3d4a3d] mt-1 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-gray-100 bg-[#f8f9ff] flex justify-end">
            <button
              onClick={() => setVerifyOpen(false)}
              className="bg-[#006e2f] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#005a25] transition-colors shadow-md text-sm"
            >
              Got It, Thanks!
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
