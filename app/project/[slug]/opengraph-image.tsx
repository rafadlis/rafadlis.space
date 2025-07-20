import { ImageResponse } from "next/og"
import { readFile } from "node:fs/promises"
import { join } from "node:path"

// Image metadata
export const alt = "Project by Rafadlis"
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

// Image generation
export default async function Image() {
  // Font loading, process.cwd() is Next.js project directory
  const robotoRegular = await readFile(
    join(process.cwd(), "assets/Roboto-Regular.ttf")
  )
  const robotoBold = await readFile(
    join(process.cwd(), "assets/Roboto-Bold.ttf")
  )

  const whiteColor = "#fafafa"
  const blackColor = "#09090b"

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
          <div
            style={{
              fontSize: 24,
              fontWeight: 700,
              height: 32,
              width: 32,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: whiteColor,
              background: blackColor,
              borderRadius: 4,
            }}
          >
            r.
          </div>
          <div style={{ fontSize: 128, fontWeight: 700, color: blackColor }}>
            Project by Rafadlis
          </div>
          <div style={{ fontSize: 24, fontWeight: 400, color: blackColor }}>
            https://rafadlis.space
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
