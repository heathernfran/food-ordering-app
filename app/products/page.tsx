import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { getAllProducts } from "@/app/lib/actions";
import type { Product } from "@/app/lib/definitions";
import { formatCurrency } from "@/app/lib/utils";

async function Products() {
  const { products } = await getAllProducts();

  return (
    <div className="grid grid-cols-4 gap-4">
      {products.map((product: Product) => (
        <div key={product.id} className="rounded-lg bg-slate-800">
          <Link href={`/products/${product.id}`}>
            <Image
              alt={product.name}
              src={product.image}
              width={400}
              height={300}
              className="rounded-t-lg"
            />
            <h2 className="font-bold">{product.name}</h2>
            <p>{formatCurrency(product.price)}</p>
            <p>{product.description}</p>
          </Link>
        </div>
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
