import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import InterestCard from "@/components/InterestCard";
import { useToast } from "@/components/Toast";
import { Cpu, MessageCircleMore } from "lucide-react";

export const metadata = {
  title: "Owen Burke | AI Builder",
  description:
    "AI Builder — Finance & Data Analytics Student | D1 Student-Athlete. Projects, interests, and contact.",
};

function TalkToOwen() {
  return (
    <div className="card p-6 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <MessageCircleMore className="h-5 w-5" />
        <div>
          <h3 className="font-semibold">Talk to Owen</h3>
          <p className="text-sm text-[var(--text-muted)]">
            Chatbot coming soon — a simple way to ask about projects and interests.
          </p>
        </div>
      </div>
      <button className="btn opacity-70 cursor-not-allowed">Coming Soon</button>
    </div>
  );
}

export default function HomePage() {
  const { show } = useToast();

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
            Finance &amp; Data Analytics Student | D1 Student-Athlete — building systems that turn data into clear decisions and useful products.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <a href="#projects" className="btn">View Projects</a>
            <a href="#contact" className="btn-secondary">Contact</a>
          </div>
        </div>
        <div className="mt-8 sm:mt-10">
          <TalkToOwen />
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" title="Projects" subtitle="Selected work and current builds.">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ProjectCard
            title="HydraIQ"
            description="Hydration tracking PWA integrating performance signals and reminders."
            highlights={[
              "PWA-first mobile experience",
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
              "CSV import workflow",
              "Allocation + performance views",
              "Clean, fast dashboard UX",
            ]}
            tools={["Cursor", "GitHub", "Vercel"]}
            href="/projects/fin-advisor"
            cta="View project"
          />
          <ProjectCard
            title="New Project (Claude Code)"
            description="Building now — shipping soon."
            highlights={["Exploring a new problem + prototype"]}
            tools={["Claude Code", "GitHub", "Vercel"]}
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
          />
          <InterestCard
            title="Writing"
            bullets={[
              "Photo essay + storytelling (Florence experience)",
              "Translate complex topics into plain language",
            ]}
          />
          <InterestCard
            title="Study Abroad"
            bullets={[
              "Europe travel perspective",
              "Data visualization mindset",
            ]}
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
                <span className="text-[var(--text-muted)]">Email:</span>{" "}
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
            </div>
          </div>
          <form
            className="card p-6 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              show("Thanks — I’ll reply soon.");
            }}
          >
            <div>
              <label className="block text-sm mb-1">Name</label>
              <input
                className="w-full rounded-md border bg-transparent px-3 py-2"
                style={{ borderColor: "var(--border)" }}
                required
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                className="w-full rounded-md border bg-transparent px-3 py-2"
                style={{ borderColor: "var(--border)" }}
                required
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Message</label>
              <textarea
                rows={4}
                className="w-full rounded-md border bg-transparent px-3 py-2"
                style={{ borderColor: "var(--border)" }}
                required
              />
            </div>
            <button className="btn" type="submit">Send</button>
          </form>
        </div>
      </Section>
    </div>
  );
}
