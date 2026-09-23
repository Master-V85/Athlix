import { createClient, type SupabaseClient } from '@supabase/supabase-js';

function createSafeClient(): SupabaseClient {
  try {
    const url = import.meta.env.VITE_SUPABASE_URL;
    const key = import.meta.env.VITE_SUPABASE_ANON_KEY;
    if (!url || !key) throw new Error('Missing Supabase env vars');
    return createClient(url, key, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
      },
    });
  } catch {
    // Return a minimal stub so the app never crashes if Supabase is unavailable
    return {
      auth: {
        getSession: () => Promise.resolve({ data: { session: null }, error: null }),
        onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
        signInWithPassword: () => Promise.resolve({ data: null, error: { message: 'Service unavailable. Please try again later.' } }),
        signUp: () => Promise.resolve({ data: null, error: { message: 'Service unavailable. Please try again later.' } }),
        signOut: () => Promise.resolve({ error: null }),
      },
    } as unknown as SupabaseClient;
  }
}

export const supabase = createSafeClient();
