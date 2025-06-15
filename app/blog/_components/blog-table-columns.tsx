"use client"

import { Blog, BlogStatus, BlogCategory } from "@/lib/data-blog"
import {
  CheckCircle,
  Archive,
  Pencil,
  CaretUp,
  CaretDown,
  Code,
  Flask,
  ChartBar,
  Calculator,
  Receipt,
  User,
} from "@phosphor-icons/react/dist/ssr"
import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { createColumnHelper } from "@tanstack/react-table"
import { useMemo } from "react"

const categoryIcons: Record<BlogCategory, React.ReactNode> = {
  "App Development": <Code className="h-4 w-4 text-muted-foreground" />,
  "Data Science": <Flask className="h-4 w-4 text-muted-foreground" />,
  Statistics: <ChartBar className="h-4 w-4 text-muted-foreground" />,
  Accounting: <Calculator className="h-4 w-4 text-muted-foreground" />,
  Tax: <Receipt className="h-4 w-4 text-muted-foreground" />,
  Personal: <User className="h-4 w-4 text-muted-foreground" />,
}

const statusConfigs: Record<
  BlogStatus,
  { icon: React.ReactNode; text: string; classes: string; description: string }
> = {
  published: {
    icon: <CheckCircle weight="fill" className="h-3.5 w-3.5 text-success" />,
    text: "Published",
    classes: "border-success text-success bg-success/10",
    description: "This blog post is live and visible to everyone.",
  },
  draft: {
    icon: <Pencil weight="fill" className="h-3.5 w-3.5 text-warning" />,
    text: "Draft",
    classes: "border-warning text-warning bg-warning/10",
    description: "This blog post is a draft and not yet published.",
  },
  archived: {
    icon: (
      <Archive weight="fill" className="h-3.5 w-3.5 text-muted-foreground" />
    ),
    text: "Archived",
    classes: "border-muted text-muted-foreground bg-muted/10",
    description:
      "This blog post is archived and no longer prominently displayed.",
  },
}

const statusOrder: Record<BlogStatus, number> = {
  published: 1,
  draft: 2,
  archived: 3,
}

const columnHelper = createColumnHelper<Blog>()

export const useBlogTableColumns = () => {
  const columns = useMemo(
    () => [
      columnHelper.accessor("title", {
        header: "Title",
        cell: ({ row }) => {
          const blog = row.original
          return <p className="font-medium">{blog.title}</p>
        },
      }),
      columnHelper.accessor("category", {
        header: "Category",
        cell: ({ row }) => {
          const category = row.getValue("category") as BlogCategory
          return (
            <div className="flex items-center gap-2">
              {categoryIcons[category]}
              <span className="text-muted-foreground">{category}</span>
            </div>
          )
        },
      }),
      columnHelper.accessor("publishedAt", {
        header: ({ column }) => {
          return (
            <Button
              variant="ghost"
              onClick={() =>
                column.toggleSorting(column.getIsSorted() === "asc")
              }
              className="px-0"
            >
              Published Date
              {column.getIsSorted() === "asc" ? (
                <CaretUp className="ml-2 h-4 w-4" />
              ) : column.getIsSorted() === "desc" ? (
                <CaretDown className="ml-2 h-4 w-4" />
              ) : null}
            </Button>
          )
        },
        cell: ({ row }) => {
          const publishedAt = row.getValue("publishedAt") as Date
          const formattedDate = publishedAt.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })
          return <div>{formattedDate}</div>
        },
      }),
      columnHelper.accessor("status", {
        header: "Status",
        cell: ({ row }) => {
          const status = row.getValue("status") as BlogStatus
          const config = statusConfigs[status]

          return (
            <HoverCard openDelay={50} closeDelay={50}>
              <HoverCardTrigger asChild>
                <div
                  className={`w-fit whitespace-nowrap flex items-center justify-center gap-1.5 rounded-full border px-3 py-1 text-center ${config.classes} cursor-help`}
                >
                  {config.icon}
                  {config.text}
                </div>
              </HoverCardTrigger>
              <HoverCardContent
                side="right"
                align="start"
                className="border-primary"
              >
                <p className="text-sm">{config.description}</p>
              </HoverCardContent>
            </HoverCard>
          )
        },
        sortingFn: (rowA, rowB, columnId) => {
          const statusA = rowA.getValue(columnId) as BlogStatus
          const statusB = rowB.getValue(columnId) as BlogStatus

          return statusOrder[statusA] - statusOrder[statusB]
        },
      }),
    ],
    []
  )
  return columns
}
