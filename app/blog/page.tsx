import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Calculator,
  ChartBar,
  Code,
  Flask,
  Receipt,
} from "@phosphor-icons/react/dist/ssr"
import { BlogTable } from "./_components/blog-table"

export default function BlogPage() {
  return (
    <article className="min-h-dvh p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>About the Blog</CardTitle>
          <CardDescription>
            Here are some of the posts I&apos;ve written.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-flow-col divide-x gap-4 py-4">
            <div className="flex flex-col items-center gap-2">
              <Code className="text-3xl" weight="light" />
              <p className="text-sm">App Development</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Flask className="text-3xl" weight="light" />
              <p className="text-sm">Data Science</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <ChartBar className="text-3xl" weight="light" />
              <p className="text-sm">Statistics</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Calculator className="text-3xl" weight="light" />
              <p className="text-sm">Accounting</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Receipt className="text-3xl" weight="light" />
              <p className="text-sm">Tax</p>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Posts</CardTitle>
          <CardDescription>
            Here are some of the posts I&apos;ve written.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <BlogTable />
        </CardContent>
      </Card>
    </article>
  )
}
