import Image from "next/image";
import type { NewProduct } from "@/app/lib/definitions";
import DeleteFromCartButton from "@/app/ui/cart/delete-from-cart-button";

export default function LineItem({ product }: { product: NewProduct }) {
  const { id, name, price, image } = product;

  return (
    <div>
      <Image alt={name} src={image} width={100} height={100} />
      <h2>Name: {name}</h2>
      <p>Price: {price}</p>
      <DeleteFromCartButton id={id} />
    </div>
  );
}
