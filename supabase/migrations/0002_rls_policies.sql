-- RLS policies: agents edit only own properties; students cannot change availability.

create or replace function public.current_profile_id()
returns uuid language sql stable as $$ select auth.uid(); $$;

create or replace function public.is_owner_agent(agent_uuid uuid)
returns boolean language sql stable security definer set search_path = public as $$
  select exists (
    select 1 from agent_profiles ap
    where ap.id = agent_uuid and ap.user_id = auth.uid()
  );
$$;

create or replace function public.owns_property(prop_id uuid)
returns boolean language sql stable security definer set search_path = public as $$
  select exists (
    select 1 from properties p
    join agent_profiles ap on ap.id = p.agent_id
    where p.id = prop_id and ap.user_id = auth.uid()
  );
$$;

-- profiles
create policy "profiles_select_own_or_public" on profiles for select using (true);
create policy "profiles_insert_own" on profiles for insert with check (id = auth.uid());
create policy "profiles_update_own" on profiles for update using (id = auth.uid()) with check (id = auth.uid());

-- agent_profiles
create policy "agent_profiles_select_all" on agent_profiles for select using (true);
create policy "agent_profiles_insert_own" on agent_profiles for insert with check (user_id = auth.uid());
create policy "agent_profiles_update_own" on agent_profiles for update using (user_id = auth.uid()) with check (user_id = auth.uid());

-- properties
create policy "properties_select_published" on properties for select
  using (publication_status = 'published' or owns_property(id));
create policy "properties_insert_own_agent" on properties for insert with check (is_owner_agent(agent_id));
create policy "properties_update_own" on properties for update using (owns_property(id)) with check (owns_property(id));
create policy "properties_delete_own" on properties for delete using (owns_property(id));

-- rooms (students cannot change availability — owns_property is false for them)
create policy "rooms_select_via_property" on rooms for select
  using (exists (
    select 1 from properties p where p.id = rooms.property_id
      and (p.publication_status = 'published' or owns_property(p.id))
  ));
create policy "rooms_insert_own" on rooms for insert with check (owns_property(property_id));
create policy "rooms_update_own" on rooms for update using (owns_property(property_id)) with check (owns_property(property_id));
create policy "rooms_delete_own" on rooms for delete using (owns_property(property_id));

-- property_media
create policy "property_media_select" on property_media for select
  using (exists (
    select 1 from properties p where p.id = property_media.property_id
      and (p.publication_status = 'published' or owns_property(p.id))
  ));
create policy "property_media_write_own" on property_media for all
  using (owns_property(property_id)) with check (owns_property(property_id));

-- room_media
create policy "room_media_select" on room_media for select
  using (exists (
    select 1 from rooms r join properties p on p.id = r.property_id
    where r.id = room_media.room_id and (p.publication_status = 'published' or owns_property(p.id))
  ));
create policy "room_media_write_own" on room_media for all
  using (exists (select 1 from rooms r where r.id = room_media.room_id and owns_property(r.property_id)))
  with check (exists (select 1 from rooms r where r.id = room_media.room_id and owns_property(r.property_id)));

-- inspection_requests
create policy "inspections_select_own_or_agent" on inspection_requests for select
  using (
    student_id = auth.uid()
    or exists (
      select 1 from rooms r join properties p on p.id = r.property_id
      join agent_profiles ap on ap.id = p.agent_id
      where r.id = inspection_requests.room_id and ap.user_id = auth.uid()
    )
  );
create policy "inspections_insert_student" on inspection_requests for insert with check (student_id = auth.uid());
create policy "inspections_update_student_or_agent" on inspection_requests for update
  using (
    student_id = auth.uid()
    or exists (
      select 1 from rooms r join properties p on p.id = r.property_id
      join agent_profiles ap on ap.id = p.agent_id
      where r.id = inspection_requests.room_id and ap.user_id = auth.uid()
    )
  );

-- agent_follows
create policy "follows_select_own" on agent_follows for select using (student_id = auth.uid() or is_owner_agent(agent_id));
create policy "follows_insert_own" on agent_follows for insert with check (student_id = auth.uid());
create policy "follows_delete_own" on agent_follows for delete using (student_id = auth.uid());

-- notifications
create policy "notifications_select_own" on notifications for select using (recipient_id = auth.uid());
create policy "notifications_update_own" on notifications for update using (recipient_id = auth.uid());

-- agent_reviews
create policy "reviews_select_visible" on agent_reviews for select
  using (status = 'visible' or author_id = auth.uid() or is_owner_agent(agent_id));
create policy "reviews_insert_own" on agent_reviews for insert with check (author_id = auth.uid());
create policy "reviews_update_own" on agent_reviews for update using (author_id = auth.uid()) with check (author_id = auth.uid());

-- analytics
create policy "analytics_insert_anyone" on listing_analytics_events for insert with check (true);
create policy "analytics_select_owner" on listing_analytics_events for select using (owns_property(property_id));

-- route_cache (writes via service role only)
create policy "route_cache_select_all" on route_cache for select using (true);

-- app_config
create policy "app_config_select_all" on app_config for select using (true);
