import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Browser,
  Code,
  Globe,
  HouseSimpleIcon,
} from "@phosphor-icons/react/dist/ssr"
import { ProjectTable } from "./_components/project-table"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ProjectPage() {
  return (
    <article className="min-h-dvh p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>About Projects</CardTitle>
          <CardDescription>
            Here are some of the projects I&apos;ve worked on.
          </CardDescription>
          <CardAction>
            <Button asChild variant="outline">
              <Link href="/">
                <HouseSimpleIcon />
                <span className="max-md:hidden">Back to Home</span>
              </Link>
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4 py-4 sm:grid-cols-3 lg:grid-cols-5">
            <div className="flex flex-col items-center gap-2">
              <Browser className="text-3xl" weight="light" />
              <p className="text-sm">Web App</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Globe className="text-3xl" weight="light" />
              <p className="text-sm">Website</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Code className="text-3xl" weight="light" />
              <p className="text-sm">Web API</p>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Projects</CardTitle>
          <CardDescription>
            Here are some of the projects I&apos;ve worked on.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ProjectTable />
        </CardContent>
      </Card>
    </article>
  )
}
