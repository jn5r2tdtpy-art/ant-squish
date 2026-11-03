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

## Flips (drum games)

`flips/index.html` is a set of drum games (with its own home-screen icon and `manifest.webmanifest`, so it can be added to a phone's home screen as "Flips") for a drummer named Flips. Everything, including the drum sounds and backing band, is synthesized in the browser, so it is one file with no assets. The menu lists:

**Quick games**

- **Flip Flip’s Sticks:** hold to wind up, release to toss a drumstick, tap to catch it tip up. More spins score more; 3 sticks per run. A new level every 3 catches, and at level 5 a second hand joins in (left half of the screen = left hand, right half = right hand; F/J on a keyboard).
- **Whack Flip’s kit:** bop the moles (and golden sticks) that pop out of a drum kit; don't hit my drink. 45 seconds.
- **Flip’s kick drum:** tap the bass drum (every hit is a kick) as rings close in. Played in rounds: round 1 is practice at 70 BPM, then each round is 6 BPM faster with busier patterns and a tighter timing window. 5 misses per round in rounds 2–3, then 3.

- **Flip’s kit memory:** opens with a zoom into the front of Flip’s kit and a spin round to the drummer’s seat (first time only). Then the six drum heads light up in a pattern that grows by one each round; tap them back in order. One wrong drum ends it. On an upright phone the game is drawn sideways, so turn the phone to play.

**For a real workout**

- **Play the set:** nine grooves (rock, disco, 16th funk with ghost notes, half-time shuffle, bossa, linear funk, drum and bass, 6/8 bell pattern, double-kick metal). Notes fall down five lanes; hit the pads as they cross the line. Fills on every fourth bar, crash on the one, and the bass follows the kick pattern. Adjustable tempo and four levels: Easy (one note at a time, only on the beat, no fills), Casual, Session and Pro (±22 ms for a Perfect). Notes fall at the same speed whichever way the phone is held.
- **Follow Flip:** Flip plays a bar, then waits for you to play it back (your first hit starts your turn, and it waits until you have played every hit). Passing is about the right pads in the right order; an even rhythm earns bonus points. Flip's hits are shown on screen as he plays them (except on Pro). Bars get harder every three passes and 3 BPM faster every six; starts at 70 BPM; a miss replays the same bar; three misses ends it.
- **Flip’s click:** the click drops out for 1, 2 or 4 bars. Keep time and the game reports your offset and tempo drift in BPM.
- Every hit shows how many ms early or late it was, and each result screen shows your average offset (rushing or laying back) and spread.
- **Controls:** tap the pads, or keys D (hi-hat), F (snare), Space (kick), J (tom), K (cymbal). Settings has a latency calibration for Bluetooth speakers and slow screens.

## Carnival Midway (carnival games)

`carnival/index.html` is the Midway menu, a separate installable app ("Midway" on the home screen, with its own `manifest.webmanifest`, icons and offline `sw.js`; bump `VERSION` in `carnival/sw.js` when you change any of its files). Each game lives in its own folder under `carnival/`.

**Down the Clown** (`carnival/down-the-clown/`): fire an air cannon to knock the clowns off the shelves before the clock runs out.

- **Points:** glasses clown 10, top-hat clown 20, bald clown 30. The Red Head is −10 and pops back up. A clown glowing gold is worth double.
- **Rounds:** each round adds one more Red Head. When half the clowns are Red Heads, a new row is added and it starts again with one Red Head (4 clowns a row, up to 4 rows; after that the clock gets shorter each round).
- **Best sideways:** the directions tell phone players to turn the phone sideways. Sideways, the score sits on the left, the cannon on the right, and the booth uses the full height.
- **Aim:** touch a clown to aim (slide to adjust), lift to fire (mouse: aim and click; keyboard: arrows and Space). The sights sway a little more each round.
- Clear a round to get 5 points for every second left. Run out of time and you lose one of 3 cannon balls and replay the round.
- The clown pictures are in `carnival/down-the-clown/img/`. To change who is on the shelf, replace those files (transparent background, about 260 px wide) and their point values in `TYPES` near the top of the game code.
