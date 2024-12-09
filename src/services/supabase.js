import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://tsscimyradylpucpozgf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRzc2NpbXlyYWR5bHB1Y3BvemdmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjUzNzY1MzcsImV4cCI6MjA0MDk1MjUzN30.HJ2xLV3ZZ12stolIFqs_y9tRQW8LYIxBjYJ1WPxid0s";
const supabase = createClient(supabaseUrl, supabaseKey);

// import { createClient } from "@supabase/supabase-js";
// export const supabaseUrl = "http://localhost:8000";
// const supabaseKey =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyAgCiAgICAicm9sZSI6ICJhbm9uIiwKICAgICJpc3MiOiAic3VwYWJhc2UtZGVtbyIsCiAgICAiaWF0IjogMTY0MTc2OTIwMCwKICAgICJleHAiOiAxNzk5NTM1NjAwCn0.dc_X5iR_VP_qT0zsiyj_I_OZ2T9FtRU2BBNWN8Bu4GE";
// const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
