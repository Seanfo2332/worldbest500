import { createClient, type SupabaseClient } from "@supabase/supabase-js";

// World Best 500's crawled 洞察 come from the shared MCN Group Supabase project
// (mcn-database/schema.sql), scoped to the `WB500` site code. The publishable anon key only
// grants what the database's row-level security policies allow -- it can never bypass them, so
// it is safe in the client bundle. Never put a service_role key here.
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

/** Which `countries.code` row this site's articles are tagged with. */
export const SITE_CODE = process.env.NEXT_PUBLIC_WB_SITE_CODE || "WB500";

export const isSupabaseConfigured = Boolean(
  SUPABASE_URL && SUPABASE_ANON_KEY && !SUPABASE_URL.includes("YOUR-PROJECT"),
);

let cached: SupabaseClient | null = null;

/** Lazily-created shared client, or null when Supabase isn't configured (falls back to curated). */
export function getSupabase(): SupabaseClient | null {
  if (!isSupabaseConfigured) return null;
  if (!cached) cached = createClient(SUPABASE_URL as string, SUPABASE_ANON_KEY as string);
  return cached;
}
