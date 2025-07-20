import { createOGImage } from "@/lib/og-utils"
import { OGTemplate } from "@/components/og-template"
import { blogs } from "@/lib/data-blog"

export const runtime = "edge"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

interface Props {
  params: Promise<{ slug: string }>
}

export const alt = "Blog Post by Rafadlis"

export default async function Image({ params }: Props) {
  const { slug } = await params
  const post = blogs.find(
    (blog) => blog.slug === slug && blog.status === "published"
  )

  if (!post) {
    return createOGImage(
      <OGTemplate
        title="Blog Post Not Found"
        subtitle="Blog - Rafadlis"
        type="blog"
      />,
      size
    )
  }

  // Truncate long titles for better display
  const displayTitle =
    post.title.length > 60 ? `${post.title.substring(0, 57)}...` : post.title

  return createOGImage(
    <OGTemplate
      title={displayTitle}
      subtitle={`${post.category} - Rafadlis Blog`}
      type="blog"
    />,
    size
  )
}
