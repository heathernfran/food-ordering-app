"use server";

import { Product } from "@/app/lib/definitions";

export async function getAllProducts() {
  try {
    const response = await fetch(
      `https://burgerhub00.github.io/data/products.json`
    );
    return await response.json();
  } catch (error) {
    throw new Error(`Failed to getAllProducts`);
  }
}

export async function getProductById(id: string) {
  try {
    const { products } = await getAllProducts();
    return products.find((product: Product) => id === product.id);
  } catch (error) {
    throw new Error(`Failed to getProductById`);
  }
}
