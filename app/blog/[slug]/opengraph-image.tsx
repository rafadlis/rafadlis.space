import { ImageResponse } from "next/og"
import { getBlogBySlug } from "@/lib/data-blog"

export const runtime = "edge"

export const alt = "rafadlis.space"
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const blog = getBlogBySlug(slug)

  if (!blog) {
    return new ImageResponse(
      (
        <div
          style={{
            fontSize: 48,
            background: "white",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Blog post not found
        </div>
      ),
      {
        ...size,
      }
    )
  }

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundColor: "black",
        }}
      >
        <div
          style={{
            marginLeft: 190,
            marginRight: 190,
            display: "flex",
            fontSize: 130,
            letterSpacing: "-0.05em",
            fontStyle: "normal",
            color: "white",
            lineHeight: "120px",
            whiteSpace: "pre-wrap",
          }}
        >
          {blog.title}
        </div>
        <div
          style={{
            marginLeft: 190,
            marginRight: 190,
            marginTop: 30,
            display: "flex",
            fontSize: 40,
            letterSpacing: "-0.025em",
            fontStyle: "normal",
            color: "white",
          }}
        >
          {blog.category}
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
