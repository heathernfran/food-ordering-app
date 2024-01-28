import { Suspense } from "react";
import Image from "next/image";
import { getProductById } from "@/app/lib/actions";

async function ProductById({ id }: { id: string }) {
  const product = await getProductById(id);

  return (
    <div>
      <Image alt={product.name} src={product.image} width={400} height={300} />
      <h1>{product.name}</h1>
      <p>{product.price}</p>
      <p>{product.description}</p>
      <p>Nutrition: {product.calorie}</p>
    </div>
  );
}

export default function Page({ params: { id } }: { params: { id: string } }) {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <ProductById id={id} />
      </Suspense>
    </div>
  );
}
