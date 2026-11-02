# Aunty Ant Squish

Squish the ants before they eat Grandma's fruit salad. Tap ants to squish them, chain squishes for a combo, and squish thieves to win their bite back.

This is an installable web app: open it in a phone browser, then

- **iPhone (Safari):** tap Share, then **Add to Home Screen**
- **Android (Chrome):** tap **Install app** in the game, or the ⋮ menu, then **Add to Home screen**

It works offline once it has been opened. High scores are saved on each device.

## Files

- `index.html`: the whole game
- `manifest.webmanifest`, `icon-*.png`, `apple-touch-icon.png`: app name and icons
- `sw.js`: offline support (change `VERSION` in it whenever you update the game)

## Jailbreak Dash (prison escape game)

`prison-escape/index.html` is a separate top-down stealth game: sneak and sprint through five sections of a prison (Cell Block A, Laundry Room, Cafeteria, Security Wing, The Yard), pick up keycards to open locked doors, stay out of guard flashlights and camera views, hide in laundry bins, and reach the exit.

- **Move:** WASD / arrow keys, or drag anywhere on a touch screen
- **Run:** Shift, or hold the RUN button (fast, but noisy and tiring)
- Each level gives up to 3 stars: escape, never get spotted, collect all contraband
- **Customize:** put your own face on the runner and record your own sound effects from the title screen. To build a face or sounds into the game for everyone, see `prison-escape/custom/README.md`.
