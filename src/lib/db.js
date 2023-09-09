import { createClient } from "@supabase/supabase-js";

const db = createClient(
  import.meta.env.VITE_PROJECT_URL,
  import.meta.env.VITE_API_KEY
);

export default db;