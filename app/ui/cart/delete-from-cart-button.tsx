"use client";

import { useContext } from "react";
import { CartContext } from "@/app/context/cart";
import type { CartContextType } from "@/app/lib/definitions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

export default function DeleteFromCartButton({ id }: { id: string }) {
  const { deleteFromCart } = useContext(CartContext) as CartContextType;

  function handleClick() {
    deleteFromCart(id);
  }

  return (
    <button onClick={handleClick} className="inline-block p-2">
      <FontAwesomeIcon icon={faTrashCan} />
    </button>
  );
}
