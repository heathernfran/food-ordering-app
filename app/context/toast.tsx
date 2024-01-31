"use client";

import { ReactNode, createContext, useContext, useState } from "react";
import type { ToastContextType } from "@/app/lib/definitions";

export const ToastContext = createContext({});

export function useToast() {
  return useContext(ToastContext) as ToastContextType;
}

export default function ToastProvider({ children }: { children: ReactNode }) {
  const [isVisible, setIsVisible] = useState(false);

  function showToast() {
    setIsVisible(true);

    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }

  return (
    <ToastContext.Provider value={{ isVisible, setIsVisible, showToast }}>
      {children}
    </ToastContext.Provider>
  );
}
