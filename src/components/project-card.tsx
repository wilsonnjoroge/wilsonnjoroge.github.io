import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/portfolio-data";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      to="/projects/$slug"
      params={{ slug: project.slug }}
      className="group flex min-h-80 flex-col bg-card p-7 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-card-hover sm:p-9"
    >
      <div className="flex items-center justify-between text-xs font-semibold uppercase text-primary">
        <span>{project.index}</span>
        <ArrowUpRight className="size-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
      </div>
      <p className="mt-8 text-xs font-semibold uppercase text-muted-foreground">{project.category}</p>
      <h3 className="mt-3 font-display text-2xl font-medium text-foreground sm:text-3xl">{project.title}</h3>
      <p className="mt-4 text-base leading-7 text-muted-foreground">{project.summary}</p>
      <div className="mt-auto flex flex-wrap gap-2 pt-8">
        {project.tags.slice(0, 3).map((tag) => <span className="bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground" key={tag}>{tag}</span>)}
      </div>
    </Link>
  );
}