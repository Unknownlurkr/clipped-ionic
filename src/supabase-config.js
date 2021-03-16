import { createClient } from '@supabase/supabase-js';
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic2VydmljZV9yb2xlIiwiaWF0IjoxNjE1ODk1MjU5LCJleHAiOjE5MzE0NzEyNTl9.HYsQ2yMxwrIYKzQAAsNlmxxAjeAJr1kSUQK40vRW6MQ";
const SUPABASE_URL = "https://ssggftqivpapiiblyect.supabase.co";

export const SUPABASE_CLIENT = createClient(SUPABASE_URL, SUPABASE_KEY);