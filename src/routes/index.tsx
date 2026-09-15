import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { PortfolioHeader } from "@/components/portfolio-header";
import { ProjectCard } from "@/components/project-card";
import { Button } from "@/components/ui/button";
import { contact, projects } from "@/lib/portfolio-data";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Wilson Njoroge | Payment Middleware & Cybersecurity" },
    { name: "description", content: "Wilson Njoroge Wanderi’s portfolio in payment middleware, cybersecurity and cloud security." },
    { property: "og:title", content: "Wilson Njoroge | Payment Middleware & Cybersecurity" },
    { property: "og:description", content: "Payment systems built end to end, backed by enterprise middleware and cloud security experience." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Index,
});

function Index() {
  const paymentProjects = projects.filter((project) => project.category === "Payment engineering");
  const securityProjects = projects.filter((project) => project.category === "Security & infrastructure");

  return (
    <div className="min-h-screen bg-background">
      <PortfolioHeader />
      <main>
        <section className="mx-auto grid min-h-[calc(100svh-4.25rem)] max-w-7xl items-center gap-14 px-5 py-16 sm:px-8 lg:grid-cols-[1.25fr_0.75fr] lg:py-20">
          <div>
            <p className="text-xs font-bold uppercase text-primary">Payment middleware · Cybersecurity · Cloud security</p>
            <h1 className="mt-7 max-w-4xl font-display text-5xl font-medium leading-[1.03] text-foreground sm:text-6xl lg:text-7xl">
              Wilson Njoroge Wanderi
            </h1>
            <p className="mt-6 max-w-3xl font-display text-2xl leading-snug text-foreground/80 sm:text-3xl">
              Building and securing the systems that move money.
            </p>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">
              I build payment integrations end to end and bring production security experience from a Tier-1 banking environment to every system I work on.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg"><a href="#projects">Explore my work <ArrowDown /></a></Button>
              <Button asChild variant="outline" size="lg"><a href={`mailto:${contact.email}`}>Contact me <Mail /></a></Button>
            </div>
          </div>
          <aside className="grid max-w-xl gap-5 bg-card p-5 shadow-card sm:p-6 lg:max-w-none lg:justify-self-end" aria-label="Wilson Njoroge profile">
            <div className="grid grid-cols-[8.5rem_1fr] items-center gap-5 sm:grid-cols-[11rem_1fr]">
              <img src={profileImage.url} alt="Wilson Njoroge Wanderi" className="aspect-[4/5] w-full object-cover object-top" loading="eager" />
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase text-primary"><span className="size-2 bg-primary" />Security-first engineering</div>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">Enterprise IT · Cybersecurity · Payment integrations</p>
              </div>
            </div>
            <div>
              <p className="text-xs font-bold uppercase text-primary">Four professional pillars</p>
              <dl className="mt-4 grid gap-x-6 gap-y-5 sm:grid-cols-2">
                {[["Middleware Engineering", "Enterprise integration, Oracle WebLogic/SOA, REST/SOAP services, governance and API orchestration."], ["Cloud Security", "AWS IAM, VPC, detection, hardening, logging, security architecture and infrastructure automation."], ["Digital Forensics", "DFIR methodology, forensic readiness, evidence handling, cloud investigation and security operations."], ["Software Engineering", "Secure backend development, API integration, databases, automation and production-oriented engineering."]].map(([pillar, description]) => (
                  <div key={pillar}>
                    <dt className="font-display text-base font-medium text-foreground">{pillar}</dt>
                    <dd className="mt-1.5 text-xs leading-5 text-muted-foreground">{description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </aside>
        </section>

        <section id="about" className="bg-card py-24 sm:py-32">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div><p className="text-xs font-bold uppercase text-primary">About</p><h2 className="mt-4 max-w-md font-display text-4xl font-medium leading-tight text-foreground sm:text-5xl">Engineering experience with a security-first mindset.</h2></div>
            <div className="space-y-6 text-lg leading-8 text-muted-foreground">
              <p>I work at the intersection of enterprise IT and cybersecurity. In my current role at Equity Group Holdings, I manage enterprise integration and middleware environments supporting mission-critical banking services, with a focus on governance, access control, hardening, monitoring and security.</p>
              <p>Alongside production experience, I build software and API integrations, isolated security labs and cloud environments to validate controls in practice — from payment workflows and middleware orchestration to vulnerability discovery, SIEM detection, cloud security architecture and forensic readiness.</p>
              <p className="font-medium text-foreground">My approach is practical: understand how systems work, understand how they fail, then engineer controls that reduce exposure and make incidents easier to detect and investigate.</p>
            </div>
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
          <div className="max-w-3xl"><p className="text-xs font-bold uppercase text-primary">Selected projects</p><h2 className="mt-4 font-display text-4xl font-medium text-foreground sm:text-5xl">The work behind the portfolio.</h2><p className="mt-5 text-lg leading-8 text-muted-foreground">Each project opens into a focused case study covering the problem, approach and evidence.</p></div>
          <ProjectGroup title="Payment engineering" subtitle="Backend middleware built end to end" items={paymentProjects} />
          <ProjectGroup title="Security & infrastructure" subtitle="Cloud, detection and production hardening" items={securityProjects} />
        </section>

        <section id="experience" className="bg-card py-24 text-foreground sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <p className="text-xs font-bold uppercase text-primary">Experience</p>
            <h2 className="mt-4 font-display text-4xl font-medium sm:text-5xl">Production responsibility, measurable delivery.</h2>
            <div className="mt-14 grid gap-12 lg:grid-cols-[0.35fr_1fr]">
               <p className="text-sm text-muted-foreground">12/2024 — Present</p>
               <div><h3 className="font-display text-3xl font-medium">Enterprise Middleware Engineer</h3><p className="mt-2 text-primary">Equity Group Holdings</p><ul className="mt-7 grid gap-4 text-base leading-7 text-muted-foreground sm:grid-cols-2"><li>Manage security governance for 100+ SOAP and REST services.</li><li>Lead Java, Log4j, TLS and WebLogic remediation.</li><li>Deliver Finacle separation work for in-country operations.</li><li>Automated compliance reporting, reducing manual effort by 60%.</li></ul></div>
               <p className="text-sm text-muted-foreground">01/2024 — 11/2024</p>
               <div><h3 className="font-display text-3xl font-medium">Software Development Apprentice</h3><p className="mt-2 text-primary">E&amp;M Technology House Ltd</p><p className="mt-7 max-w-3xl text-base leading-7 text-muted-foreground">Led secure backend development for an omnichannel platform, designed interfaces, supported UAT and introduced code review and secure coding practices.</p></div>
            </div>
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
          <p className="text-xs font-bold uppercase text-primary">Capabilities</p><h2 className="mt-4 font-display text-4xl font-medium text-foreground sm:text-5xl">Technical coverage.</h2>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {[['Cloud & Infrastructure Security', 'AWS VPC, IAM, EC2, S3, CloudTrail, CloudWatch, Session Manager, GuardDuty, Security Hub, Config, WAF, KMS, Terraform.'], ['Middleware & API Engineering', 'Oracle WebLogic, SOA Suite, Service Bus, REST/SOAP, API security, enterprise integration, governance and service orchestration.'], ['Security Operations', 'Wazuh, Suricata, log correlation, detection engineering, MITRE ATT&CK, host/network telemetry and incident response.'], ['Vulnerability Management', 'Nmap, Nessus, OpenVAS/GVM, Nikto, OWASP, CVE analysis, attack-chain analysis and security reporting.'], ['DFIR', 'Evidence preservation, EBS snapshot forensics, memory acquisition, cloud investigation, hashing and forensic-readiness controls.'], ['Software Engineering', 'C#, ASP.NET Core, Java, Spring Boot, Node.js, Python, SQL, REST APIs, Git, Docker and automation.']].map(([title, body]) => <div className="bg-card p-7 shadow-card transition-shadow hover:shadow-card-hover sm:p-9" key={title}><h3 className="font-display text-2xl text-foreground">{title}</h3><p className="mt-4 leading-7 text-muted-foreground">{body}</p></div>)}
          </div>
          <div className="mt-16 grid gap-8 bg-secondary p-8 sm:grid-cols-2 sm:p-10"><h3 className="font-display text-3xl text-foreground">Continuous learning, backed by hands-on work.</h3><div className="space-y-3 text-sm leading-6 text-secondary-foreground"><p><strong>MSc Cybersecurity & Digital Forensics</strong><br />Open University of Kenya, 2026 — Present</p><p><strong>ISC2 CC · CCEP · KCNA · ITIL® 4 Foundation</strong></p><p>AWS Certified Security — Specialty, in progress</p></div></div>
        </section>

        <section id="contact" className="bg-card py-24 sm:py-28"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 px-5 sm:px-8 lg:flex-row lg:items-end"><div><p className="text-xs font-bold uppercase text-primary">Nairobi, Kenya</p><h2 className="mt-4 max-w-3xl font-display text-4xl font-medium text-foreground sm:text-5xl">Let’s talk about payments, security and opportunities.</h2></div><div className="flex gap-3"><SocialLink href={`mailto:${contact.email}`} label="Email"><Mail /></SocialLink><SocialLink href={contact.github} label="GitHub"><Github /></SocialLink><SocialLink href={contact.linkedin} label="LinkedIn"><Linkedin /></SocialLink></div></div></section>
      </main>
      <footer className="bg-card"><div className="mx-auto flex max-w-7xl flex-col gap-2 border-t border-border px-5 py-7 text-xs text-muted-foreground sm:flex-row sm:justify-between sm:px-8"><span>© 2026 Wilson Njoroge Wanderi</span><span>Payment engineering · Cybersecurity · Cloud security</span></div></footer>
    </div>
  );
}

function ProjectGroup({ title, subtitle, items }: { title: string; subtitle: string; items: typeof projects }) {
  return <div className="mt-16"><div className="mb-6 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between"><h3 className="font-display text-2xl text-foreground">{title}</h3><p className="text-sm text-muted-foreground">{subtitle}</p></div><div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">{items.map((project) => <ProjectCard project={project} key={project.slug} />)}</div></div>;
}

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined} aria-label={label} title={label} className="flex size-11 items-center justify-center bg-foreground text-background transition-colors hover:bg-primary">{children}<span className="sr-only">{label}</span></a>;
}
