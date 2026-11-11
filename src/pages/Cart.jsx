import React from "react";
import { motion } from "motion/react";
import {
  ChevronLeft,
  ShoppingBag,
  ShieldCheck,
  Zap,
  ArrowRight,
  PackageCheck,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart, cartTotal, cartCount } = useCart();

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-8 text-slate-900 transition-colors duration-300 dark:bg-[#0B0B0B] dark:text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition-colors hover:text-[#0066FF] dark:text-[#94A3B8] dark:hover:text-[#22D3EE]"
        >
          <ChevronLeft size={18} />
          Back to Store
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Shopping Cart
            </h1>

            <span className="rounded-full border border-blue-200 bg-blue-100 px-3 py-1 text-sm font-semibold text-[#0066FF] dark:border-[#22D3EE]/20 dark:bg-[#22D3EE]/10 dark:text-[#22D3EE]">
              {cartCount} Items
            </span>
          </div>

          <p className="mt-2 text-sm text-slate-500 dark:text-[#94A3B8] sm:text-base">
            Review your selected products before checkout.
          </p>
        </motion.div>

        {cart.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex min-h-100 flex-col items-center justify-center rounded-3xl border border-slate-200 bg-white px-5 py-12 text-center shadow-sm dark:border-white/10 dark:bg-[#0A1F44]/40"
          >
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-100 dark:bg-[#22D3EE]/10">
              <ShoppingBag
                size={38}
                className="text-[#0066FF] dark:text-[#22D3EE]"
              />
            </div>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Your cart is empty
            </h2>

            <p className="mt-2 max-w-sm text-sm leading-relaxed text-slate-500 dark:text-[#94A3B8]">
              Looks like you haven't added anything to your cart yet. Explore
              our collection and find something you love.
            </p>

            <Link
              to="/"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-[#0066FF] to-[#0A1F44] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-900/20 transition-all hover:-translate-y-0.5 hover:brightness-110"
            >
              Explore Products
              <ArrowRight size={17} />
            </Link>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-3">
            <div className="space-y-4 lg:col-span-2">
              <div className="mb-5 flex items-center justify-between">
                <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                  Your Items
                </h2>

                <span className="text-xs text-slate-500 dark:text-[#94A3B8]">
                  {cart.length} Products
                </span>
              </div>

              {cart.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="h-fit rounded-2xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-200/50 dark:border-white/10 dark:bg-[#0A1F44]/40 dark:shadow-black/20 sm:p-7 lg:sticky lg:top-24"
            >
              <div className="mb-6 flex items-center gap-3 border-b border-slate-200 pb-5 dark:border-white/10">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 dark:bg-[#22D3EE]/10">
                  <ShoppingBag
                    className="text-[#0066FF] dark:text-[#22D3EE]"
                    size={21}
                  />
                </div>

                <div>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                    Order Summary
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-[#94A3B8]">
                    Review your order details
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500 dark:text-[#94A3B8]">
                    Subtotal ({cartCount} items)
                  </span>

                  <span className="font-semibold text-slate-900 dark:text-white">
                    ₹{Number(cartTotal).toFixed(2)}
                  </span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-slate-500 dark:text-[#94A3B8]">
                    Shipping
                  </span>

                  <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                    Free
                  </span>
                </div>

                <div className="border-t border-dashed border-slate-200 pt-5 dark:border-white/10">
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-bold text-slate-900 dark:text-white">
                      Estimated Total
                    </span>

                    <span className="text-2xl font-extrabold text-[#0066FF] dark:text-[#22D3EE]">
                      ₹{Number(cartTotal).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              <Link
                to="/checkout"
                className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-[#0066FF] to-[#0A1F44] px-5 py-4 text-sm font-extrabold text-white shadow-lg shadow-blue-900/20 transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110"
              >
                <Zap size={19} />
                Proceed to Checkout
                <ArrowRight size={17} />
              </Link>

              <div className="mt-5 flex items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-3 dark:border-emerald-500/10 dark:bg-emerald-500/5">
                <ShieldCheck
                  size={19}
                  className="mt-0.5 shrink-0 text-emerald-600 dark:text-emerald-400"
                />

                <div>
                  <p className="text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                    Secure Checkout
                  </p>

                  <p className="mt-1 text-xs leading-relaxed text-slate-500 dark:text-[#94A3B8]">
                    Your order information is protected.
                  </p>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-500 dark:text-[#94A3B8]">
                <PackageCheck size={16} />
                Free shipping on your order
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
