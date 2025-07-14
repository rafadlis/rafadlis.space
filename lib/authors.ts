import { GithubLogo, InstagramLogo } from "@phosphor-icons/react/dist/ssr"
import { type Icon } from "@phosphor-icons/react"

export type Author = {
  name: string
  image: string
  url?: string
  socials?: {
    name: string
    icon: Icon
    url: string
  }[]
}

export type PostAuthor = Author & {
  role?: string
}

export const authors: Record<string, Author> = {
  rafadlis: {
    name: "R. Rahmat Fadli Sadikin",
    image: "https://github.com/rafadlis.png",
    url: "https://rafadlis.space",
    socials: [
      {
        name: "GitHub",
        icon: GithubLogo,
        url: "https://github.com/rafadlis",
      },
      {
        name: "Instagram",
        icon: InstagramLogo,
        url: "https://instagram.com/rafadlis",
      },
    ],
  },
  elin: {
    name: "Ellin Maollani",
    image: "",
    socials: [
      {
        name: "Instagram",
        icon: InstagramLogo,
        url: "https://instagram.com/ellin.maollani",
      },
    ],
  },
}
