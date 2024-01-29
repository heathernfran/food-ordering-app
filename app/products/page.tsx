import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { getAllProducts } from "@/app/lib/actions";
import type { Product } from "@/app/lib/definitions";
import { formatCurrency } from "@/app/lib/utils";

async function Products() {
  const { products } = await getAllProducts();

  return (
    <div className="grid gap-4 grid-template-columns">
      {products.map((product: Product) => (
        <div key={product.id} className="rounded-lg bg-slate-800">
          <Link href={`/products/${product.id}`}>
            <div className="">
              <Image
                alt={product.name}
                src={product.image}
                width={400}
                height={300}
                style={{ objectFit: "cover" }}
                className="rounded-t-lg w-[400px] h-[300px]"
              />
            </div>
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
      <Suspense fallback={<div>Loading...</div>}>
        <Products />
      </Suspense>
    </>
  );
}
