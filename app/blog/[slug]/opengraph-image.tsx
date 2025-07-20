import { ImageResponse } from "next/og"
import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { format } from "date-fns"
import { blogs } from "@/lib/data-blog"

// Image metadata
export const alt = "Project by Rafadlis"
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

// Image generation
export default async function Image({ params }: { params: { slug: string } }) {
  const { slug } = params

  // Font loading, process.cwd() is Next.js project directory
  const robotoRegular = await readFile(
    join(process.cwd(), "assets/Roboto-Regular.ttf")
  )
  const robotoBold = await readFile(
    join(process.cwd(), "assets/Roboto-Bold.ttf")
  )

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
          data: robotoRegular,
          style: "normal",
          weight: 400,
        },
        {
          name: "Roboto",
          data: robotoBold,
          style: "normal",
          weight: 700,
        },
      ],
    }
  )
}
