import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { getAllProducts } from "@/app/lib/actions";
import type { Product } from "@/app/lib/definitions";
import { formatCurrency } from "@/app/lib/utils";

async function Products() {
  const { products } = await getAllProducts();

  return (
    <div>
      {products.map((product: Product) => (
        <Link href={`/products/${product.id}`} key={product.id}>
          <Image
            alt={product.name}
            src={product.image}
            width={400}
            height={300}
          />
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>{formatCurrency(product.price)}</p>
        </Link>
      ))}
    </div>
  );
}

export default async function Page() {
  return (
    <>
      <h1>All Products</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Products />
      </Suspense>
    </>
  );
}
