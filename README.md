# MERN Stack Master 🚀

A 45-day hands-on journey to becoming a job-ready full-stack developer — 6 real-world projects built from scratch using the MERN stack and modern tools used in production in 2026.

> "I did not just learn MERN. I built real things with it."

---

## What This Repository Contains

This monorepo documents my complete 45-day summer learning sprint. Every project was built hands-on, deployed to production, and pushed here daily. No tutorials copied. No code pasted. Everything written from scratch.

---

## Projects Built

| # | Project | Stack | Live Demo | Status |
|---|---------|-------|-----------|--------|
| 1 | **Todo App** — Full CRUD with auth | React, Node, Express, MongoDB, JWT | [Live]() |  |
| 2 | **Auth System** — Register, login, refresh tokens, email verify | React, TS, Node, JWT, Nodemailer | [Live]() |  |
| 3 | **E-Commerce App** — Products, cart, orders, image upload | MERN, TypeScript, Redis, Cloudinary | [Live]() | |
| 4 | **Real-Time Chat** — Private + group messaging | MERN, Socket.io, TypeScript | [Live]() | |
| 5 | **Next.js Blog** — SSG, SSR, Server Actions, admin dashboard | Next.js 15, Tailwind, MDX | [Live]() | |
| 6 | **DevOps Setup** — Dockerized MERN, CI/CD pipeline | Docker, GitHub Actions, Render | [Live]() ||

---

## Tech Stack Covered

**Frontend**
- React 18 + TypeScript
- Next.js 15 (App Router, Server Components)
- TanStack Query (React Query)
- React Hook Form + Zod validation
- Tailwind CSS v4
- Zustand (state management)
- Socket.io-client

**Backend**
- Node.js + Express + TypeScript
- JWT authentication (access + refresh token rotation)
- Zod input validation
- Multer + Cloudinary (file uploads)
- Nodemailer (email verification, password reset)
- Socket.io (real-time)
- Redis (caching + sessions)

**Database**
- MongoDB + Mongoose (aggregation pipelines, virtuals, hooks, indexes)
- Redis (ioredis)
- PostgreSQL basics + Prisma (intro)

**DevOps & Tools**
- Docker + Docker Compose
- GitHub Actions (CI/CD)
- Render + Vercel (deployment)
- Jest + Supertest (API testing)
- Helmet, express-rate-limit (security)

---

## Repository Structure

```
mern-stack-master/
│
├── 01-todo-app/
│   ├── backend/          # Express + MongoDB API
│   └── frontend/         # React frontend
│
├── 02-auth-system/
│   ├── backend/          # Node + TS + JWT + Email
│   └── frontend/         # React + TS + RHF + Zod
│
├── 03-ecommerce/
│   ├── backend/          # MERN + Redis + Cloudinary
│   └── frontend/         # React + TS + Zustand
│
├── 04-chat-app/
│   ├── backend/          # Socket.io + MongoDB
│   └── frontend/         # React + Socket.io-client
│
├── 05-nextjs-blog/       # Next.js 15 full app
│
├── 06-devops/
│   ├── docker-compose.yml
│   └── .github/workflows/
│
└── system-design/        # Written design documents
    ├── url-shortener.md
    └── twitter-feed.md
```

---

## Key Concepts Practiced

- REST API design (versioning, pagination, consistent response format)
- JWT access + refresh token rotation pattern
- Role-based access control (user vs admin)
- MongoDB aggregation pipeline ($match, $group, $lookup)
- Redis caching with TTL and cache invalidation
- WebSocket real-time communication
- React Server Components vs Client Components
- Docker multi-stage builds
- CI/CD: push to main → tests run → auto deploy
- System design: URL shortener, Twitter feed architecture

---

## Daily Progress

I followed a strict 45-day roadmap and pushed code every single day.

| Week | Focus | Days |
|------|-------|------|
| Week 1 | Finish MERN basics, React Hooks deep dive, REST best practices | 1–7 |
| Week 2 | TypeScript intro, Auth system backend | 8–14 |
| Week 3 | E-commerce backend, Redis, MongoDB aggregation, API tests | 15–21 |
| Week 4 | E-commerce frontend, Real-time chat with Socket.io | 22–28 |
| Week 5 | Next.js 15, System design thinking | 29–35 |
| Week 6 | Docker, CI/CD, performance optimization | 36–40 |
| Week 7 | DSA basics, SOLID principles, portfolio polish | 41–45 |

---

## How to Run Any Project Locally

Each project folder has its own README with full setup instructions. General pattern:

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/mern-stack-master.git

# Go into a project
cd 02-auth-system/backend

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Fill in your own values in .env

# Run development server
npm run dev
```

---

## Environment Variables

Each project has a `.env.example` file listing all required variables. Never commit real `.env` files. All secrets are managed via environment variables.

---

## What I Learned (Honest Reflection)

- TypeScript feels painful for the first 3 days, then it saves you hours of debugging.
- Redis caching made my product list API go from ~200ms to ~4ms. The difference is real.
- Writing tests first forces you to design better APIs.
- System design is not about memorizing patterns — it is about understanding tradeoffs.
- Docker makes you understand your own app better because it forces you to be explicit about everything.

---

## Connect

- **LinkedIn:** [https://www.linkedin.com/in/ahtisham-khan014/]
---

*Built during summer break 2026 — 45 days, 6 projects, 0 shortcuts.*
