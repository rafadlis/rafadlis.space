import { ImageResponse } from "next/og"
import { format } from "date-fns"
import { blogs } from "@/lib/data-blog"

export const runtime = "edge"

// Image metadata
export const alt = "Blog Post by Rafadlis"
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

// Image generation
export default async function Image({ params }: { params: { slug: string } }) {
  const { slug } = params

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  // Font
  const robotoRegular = fetch(`${siteUrl}/Roboto-Regular.ttf`).then((res) =>
    res.arrayBuffer()
  )
  const robotoBold = fetch(`${siteUrl}/Roboto-Bold.ttf`).then((res) =>
    res.arrayBuffer()
  )

  const [robotoRegularData, robotoBoldData] = await Promise.all([
    robotoRegular,
    robotoBold,
  ])

  const whiteColor = "#fafafa"
  const blackColor = "#09090b"

  const selectedBlog = blogs.find((blog) => blog.slug === slug)

  const title =
    selectedBlog?.title && selectedBlog?.title.length > 32
      ? selectedBlog?.title.slice(0, 32) + "..."
      : selectedBlog?.title

  const datePublished =
    selectedBlog?.publishedAt &&
    format(selectedBlog?.publishedAt, "MMM d, yyyy")

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 128,
          background: whiteColor,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <div style={{ fontSize: 24, fontWeight: 400, color: blackColor }}>
            {datePublished} - {selectedBlog?.category}
          </div>
          <div style={{ fontSize: 128, fontWeight: 700, color: blackColor }}>
            {title}
          </div>
          <div style={{ fontSize: 24, fontWeight: 400, color: blackColor }}>
            https://rafadlis.space/blog/{slug}
          </div>
        </div>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
      fonts: [
        {
          name: "Roboto",
          data: robotoRegularData,
          style: "normal",
          weight: 400,
        },
        {
          name: "Roboto",
          data: robotoBoldData,
          style: "normal",
          weight: 700,
        },
      ],
    }
  )
}
