import { Suspense } from "react";
import Image from "next/image";
import { getProductById } from "@/app/lib/actions";
import AddToCartButton from "@/app/ui/products/add-to-cart-button";
import BackButton from "@/app/ui/products/back-button";
import { formatCurrency } from "@/app/lib/utils";

async function ProductById({ id }: { id: string }) {
  const product = await getProductById(id);

  return (
    <div>
      <div className="flex justify-center">
        <Image
          alt={product.name}
          src={product.image}
          width={400}
          height={300}
        />
      </div>
      <h1 className="text-center text-2xl">{product.name}</h1>
      <p>{formatCurrency(product.price)}</p>
      <p>{product.description}</p>
      <p>Nutrition: {product.calorie} calories</p>
      <AddToCartButton product={product} />
    </div>
  );
}

export default function Page({ params: { id } }: { params: { id: string } }) {
  return (
    <div>
      <BackButton />
      <Suspense fallback={<div>Loading...</div>}>
        <div className="flex justify-center items-center">
          <ProductById id={id} />
        </div>
      </Suspense>
    </div>
  );
}
