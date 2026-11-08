# IMPLEMENTATION_PROGRESS
Evidence-based only.

- [x] Handover docs audited (Claude, 2026-11-08)
- [x] Design tokens drafted (src/styles/tokens.css)
- [x] Draft DB migration written (supabase/migrations/0001_initial_schema.sql)
- [x] **Phase 1** — Next.js App Router scaffold + Tailwind theme from tokens + mobile-first base layout + CI (lint/typecheck/build)
- [x] **Phase 2** — RLS policies migration (0002_rls_policies.sql): agent ownership checks; students cannot change room availability
- [x] **Phase 3** — Auth (Supabase SSR) + role selection (student / agent) + agent_profiles bootstrap on sign-up; clear "not configured" states when keys missing
- [ ] Phase 4 — Agent listing CRUD (pin, overview video, rooms, media, availability)
- [ ] Phase 5 — Student property detail
- [ ] Phase 6 — Discovery (list + map + road distance)
- [ ] Phase 7 — Agent profile / follow / reviews
- [ ] Phase 8 — Inspection requests
- [ ] Phase 9 — View events + analytics
- [ ] Phase 10 — Responsive + a11y + e2e
- [ ] Phase 11 — Admin (after policy)

**Notes**
- Supabase keys and Google Maps keys still required from user before live data works.
- Migration has not been applied to a real Supabase project yet (awaiting credentials).
- No fake data or mocked “done” features.
