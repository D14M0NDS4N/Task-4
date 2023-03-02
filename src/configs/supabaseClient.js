import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://pdflmkoithxeisvtrebc.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBkZmxta29pdGh4ZWlzdnRyZWJjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc1OTgzOTAsImV4cCI6MTk5MzE3NDM5MH0.5FDhoV5dYcKqChfKLkCFxfymnqmrCRokGvyK2MQQEDs'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)