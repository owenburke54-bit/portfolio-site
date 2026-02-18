import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import InterestCard from "@/components/InterestCard";
import ContactForm from "@/components/ContactForm";
import { Cpu } from "lucide-react";
import Chat from "@/components/Chat";

export const metadata = {
  title: "Owen Burke | AI Builder",
  description:
    "AI Builder — Finance & Data Analytics Student | D1 Student-Athlete. Projects, interests, and contact.",
};

export default function HomePage() {
  return (
    <div className="space-y-16 sm:space-y-24">
      {/* Home / Hero */}
      <Section id="home">
        <div className="text-center space-y-5 sm:space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs" style={{ borderColor: "var(--border)", background: "var(--surface-2)" }}>
            <Cpu className="h-3.5 w-3.5" />
            Builder profile
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight">
            AI Builder
          </h1>
          <p className="mx-auto max-w-3xl text-base sm:text-lg text-[var(--text-muted)]">
            Finance &amp; Data Analytics Student | D1 Student-Athlete
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <a href="#projects" className="btn">View Projects</a>
            <a href="#contact" className="btn-secondary">Contact</a>
          </div>
        </div>
        <div className="mt-8 sm:mt-10"><Chat /></div>
      </Section>

      {/* Projects */}
      <Section id="projects" title="Projects" subtitle="Selected work and current builds.">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ProjectCard
            title="HydraIQ"
            description="Hydration tracking app with reminders and WHOOP API integration."
            highlights={[
              "WHOOP API integration",
              "Daily hydration tracking + trends",
              "Reminders & insights driven by data",
            ]}
            tools={["Cursor", "GitHub", "Vercel"]}
            href="/projects/hydraiq"
            cta="View project"
          />
          <ProjectCard
            title="Fin-Advisor"
            description="Portfolio analytics tool for tracking positions and performance."
            highlights={[
              "Rebalance simulator",
              "Allocation + performance views",
              "Clean, fast dashboard UX",
            ]}
            tools={["Cursor", "GitHub", "Vercel"]}
            href="/projects/fin-advisor"
            cta="View project"
          />
          <ProjectCard
            title="New Project (Claude)"
            description="Building now — shipping soon."
            highlights={["Exploring a new problem + prototype"]}
            tools={["Claude", "GitHub", "Vercel"]}
            comingSoon
          />
        </div>
      </Section>

      {/* Interests */}
      <Section id="interests" title="Interests" subtitle="A few areas I care about.">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <InterestCard
            title="Soccer"
            bullets={[
              "D1 student-athlete discipline + leadership",
              "Growth mindset, team-first",
            ]}
            actions={[{ label: "View", href: "/soccer" }]}
          />
          <InterestCard
            title="Writing"
            bullets={["Top 10 soccer players I’ve watched", "Market outlook articles"]}
            actions={[
              { label: "Top 10 Players", href: "/research/best-10-from-the-stands" },
              { label: "Markets Article", href: "/research/state-of-the-financial-markets-nearing-the-peak" },
            ]}
          />
          <InterestCard
            title="Study Abroad"
            bullets={["Study abroad experience → data", "Power BI interactive maps"]}
            actions={[{ label: "Power BI Maps", href: "/study-abroad" }]}
          />
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card p-6 space-y-3">
            <h3 className="font-semibold">Get in touch</h3>
            <div className="text-sm">
              <div>
                <a href="mailto:owenburke54@gmail.com" className="underline">
                  owenburke54@gmail.com
                </a>
              </div>
              <div className="mt-2">
                <a
                  href="https://www.linkedin.com/in/owen-burke-0ab126257"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  LinkedIn
                </a>
              </div>
              <div className="mt-2">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Resume (PDF)
                </a>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </Section>
    </div>
  );
}
