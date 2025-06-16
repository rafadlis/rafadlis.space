import * as React from "react"
import Link from "next/link"
import {
  ArrowLeft,
  Desktop,
  GitBranch,
  Globe,
  Lock,
} from "@phosphor-icons/react/dist/ssr"
import { type Project as ProjectType } from "@/lib/data-project"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

function Project({ className, ...props }: React.ComponentProps<"article">) {
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

function ProjectHeader({
  className,
  ...props
}: React.ComponentProps<"header">) {
  return (
    <header
      className={cn("mb-8 flex flex-col items-start gap-6", className)}
      {...props}
    />
  )
}

function ProjectBackLink({
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

function ProjectTitle({ className, ...props }: React.ComponentProps<"h1">) {
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

function ProjectMeta({
  status,
  version,
  category,
  className,
  ...props
}: React.ComponentProps<"div"> &
  Pick<ProjectType, "status" | "version" | "category">) {
  const statusStyles: Record<ProjectType["status"], string> = {
    completed:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    "in-progress":
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    planned: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200",
    dropped: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
    growing:
      "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
  }

  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground",
        className
      )}
      {...props}
    >
      <span
        className={cn(
          "inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-xs font-medium capitalize",
          statusStyles[status]
        )}
      >
        {status.replace("-", " ")}
      </span>
      <span className="font-mono text-xs">{version}</span>
      <span className="text-xs">{category.name}</span>
    </div>
  )
}

function ProjectAttributes({
  isPrivate,
  isOpenSource,
  className,
}: Pick<ProjectType, "isPrivate" | "isOpenSource"> & { className?: string }) {
  if (!isPrivate && !isOpenSource) {
    return null
  }

  return (
    <div className={cn("flex items-center gap-4 text-sm", className)}>
      {isPrivate ? (
        <span className="inline-flex items-center gap-1.5">
          <Lock weight="duotone" />
          Private Project
        </span>
      ) : null}
      {isOpenSource ? (
        <span className="inline-flex items-center gap-1.5">
          <GitBranch weight="duotone" />
          Open Source
        </span>
      ) : null}
    </div>
  )
}

function ProjectLinks({
  urls,
  className,
}: {
  urls: ProjectType["urls"]
  className?: string
}) {
  if (!urls || (!urls.prod && !urls.demo)) {
    return null
  }

  return (
    <div className={cn("flex flex-wrap items-center gap-2", className)}>
      {urls.prod && (
        <Button asChild variant="outline" size="sm">
          <Link href={urls.prod} target="_blank" rel="noopener noreferrer">
            <Globe className="mr-2 size-4" />
            Visit Live Site
          </Link>
        </Button>
      )}
      {urls.demo && (
        <Button asChild variant="outline" size="sm">
          <Link href={urls.demo} target="_blank" rel="noopener noreferrer">
            <Desktop className="mr-2 size-4" />
            View Demo
          </Link>
        </Button>
      )}
    </div>
  )
}

function ProjectTechStack({
  tech,
  className,
}: {
  tech: ProjectType["tech"]
  className?: string
}) {
  return (
    <div className={cn("flex flex-col gap-3", className)}>
      <h3 className="font-semibold tracking-tight text-foreground">
        Technologies Used
      </h3>
      <div className="flex flex-wrap gap-2">
        {tech.map((t) => (
          <div
            key={t.name}
            className="flex items-center rounded-md border bg-muted/50 px-2.5 py-1"
          >
            <p className="text-xs font-medium text-muted-foreground">
              {t.name}
            </p>
            {t.version && (
              <span className="ml-1.5 font-mono text-xs text-muted-foreground/80">
                v{t.version.replace(/[v^]/g, "")}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

function ProjectContent({ className, ...props }: React.ComponentProps<"main">) {
  return (
    <main
      className={cn("prose prose-zinc dark:prose-invert max-w-none", className)}
      {...props}
    />
  )
}

function ProjectParagraph({ className, ...props }: React.ComponentProps<"p">) {
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

export {
  Project,
  ProjectHeader,
  ProjectBackLink,
  ProjectTitle,
  ProjectMeta,
  ProjectAttributes,
  ProjectLinks,
  ProjectTechStack,
  ProjectContent,
  ProjectParagraph,
}
