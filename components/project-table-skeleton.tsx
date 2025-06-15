import { Skeleton } from "@/components/ui/skeleton"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export function ProjectTableSkeleton() {
  const skeletonRows = Array(5).fill(0) // Adjust row count as needed
  const headers = ["Project", "Status", "Category", "Year"] // Define headers

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            {headers.map((header, index) => (
              <TableHead key={index}>
                <Skeleton className="h-5 w-20" />
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {skeletonRows.map((_, rowIndex) => (
            <TableRow key={rowIndex}>
              {headers.map((_, cellIndex) => (
                <TableCell key={cellIndex}>
                  <Skeleton className="h-5 w-full" />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
