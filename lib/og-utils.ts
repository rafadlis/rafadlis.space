import { ImageResponse } from "next/og"

import type { ReactElement } from "react"

export interface ImageResponseOptions {
  width?: number
  height?: number
  fonts?: Array<{
    name: string
    data: ArrayBuffer
    style?: "normal" | "italic"
    weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
  }>
}

export async function createOGImage(
  element: ReactElement,
  size: { width: number; height: number }
) {
  const robotoRegular = await fetch(
    "https://fonts.gstatic.com/s/roboto/v32/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2"
  ).then((res) => res.arrayBuffer())

  const robotoMedium = await fetch(
    "https://fonts.gstatic.com/s/roboto/v32/KFOlCnqEu92Fr1MmEU9fBBc4AMP6lQ.woff2"
  ).then((res) => res.arrayBuffer())

  const robotoBold = await fetch(
    "https://fonts.gstatic.com/s/roboto/v32/KFOlCnqEu92Fr1MmWUlfBBc4AMP6lQ.woff2"
  ).then((res) => res.arrayBuffer())

  const robotoBlack = await fetch(
    "https://fonts.gstatic.com/s/roboto/v32/KFOlCnqEu92Fr1MmYUtfBBc4AMP6lQ.woff2"
  ).then((res) => res.arrayBuffer())

  const options: ImageResponseOptions = {
    ...size,
    fonts: [
      { name: "Roboto", data: robotoRegular, style: "normal", weight: 400 },
      { name: "Roboto", data: robotoMedium, style: "normal", weight: 500 },
      { name: "Roboto", data: robotoBold, style: "normal", weight: 700 },
      { name: "Roboto", data: robotoBlack, style: "normal", weight: 900 },
    ],
  }

  return new ImageResponse(element, options)
}
