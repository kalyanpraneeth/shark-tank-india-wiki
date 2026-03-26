# Shark Tank India Wiki

A full-stack fan wiki for Shark Tank India S1–S5 built with Next.js, Tailwind CSS, and Supabase.

## Features

- 15 sharks with individual profile pages
- 40+ pitches with search and filter
- Season breakdowns S1–S5
- Top deals leaderboard
- Per-shark portfolio view
- Post-show tracker
- Fan vote (persistent, stored in Supabase)
- User deal submissions (stored in Supabase)
- Quiz (10 random questions)
- Pitch simulator
- SEO meta tags on every page
- Mobile-first responsive layout with hamburger menu

---

## Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Set up Supabase (free)
1. Go to [supabase.com](https://supabase.com) and create a free account
2. Create a new project
3. Go to **SQL Editor** and paste + run the contents of `supabase-setup.sql`
4. Go to **Project Settings → API** and copy:
   - `Project URL`
   - `anon public` key

### 3. Add environment variables
Open `.env.local` and replace the placeholder values:
```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

### 4. Run the dev server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Deploy to Vercel (free)

1. Push your code to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and import the repo
3. Add your environment variables in the Vercel dashboard:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Deploy — your site will be live at `https://your-project.vercel.app`

---

## Project Structure

```
shark-tank-india-wiki/
├── app/
│   ├── layout.tsx          # Root layout + SEO metadata
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles + Tailwind
│   ├── sharks/
│   │   ├── page.tsx        # All sharks grid
│   │   └── [id]/page.tsx   # Individual shark profile
│   ├── seasons/page.tsx
│   ├── deals/page.tsx
│   ├── leaderboard/page.tsx
│   ├── portfolio/page.tsx
│   ├── tracker/page.tsx
│   ├── vote/page.tsx       # Requires Supabase
│   ├── submit/page.tsx     # Requires Supabase
│   ├── quiz/page.tsx
│   └── sim/page.tsx
├── components/
│   └── Navbar.tsx          # Sticky nav with mobile hamburger
├── lib/
│   ├── data.ts             # All sharks, deals, seasons data
│   └── supabase.ts         # Supabase client
├── supabase-setup.sql      # Run this in Supabase SQL Editor
├── .env.local              # Your Supabase keys (don't commit this)
└── README.md
```

---

## Moderating Submissions

To approve a user-submitted deal, go to your Supabase dashboard → Table Editor → `submissions` table and change the `status` field from `pending` to `approved`. It will then appear on the Submit page for all visitors.
