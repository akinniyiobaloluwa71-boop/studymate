// The publishable key is safe in browser code because Row Level Security protects the data.
// Never put the secret key (sb_secret_) here.
const SUPABASE_URL = "https://utxkwrmpauspsfupjngz.supabase.co";
const SUPABASE_PUBLISHABLE_KEY =
  "sb_publishable_OhWWiGxzb3FMgJ-NlgqePA_dm-fYh-e";

window.STUDYMATE_SUPABASE = {
  url: SUPABASE_URL,
  publishableKey: SUPABASE_PUBLISHABLE_KEY,
};
