# Rafadlis.space

A single-page portfolio for R. Rahmat Fadli Sadikin. Edit the four projects in `lib/projects.ts`.

Built with Next.js App Router, TypeScript, Tailwind CSS, and the official shadcn Base UI button from the base-nova registry. Uses system fonts and no external images or data fetching.

## Commands

- `pnpm install` — install dependencies.
- `pnpm typecheck` — check TypeScript without building.
- `pnpm lint` — check source files.
- `pnpm dev` — start development only when requested.
- `pnpm build` — create a production build only when requested.

## Content and design

Only Agrasis, SAPADA, Struk Berhadiah, and this portfolio are listed. SAPADA’s description is based on its public homepage: https://sapada.bapenda.garutkab.go.id. The other external sites could not be retrieved during the rewrite, so their descriptions avoid unverified feature claims.

Anthropic’s frontend-design skill informed the layout: a short personal introduction and a single list of projects. Palette: mist #edf3f8, ink #17334e, blue #235f9d, muted blue #4c647b, divider #b9cbdc. Trebuchet MS gives the large heading a friendly character, with Segoe UI and sans-serif fallbacks. Everything is left aligned, with responsive rows and visible keyboard focus. The oversized introduction is the only expressive element; project names and links take priority over decorative cards or images.

The old blog, project detail pages, presentations, business card routes, and unused UI dependencies have been removed. Git history retains the previous implementation.
