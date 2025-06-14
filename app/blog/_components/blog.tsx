import * as React from "react"
import Link from "next/link"
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr"
import { type PostAuthor } from "@/lib/authors"

import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"

function Blog({ className, ...props }: React.ComponentProps<"article">) {
  return (
    <article className={cn("mx-auto max-w-3xl py-12", className)} {...props} />
  )
}

function BlogHeader({ className, ...props }: React.ComponentProps<"header">) {
  return (
    <header
      className={cn("mb-8 flex flex-col items-start gap-8", className)}
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

function BlogTitle({ className, ...props }: React.ComponentProps<"h1">) {
  return (
    <h1
      className={cn(
        "text-5xl font-extrabold leading-tight tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl",
        className
      )}
      {...props}
    />
  )
}

function BlogMeta({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
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
      <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
        {Object.entries(authorsByRole).map(([role, roleAuthors]) => (
          <div key={role} className="flex items-center gap-3">
            <div className="flex -space-x-4 rtl:space-x-reverse">
              {roleAuthors.map((author) => (
                <Popover key={author.name}>
                  <PopoverTrigger asChild>
                    <Link
                      href={author.url || "/"}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={author.name}
                      className="focus-visible:outline-none"
                    >
                      <Avatar className="size-10 border-2 border-background ring-1 ring-border transition-transform hover:-translate-y-0.5">
                        <AvatarImage alt={author.name} src={author.image} />
                        <AvatarFallback>
                          {author.name
                            .split(" ")
                            .map((chunk) => chunk[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                    </Link>
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
                                  <a
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    <social.icon
                                      className="size-5"
                                      aria-label={social.name}
                                    />
                                  </a>
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
      className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
      {...props}
    />
  )
}

export {
  Blog,
  BlogHeader,
  BlogBackLink,
  BlogTitle,
  BlogMeta,
  BlogAuthors,
  BlogContent,
  BlogParagraph,
}
