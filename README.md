# Sparkies ⚡

A simple, phone-sized to-do card app inspired by Analog paper cards.

**Open it:** https://josiahdowdy.github.io/Sparkies/

## The three sheets

| Default name | Like Analog's | Paper |
|---|---|---|
| Today | Today | Lightest |
| Week | Next | A step darker |
| Life | Someday | Kraft brown |

Long-press a sheet's title to rename it — your name is saved and used everywhere that sheet is referenced.

## How it works

- Each sheet holds exactly 10 tasks — the card never grows past your phone screen.
- Tap the circle next to a task and a lightning bolt zips across it to strike it through; the circle spins a quarter turn before it fills in.
- Swipe sideways to page between sheets; swipe up or down to flip the card over to its back.
- Hold a task to pick it up, then drag it: up/down to reorder the list, or sideways to send it to another sheet (right moves it up — Life → Week → Today; left moves it back down). It turns gold once you've dragged far enough for it to move.
- Tap a sheet's title to clear its completed tasks; tap the date box to clear the whole sheet (or hold the date box to wipe it fully blank). Both show an "Undo" toast for a few seconds.
- Three stars sit under the date: flip the card to write a daily template, get a random verse or quote, or toggle dark mode.
- Everything saves automatically in your browser (localStorage), so your tasks are still there when you come back.

## Syncing across devices

Off by default — the app is local-only until you turn it on. To have the same lists on your phone and computer, follow [SYNC-SETUP.md](SYNC-SETUP.md) (about 10 minutes, free). Once it's set up, a **Sync** chip appears in the bottom left: sign in with an emailed link on each device and they stay in step. Your tasks, templates, Treasures, and renamed sheets sync; which sheet you're on and dark mode stay per-device.

## Hosting

Deployed to GitHub Pages automatically by `.github/workflows/pages.yml` on every push to `main`.
