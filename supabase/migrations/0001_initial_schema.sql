-- DRAFT by Claude. NOT executed or tested. Grok: run on a fresh Supabase project, fix errors, report real results.
create extension if not exists postgis;

create type user_role as enum ('student','agent','admin');
create type availability as enum ('available','occupied','unavailable');
create type publication as enum ('draft','published','hidden');
create type inspection_status as enum ('pending','accepted','declined','reschedule_proposed','cancelled','completed');
create type media_kind as enum ('photo','video','overview_video');

create table profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text not null,
  role user_role not null default 'student',
  created_at timestamptz default now(), updated_at timestamptz default now()
);

create table agent_profiles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid unique not null references profiles(id) on delete cascade,
  public_name text not null, bio text, phone text, whatsapp text, avatar_url text,
  is_verified boolean not null default false,
  created_at timestamptz default now(), updated_at timestamptz default now()
);

create table properties (
  id uuid primary key default gen_random_uuid(),
  agent_id uuid not null references agent_profiles(id) on delete cascade,
  title text not null, description text, address_text text not null, area text,
  category text not null default 'student_accommodation',
  latitude double precision not null, longitude double precision not null,
  location geography(Point,4326) generated always as (st_setsrid(st_makepoint(longitude,latitude),4326)::geography) stored,
  amenities jsonb not null default '[]',
  publication_status publication not null default 'published',
  created_at timestamptz default now(), updated_at timestamptz default now()
);
create index on properties using gist(location);

create table rooms (
  id uuid primary key default gen_random_uuid(),
  property_id uuid not null references properties(id) on delete cascade,
  label text not null, description text, room_type text,
  price_amount numeric(12,2), price_currency text default 'NGN', price_period text default 'year',
  availability availability not null default 'available',
  created_at timestamptz default now(), updated_at timestamptz default now()
);
create index on rooms(property_id, availability);

create table property_media (
  id uuid primary key default gen_random_uuid(),
  property_id uuid not null references properties(id) on delete cascade,
  kind media_kind not null, url text not null, sort_order int default 0,
  created_at timestamptz default now()
);
create unique index property_one_overview on property_media(property_id) where kind = 'overview_video';

create table room_media (
  id uuid primary key default gen_random_uuid(),
  room_id uuid not null references rooms(id) on delete cascade,
  kind media_kind not null check (kind in ('photo','video')),
  url text not null, sort_order int default 0,
  created_at timestamptz default now()
);

create table inspection_requests (
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references profiles(id) on delete cascade,
  room_id uuid not null references rooms(id) on delete cascade,
  preferred_date date, preferred_time text, phone text, message text,
  status inspection_status not null default 'pending',
  agent_note text, proposed_new_time timestamptz,
  created_at timestamptz default now(), updated_at timestamptz default now()
);

create table agent_follows (
  student_id uuid references profiles(id) on delete cascade,
  agent_id uuid references agent_profiles(id) on delete cascade,
  created_at timestamptz default now(), primary key(student_id, agent_id)
);

create table notifications (
  id uuid primary key default gen_random_uuid(),
  recipient_id uuid not null references profiles(id) on delete cascade,
  type text not null, payload jsonb not null default '{}', read_at timestamptz, created_at timestamptz default now()
);

create table agent_reviews (
  id uuid primary key default gen_random_uuid(),
  agent_id uuid not null references agent_profiles(id) on delete cascade,
  author_id uuid not null references profiles(id) on delete cascade,
  rating int not null check (rating between 1 and 5), review_text text,
  status text not null default 'visible',
  created_at timestamptz default now(), updated_at timestamptz default now(),
  unique(agent_id, author_id)
);

create table listing_analytics_events (
  id bigint generated always as identity primary key,
  property_id uuid not null references properties(id) on delete cascade,
  room_id uuid references rooms(id) on delete set null,
  event_type text not null, session_hash text, occurred_at timestamptz default now(), metadata jsonb default '{}'
);

create table route_cache (
  property_id uuid not null references properties(id) on delete cascade,
  origin_key text not null, distance_m int not null, duration_s int not null, fetched_at timestamptz default now(),
  primary key(property_id, origin_key)
);

create table app_config (key text primary key, value jsonb not null);

alter table profiles enable row level security;
alter table agent_profiles enable row level security;
alter table properties enable row level security;
alter table rooms enable row level security;
alter table property_media enable row level security;
alter table room_media enable row level security;
alter table inspection_requests enable row level security;
alter table agent_follows enable row level security;
alter table notifications enable row level security;
alter table agent_reviews enable row level security;
alter table listing_analytics_events enable row level security;
alter table route_cache enable row level security;
alter table app_config enable row level security;
