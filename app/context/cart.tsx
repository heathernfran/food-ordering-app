"use client";

import { ReactNode, createContext, useReducer } from "react";
import type {
  Cart,
  CartAction,
  CartState,
  NewProduct,
} from "@/app/lib/definitions";

const initialState = {
  cart: {},
};

function cartReducer(state: CartState, action: CartAction) {
  switch (action.type) {
    case "ADD_PRODUCT":
      const quantity = calculateQuantity(action.product.id, state.cart);
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
      const { id } = action;
      const nextCart = Object.entries(state.cart)
        .filter(([key]) => key !== id)
        .reduce((nextState: Cart, [key, value]) => {
          nextState[key] = value;
          return nextState;
        }, {});
      return {
        ...state,
        cart: nextCart,
      };
    default:
      throw Error(`Unknown action: ${action}`);
  }
}

export const CartContext = createContext({});

export default function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  function addToCart(product: NewProduct) {
    dispatch({
      type: "ADD_PRODUCT",
      product,
    });
  }

  function deleteFromCart(id: string) {
    dispatch({
      type: "DELETE_PRODUCT",
      id,
    });
  }

  return (
    <CartContext.Provider value={{ state, addToCart, deleteFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

function calculateQuantity(id: string, cart: Cart) {
  if (cart.hasOwnProperty(id)) {
    return cart[id].quantity + 1;
  }
  return 1;
}
