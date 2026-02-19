# Transcripts

Raw Wisprflow (or other) transcripts go here for ingestion into the knowledge base.

## Workflow

1. **Paste** the raw transcript into `ai/transcripts/wisprflow_latest.md`
2. **Run** the ingest script: `npm run ingest:wisprflow`
3. **Review** the console report (facts_added, facts_skipped_uncertain, facts_conflicts)
4. **Check** `ai/transcripts/conflicts.md` if any conflicts were found — the script will not overwrite existing facts
5. **Deploy** as usual

## Notes

- Never put secrets in transcripts. Transcripts should contain only safe-to-share personal info.
- The ingest script is deterministic and does not call any AI model. It uses regex and keyword rules to extract explicit facts.
- Lines with uncertainty ("I think", "maybe", "not sure") are skipped.
