"use client";

import Link from "next/link";
import { useCart } from "@/app/context/cart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHouse } from "@fortawesome/free-solid-svg-icons";

export default function TopNav() {
  const {
    state: { totalQuantity },
  } = useCart();

  return (
    <div className="flex justify-between items-center sticky top-[0] bg-slate-900 h-12">
      <div className="flex flex-row-reverse mx-10">
        <Link href="/">
          <FontAwesomeIcon icon={faHouse} />
        </Link>
        <Link href="/products">
          <span className="text-green-300 font-bold">Burgers</span>
        </Link>
      </div>
      <div className="flex flex-row mx-10">
        <Link href="/cart">
          <FontAwesomeIcon icon={faCartShopping} />{" "}
          <span className="absolute top-0 right-[20px] size-[25px] rounded-[50%] text-center bg-green-300 text-black">
            {totalQuantity}
          </span>
        </Link>
      </div>
    </div>
  );
}
