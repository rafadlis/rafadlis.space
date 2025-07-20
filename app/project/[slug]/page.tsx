import { projects } from "@/lib/data-project"
import { generateProjectMetadata } from "@/lib/seo"
import { notFound } from "next/navigation"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const project = projects.find((project) => project.slug === slug)

  if (
    !project ||
    (project.status !== "completed" && project.status !== "in-progress")
  ) {
    return {}
  }

  return generateProjectMetadata({
    title: project.name,
    description: project.description,
    slug: project.slug,
    technologies: project.tech.map((tech) => tech.name),
  })
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params
  const project = projects.find((project) => project.slug === slug)

  if (
    !project ||
    (project.status !== "completed" && project.status !== "in-progress")
  ) {
    notFound()
  }

  const { default: Project } = await import(`../_posts/${slug}.tsx`)
  return <Project />
}

export function generateStaticParams() {
  return projects
    .filter(
      (project) =>
        project.status === "completed" || project.status === "in-progress"
    )
    .map((project) => ({
      slug: project.slug,
    }))
}
