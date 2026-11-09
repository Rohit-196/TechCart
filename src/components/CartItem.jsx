import React from "react";
import { Plus, Minus, Trash2 } from "lucide-react";
import { motion } from "motion/react";
import { useCart } from "../context/CartContext";

const CartItem = ({ item }) => {
  const { addToCart, removeFromCart } = useCart();

  const increaseQ = () => addToCart(item);
  const decreaseQ = () => removeFromCart(item.id);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -30 }}
      transition={{ duration: 0.3 }}
      className="group flex flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-4 shadow-lg shadow-slate-200/40 transition-all duration-300 hover:border-[#0066FF]/40 hover:shadow-blue-100/50 dark:border-white/10 dark:bg-[#0B0B0B] dark:shadow-black/10 dark:hover:border-[#22D3EE]/30 sm:flex-row sm:items-center sm:justify-between sm:p-5"
    >
      <div className="flex min-w-0 w-full items-center gap-4 sm:flex-1">
        <div className="h-20 w-20 shrink-0 overflow-hidden rounded-xl border border-slate-200 bg-slate-100 dark:border-white/10 dark:bg-[#0A1F44] sm:h-24 sm:w-24">
          <img
            src={item.image}
            alt={item.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="truncate text-base font-bold text-slate-900 dark:text-white sm:text-lg">
            {item.name}
          </h3>

          <p className="mt-1 text-sm font-medium text-slate-500 dark:text-[#94A3B8]">
            Price per item
          </p>

          <p className="mt-1 text-lg font-bold text-[#0066FF] dark:text-[#22D3EE]">
            ₹{Number(item.price).toFixed(2)}
          </p>
        </div>
      </div>

      <div className="flex w-full items-center justify-between gap-3 sm:w-auto sm:justify-end sm:gap-6">
        <div className="flex items-center rounded-xl border border-slate-200 bg-slate-100 p-1 dark:border-white/10 dark:bg-[#0A1F44]">
          <button
            type="button"
            onClick={decreaseQ}
            aria-label="Decrease quantity"
            disabled={item.quantity <= 1}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-600 transition hover:bg-slate-200 hover:text-[#0066FF] disabled:cursor-not-allowed disabled:opacity-40 dark:text-[#94A3B8] dark:hover:bg-white/10 dark:hover:text-[#22D3EE]"
          >
            <Minus size={15} />
          </button>

          <span className="min-w-9 text-center text-sm font-bold text-slate-900 dark:text-white">
            {item.quantity}
          </span>

          <button
            type="button"
            onClick={increaseQ}
            aria-label="Increase quantity"
            className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-600 transition hover:bg-blue-100 hover:text-[#0066FF] dark:text-[#94A3B8] dark:hover:bg-[#0066FF]/20 dark:hover:text-[#22D3EE]"
          >
            <Plus size={15} />
          </button>
        </div>

        <div className="min-w-20 text-right">
          <p className="text-xs text-slate-500 dark:text-[#94A3B8]">Subtotal</p>

          <p className="mt-1 text-sm font-bold text-slate-900 dark:text-white sm:text-base">
            ₹{(Number(item.price) * item.quantity).toFixed(2)}
          </p>
        </div>

        <button
          type="button"
          onClick={() => removeFromCart(item.id, true)}
          aria-label={`Remove ${item.name} from cart`}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-red-200 bg-red-50 text-red-500 transition-all duration-200 hover:border-red-300 hover:bg-red-100 dark:border-red-500/10 dark:bg-red-500/10 dark:text-red-400 dark:hover:border-red-500/30 dark:hover:bg-red-500/20 dark:hover:text-red-300"
        >
          <Trash2 size={17} />
        </button>
      </div>
    </motion.div>
  );
};

export default CartItem;
