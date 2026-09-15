import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ExternalLink, Github } from "lucide-react";
import { PortfolioHeader } from "@/components/portfolio-header";
import { Button } from "@/components/ui/button";
import { getProject, projects } from "@/lib/portfolio-data";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return project;
  },
  head: ({ loaderData }) => ({ meta: [
    { title: loaderData ? `${loaderData.title} | Wilson Njoroge` : "Project not found | Wilson Njoroge" },
    { name: "description", content: loaderData?.summary ?? "Wilson Njoroge project case study." },
    { property: "og:title", content: loaderData ? `${loaderData.title} | Wilson Njoroge` : "Project case study" },
    { property: "og:description", content: loaderData?.summary ?? "Wilson Njoroge project case study." },
    { property: "og:type", content: "article" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: ProjectPage,
  notFoundComponent: () => <div className="grid min-h-screen place-items-center bg-background"><div className="text-center"><h1 className="font-display text-5xl text-foreground">Project not found</h1><Link to="/" className="mt-6 inline-block text-primary">Return home</Link></div></div>,
});

function ProjectPage() {
  const project = Route.useLoaderData();
  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const previous = currentIndex > 0 ? projects[currentIndex - 1] : undefined;
  const next = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : undefined;
  return (
    <div className="min-h-screen bg-background">
      <PortfolioHeader />
      <main>
        <header className="mx-auto max-w-7xl px-5 pb-20 pt-14 sm:px-8 sm:pb-24 sm:pt-20">
          <Link to="/" hash="projects" className="inline-flex items-center gap-2 text-sm font-semibold text-primary"><ArrowLeft className="size-4" /> All projects</Link>
          <p className="mt-12 text-xs font-bold uppercase text-primary">Case study {project.index} · {project.category}</p>
          <h1 className="mt-5 max-w-5xl font-display text-5xl font-medium leading-[1.06] text-foreground sm:text-6xl lg:text-7xl">{project.title}</h1>
          <p className="mt-7 max-w-3xl text-xl leading-8 text-muted-foreground">{project.intro}</p>
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {project.stats.map((stat) => <div className="bg-card p-6 shadow-card" key={stat.label}><strong className="font-display text-3xl font-medium text-primary">{stat.value}</strong><span className="mt-1 block text-sm text-muted-foreground">{stat.label}</span></div>)}
          </div>
        </header>
        <section className="bg-card py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_18rem]">
            <div className="space-y-16">
              {project.sections.map((section, sectionIndex) => <article key={section.title}><p className="text-xs font-bold text-primary">{String(sectionIndex + 1).padStart(2, "0")}</p><h2 className="mt-3 font-display text-3xl font-medium text-foreground sm:text-4xl">{section.title}</h2>{section.body && <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">{section.body}</p>}{section.items && <ol className="mt-6 grid gap-3">{section.items.map((item, index) => <li className="flex gap-4 bg-background p-5 text-base leading-7 text-foreground" key={item}><span className="font-semibold text-primary">{String(index + 1).padStart(2, "0")}</span><span>{item}</span></li>)}</ol>}</article>)}
            </div>
            <aside className="h-fit bg-secondary p-7 lg:sticky lg:top-24"><p className="text-xs font-bold uppercase text-primary">Tools & focus</p><div className="mt-5 flex flex-wrap gap-2">{project.tags.map((tag) => <span className="bg-card px-3 py-1.5 text-xs font-medium text-secondary-foreground" key={tag}>{tag}</span>)}</div><p className="mt-7 text-sm leading-6 text-muted-foreground">{project.note}</p>{project.repository && <Button asChild className="mt-7 w-full"><a href={project.repository} target="_blank" rel="noopener noreferrer"><Github /> View repository <ExternalLink /></a></Button>}</aside>
          </div>
        </section>
        <nav className="mx-auto grid max-w-7xl gap-4 px-5 py-12 sm:px-8 md:grid-cols-2" aria-label="Project navigation">
          {previous ? <Link to="/projects/$slug" params={{ slug: previous.slug }} className="group bg-card p-6 shadow-card"><span className="flex items-center gap-2 text-xs font-bold uppercase text-primary"><ArrowLeft className="size-4" /> Previous</span><strong className="mt-3 block font-display text-xl text-foreground">{previous.title}</strong></Link> : <div />}
          {next ? <Link to="/projects/$slug" params={{ slug: next.slug }} className="group bg-card p-6 text-right shadow-card"><span className="flex items-center justify-end gap-2 text-xs font-bold uppercase text-primary">Next <ArrowRight className="size-4" /></span><strong className="mt-3 block font-display text-xl text-foreground">{next.title}</strong></Link> : <Link to="/" hash="projects" className="group bg-card p-6 text-right shadow-card"><span className="flex items-center justify-end gap-2 text-xs font-bold uppercase text-primary">All projects <ArrowRight className="size-4" /></span><strong className="mt-3 block font-display text-xl text-foreground">Return to portfolio</strong></Link>}
        </nav>
      </main>
      <footer className="border-t border-border py-7"><div className="mx-auto max-w-7xl px-5 text-xs text-muted-foreground sm:px-8">© 2026 Wilson Njoroge Wanderi</div></footer>
    </div>
  );
}