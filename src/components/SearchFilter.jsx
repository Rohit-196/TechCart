import React from "react";
import { Search, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const SearchFilter = ({ searchTerm, setSearchTerm }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mb-6 w-full"
    >
      <div className="group flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-1.5 shadow-sm transition-all duration-300 hover:border-[#0066FF]/40 focus-within:border-[#0066FF]/60 focus-within:ring-4 focus-within:ring-[#0066FF]/10 dark:border-white/10 dark:bg-[#0A1F44]/40 dark:hover:border-[#22D3EE]/30">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0066FF]/10 transition-colors group-focus-within:bg-[#0066FF]/20 dark:bg-[#22D3EE]/10 dark:group-focus-within:bg-[#22D3EE]/20">
          <Search className="h-5 w-5 text-[#0066FF] dark:text-[#22D3EE]" />
        </div>

        <input
          type="text"
          placeholder="Search products by name or features..."
          aria-label="Search products"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="min-w-0 flex-1 bg-transparent py-3 text-sm font-medium text-slate-900 outline-none placeholder:text-slate-400 dark:text-white dark:placeholder:text-[#94A3B8] sm:text-base"
        />

        <AnimatePresence>
          {searchTerm && (
            <motion.button
              type="button"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSearchTerm("")}
              aria-label="Clear search"
              className="mr-2 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100 hover:text-[#0066FF] dark:text-[#94A3B8] dark:hover:bg-white/10 dark:hover:text-[#22D3EE]"
            >
              <X size={18} />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      <p className="mt-2 px-2 text-xs text-slate-500 dark:text-[#94A3B8]">
        Find exactly what you're looking for
      </p>
    </motion.div>
  );
};

export default SearchFilter;
