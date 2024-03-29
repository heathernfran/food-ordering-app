import Image from "next/image";
import { getProductBySlug } from "@/app/lib/actions";
import AddToCartButton from "@/app/ui/products/add-to-cart-button";
import BackButton from "@/app/ui/products/back-button";
import { formatCurrency } from "@/app/lib/utils";

export default async function Page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const product = await getProductBySlug(slug);

  return (
    <div>
      <BackButton />
      <div className="flex justify-center items-center">
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
      </div>
    </div>
  );
}
