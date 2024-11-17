import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  GithubLogo,
  InstagramLogo,
  EnvelopeSimple,
  SealCheck,
  PencilRuler,
  Atom,
  Wrench,
} from "@phosphor-icons/react/dist/ssr";

export default function Home() {
  return (
    <main className="h-dvh p-4">
      <div className="flex gap-4 mx-auto">
        {/* MARK: Profile */}
        <Card className="flex-1 relative">
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
          <CardContent className="grid grid-flow-col">
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
              <p className="text-sm text-center">Web App Developer</p>
            </div>
          </CardContent>
        </Card>
        {/* MARK: About */}
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>About</CardTitle>
            <CardDescription>
              A software engineer passionate about crafting beautiful and
              functional web experiences
            </CardDescription>
          </CardHeader>
        </Card>
        {/* MARK: Social */}
        <Card className="shrink-0">
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
        {/* MARK: Projects */}
        <Card className="row-span-1">
          <CardHeader>
            <CardTitle>Projects</CardTitle>
            <CardDescription>Coming soon</CardDescription>
          </CardHeader>
        </Card>
      </div>
    </main>
  );
}
