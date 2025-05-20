"use client";

import { Project, ProjectStatus, ProjectCategory } from "@/lib/data";
import { cn } from "@/lib/utils";
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
} from "@phosphor-icons/react/dist/ssr";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { createColumnHelper } from "@tanstack/react-table";
import { useState } from "react";
// Map category types to icons
const categoryIcons: Record<ProjectCategory, React.ReactNode> = {
  "web-app": <AppWindow className="h-4 w-4 text-muted-foreground" />,
  website: <Globe className="h-4 w-4 text-muted-foreground" />,
  "api-web": <PlugsConnected className="h-4 w-4 text-muted-foreground" />,
};

// Status configuration with icons and styling
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
};

// Status priority for sorting
const statusOrder: Record<ProjectStatus, number> = {
  "in-progress": 1,
  growing: 2,
  completed: 3,
  planned: 4,
  dropped: 5,
};

// Create a column helper for type safety
const columnHelper = createColumnHelper<Project>();

// Column definitions using the column helper
export const columns = [
  columnHelper.accessor("name", {
    header: "Project",
    cell: ({ row }) => {
      const project = row.original;
      return (
        <div className="group">
          <div className="flex items-center gap-1.5">
            {project.name}{" "}
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
      );
    },
    enableSorting: true,
  }),
  columnHelper.accessor("status", {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="px-0"
        >
          Status
          {column.getIsSorted() === "asc" ? (
            <CaretUp className="ml-2 h-4 w-4" />
          ) : column.getIsSorted() === "desc" ? (
            <CaretDown className="ml-2 h-4 w-4" />
          ) : null}
        </Button>
      );
    },
    cell: ({ row }) => {
      const status = row.getValue("status") as ProjectStatus;
      const config = statusConfigs[status];

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
      );
    },
    sortingFn: (rowA, rowB, columnId) => {
      const statusA = rowA.getValue(columnId) as ProjectStatus;
      const statusB = rowB.getValue(columnId) as ProjectStatus;

      return statusOrder[statusA] - statusOrder[statusB];
    },
  }),
  columnHelper.accessor("category", {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="px-0"
        >
          Category
          {column.getIsSorted() === "asc" ? (
            <CaretUp className="ml-2 h-4 w-4" />
          ) : column.getIsSorted() === "desc" ? (
            <CaretDown className="ml-2 h-4 w-4" />
          ) : null}
        </Button>
      );
    },
    cell: ({ row }) => {
      const category = row.original.category;
      return (
        <div className="flex items-center gap-1.5 w-fit whitespace-nowrap">
          {categoryIcons[category.icon as ProjectCategory]}
          {category.name}
        </div>
      );
    },
    sortingFn: (rowA, rowB) => {
      const categoryA = rowA.original.category.name;
      const categoryB = rowB.original.category.name;
      return categoryA.localeCompare(categoryB);
    },
  }),
  columnHelper.accessor("description", {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="px-0"
        >
          Description
          {column.getIsSorted() === "asc" ? (
            <CaretUp className="ml-2 h-4 w-4" />
          ) : column.getIsSorted() === "desc" ? (
            <CaretDown className="ml-2 h-4 w-4" />
          ) : null}
        </Button>
      );
    },
    cell: ({ row }) => {
      function Component() {
        const [expanded, setExpanded] = useState(false);
        return (
          <div
            className={cn(
              "text-muted-foreground max-w-prose text-wrap line-clamp-2 cursor-pointer",
              expanded && "line-clamp-none"
            )}
            onClick={() => setExpanded(!expanded)}
          >
            {row.original.description}
          </div>
        );
      }
      return <Component />;
    },
  }),
  columnHelper.accessor("tech", {
    header: "Tech",
    cell: ({ row }) => {
      const project = row.original;
      return (
        <div className="max-sm:hidden">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="sm">
                <span className="font-mono">{project.tech.length}</span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[400px]" side="left" align="center">
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
                      <TableHead className="w-[120px]">Technology</TableHead>
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
      );
    },
    sortingFn: (rowA, rowB) => {
      return rowA.original.tech.length - rowB.original.tech.length;
    },
  }),
];
