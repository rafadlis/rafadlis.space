"use client"

import { Project, ProjectStatus, ProjectCategory } from "@/lib/data-project"
import { cn } from "@/lib/utils"
import {
  CheckCircle,
  CircleNotch,
  Queue,
  X,
  ArrowCircleUp,
  Lock,
  CaretUp,
  CaretDown,
  AppWindow,
  Globe,
  PlugsConnected,
  ArrowSquareOut,
  ArrowRight,
} from "@phosphor-icons/react/dist/ssr"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { createColumnHelper } from "@tanstack/react-table"
import { useMemo, useState } from "react"
import Link from "next/link"

const categoryIcons: Record<ProjectCategory, React.ReactNode> = {
  "Web App": <AppWindow className="h-4 w-4 text-muted-foreground" />,
  Website: <Globe className="h-4 w-4 text-muted-foreground" />,
  "Web API": <PlugsConnected className="h-4 w-4 text-muted-foreground" />,
}

const statusConfigs: Record<
  ProjectStatus,
  { icon: React.ReactNode; text: string; classes: string; description: string }
> = {
  completed: {
    icon: <CheckCircle weight="fill" className="h-3.5 w-3.5 text-success" />,
    text: "Completed",
    classes: "border-success text-success bg-success/10",
    description:
      "Project has been completed and is no longer actively developed",
  },
  "in-progress": {
    icon: (
      <CircleNotch
        weight="fill"
        className="h-3.5 w-3.5 text-warning animate-spin"
      />
    ),
    text: "In Progress",
    classes: "border-warning text-warning bg-warning/10",
    description: "Project is currently under active development",
  },
  planned: {
    icon: <Queue weight="fill" className="h-3.5 w-3.5 text-muted-foreground" />,
    text: "Planned",
    classes: "border-muted text-muted-foreground bg-muted/10",
    description: "Project is planned but development hasn't started yet",
  },
  dropped: {
    icon: <X weight="fill" className="h-3.5 w-3.5 text-destructive" />,
    text: "Dropped",
    classes: "border-destructive text-destructive bg-destructive/10",
    description: "Project has been discontinued or abandoned",
  },
  growing: {
    icon: <ArrowCircleUp weight="fill" className="h-3.5 w-3.5 text-primary" />,
    text: "Growing",
    classes: "border-primary text-primary bg-primary/10",
    description:
      "Project is completed but continues to receive updates and improvements",
  },
}

const statusOrder: Record<ProjectStatus, number> = {
  "in-progress": 1,
  growing: 2,
  completed: 3,
  planned: 4,
  dropped: 5,
}

const columnHelper = createColumnHelper<Project>()

export const useProjectTableColumns = () => {
  const columns = useMemo(
    () => [
      columnHelper.accessor("name", {
        header: "Project",
        cell: ({ row }) => {
          const project = row.original
          const projectUrl = `/project/${project.slug}`
          const hasExternalUrls = project.urls?.demo || project.urls?.prod

          return (
            <div className="group">
              <div className="flex items-center gap-1.5">
                {hasExternalUrls ? (
                  <Popover>
                    <PopoverTrigger asChild>
                      <Link
                        href={projectUrl}
                        className="font-medium hover:underline cursor-pointer"
                      >
                        {project.name}
                      </Link>
                    </PopoverTrigger>
                    <PopoverContent
                      className="text-sm space-y-3 w-auto"
                      side="right"
                      align="start"
                      alignOffset={-10}
                    >
                      {project.urls?.prod && (
                        <div className="relative border border-border/50 rounded-md py-3 px-4 flex items-center gap-2 group hover:bg-muted/50 transition-colors duration-200">
                          <div>
                            <p>Production URL</p>
                            <p className="text-muted-foreground">
                              see the real project in production
                            </p>
                          </div>
                          <ArrowSquareOut className="shrink-0 text-muted-foreground group-hover:text-foreground group-hover:animate-pulse" />
                          <Link
                            href={project.urls.prod}
                            target="_blank"
                            className="absolute inset-0"
                          />
                        </div>
                      )}
                      {project.urls?.demo && (
                        <div className="relative border border-border/50 rounded-md py-3 px-4 flex items-center gap-2 group hover:bg-muted/50 transition-colors duration-200">
                          <div>
                            <p>Demo URL</p>
                            <p className="text-muted-foreground">
                              see the project in action
                            </p>
                          </div>
                          <ArrowSquareOut className="shrink-0 text-muted-foreground group-hover:text-foreground group-hover:animate-pulse" />
                          <Link
                            href={project.urls.demo}
                            target="_blank"
                            className="absolute inset-0"
                          />
                        </div>
                      )}
                    </PopoverContent>
                  </Popover>
                ) : (
                  <Link
                    href={projectUrl}
                    className="font-medium hover:underline"
                  >
                    {project.name}
                  </Link>
                )}
                {project.isPrivate && (
                  <TooltipProvider delayDuration={0}>
                    <Tooltip>
                      <TooltipTrigger>
                        <Lock
                          weight="bold"
                          className="h-3 w-3 text-muted-foreground/40 group-hover:text-muted-foreground"
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="text-sm">This project is private</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                )}
              </div>
              <div className="w-fit whitespace-nowrap text-xs text-muted-foreground/70 font-mono">
                {project.version}
              </div>
            </div>
          )
        },
        enableSorting: true,
      }),
      columnHelper.accessor("status", {
        header: ({ column }) => {
          return (
            <Button
              variant="ghost"
              onClick={() =>
                column.toggleSorting(column.getIsSorted() === "asc")
              }
              className="px-0"
            >
              Status
              {column.getIsSorted() === "asc" ? (
                <CaretUp className="ml-2 h-4 w-4" />
              ) : column.getIsSorted() === "desc" ? (
                <CaretDown className="ml-2 h-4 w-4" />
              ) : null}
            </Button>
          )
        },
        cell: ({ row }) => {
          const status = row.getValue("status") as ProjectStatus
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
          const statusA = rowA.getValue(columnId) as ProjectStatus
          const statusB = rowB.getValue(columnId) as ProjectStatus

          return statusOrder[statusA] - statusOrder[statusB]
        },
      }),
      columnHelper.accessor("category", {
        header: ({ column }) => {
          return (
            <Button
              variant="ghost"
              onClick={() =>
                column.toggleSorting(column.getIsSorted() === "asc")
              }
              className="px-0"
            >
              Category
              {column.getIsSorted() === "asc" ? (
                <CaretUp className="ml-2 h-4 w-4" />
              ) : column.getIsSorted() === "desc" ? (
                <CaretDown className="ml-2 h-4 w-4" />
              ) : null}
            </Button>
          )
        },
        cell: ({ row }) => {
          const category = row.getValue("category") as ProjectCategory
          return (
            <div className="flex items-center gap-1.5 w-fit whitespace-nowrap">
              {categoryIcons[category]}
              {category}
            </div>
          )
        },
        sortingFn: (rowA, rowB) => {
          const categoryA = rowA.original.category
          const categoryB = rowB.original.category
          return categoryA.localeCompare(categoryB)
        },
      }),
      columnHelper.accessor("description", {
        header: ({ column }) => {
          return (
            <Button
              variant="ghost"
              onClick={() =>
                column.toggleSorting(column.getIsSorted() === "asc")
              }
              className="px-0"
            >
              Description
              {column.getIsSorted() === "asc" ? (
                <CaretUp className="ml-2 h-4 w-4" />
              ) : column.getIsSorted() === "desc" ? (
                <CaretDown className="ml-2 h-4 w-4" />
              ) : null}
            </Button>
          )
        },
        cell: ({ row }) => {
          function Component() {
            const [expanded, setExpanded] = useState(false)
            return (
              <div
                className={cn(
                  "text-muted-foreground max-w-lg min-w-[300px] text-wrap line-clamp-2 cursor-pointer",
                  expanded && "line-clamp-none"
                )}
                onClick={() => setExpanded(!expanded)}
              >
                {row.original.description}
              </div>
            )
          }
          return <Component />
        },
      }),
      columnHelper.accessor("tech", {
        header: "Tech",
        cell: ({ row }) => {
          const project = row.original
          return (
            <div>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="cursor-pointer"
                  >
                    <span className="font-mono">{project.tech.length}</span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  className="w-[400px]"
                  side="left"
                  align="center"
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold">Stack Used</h4>
                      <span className="text-xs text-muted-foreground">
                        ({project.tech.length} technologies)
                      </span>
                    </div>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[120px]">
                            Technology
                          </TableHead>
                          <TableHead className="w-[100px]">Version</TableHead>
                          <TableHead>Purpose</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {project.tech.map((tech) => (
                          <TableRow key={tech.name}>
                            <TableCell className="font-medium">
                              {tech.name}
                            </TableCell>
                            <TableCell className="text-muted-foreground font-mono">
                              {tech.version || "-"}
                            </TableCell>
                            <TableCell className="text-muted-foreground">
                              {tech.purpose || "-"}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          )
        },
        sortingFn: (rowA, rowB) => {
          return rowA.original.tech.length - rowB.original.tech.length
        },
      }),
      columnHelper.display({
        id: "read-more",
        cell: ({ row }) => {
          const project = row.original
          return (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button asChild variant="ghost" size="icon">
                    <Link href={`/project/${project.slug}`}>
                      <ArrowRight className="size-4 text-muted-foreground" />
                      <span className="sr-only">Read More</span>
                    </Link>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Read More</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )
        },
      }),
    ],
    []
  )
  return columns
}
