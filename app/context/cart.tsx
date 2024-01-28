"use client";

import { ReactNode, createContext, useReducer } from "react";
import type {
  Cart,
  CartAction,
  CartState,
  NewProduct,
  ProductInCart,
} from "@/app/lib/definitions";

const initialState = {
  cart: {},
  totalCost: 0,
  totalQuantity: 0,
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
      const nextCart = Object.entries(state.cart)
        .filter(([key]) => key !== action.id)
        .reduce((nextState: Cart, [key, value]) => {
          nextState[key] = value;
          return nextState;
        }, {});
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

function calculateQuantity(id: string, cart: Cart) {
  if (cart.hasOwnProperty(id)) {
    return cart[id].quantity + 1;
  }
  return 1;
}

function calculateTotalValues(
  cart: Record<string, ProductInCart>,
  property: keyof ProductInCart
): number {
  return Object.values(cart).reduce((total, currentObject) => {
    total += Number(currentObject[property]);
    return total;
  }, 0);
}
