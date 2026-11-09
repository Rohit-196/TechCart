import React from "react";
import { motion } from "motion/react";
import { Store, Heart, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="border-t border-slate-200 bg-white transition-colors duration-300 dark:border-white/10 dark:bg-[#0B0B0B]"
    >
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <Link to="/" className="group flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-[#0066FF] to-[#0A1F44] shadow-lg shadow-[#0066FF]/20 transition-transform duration-300 group-hover:scale-110">
              <Store className="h-5 w-5 text-white" />
            </div>

            <div>
              <h2 className="text-lg font-extrabold tracking-tight text-slate-900 dark:text-white">
                Tech
                <span className="text-[#0066FF] dark:text-[#22D3EE]">Cart</span>
              </h2>

              <p className="text-xs text-slate-500 dark:text-[#94A3B8]">
                Your modern shopping destination
              </p>
            </div>
          </Link>

          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-medium text-slate-700 transition-all duration-300 hover:border-[#0066FF] hover:bg-blue-50 hover:text-[#0066FF] dark:border-white/10 dark:bg-[#0A1F44]/40 dark:text-[#94A3B8] dark:hover:border-[#22D3EE]/40 dark:hover:bg-[#22D3EE]/10 dark:hover:text-[#22D3EE]"
          >
            Back to top
            <ArrowUp size={16} />
          </button>
        </div>

        <div className="my-8 border-t border-slate-200 dark:border-white/10" />

        <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
          <p className="text-xs leading-relaxed text-slate-500 dark:text-[#94A3B8] sm:text-sm">
            &copy; 2026 TechCart. All rights reserved.
          </p>

          <p className="flex flex-wrap items-center justify-center gap-1.5 text-xs text-slate-500 dark:text-[#94A3B8] sm:text-sm">
            Advanced E-commerce Simulation
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
