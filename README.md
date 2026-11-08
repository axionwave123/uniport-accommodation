# UNIPORT Student Accommodation

Discovery platform for available rooms near the University of Port Harcourt (UNIPORT).

**Stack:** Next.js (App Router) + TypeScript + Tailwind · Supabase · Google Maps JS + Routes API

**Core model:** Property (building) → Rooms (availability is per-room). One building overview video + separate media per room.

**Key rules:**
- Agents publish free, instantly
- Platform collects no rent or commission
- Students contact agents directly
- Real road distance + travel time (not straight-line)
- No fake listings, reviews, or availability

## Getting started

1. Read `GROK_START_HERE.md` first
2. Then `PROJECT_CONTEXT.md`, `DECISION_LOG.md`, `APPROVED_FEATURES.md`
3. Design tokens: `src/styles/tokens.css` + `DESIGN_SYSTEM.md`
4. Database: `supabase/migrations/0001_initial_schema.sql`

Full original handover docs live in `docs/original/`.

## Repo structure

```
├── GROK_START_HERE.md          ← start here
├── PROJECT_CONTEXT.md
├── DECISION_LOG.md
├── APPROVED_FEATURES.md
├── DESIGN_SYSTEM.md
├── TRACEABILITY_MATRIX.md
├── REMAINING_TASKS.md
├── IMPLEMENTATION_PROGRESS.md
├── src/styles/tokens.css
├── supabase/migrations/
└── docs/original/              ← full design & product specs
```

Built for growth first. Expand later into a city-wide Port Harcourt real-estate marketplace.
