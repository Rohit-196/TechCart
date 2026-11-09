import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  CheckCircle2,
  PackageCheck,
  MapPin,
  ArrowRight,
  ShoppingBag,
  ShieldCheck,
} from "lucide-react";

const OrderConfirmation = ({ deliveryDetails }) => {
  return (
    <div className="flex min-h-[85vh] items-center justify-center bg-slate-50 px-4 py-12 text-slate-900 transition-colors duration-300 dark:bg-[#0B0B0B] dark:text-white sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-2xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/50 transition-colors duration-300 dark:border-white/10 dark:bg-[#0A1F44]/40 dark:shadow-black/30"
      >
        <div className="relative overflow-hidden border-b border-emerald-500/10 bg-emerald-500/5 px-5 py-10 text-center sm:px-10 sm:py-12">
          <motion.div
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              delay: 0.2,
              type: "spring",
              stiffness: 180,
            }}
            className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full border border-emerald-500/20 bg-emerald-500/10 shadow-lg shadow-emerald-500/10"
          >
            <CheckCircle2
              size={54}
              strokeWidth={1.8}
              className="text-emerald-500 dark:text-emerald-400"
            />
          </motion.div>

          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            <PackageCheck size={14} />
            Order Successful
          </span>

          <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Order Confirmed!
          </h1>

          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate-600 dark:text-[#94A3B8] sm:text-base">
            Thank you for shopping with TechCart. Your order has been
            successfully confirmed.
          </p>
        </div>

        <div className="p-5 sm:p-10">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 dark:bg-[#22D3EE]/10">
              <MapPin
                size={22}
                className="text-[#0066FF] dark:text-[#22D3EE]"
              />
            </div>

            <div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                Delivery Information
              </h2>
              <p className="text-xs text-slate-500 dark:text-[#94A3B8]">
                Your provided shipping address
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-100 p-5 dark:border-white/10 dark:bg-[#0A1F44]/60 sm:p-6">
            <p className="text-lg font-bold text-slate-900 dark:text-white">
              {deliveryDetails?.name}
            </p>

            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-[#94A3B8]">
              {deliveryDetails?.address}
            </p>

            <p className="mt-1 text-sm text-slate-600 dark:text-[#94A3B8]">
              {deliveryDetails?.city} - {deliveryDetails?.zip}
            </p>
          </div>

          <div className="mt-5 flex items-start gap-3 rounded-xl border border-emerald-500/10 bg-emerald-500/5 p-4">
            <ShieldCheck
              size={20}
              className="mt-0.5 shrink-0 text-emerald-600 dark:text-emerald-400"
            />

            <div>
              <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-400">
                Thank you for your order!
              </p>

              <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-[#94A3B8]">
                This is a demo order confirmation. No actual payment or email
                notification has been processed.
              </p>
            </div>
          </div>

          <Link
            to="/"
            className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-[#0066FF] to-[#0A1F44] px-6 py-4 text-sm font-extrabold text-white shadow-lg shadow-blue-900/20 transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110"
          >
            <ShoppingBag size={18} />
            Continue Shopping
            <ArrowRight size={18} />
          </Link>

          <p className="mt-5 text-center text-xs text-slate-500 dark:text-[#94A3B8]">
            We appreciate your trust in TechCart.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default OrderConfirmation;
