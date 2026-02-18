import { createClient, type SupabaseClient } from '@supabase/supabase-js';

let supabase: SupabaseClient;

export function getSupabaseClient() {
  if (!supabase) {
    supabase = createClient(
      import.meta.env.PUBLIC_SUPABASE_URL!,
      import.meta.env.PUBLIC_SUPABASE_ANON_KEY!
    );
  }

  return supabase;
}
