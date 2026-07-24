# Sparkies ⚡

A simple, phone-sized to-do card app inspired by Analog paper cards.

**Open it:** https://josiahdowdy.github.io/sparkies/

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
- Swipe a task right to promote it up a sheet (Life → Week → Today), or left to demote it back down. Swiping empty space pages between sheets.
- Hold a task and drag it up or down to reorder the list.
- Tap a sheet's title to clear its completed tasks; tap the date box to clear the whole sheet. Both show an "Undo" toast for a few seconds.
- The date sits top right, next to three circles for morning, afternoon, and evening.
- Everything saves automatically in your browser (localStorage), so your tasks are still there when you come back.

## Hosting

Deployed to GitHub Pages automatically by `.github/workflows/pages.yml` on every push to `main`.
