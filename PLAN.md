# 2026 Done Timer — Project Plan

## Overview

A **year progress tracker** for 2026 that shows how much of the year has elapsed ("done") and how much remains. The app helps users stay aware of time passing and can support goal-setting and productivity.

---

## Core Features

### 1. **Year Progress Display**
- **Percentage complete**: Real-time calculation of % of 2026 elapsed (e.g., "16.7% done")
- **Days elapsed / remaining**: Count of days passed and days left in the year
- **Visual progress bar**: Filled bar representing year completion

### 2. **Time Granularity**
- **Days**: Primary unit (365 days in 2026 — non-leap year)
- **Hours / minutes / seconds**: Optional live countdown or elapsed display for extra precision

### 3. **UI / UX**
- Clean, minimal, readable design
- Responsive (works on mobile and desktop)
- Real-time or near-real-time updates (e.g., every second for a live feel, or on page load for simplicity)

---

## Technical Approach

### Stack Options

| Option | Pros | Cons |
|--------|------|------|
| **Static HTML/CSS/JS** | No build step, easy deploy (GitHub Pages), fast | Manual DOM updates |
| **React/Vite** | Component-based, modern DX | Build step, slightly heavier |
| **Next.js** | SSR, easy deploy (Vercel) | Overkill for a single-page timer |

**Recommendation**: **Static HTML/CSS/JS** or **React/Vite** — both are lightweight and fit a single-page timer. Static is simplest; React gives more structure if we expect to add features.

### Core Logic

```
- Total days in 2026: 365
- Start: Jan 1, 2026 00:00:00
- End: Dec 31, 2026 23:59:59
- Progress % = (now - start) / (end - start) * 100
- Days elapsed = floor(diff in days)
- Days remaining = 365 - days elapsed
```

### Data / State
- No backend required
- All calculations client-side from `new Date()`
- Optional: localStorage for user preferences (e.g., theme, units)

---

## Project Structure (Proposed)

```
2026-done-timer/
├── README.md
├── PLAN.md
├── index.html          # Main page
├── styles.css          # Styling
├── app.js              # Timer logic + DOM updates
└── (optional) package.json  # If using a build tool
```

---

## Phases

### Phase 1: MVP
- [ ] Single-page layout with progress bar
- [ ] Percentage complete (e.g., "X.X% of 2026 done")
- [ ] Days elapsed and days remaining
- [ ] Basic styling, readable typography
- [ ] Update on load (no live tick required for MVP)

### Phase 2: Polish
- [ ] Live updates (e.g., every second)
- [ ] Optional: hours/minutes/seconds remaining in current day
- [ ] Responsive design
- [ ] Light/dark theme or system preference

### Phase 3: Extras (Optional)
- [ ] Shareable image/screenshot of progress
- [ ] Milestones (e.g., "Q1 done", "Halfway through 2026")
- [ ] Customizable year (e.g., switch to 2027)
- [ ] PWA / installable

---

## Design Notes

- **Tone**: Calm, focused, not alarming — time awareness, not stress
- **Typography**: Clear numbers, readable sans-serif
- **Color**: Progress bar could use a single accent (e.g., blue or green) with neutral background
- **Layout**: Centered content, plenty of whitespace

---

## Dependencies

- **None** for static HTML/CSS/JS
- **Vite + React** if we choose that stack (dev server, build, HMR)

---

## Deployment

- **GitHub Pages**: Ideal for static site
- **Vercel / Netlify**: Also straightforward, supports redirects and custom domains

---

## Open Questions

1. **Stack**: Static vs React — preference?
2. **Live updates**: Every second, or only on load?
3. **Scope**: 2026-only, or configurable year?
4. **Extras**: Any must-have features beyond progress bar + days?

---

*Ready to build once you confirm the approach and any preferences.*
