"use client";

import { ReactNode, createContext, useState } from "react";

export const ToastContext = createContext({});

export default function ToastProvider({ children }: { children: ReactNode }) {
  const [isVisible, setIsVisible] = useState(false);

  function showToast() {
    setIsVisible(true);

    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    return () => clearTimeout(timer);
  }

  return (
    <ToastContext.Provider value={{ isVisible, setIsVisible, showToast }}>
      {children}
    </ToastContext.Provider>
  );
}
