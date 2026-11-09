import React, { useState } from "react";
import { motion } from "motion/react";
import {
  MapPin,
  Package,
  ShieldCheck,
  ShoppingBag,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import OrderConfirmation from "../pages/OrderConfirmation";
import { toast, Bounce } from "react-toastify";

const Checkout = () => {
  const { cartTotal, clearCart, cart } = useCart();

  const [deliveryDetails, setDeliveryDetails] = useState({
    name: "",
    address: "",
    city: "",
    zip: "",
  });

  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setDeliveryDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cart.length === 0) return;

    toast.success("Order confirmed successfully!", {
      position: "top-right",
      autoClose: 3000,
      theme: "colored",
      transition: Bounce,
    });

    clearCart();
    setIsConfirmed(true);
  };

  if (isConfirmed) {
    return <OrderConfirmation deliveryDetails={deliveryDetails} />;
  }

  if (cart.length === 0) {
    return (
      <div className="flex min-h-[70vh] flex-col items-center justify-center bg-slate-50 px-4 text-center transition-colors duration-300 dark:bg-[#0B0B0B]">
        <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-100 dark:bg-[#22D3EE]/10">
          <ShoppingBag
            size={38}
            className="text-[#0066FF] dark:text-[#22D3EE]"
          />
        </div>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          Nothing to checkout
        </h2>

        <p className="mt-2 text-sm text-slate-500 dark:text-[#94A3B8]">
          Your shopping cart is currently empty.
        </p>

        <Link
          to="/"
          className="mt-6 rounded-xl bg-[#0066FF] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#0A1F44]"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  const fields = [
    {
      name: "name",
      label: "Full Name",
      placeholder: "Enter your full name",
      type: "text",
    },
    {
      name: "address",
      label: "Delivery Address",
      placeholder: "Enter your complete address",
      type: "text",
    },
    {
      name: "city",
      label: "City",
      placeholder: "Enter your city",
      type: "text",
    },
    {
      name: "zip",
      label: "PIN Code",
      placeholder: "Enter 6-digit PIN code",
      type: "text",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-8 text-slate-900 transition-colors duration-300 dark:bg-[#0B0B0B] dark:text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Link
          to="/cart"
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-[#0066FF] dark:text-[#94A3B8] dark:hover:text-[#22D3EE]"
        >
          <ArrowLeft size={18} />
          Back to Cart
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-9"
        >
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-100 px-3 py-1.5 text-xs font-semibold text-[#0066FF] dark:border-[#22D3EE]/20 dark:bg-[#22D3EE]/10 dark:text-[#22D3EE]">
            <CheckCircle2 size={14} />
            Almost there!
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Complete Your Order
          </h1>

          <p className="mt-2 text-sm text-slate-500 dark:text-[#94A3B8] sm:text-base">
            Add your delivery details and review your order.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-200/50 dark:border-white/10 dark:bg-[#0A1F44]/40 dark:shadow-black/10 sm:p-8 lg:col-span-2"
          >
            <div className="mb-7 flex items-center gap-3 border-b border-slate-200 pb-5 dark:border-white/10">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 dark:bg-[#22D3EE]/10">
                <MapPin
                  className="text-[#0066FF] dark:text-[#22D3EE]"
                  size={23}
                />
              </div>

              <div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white sm:text-2xl">
                  Shipping Information
                </h2>
                <p className="mt-1 text-xs text-slate-500 dark:text-[#94A3B8]">
                  Where should we deliver your order?
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {fields.map((field) => (
                <div key={field.name}>
                  <label
                    htmlFor={field.name}
                    className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
                  >
                    {field.label}
                    <span className="ml-1 text-[#0066FF] dark:text-[#22D3EE]">
                      *
                    </span>
                  </label>

                  <input
                    type={field.type}
                    id={field.name}
                    name={field.name}
                    value={deliveryDetails[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    required
                    maxLength={field.name === "zip" ? 6 : undefined}
                    pattern={field.name === "zip" ? "[0-9]{6}" : undefined}
                    inputMode={field.name === "zip" ? "numeric" : undefined}
                    title={
                      field.name === "zip"
                        ? "Please enter a valid 6-digit PIN code"
                        : undefined
                    }
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 hover:border-slate-300 focus:border-[#0066FF] focus:ring-4 focus:ring-[#0066FF]/10 dark:border-white/10 dark:bg-[#0A1F44]/60 dark:text-white dark:placeholder:text-[#94A3B8] dark:hover:border-white/20 dark:focus:border-[#22D3EE] dark:focus:ring-[#22D3EE]/10"
                  />
                </div>
              ))}

              <div className="border-t border-slate-200 pt-6 dark:border-white/10">
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-[#0066FF] to-[#0A1F44] px-5 py-4 text-sm font-extrabold text-white shadow-lg shadow-blue-900/20 transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110"
                >
                  <span>Confirm Order · ₹{Number(cartTotal).toFixed(2)}</span>
                  <ArrowRight size={18} />
                </button>

                <p className="mt-4 text-center text-xs text-slate-500 dark:text-[#94A3B8]">
                  Please verify your delivery details before confirming.
                </p>
              </div>
            </form>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="h-fit rounded-2xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-200/50 dark:border-white/10 dark:bg-[#0A1F44]/40 dark:shadow-black/10 sm:p-7 lg:sticky lg:top-24"
          >
            <div className="mb-6 flex items-center gap-3 border-b border-slate-200 pb-5 dark:border-white/10">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 dark:bg-[#22D3EE]/10">
                <Package
                  className="text-[#0066FF] dark:text-[#22D3EE]"
                  size={22}
                />
              </div>

              <div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                  Order Summary
                </h2>
                <p className="text-xs text-slate-500 dark:text-[#94A3B8]">
                  {cart.length} Products in your order
                </p>
              </div>
            </div>

            <div className="max-h-64 space-y-4 overflow-y-auto pr-1">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-12 w-12 shrink-0 rounded-lg border border-slate-200 bg-slate-100 object-cover dark:border-white/10 dark:bg-[#0A1F44]"
                  />

                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-slate-800 dark:text-slate-200">
                      {item.name}
                    </p>
                    <p className="mt-1 text-xs text-slate-500 dark:text-[#94A3B8]">
                      Qty: {item.quantity}
                    </p>
                  </div>

                  <p className="shrink-0 text-sm font-bold text-[#0066FF] dark:text-[#22D3EE]">
                    ₹{(Number(item.price) * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 space-y-4 border-t border-slate-200 pt-5 dark:border-white/10">
              <div className="flex justify-between text-sm">
                <span className="text-slate-500 dark:text-[#94A3B8]">
                  Subtotal
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

              <div className="flex justify-between border-t border-dashed border-slate-200 pt-5 dark:border-white/10">
                <span className="font-bold text-slate-900 dark:text-white">
                  Total Due
                </span>

                <span className="text-xl font-extrabold text-[#0066FF] dark:text-[#22D3EE]">
                  ₹{Number(cartTotal).toFixed(2)}
                </span>
              </div>
            </div>

            <div className="mt-6 flex items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-3 dark:border-emerald-500/10 dark:bg-emerald-500/5">
              <ShieldCheck
                size={19}
                className="mt-0.5 shrink-0 text-emerald-600 dark:text-emerald-400"
              />

              <div>
                <p className="text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                  Safe & Secure
                </p>
                <p className="mt-1 text-xs leading-relaxed text-slate-500 dark:text-[#94A3B8]">
                  Your order details are handled securely.
                </p>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
