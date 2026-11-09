import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, PackageSearch, ShoppingBag } from "lucide-react";

import SearchFilter from "../components/SearchFilter";
import CategoryFilter from "../components/CategoryFilter";
import { useCart } from "../context/CartContext";
import ProductCard from "../components/ProductCard";

const ProductList = () => {
  const { products } = useCart();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filterProducts = products.filter((product) => {
    const search = searchTerm.toLowerCase();

    const matchesSearch =
      product.name.toLowerCase().includes(search) ||
      product.description.toLowerCase().includes(search);

    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-slate-50 px-4 pb-20 pt-8 text-slate-900 transition-colors duration-300 dark:bg-[#0B0B0B] dark:text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative mb-12 overflow-hidden rounded-3xl border border-blue-200 bg-linear-to-br from-blue-100 via-white to-slate-100 px-6 py-12 transition-colors duration-300 dark:border-white/10 dark:from-[#0A1F44] dark:via-[#0B0B0B] dark:to-[#0B0B0B] sm:px-10 sm:py-16 lg:px-14"
        >
          <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-[#0066FF]/20 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-24 left-1/3 h-64 w-64 rounded-full bg-[#22D3EE]/10 blur-[100px]" />

          <div className="relative z-10 max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#0066FF]/20 bg-[#0066FF]/10 px-4 py-2">
              <Sparkles
                size={15}
                className="text-[#0066FF] dark:text-[#22D3EE]"
              />

              <span className="text-xs font-bold tracking-wide text-[#0066FF] dark:text-[#22D3EE]">
                DISCOVER SOMETHING NEW
              </span>
            </div>

            <h1 className="text-4xl font-black leading-tight tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
              Find Your
              <span className="block bg-linear-to-r from-[#0066FF] to-[#0A1F44] bg-clip-text text-transparent dark:from-[#22D3EE] dark:to-[#0066FF]">
                Perfect Gear.
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 dark:text-[#94A3B8] sm:text-base">
              Explore our collection and discover products that match your
              style, needs, and everyday lifestyle.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-slate-600 dark:text-[#94A3B8]">
              <div className="flex items-center gap-2">
                <ShoppingBag
                  size={17}
                  className="text-[#0066FF] dark:text-[#22D3EE]"
                />
                <span>{products.length} Products</span>
              </div>

              <div className="h-1 w-1 rounded-full bg-slate-400 dark:bg-slate-500" />

              <div className="flex items-center gap-2">
                <Sparkles
                  size={17}
                  className="text-[#0066FF] dark:text-[#22D3EE]"
                />
                <span>Explore Our Collection</span>
              </div>
            </div>
          </div>
        </motion.section>

        <section className="mb-8">
          <div className="mb-4">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white sm:text-2xl">
              Find Your Product
            </h2>

            <p className="mt-1 text-sm text-slate-600 dark:text-[#94A3B8]">
              Search products by name or description.
            </p>
          </div>

          <SearchFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </section>

        <section className="mb-10">
          <CategoryFilter
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </section>

        <section>
          <div className="mb-7 flex flex-col justify-between gap-3 border-b border-slate-200 pb-5 dark:border-white/10 sm:flex-row sm:items-end">
            <div>
              <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0066FF] dark:text-[#22D3EE]">
                <Sparkles size={14} />
                Our Collection
              </div>

              <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
                Featured Products
              </h2>

              <p className="mt-2 text-sm text-slate-600 dark:text-[#94A3B8]">
                Discover products selected for you.
              </p>
            </div>

            <div className="w-fit rounded-xl border border-slate-200 bg-white px-4 py-2 shadow-sm transition-colors dark:border-white/10 dark:bg-[#0A1F44]/40">
              <span className="text-sm text-slate-600 dark:text-[#94A3B8]">
                Showing{" "}
              </span>

              <span className="font-bold text-[#0066FF] dark:text-[#22D3EE]">
                {filterProducts.length}
              </span>

              <span className="text-sm text-slate-600 dark:text-[#94A3B8]">
                {" "}
                of {products.length} products
              </span>
            </div>
          </div>

          {filterProducts.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            >
              <AnimatePresence mode="popLayout">
                {filterProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.25 }}
                  >
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex min-h-80 flex-col items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-white px-5 text-center transition-colors duration-300 dark:border-white/10 dark:bg-[#0A1F44]/30"
            >
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0066FF]/10 dark:bg-[#22D3EE]/10">
                <PackageSearch
                  size={32}
                  className="text-[#0066FF] dark:text-[#22D3EE]"
                />
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                No Products Found
              </h3>

              <p className="mt-2 max-w-sm text-sm leading-6 text-slate-600 dark:text-[#94A3B8]">
                We couldn't find any products matching your search. Try another
                keyword or select a different category.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                }}
                className="mt-6 rounded-xl bg-linear-to-r from-[#0066FF] to-[#0A1F44] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:scale-105 hover:shadow-blue-500/30"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </section>
      </div>
    </main>
  );
};

export default ProductList;
