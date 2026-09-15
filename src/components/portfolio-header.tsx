import { Link } from "@tanstack/react-router";

export function PortfolioHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex h-17 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link to="/" className="font-display text-xl font-semibold text-foreground" aria-label="Wilson Njoroge Wanderi home">
          WNW<span className="text-primary">.</span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-medium text-muted-foreground md:flex" aria-label="Main navigation">
          <a href="/#about" className="transition-colors hover:text-foreground">About</a>
          <a href="/#projects" className="transition-colors hover:text-foreground">Projects</a>
          <a href="/#experience" className="transition-colors hover:text-foreground">Experience</a>
          <a href="/#skills" className="transition-colors hover:text-foreground">Skills</a>
        </nav>
        <a href="mailto:wilsonnjoroge932@gmail.com" className="text-sm font-semibold text-primary transition-colors hover:text-primary/80">
          Let’s connect <span aria-hidden="true">↗</span>
        </a>
      </div>
    </header>
  );
}