-- ============================================================
-- Run this in your Supabase SQL Editor (supabase.com → project → SQL Editor)
-- ============================================================

-- 1. VOTES TABLE
create table if not exists votes (
  id uuid primary key default gen_random_uuid(),
  vote_type text not null,   -- 'shark' or 'pitch'
  vote_key  text not null,   -- e.g. 'Aman' or 'Skippi Ice Pops'
  count     int  not null default 0,
  unique (vote_type, vote_key)
);

-- 2. UPSERT VOTE FUNCTION (increments count atomically)
create or replace function upsert_vote(p_type text, p_key text)
returns void language plpgsql as $$
begin
  insert into votes (vote_type, vote_key, count)
  values (p_type, p_key, 1)
  on conflict (vote_type, vote_key)
  do update set count = votes.count + 1;
end;
$$;

-- 3. SUBMISSIONS TABLE
create table if not exists submissions (
  id            bigserial primary key,
  startup_name  text not null,
  sector        text not null,
  season        text not null default 'S1',
  deal_amount   text,
  sharks        text,
  notes         text,
  status        text not null default 'pending',  -- 'pending' | 'approved' | 'rejected'
  created_at    timestamptz not null default now()
);

-- 4. ROW LEVEL SECURITY
-- Allow anyone to read approved submissions
alter table submissions enable row level security;
create policy "Public can read approved submissions"
  on submissions for select
  using (status = 'approved');

-- Allow anyone to insert (submit a deal)
create policy "Anyone can submit"
  on submissions for insert
  with check (true);

-- Allow anyone to read votes
alter table votes enable row level security;
create policy "Public can read votes"
  on votes for select
  using (true);

-- Allow anyone to call upsert_vote via RPC
-- (no extra policy needed — function runs with definer rights)
