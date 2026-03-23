# ROADMAP.md

## Project: Async-First Blog App

### Stack
- Next.js App Router
- TypeScript
- Tailwind CSS
- Supabase
- TanStack Query v5

---

## 1. Project goal

Build a blog-focused web app that also serves as a learning playground for:

- async-first app architecture
- React Suspense
- route-level and component-level boundaries
- transitions
- TanStack Query cache and deduplication
- Supabase integration
- optimistic UI
- server/client rendering boundaries in Next.js

This project should be useful for:
- learning modern React and Next.js patterns
- practicing work with Codex in small implementation steps
- building a portfolio project with clear architectural decisions

---

## 2. Main product scope

### Core product
- landing page
- blog listing page
- blog post detail page

### Async-first features
- live search in `/blog?q=...`
- tag/category filters
- related posts
- route-level loading and error handling
- component-level Suspense boundaries
- TanStack Query for selected client-side async flows
- prefetching for smoother navigation

### Interactive features
- bookmark/save post
- optimistic UI for bookmarks
- one additional “app-like” feature:
  - comments
  - or pagination / infinite scroll

### Optional expansion
- Supabase auth
- user-specific bookmarks
- draft/preview mode
- search modal / command palette

---

## 3. Guiding principles

### Async-first mindset
Treat async as part of rendering, not as an afterthought handled only in effects.

### Server-first by default
Use Server Components wherever they simplify data flow and reduce client complexity.

### Add client async only where it earns its keep
Use TanStack Query and transitions where interactivity, cache, or UX improvements justify them.

### Small tasks, clear boundaries
Build features in small vertical slices so they are easy to implement with Codex.

### No global spinner mentality
Prefer granular loading and error boundaries over full-page “loading everything” UX.

---

## 4. Roadmap phases

## Phase 0 — Foundation

### Goal
Create the base project and development environment.

### Deliverables
- Next.js App Router project initialized
- Tailwind configured
- TypeScript configured
- Supabase project connected
- TanStack Query provider added
- base app layout created
- environment variables documented

### Outcome
A clean project shell ready for feature work.

---

## Phase 1 — Project docs and conventions

### Goal
Create documentation that will guide both human work and Codex collaboration.

### Deliverables
- `README.md`
- `ROADMAP.md`
- `ARCHITECTURE.md`
- `TASKS.md`
- `AGENTS.md`

### Outcome
The project has a written source of truth for scope, architecture, and implementation workflow.

---

## Phase 2 — Data model and Supabase schema

### Goal
Prepare the minimal backend model for blog content and interactive features.

### Deliverables
- `posts` table
- `bookmarks` table
- optional `comments` table
- slug indexing
- RLS policies
- seed data

### Outcome
The app can move from mock data to real persisted content.

---

## Phase 3 — Core routes and route-level boundaries

### Goal
Build the initial page structure and use Next.js route conventions properly.

### Deliverables
- `/`
- `/blog`
- `/blog/[slug]`
- `loading.tsx` for blog route
- `error.tsx` for blog route
- `not-found.tsx` for post detail route

### Outcome
The app has the first real async-first route skeleton.

---

## Phase 4 — Server-first blog implementation

### Goal
Render blog data using Server Components first.

### Deliverables
- blog listing page rendered from real data
- blog detail page rendered from slug
- reusable blog UI components
- basic loading and empty states

### Outcome
A working blog with strong App Router fundamentals.

---

## Phase 5 — Live search in `/blog?q=...`

### Goal
Introduce the first major async-first interaction.

### Deliverables
- search input on `/blog`
- query param `q` as source of truth
- filtered results
- local loading state for results
- empty results state
- responsive typing UX

### Outcome
The project starts behaving like an interactive app, not just a content site.

---

## Phase 6 — TanStack Query integration

### Goal
Add a dedicated query layer where cache and dedup actually matter.

### Deliverables
- query keys defined
- query hooks or query functions introduced
- cache strategy for search and/or related posts
- `staleTime` configured intentionally
- deduplication working through TanStack Query

### Outcome
The project gains a real async data layer beyond simple fetch calls.

---

## Phase 7 — Suspense boundaries and transitions

### Goal
Refine async rendering behavior and improve perceived performance.

### Deliverables
- local Suspense boundary for search results
- optional Suspense boundary for related posts
- `useTransition` or `useDeferredValue` in live search flow
- subtle pending UI instead of page-wide loading resets

### Outcome
The app starts to express async-first UX patterns clearly.

---

## Phase 8 — Related posts and content slicing

### Goal
Split non-critical content into smaller async islands.

### Deliverables
- related posts section
- separate loading state for related content
- separate error handling if needed
- optional prefetching for related post detail links

### Outcome
The UI becomes more granular and more realistic as an async-first app.

---

## Phase 9 — Bookmark mutation with optimistic UI

### Goal
Introduce write flows and mutation handling.

### Deliverables
- bookmark/save button
- Supabase mutation
- pending button state
- optimistic UI update
- rollback or invalidation on failure

### Outcome
The project now covers both read and write async flows.

---

## Phase 10 — One advanced app-like feature

### Goal
Add one feature that deepens async-first learning.

### Choose one:
- comments section
- pagination
- infinite scroll
- search modal / command palette

### Outcome
The project goes beyond “blog with extras” and becomes a stronger app architecture exercise.

---

## Phase 11 — Auth and user-specific features

### Goal
Make selected features personalized.

### Deliverables
- Supabase auth
- user session handling
- user-specific bookmarks
- optional protected views

### Outcome
The project gains realistic user flows.

---

## Phase 12 — Polish and architectural cleanup

### Goal
Turn the project from a learning prototype into a coherent portfolio piece.

### Deliverables
- cleanup of server/client boundaries
- accessibility pass
- mobile responsiveness pass
- better skeletons and empty states
- refactor repeated logic
- finalize docs

### Outcome
A polished, explainable project with strong architectural clarity.

---

## 5. MVP definition

The MVP should include:

- landing page
- blog listing page
- blog detail page
- `loading.tsx`
- `error.tsx`
- `not-found.tsx`
- live search in `/blog?q=...`
- basic Suspense-aware UI for search results
- TanStack Query in at least one meaningful area
- related posts
- basic prefetching

---

## 6. Extended version

After MVP, expand with:

- bookmark/save post
- optimistic UI
- comments or pagination
- Supabase auth
- user-specific bookmarks
- stronger loading and error granularity
- optional draft preview or search modal

---

## 7. Suggested implementation order

1. Foundation
2. Docs and conventions
3. Supabase schema
4. Core blog routes
5. Route-level boundaries
6. Server-first blog rendering
7. Live search in `/blog?q=...`
8. TanStack Query integration
9. Suspense + transition refinement
10. Related posts
11. Bookmark mutation
12. Comments or pagination
13. Auth
14. Polish

---

## 8. Definition of success

The project is successful if it demonstrates:

- clear separation between server and client responsibilities
- meaningful use of route-level and local async boundaries
- responsive search UX with query param state
- real data flow through Supabase
- cache-aware client async flow with TanStack Query
- at least one mutation with good pending/optimistic behavior
- a structure that can be explained clearly during interviews

---

## 9. Final note

This project is not just a blog.
It is a blog-shaped learning app for practicing async-first architecture in a controlled, realistic way.
