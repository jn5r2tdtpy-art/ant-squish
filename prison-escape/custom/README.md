# Custom face and sounds

The easiest way is in the game: tap **Customize: face & sounds** on the title screen. There you can take a selfie or pick a photo, and record your own voice or pick an audio file for each sound. Those settings are saved on that device only.

To build them into the game for everyone, put files in this folder with these exact names:

| File | Used for |
|---|---|
| `face.png` or `face.jpg` | The runner's face (a square photo of a face works best) |
| `alert.mp3` | A guard spots you |
| `caught.mp3` | You get busted |
| `key.mp3` | You pick up a keycard |
| `door.mp3` | You unlock a door |
| `stash.mp3` | You grab a contraband coin |
| `alarm.mp3` | A camera sounds the alarm |
| `hide.mp3` | You jump into a laundry bin |
| `win.mp3` | You reach the exit |

Right now the game ships with two voice clips: `right-on-buddy.mp3` plays when you escape, and `i-appreciate-you.mp3` plays for keycard, door unlock, contraband and hide. Which file goes with which sound is set in `BUILT_IN_SOUNDS` near the top of the game code in `prison-escape/index.html`; a sound not listed there uses the file name from the table above.

Keep sounds short (under 4 seconds; longer ones get cut off). Any sound without a file uses the built-in beep. Anything a player sets in the Customize screen replaces these files on their device.
