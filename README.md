# 🚀 Async-First Blog App

A modern **blog-shaped learning app** built to explore **async-first architecture** with real product flows, intentional boundaries, and clean rendering decisions.

This project is not just about shipping a blog.

It is a focused playground for learning how to build a **Next.js app that treats async as part of rendering**, not as an afterthought hidden in effects.

---

## ✨ Why this project exists

The goal is to practice and understand:

- **async-first app architecture**
- **Next.js App Router**
- **React Server Components**
- **route-level and local Suspense boundaries**
- **transitions and non-urgent UI updates**
- **TanStack Query cache + dedup**
- **Supabase data and auth flows**
- **optimistic UI**
- **clear server/client boundaries**

Instead of building a random demo, this project uses a familiar product shape:

- 🏠 landing page
- 📝 blog listing
- 📄 blog post detail
- 🔎 live search in `/blog?q=...`
- 🔖 bookmarks
- 🧩 independently loading UI sections

That makes the architecture easier to reason about and easier to discuss in interviews.

---

## 🧠 Core idea: async-first

This project is built around one main idea:

> Async is part of rendering.

That means:

- data loading is not treated only as `useEffect + isLoading`
- loading and error states are scoped intentionally
- route-level async states use Next.js conventions
- local async states use Suspense boundaries where appropriate
- non-urgent updates can use transitions
- cache and dedup are handled by the data layer, not by ad hoc component logic

### In practice, this means:

- **Server Components first** for content-heavy routes
- **Client Components only where interactivity is needed**
- **TanStack Query** only where cache/dedup/client async lifecycle earns its keep
- **Supabase** as the real backend source
- **no global spinner mentality**

---

## 🏗️ Tech stack

- ⚡ **Next.js App Router**
- 🟦 **TypeScript**
- 🎨 **Tailwind CSS**
- 🗄️ **Supabase**
- 🔄 **TanStack Query v5**

---

## 🧭 Product scope

### Core product

- landing page
- blog listing page
- blog detail page

### Async-first features

- live search in `/blog?q=...`
- route-level loading and error handling
- local Suspense boundaries
- related posts
- prefetching for smoother navigation
- cache-aware client async flows

### Interactive features

- bookmark/save post
- optimistic UI
- one advanced app-like feature such as:
  - comments
  - pagination / infinite scroll
  - search modal / command palette

---

## 🧱 Architecture highlights

### 1. Server-first by default

Most content-heavy pages start as **Server Components**.

This keeps:

- data flow simpler
- client bundle smaller
- rendering model clearer

### 2. Client only where it matters

Client Components are introduced for:

- live search input
- transitions
- TanStack Query hooks
- bookmark interactions
- other interactive async flows

### 3. Route-level boundaries

Broad page-level async states use:

- `loading.tsx`
- `error.tsx`
- `not-found.tsx`

### 4. Component-level boundaries

Granular async UI uses:

- local `<Suspense>`
- local error boundaries

Examples:

- search results
- related posts
- comments

### 5. Query layer with intent

TanStack Query is used where it adds real value:

- search result caching
- deduplication
- related content caching
- mutation handling
- optimistic updates

Not everything needs Query.

That is intentional.

---

## 🗂️ Project structure

```txt
app/
  (marketing)/
    page.tsx
  blog/
    loading.tsx
    error.tsx
    page.tsx
    [slug]/
      not-found.tsx
      page.tsx

components/
  ui/
  blog/
  search/
  bookmarks/

features/
  search/
  related-posts/
  bookmarks/
  comments/

lib/
  supabase/
    client.ts
    server.ts
  query/
    query-client.ts
    keys.ts
  blog/
    queries.ts
    mutations.ts
    types.ts

docs/
  ROADMAP.md
  TASKS.md
  ARCHITECTURE.md
  AGENTS.md
```

---

## 📚 Project docs

The repository includes a small documentation system to make development with Codex easier:

- **`ROADMAP.md`** → high-level project phases and scope
- **`TASKS.md`** → implementation backlog in small steps
- **`ARCHITECTURE.md`** → rendering model, boundaries, and data flow
- **`AGENTS.md`** → conventions and rules for AI coding assistants

---

## 🎯 What this project should demonstrate

A successful version of this project should make it easy to explain:

- why some parts are Server Components
- why some parts are Client Components
- where async boundaries live
- where Query is useful and where it is unnecessary
- how search stays responsive
- how loading/error states are scoped
- how optimistic UI is handled
- how Supabase fits into the data model

In other words:

> the project should be understandable, not just modern-looking.

---

## 🧪 Development philosophy

This project is built in **small vertical slices**.

That means:

- one task at a time
- one feature at a time
- architecture before cleverness
- no giant all-at-once refactors
- clean decisions over maximal abstraction

This makes it easier to:

- work with Codex
- review changes
- keep the architecture explainable
- learn the stack deeply instead of superficially

---

## 🪄 Async-first examples inside the project

Some of the most important flows this repo is designed to explore:

- 🔎 **Live search** with urgent input + non-urgent result updates
- 🧩 **Local Suspense boundaries** for partial loading
- 🔖 **Bookmark mutation** with pending state and optimistic UI
- ⚡ **Prefetching** for smoother navigation
- 🧠 **Query caching and dedup** where repeated reads matter
- 🪜 **Route-level loading and error boundaries** via App Router conventions

---

## 📌 Final note

This project is intentionally shaped like a blog, but architected like a small app.

That balance is the point.

It should stay simple enough to build iteratively, but rich enough to teach:

- async-first thinking
- modern React architecture
- practical Next.js rendering decisions
- clean collaboration with AI coding tools

---

## 🤝 Working with Codex

If you use Codex on this project, start from:

1. `ROADMAP.md`
2. `TASKS.md`
3. `ARCHITECTURE.md`
4. `AGENTS.md`

Then implement one small task at a time.

The repo is designed for that workflow.
