# UNIPORT Student Accommodation Platform — AI Handover Package

**Purpose:** Transfer the approved project context from ChatGPT to Claude for software architecture and coding, then to Grok for GitHub-based implementation/build work.

## Read in this order
1. `MASTER_PROJECT_SPECIFICATION.md`
2. `APPROVED_FEATURES_CHECKLIST.md`
3. `PROJECT_DECISION_HISTORY.md`
4. `USER_FLOWS_AND_SCREEN_BLUEPRINT.md`
5. `COMPLETE_UI_UX_DESIGN_SYSTEM.md`
6. `RESPONSIVE_DESIGN_SPECIFICATION.md`
7. `DATABASE_AND_API_SPECIFICATION.md`
8. `CLAUDE_DEVELOPMENT_INSTRUCTIONS.md`
9. `GROK_IMPLEMENTATION_HANDOVER.md`
10. `PROJECT_ROADMAP.md`

## Important truthfulness note
This package is based on the project details recoverable from the prior ChatGPT discussions. It does **not** claim to reproduce inaccessible messages verbatim. Any item labelled *proposed*, *to confirm*, or *unresolved* must not be treated as an approved requirement.

## Known approved direction
- Launch as a student accommodation discovery platform focused on students looking for available rooms near the University of Port Harcourt (UNIPORT).
- Grow over time into a broader Port Harcourt real-estate marketplace.
- Students search for actually available rooms by geographic distance from UNIPORT, inspect listing media, see agent details, contact agents directly, and book an agent-led inspection for a particular room.
- A listing can represent an apartment/building containing multiple rooms; some rooms may be occupied while one or more remain available.
- Each listing has one overall building/apartment video and separate photos/videos for each individual room.
- Map supports both normal and satellite views. Distance and travel time use actual road routes, not straight-line distance.
- Agent features accepted: follow agents, receive notifications about new listings from followed agents, and rate/review agents.
- Agents are named on listings and students contact them directly. Agents do not pay the platform at launch. The platform does not initially collect rent or commission payments.
- Agents can publish listings immediately (subject to any moderation rules still to be decided).
- Track listing/apartment views; the exact definition and reporting of a “view” needs specification.
- Initial priority is growth and adoption. Preserve architectural flexibility for future monetization and payment methods.
- The user's stated workflow: Grok writes directly to GitHub; Claude handles coding. Confirm the exact handoff workflow before making repository changes.
