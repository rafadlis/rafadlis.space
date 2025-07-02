"use client"

import { cn } from "@/lib/utils"
import RDotIconLoading from "./r-dot-icon-loading"

export function LoadingPage({ fullPage = false }: { fullPage?: boolean }) {
  return (
    <section
      className={cn(
        "flex items-center justify-center h-full",
        fullPage && "h-svh"
      )}
    >
      <RDotIconLoading className="size-10" />
    </section>
  )
}
