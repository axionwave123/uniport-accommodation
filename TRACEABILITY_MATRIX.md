# TRACEABILITY_MATRIX
| Feature | Screens | Tables | API / server action | Tests |
|---|---|---|---|---|
| F01/F02 Discovery by road distance | Home, Search list+map | properties, rooms, route_cache | GET /api/search (PostGIS prefilter -> Routes API -> cache) | search returns only properties with >=1 available room; distance label says "by road"; fallback labelled "approx." |
| F03/F04 Property+rooms, room availability | Property detail, Agent room manager | properties, rooms | PATCH /api/rooms/:id/availability | occupied room never listed available; one occupied room doesn't hide others; student cannot PATCH |
| F05 Overview video | Property detail, Agent media manager | property_media(kind=overview_video, unique) | POST /api/property-media | max one overview video enforced |
| F06 Room media | Room detail, Room media manager | room_media | POST /api/room-media | media fetched by room_id only; cross-room leakage test |
| F07 Agent profile/contact | Agent profile, listing card | agent_profiles | GET /api/agents/:id | name shown on every listing; contact visible per D-04 |
| F08 Inspection | Request form, status, agent inbox | inspection_requests | POST/PATCH /api/inspections | room must belong to property; no duplicate pending per student+room; room NOT reserved |
| F09 Map modes | Map | - | client | toggle normal/satellite; text fallback |
| F10/F11 Publish/no payments | Agent create listing | properties.publication_status | POST /api/properties | publishes immediately; no payment code paths |
| F12 Views | Agent dashboard | listing_analytics_events | POST /api/events/view | D-07 dedupe; rate limit; no PII |
| F13 Follow | Agent profile, Followed | agent_follows | POST/DELETE /api/follows | unique pair; idempotent |
| F14 Notifications | Notifications | notifications | DB trigger on property publish | follower gets one per new listing |
| F15 Reviews | Agent profile | agent_reviews | POST/PATCH /api/reviews | one per user per agent; rating 1-5; report flow |
| F16 Extensibility | - | property_category, areas | - | no campus hard-coding; reference point from config |
