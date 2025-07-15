import { projects } from "@/lib/data-project"

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const { default: Post } = await import(`../_posts/${slug}.tsx`)
  return <Post />
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}
