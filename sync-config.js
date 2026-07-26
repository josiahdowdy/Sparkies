// Sync setup — see SYNC-SETUP.md for the 10-minute walkthrough.
//
// Paste your Supabase project's URL and "anon" public key between the
// quotes below, then commit. Leaving them empty is completely fine:
// the app just runs offline-only on this device, exactly as before.
//
// The anon key is MEANT to be public — it grants no access on its own.
// Access is controlled by the row-level security policy in the setup
// guide, which only ever lets a signed-in person read/write their own
// row. Never paste the "service_role" key here; that one is a real
// secret and would give anyone full access to your database.
window.SPARKIES_SYNC = {
  url: "",
  anonKey: "",
};
