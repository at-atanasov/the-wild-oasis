import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://wmkkxiwadqfjadxfdtxf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indta2t4aXdhZHFmamFkeGZkdHhmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIxOTEwNzQsImV4cCI6MjA3Nzc2NzA3NH0.BvO9cMd9desGbmeYXuissdSQJEBsL_gv1nk_Elug3AA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
