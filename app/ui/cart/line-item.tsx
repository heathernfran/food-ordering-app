import Image from "next/image";
import type { ProductInCart } from "@/app/lib/definitions";
import DeleteFromCartButton from "@/app/ui/cart/delete-from-cart-button";
import { formatCurrency } from "@/app/lib/utils";

export default function LineItem({ product }: { product: ProductInCart }) {
  const { id, name, image, cost, quantity } = product;

  return (
    <div data-testid="line-item" className="flex justify-between items-center">
      <div>
        <Image
          alt={name}
          src={image}
          width={100}
          height={100}
          className="inline-block rounded-full"
        />
        <h2 className="inline-block m-2">{name}</h2>
        <p className="inline-block">{`(${quantity})`}</p>
      </div>
      <div>
        <p className="inline-block m-2">{formatCurrency(cost)}</p>
        <DeleteFromCartButton id={id} />
      </div>
    </div>
  );
}
