import Link from "next/link"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  GithubLogo,
  InstagramLogo,
  EnvelopeSimple,
  SealCheck,
  PencilRuler,
  Atom,
  Wrench,
  Lightning,
  Smiley,
  Devices,
} from "@phosphor-icons/react/dist/ssr"
import { Badge } from "@/components/ui/badge"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { ProjectTable } from "@/components/project-table"
import SettingsMenu from "@/components/settings-menu"

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
                I&aposm a passionate web developer dedicated to crafting elegant
                and efficient digital solutions. With a keen eye for detail and
                a problem-solving mindset, I transform complex challenges into
                seamless user experiences. Here&aposs what drives me:
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
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <Button variant="link" asChild className="justify-start p-0 h-fit">
              <Link href="https://github.com/rafadlis" target="_blank">
                <GithubLogo size={24} />
                <span className="ml-1 font-normal text-muted-foreground">
                  github.com/rafadlis
                </span>
              </Link>
            </Button>
            <Button variant="link" asChild className="justify-start p-0 h-fit">
              <Link href="https://instagram.com/rafadlis" target="_blank">
                <InstagramLogo size={24} />
                <span className="ml-1 font-normal text-muted-foreground">
                  instagram.com/rafadlis
                </span>
              </Link>
            </Button>
            <Button variant="link" asChild className="justify-start p-0 h-fit">
              <Link href="mailto:me@rafadlis.space">
                <EnvelopeSimple size={24} />
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
    </main>
  )
}
