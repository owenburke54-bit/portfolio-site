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

  // Load local knowledge
  const personaPath = path.join(process.cwd(), "ai", "persona.md");
  const factsPath = path.join(process.cwd(), "ai", "facts.json");
  const [persona, factsRaw] = await Promise.all([
    fs.readFile(personaPath, "utf8"),
    fs.readFile(factsPath, "utf8"),
  ]);

  let facts: unknown;
  try {
    facts = JSON.parse(factsRaw);
  } catch {
    facts = {};
  }

  const systemPrompt = [
    "You are an AI version of Owen Burke.",
    "Answer ONLY using the knowledge provided below.",
    "If the answer is not present, reply exactly:",
    '"I don’t have that detail yet — you can check the project page or contact Owen directly."',
    "Be concise. Avoid hype. No fabrication.",
    "",
    "=== PERSONA ===",
    persona.trim(),
    "",
    "=== FACTS (JSON) ===",
    JSON.stringify(facts, null, 2),
  ].join("\n");

  type Msg = { role: "user" | "assistant"; content: string };
  const body = (await req.json()) as { messages?: Msg[] };
  const messages = body?.messages ?? [];

  try {
    const resp = await client.responses.create({
      model: "gpt-4.1-mini",
      input: [
        { role: "system", content: systemPrompt },
        ...messages.map((m) => ({ role: m.role, content: m.content })),
      ],
      max_output_tokens: 500,
    });

    const text = resp.output_text || "I don’t have that detail yet — you can check the project page or contact Owen directly.";
    return new Response(JSON.stringify({ message: text }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error(err);
    return new Response(
      JSON.stringify({
        message:
          "I don’t have that detail yet — you can check the project page or contact Owen directly.",
      }),
      { status: 200, headers: { "Content-Type": "application/json" } },
    );
  }
}

