import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import InterestCard from "@/components/InterestCard";
import ContactForm from "@/components/ContactForm";
import { Sparkles } from "lucide-react";
import ScrollTopOnLoad from "@/components/ScrollTopOnLoad";
import ResetHashOnHome from "@/components/ResetHashOnHome";

export const metadata = {
  title: "Owen Burke | AI Portfolio",
  description:
    "Finance & Data Analytics Student. Projects, interests, and contact.",
};

export default function HomePage() {
  return (
    <div className="space-y-16 sm:space-y-24">
      <ScrollTopOnLoad />
      <ResetHashOnHome />
      {/* Home / Hero */}
      <Section id="home">
        <div className="text-center space-y-5 sm:space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs" style={{ borderColor: "var(--border)", background: "var(--surface-2)" }}>
            <Sparkles className="h-3.5 w-3.5" />
            AI Portfolio
          </div>
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
              Owen Burke
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-[var(--text-muted)]">
              AI Builder
            </h2>
          </div>
          <p className="mx-auto max-w-3xl text-base sm:text-lg text-[var(--text-muted)]">
            Finance &amp; Data Analytics Student
          </p>
          <div className="flex justify-center">
            <a href="#contact" className="btn">Contact Owen</a>
          </div>
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" title="Projects">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProjectCard
            title="HydraIQ"
            imageSrc="/hydraiq.png"
            imageFit="contain"
            imageAspect="taller"
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
            title="Intrinsic"
            description="Equity research workspace for building valuation-backed investment theses."
            highlights={[
              "AI-assisted stock research workflow",
              "Thesis, comps, and DCF framework",
              "Exportable investment memo output",
            ]}
            tools={["Claude", "GitHub", "Vercel"]}
            href="/projects/intrinsic"
            cta="View project"
          />
          <ProjectCard
            title="Compound"
            description="Personal knowledge engine that captures ideas and organizes them with AI."
            highlights={[
              "Local-first storage with offline support",
              "AI-powered topic classification",
              "Structured notes across categories",
            ]}
            tools={["Cursor", "GitHub", "Vercel"]}
            href="/projects/compound"
            cta="View project"
          />
          <ProjectCard
            title="Coming Soon"
            description=""
            highlights={[]}
            tools={[]}
            comingSoon
          />
        </div>
      </Section>

      {/* Interests */}
      <Section id="interests" title="Interests">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <InterestCard
            title="Soccer"
            actions={[{ label: "View", href: "/soccer" }]}
          />
          <InterestCard
            title="Writing"
            actions={[{ label: "View", href: "/research/state-of-the-financial-markets-nearing-the-peak" }]}
          />
          <InterestCard
            title="Study Abroad"
            actions={[{ label: "View", href: "/study-abroad" }]}
          />
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact" centerHeader>
        <div className="max-w-2xl mx-auto">
          <div className="card p-8 space-y-6">
            <ContactForm />
            <div className="pt-4 border-t text-sm text-center space-y-2" style={{ borderColor: "var(--border)" }}>
              <div>
                <a href="mailto:owenburke54@gmail.com" className="underline">
                  owenburke54@gmail.com
                </a>
              </div>
              <div>
                <a
                  href="https://www.linkedin.com/in/owen-burke-0ab126257"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  LinkedIn
                </a>
              </div>
              <div>
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
        </div>
      </Section>
    </div>
  );
}
