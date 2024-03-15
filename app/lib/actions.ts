"use server";

import { Product } from "@/app/lib/definitions";
import { sql } from "@vercel/postgres";

export async function getAllProducts() {
  try {
    const data = await sql<Product>`SELECT * FROM products`;
    return data.rows;
  } catch (error) {
    throw new Error("Failed to getAllProducts", error as Error);
  }
}

export async function getProductById(id: string) {
  try {
    const data = await sql<Product>`
      SELECT * FROM products
      WHERE id = ${id}
    `;
    return data.rows[0];
  } catch (error) {
    throw new Error("Failed to getProductById", error as Error);
  }
}
