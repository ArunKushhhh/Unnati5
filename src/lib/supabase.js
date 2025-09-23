import { createClient } from '@supabase/supabase-js'

// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
// const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY 
const supabaseUrl = 'https://kaymsfxjmwrpchpbhzfq.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtheW1zZnhqbXdycGNocGJoemZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY5MTczOTMsImV4cCI6MjA3MjQ5MzM5M30.RwSvcWNXuKBrQ9IYDouB9cSzsrdoJwnjEwyQkrZeojY'


if (!supabaseUrl) {
  throw new Error('Missing VITE_SUPABASE_URL environment variable')
}

if (!supabaseKey) {
  throw new Error('Missing VITE_SUPABASE_ANON_KEY environment variable')
}

export const supabase = createClient(supabaseUrl, supabaseKey)
