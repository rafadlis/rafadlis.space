import { cn } from "@/lib/utils"

export function Slide({
  children,
  footer,
  className,
  ...props
}: {
  children: React.ReactNode
  footer?: React.ReactNode
  className?: string
} & Omit<React.ComponentProps<"section">, "className">) {
  return (
    <section
      className={cn(
        "flex flex-col justify-between w-full h-svh px-20 py-14 snap-start snap-always",
        className
      )}
      {...props}
    >
      {children}
      {footer && <div>{footer}</div>}
    </section>
  )
}

export function SlidesWrapper({
  children,
  className,
  ...props
}: {
  children: React.ReactNode
  className?: string
} & Omit<React.ComponentProps<"article">, "className">) {
  return (
    <article
      className={cn(
        className,
        "w-full h-svh overflow-y-scroll snap-y snap-mandatory print:min-h-svh print:overflow-y-visible print:snap-align-none print:snap-none"
      )}
      {...props}
    >
      {children}
    </article>
  )
}

export function SlideContent({
  children,
  className,
  ...props
}: {
  children: React.ReactNode
  className?: string
} & Omit<React.ComponentProps<"div">, "className">) {
  return (
    <div className={cn("flex-1", className)} {...props}>
      {children}
    </div>
  )
}

export function SlideHeading1({
  children,
  className,
  ...props
}: {
  children: React.ReactNode
  className?: string
} & Omit<React.ComponentProps<"h1">, "className">) {
  return (
    <h1 className={cn("text-4xl font-black", className)} {...props}>
      {children}
    </h1>
  )
}
