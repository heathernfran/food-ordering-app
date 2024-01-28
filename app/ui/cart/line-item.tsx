import Image from "next/image";
import type { ProductInCart } from "@/app/lib/definitions";
import DeleteFromCartButton from "@/app/ui/cart/delete-from-cart-button";

export default function LineItem({ product }: { product: ProductInCart }) {
  const { id, name, image, cost, quantity } = product;

  return (
    <div>
      <Image alt={name} src={image} width={100} height={100} />
      <h2>Name: {name}</h2>
      <p>Quantity: {quantity}</p>
      <p>Cost: {cost}</p>
      <DeleteFromCartButton id={id} />
    </div>
  );
}
