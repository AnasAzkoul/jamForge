import {createClient} from "@supabase/supabase-js";

const supabaseURL = process.env.VITE_SUPABASE_URL;

const supabaseAnonKey = process.env.VITE_SUPABASE_API_KEY;

export const supabase = createClient(supabaseURL as string, supabaseAnonKey as string);

