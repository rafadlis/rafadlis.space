import { Button } from "@/components/ui/button"
import Link from "next/link"
import { projects } from "@/lib/projects"

export default function Home() {
  return (
    <div className="portfolio">
      <a className="skip-link" href="#projects">Skip to projects</a>
      <header className="site-header">
        <Link className="wordmark" href="/" aria-label="Rafadlis home">rafadlis<span aria-hidden="true">.</span></Link>
        <Button variant="outline" className="contact-button" nativeButton={false} render={<a href="mailto:me@rafadlis.space" />}>Say hello</Button>
      </header>
      <main>
        <section className="intro" aria-labelledby="intro-title">
          <h1 id="intro-title">A few things<br />I’ve made.</h1>
          <div className="intro-copy">
            <p>I’m Fadli, a software engineer<br className="desktop-break" /> and UX designer.</p>
            <p>I build websites and tools that make<br className="desktop-break" /> everyday tasks a little easier.</p>
          </div>
        </section>
        <section id="projects" aria-labelledby="projects-title">
          <div className="section-heading"><h2 id="projects-title">Selected projects</h2><span>4 projects</span></div>
          <ul className="project-list">
            {projects.map((project) => (
              <li key={project.domain}>
                <a className="project-link" href={project.url}>
                  <div className="project-title"><h3>{project.name}</h3><span className="project-domain">{project.domain}</span></div>
                  <p className="project-description">{project.description}</p>
                  <span className="project-action">Visit site <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M7 17 17 7M7 7h10v10" /></svg></span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <footer className="site-footer">
        <p>R. Rahmat Fadli Sadikin</p>
        <nav aria-label="Social links"><a href="https://github.com/rafadlis">GitHub</a><a href="https://linkedin.com/in/rafadlis">LinkedIn</a><a href="mailto:me@rafadlis.space">Email</a></nav>
      </footer>
    </div>
  )
}
