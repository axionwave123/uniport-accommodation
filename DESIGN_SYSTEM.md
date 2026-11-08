# DESIGN_SYSTEM
Source of truth: the uploaded palette image + COMPLETE_UI_UX_DESIGN_SYSTEM.md + tokens.css.

## Colours (D-01)
- Primary / text heavy: `#081F5C`
- Primary buttons / links: `#334EAC`
- Decorative / secondary: `#7096D1`
- Borders / soft surfaces: `#D0E3FF`
- Background: `#E7F1FF` / `#F9FCFF`
- Success / warning / error: use semantic tokens defined in tokens.css

## Layout rules (from screen blueprint)
- Mobile-first, single column
- Tablet: 2-column cards
- Desktop: list + map split
- No horizontal overflow; safe-area padding; touch targets ≥ 44px

## Availability states
- Always icon + text
- Available / Occupied / Pending
- Occupied rooms are never bookable
- Error: never colour alone

## Core product rules that affect UI
- Building video ≠ room media (label "Building overview")
- Distances say "by road"
- No payments, no fake data, no "Verified" badge until verification exists
