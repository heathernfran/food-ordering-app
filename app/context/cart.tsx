"use client";

import { ReactNode, createContext, useState } from "react";
import { Cart, NewProduct } from "@/app/lib/definitions";

export const CartContext = createContext({});

export default function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState({});

  function addToCart(product: NewProduct) {
    setCart((prevState) => ({
      ...prevState,
      [product.id]: product,
    }));
  }

  function deleteFromCart(id: string) {
    setCart((prevState: Cart) =>
      Object.keys(prevState)
        .filter((key) => key !== id)
        .reduce((nextState: Cart, key) => {
          nextState[key] = prevState[key];
          return nextState;
        }, {})
    );
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, deleteFromCart }}>
      {children}
    </CartContext.Provider>
  );
}
