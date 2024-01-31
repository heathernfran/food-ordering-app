"use client";

import { ReactNode, createContext, useContext, useReducer } from "react";
import type {
  CartAction,
  CartContextType,
  CartState,
  NewProduct,
} from "@/app/lib/definitions";
import {
  calculateQuantity,
  calculateTotalValues,
  deleteProductFromCart,
} from "@/app/lib/utils";

const initialState = {
  cart: {},
  totalCost: 0,
  totalQuantity: 0,
};

function cartReducer(state: CartState, action: CartAction) {
  switch (action.type) {
    case "ADD_PRODUCT":
      const quantity = calculateQuantity(state.cart, action.product.id);
      const cost = action.product.price * quantity;
      const nextProduct = {
        [action.product.id]: {
          ...action.product,
          cost,
          quantity,
        },
      };
      return {
        ...state,
        cart: { ...state.cart, ...nextProduct },
      };
    case "DELETE_PRODUCT":
      const nextCart = deleteProductFromCart(state.cart, action.id);
      return {
        ...state,
        cart: nextCart,
      };
    case "UPDATE_TOTALS":
      const nextTotalQuantity = calculateTotalValues(state.cart, "quantity");
      const nextTotalCost = calculateTotalValues(state.cart, "cost");
      return {
        ...state,
        totalCost: nextTotalCost,
        totalQuantity: nextTotalQuantity,
      };
    default:
      throw Error("Unknown action", action);
  }
}

export const CartContext = createContext({});

export function useCart() {
  return useContext(CartContext) as CartContextType;
}

export default function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  function addToCart(product: NewProduct) {
    dispatch({
      type: "ADD_PRODUCT",
      product,
    });
    dispatch({ type: "UPDATE_TOTALS" });
  }

  function deleteFromCart(id: string) {
    dispatch({
      type: "DELETE_PRODUCT",
      id,
    });
    dispatch({ type: "UPDATE_TOTALS" });
  }

  return (
    <CartContext.Provider value={{ state, addToCart, deleteFromCart }}>
      {children}
    </CartContext.Provider>
  );
}
