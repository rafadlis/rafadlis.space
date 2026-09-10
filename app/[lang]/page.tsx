import { Button } from "@/components/ui/button"
import Link from "next/link"
import { projects } from "@/lib/projects"
import { notFound } from "next/navigation"
import { isLocale } from "@/lib/i18n/config"
import { getDictionary } from "@/lib/i18n/dictionaries"
import { LanguageSwitcher } from "@/components/language-switcher"

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  const dict = await getDictionary(lang)
  return (
    <div className="portfolio">
      <a className="skip-link" href="#projects">{dict.skip}</a>
      <header className="site-header">
        <Link className="wordmark" href={`/${lang}`} aria-label={dict.home} dir="ltr">rafadlis<span aria-hidden="true">.</span></Link>
        <div className="header-actions">
          <LanguageSwitcher locale={lang} label={dict.language} />
          <Button variant="outline" className="contact-button" nativeButton={false} render={<a href="https://instagram.com/rafadlis" />}>{dict.hello}</Button>
        </div>
      </header>
      <main>
        <section className="intro" aria-labelledby="intro-title">
          <h1 id="intro-title">{dict.headline}</h1>
          <div className="intro-copy">
            <p>{dict.intro}</p>
            <p>{dict.about}</p>
          </div>
        </section>
        <section id="projects" aria-labelledby="projects-title">
          <div className="section-heading"><h2 id="projects-title">{dict.selected}</h2><span>{dict.count.replace('{count}', new Intl.NumberFormat(lang).format(projects.length))}</span></div>
          <ul className="project-list">
            {projects.map((project) => (
              <li key={project.domain}>
                <a className="project-link" href={project.id === 'personal' ? `/${lang}` : project.url}>
                  <div className="project-title"><h3><bdi>{project.name}</bdi></h3><span className="project-domain" dir="ltr">{project.domain}</span></div>
                  <p className="project-description">{dict[project.id]}</p>
                  <span className="project-action">{dict.visit} <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M7 17 17 7M7 7h10v10" /></svg></span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <footer className="site-footer">
        <p><bdi>R. Rahmat Fadli Sadikin</bdi></p>
        <nav aria-label={dict.social}><a href="https://github.com/rafadlis">GitHub</a><a href="https://linkedin.com/in/rafadlis">LinkedIn</a><a href="https://instagram.com/rafadlis">Instagram</a></nav>
      </footer>
    </div>
  )
}
