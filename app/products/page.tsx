import { getAllProducts } from "@/app/lib/actions";
import AllProducts from "@/app/ui/products/all-products";

export default async function Page() {
  const products = await getAllProducts();

  return <AllProducts products={products} />;
}
