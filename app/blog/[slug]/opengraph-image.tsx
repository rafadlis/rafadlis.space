import { ImageResponse } from "next/og"
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

export async function generateImageMetadata({ params }: Props) {
  const { slug } = await params
  const post = blogs.find((blog) => blog.slug === slug)

  return [
    {
      id: slug,
      alt: post
        ? `${post.title} - Blog Post by Rafadlis`
        : "Blog Post by Rafadlis",
      contentType: "image/png",
      size: { width: 1200, height: 630 },
    },
  ]
}

export default async function Image({ params }: Props) {
  const { slug } = await params
  const post = blogs.find((blog) => blog.slug === slug)

  if (!post) {
    return new ImageResponse(
      (
        <OGTemplate
          title="Blog Post Not Found"
          subtitle="Blog - Rafadlis"
          type="blog"
        />
      ),
      { ...size }
    )
  }

  // Truncate long titles for better display
  const displayTitle =
    post.title.length > 60 ? `${post.title.substring(0, 57)}...` : post.title

  return new ImageResponse(
    (
      <OGTemplate
        title={displayTitle}
        subtitle={`${post.category} - Rafadlis Blog`}
        type="blog"
      />
    ),
    { ...size }
  )
}
