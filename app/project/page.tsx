import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ProjectTable } from "../_components/project-table"

export default function ProjectPage() {
  return (
    <article className="min-h-dvh p-4 flex flex-col gap-4 relative">
      <Card>
        <CardHeader>
          <CardTitle>Projects</CardTitle>
          <CardDescription>The projects that I have worked on</CardDescription>
        </CardHeader>
        <CardContent>
          <ProjectTable />
        </CardContent>
        <CardFooter className="text-sm text-muted-foreground">
          This not all my projects, just the ones that I&apos;m prepared well
          enough to show
        </CardFooter>
      </Card>
    </article>
  )
}
