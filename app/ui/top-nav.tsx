"use client";

import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "@/app/context/cart";
import { CartContextType } from "@/app/lib/definitions";

export default function TopNav() {
  const {
    state: { totalQuantity },
  } = useContext(CartContext) as CartContextType;

  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/cart">Cart: {totalQuantity}</Link>
    </div>
  );
}
