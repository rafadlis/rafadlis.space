import Link from "next/link"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  SealCheck,
  PencilRuler,
  Atom,
  Wrench,
  Lightning,
  Smiley,
  Devices,
  DotsNineIcon,
  GithubLogoIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
  TwitterLogoIcon,
  YoutubeLogoIcon,
  FacebookLogoIcon,
  EnvelopeSimpleIcon,
} from "@phosphor-icons/react/dist/ssr"
import { Badge } from "@/components/ui/badge"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { ProjectTable } from "./_components/project-table"
import SettingsMenu from "@/components/settings-menu"
import { BlogTable } from "./blog/_components/blog-table"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"

export default function Home() {
  return (
    <main className="min-h-dvh p-4 flex flex-col gap-4 relative">
      <SettingsMenu />
      <div className="w-full flex flex-wrap gap-4 mx-auto">
        {/* MARK: Profile */}
        <Card className="flex-1 sm:grow-0 relative">
          <Avatar className="absolute top-6 left-6">
            <AvatarImage src="https://github.com/rafadlis.png" />
            <AvatarFallback>
              <AvatarFallback>RA</AvatarFallback>
            </AvatarFallback>
          </Avatar>
          <CardHeader className="pl-20">
            <CardTitle className="flex items-center">
              <h1>Rafadlis</h1>
              <SealCheck className="inline ml-1 text-primary" weight="fill" />
            </CardTitle>
            <CardDescription>
              <p>R. Rahmat Fadli Sadikin - Crafter</p>
            </CardDescription>
          </CardHeader>
          <CardContent className="grid grid-flow-col px-0">
            <div className="flex flex-col items-center gap-2 px-6 border-r">
              <Wrench className="text-3xl" weight="light" />
              <p className="text-sm text-center">Problem Solver</p>
            </div>
            <div className="flex flex-col items-center gap-2 px-6 border-r">
              <PencilRuler className="text-3xl" weight="light" />
              <p className="text-sm text-center">UX Designer</p>
            </div>
            <div className="flex flex-col items-center gap-2 px-6">
              <Atom className="text-3xl" weight="light" />
              <p className="text-sm text-center">App Developer</p>
            </div>
          </CardContent>
        </Card>
        {/* MARK: About */}
        <Card className="flex-1 grow flex flex-col justify-between ">
          <CardHeader>
            <CardTitle>About Me</CardTitle>
            <CardDescription>
              <p className="line-clamp-4">
                I&apos;m Fadli—a software engineer and UX designer with diverse
                experience (UI/UX Designer, Data Analyst, Data Scientist, and
                Software Engineer). I solve challenges with innovative code and
                design, always embracing the latest technologies.
              </p>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2 *:cursor-pointer">
              <HoverCard openDelay={50} closeDelay={50}>
                <HoverCardTrigger asChild>
                  <Badge
                    variant="outline"
                    className="hover:bg-primary hover:text-primary-foreground"
                  >
                    <Lightning weight="fill" className="inline mr-1" />
                    Fast
                  </Badge>
                </HoverCardTrigger>
                <HoverCardContent className="border-primary" align="start">
                  <p className="text-sm">
                    Fast application is joy for the user
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard openDelay={50} closeDelay={50}>
                <HoverCardTrigger asChild>
                  <Badge
                    variant="outline"
                    className="hover:bg-primary hover:text-primary-foreground"
                  >
                    <Smiley weight="fill" className="inline mr-1" />
                    Useful
                  </Badge>
                </HoverCardTrigger>
                <HoverCardContent className="border-primary" align="start">
                  <p className="text-sm">
                    For what in the first place the application is made for?
                    Make it useful for the user
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard openDelay={50} closeDelay={50}>
                <HoverCardTrigger asChild>
                  <Badge
                    variant="outline"
                    className="hover:bg-primary hover:text-primary-foreground"
                  >
                    <Devices weight="fill" className="inline mr-1" />
                    Responsive
                  </Badge>
                </HoverCardTrigger>
                <HoverCardContent className="border-primary" align="start">
                  <p className="text-sm">
                    Give user power to use the application on any device
                  </p>
                </HoverCardContent>
              </HoverCard>
            </div>
          </CardContent>
        </Card>
        {/* MARK: Social */}
        <Card className="shrink-0 max-md:flex-1">
          <CardHeader>
            <CardTitle>Social</CardTitle>
            <CardDescription>Connect with me</CardDescription>
            <CardAction>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    size={"icon"}
                    variant={"outline"}
                    className="cursor-pointer"
                  >
                    <DotsNineIcon size={24} weight="bold" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent align="end" side="bottom">
                  <div
                    className={cn(
                      "rounded-md grid grid-cols-3 divide-x divide-y border",
                      "[&>a]:p-2 [&>a]:flex [&>a]:items-center [&>a]:gap-2 [&>a]:justify-center [&>a]:text-muted-foreground",
                      "[&>a]:hover:text-foreground [&>a]:aspect-square [&>a]:hover:bg-muted [&>a]:transition-colors [&>a]:cursor-pointer [&>a]:duration-300"
                    )}
                  >
                    <Link href="https://github.com/rafadlis" target="_blank">
                      <GithubLogoIcon size={24} />
                      <span className="sr-only">github.com/rafadlis</span>
                    </Link>
                    <Link href="https://instagram.com/rafadlis" target="_blank">
                      <InstagramLogoIcon size={24} />
                      <span className="sr-only">instagram.com/rafadlis</span>
                    </Link>
                    <Link
                      href="https://linkedin.com/in/rafadlis"
                      target="_blank"
                    >
                      <LinkedinLogoIcon size={24} />
                      <span className="sr-only">linkedin.com/in/rafadlis</span>
                    </Link>
                    <Link href="https://facebook.com/rafadlis" target="_blank">
                      <FacebookLogoIcon size={24} />
                      <span className="sr-only">facebook.com/rafadlis</span>
                    </Link>
                    <Link href="https://youtube.com/@rafadlis" target="_blank">
                      <YoutubeLogoIcon size={24} />
                      <span className="sr-only">youtube.com/@rafadlis</span>
                    </Link>
                    <Link href="https://x.com/rafadlis" target="_blank">
                      <TwitterLogoIcon size={24} />
                      <span className="sr-only">x.com/rafadlis</span>
                    </Link>
                  </div>
                </PopoverContent>
              </Popover>
            </CardAction>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <Button variant="link" asChild className="justify-start p-0 h-fit">
              <Link href="https://github.com/rafadlis" target="_blank">
                <GithubLogoIcon size={24} />
                <span className="ml-1 font-normal text-muted-foreground">
                  github.com/rafadlis
                </span>
              </Link>
            </Button>
            <Button variant="link" asChild className="justify-start p-0 h-fit">
              <Link href="https://linkedin.com/in/rafadlis" target="_blank">
                <LinkedinLogoIcon size={24} />
                <span className="ml-1 font-normal text-muted-foreground">
                  linkedin.com/in/rafadlis
                </span>
              </Link>
            </Button>
            <Button variant="link" asChild className="justify-start p-0 h-fit">
              <Link href="mailto:me@rafadlis.space">
                <EnvelopeSimpleIcon size={24} />
                <span className="ml-1 font-normal text-muted-foreground">
                  me@rafadlis.space
                </span>
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
      <Card className="row-span-1">
        <CardHeader>
          <CardTitle>Projects</CardTitle>
          <CardDescription>The projects that I have worked on</CardDescription>
        </CardHeader>
        <CardContent>
          <ProjectTable />
        </CardContent>
        <CardFooter className="text-sm text-muted-foreground">
          This not all my projects, just the ones that I&aposm prepared well
          enough to show
        </CardFooter>
      </Card>
      <Card className="row-span-1">
        <CardHeader>
          <CardTitle>My Posts</CardTitle>
          <CardDescription>Here are my pool of thoughts</CardDescription>
        </CardHeader>
        <CardContent>
          <BlogTable />
        </CardContent>
        <CardFooter className="text-sm text-muted-foreground">
          <p>
            The blog is open source, you can find the source code on{" "}
            <Link
              href="https://github.com/rafadlis/rafadlis.space"
              target="_blank"
              className="font-mono bg-muted px-1 rounded-md"
            >
              github.com/rafadlis/rafadlis.space
            </Link>
          </p>
        </CardFooter>
      </Card>
    </main>
  )
}
