# ARCHITECTURE.md

## Project: Async-First Blog App

## Purpose

This document describes the intended architecture of the project.

The goal is to build a blog-shaped learning app that demonstrates async-first ideas in a controlled and realistic way, using:

- Next.js App Router
- React Server Components
- Suspense and route boundaries
- TanStack Query
- Supabase
- transitions and optimistic UI where they make sense

This is not meant to be a “use every modern API everywhere” project.
It is meant to show good architectural judgment.

---

## 1. Architectural goals

The app should demonstrate:

- clear separation between server and client responsibilities
- route-level loading and error handling through Next.js conventions
- local Suspense boundaries for granular async UI
- client-side async state only where interactivity benefits from it
- a meaningful data layer with caching, deduplication, and mutation handling
- realistic integration with Supabase

---

## 2. High-level rendering model

### Server-first by default
Most content-heavy routes should start as Server Components.

This is especially true for:
- landing page
- blog listing page shell
- blog detail page shell
- static or mostly static content sections

Why:
- simpler data flow
- less client-side JavaScript
- easier App Router integration
- natural fit for content rendering

### Client-side only where needed
Client Components are introduced when required by:
- local UI interaction
- transitions
- live search input
- TanStack Query hooks
- mutation state
- browser APIs

---

## 3. Route structure

Expected top-level route structure:

- `/` → landing page
- `/blog` → blog listing page
- `/blog/[slug]` → blog detail page

Potential future routes:
- `/saved`
- auth-related routes if needed later
- route groups for marketing/app separation if useful

---

## 4. Boundary strategy

### Route-level boundaries
Use Next.js route conventions for broad page-level async states:

- `loading.tsx`
- `error.tsx`
- `not-found.tsx`

These should be the default for:
- blog listing route
- blog detail route
- any future major route segment that benefits from segment-level fallbacks

### Component-level boundaries
Use local React boundaries when only part of the UI is async-sensitive.

Examples:
- search results section
- related posts section
- comments section
- advanced modal/search feature

Guiding idea:
- route-level boundaries handle broad page state
- local boundaries protect granular async islands

---

## 5. Data architecture

There are three main data layers in this project.

### A. Server data access
Used for:
- initial blog listing
- post detail
- server-rendered route content

This layer should:
- live in dedicated data access modules
- use Supabase server client where appropriate
- return domain-shaped data, not UI-specific shapes

Examples:
- `getPosts`
- `getPostBySlug`
- `getRelatedPosts`

### B. Client query layer
Used where:
- repeated reads benefit from cache
- deduplication matters
- the UI is interactive and query-driven
- search results or related content may be revisited

This layer should use TanStack Query.

Examples:
- search results keyed by `q`
- related posts cache
- bookmark-related query state if needed

### C. Mutation layer
Used for write flows.

Examples:
- save bookmark
- remove bookmark
- add comment if comments are selected as the advanced feature

Mutation logic should:
- be explicit
- live outside visual components when practical
- integrate with optimistic UI or invalidation when appropriate

---

## 6. Supabase usage model

### Server usage
Use Supabase from server-safe modules for:
- initial content reads
- post detail lookup
- authenticated server reads if needed later

### Browser usage
Use Supabase from client-safe modules only when required for:
- client-auth-aware actions
- direct browser-driven interactive flows
- user-specific mutations if implemented client-side

### Rule
Do not scatter raw Supabase queries throughout the UI.
Prefer explicit data functions.

Bad:
- a page component directly constructing multiple complex queries inline

Preferred:
- page calls a focused function like `getPosts({ q, tag })`

---

## 7. Query strategy

TanStack Query should not be the default for everything.
It should be introduced selectively where it solves real problems.

### Good candidates
- live search results
- related posts
- bookmarks data
- comments or paginated content if implemented

### Not necessary at first
- simple server-rendered blog list
- simple post detail page
- static landing content

### Query key strategy
Query keys should be centralized and domain-based.

Examples:
- `blogKeys.list(filters)`
- `blogKeys.detail(slug)`
- `blogKeys.search(q)`
- `bookmarkKeys.list(userId)`

This makes cache behavior easier to reason about.

---

## 8. Search architecture

### Chosen approach
Search is part of the blog listing route:

- `/blog?q=...`

This means search is treated as:
- a state of the blog list
- not a separate full search product route

### Why
This fits the current project better because:
- it keeps the architecture simpler
- it aligns with blog archive behavior
- it supports future filters naturally
- it still allows strong async-first UX

### Search source of truth
The `q` URL param should be the source of truth for results.

### Search interaction model
- input value responds immediately
- results update as a non-urgent async path
- search results can live inside a local Suspense boundary
- subtle pending UI is preferred over route-wide reset behavior

---

## 9. Async-first feature strategy

The project is considered async-first not because every component uses Suspense, but because async work is intentionally structured.

### Main async-first demonstrations in this project
- route-level loading and error boundaries
- local Suspense boundaries
- live search with non-urgent result updates
- TanStack Query cache and deduplication
- bookmark mutation with pending and optimistic UI
- content slicing with independently loading sections

### What is not required
- putting every fetch behind Query
- using transition for every state update
- creating a complex client-only data architecture

---

## 10. Component strategy

### Presentation components
Should:
- receive already-prepared data
- focus on markup and styling
- avoid owning heavy data logic

Examples:
- `BlogPostCard`
- `RelatedPostsList`
- `BookmarkButton` (visual layer only if split)

### Feature components
Can own:
- transitions
- query hooks
- local async state
- Suspense boundaries if scoped to that feature

Examples:
- `BlogSearchSection`
- `RelatedPostsSection`
- `BookmarkToggle`

---

## 11. Folder strategy

### `app/`
Routing, pages, layouts, route-level boundaries

### `components/`
Reusable presentational UI

### `features/`
Feature modules with stronger behavior ownership:
- search
- related-posts
- bookmarks
- comments or pagination

### `lib/`
Shared infrastructure:
- Supabase clients
- query client
- query keys
- data access functions
- shared types if necessary

### `docs/`
Project-level documentation

---

## 12. Error handling strategy

### Route-level
Use `error.tsx` to catch route segment failures.

### Local
Use local error boundaries when:
- one widget should fail independently
- failure should not collapse the entire route

Examples:
- related posts error should not break the post body
- comments failure should not destroy the entire detail page

### Principle
Error scope should match the feature scope.

---

## 13. Loading strategy

### Route-level loading
Used for major route entry states.
Handled by `loading.tsx`.

### Local loading
Used for:
- search results
- related posts
- advanced async widgets

### UX principle
Do not replace the whole screen with a generic spinner unless truly necessary.
Prefer:
- skeletons
- local fallbacks
- stable surrounding UI

---

## 14. Transition strategy

Use transitions only where they improve UX.

### Good cases
- live search results
- non-urgent filter updates
- route-adjacent pending states
- some advanced modal or command interactions

### Avoid
- wrapping every interaction in a transition
- using transitions where plain synchronous UI feedback is more correct

### Goal
Keep urgent interactions responsive while non-urgent work updates in the background.

---

## 15. Mutation strategy

At least one mutation should be implemented in a way that demonstrates async-first thinking.

### Recommended mutation
Bookmark / save post

### Expectations
- pending state is visible
- duplicate clicks are prevented while pending
- optimistic UI is preferred if the flow stays understandable
- failure handling should be explicit

If comments are implemented later, they may become the second mutation case.

---

## 16. Auth strategy

Auth is not required for the earliest project phase.

When introduced:
- use Supabase auth
- scope bookmarks to real users
- keep auth concerns isolated
- avoid mixing auth setup into unrelated features too early

This keeps the MVP lean.

---

## 17. Recommended implementation order

1. foundation and providers
2. route structure
3. server-side blog data flow
4. route-level boundaries
5. live search
6. query integration
7. local Suspense and transitions
8. related posts
9. bookmark mutation
10. one advanced feature
11. auth
12. cleanup and polish

---

## 18. Definition of architectural success

The architecture is successful if:

- server and client responsibilities are easy to explain
- async behavior is visible in the UX, not hidden in effects
- loading and error handling are scoped intentionally
- TanStack Query is used where it adds value, not everywhere
- Supabase access is structured, not scattered
- the project can be discussed clearly in an interview as an async-first app

---

## 19. Final rule

Choose the simplest architecture that still demonstrates the async-first ideas intentionally.
Avoid cleverness that makes the system harder to explain.
