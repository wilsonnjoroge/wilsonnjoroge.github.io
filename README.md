# Wilson Njoroge Wanderi — Personal Portfolio

Professional portfolio website for Wilson Njoroge Wanderi.

## Positioning
Payment Middleware Engineer | Cybersecurity & Cloud Security Specialist | Enterprise IT | AWS Security | Security Operations | DFIR

Career story: Software Engineering → Payment/API Middleware → Enterprise Integration → Cybersecurity & Security Operations → Cloud Security → Digital Forensics & IR

## Projects featured (six, in order)
1. Paystack Payment Integration & Transaction Middleware — real, complete, working end to end
2. M-Pesa Daraja API Integration & Payment Middleware — real, complete, working end to end
3. AWS Cloud Security & DFIR Capstone
4. Wazuh + Suricata SOC & Detection Engineering Lab
5. Metasploitable2 Vulnerability Assessment (VAPT)
6. Enterprise Middleware Security (production experience at Equity Group Holdings)

## Before publishing — action items
- [ ] **Confirm and correct the Paystack repo URL.** Currently a placeholder:
      `https://github.com/wilsonnjoroge/paystack-integration`
- [ ] **Confirm and correct the Daraja repo URL.** Currently a placeholder:
      `https://github.com/wilsonnjoroge/daraja-mpesa-integration`
- [ ] Add the final CV PDF to `assets/Wilson-Njoroge-Wanderi-CV.pdf` and link it if desired.
- [ ] Add selected project screenshots under `assets/` only where they materially strengthen a case study.
- [ ] Keep all evidence sanitized: never publish credentials, private banking data,
      internal hostnames, customer data, secrets, or confidential screenshots —
      this applies especially to the Paystack/Daraja and Enterprise Middleware
      projects, which touch real transaction and banking systems.
- [ ] Since this site is being shared with Shujaa Pay (a payment company),
      double-check that the Paystack and Daraja project descriptions match
      exactly what's in those two repos — no over-claiming beyond what's shipped.

## Deploy (GitHub Pages)
1. Create a public GitHub repository named `wilsonnjoroge.github.io`.
2. Copy the contents of this folder into the repository.
3. Commit and push to the `main` branch.
4. In GitHub: Settings → Pages → Deploy from branch → `main` / root.
5. The site will be available at `https://wilsonnjoroge.github.io/`.

## Design
Minimal enterprise aesthetic, restrained palette, responsive layout, no unnecessary animation or visual clutter. Numbered project markers (01–06) are intentional: they represent the career-story sequence from software engineering through to DFIR, not decoration.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Built with

- TanStack Start
- TypeScript
- React
- Tailwind CSS
