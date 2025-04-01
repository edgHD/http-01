import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://qdqtuvozpdhrhipuzroo.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFkcXR1dm96cGRocmhpcHV6cm9vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMyMTMyNzgsImV4cCI6MjA1ODc4OTI3OH0.rXA20HdDSVlYYr69BFf6Bn6vG1OHhfvGqgxVro8oyzo'

export const supabase = createClient(supabaseUrl, supabaseKey);