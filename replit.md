# Meg Portfolio Website

## Overview
A dark, terminal/developer-themed portfolio website for Meg — a Systems Engineer & Automation Builder, Computer Science student at USM (Software Engineering concentration) and founder of The Maine Cleaning Company. Inspired by abdulmomin.dev with code editor UI metaphors, git-style section headers, and a developer aesthetic. Framed as a builder/engineer portfolio — not a student portfolio.

## Real Info
- **Name**: Meg (Megan Small)
- **Email**: megan.small@maine.edu
- **Location**: Portland, Maine
- **School**: University of Southern Maine — CS, Software Engineering concentration
- **Business**: The Maine Cleaning Company (founder, 2017-present)
- **GitHub**: msmall2691-eng
- **Replit accounts**: @info10885 (current), @office277 (business apps)
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
- Terminal command section headers (e.g. `$ cat systems_experience.md`, `$ git log --stat`)
- Code editor blocks with line numbers and syntax highlighting
- Git-style commit timeline for Experience

## Visual Effects (abdulmomin.dev inspired)
- **Grid Background**: Fixed full-screen dot-grid overlay (`.grid-bg` CSS class, 50px grid, primary color at 7% opacity)
- **Cursor Glow**: Radial gradient (300x300) follows mouse on desktop (`CursorGlow.tsx`), hidden on mobile
- **Scroll Animations**: Elements fade up on scroll via `.animate-on-scroll` class + IntersectionObserver (`useScrollAnimation.ts`), respects prefers-reduced-motion
- **Floating Nav (Desktop)**: Right-side vertical dot nav (`fixed right-8 top-1/2`), active section tracked via IntersectionObserver, dashed ring + icon for active dot, hover tooltips with `>` prefix
- **Bottom Nav (Mobile)**: Fixed bottom bar with icons + labels for each section, replaces old top navbar

## File Structure
- `client/src/pages/home.tsx` — Thin page composer (imports sections + CursorGlow + grid overlay + scroll animation hook)
- `client/src/components/sections/` — Extracted section components:
  - `Navbar.tsx` (floating right-side + mobile bottom nav), `Hero.tsx`, `FeaturedSystems.tsx`, `About.tsx`, `SystemsAndTechnical.tsx`, `PlatformsExperience.tsx`, `Skills.tsx`, `Experience.tsx`, `Projects.tsx`, `Contact.tsx`, `Footer.tsx`
  - `shared.tsx` — shared utilities (`scrollToSection`, `SectionHeader` with animate-on-scroll)
- `client/src/components/CursorGlow.tsx` — Mouse-following glow effect (desktop only)
- `client/src/hooks/useScrollAnimation.ts` — IntersectionObserver hook for scroll-triggered fade-in
- `client/src/data/` — Static data arrays:
  - `nav-links.ts` (includes lucide icons per link), `experiences.ts`, `projects.ts`, `featured-systems.ts`, `platforms.ts`, `systems.ts`, `github.ts`
- `client/src/components/skills-graph.tsx` — Interactive skills grid with hover glow effects
- `client/src/App.tsx` — App router
- `client/src/index.css` — Theme variables, profile ring animations, grid-bg, cursor-glow, animate-on-scroll
- `server/routes.ts` — API routes (minimal)
- `attached_assets/IMG_2049_1772134195061.png` — Meg's photo

## Sections (in order)
1. **Hero** — Avatar with animated rings + "Meg — Systems Engineer" headline, `<AutomationBuilder />` tag, proof bullets (founder→engineer, automation+integrations, cloud tooling), code snippet block
2. **Featured Systems** — 5 featured project cards (JobberBridge, JobberToFirestore, Maine Clean Team Hub, CleanSync, Align) with problem/solution/highlights/tech layout, status badges, demo+code links
3. **About** — Profile card (SYSTEMS_ENGINEER role), terminal bio with operator-to-engineer narrative (whoami/cat mission.txt), stats (3+ YRS BUILDING, 10+ PROJECTS, 5+ TOOLS BUILT)
4. **Systems & Technical Experience** — Three category cards (Systems Design, Automation & Integration, Software Dev Practice) + Systems Built/Prototyped checklist + Currently Exploring list + Timeline (2017/2023/2025)
5. **Platforms & Experience** — 4 platform category cards (Cloud & Backend, App Development, Data & Ops Systems, Automation & Integration) with specific tools and usage context
6. **Technologies & Systems** — Interactive grid with 5 categories: Development, Systems & Data, Platforms (Jobber/GoHighLevel/Connecteam/Stripe/Replit/GitHub), AI & Automation, Tools
7. **Experience** — Three entries: Founder & Systems Architect (2017-Present), Systems & Automation Developer (2023-Present), Computer Science Studies (2025-Present) — mid-level language throughout
8. **Projects** — "Projects built from real operational challenges" tagline + GitHub repo sidebar + 6 pinned project cards + Replit Apps mini-cards + preview modal
9. **Contact** — JSON contact info + code editor form
10. **Footer** — `<Meg /> — Systems Engineer`

## Navigation
- **Desktop (lg+)**: Floating right-side vertical dot nav with IntersectionObserver-based active section tracking, icon dots with hover tooltips
- **Mobile (<lg)**: Fixed bottom navigation bar with icon + label buttons
- No top navbar — all sections have no scrollMarginTop offset
- 8 links: Home, Featured, About, Systems, Platforms, Experience, Projects, Contact

## Content Strategy
- **Narrative flow**: Who I am → What I build (Featured) → Proof → Depth → Platforms → Experience → Direction → Contact
- **Language**: mid-level builder (design, build, implement, architect) not student (learning, exploring)
- **Key framing sentence**: "Translating operational complexity into practical software systems."
- **Timeline**: Founder 2017 → Systems Dev 2023 → CS Studies 2025

## Skills Grid (skills-graph.tsx)
- Interactive grid/tile layout with hover glow effects
- 5 categories: Development (10), Systems & Data (8), Platforms (6), AI & Automation (4), Tools (8)
- Includes operational platforms: Jobber, GoHighLevel, Connecteam
- Each tile: brand icon + label, hover glow/scale/color transitions
- Responsive grid, keyboard accessible (tabIndex + focus-visible)

## Profile Image Design
- Animated concentric circle borders (abdulmomin.dev inspired)
- Outer ring: dashed border, 20s spin; Middle ring: solid, 15s reverse spin + glow
- Grayscale(80%) → full color on hover
- prefers-reduced-motion support

## Pinned Projects (6 real apps)
1. **Align** — Multi-tenant operations platform. Status: In Development. URLs: replit.com/@info10885/Align
2. **JobberBridge** — Real-time API bridge. Status: Live. Source: @office277
3. **JobberToFirestore** — Automated data pipeline. Status: Live. Source: @office277
4. **Maine Clean Team Hub** — Internal ops dashboard. Status: Live. Source: @office277
5. **CleanSync** — Cron-based sync layer. Status: Live. Source: @office277
6. **Knowledge Extractor** — AI document processor. Status: In Development.

## GitHub Integration
- Fetched via React Query with 10-min staleTime from public GitHub API
- Username: `msmall2691-eng`
- Repo list in Projects section sidebar
