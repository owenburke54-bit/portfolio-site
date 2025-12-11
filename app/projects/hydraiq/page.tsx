import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HydraIQ | Personal Performance Analytics Project by Owen Burke",
  description:
    "HydraIQ brings together everyday data and turns it into simple, actionable insights to guide better decisions.",
};

export default function HydraIQPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="HydraIQ"
        subtitle="A personal performance and insights tool I’m building to help people make better decisions with their data."
      />

      <section className="card p-6 space-y-4">
        <h2 className="text-xl font-semibold">Summary</h2>
        <p className="text-gray-700">
          HydraIQ is an experimental personal analytics app that brings together data from
          daily life—sleep, training, work, and reflection—and turns it into simple, actionable
          insights. The goal is to give users a clear picture of how their habits stack up over
          time and which levers actually move their performance. I’m using HydraIQ as a
          playground for ideas at the intersection of finance-style analytics, sports performance,
          and health tech.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Daily scoring system for key habits and behaviors</li>
          <li>Trend charts to visualize consistency over time</li>
          <li>Simple dashboards inspired by WHOOP and other wearables</li>
        </ul>
        <div className="pt-2">
          <Link
            href="https://hydra-iq-mvp.vercel.app"
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open HydraIQ
          </Link>
        </div>
      </section>

      <section className="card p-6 space-y-3">
        <h2 className="text-xl font-semibold">Science &amp; Research</h2>
        <p className="text-gray-700">
          HydraIQ pulls from research on habit formation and behavior change—ideas like
          implementation intentions, habit stacking, and feedback loops. It takes cues from sports
          science and wearables, where consistent tracking of sleep, training load, and recovery
          can guide better decision-making. It also follows the quantified-self principle: simple,
          understandable metrics plus regular reflection drive better long-term choices.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Behavior change frameworks and feedback loops</li>
          <li>Sports science monitoring for performance and recovery</li>
          <li>Quantified-self mindset: track, reflect, adjust</li>
        </ul>
      </section>

      <section className="card p-6 space-y-2">
        <h2 className="text-xl font-semibold">Tech Stack</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Next.js and React for the frontend</li>
          <li>TypeScript for type safety</li>
          <li>Vercel for hosting and deployment</li>
          <li>(Data layer and integrations placeholders)</li>
        </ul>
      </section>

      <section className="card p-6 space-y-2">
        <h2 className="text-xl font-semibold">What I Learned</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Small, consistent metrics beat complex dashboards.</li>
          <li>Clear copy and simple visuals help users act on data.</li>
          <li>Designing for reflection improves adherence and outcomes.</li>
          <li>Scope control is essential when exploring new integrations.</li>
        </ul>
      </section>
    </div>
  );
}


