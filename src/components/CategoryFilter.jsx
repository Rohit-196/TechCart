import React from "react";
import { motion } from "motion/react";
import { Tag } from "lucide-react";
import { initialProducts } from "../data/product";

const availableCategories = [
  "All",
  ...new Set(initialProducts.map((p) => p.category)),
];

const CategoryFilter = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className="flex flex-col gap-4 border-b border-slate-200 pb-6 transition-colors duration-300 dark:border-white/10">
      <div className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0066FF]/10">
          <Tag className="h-4 w-4 text-[#0066FF] dark:text-[#22D3EE]" />
        </div>

        <h3 className="text-sm font-semibold tracking-wide text-slate-700 dark:text-white">
          Browse Categories
        </h3>
      </div>

      <div className="flex flex-wrap items-center gap-2 sm:gap-3">
        {availableCategories.map((category) => {
          const isActive = selectedCategory === category;

          return (
            <motion.button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              whileTap={{ scale: 0.95 }}
              className={`relative overflow-hidden rounded-full border px-4 py-2.5 text-xs font-semibold transition-all duration-300 sm:px-5 sm:text-sm ${
                isActive
                  ? "border-[#0066FF] bg-[#0066FF] text-white shadow-lg shadow-[#0066FF]/20"
                  : "border-slate-200 bg-white text-slate-600 hover:border-[#0066FF] hover:bg-blue-50 hover:text-[#0066FF] dark:border-white/10 dark:bg-[#0B0B0B] dark:text-[#94A3B8] dark:hover:border-[#22D3EE]/50 dark:hover:bg-[#22D3EE]/10 dark:hover:text-[#22D3EE]"
              }`}
            >
              {category}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryFilter;
