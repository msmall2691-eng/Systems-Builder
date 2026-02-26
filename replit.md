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
3. **About** — Professional bio + skills grouped by category (Frontend, Backend, Data, Tools)
4. **Contact** — CTA with Email, GitHub, LinkedIn buttons
5. **Footer** — Copyright + social links