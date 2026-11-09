import { useParams, Link } from "react-router-dom";
import { initialProducts } from "../data/product";
import { useCart } from "../context/CartContext";
import { motion } from "motion/react";

import {
  ChevronLeft,
  ShoppingCart,
  Tag,
  Zap,
  ShieldCheck,
  Truck,
  ArrowRight,
  PackageCheck,
  Store,
} from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = initialProducts.find(
    (data) => String(data.id) === String(id),
  );

  if (!product) {
    return (
      <div className="flex min-h-[70vh] flex-col items-center justify-center bg-slate-50 px-4 text-center text-slate-900 transition-colors duration-300 dark:bg-[#0B0B0B] dark:text-white">
        <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-100 dark:bg-[#22D3EE]/10">
          <PackageCheck
            size={38}
            className="text-[#0066FF] dark:text-[#22D3EE]"
          />
        </div>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          Product Not Found
        </h2>

        <p className="mt-2 text-sm text-slate-600 dark:text-[#94A3B8]">
          Sorry, we couldn't find the product you're looking for.
        </p>

        <Link
          to="/"
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#0066FF] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#0A1F44]"
        >
          <ChevronLeft size={18} />
          Back to Store
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-8 text-slate-900 transition-colors duration-300 dark:bg-[#0B0B0B] dark:text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-[#0066FF] dark:text-[#94A3B8] dark:hover:text-[#22D3EE]"
        >
          <ChevronLeft size={18} />
          Back to Store
        </Link>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-xl shadow-slate-200/50 transition-colors duration-300 dark:border-white/10 dark:bg-[#0A1F44]/40 dark:shadow-black/20 sm:p-5"
          >
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-slate-100 dark:bg-[#0A1F44]">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />

              <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-[#0A1F44]/90 px-4 py-2 text-xs font-semibold text-white shadow-lg backdrop-blur-md">
                {product.category}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col"
          >
            <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-[#0066FF]/20 bg-[#0066FF]/10 px-3 py-1.5 dark:border-[#22D3EE]/20 dark:bg-[#22D3EE]/10">
              <Store size={14} className="text-[#0066FF] dark:text-[#22D3EE]" />

              <span className="text-xs font-bold tracking-wide text-[#0066FF] dark:text-[#22D3EE]">
                TechCart
              </span>
            </div>

            <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
              {product.name}
            </h1>

            <div className="mt-4 flex items-center gap-2 text-sm text-slate-600 dark:text-[#94A3B8]">
              <Tag size={16} className="text-[#0066FF] dark:text-[#22D3EE]" />
              <span>{product.category}</span>
            </div>

            <div className="mt-7 rounded-2xl border border-[#0066FF]/20 bg-[#0066FF]/5 p-5 dark:border-[#22D3EE]/20 dark:bg-[#22D3EE]/5">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-[#94A3B8]">
                Product Price
              </p>

              <p className="mt-2 text-3xl font-extrabold text-[#0066FF] dark:text-[#22D3EE] sm:text-4xl">
                ₹{Number(product.price).toFixed(2)}
              </p>
            </div>

            <div className="mt-8">
              <h2 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                Product Overview
              </h2>

              <p className="text-sm leading-7 text-slate-600 dark:text-[#94A3B8] sm:text-base">
                {product.description}
              </p>
            </div>

            <div className="mt-7 space-y-4 rounded-2xl border border-slate-200 bg-white p-5 transition-colors duration-300 dark:border-white/10 dark:bg-[#0A1F44]/40">
              <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                Why Choose This Product?
              </h3>

              <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                <Zap
                  size={19}
                  className="shrink-0 text-[#0066FF] dark:text-[#22D3EE]"
                />
                <span>Quality-focused product selection</span>
              </div>

              <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                <ShieldCheck
                  size={19}
                  className="shrink-0 text-[#0066FF] dark:text-[#22D3EE]"
                />
                <span>Warranty information as applicable</span>
              </div>

              <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                <Truck
                  size={19}
                  className="shrink-0 text-[#0066FF] dark:text-[#22D3EE]"
                />
                <span>Shipping details available at checkout</span>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <motion.button
                type="button"
                whileTap={{ scale: 0.97 }}
                onClick={() => addToCart(product)}
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-linear-to-r from-[#0066FF] to-[#0A1F44] px-6 py-4 text-sm font-extrabold text-white shadow-lg shadow-blue-900/20 transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110"
              >
                <ShoppingCart size={19} />
                Add to Cart
              </motion.button>

              <Link
                to="/"
                className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-4 text-sm font-bold text-slate-700 transition-all duration-300 hover:border-[#0066FF]/30 hover:bg-blue-50 hover:text-[#0066FF] dark:border-white/10 dark:bg-[#0A1F44]/40 dark:text-slate-300 dark:hover:border-[#22D3EE]/30 dark:hover:bg-[#22D3EE]/10 dark:hover:text-[#22D3EE]"
              >
                Continue Shopping
                <ArrowRight size={17} />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
