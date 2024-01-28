"use client";

import { CartContext } from "@/app/context/cart";
import type { CartContextType, NewProduct, Product } from "@/app/lib/definitions";
import { useContext } from "react";

export default function AddToCartButton({ product }: { product: Product }) {
  const { addToCart } = useContext(CartContext) as CartContextType;

  function handleClick() {
    const { id, name, price, image } = product;
    const newProduct: NewProduct = {
      id,
      name,
      price,
      image,
    };
    addToCart(newProduct);
  }

  return <button onClick={handleClick}>Add to Cart</button>;
}
