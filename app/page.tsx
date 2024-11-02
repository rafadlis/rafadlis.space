import Link from "next/link";

export default function Home() {
  return (
    <article className="h-dvh flex flex-col justify-between items-center">
      <p className="text-sm text-muted-foreground"></p>
      <h1 className="text-8xl font-bold">
        otw<span className="text-primary">.</span>
      </h1>
      <footer className="text-sm text-muted-foreground pb-3">
        <p className="inline">crafter |</p>{" "}
        <Link
          href={"https://instagram.com/rafadlis"}
          className="inline hover:text-primary"
        >
          @rafadlis
        </Link>
      </footer>
    </article>
  );
}
