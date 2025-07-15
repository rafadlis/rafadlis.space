"use client"

import { Button } from "./ui/button"
import { useRouter } from "next/navigation"

export function BackButton({
  children,
  ...props
}: { children: React.ReactNode } & React.ComponentProps<typeof Button>) {
  const router = useRouter()
  return (
    <Button {...props} onClick={() => router.back()}>
      {children}
    </Button>
  )
}
