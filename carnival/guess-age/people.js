// Sonny & Eddie's Guess Your Age booth. Each person has a birth year and a couple of scripts.
// A script: intro lines, then 3 guesses ([age, lines]) and what they say if the booth wins (got within 2 years) or loses (you stumped them).
// The guesses follow the real age, so "Older"/"Younger" answers always match. "S" = Sonny, "E" = Eddie.
window.PEOPLE = [
  { id: "marnie", name: "Marni", year: 1958, img: "img/marni.webp", note: "The oldest. The boss.", scripts: [
    { intro: [["S", "Marni! The big sister. The boss of all of us."], ["E", "Be nice, Sonny. She's the one who decides if we get Thanksgiving."]],
      guesses: [[39, [["S", "I'd say… thirty-nine."]]], [45, [["E", "Thirty-nine? She's older than both of us, Sonny."], ["S", "Fine. Forty-five."]]], [52, [["E", "Fifty-two. And not a day over. Please let us back in for Thanksgiving."]]]],
      win: [["S", "Got her! Within two years!"]],
      lose: [["S", "We give up. You win, Marni."], ["E", "Just like always. Here are your coins. Don't tell anyone we paid for something."]] },
    { intro: [["E", "Marni, I'll guess your age for a dollar."], ["S", "Eddie, it's your sister. Do it for free."], ["E", "Fine. Family discount."]],
      guesses: [[41, [["E", "Forty-one."]]], [47, [["S", "Eddie, she's the oldest!"], ["E", "Oldest and wisest! Forty-seven."]]], [55, [["S", "My final guess: fifty-five. Because I would like to live."]]]],
      win: [["E", "Got her!"]],
      lose: [["E", "We missed on purpose. That's called strategy."], ["S", "You win, Marni. Big sisters always win."]] },
  ] },
  { id: "sonny", name: "Sonny", year: 1960, img: "img/sonny.webp", note: "The big brother. Ask him.", scripts: [
    { intro: [["E", "Sonny! Step right up. This one's easy."], ["S", "I'm a youthful man in his prime."]],
      guesses: [[91, [["E", "Ninety-one."]]], [80, [["S", "Ninety-one?!"], ["E", "Fine. Eighty. Those Harley years count double."]]], [67, [["S", "I'm a young fifty!"], ["E", "Sixty-seven."]]]],
      win: [["E", "Got him! Sonny's older than his jokes."], ["S", "Nobody tell my daughters."]],
      lose: [["E", "Missed him! He's had work done."], ["S", "It's called good genes, Eddie. And a bandana."]] },
    { intro: [["S", "Me? I'll guess my own age. Forty-five."], ["E", "Sonny, that's the age of your bandana. It's my turn."]],
      guesses: [[85, [["E", "Eighty-five."]]], [72, [["S", "Eighty-five?! Look at this skin!"], ["E", "I'm looking. Seventy-two."]]], [64, [["E", "Okay. Sixty-four. And I'm only guessing low because you're holding my arm."]]]],
      win: [["S", "Close enough. You got me."], ["E", "Pay up, buddy. Oh wait, you never pay."]],
      lose: [["S", "Ha! Nobody can guess this face."], ["E", "Nobody wants to look at it that long."]] },
  ] },
  { id: "eddie", name: "Eddie", year: 1961, img: "img/eddie.webp", note: "The little brother. Cheap.", scripts: [
    { intro: [["S", "Eddie! My little brother. Let me look at you."], ["E", "Make it quick. Looking costs extra."]],
      guesses: [[88, [["S", "Eighty-eight."]]], [75, [["E", "Eighty-eight?!"], ["S", "You look it. All that gambling stress. Fine, seventy-five."]]], [64, [["S", "Sixty-four. Final answer."]]]],
      win: [["S", "Got you! And you owe me the coins."], ["E", "Double or nothing?"]],
      lose: [["E", "Missed! I look young because I never spend energy. Or money."], ["S", "That's the most Eddie thing I've ever heard."]] },
    { intro: [["S", "Eddie, step up. I've been waiting years to do this."], ["E", "Be gentle. I've been married four times."]],
      guesses: [[102, [["S", "One hundred and two."]]], [93, [["E", "Lower!"], ["S", "Ninety-three? Four marriages ages a man."]]], [66, [["S", "Fine. Sixty-six. Final answer."]]]],
      win: [["E", "You got me. I'm not paying. I'm cheap AND accurate."], ["S", "Mostly cheap."]],
      lose: [["E", "Ha! Wrong!"], ["S", "Somebody check his license. He probably charged the DMV."]] },
  ] },
  { id: "shannon", name: "Shannon", year: 1967, img: "img/shannon.webp", note: "Aunt Shannon. Always right.", scripts: [
    { intro: [["S", "Aunt Shannon! Wow. Look at that red hair."], ["E", "Careful, Sonny. Compliments only. We're trying to get back in."]],
      guesses: [[30, [["S", "You can't be a day over thirty."]]], [35, [["E", "Sonny, she's younger than us, but not THAT young."], ["S", "Fine. Thirty-five."]]], [42, [["E", "Forty-two. And you look amazing. Please forward that to the group chat."]]]],
      win: [["S", "Got it!"]],
      lose: [["S", "We missed. You win, Shannon."], ["E", "Here are your coins. It's the first thing I've given away in years."]] },
    { intro: [["E", "Shannon! Step right up. Flattery is free, and I love free."], ["S", "Same, Eddie. Same."]],
      guesses: [[33, [["E", "Thirty-three."]]], [38, [["S", "Thirty-eight!"]]], [44, [["E", "Forty-four. And that's me being honest, which costs me extra."]]]],
      win: [["E", "Got it!"]],
      lose: [["S", "You stumped us, Shannon."], ["E", "Tell the other sisters we were nice. They won't believe you."]] },
  ] },
  { id: "julie", name: "Julie", year: 1969, img: "img/julie.webp", note: "Aunt Julie. The baby sister.", scripts: [
    { intro: [["S", "Julie! The baby sister!"], ["E", "She's not a baby, Sonny. She's the youngest. There's a difference."]],
      guesses: [[28, [["S", "Twenty-eight!"]]], [31, [["E", "Thirty-one."]]], [39, [["S", "Fine. Thirty-nine. Final answer. She'll always be the baby."]]]],
      win: [["S", "Got her!"]],
      lose: [["E", "You win, Julie."], ["S", "Don't tell your sisters we were nice. They'll think we want something."], ["E", "We do want something. Thanksgiving."]] },
    { intro: [["E", "Julie, I'll do yours. Are you still in college?"], ["S", "Eddie, she taught us half the stuff we know."], ["E", "Then she's a professor. A young one."]],
      guesses: [[25, [["E", "Twenty-five."]]], [34, [["S", "Thirty-four."]]], [41, [["E", "Forty-one. And we're sticking with it, because the sisters are watching."]]]],
      win: [["E", "Got her!"]],
      lose: [["S", "Stumped us! Julie wins."], ["E", "The baby sister wins again. It's like a family tradition."]] },
  ] },
  { id: "mikey", name: "Mikey", year: 1977, img: "img/mikey.webp", note: "The first grandson. The ringmaster.", scripts: [
    { intro: [["S", "Mikey! The first grandson!"], ["E", "The ringmaster himself. He built this whole Midway."]],
      guesses: [[12, [["S", "He's still the baby to me. Twelve."]]], [25, [["E", "He's running the whole carnival, Sonny. Twenty-five."]]], [50, [["S", "Fifty."]]]],
      win: [["S", "Got the ringmaster! The first grandson is getting up there."], ["E", "That means WE'RE old, Sonny."], ["S", "Don't say that out loud."]],
      lose: [["S", "Missed!"], ["E", "He's the ringmaster. He probably rigged the booth."]] },
    { intro: [["E", "Mikey, I'll guess for a dollar."], ["S", "Eddie, he made this game. He's not paying."]],
      guesses: [[35, [["E", "Thirty-five."]]], [60, [["S", "Sixty! Running a carnival ages a man."]]], [48, [["E", "Forty-eight."]]]],
      win: [["E", "Nailed it. The ringmaster owes us."], ["S", "He'll just make another game where he gets it back."]],
      lose: [["S", "Missed! He wins."], ["E", "Of course. He wrote the game."]] },
  ] },
  { id: "scarlett", name: "Scarlett", year: 1983, img: "img/scarlett.webp", note: "Mikey's little sister.", scripts: [
    { intro: [["S", "Scarlett! Mikey's little sister!"], ["E", "Same age as Abby, Sonny. Remember that."]],
      guesses: [[29, [["S", "Twenty-nine."]]], [35, [["E", "She's the same age as Abby, Sonny."], ["S", "Abby is made of wood. Wood doesn't count. Thirty-five."]]], [44, [["E", "Forty-four."]]]],
      win: [["S", "Got you! Same year as Abby. That's the cousin special."], ["E", "Tell your aunts we were polite."]],
      lose: [["S", "Missed! You win."], ["E", "Here are your coins. I'll be crying in the car."]] },
    { intro: [["E", "Scarlett, step right up. You look great."], ["S", "Is that a compliment, Eddie?"], ["E", "It's free, so yes."]],
      guesses: [[27, [["E", "Twenty-seven."]]], [33, [["S", "Thirty-three."]]], [39, [["E", "Thirty-nine. Final answer."]]]],
      win: [["E", "Got it!"]],
      lose: [["S", "Stumped us! Scarlett wins."], ["E", "Mikey's family always wins. It's very annoying."]] },
  ] },
  { id: "abby", name: "Abby", year: 1983, img: "img/abby.webp", note: "Eddie's daughter.", scripts: [
    { intro: [["E", "My daughter! I know this one."], ["S", "Do you, Eddie?"]],
      guesses: [[12, [["E", "Twelve."]]], [30, [["S", "Eddie, that's how old she was when she moved in with you."], ["E", "Right. Thirty."]]], [43, [["S", "Forty-three. Same year as Scarlett."]]]],
      win: [["E", "Got her! I'd know my own daughter's age anywhere."], ["S", "You looked it up."], ["E", "I charged myself to look it up."]],
      lose: [["E", "Missed! She's aging backwards. Must be living with me."]] },
    { intro: [["S", "Abby! I'll take this one."], ["E", "Be nice, Sonny. She stuck up for me once."]],
      guesses: [[55, [["S", "Fifty-five. You've been through a lot, living with your dad."]]], [47, [["E", "Hey! Lower!"], ["S", "Fine. Forty-seven."]]], [42, [["E", "Forty-two. I got it off her birthday card. The one I didn't buy."]]]],
      win: [["S", "Got her!"], ["E", "That's my girl. Older than she looks and smarter than her dad."]],
      lose: [["S", "Missed! Abby wins."], ["E", "She takes after her brother. The nice one."]] },
  ] },
];
// said when someone taps the wrong way (Older when they're younger, or the other way)
window.FIB = [[["E", "Nice try! We know when you were born. We were there."]], [["S", "Lying about your age? Happens to the best of us. Try again."]], [["E", "We have the family Bible. Try again."]]];
window.CLOSE = [["E", "Ding ding ding! Within two years!"]];
// the kissing booth part (there is no kissing)
window.KISS = [
  [["E", "One kiss, one dollar."], ["S", "Eddie, it's a no-kissing kissing booth."], ["E", "Still a dollar."]],
  [["S", "Kiss? Sorry. I'm saving my lips for my Harley."]],
  [["E", "Pucker up!"], ["S", "Eddie, no."], ["E", "Fine. Air kiss. That's two dollars."]],
  [["S", "This is a kissing booth with no kissing. It's the family's favorite booth."], ["E", "It's the only one we're allowed to run."]],
  [["E", "You want a kiss from me? Nobody's wanted a kiss from me since wife number four."]],
  [["S", "No kissing! Read the sign!"], ["E", "We'd never get invited back if we kissed somebody."]],
  [["E", "I'll blow you a kiss."], ["S", "Don't. You'll charge her for the wind."]],
  [["S", "No kisses. But I'll give you an autographed picture of me."], ["E", "That's worse. Take the kiss. Wait, there's no kiss."]],
  [["E", "Kisses are sold out."], ["S", "We never had any."], ["E", "That's why they're sold out."]],
  [["S", "Here's your kiss."], ["E", "Sonny!"], ["S", "On the hand. Your own hand. Kiss it yourself."]],
];
window.KISS_WIN = [[["E", "And as a prize, you win a kiss from Sonny!"], ["S", "No you don't. No kissing."]], [["S", "And a kiss from Eddie!"], ["E", "Just kidding. No kissing. It's in the contract."]]];
window.KISS_LOSE = [[["S", "Booth wins! You get a consolation kiss."], ["E", "No you don't. That's a no-kissing kiss."]], [["E", "Better luck next time. Here's a kiss!"], ["S", "Eddie. Sign. No kissing."]]];
