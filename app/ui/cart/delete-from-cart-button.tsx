"use client";

import { useContext } from "react";
import { CartContext } from "@/app/context/cart";
import type { CartContextType } from "@/app/lib/definitions";

export default function DeleteFromCartButton({ id }: { id: string }) {
  const { deleteFromCart } = useContext(CartContext) as CartContextType;

  function handleClick() {
    deleteFromCart(id);
  }

  return <button onClick={handleClick}>Delete</button>;
}
