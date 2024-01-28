"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button onClick={() => router.back()} className="px-4 py-2 text-xl">
      Go Back
    </button>
  );
}
