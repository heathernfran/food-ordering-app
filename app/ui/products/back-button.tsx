"use client";

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button onClick={() => router.back()} className="px-4 py-2 text-xl">
      <FontAwesomeIcon icon={faArrowLeft} />
      Go Back
    </button>
  );
}
