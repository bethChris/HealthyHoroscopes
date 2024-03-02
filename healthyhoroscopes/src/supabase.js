import { createClient } from "@supabase/supabase-js";

// Initialize a Supabase client
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL; // replace this with your Supabase project URL
const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY; // replace this with your Supabase public API key
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
