import { ImageResponse } from "next/og"

export const runtime = "edge"

// Image metadata
export const alt = "Project by Rafadlis"
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

// Image generation
export default async function Image() {
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
            https://rafadlis.space/project
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
