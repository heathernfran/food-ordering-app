import type { Cart, ProductInCart } from "@/app/lib/definitions";

export function calculateQuantity(cart: Cart, id: string) {
  if (cart.hasOwnProperty(id)) {
    return cart[id].quantity + 1;
  }
  return 1;
}

export function calculateTotalValues(
  cart: Record<string, ProductInCart>,
  property: keyof ProductInCart
): number {
  return Object.values(cart).reduce((total, currentObject) => {
    total += Number(currentObject[property]);
    return total;
  }, 0);
}

export function formatCurrency(amount: number) {
  return (amount / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}
