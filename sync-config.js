// Sync setup — see SYNC-SETUP.md for the 10-minute walkthrough.
//
// Paste your Supabase project's URL and "publishable" key (starts with
// sb_publishable_...; older projects call it the "anon" public key and
// it starts with eyJ...) between the quotes below, then commit. Leaving
// them empty is completely fine: the app just runs offline-only on this
// device, exactly as before.
//
// The publishable/anon key is MEANT to be public — it grants no access
// on its own. Access is controlled by the row-level security policy in
// the setup guide, which only ever lets a signed-in person read/write
// their own row. Never paste the "secret" key (sb_secret_...) or the
// older "service_role" key here; those are real secrets and would give
// anyone full access to your database.
window.SPARKIES_SYNC = {
  url: "",
  anonKey: "",
};
