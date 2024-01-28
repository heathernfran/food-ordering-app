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
    <div className="flex justify-between items-center bg-slate-900 h-12">
      <div className="flex flex-row-reverse mx-10">
        <Link href="/">Home</Link>
        <Link href="/products">
          <span className="text-green-300 font-bold">Burgers</span>
        </Link>
      </div>
      <div className="flex flex-row mx-10">
        <Link href="/cart">
          Cart{" "}
          <span className="absolute top-[5px] right-[10px] size-[25px] rounded-[50%] text-center bg-green-300 text-black">
            {totalQuantity}
          </span>
        </Link>
      </div>
    </div>
  );
}
