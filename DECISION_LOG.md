# DECISION_LOG  (never delete; mark SUPERSEDED)
| ID | Date | Decision | Status |
|----|------|----------|--------|
| D-01 | 2026-11-08 | Palette = uploaded image (#081F5C #334EAC #7096D1 #D0E3FF #E7F1FF #F9FCFF). Supersedes the two earlier assistant palettes. | USER-SUPPLIED |
| D-02 | 2026-11-08 | Stack: Next.js (App Router, TypeScript, Tailwind) PWA + Supabase (Postgres/PostGIS, Auth, Storage, RLS). | APPROVED BY DELEGATION ("do what u need to do") - user may veto |
| D-03 | 2026-11-08 | Maps: Google Maps JS + Routes API (road distance/time). Needs user's API key + billing. Fallback provider evaluation if cost blocks. | APPROVED BY DELEGATION; user must create key |
| D-04 | 2026-11-08 | Guests may browse/search/view agent contact. Account required to follow, review, request inspection. | PROPOSED DEFAULT - confirm |
| D-05 | 2026-11-08 | Notifications at launch: in-app only (table-driven). Email/push/WhatsApp later. | PROPOSED DEFAULT - confirm |
| D-06 | 2026-11-08 | Inspection statuses: pending, accepted, declined, reschedule_proposed, cancelled, completed. Not a reservation. | PROPOSED DEFAULT - confirm |
| D-07 | 2026-11-08 | View = property detail page open; max 1 per session per property per 24h; bots excluded; room opens logged as separate event. | PROPOSED DEFAULT - confirm |
| D-08 | 2026-11-08 | Reviews: signed-in students, one per agent, editable; hidden only via report/admin action (no pre-moderation). "Verified" badge NOT shown until verification exists. | PROPOSED DEFAULT - confirm |
| D-09 | 2026-11-08 | Currency NGN; price per room with period (year default). | PROPOSED DEFAULT - confirm |
| D-10 | 2026-11-08 | Payments/monetization: no tables or flows active at launch. | APPROVED (earlier) |
| D-11 | OPEN | Exact UNIPORT reference point (campus gate/coords). User must confirm; stored in config, not hard-coded. | OPEN |
