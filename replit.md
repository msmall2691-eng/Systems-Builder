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
- `attached_assets/IMG_2049_1772134195061.png` — Meg's photo (used in hero, about, navbar)

## Sections (in order)
1. **Hero** — Avatar + terminal greeting, code snippet block, loaded modules badges
2. **About** — Profile card with avatar/location/school, terminal bio (whoami/cat), stats cards
3. **Skills** — Interactive orbital constellation graph with 23 tech skill nodes, drag-to-explore, connecting lines, brand icons (react-icons/si)
4. **Experience** — Alternating zigzag git log timeline with colored gradient markers, floating date badges, commit metadata
5. **Projects** — Split layout: GitHub repo list sidebar (live data) + 6 real pinned project cards with gradient headers, status badges (Live/In Development), Demo/Preview/Code buttons, and embedded Replit app preview modal
6. **Contact** — JSON contact info block (email, location, github) + code editor-styled form
7. **Footer** — Monospace branding + email/github links

## Skills Graph (skills-graph.tsx)
- Canvas-based orbital visualization with React DOM icon overlays
- 23 skill nodes in 3 concentric orbits with brand icons from react-icons/si
- Mouse drag to rotate (pointer capture for smooth dragging)
- Gentle floating animation using requestAnimationFrame (positions stored in refs, not state)
- Connecting lines between nearby nodes (Obsidian graph style)
- Central glowing sphere with accent color
- Responsive: smaller nodes and tighter orbits on mobile
- "Drag to explore skills universe" hint bar

## Pinned Projects (6 real apps)
1. **Align** — Intelligent operations platform for cleaning services (multi-tenant, cleaner DNA matching, Stripe). Status: In Development.
2. **JobberBridge** — Integration bridge: Jobber ↔ external systems. Source: @office277. Status: Live.
3. **JobberToFirestore** — Data pipeline: Jobber → Google Firestore. Source: @office277. Status: Live.
4. **Maine Clean Team Hub** — Team management for Maine Cleaning Company. Source: @office277. Status: Live.
5. **CleanSync** — Ops sync across scheduling/invoicing/comms. Source: @office277. Status: Live.
6. **Knowledge Extractor** — AI-powered knowledge extraction tool. Status: In Development.

Each card has: gradient header with icon, status badge (green=Live, yellow=In Dev), tech badges (max 4 shown + overflow count), and Demo/Preview/Code buttons. Preview opens an embedded Replit iframe modal with macOS-style title bar.

## GitHub Integration
- Data fetched via React Query (useQuery) with 10-minute staleTime
- Username constant: `GITHUB_USERNAME = "msmall2691-eng"`
- Fetches user profile + up to 30 repos from public GitHub REST API
- Repo list rendered in Projects section sidebar
- Loading skeletons and error state handling

## Navigation
- Fixed dark navbar with avatar + 6 section links (Home, About, Skills, Experience, Projects, Contact)
- Mobile hamburger menu
- Smooth scroll with 64px offset for fixed nav
