import { getAllProducts } from "@/app/lib/actions";
import AllProducts from "@/app/ui/products/all-products";

export default async function Page() {
  const { products } = await getAllProducts();

  return (
    <div className="grid gap-4 grid-template-columns">
      <AllProducts products={products} />
    </div>
  );
}
