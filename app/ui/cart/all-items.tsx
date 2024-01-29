"use client";

import { useCart } from "@/app/context/cart";
import LineItem from "@/app/ui/cart/line-item";
import { formatCurrency } from "@/app/lib/utils";

export default function AllItems() {
  const {
    state: { cart, totalCost },
  } = useCart();

  const entries = Object.entries(cart);

  if (entries.length <= 0) {
    return <p className="text-center text-xl">Cart is empty</p>;
  }

  return (
    <div>
      {entries.map(([key, product]) => (
        <LineItem key={key} product={product} />
      ))}
      <p data-testid="total-cost" className="text-center text-xl">
        Total: {formatCurrency(totalCost)}
      </p>
    </div>
  );
}
