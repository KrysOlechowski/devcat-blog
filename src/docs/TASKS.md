# TASKS.md

## Project: Async-First Blog App

### Status legend

- `todo` — not started
- `doing` — currently in progress
- `✅ done` — completed
- `blocked` — waiting on a dependency or decision

---

## Phase 0 — Foundation

### T-001 — Initialize project foundation

**Status:** todo  
**Goal:** Create a clean Next.js App Router project with TypeScript and Tailwind.

**Done when:**

- Next.js App Router project exists
- TypeScript is enabled
- Tailwind is configured
- App runs locally without errors

**Notes:**

- Keep setup minimal
- Do not add extra libraries yet beyond the planned stack

---

### T-002 — Configure project aliases and base structure

**Status:** todo  
**Goal:** Add import aliases and prepare the initial folder structure.

**Done when:**

- Path aliases are configured
- `app`, `components`, `lib`, `features`, and `docs` directories exist
- Folder structure matches the roadmap direction

**Notes:**

- Prefer clear domain-oriented folders over random utility sprawl

---

### T-003 — Add TanStack Query provider

**Status:** todo  
**Goal:** Integrate QueryClientProvider into the App Router setup.

**Done when:**

- Query client is created in a dedicated file
- Provider is mounted once in app-level client wrapper
- App renders correctly with the provider enabled

**Notes:**

- Keep the provider setup simple
- Devtools may be added later

---

### T-004 — Configure Supabase clients

**Status:** todo  
**Goal:** Add browser and server Supabase clients using `@supabase/ssr`.

**Done when:**

- `lib/supabase/client.ts` exists
- `lib/supabase/server.ts` exists
- env variables are wired correctly
- client/server usage is clearly separated

**Notes:**

- Follow App Router-compatible Supabase setup
- Avoid mixing browser-only logic into server files

---

### T-005 — Create base layout shell

**Status:** todo  
**Goal:** Add a reusable app shell with header, container, and navigation.

**Done when:**

- Root layout has a basic visual structure
- Navigation contains links for landing and blog
- Layout is ready for later async-first enhancements

**Notes:**

- Keep UI minimal but clean
- Tailwind only, no component library for now

---

## Phase 1 — Project docs and conventions

### T-006 — Add README

**Status:** todo  
**Goal:** Document the project purpose, stack, and local setup.

**Done when:**

- README explains what the project is
- Setup instructions are present
- Required env vars are listed
- Main features are described briefly

---

### T-007 — Add ARCHITECTURE.md

**Status:** todo  
**Goal:** Write the initial architecture document.

**Done when:**

- Server vs client component strategy is documented
- Route-level vs component-level boundaries are described
- Query layer usage is explained
- Supabase integration approach is noted

---

### T-008 — Add AGENTS.md

**Status:** todo  
**Goal:** Create a working guide for Codex/AI collaboration.

**Done when:**

- Coding conventions are listed
- Folder and naming conventions are documented
- Task execution rules are described
- “Do not” guidance is included

**Notes:**

- This file should reduce ambiguity for future AI prompts

---

## Phase 2 — Supabase schema and seed data

### T-009 — Design posts table

**Status:** todo  
**Goal:** Create the initial `posts` schema in Supabase.

**Done when:**

- `posts` table exists
- includes slug, title, excerpt, content, published date, and tags
- slug uniqueness is enforced
- schema is documented

---

### T-010 — Seed initial posts

**Status:** todo  
**Goal:** Add realistic sample blog data.

**Done when:**

- At least 8–10 posts exist
- posts cover multiple tags/categories
- slugs are clean and route-ready

**Notes:**

- Seed data should be good enough to support search and related posts

---

### T-011 — Design bookmarks table

**Status:** todo  
**Goal:** Create the `bookmarks` table for future user-specific saves.

**Done when:**

- bookmarks table exists
- references post and user identifiers
- basic constraints are in place

**Notes:**

- Full auth integration may come later, but schema should be ready

---

### T-012 — Add optional comments table decision

**Status:** todo  
**Goal:** Decide whether the first advanced feature will be comments or pagination.

**Done when:**

- one feature is explicitly selected
- corresponding table/schema direction is documented

**Notes:**

- Do not implement both at first

---

## Phase 3 — Core routes and boundaries

### T-013 — Build landing page route

**Status:** todo  
**Goal:** Create the `/` landing page.

**Done when:**

- landing route exists
- page has hero section and project framing
- visual style aligns with the rest of the app

---

### T-014 — Build blog listing route

**Status:** todo  
**Goal:** Create `/blog` with the basic list of posts.

**Done when:**

- route exists
- posts are rendered from Supabase data
- empty state is handled

---

### T-015 — Build blog detail route

**Status:** todo  
**Goal:** Create `/blog/[slug]` for individual post pages.

**Done when:**

- dynamic route works from slug
- full post content is shown
- invalid slug is handled correctly

---

### T-016 — Add blog loading.tsx

**Status:** todo  
**Goal:** Create route-level loading UI for `/blog`.

**Done when:**

- `app/blog/loading.tsx` exists
- loading UI uses a skeleton-like pattern
- no full-page generic spinner is used

---

### T-017 — Add blog error.tsx

**Status:** todo  
**Goal:** Create route-level error UI for `/blog`.

**Done when:**

- `app/blog/error.tsx` exists
- recovery or retry guidance is present
- error UI is visually consistent

---

### T-018 — Add post not-found.tsx

**Status:** todo  
**Goal:** Handle invalid slugs with a route-level not found UI.

**Done when:**

- `app/blog/[slug]/not-found.tsx` exists
- invalid post routes render a proper not-found state

---

## Phase 4 — Server-first blog implementation

### T-019 — Create blog data access layer

**Status:** todo  
**Goal:** Add reusable blog query functions for server usage.

**Done when:**

- list posts query exists
- get post by slug query exists
- functions live in a dedicated blog data module

**Notes:**

- Keep query functions small and composable

---

### T-020 — Create reusable blog list components

**Status:** todo  
**Goal:** Extract UI for post cards and blog lists.

**Done when:**

- post card component exists
- blog list component exists
- components are presentation-focused

---

### T-021 — Create reusable post detail components

**Status:** todo  
**Goal:** Extract UI for title, metadata, and content sections.

**Done when:**

- detail page is composed of reusable parts
- markup is readable and easy to extend

---

## Phase 5 — Live search in /blog?q=...

### T-022 — Add search input shell to /blog

**Status:** todo  
**Goal:** Render a search input on the blog page.

**Done when:**

- search input is visible on `/blog`
- input has basic styling and accessibility attributes
- placeholder text is meaningful

---

### T-023 — Sync search input with `q` param

**Status:** todo  
**Goal:** Make the blog search query URL-driven.

**Done when:**

- input reads from `q`
- URL updates when search changes
- page refresh preserves search state

**Notes:**

- `q` should be the source of truth for results

---

### T-024 — Implement filtered blog results

**Status:** todo  
**Goal:** Filter posts based on the search query.

**Done when:**

- results change when `q` changes
- empty state is shown when nothing matches
- search works across realistic post fields

---

### T-025 — Add responsive search UX with transition/deferred flow

**Status:** todo  
**Goal:** Keep typing responsive while results update asynchronously.

**Done when:**

- urgent input state remains smooth
- results update uses transition or deferred value semantics
- UI shows subtle pending feedback

**Notes:**

- Do not use a full-page loading reset
- This is one of the key async-first tasks

---

### T-026 — Add local Suspense boundary for search results

**Status:** todo  
**Goal:** Scope loading UI to results only, not the whole page.

**Done when:**

- results section has its own Suspense boundary
- loading fallback affects only the result area
- surrounding UI remains stable

---

## Phase 6 — TanStack Query integration

### T-027 — Define query keys

**Status:** todo  
**Goal:** Create a centralized query key strategy.

**Done when:**

- query keys exist in a dedicated file
- blog search and related posts keys are clearly defined
- key naming is consistent

---

### T-028 — Add TanStack Query for search results

**Status:** todo  
**Goal:** Move search result fetching into the query layer.

**Done when:**

- search uses TanStack Query
- cache works across repeated queries
- duplicated requests are avoided

**Notes:**

- Keep query key tied to `q`

---

### T-029 — Configure `staleTime` intentionally

**Status:** todo  
**Goal:** Prevent overly aggressive refetching for blog data.

**Done when:**

- search and/or related queries have documented `staleTime`
- chosen values are justified in architecture notes

---

### T-030 — Add query error handling strategy

**Status:** todo  
**Goal:** Align TanStack Query usage with Suspense and error boundaries.

**Done when:**

- query rendering strategy is documented
- loading/error are handled through the intended boundary model

---

## Phase 7 — Related posts and content slicing

### T-031 — Add related posts query

**Status:** todo  
**Goal:** Compute or fetch related posts for a blog detail page.

**Done when:**

- related posts section exists on post detail
- related posts are based on tags or category similarity
- current post is excluded

---

### T-032 — Add local Suspense boundary for related posts

**Status:** todo  
**Goal:** Load related content independently of the main post body.

**Done when:**

- related posts have their own loading fallback
- main post content remains stable while related posts load

---

### T-033 — Add local error fallback for related posts

**Status:** todo  
**Goal:** Avoid route-level failure if only related posts fail.

**Done when:**

- related posts can fail independently
- user still sees the main post content

---

## Phase 8 — Prefetch and smoother navigation

### T-034 — Prefetch blog detail routes

**Status:** todo  
**Goal:** Improve perceived navigation speed from list to detail.

**Done when:**

- blog cards use route prefetch behavior intentionally
- navigation feels fast and predictable

---

### T-035 — Prefetch detail data where it is worth it

**Status:** todo  
**Goal:** Explore whether detail data should be prefetched beyond route shell behavior.

**Done when:**

- prefetch strategy is documented
- implementation exists only if it adds value

**Notes:**

- Avoid unnecessary complexity if route prefetch is already enough

---

## Phase 9 — Bookmark mutation with optimistic UI

### T-036 — Add bookmark button UI

**Status:** todo  
**Goal:** Render a save/bookmark control on post cards or detail pages.

**Done when:**

- bookmark button exists
- button has default and active visuals
- accessibility labels are present

---

### T-037 — Implement bookmark mutation

**Status:** todo  
**Goal:** Persist bookmark changes to Supabase.

**Done when:**

- save action writes to Supabase
- remove action is supported or planned explicitly
- mutation code is separated cleanly

---

### T-038 — Add pending state for bookmark mutation

**Status:** todo  
**Goal:** Communicate in-progress save state to the user.

**Done when:**

- button shows pending feedback
- duplicate interactions are prevented during mutation

---

### T-039 — Add optimistic UI for bookmarks

**Status:** todo  
**Goal:** Update bookmark state immediately before server confirmation.

**Done when:**

- UI updates optimistically
- rollback or reconciliation happens on failure
- mutation flow is documented

---

## Phase 10 — Advanced feature

### T-040 — Implement chosen advanced feature

**Status:** todo  
**Goal:** Add either comments, pagination, infinite scroll, or command palette.

**Done when:**

- one advanced feature is shipped
- it integrates with the async-first architecture
- loading and error behavior are scoped appropriately

---

## Phase 11 — Auth and user-specific flows

### T-041 — Add Supabase auth

**Status:** todo  
**Goal:** Introduce authentication for user-specific data.

**Done when:**

- auth flow is working
- session is available where needed
- protected user-specific behavior is possible

---

### T-042 — Scope bookmarks to authenticated users

**Status:** todo  
**Goal:** Tie bookmark data to a real signed-in user.

**Done when:**

- bookmark reads/writes are user-specific
- unauthorized behavior is handled gracefully

---

## Phase 12 — Polish and cleanup

### T-043 — Accessibility pass

**Status:** todo  
**Goal:** Improve keyboard, semantics, and assistive support.

**Done when:**

- inputs and buttons are labeled correctly
- interactive states are accessible
- major route and form flows are keyboard-usable

---

### T-044 — Mobile responsiveness pass

**Status:** todo  
**Goal:** Make the app usable on small screens.

**Done when:**

- landing, blog list, detail, and search are responsive
- no layout-breaking overflow remains

---

### T-045 — Loading and empty state consistency pass

**Status:** todo  
**Goal:** Normalize skeletons, pending states, and empty states.

**Done when:**

- loading UI feels coherent across the app
- empty states are intentional and readable

---

### T-046 — Architecture cleanup pass

**Status:** todo  
**Goal:** Refactor rough edges after feature work.

**Done when:**

- server/client boundaries are consistent
- repeated logic is reduced
- docs are updated to reflect final decisions

---

## Nice-to-have stretch tasks

### T-047 — Add tag filters

**Status:** todo  
**Goal:** Extend `/blog?q=...` with tag-driven filtering.

---

### T-048 — Add sort control

**Status:** todo  
**Goal:** Allow sorting posts by latest or other useful modes.

---

### T-049 — Add draft/preview mode

**Status:** todo  
**Goal:** Support previewing unpublished content.

---

### T-050 — Add search modal / command palette

**Status:** todo  
**Goal:** Explore a more app-like global search experience.

---

## Suggested execution order

1. T-001 → T-005
2. T-006 → T-008
3. T-009 → T-012
4. T-013 → T-021
5. T-022 → T-026
6. T-027 → T-030
7. T-031 → T-035
8. T-036 → T-039
9. T-040 → T-042
10. T-043 → T-046
11. T-047 → T-050 (optional)
