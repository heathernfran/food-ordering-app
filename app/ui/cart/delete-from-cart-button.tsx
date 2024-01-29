"use client";

import { useCart } from "@/app/context/cart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

export default function DeleteFromCartButton({ id }: { id: string }) {
  const { deleteFromCart } = useCart();

  function handleClick() {
    deleteFromCart(id);
  }

  return (
    <button onClick={handleClick} className="inline-block p-2">
      <FontAwesomeIcon icon={faTrashCan} />
    </button>
  );
}
