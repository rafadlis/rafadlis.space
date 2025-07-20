import { ImageResponse } from "next/og"
import { OGTemplate } from "@/components/og-template"
import { projects } from "@/lib/data-project"

export const runtime = "edge"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateImageMetadata({ params }: Props) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  return [
    {
      id: slug,
      alt: project
        ? `${project.name} - Project by Rafadlis`
        : "Project by Rafadlis",
      contentType: "image/png",
      size: { width: 1200, height: 630 },
    },
  ]
}

export default async function Image({ params }: Props) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return new ImageResponse(
      (
        <OGTemplate
          title="Project Not Found"
          subtitle="Portfolio - Rafadlis"
          type="project"
        />
      ),
      { ...size }
    )
  }

  // Truncate long titles for better display
  const displayTitle =
    project.name.length > 50
      ? `${project.name.substring(0, 47)}...`
      : project.name

  // Get main technology for subtitle
  const mainTech = project.tech[0]?.name || project.category

  return new ImageResponse(
    (
      <OGTemplate
        title={displayTitle}
        subtitle={`${mainTech} - Rafadlis Portfolio`}
        type="project"
        gradient={project.status === "completed"}
      />
    ),
    { ...size }
  )
}
