## AI Chat (Talk to Owen) — V1

This repo includes a minimal, grounded chat system that only answers from local knowledge.

### How it works

- `ai/persona.md` — Tone and rules. Keep it short and strict. The system prompt injects this verbatim.
- `ai/facts.json` — Structured facts only. No claims beyond this file. The assistant refuses to fabricate.
- `ai/projects/` — Future per‑project notes or files (empty placeholder now).

The API route at `app/api/chat/route.ts`:
- Uses the OpenAI Responses API (`gpt-4.1-mini`) with `max_output_tokens: 500`
- Loads `persona.md` and `facts.json` from disk and builds a strict system prompt
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

### Whisprflow transcript later

When you have a Whisprflow (or any transcript) to ground answers:
- Save it under `ai/projects/<project-slug>/transcript.md`
- Summarize key facts into `ai/facts.json` (short bullets or fields)
- The assistant should still only use what’s in `facts.json` and persona files

### Environment

- Set `OPENAI_API_KEY` in your environment (never client-side). Example:
```
OPENAI_API_KEY=sk-...
```

# Owen Burke — Portfolio
