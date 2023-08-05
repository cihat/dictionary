"use client"

import { ChevronLeft } from "lucide-react";
import { useRouter } from 'next/navigation';

export default function BackButton() {
  const router = useRouter()

  return (
    <button onClick={() => router.back()} className="my-8 block mb-4">
      <ChevronLeft width={26} height={26} />
    </button>
  )
}