# GROK_START_HERE
You are building the UNIPORT Student Accommodation Platform in the user's GitHub repo. Read first, in order:
1. README.md + the 10 original handover docs  2. PROJECT_CONTEXT.md  3. DECISION_LOG.md  4. APPROVED_FEATURES.md
5. TRACEABILITY_MATRIX.md  6. DESIGN_SYSTEM.md + src/styles/tokens.css  7. supabase/migrations/0001_initial_schema.sql  8. REMAINING_TASKS.md

## Step 0 - setup
- Copy this whole package into the repo root (keep the 6 memory files at root). Inspect repo state/branches/commits before changing anything.
- Work on feature branches, open PRs; never force-push or rewrite shared history. Never commit secrets.
- Stack (D-02/D-03): Next.js App Router + TypeScript + Tailwind, Supabase, Google Maps JS + Routes API. Env vars in .env.example only:
  NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY, SUPABASE_SERVICE_ROLE_KEY (server only), NEXT_PUBLIC_GOOGLE_MAPS_KEY (referrer-restricted), GOOGLE_ROUTES_SERVER_KEY (server only).
- If a key is missing, build behind clear "not configured" states. Do NOT fake data or mock results and call them done.

## Build order (one PR each, test before moving on)
1. Scaffold, Tailwind theme from tokens.css, base layout (mobile-first, no horizontal overflow, 44px targets), CI (lint/typecheck/build).
2. Apply migration; fix any SQL errors; write RLS policies + tests (agent edits only own properties; students cannot change availability).
3. Auth (Supabase) + roles; agent onboarding.
4. Agent: create property (pin location), overview video, rooms, room media, room availability.
5. Student: property detail (overview video clearly labelled "Building overview"; each room with its own gallery and availability badge using icon+text).
6. Discovery: search list + map, normal/satellite toggle, PostGIS prefilter then Routes API road distance/time, cached in route_cache; label "by road". Reference point from app_config (D-11 - ask user).
7. Agent profile, direct contact buttons, follow, in-app notifications (trigger on publish), reviews.
8. Inspection requests for a specific room + agent inbox + status.
9. View events (D-07) + agent analytics (counts only).
10. Responsive + accessibility QA at 320/360/390/430/768/1024/1280/1440; e2e of the student journey; security review.
11. Admin basics only after user approves policy.

## Hard rules
No payments/commission/agent fees. No fake reviews/views/listings. Availability is per room. Room media never shared across rooms. No "verified" badge. Update the memory files in every PR. Final report per GROK_IMPLEMENTATION_HANDOVER.md with REAL test output only.
