"use client";

import { useCart } from "@/app/context/cart";
import type { NewProduct, Product } from "@/app/lib/definitions";
import Toast from "@/app/ui/products/toast";
import { useToast } from "@/app/context/toast";

export default function AddToCartButton({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const { showToast } = useToast();

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
