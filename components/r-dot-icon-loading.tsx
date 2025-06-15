"use client"
import { RDotIcon } from "@/components/r-dot-icon"
import { cn } from "@/lib/utils"
import { animate, createScope, Scope, stagger, svg } from "animejs"
import { useEffect, useRef } from "react"

export default function RDotIconLoading({ className }: { className?: string }) {
  const root = useRef<HTMLDivElement | null>(null)
  const scope = useRef<Scope | null>(null)

  useEffect(() => {
    if (!root.current) return
    scope.current = createScope({ root: root.current }).add(() => {
      // Every anime.js instances declared here are now scopped to <div ref={root}>
      animate(svg.createDrawable(".line"), {
        draw: ["0 0", "0 1", "1 1"],
        ease: "inOutQuad",
        duration: 2000,
        delay: stagger(100),
        loop: true,
      })
    })
  }, [])

  return (
    <div ref={root}>
      <RDotIcon className={cn("size-24 ", className)} />
    </div>
  )
}
