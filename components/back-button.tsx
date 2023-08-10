"use client"

import { ChevronLeft } from "lucide-react";
import { useRouter } from 'next/navigation';

type BackButtonProps = {
  href?: string
}

export default function BackButton({ href }: BackButtonProps = {}) {
  const router = useRouter()

  return (
    <button
      className="my-8 block mb-4"
      onClick={() => href ? router.push(href) : router.back()}
    >
      <ChevronLeft width={26} height={26} />
    </button>
  )
}
