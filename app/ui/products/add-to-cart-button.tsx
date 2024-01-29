"use client";

import { CartContext } from "@/app/context/cart";
import type {
  CartContextType,
  NewProduct,
  Product,
  ToastContextType,
} from "@/app/lib/definitions";
import { useContext } from "react";
import Toast from "@/app/ui/products/toast";
import { ToastContext } from "@/app/context/toast";

export default function AddToCartButton({ product }: { product: Product }) {
  const { addToCart } = useContext(CartContext) as CartContextType;
  const { showToast } = useContext(ToastContext) as ToastContextType;

  function handleClick() {
    const { id, name, price, image } = product;
    const newProduct: NewProduct = {
      id,
      name,
      price,
      image,
    };
    addToCart(newProduct);
    showToast();
  }

  return (
    <div className="flex justify-center">
      <button
        onClick={handleClick}
        className="bg-slate-600 px-4 py-2 rounded-full font-bold"
      >
        Add to Cart
      </button>
      <Toast message={`Added ${product.name} to the cart!`} />
    </div>
  );
}
