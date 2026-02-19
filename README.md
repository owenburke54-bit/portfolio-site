## AI Chat (Talk to Owen) — V1

This repo includes a minimal, grounded chat system that only answers from local knowledge.

### How it works

- `ai/persona.md` — Tone and rules. Keep it short and strict. The system prompt injects this verbatim.
- `ai/facts.json` — Structured facts only. No claims beyond this file. The assistant refuses to fabricate.
- `ai/projects/` — Per-project notes (`.md` files).
- `ai/soccer.md` — Soccer narrative (youth, clubs, college).
- `ai/transcripts/` — Raw Wisprflow transcripts; run `npm run ingest:wisprflow` to update knowledge.

The API route at `app/api/chat/route.ts`:
- Uses the OpenAI Responses API (`gpt-4.1-mini`) with `max_output_tokens: 500`
- Loads `persona.md`, `facts.json`, `ai/soccer.md`, and `ai/projects/*.md` and builds a strict system prompt
- Returns a fallback if the answer is missing:
  “I don’t have that detail yet — you can check the project page or contact Owen directly.”
- Never exposes the API key client-side
- Includes a simple in‑memory rate limit (15 messages per IP)

The UI (`components/Chat.tsx`) is a small client component:
- Message history
- Input + Send
- Suggested prompt chips
- Dark theme styling aligned with the site

### Add knowledge safely

1) Update `ai/facts.json` — add real, verifiable details only. Example shape:
```json
{
  "name": "Owen Burke",
  "education": "Stonehill College",
  "major": "Finance & Data Analytics",
  "skills": ["TypeScript", "Next.js", "TailwindCSS"],
  "experience": [],
  "projects": []
}
```

2) Update `ai/persona.md` — keep the tone consistent and rules strict. Do not add marketing fluff.

3) Optional: add per‑project notes in `ai/projects/` and reference them in `facts.json` if needed.

### Wisprflow transcript ingestion

1. **Paste** the raw transcript into `ai/transcripts/wisprflow_latest.md`
2. **Run** the ingest script: `npm run ingest:wisprflow`
3. **Review** the console report (facts_added, facts_skipped_uncertain, facts_conflicts)
4. **Check** `ai/transcripts/conflicts.md` if any conflicts were found
5. **Deploy** as usual

**Important:** Never put secrets in transcripts. Transcripts should contain only safe-to-share personal info.

### Environment

- Set `OPENAI_API_KEY` in your environment (never client-side). Example:
```
OPENAI_API_KEY=sk-...
```

# Owen Burke — Portfolio
