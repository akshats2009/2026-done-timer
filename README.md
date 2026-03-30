# 2026 Done Timer

A real-time timer that tracks how much of the current year is complete, updating every second. Automatically adjusts to reflect the new year — no hardcoded dates.

## Features

- **Live year progress** — animated SVG ring showing percentage complete with sub-second precision
- **Detailed stats** — days elapsed, days remaining, hours, minutes, seconds with glowing card effects
- **Dark / Light mode** — toggle between themes, persisted in local storage
- **Responsive** — looks great on mobile, tablet, and desktop
- **Auto-updating** — dynamically adjusts to the current year (works in 2026, 2027, and beyond)

## Tech Stack

- React 19 + TypeScript
- Vite 6
- Tailwind CSS v4
- shadcn/ui (component structure + design tokens)
- motion (animations)
- lucide-react (icons)

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── ui/
│   │   └── glowing-effect.tsx   # Animated glow border effect
│   ├── ProgressRing.tsx         # SVG circular progress indicator
│   ├── StatsGrid.tsx            # Stats cards with glow effects
│   ├── ThemeToggle.tsx          # Dark/light mode switch
│   └── YearBadge.tsx            # Current year pill badge
├── hooks/
│   ├── useTheme.ts              # Theme management hook
│   └── useYearProgress.ts       # Real-time year progress hook
├── lib/
│   └── utils.ts                 # cn() utility (clsx + tailwind-merge)
├── utils/
│   └── yearProgress.ts          # Year progress calculation logic
├── App.tsx                      # Main application layout
├── index.css                    # Tailwind + shadcn design tokens
└── main.tsx                     # Entry point
```

## License

MIT
