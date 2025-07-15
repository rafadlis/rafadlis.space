import {
  Project,
  ProjectAttributes,
  ProjectBackLink,
  ProjectContent,
  ProjectHeader,
  ProjectLinks,
  ProjectMeta,
  ProjectParagraph,
  ProjectTechStack,
  ProjectTitle,
} from "../_components/project"
import { projects } from "@/lib/data-project"

export default function EpadApi() {
  const project = projects.find((p) => p.slug === "epad-api")

  if (!project) {
    return null
  }

  return (
    <Project>
      <ProjectHeader>
        <ProjectBackLink href="/project">Back to Projects</ProjectBackLink>
        <ProjectTitle>{project.name}</ProjectTitle>
        <ProjectMeta
          status={project.status}
          version={project.version}
          category={project.category}
        />
        <ProjectAttributes
          isPrivate={project.isPrivate}
          isOpenSource={project.isOpenSource}
        />
        <ProjectLinks urls={project.urls} />
      </ProjectHeader>
      <ProjectContent>
        <ProjectParagraph>{project.description}</ProjectParagraph>
        <ProjectTechStack tech={project.tech} />
      </ProjectContent>
    </Project>
  )
}
