# AGENTS.md

## Purpose

This document defines how AI coding assistants (including Codex) should work in this repository.

The goal is to keep implementation focused, incremental, and aligned with the project architecture.

This project is a learning-focused async-first blog app built with:

- Next.js App Router
- TypeScript
- Tailwind CSS
- Supabase
- TanStack Query v5

---

## Core principles

### 1. Prefer small, focused changes
Do not implement large multi-feature changes in one pass.

Preferred:
- one route
- one feature slice
- one provider setup
- one query layer addition
- one mutation flow

Avoid:
- broad refactors mixed with feature work
- changing architecture and UI in the same task unless explicitly requested

---

### 2. Respect the async-first architecture
The app should gradually evolve toward an async-first model.

That means:
- prefer route-level loading and error handling where appropriate
- use local Suspense boundaries for specific async UI regions
- use transitions or deferred updates where UX benefits from non-urgent rendering
- use TanStack Query where cache, dedup, or client-side async lifecycle actually matters

Do not force async-first patterns everywhere just because they exist.

---

### 3. Server-first by default
Prefer Server Components unless there is a clear reason to use a Client Component.

Good reasons for Client Components:
- local interaction state
- browser APIs
- TanStack Query hooks
- transitions
- mutation controls
- interactive search input

If a component does not need client-side interactivity, keep it server-side.

---

### 4. Keep boundaries explicit
Be clear about:
- which files are Server Components
- which files are Client Components
- where data is fetched
- where Suspense boundaries live
- where error handling lives
- where Query is used

Do not blur server/client responsibility without reason.

---

### 5. Avoid premature abstraction
Extract shared utilities only when:
- duplication is real
- naming is obvious
- abstraction improves clarity

Do not introduce generic helpers too early.

---

## Repository expectations

## Folder intent

### `app/`
Route definitions, layouts, route-level loading/error boundaries, and page entry points.

### `components/`
Reusable UI pieces, preferably presentation-focused.

### `features/`
Feature-specific modules such as search, bookmarks, related posts, comments, etc.

### `lib/`
Low-level infrastructure and shared logic:
- Supabase clients
- query client
- query keys
- data access functions
- shared types if needed

### `docs/`
Project documentation used by the developer and AI assistants.

---

## Naming conventions

### General
- Use clear, descriptive names
- Prefer domain language over generic names
- Avoid vague names like `data.ts`, `helper.ts`, `utils.ts` unless truly justified

### Components
- Use PascalCase
- Names should reflect UI responsibility
- Examples:
  - `BlogPostCard`
  - `BlogSearchInput`
  - `RelatedPostsSection`

### Hooks
- Use `useXxx` naming
- Hooks should be focused and narrow in purpose
- Examples:
  - `useBlogSearchParams`
  - `useBookmarkMutation`

### Query keys
- Centralize query keys in a dedicated file
- Keep naming stable and explicit
- Examples:
  - `blogKeys.list(params)`
  - `blogKeys.detail(slug)`
  - `bookmarkKeys.list(userId)`

### Supabase/data functions
- Use verb-based names
- Examples:
  - `getPosts`
  - `getPostBySlug`
  - `searchPosts`
  - `saveBookmark`

---

## Code style guidance

### TypeScript
- Prefer explicit types when they improve readability
- Avoid `any`
- Prefer narrow, domain-specific types

### React
- Keep components small
- Split UI shell from async/data logic when helpful
- Do not add unnecessary memoization

### Tailwind
- Use utility classes directly
- Prefer readable class groupings
- Avoid giant unreadable class strings when extraction would help clarity

### Comments
- Keep comments minimal
- Use comments to explain intent, not obvious syntax
- Write comments in English

---

## Async-first guidance

### Use route-level conventions where appropriate
Prefer Next.js route conventions for broad page-level states:
- `loading.tsx`
- `error.tsx`
- `not-found.tsx`

### Use local boundaries for granular UX
When only part of the screen is async-sensitive, prefer:
- local `<Suspense>`
- local error boundaries

### Use transitions intentionally
Good cases:
- live search result updates
- non-urgent UI updates
- route-adjacent pending states

Do not wrap every state update in a transition.

### Use TanStack Query selectively
Good cases:
- repeated client-side async reads
- search result caching
- related posts caching
- bookmark-related client data
- mutation handling and invalidation

Do not add Query where a simple server fetch is sufficient.

---

## Supabase guidance

### Keep Supabase usage separated by environment
- server-side access in server-safe modules
- browser-side access in browser-safe modules

### Prefer explicit data access functions
Do not scatter Supabase calls all over the UI.

Preferred:
- data access in `lib/...` or feature data modules
- UI consumes these functions through server pages or query hooks

### RLS awareness
If a feature touches user-specific data, keep RLS and auth flow in mind.
Do not assume unrestricted access.

---

## Task execution rules for AI assistants

### Before coding
Read:
- `README.md`
- `ROADMAP.md`
- `ARCHITECTURE.md`
- `TASKS.md`

If a requested task exists in `TASKS.md`, align implementation with that task.

### While coding
- solve the requested task only
- do not silently change unrelated files
- avoid opportunistic rewrites
- preserve naming consistency
- preserve existing architecture unless asked to refactor

### After coding
When appropriate:
- update related docs
- note tradeoffs clearly
- mention any follow-up tasks that naturally result from the change

---

## Preferred implementation shape

For most features, follow this order:

1. types or data contracts
2. data access/query logic
3. UI shell
4. async behavior
5. error/loading states
6. cleanup or small refactor

This keeps changes understandable and reviewable.

---

## What to avoid

Do not:
- rewrite the whole feature set in one go
- mix multiple architectural experiments in a single task
- introduce a CMS or unrelated tooling unless asked
- add animation libraries unless requested
- add global state libraries unless there is a strong need
- create large generic utility layers prematurely
- replace Next.js route boundaries with custom systems without reason
- introduce React Query everywhere just because it is available

---

## Preferred response style for AI coding work

When proposing or implementing a change:
- be concrete
- explain assumptions briefly
- surface tradeoffs when relevant
- avoid vague “improvements”
- prefer minimal viable implementation first

Good:
- “Added local Suspense boundary for search results only.”
- “Kept page shell server-side; moved interactive search input into a client component.”
- “Used TanStack Query only for search result caching.”

Bad:
- “Improved architecture.”
- “Refactored app for scalability.”
- “Optimized async handling everywhere.”

---

## First implementation priorities

When in doubt, prioritize this order:

1. app setup stability
2. route correctness
3. server/client boundary clarity
4. live search UX
5. query cache correctness
6. mutation correctness
7. polish

---

## Final rule

Make the smallest change that clearly moves the project forward.
Do not trade clarity for cleverness.
