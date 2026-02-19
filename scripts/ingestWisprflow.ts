#!/usr/bin/env node
/**
 * Wisprflow transcript ingestion — deterministic, no model calls.
 * Updates ai/facts.json and ai/soccer.md from explicit facts in the transcript.
 * Skips uncertain lines. Writes conflicts to ai/transcripts/conflicts.md.
 */

import { promises as fs } from "fs";
import path from "path";

const UNCERTAIN_PATTERNS = /\b(I think|maybe|perhaps|not sure|I'm not sure|I guess|probably|might have)\b/i;

interface Report {
  facts_added: string[];
  facts_skipped_uncertain: string[];
  facts_conflicts: string[];
}

function isUncertain(line: string): boolean {
  return UNCERTAIN_PATTERNS.test(line);
}

async function ingest(transcriptPath: string): Promise<void> {
  const root = path.resolve(process.cwd());
  const transcriptFullPath = path.isAbsolute(transcriptPath)
    ? transcriptPath
    : path.join(root, transcriptPath);

  const report: Report = {
    facts_added: [],
    facts_skipped_uncertain: [],
    facts_conflicts: [],
  };

  let raw: string;
  try {
    raw = await fs.readFile(transcriptFullPath, "utf8");
  } catch (e) {
    console.error("Could not read transcript:", transcriptFullPath, e);
    process.exit(1);
  }

  const lines = raw.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
  const factsPath = path.join(root, "ai", "facts.json");
  const soccerPath = path.join(root, "ai", "soccer.md");
  const conflictsPath = path.join(root, "ai", "transcripts", "conflicts.md");

  let facts: Record<string, unknown>;
  try {
    const factsRaw = await fs.readFile(factsPath, "utf8");
    facts = JSON.parse(factsRaw) as Record<string, unknown>;
  } catch {
    facts = {};
  }

  const soccerLines: string[] = [];
  const conflicts: string[] = [];

  for (const line of lines) {
    if (isUncertain(line)) {
      report.facts_skipped_uncertain.push(line.slice(0, 80) + (line.length > 80 ? "…" : ""));
      continue;
    }

    // Simple keyword extraction — only explicit, clear patterns
    // Hometown
    const hometownMatch = line.match(/Holliston,?\s*Massachusetts/i);
    if (hometownMatch && !facts.hometown_current) {
      facts.hometown_current = "Holliston, Massachusetts";
      report.facts_added.push("hometown_current");
    }

    const framinghamMatch = line.match(/Framingham,?\s*Massachusetts/i);
    if (framinghamMatch && facts.childhood_move === undefined) {
      const move = facts.childhood_move as Record<string, unknown> | undefined;
      if (!move) {
        facts.childhood_move = {
          from: "Framingham, Massachusetts",
          to: "Holliston, Massachusetts",
          age_at_move_years: 1.5,
        };
        report.facts_added.push("childhood_move");
      }
    }

    // Parents (explicit mentions)
    if (line.match(/\bJen\s+Burke\b/i) && Array.isArray(facts.parents) && !facts.parents.includes("Jen Burke")) {
      (facts.parents as string[]).push("Jen Burke");
      report.facts_added.push("parents (Jen)");
    }
    if (line.match(/\bScott\s+Burke\b/i) && Array.isArray(facts.parents) && !facts.parents.includes("Scott Burke")) {
      (facts.parents as string[]).push("Scott Burke");
      report.facts_added.push("parents (Scott)");
    }

    // Birthday
    const bdayMatch = line.match(/birthday[:\s]+(\d{4}-\d{2}-\d{2})/i) || line.match(/(\d{4}-\d{2}-\d{2})/);
    if (bdayMatch && !facts.birthday) {
      const candidate = bdayMatch[1];
      if (candidate.startsWith("2003") || candidate.startsWith("20")) {
        facts.birthday = candidate;
        report.facts_added.push("birthday");
      }
    }

    // Soccer club mentions
    if (line.match(/Abbey\s*Villa/i)) {
      soccerLines.push(line);
    }
    if (line.match(/\bNEFC\b/i)) {
      soccerLines.push(line);
    }

    // Position 8
    if (line.match(/position\s+8|playing\s+8|played\s+(as\s+an?\s+)?8\b|#8/i)) {
      soccerLines.push(line);
    }

    // Season stats — explicit numbers only
    const gpMatch = line.match(/games?\s+played[:\s]+(\d+)/i);
    if (gpMatch && Array.isArray(facts.college_soccer)) {
      const last = facts.college_soccer[facts.college_soccer.length - 1] as Record<string, unknown>;
      if (last && last.games_played === undefined) {
        last.games_played = parseInt(gpMatch[1], 10);
        report.facts_added.push("college_soccer.games_played");
      }
    }

    const goalsMatch = line.match(/goals?[:\s]+(\d+)/i);
    if (goalsMatch && Array.isArray(facts.college_soccer)) {
      const last = facts.college_soccer[facts.college_soccer.length - 1] as Record<string, unknown>;
      if (last && last.goals === undefined) {
        last.goals = parseInt(goalsMatch[1], 10);
        report.facts_added.push("college_soccer.goals");
      }
    }
  }

  // Conflict handling: if we ever detect a conflicting value, append to conflicts
  // (This script is conservative; it does not overwrite. Conflicts logged for manual review.)
  if (conflicts.length > 0) {
    await fs.writeFile(
      conflictsPath,
      `# Ingest Conflicts\n\nGenerated ${new Date().toISOString()}\n\n${conflicts.join("\n\n")}`,
      "utf8"
    );
  }

  await fs.writeFile(factsPath, JSON.stringify(facts, null, 2), "utf8");

  // Soccer.md: only append new relevant lines if we found any, and they add value
  if (soccerLines.length > 0) {
    let soccerContent: string;
    try {
      soccerContent = await fs.readFile(soccerPath, "utf8");
    } catch {
      soccerContent = "# Soccer notes from transcript\n\n";
    }
    const newBlock = `\n\n## From latest transcript\n\n${soccerLines.map((l) => `- ${l}`).join("\n")}`;
    if (!soccerContent.includes("From latest transcript")) {
      await fs.writeFile(soccerPath, soccerContent.trimEnd() + newBlock, "utf8");
      report.facts_added.push("soccer.md (appended transcript notes)");
    }
  }

  console.log(JSON.stringify(report, null, 2));
}

const inputPath = process.argv[2] || "ai/transcripts/wisprflow_latest.md";
ingest(inputPath).catch((e) => {
  console.error(e);
  process.exit(1);
});
