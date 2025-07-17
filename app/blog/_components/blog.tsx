import * as React from "react"
import Link from "next/link"
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr"
import { type PostAuthor } from "@/lib/authors"
import { type Blog as BlogType } from "@/lib/data-blog"
import { format } from "date-fns"

import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { BackButton } from "@/components/back-button"

function Blog({ className, ...props }: React.ComponentProps<"article">) {
  return (
    <article
      className={cn(
        "mx-auto w-full max-w-prose px-4 py-8 sm:px-6 sm:py-12",
        className
      )}
      {...props}
    />
  )
}

function BlogHeader({ className, ...props }: React.ComponentProps<"header">) {
  return (
    <header
      className={cn("mb-8 flex flex-col items-start gap-6", className)}
      {...props}
    />
  )
}

function BlogBackLink({
  className,
  children,
  ...props
}: React.ComponentProps<typeof Link>) {
  return (
    <Link
      className={cn(
        "print:hidden",
        "flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground",
        className
      )}
      {...props}
    >
      <ArrowLeft />
      {children}
    </Link>
  )
}

function BlogBackButton({
  className,
  children,
  ...props
}: React.ComponentProps<typeof BackButton>) {
  return (
    <BackButton className={cn("print:hidden", className)} {...props}>
      {children}
    </BackButton>
  )
}

function BlogTitle({ className, ...props }: React.ComponentProps<"h1">) {
  return (
    <h1
      className={cn(
        "text-4xl font-extrabold leading-tight tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl",
        className
      )}
      {...props}
    />
  )
}

function BlogMeta({
  date,
  className,
  ...props
}: React.ComponentProps<"div"> & { date: BlogType["publishedAt"] }) {
  return (
    <div className={cn("text-sm text-muted-foreground", className)} {...props}>
      <time dateTime={format(date, "yyyy-MM-dd")}>
        {format(date, "EEEE, MMMM d, yyyy")}
      </time>
    </div>
  )
}

function BlogAuthors({
  authors,
  className,
}: {
  authors: PostAuthor[]
  className?: string
}) {
  const authorsByRole = authors.reduce((acc, author) => {
    const role = author.role || "Author"
    if (!acc[role]) {
      acc[role] = []
    }
    acc[role].push(author)
    return acc
  }, {} as Record<string, PostAuthor[]>)

  const formatNames = (names: string[]) => {
    if (names.length === 1) {
      return names[0]
    }
    if (names.length === 2) {
      return names.join(" and ")
    }
    return `${names.slice(0, -1).join(", ")}, and ${names.slice(-1)}`
  }

  return (
    <div className={cn("flex w-full flex-col gap-4", className)}>
      <p className="text-sm text-muted-foreground">Contributors:</p>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-4 sm:gap-x-6">
        {Object.entries(authorsByRole).map(([role, roleAuthors]) => (
          <div key={role} className="flex items-center gap-3">
            <div className="flex -space-x-4 rtl:space-x-reverse">
              {roleAuthors.map((author) => (
                <Popover key={author.name}>
                  <PopoverTrigger asChild>
                    <Avatar className="size-10 border-2 border-background ring-1 ring-border transition-transform hover:-translate-y-0.5">
                      <AvatarImage alt={author.name} src={author.image} />
                      <AvatarFallback>
                        {author.name
                          .split(" ")
                          .slice(0, 2)
                          .map((chunk) => chunk[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                  </PopoverTrigger>
                  <PopoverContent className="w-80">
                    <div className="flex justify-between space-x-4">
                      <Avatar className="size-12">
                        <AvatarImage alt={author.name} src={author.image} />
                      </Avatar>
                      <div className="space-y-1">
                        <h4 className="text-sm font-semibold">{author.name}</h4>
                        <p className="text-sm">
                          {`The mind behind the project. Passionate about creating
                          elegant and efficient digital solutions.`}
                        </p>
                        {author.socials ? (
                          <div className="flex items-center pt-2">
                            <span className="text-xs text-muted-foreground">
                              Social Media
                            </span>
                            <div className="flex-1 border-t" />
                            <div className="flex gap-1">
                              {author.socials.map((social) => (
                                <Button
                                  key={social.name}
                                  variant="ghost"
                                  size="icon"
                                  className="size-8"
                                  asChild
                                >
                                  <Link
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    <social.icon
                                      className="size-5"
                                      aria-label={social.name}
                                    />
                                  </Link>
                                </Button>
                              ))}
                            </div>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              ))}
            </div>
            <div className="text-sm">
              <p className="font-semibold leading-none text-foreground">
                {formatNames(roleAuthors.map((author) => author.name))}
              </p>
              <p className="text-xs text-muted-foreground">{role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function BlogContent({ className, ...props }: React.ComponentProps<"main">) {
  return (
    <main
      className={cn("prose prose-zinc dark:prose-invert max-w-none", className)}
      {...props}
    />
  )
}

function BlogParagraph({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      className={cn(
        "leading-7 [&:not(:first-child)]:mt-6 text-justify",
        className
      )}
      {...props}
    />
  )
}

function BlogH1({ className, ...props }: React.ComponentProps<"h1">) {
  return (
    <h1
      className={cn(
        "font-heading mt-12 scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0 relative",
        className
      )}
      {...props}
    >
      {props.children}
      <span
        className="text-muted-foreground/30 inline md:absolute md:-left-8 md:top-0"
        aria-hidden="true"
      >
        {" "}
        #1
      </span>
    </h1>
  )
}

function BlogH2({ className, ...props }: React.ComponentProps<"h2">) {
  return (
    <h2
      className={cn(
        "font-heading mt-12 scroll-m-20 text-2xl font-semibold tracking-tight first:mt-0 relative",
        className
      )}
      {...props}
    >
      {props.children}
      <span
        className="text-muted-foreground/30 inline md:absolute md:-left-8 md:top-0"
        aria-hidden="true"
      >
        {" "}
        #2
      </span>
    </h2>
  )
}

function BlogH3({ className, ...props }: React.ComponentProps<"h3">) {
  return (
    <h3
      className={cn(
        "font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight relative",
        className
      )}
      {...props}
    >
      {props.children}
      <span
        className="text-muted-foreground/30 inline md:absolute md:-left-8 md:top-0"
        aria-hidden="true"
      >
        {" "}
        #3
      </span>
    </h3>
  )
}

function BlogH4({ className, ...props }: React.ComponentProps<"h4">) {
  return (
    <h4
      className={cn(
        "font-heading mt-8 scroll-m-20 text-lg font-semibold tracking-tight relative",
        className
      )}
      {...props}
    >
      {props.children}
      <span
        className="text-muted-foreground/30 inline md:absolute md:-left-8 md:top-0"
        aria-hidden="true"
      >
        {" "}
        #4
      </span>
    </h4>
  )
}

function BlogH5({ className, ...props }: React.ComponentProps<"h5">) {
  return (
    <h5
      className={cn(
        "mt-8 scroll-m-20 text-base font-semibold tracking-tight relative",
        className
      )}
      {...props}
    >
      {props.children}
      <span
        className="text-muted-foreground/30 inline md:absolute md:-left-8 md:top-0"
        aria-hidden="true"
      >
        {" "}
        #5
      </span>
    </h5>
  )
}

function BlogH6({ className, ...props }: React.ComponentProps<"h6">) {
  return (
    <h6
      className={cn(
        "font-heading mt-6 scroll-m-20 text-base font-semibold tracking-tight relative",
        className
      )}
      {...props}
    >
      {props.children}
      <span
        className="text-muted-foreground/30 inline md:absolute md:-left-8 md:top-0"
        aria-hidden="true"
      >
        {" "}
        #6
      </span>
    </h6>
  )
}

function BlogQuote({
  className,
  ...props
}: React.ComponentProps<"blockquote">) {
  return (
    <blockquote
      className={cn("mt-6 border-l-4 pl-6 italic", className)}
      {...props}
    />
  )
}

function BlogCodeBlock({
  code,
  className,
  ...props
}: React.ComponentProps<"pre"> & { code: string }) {
  return (
    <pre
      className={cn(
        "mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-lg border bg-zinc-900 py-4 dark:bg-zinc-900",
        className
      )}
      {...props}
    >
      <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm text-white">
        {code}
      </code>
    </pre>
  )
}

function BlogCode({ className, ...props }: React.ComponentProps<"code">) {
  return (
    <code
      className={cn(
        "relative rounded bg-muted-foreground/15 px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
        className
      )}
      {...props}
    />
  )
}

function BlogLink({ className, ...props }: React.ComponentProps<typeof Link>) {
  return (
    <Link
      className={cn(
        "underline-offset-4 underline hover:decoration-primary",
        className
      )}
      {...props}
    />
  )
}

function BlogReferences({
  references,
  className,
}: {
  references: { title: string; url: string }[]
  className?: string
}) {
  if (!references?.length) return null

  return (
    <div className={cn("mt-12 pt-6 border-t", className)}>
      <h2 className="scroll-m-20 text-sm text-muted-foreground italic">
        References
      </h2>
      <ul className="my-1 [&>li]:mt-2 [&>li]:text-sm">
        {references.map((reference, index) => (
          <li key={index}>
            <BlogLink
              href={reference.url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline-offset-4 hover:underline no-underline"
            >
              {reference.title}
            </BlogLink>
          </li>
        ))}
      </ul>
    </div>
  )
}

export {
  Blog,
  BlogHeader,
  BlogBackLink,
  BlogBackButton,
  BlogTitle,
  BlogMeta,
  BlogAuthors,
  BlogContent,
  BlogParagraph,
  BlogH1,
  BlogH2,
  BlogH3,
  BlogH4,
  BlogH5,
  BlogH6,
  BlogQuote,
  BlogCodeBlock,
  BlogCode,
  BlogLink,
  BlogReferences,
}
