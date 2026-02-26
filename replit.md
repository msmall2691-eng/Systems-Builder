# Meg Portfolio Website

## Overview
A clean, modern, developer-focused portfolio website for Meg — a systems builder and Computer Science student. Single-page application with Hero, Featured Projects, About, and Contact sections.

## Architecture
- **Frontend-only** portfolio site built with React + TypeScript
- No database needed — all content is static
- Server serves the frontend via Express + Vite

## Tech Stack
- React + TypeScript (frontend)
- Tailwind CSS (styling)
- Shadcn UI components (Badge, Button, Card)
- Wouter (routing)
- Express (server)
- Vite (bundler)

## Design Specs
- White background (#FFFFFF)
- Dark text (#111827)
- Accent color (#417D9F)
- Font: Inter (sans), JetBrains Mono (mono)
- H1: 52px, H2: 36px, Body: 18px
- Line height: 1.6
- Generous spacing (100px+ vertical padding per section)

## File Structure
- `client/src/pages/home.tsx` — Main portfolio page with all sections (Navbar, Hero, Projects, About, Contact, Footer)
- `client/src/App.tsx` — App router
- `client/src/index.css` — Theme variables
- `server/routes.ts` — API routes (minimal, no API needed)

## Sections
1. **Hero** — Name, headline, subheading, two CTA buttons
2. **Featured Projects** — 3 project cards (Scheduling Dashboard, Internal CRM, Workflow Automation)
3. **GitHub Activity** — Live GitHub profile summary + 6 most recent repos (fetched from GitHub REST API, cached in localStorage for 10 min)
4. **About** — Professional bio + skills grouped by category (Frontend, Backend, Data, Tools)
5. **Contact** — CTA with Email, GitHub, LinkedIn buttons
6. **Footer** — Copyright + social links

## GitHub Integration
- Component: `client/src/components/github-section.tsx`
- Username constant: `GITHUB_USERNAME = "msmall2691-eng"` (change at top of file)
- Uses public GitHub REST API (no auth required)
- localStorage caching with 10-minute TTL to reduce rate limit issues
- Shows loading skeletons, error state, profile info, and repo cards