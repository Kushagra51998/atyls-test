"use client";
import { motion, AnimatePresence } from "framer-motion";
import { createContext, useContext, useState } from "react";

type Ttoast = {
  children: React.ReactNode;
};

// Creating Toast context to be used across app

type ToastContextType = {
  showToast: (message: string) => void;
};

const ToastContext = createContext<ToastContextType | null>(null);

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) throw new Error("useToast must be used inside ToastProvider");
  return context;
}

const CustomToastProvider = ({ children }: Ttoast) => {
  const [message, setMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setMessage(msg);
    setTimeout(() => setMessage(null), 2000);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className="p-6">
        <div className="fixed top-6 right-6 z-50">
          <AnimatePresence>
            {message && (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="px-4 py-3 rounded-lg bg-gray-900 text-white shadow-lg"
              >
                {message}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </ToastContext.Provider>
  );
};

export default CustomToastProvider;
