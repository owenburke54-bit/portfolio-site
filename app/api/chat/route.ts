import { NextRequest } from "next/server";
import OpenAI from "openai";
import { promises as fs } from "fs";
import path from "path";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Simple in-memory rate limit per IP
const rateMap = new Map<string, number>();
const MAX_MESSAGES = 15;

function getClientKey(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for") ||
    req.headers.get("x-real-ip") ||
    "anon";
  return ip.split(",")[0].trim();
}

export async function POST(req: NextRequest) {
  // Rate limit
  const key = getClientKey(req);
  const used = rateMap.get(key) ?? 0;
  if (used >= MAX_MESSAGES) {
    return new Response(
      JSON.stringify({
        message:
          "Free demo limit reached — feel free to contact Owen directly.",
      }),
      { status: 429, headers: { "Content-Type": "application/json" } },
    );
  }
  rateMap.set(key, used + 1);

  // Load local knowledge: persona, facts, soccer, projects
  const aiDir = path.join(process.cwd(), "ai");
  const personaPath = path.join(aiDir, "persona.md");
  const factsPath = path.join(aiDir, "facts.json");
  const soccerPath = path.join(aiDir, "soccer.md");

  const [persona, factsRaw, soccerRaw] = await Promise.all([
    fs.readFile(personaPath, "utf8"),
    fs.readFile(factsPath, "utf8").catch(() => "{}"),
    fs.readFile(soccerPath, "utf8").catch(() => ""),
  ]);

  let facts: unknown;
  try {
    facts = JSON.parse(factsRaw);
  } catch {
    facts = {};
  }

  const projectsDir = path.join(aiDir, "projects");
  let projectsContent = "";
  try {
    const entries = await fs.readdir(projectsDir, { withFileTypes: true });
    for (const e of entries) {
      if (e.isFile() && e.name.endsWith(".md")) {
        const content = await fs.readFile(
          path.join(projectsDir, e.name),
          "utf8"
        );
        projectsContent += `\n--- ai/projects/${e.name} ---\n${content}`;
      }
    }
  } catch {
    // projects/ may not exist
  }

  const fallback =
    "I don't have that detail yet — you can check the relevant page or contact Owen directly.";

  const systemPrompt = [
    "You are an AI version of Owen Burke. Answer ONLY from the knowledge below. NEVER invent facts.",
    "",
    "CRITICAL: When asked 'favorite soccer team' or 'favorite team' or 'what team do you support': answer Manchester United. It is in soccer_profile.favorite_team and soccer.md.",
    "CRITICAL: When asked 'what position' or 'soccer position': answer 8 (central midfielder). It is in soccer_profile.preferred_position and soccer.md.",
    "",
    "The FACTS and SOCCER sections contain verified info: soccer position (8), favorite team (Manchester United), clubs, college stats, hometown, family, dogs, projects, skills, post_graduation (graduation May 2026, job search status, open to Finance/Tech/AI). The site_content_full section has details on all projects (HydraIQ, Intrinsic, Compound), articles (Best 10 Soccer Players, State of Financial Markets), study abroad maps, and resume. You MUST answer from them when the question matches.",
    "Only use the fallback when the question asks about something with ZERO matching info in the knowledge.",
    `If the answer is truly not in the knowledge, reply exactly: "${fallback}"`,
    "Be concise. Do not include source citations or file paths in your responses.",
    "",
    "=== PERSONA ===",
    persona.trim(),
    "",
    "=== FACTS (JSON) ===",
    JSON.stringify(facts, null, 2),
    "",
    "=== SOCCER ===",
    soccerRaw.trim(),
    projectsContent ? `\n=== PROJECTS ===${projectsContent}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  type Msg = { role: "user" | "assistant"; content: string };
  const body = (await req.json()) as { messages?: Msg[] };
  const messages = body?.messages ?? [];

  try {
    const stream = await client.responses.create({
      model: "gpt-4.1-mini",
      input: [
        { role: "system", content: systemPrompt },
        ...messages.map((m) => ({ role: m.role, content: m.content })),
      ],
      max_output_tokens: 300,
      stream: true,
    });

    const encoder = new TextEncoder();
    const readable = new ReadableStream({
      async start(controller) {
        let fullText = "";
        try {
          for await (const event of stream) {
            if (event.type === "response.output_text.delta" && "delta" in event) {
              const chunk = event.delta as string;
              fullText += chunk;
              controller.enqueue(encoder.encode(`data: ${JSON.stringify({ delta: chunk })}\n\n`));
            }
          }
          if (!fullText.trim()) fullText = fallback;
          controller.enqueue(encoder.encode(`data: ${JSON.stringify({ done: true, message: fullText })}\n\n`));
        } catch (err) {
          console.error(err);
          controller.enqueue(encoder.encode(`data: ${JSON.stringify({ done: true, message: fallback })}\n\n`));
        } finally {
          controller.close();
        }
      },
    });

    return new Response(readable, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });
  } catch (err) {
    console.error(err);
    return new Response(
      JSON.stringify({ message: fallback }),
      { status: 200, headers: { "Content-Type": "application/json" } },
    );
  }
}

