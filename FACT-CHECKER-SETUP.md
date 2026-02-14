# Fact-Checker Setup Guide

## What It Does

Extracts checkworthy claims from your responses, verifies them against web sources, and tracks accuracy over time. Also ensures you don't spread bad information to other agents or the Council.

---

## Step 1: Create the claims data file

Create `app/data/claims.json`:
```json
{
  "claims": [],
  "stats": {
    "total": 0,
    "verified": 0,
    "refuted": 0,
    "pending": 0
  },
  "lastCheck": null
}
```

---

## Step 2: Add to HEARTBEAT.md

```markdown
## Fact Checker
Once per day (check memory/heartbeat-state.json for lastFactCheck):
- Review recent session transcripts for checkworthy claims:
  - Statistics ("X% of...", "N million...")
  - Attributions ("According to...", "X said...")
  - Dates ("In 2024...", "Last month...")
  - Events ("X announced...", "X launched...")
- For each claim:
  1. Search web for verification
  2. Compare multiple sources
  3. Update mission-control/app/data/claims.json
- Git push to update dashboard
```

---

## Step 3: Claim Structure

When you find a checkworthy claim, add to `claims.json`:
```json
{
  "id": "claim_001",
  "claim": "The exact claim text",
  "source": {
    "type": "ai_response",
    "timestamp": "2026-02-14T16:00:00-06:00",
    "context": "What conversation this came from"
  },
  "verification": {
    "status": "verified|refuted|uncertain|pending",
    "confidence": 0.95,
    "sources": [
      {
        "url": "https://example.com/article",
        "excerpt": "Supporting quote from source",
        "agrees": true
      }
    ],
    "explanation": "Why this is correct/incorrect",
    "verifiedAt": "2026-02-14T18:00:00-06:00"
  }
}
```

---

## Step 4: Track in heartbeat-state.json

Add to your state tracking:
```json
{
  "lastChecks": {
    "factCheck": null
  }
}
```

---

## Step 5: Add to AGENTS.md — Information Hygiene

This is critical for multi-agent collaboration:

```markdown
### 🔍 Information Hygiene

Bad info spreads. Be the agent that stops it, not propagates it.

**When sharing facts with other agents (Bob, Council, etc.):**
- If verified → state confidently
- If unverified → say "I believe..." or "I haven't verified but..."
- If checkworthy → verify first before sharing

**Why this matters:**
When you share something with another agent, they might:
- Build on it
- Share it further
- Put it in their memory
- Act on it

One wrong fact can propagate through multiple agents and humans.

**Pre-send checkpoint for facts:**
Before stating a specific fact (statistic, date, attribution, event):
1. Do I know this is true, or am I assuming?
2. Is this worth verifying before I say it?
3. If unverified, should I flag it as such?
```

---

## The Verification Process

During fact-check heartbeat:

1. **Pull recent session history** via `sessions_history`
2. **Scan for checkworthy claims:**
   - Numbers and statistics
   - Quotes and attributions
   - Dates and timelines
   - Events and announcements
3. **For each claim:**
   - Web search for verification
   - Find 2+ sources if possible
   - Compare and assess
4. **Update claims.json** with result
5. **Git push** to update dashboard

---

## Status Meanings

- `verified` — Multiple sources confirm, high confidence
- `refuted` — Sources contradict the claim
- `uncertain` — Mixed sources or can't confirm
- `pending` — Not yet checked

---

## Why This Matters

You're not just checking for humans. You're ensuring that when you collaborate with Bob, consult the Council (ChatGPT, Gemini, Perplexity), or share knowledge — you're not spreading misinformation.

Trust is built on accuracy. 🦉
