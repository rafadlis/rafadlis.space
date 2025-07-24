"use client"

import { Button } from "@/components/ui/button"
import { Printer } from "@phosphor-icons/react/dist/ssr"
import { useRef } from "react"
import { useReactToPrint } from "react-to-print"
import "./page.css"

export default function BusinessCard() {
  const frontCardRef = useRef<HTMLDivElement>(null)
  const backCardRef = useRef<HTMLDivElement>(null)

  const handlePrintFront = useReactToPrint({
    contentRef: frontCardRef,
  })

  const handlePrintBack = useReactToPrint({
    contentRef: backCardRef,
  })

  return (
    <article className="flex flex-row flex-wrap gap-6 h-screen w-full items-center justify-center *:rounded-md *:print:rounded-none px-6 py-12">
      <div
        ref={frontCardRef}
        className="relative bg-foreground flex h-[56mm] w-[87mm] flex-col items-center justify-center shadow-2xl print:shadow-none print:rounded-none"
        style={{ fontFamily: "Roboto, sans-serif" }}
      >
        <h1 className="text-5xl font-medium text-background">r.</h1>
        <Button
          onClick={handlePrintFront}
          className="absolute -bottom-18 print:hidden max-md:hidden gap-2"
          variant={"default"}
          size={"icon"}
        >
          <Printer className="size-4" />
        </Button>
      </div>
      <div
        ref={backCardRef}
        className="relative h-[56mm] w-[87mm] shadow-2xl print:shadow-none print:rounded-none py-4 px-6 grid grid-cols-2 grid-rows-2"
        style={{ fontFamily: "Roboto, sans-serif" }}
      >
        <div>
          <h1 className="text-xs">
            me@rafadlis.space / https://rafadlis.space
          </h1>
        </div>
        <div className="flex flex-col items-end justify-start">
          <h1 className="text-xs">+62 8 998 001 772</h1>
        </div>
        <div className="col-span-2 flex flex-col items-start justify-end">
          <h1 className="text-xs">Software Engineer</h1>
          <p className="text-2xl font-black">R. R. Fadli Sadikin</p>
        </div>
        <Button
          onClick={handlePrintBack}
          className="absolute -bottom-18 justify-self-center print:hidden max-md:hidden gap-2"
          variant={"default"}
          size={"icon"}
        >
          <Printer className="size-4" />
        </Button>
      </div>
    </article>
  )
}
