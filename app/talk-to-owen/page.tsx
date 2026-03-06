import PageHeader from "@/components/PageHeader";
import Chat from "@/components/Chat";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Talk to Owen | Owen Burke",
  description: "Ask Owen (AI) about his work, experience, and background.",
};

export default function TalkToOwenPage() {
  return (
    <div className="space-y-8">
      <PageHeader title="Talk to Owen" subtitle="Ask about my projects, experience, or interests." />
      <div className="max-w-4xl mx-auto">
        <Chat showSuggestedQuestions chatHeight={280} />
      </div>
    </div>
  );
}
