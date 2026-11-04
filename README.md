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

**Big Top Mikey** (`carnival/mikey/`): the ringmaster at the top of the Midway menu. His poster is `poster.webp`; tap “Hear Mikey” to hear his welcome lines (in `lines.js`) one by one. The first line is Mikey’s own recorded voice (`voice/real.mp3`, “Mom, Aunt Julie, Aunt Shannon, enjoy the games, have fun, laugh your asses off!”); the rest have recordings numbered in the same order as the list (1.mp3 is the second line), so if you change or add a line it needs a new recording.

**Midway coins** (`carnival/coins.js`): one coin purse shared by every game on the device, made generous so there are always coins for Sonny. The games are free to play. Winning a round (or a race) in Down the Clown, Gabby Abby, Blow Up Sonny’s Big Head or Duck Duck Splash pays 3 coins, then 4 from round 4, 5 from round 7, and so on. A gold clown, a gold tooth or a bullseye pays 1 more coin on the spot, and every game over pays 1 coin just for playing. Sonny the Sorta Psychic costs 1 coin per fortune, and the Sonny & Eddie Show costs 1 coin for 5 questions or skits. Everyone starts with 50 free coins, and the Midway menu shows how many you have. Coins are saved on the phone, so each phone has its own coins. Amounts are set at the top of `coins.js`. Every game costs 1 coin to play, and pays coins only for its special hit: +1 for each gold clown (Down the Clown) or bullseye (Duck Duck Splash), +1 for winning the Chattering Teeth bonus round every 10 rounds (Gabby Abby), +1 for each race won (Blow Up Sonny’s Big Head) and +1 for a first-ball dunk (Dunk Tank) +1 for the gold can (Knock Over the Cans) +1 for the diamond peg (Eddie’s Wedding Ring Toss) +1 for the gold balloon (Balloon Pop) and +1 for each race you win (Sonny’s Harley Derby). Clearing rounds and game over pay nothing.

**Down the Clown** (`carnival/down-the-clown/`): fire an air cannon to knock the clowns off the shelves before the clock runs out.

- **Points:** glasses clown 10, top-hat clown 20, bald clown 30. The Red Head is −10 and pops back up. A clown glowing gold is worth double.
- **Rounds:** each round adds one more Red Head. When half the clowns are Red Heads, a new row is added and it starts again with one Red Head (4 clowns a row, up to 4 rows; after that the clock gets shorter each round). From round 40 a fifth row joins (Red Heads start over at 1, up to 10), and every round from 40 on gets 5 extra seconds, except rounds 40–49, which are 15 seconds shorter than that.
- **Sideways:** turned sideways, the score sits on the left, the cannon on the right, and the booth uses the full height.
- **Aim:** touch a clown to aim (slide to adjust), lift to fire (mouse: aim and click; keyboard: arrows and Space). The sights sway a little more each round.
- **Clock:** rounds 1–6 are 5 seconds shorter than the base clock, rounds 7–12 are 10 seconds shorter, rounds 13–20 are 15 seconds shorter, and round 21 on use the base clock (`timeCut` near the top of the game code).
- Clear a round to get 5 points for every second left. Run out of time and you lose one of 3 cannon balls and replay the round.
- The clown pictures are in `carnival/down-the-clown/img/`. To change who is on the shelf, replace those files (transparent background, about 260 px wide) and their point values in `TYPES` near the top of the game code.

**Gabby Abby** (`carnival/gabby-abby/`): fire the air cannon into Abby’s mouth and knock out all 6 teeth before the clock runs out.

- **Points:** a tooth is 10. A gold tooth (the light on top flashes) is double. A tooth with braces takes two hits: 5 for knocking the braces off, 20 for the tooth.
- **Rounds:** from round 2, knocked-out teeth grow back (after 9 seconds, then faster each round, down to 2.5). From round 3, 1 tooth has braces, then 2 from round 5 and 3 from round 7. The clock starts at 13 seconds and loses half a second each round (never under 7), plus 1½ seconds per braces tooth. These are `roundTime`, `regrowTime` and `bracesCount` near the top of the game code.
- **Closing mouth:** her lips close in from top and bottom as the clock runs down (70% shut at zero, `MAX_CLOSE`), and shots that hit the lips bounce off. She shuts on time up and opens wide each new round.
- **Chattering Teeth bonus round:** after rounds 10, 20, 30 and so on, wind-up chattering teeth (`img/chatter.webp`) walk back and forth on three shelves. Shoot enough of them in 15 seconds (5 after round 10, one more every 10 rounds, up to 8) to win 1 coin. Losing it costs nothing. The gold tooth is worth double points but no longer pays a coin.
- Abby talks back: hit her nose for a honk, her glasses, or a gap in her teeth (she swallows the ball).
- Same aiming, 3 cannon balls, time bonus and pause as Down the Clown. The art is cut from the cabinet picture: `img/face.webp` has a see-through mouth and the teeth (`img/tooth0–5.webp`) sit behind it.

**Blow Up Sonny’s Big Head** (`carnival/sonnys-big-head/`): a water-gun race. Hold your finger on your target to squirt it; every squirt that is on target blows Sonny’s head up a bit more, and the first head to pop wins.

- You are the middle lane, racing two computer players: Lefty Lou (left) and Rapid Rita (right). They aim better each race.
- From race 2 the targets slide side to side, faster and further each race, and every target gets a little smaller. After race 5 they speed up a lot more each race.
- About 6 seconds of steady aim pops a head (`FILL_TIME`). The computer players take about 10 seconds in race 1, down to about 7½ by race 8.
- Win a race for 100 × the race number. Lose a race and you lose one of 3 water drops (lives) and run that race again.
- On a touch screen, a magnifier bubble floats above your finger while you squirt, showing where your water is going (green edge = on target).
- Sonny brags as his head grows. The head picture is `img/sonny.webp`. Race settings (`targetSize`, `targetSwing`, `targetSpeed`, `cpuWobble`, `yourWobble`) are near the top of the game code.

**Duck Duck Splash** (`carnival/duck-duck-splash/`): a water-gun shooting gallery. The three heads (glasses 10, top hat 20, bald 30) float back and forth on the waves in rows that go opposite ways; squirt them to knock them over. Swinging bullseyes at the top are 50.

- Touch to aim and lift to squirt; a bubble above your finger shows what you’re aiming at (green edge = in your sights). Mouse: aim and click.
- Rounds are 30 seconds. Reach the goal (200 points in round 1, 50 more each round) to move on. Rows get 12% faster each round and a third row joins in round 3.
- Miss a goal and you lose one of 3 water drops and replay the round. Settings (`goalFor`, `rowsFor`, `speedFor`, `ROUND_TIME`) are near the top of the game code; the heads are in `img/`.

**Dunk Tank** (`carnival/dunk-tank/`): hit the bullseye to drop someone in the water. Before the game, pick who to dunk: Eddie, Abby, Sonny or Top Hat Sonny. Each has a few taunts of their own (in `TAUNTS`); Eddie is sneaky and fibs about everything, even after he’s dunked, and complains about his big brother Sonny. Their heads are in `img/` sit on a drawn body in a t-shirt and shorts. There is no fence, so you can see them.

- No tapping on the target: tap once to lock your aim as a marker sweeps across the board, then tap again to lock your power. The power meter has a green zone; too little power and the ball goes low, too much and it goes high.
- 3 balls a round. Each round the aim marker and power meter move faster, and the bullseye gets smaller. From round 4 a wind flag shows the ball getting pushed left or right, so you have to aim off the bullseye.
- Dunk on the first ball for 300 × the round, second 200 ×, third 100 ×. Dunks earn coins (and a bonus coin on the first ball). Miss all 3 and you lose one of 3 tries.
- Settings (`aimSpeed`, `powerSpeed`, `bullseye`, `windFor`) and the taunts are near the top of the game code.

**Knock Over the Cans** (`carnival/knock-cans/`): a pyramid of 10 cans (4-3-2-1) with Abby, Eddie and Sonny’s faces on them (`img/`), and 2 balls a round. No crosshairs: tap once to lock the aim as a marker slides across the table, then tap again to lock how high you throw as a marker slides up and down beside the cans. Hitting the bottom row brings the cans above it down, and falling cans can knock others over. Knock them all off to clear the round; otherwise you lose one of 3 tries. Each round the markers get faster and the cans move farther back (smaller). Every 10 rounds the pyramid grows by a row (one more can on the bottom and on every row above: 10, 15, 21, 28 cans…) and you get one more ball; the marker speed eases back a little when it grows (`rowsFor`, `ballsFor`). A game costs 1 coin; the gold can pays +1. Settings (`aimSpeed`, `heightSpeed`, `canScale`, `KNOCK_ON`) are near the top of the game code.

**Eddie’s Wedding Ring Toss** (`carnival/ring-toss/`): a stepped red-and-white peg board (6 rows of 7 pegs) like a real ring toss, with Eddie on the sign. He’s been married four times, so he has plenty of wedding rings to toss, and he jokes about each one. Toss gold wedding rings: tap to lock the aim across the board, then tap to lock how far you throw. Land a ring over a peg for a RINGER (back rows are worth more). 5 rings a round; get enough ringers to beat the round (1 at first, up to 3) or lose one of 3 tries. Each round the markers get faster and the pegs get pickier. A game costs 1 coin; the 💎 diamond peg pays +1. Settings (`goalFor`, `aimSpeed`, `distSpeed`, `tolFor`) are near the top of the game code.

**Balloon Pop** (`carnival/balloon-pop/`): a red dart board with white rails and 7 rows of colorful balloons under a mosaic BALLOON POP sign. No crosshairs: tap once to lock where across the board as a marker slides side to side, then tap again to lock how high you throw on a power meter beside the board, like Knock Over the Cans. Balloons pop with a bang; missed darts stick in the board. 5 darts a round; pop enough to beat the round (2 at first, 3 from round 9, 4 from round 18) or lose one of 3 tries. Each round the markers get faster and the balloons get smaller, and from round 3 some balloons are missing. A game costs 1 coin; the gold balloon pays +1. Settings (`goalFor`, `aimSpeed`, `heightSpeed`, `sizeFor`, `missingFor`) are near the top of the game code.

**Sonny’s Harley Derby** (`carnival/harley-derby/`): a roll-the-ball derby race like the carnival horse race, but on Harleys. You race 3 Sonnys (all with Sonny’s head, `img/sonny.webp`) across green wavy lanes outlined in green, blue, red and yellow. Your rider wears a helmet until you tap **Add your head** on the title screen: pick or take a photo, drag and zoom it into the oval, and it rides on your bike (saved on the phone; Remove takes it off). Roll the ball up a glowing lane (like the real derby roll, with a “Player 1” sign) into the triangle of 10 holes at the far end to move ahead: front 3 holes 1, middle row 2, back row 3; a miss goes nowhere. Same two taps as Knock Over the Cans: lock where across, then lock how hard on the power meter beside the ramp. You need 10 to reach the checkered flag. The Sonnys talk trash the whole way. Beat them to win the race; each race they ride faster; lose a race and you lose one of 3 tries. A game costs 1 coin; each race won pays +1. Settings (`STEPS`, `raceTime`, `aimSpeed`, `powerSpeed`, `HOLES`) are near the top of the game code.

**Sonny the Sorta Psychic** (`carnival/fortune-sonny/`): a fortune-teller machine. The machine picture is `img/machine.webp`; the bulbs twinkle, the lamps flicker and the crystal ball swirls on top of it. Pick a topic (Love, Money, Family, Work, Friends, Future), or tap INSERT COIN or the crystal ball for a surprise. Sonny's words show on the purple sign (and says them out loud in a recorded man’s voice, the same on every phone; there is an on/off switch), then a fortune card comes out of the card slot.

- 1,250 fortunes (200 per topic, 250 in Family) of cocky, selfish, thinks-he's-hilarious advice, always about him: the self-pitying black sheep who got a raw deal, works harder than everybody (ask him), rides a Harley, and treats his exes and family badly. The Family fortunes are all the opposite of good family advice: he is divorced, and his daughters and sisters don’t like him, and he still thinks he’s right. Fifty of the Family fortunes are about his younger brother Eddie, who Sonny takes advantage of and is sure he’s smarter and better than. They are in `fortunes.js`, along with his opening lines (`OPENERS`), lucky numbers (`LUCKY`) and fine print (`FINE`). To add one, copy a line in the right list and change the words.
- **Voice:** every fortune and opening line is recorded ahead of time in `voice/`, one mp3 per line, named from the words of the line (a short code of the text). The voice is "Joe" from the free Piper text-to-speech voices. If you add or change a line, it has no recording yet, so the game says it with the phone’s own voice until the recordings are made again.
- The game counts how many you have collected and does not repeat one in a topic until you have seen them all.
- `img/sonny.webp` (his head cut out of his photo) is used for the Midway menu card.

**The Sonny & Eddie Show** (`carnival/ventriloquist/`): a ventriloquist act on a curtained stage, built on the photo of Sonny (the ventriloquist) with his little brother Eddie as the dummy (`img/photo.webp`). Tap for the next joke and the brothers roast each other.

- Two ways to watch, picked before the show starts: **Watch the Show** (the act) and **Ask Sonny & Eddie** (you get two funny questions, tap one, and both brothers answer; 503 questions in `questions.js`). 1 Midway coin buys 5 turns, where a turn is one skit or one question (shared between the two shows); after 5 the next turn costs another coin.. When Sonny talks, his lower lip and beard move a little like normal talking; when Eddie talks, his dummy jaw drops.
- 40 bits in `bits.js`, each a list of lines marked `"S"` (Sonny) or `"E"` (Eddie). Copy one to add more.
- Every line is pre-recorded in `voice/`: Sonny in the Joe voice, Eddie in the Ryan voice. When Eddie talks, the part of his chin between his painted dummy lines drops in time with his voice (the outline is `JAW` near the top of the game code). New lines without a recording use the phone’s voice.
