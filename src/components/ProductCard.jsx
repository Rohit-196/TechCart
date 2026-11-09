import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-[#0066FF]/40 hover:shadow-xl hover:shadow-blue-500/10 dark:border-white/10 dark:bg-[#0B0B0B] dark:hover:border-[#22D3EE]/40 dark:hover:shadow-[#0066FF]/10"
    >
      <Link
        to={`/product/${product.id}`}
        className="relative block aspect-4/3 overflow-hidden bg-slate-100 dark:bg-[#0A1F44]"
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute left-3 top-3">
          <span className="rounded-full border border-white/20 bg-white/90 px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-lg backdrop-blur-md dark:bg-[#0B0B0B]/90 dark:text-white">
            {product.category}
          </span>
        </div>

        <div className="absolute bottom-3 left-3 rounded-xl border border-white/20 bg-white/95 px-4 py-2 shadow-lg backdrop-blur-md dark:bg-[#0A1F44]/95">
          <span className="text-lg font-extrabold text-[#0066FF] dark:text-[#22D3EE]">
            ₹{Number(product.price).toFixed(2)}
          </span>
        </div>

        <div className="absolute bottom-3 right-3 flex h-10 w-10 translate-y-3 items-center justify-center rounded-xl bg-white text-[#0066FF] opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight size={19} />
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <Link to={`/product/${product.id}`}>
          <h3 className="line-clamp-1 text-lg font-bold text-slate-900 transition-colors duration-200 hover:text-[#0066FF] dark:text-white dark:hover:text-[#22D3EE] sm:text-xl">
            {product.name}
          </h3>
        </Link>

        <p className="mt-2 line-clamp-2 min-h-10 flex-1 text-sm leading-relaxed text-slate-600 dark:text-[#94A3B8]">
          {product.description}
        </p>

        <motion.button
          type="button"
          whileTap={{ scale: 0.97 }}
          onClick={() => addToCart(product)}
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-[#0066FF] to-[#0A1F44] px-4 py-3 text-sm font-bold text-white shadow-lg shadow-[#0066FF]/20 transition-all duration-300 hover:from-[#0A1F44] hover:to-[#0066FF] hover:shadow-[#22D3EE]/20"
        >
          <ShoppingCart size={18} />
          <span>Add to Cart</span>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
