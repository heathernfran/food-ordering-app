import Link from "next/link";

export default function TopNav() {
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/cart">Cart</Link>
    </div>
  );
}
