"use client";

import { useContext } from "react";
import { CartContext } from "@/app/context/cart";
import type { CartContextType } from "@/app/lib/definitions";
import LineItem from "@/app/ui/cart/line-item";

export default function AllItems() {
  const {
    state: { cart },
  } = useContext(CartContext) as CartContextType;

  const entries = Object.entries(cart);

  return (
    <div>
      {entries.length > 0 ? (
        entries.map(([key, product]) => (
          <LineItem key={key} product={product} />
        ))
      ) : (
        <div>Cart is empty</div>
      )}
    </div>
  );
}
