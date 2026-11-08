# DESIGN_SYSTEM
Source: user-uploaded palette (D-01). Tokens live in src/styles/tokens.css (CSS variables) and map into Tailwind theme.
| Token | Value | Use / contrast |
|-------|-------|----------------|
| --color-ink (textPrimary, primaryHover) | #081F5C | text 15.0:1 on #F9FCFF |
| --color-primary | #334EAC | buttons/links; 7.2:1 on #F9FCFF; white-on-primary 7.2:1 |
| --color-secondary | #7096D1 | decorative, large graphics only (2.9:1 on near-white; never small text) |
| --color-border / tint | #D0E3FF | borders, chips |
| --color-background | #E7F1FF | page background |
| --color-surface | #F9FCFF | cards, sheets |
| --color-text-secondary (derived) | #5B6B94 | 5.1:1 on surface, 4.6:1 on background |
| --color-success (derived) | #1B7F4B | 4.9:1 on surface; pair with icon+text "Available" |
| --color-warning (derived) | #8A5A00 | 5.8:1 on surface |
| --color-error (derived) | #B3261E | 6.4:1 on surface |
| --color-info | #334EAC | = primary |
| --color-focus | #334EAC 3px ring + 2px offset | visible focus |
Derived semantic colours are NOT in the supplied palette -> need user approval.
Availability states must use icon + text, never colour alone (Available / Occupied / Unavailable).
Typography (proposed, needs approval): Inter via next/font; base 16px; min touch target 44x44px.
Breakpoints (proposed): 360 / 640 / 768 / 1024 / 1280. Test widths 320,360,390,430,768,1024,1280,1440.
