# Meg Portfolio Website

## Overview
A dark, terminal/developer-themed portfolio website for Meg — a Computer Science student at the University of Southern Maine (Software Engineering concentration) and founder of The Maine Cleaning Company. Inspired by abdulmomin.dev with code editor UI metaphors, git-style section headers, and a developer aesthetic.

## Real Info
- **Name**: Meg
- **Email**: megan.small@maine.edu
- **Location**: Portland, Maine
- **School**: University of Southern Maine — CS, Software Engineering concentration
- **Business**: The Maine Cleaning Company (founder)
- **GitHub**: msmall2691-eng
- **LinkedIn**: Not yet created

## Architecture
- **Frontend-only** portfolio site built with React + TypeScript
- No database needed — all content is static (except live GitHub API fetch)
- Server serves the frontend via Express + Vite

## Tech Stack
- React + TypeScript (frontend)
- Tailwind CSS (styling)
- Shadcn UI components (Badge, Button, Card, Skeleton)
- TanStack React Query (data fetching)
- react-icons (tech brand logos for skills graph)
- Wouter (routing)
- Express (server)
- Vite (bundler)

## Design Theme
- Dark terminal/developer aesthetic
- Background: dark (~#0A0A0F)
- Text: light (#EDEDED)
- Accent/Primary: #417D9F
- Fonts: Inter (body), JetBrains Mono (code/terminal elements)
- Terminal command section headers (e.g. `# About.system`, `$ git log --stat`)
- Code editor blocks with line numbers and syntax highlighting
- Git-style commit timeline for Experience

## File Structure
- `client/src/pages/home.tsx` — Main portfolio page with all sections (Navbar, Hero, About, Skills, Experience, Projects, Contact, Footer)
- `client/src/components/skills-graph.tsx` — Interactive orbital skills constellation with drag interaction
- `client/src/components/github-section.tsx` — Legacy GitHub component (no longer rendered, data integrated into Projects)
- `client/src/App.tsx` — App router
- `client/src/index.css` — Theme variables (dark by default)
- `server/routes.ts` — API routes (minimal)
- `client/public/favicon.png` — Circular favicon (64x64) from Meg's logo
- `client/public/favicon-32.png` — Circular favicon (32x32)
- `attached_assets/IMG_2049_1772134195061.png` — Meg's photo (used in hero and about sections)

## Sections (in order)
1. **Hero** — Avatar + terminal greeting, code snippet block, loaded modules badges
2. **About** — Profile card with avatar/location/school, terminal bio (whoami/cat), stats cards
3. **Skills** — Interactive orbital constellation graph with 30 tech skill nodes in 4 orbits, drag-to-explore, connecting lines, brand icons (react-icons/si)
4. **Experience** — Alternating zigzag git log timeline with colored gradient markers, floating date badges, commit metadata
5. **Projects** — Split layout: GitHub repo list sidebar (live data) + 6 pinned project cards with gradient headers + Replit Apps mini-cards section with all projects from both accounts + embedded Replit app preview modal
6. **Contact** — JSON contact info block (email, location, github) + code editor-styled form
7. **Footer** — Monospace branding + email/github links

## Skills Grid (skills-graph.tsx)
- Interactive grid/tile layout with hover glow effects (replaced canvas orbital visualization)
- 30 skills grouped into 5 categories: Core, Frontend, Backend & Data, Tools & Platforms, Services
- Each tile shows brand icon (react-icons/si or lucide fallback) + label
- Hover effects: border glow in brand color, icon brightens with drop-shadow, background tints with radial gradient, icon scales up, text goes from muted to foreground
- Responsive grid: 6 columns desktop, 4 tablet, 3 small tablet, 2 mobile
- Category labels in monospace uppercase

## Profile Image Design
- Animated concentric circle borders inspired by abdulmomin.dev
- Outer ring: dashed border with slow 20s spin animation
- Middle ring: solid border with 15s reverse spin and glow
- Inner: image with grayscale(80%) → full color on hover
- Hero avatar: w-28 container, w-20 image
- About avatar: w-36 container, w-28 image
- CSS in index.css: .profile-ring-container, .profile-ring-outer/middle/inner

## Pinned Projects (6 real apps)
1. **Align** — Multi-tenant operations platform: Cleaner DNA behavioral matching, stream-based work assignment, OpenAI Vision property analysis, Stripe authorize-then-capture payments, 4 user roles. Tech: TypeScript, PostgreSQL, Drizzle ORM, Stripe, OpenAI Vision, Google Calendar API. Status: In Development.
2. **JobberBridge** — Real-time API bridge: Jobber webhook events → internal tools, auto-syncing clients/jobs/invoices. Tech: TypeScript, Express, Jobber API, Webhooks. Source: @office277. Status: Live.
3. **JobberToFirestore** — Automated data pipeline: Jobber → Firestore for real-time dashboards and reporting. Tech: TypeScript, Firestore, Jobber API, Express. Source: @office277. Status: Live.
4. **Maine Clean Team Hub** — Internal ops dashboard: daily assignments, job status tracking, team schedule coordination. Tech: React, TypeScript, Express, Tailwind CSS. Source: @office277. Status: Live.
5. **CleanSync** — Cron-based sync layer connecting scheduling, invoicing, and communication tools. Tech: TypeScript, Express, Cron Jobs, REST APIs. Source: @office277. Status: Live.
6. **Knowledge Extractor** — AI document processor: extracts concepts, relationships, and summaries into structured knowledge bases. Tech: TypeScript, React, OpenAI API, Express. Status: In Development.

Each card has: gradient header with icon, status badge (green=Live, yellow=In Dev), tech badges (max 4 shown + overflow count), and Demo/Preview/Code buttons. Preview opens an embedded Replit iframe modal with macOS-style title bar.

## GitHub Integration
- Data fetched via React Query (useQuery) with 10-minute staleTime
- Username constant: `GITHUB_USERNAME = "msmall2691-eng"`
- Fetches user profile + up to 30 repos from public GitHub REST API
- Repo list rendered in Projects section sidebar
- Loading skeletons and error state handling

## Navigation
- Fixed dark navbar with terminal icon + `<Meg />` branding + 6 section links (Home, About, Skills, Experience, Projects, Contact)
- Mobile hamburger menu
- Smooth scroll with 64px offset for fixed nav
