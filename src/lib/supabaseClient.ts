import { createClient, type SupabaseClient } from '@supabase/supabase-js';

let supabase: SupabaseClient;

export function getSupabaseClient() {
  if (!supabase) {
    const url = import.meta.env.PUBLIC_SUPABASE_URL;
    const key = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;
    
    // Validación
    if (!url || !key) {
      throw new Error('❌ Faltan variables de entorno: PUBLIC_SUPABASE_URL y/o PUBLIC_SUPABASE_ANON_KEY');
    }
    
    console.log('✅ Inicializando Supabase con:', { url: url.substring(0, 20) + '...' });
    
    supabase = createClient(url, key);
  }

  return supabase;
}