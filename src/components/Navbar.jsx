import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ShoppingCart, Store, Sun, Moon } from "lucide-react";
import { motion } from "motion/react";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cartCount } = useCart();

  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") !== "light";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <motion.header
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`sticky top-0 z-50 border-b backdrop-blur-xl transition-colors duration-300 ${
        isDark
          ? "border-white/10 bg-[#0A1F44]/95 text-white"
          : "border-slate-200 bg-white/95 text-slate-900"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="group flex items-center gap-2.5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-[#0066FF] to-[#0A1F44] shadow-lg shadow-[#0066FF]/20 transition-transform duration-300 group-hover:scale-110">
            <Store className="h-5 w-5 text-white" />
          </div>

          <h1 className="text-xl font-extrabold tracking-tight sm:text-2xl">
            Tech
            <span className="text-[#0066FF] dark:text-[#22D3EE]">Cart</span>
          </h1>
        </Link>

        <nav className="flex items-center gap-3">
          <motion.button
            type="button"
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
            title={`Switch to ${isDark ? "light" : "dark"} theme`}
            className={`flex h-11 w-11 items-center justify-center rounded-xl border transition-all duration-300 ${
              isDark
                ? "border-white/10 bg-white/5 text-[#22D3EE] hover:border-[#22D3EE]/40 hover:bg-[#22D3EE]/10"
                : "border-slate-200 bg-slate-100 text-[#0066FF] hover:border-[#0066FF]/40 hover:bg-blue-50"
            }`}
          >
            <motion.div
              key={isDark ? "moon" : "sun"}
              initial={{ rotate: -45, opacity: 0, scale: 0.5 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </motion.div>
          </motion.button>

          <NavLink
            to="/cart"
            aria-label={`Shopping cart, ${cartCount} items`}
            className={`group relative flex h-11 w-11 items-center justify-center rounded-xl border transition-all duration-300 ${
              isDark
                ? "border-white/10 bg-white/5 hover:border-[#22D3EE]/40 hover:bg-[#22D3EE]/10"
                : "border-slate-200 bg-slate-100 hover:border-[#0066FF]/40 hover:bg-blue-50"
            }`}
          >
            <ShoppingCart
              className={`h-5 w-5 transition-colors ${
                isDark
                  ? "text-white group-hover:text-[#22D3EE]"
                  : "text-slate-700 group-hover:text-[#0066FF]"
              }`}
            />

            {cartCount > 0 && (
              <motion.span
                key={cartCount}
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#0066FF] px-1 text-xs font-bold text-white shadow-lg shadow-[#0066FF]/30"
              >
                {cartCount}
              </motion.span>
            )}
          </NavLink>
        </nav>
      </div>
    </motion.header>
  );
};

export default Navbar;
