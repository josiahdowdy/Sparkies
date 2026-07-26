# Turning on sync

About 10 minutes, once. Until you do this, Sparkies works exactly as it
does now — everything saved on the device you're using, nothing shared.

## 1. Make a Supabase project

1. Go to [supabase.com](https://supabase.com) and sign up (free).
2. **New project.** Any name works. Pick a region near you and save the
   database password somewhere — you won't need it for this, but Supabase
   will ask you to set one.
3. Wait a minute or two for it to finish setting up.

## 2. Create the table

In your project, open **SQL Editor** in the left sidebar, paste this in,
and hit **Run**:

```sql
create table sparkies_state (
  user_id uuid primary key references auth.users(id) on delete cascade,
  data jsonb not null,
  updated_at timestamptz not null default now()
);

alter table sparkies_state enable row level security;

create policy "own row only" on sparkies_state
  for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

alter publication supabase_realtime add table sparkies_state;
```

That last line is what makes edits show up on your other device within a
second instead of on next open.

**What the policy does:** it's the reason the key in step 3 is safe to
publish. Every read and write is checked against the signed-in person's
ID, so even though anyone can see your key, it only ever gets them to
their own empty row — never yours.

## 3. Paste your two values in

In Supabase go to **Project Settings → API**. You need:

- **Project URL** — looks like `https://abcdefgh.supabase.co`
- **Publishable** key — a string starting with `sb_publishable_...`
  (older projects instead show a **legacy anon public** key, a long
  string starting with `eyJ...` — that still works the same way here)

Put them in `sync-config.js` in this repo:

```js
window.SPARKIES_SYNC = {
  url: "https://abcdefgh.supabase.co",
  anonKey: "sb_publishable_...",
};
```

Commit and push. Once it deploys, a **Sync** chip appears in the bottom
left of the app.

> ⚠️ Use the **Publishable** (or legacy **anon public**) key, never the
> **Secret** key (`sb_secret_...`, or legacy `service_role`). The
> publishable/anon key is meant to be public and is useless without
> signing in. The secret/service_role key bypasses all the security
> rules — never put that one in this file or anywhere in this repo.

## 4. Sign in on each device

Tap **Sync** → type your email → **Send link**. Open the emailed link on
that device. Repeat on your phone, laptop, wherever. Same email = same
lists.

Anything you'd already typed on a device before signing in gets pushed up
rather than thrown away.

## How it behaves

- **What syncs:** your tasks, templates, Treasures, and any sheets you've
  renamed.
- **What stays per-device:** which sheet you're looking at, and dark
  mode — so your phone doesn't jump around because of your laptop.
- **Offline:** everything keeps working, saved locally. The chip reads
  *Offline*, and your changes go up next time you're connected.
- **Two devices at once:** whichever change was made most recently wins
  for the whole card. If you're typing when an update arrives from your
  other device, the line you're in the middle of is left alone.

## Turning it off

Tap **Sync → Sign out** on a device to stop syncing it. To switch it off
everywhere, blank out the two values in `sync-config.js`; the app falls
back to local-only and the chip disappears. Your data stays on each
device either way. Deleting the Supabase project removes the copy on the
server.
