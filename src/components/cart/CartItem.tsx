import { Minus, Plus, Trash2 } from "lucide-react";
import { CartItem as CartItemType } from "@/context/CartContext";

interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (id: string, qty: number) => void;
  onRemove: (id: string) => void;
}

export function CartItem({ item, onUpdateQuantity, onRemove }: CartItemProps) {
  return (
    <div className="flex gap-4 p-4 rounded-2xl border border-gray-100 bg-[#f8f9ff] relative group hover:border-[#bccbb9] transition-all">
      {item.image && (
        <img
          src={item.image}
          alt={item.name}
          className="w-20 h-20 rounded-xl object-cover border border-gray-100"
        />
      )}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h4 className="text-base font-bold text-[#0b1c30] pr-6">{item.name}</h4>
          <p className="text-sm font-semibold text-[#006e2f] mt-0.5">
            ₹{item.price} each
          </p>
        </div>

        <div className="flex items-center justify-between mt-2">
          {/* Quantity Selector */}
          <div className="flex items-center border border-[#bccbb9] bg-white rounded-full p-1 gap-2">
            <button
              onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
              className="w-6 h-6 rounded-full flex items-center justify-center hover:bg-gray-100 text-[#3d4a3d] transition-colors cursor-pointer"
            >
              <Minus size={12} />
            </button>
            <span className="text-sm font-bold text-[#0b1c30] min-w-[20px] text-center">
              {item.quantity}
            </span>
            <button
              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
              className="w-6 h-6 rounded-full flex items-center justify-center hover:bg-gray-100 text-[#3d4a3d] transition-colors cursor-pointer"
            >
              <Plus size={12} />
            </button>
          </div>

          <span className="text-base font-bold text-[#0b1c30]">
            ₹{item.price * item.quantity}
          </span>
        </div>
      </div>

      {/* Remove Button */}
      <button
        onClick={() => onRemove(item.id)}
        className="absolute top-4 right-4 text-[#3d4a3d] hover:text-red-500 p-1.5 rounded-full hover:bg-white transition-all shadow-sm opacity-0 group-hover:opacity-100 cursor-pointer"
      >
        <Trash2 size={16} />
      </button>
    </div>
  );
}
