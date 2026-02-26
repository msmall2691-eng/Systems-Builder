# Meg Portfolio Website

## Overview
A dark, terminal/developer-themed portfolio website for Meg — a systems builder and Computer Science student. Inspired by abdulmomin.dev with code editor UI metaphors, git-style section headers, and a developer aesthetic.

## Architecture
- **Frontend-only** portfolio site built with React + TypeScript
- No database needed — all content is static (except live GitHub API fetch)
- Server serves the frontend via Express + Vite

## Tech Stack
- React + TypeScript (frontend)
- Tailwind CSS (styling)
- Shadcn UI components (Badge, Button, Card, Skeleton)
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
- `client/src/pages/home.tsx` — Main portfolio page with all sections (Navbar, Hero, About, Skills, Experience, Projects, GitHub, Contact, Footer)
- `client/src/components/github-section.tsx` — GitHub API integration component
- `client/src/App.tsx` — App router
- `client/src/index.css` — Theme variables (dark by default)
- `server/routes.ts` — API routes (minimal)

## Sections (in order)
1. **Hero** — Terminal-style greeting, code snippet block, loaded modules badges
2. **About** — Profile card, terminal bio (whoami/cat), stats cards
3. **Skills** — Large badge grid of all technologies
4. **Experience** — Git log timeline with commit hashes, branches, file stats
5. **Featured Projects** — Project cards with tech badges, demo/code buttons
6. **GitHub Activity** — Live GitHub profile + recent repos via API
7. **Contact** — JSON contact info block + code editor-styled form
8. **Footer** — Monospace branding + social links

## GitHub Integration
- Component: `client/src/components/github-section.tsx`
- Username constant: `GITHUB_USERNAME = "msmall2691-eng"`
- Uses public GitHub REST API (no auth required)
- localStorage caching with 10-minute TTL
- Loading skeletons, error state, profile info, and repo cards

## Navigation
- Fixed dark navbar with all section links
- Mobile hamburger menu
- Smooth scroll with 64px offset for fixed nav