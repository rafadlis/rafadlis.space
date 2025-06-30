"use client"

import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
  SortingState,
} from "@tanstack/react-table"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { blogs } from "@/lib/data-blog"
import { useBlogTableColumns } from "./blog-table-columns"
import { useEffect, useMemo, useState } from "react"
import { BlogTableSkeleton } from "./blog-table-skeleton"
import {
  getFacetedMinMaxValues,
  getFacetedRowModel,
  getFacetedUniqueValues,
} from "@tanstack/react-table"

export function BlogTable() {
  const [isMounted, setIsMounted] = useState(false)
  const [sorting, setSorting] = useState<SortingState>([])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const columns = useBlogTableColumns()
  const data = useMemo(
    () =>
      blogs
        .filter((blog) => blog.status !== "archived")
        .sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime()),
    []
  )

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues(),
  })

  if (!isMounted) {
    return <BlogTableSkeleton />
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}
