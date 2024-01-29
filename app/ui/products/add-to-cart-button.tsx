"use client";

import { CartContext } from "@/app/context/cart";
import type {
  CartContextType,
  NewProduct,
  Product,
} from "@/app/lib/definitions";
import { useContext } from "react";
import Toast from "@/app/ui/products/toast";
import { toast } from "react-toastify";

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
    toast(`Added ${name} to the cart!`);
  }

  return (
    <div className="flex justify-center">
      <button
        onClick={handleClick}
        className="bg-slate-600 px-4 py-2 rounded-full font-bold"
      >
        Add to Cart
      </button>
      <Toast />
    </div>
  );
}
