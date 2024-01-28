"use client";

import type { Product } from "@/app/lib/definitions";

export default function AddToCartButton({ product }: { product: Product }) {
  function handleClick() {
    console.log("Clicked add to cart");
    console.log({ product });
  }

  return <button onClick={handleClick}>Add to Cart</button>;
}
