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
// Inside the kissing booth it's really the Kiss My Ass Booth: Sonny, Eddie and Abby are the ones who have to kiss YOUR ass.
window.KISS = [
  [["E", "Kiss my ass booth, now open! Wait, we're the ones kissing?"], ["S", "Read the contract, Eddie."], ["E", "I never read contracts. That's how I got married four times."]],
  [["A", "Uncle Sonny, how many asses do we have to kiss today?"], ["S", "Three sisters, one mom, and the whole family."], ["E", "We're going to need lip balm."]],
  [["S", "Eddie, you go first."], ["E", "Why me?"], ["S", "You're the one who charged Mom for groceries."]],
  [["E", "Does kissing your ass count as an apology?"], ["A", "Dad, it counts as a start."], ["S", "A very long start."]],
  [["A", "My brother never had to kiss anybody's ass."], ["E", "Because he never did anything wrong."], ["S", "Show-off."]],
  [["S", "I'll kiss your ass, but I'm wearing my bandana. I have standards."], ["E", "You have a bandana. That's not the same as standards."]],
  [["E", "I'd pay to not kiss your ass."], ["S", "Eddie, you've never paid for anything."], ["E", "Exactly. So here I am, kissing."]],
  [["A", "Pucker up, Dad. Here comes Aunt Marni."], ["E", "Can I get a warm-up ass first?"], ["S", "There's no warm-up ass, Eddie."]],
  [["S", "My daughters said I'd have to kiss a lot of ass to get back in their good graces."], ["E", "So you opened a booth?"], ["S", "I'm efficient."]],
  [["E", "This booth is the best idea we ever had."], ["S", "It's the only way anyone will let us near them."], ["A", "From behind."]],
  [["A", "Dad, why are you wearing ChapStick?"], ["E", "Big day at the booth, sweetie."], ["S", "He's been practicing on the mirror."]],
  [["S", "We've been kissing ass all day."], ["E", "And the family still hasn't invited us to dinner."], ["A", "Maybe kiss harder?"]],
  [["E", "Kiss your ass? For free? Who do you think I am?"], ["S", "A guy who's out of the family."], ["E", "…Pucker up. Free of charge."]],
  [["A", "Uncle Sonny, you're kissing it wrong."], ["S", "How can you kiss an ass wrong?"], ["E", "Trust me, Sonny, you've found a way."]],
  [["S", "If kissing your ass gets me back to Thanksgiving, I'll kiss it twice."], ["E", "I'll kiss it three times if there's pie."], ["A", "I'll kiss it if someone takes me off Dad's lap."]],
  [["E", "Sonny, I think the sisters are enjoying this."], ["S", "They've waited years for this booth."], ["A", "They brought snacks and lawn chairs."]],
  [["A", "Next in line for the Kiss My Ass Booth!"], ["E", "Please be someone who likes us."], ["S", "Nobody in line likes us, Eddie."]],
  [["S", "Kissing your ass is the most honest thing I've done all year."], ["E", "It's the only thing you've done all year."]],
  [["E", "Shannon, Julie, Marni, we're sorry. Pucker up, Sonny."], ["S", "Do I have to?"], ["A", "Uncle Sonny, you have to kiss the most. You were the biggest ass."]],
  [["A", "I stuck up for you, Dad. Now look where it got me."], ["E", "Kissing ass at a carnival."], ["S", "Welcome to the family business, kid."]],
  [["S", "Mikey, you built this whole booth just so we'd kiss everybody's ass."], ["E", "He's the ringmaster. He knows what he's doing."], ["A", "Best idea he ever had."]],
  [["E", "Okay, who's next? I've got a coupon for one free ass-kiss."], ["S", "Eddie, the whole booth is free."], ["E", "Then this coupon is worth nothing. Like all my coupons."]],
  [["S", "Bend over, family, here comes Sonny!"], ["E", "Sonny, that's a terrible way to say it."], ["A", "He's never been good with words. Or apologies."]],
  [["A", "Do you think kissing everyone's ass will fix the family?"], ["S", "No."], ["E", "But it's a lot cheaper than flowers."]],
  [["E", "Every kiss is a heartfelt apology."], ["S", "From the heart?"], ["E", "From the lips. The heart charges extra."]],
  [["S", "The sisters said kiss my ass so many times, we finally listened."], ["E", "It only took forty years."], ["A", "We're slow learners."]],
  [["S", "Welcome to the Kiss My Ass Booth! Today, we're the ones doing the kissing."], ["E", "The family's been telling us to kiss their ass for years."], ["A", "So we finally opened a booth for it."]],
  [["E", "Step right up! Sonny, Eddie and Abby will kiss your ass. Free of charge."], ["S", "Eddie, you said free?"], ["E", "It's the only way they'd let us back in."]],
  [["A", "Dad, why are we kissing everybody's ass?"], ["E", "Because we're out of the family, sweetie."], ["S", "And this is the only way back in."]],
  [["S", "Pucker up, boys. And Abby."], ["A", "I'm made of wood, Uncle Sonny. I'll get splinters."], ["E", "It's worth it for Thanksgiving."]],
  [["E", "I'll kiss your ass, but I'm not tipping."], ["S", "Eddie, nobody tips for this."], ["E", "Then I'm finally in the right business."]],
  [["S", "We're sorry. We're so sorry. Please accept this kiss on the ass."], ["A", "That's the nicest apology Uncle Sonny's ever made."]],
  [["A", "I stuck up for Dad without knowing the story."], ["E", "And now she's kissing ass to make up for it."], ["A", "It's been a rough year."]],
  [["E", "I've kissed four wives. I can kiss one more ass."], ["S", "That's not the brag you think it is, Eddie."]],
  [["S", "I've never kissed anybody's ass in my life."], ["E", "That's why we're out of the family, Sonny."], ["S", "Fine. Pucker up, Sonny."]],
  [["A", "Uncle Sonny, I think you're doing it wrong."], ["S", "How do you kiss an ass right?"], ["E", "Ask my son. He's never had to."]],
  [["E", "One kiss on the ass, coming up!"], ["S", "Eddie, careful. Don't let the unicorn out."], ["A", "Please, nobody let the unicorn out."]],
  [["S", "Marni, Shannon, Julie, line up. We've got a lot of ass to kiss."], ["E", "Years of ass."], ["A", "It's going to be a long day."]],
  [["E", "We'll kiss your ass, wash your car, and bring the pie."], ["S", "Eddie, you've never brought a pie."], ["E", "I'll bring the smell of a pie. From the driveway."]],
  [["A", "Here's your kiss! On the ass. Like you deserve."], ["E", "That's my girl."], ["S", "She's better at this than both of us."]],
];
window.KISS_WIN = [
  [["E", "You stumped us!"], ["S", "Rules are rules. Line up, Eddie. We're kissing her ass."], ["A", "Me too, Uncle Sonny?"], ["S", "All three of us, kid."]],
  [["S", "You win! Now Sonny, Eddie and Abby will kiss your ass."], ["E", "Just like the sisters always said we would."]],
  [["A", "She stumped Dad and Uncle Sonny!"], ["E", "Pucker up, everybody."], ["S", "I knew this was coming the day we opened the booth."]],
];
window.KISS_LOSE = [
  [["S", "Booth wins!"], ["E", "But we still have to kiss your ass."], ["A", "That's the deal. We kiss ass either way."]],
  [["E", "We got it right!"], ["S", "Doesn't matter. We're still out of the family."], ["A", "Pucker up, boys."]],
  [["A", "We guessed it! Do we still have to kiss her ass?"], ["E", "Sweetie, we always have to kiss their ass."], ["S", "It's in the contract. The sisters wrote it."]],
];

// ---------- Guess Your Weight ----------
// Everyone else: Sonny & Eddie only ever guess LOW (they're trying to get back in). You tell them heavier, lighter, or "you got it!"
// A guess: [number on the board, lines]. Board shows the number with "POUNDS".
window.W_INTRO = {
  marnie: [["S", "Marni! We would never guess a lady's weight."], ["E", "Unless it gets us back in for Thanksgiving. Then we'll guess low."]],
  shannon: [["E", "Shannon! Redheads weigh nothing. It's science."], ["S", "Eddie, that's not science."], ["E", "It is if it gets us invited."]],
  julie: [["S", "Julie! The baby sister."], ["E", "Light as a feather. Just like my wallet."]],
  scarlett: [["S", "Scarlett! Mikey's little sister."], ["E", "Guess low, Sonny. Low is safe."]],
  abby: [["E", "Abby, my girl! Step right up."], ["S", "Eddie, careful. She'll say you're right no matter what."]],
  mikey: [["S", "Big Top Mikey! The Ringmaster himself!"], ["E", "Careful, Sonny. He runs the whole Midway."]],
};
window.W_GUESS = [   // for the ladies
  [[98, [["S", "Ninety-eight pounds. Soaking wet."]]], [105, [["E", "A hundred and five. And that's with the purse."]]], [112, [["S", "A hundred and twelve. And every ounce of it is pure class."]]]],
  [[95, [["E", "Ninety-five. Same as high school."]]], [103, [["S", "A hundred and three. Final answer. Please let us back in."]]], [110, [["E", "A hundred and ten. I'm not going higher. I value my life."]]]],
  [[101, [["S", "One-oh-one. Like a fever. Because you're hot."]]], [108, [["E", "One-oh-eight. I'd go higher, but Sonny's kicking me."]]], [115, [["S", "One-fifteen. And we're throwing in a free kiss. No kissing."]]]],
];
window.W_GUESS_M = [   // for Mikey
  [[150, [["E", "One-fifty. Lean and mean."]]], [165, [["S", "One-sixty-five. All muscle. Ringmaster muscle."]]], [180, [["E", "One-eighty. And he still makes it look easy."]]]],
  [[145, [["S", "One-forty-five. The first grandson, still in fighting shape."]]], [160, [["E", "One-sixty. Must be the top hat."]]], [175, [["S", "One-seventy-five. Final answer. Don't kick us out of the Midway."]]]],
];
window.W_HEAVY = [[["E", "Heavier? Then it's all muscle."]], [["S", "Heavier? That's all brains."]], [["E", "Heavier? Must be the jewelry."]], [["S", "Heavier? I don't believe it. But okay."]]];
window.W_LIGHT = [[["S", "Lighter?! You're practically floating."]], [["E", "Lighter? Somebody tie a string on you before you blow away."]], [["S", "Even lighter? We were already being nice!"]]];
window.W_GOT = [[["S", "Nailed it!"], ["E", "That's our first right answer since nineteen ninety."]], [["E", "Got it! And we didn't even need a scale."], ["S", "We just need a Thanksgiving invite."]]];
window.W_STUMP = [[["S", "We give up. You're a mystery."], ["E", "A beautiful mystery. Write that down for the group chat."]], [["E", "You stumped us!"], ["S", "We guessed low on purpose. That's called manners."]]];

// Sonny & Eddie: the weight you're guessing is what they're holding.
// A guess: [label on the board, unit under it, lines]. The other brother does the guessing.
window.DRUG = {
  sonny: [
    { intro: [["E", "Sonny! Step on the scale."], ["S", "Don't put me on a scale, Eddie."], ["E", "Not you. Your saddlebag."]],
      guesses: [["1g", "ONE GRAM", [["E", "One gram."]]], ["⅛", "AN EIGHTH", [["S", "Eddie! That's not my weight!"], ["E", "An eighth. Final offer."]]], ["¼", "A QUARTER", [["E", "A quarter ounce. He buys the good stuff for himself, and shares none of it."]]]],
      got: [["S", "How did you know?!"], ["E", "I've been in that saddlebag."]],
      stumped: [["E", "Missed! He's hiding more in the bandana."], ["S", "It's a bandana, Eddie. Not a pocket."]] },
    { intro: [["S", "Guess my weight? Easy. One-eighty."], ["E", "Not THAT weight, Sonny. Your other weight."]],
      guesses: [["½", "HALF OUNCE", [["E", "A half ounce."]]], ["1oz", "AN OUNCE", [["S", "Keep your voice down, Eddie!"], ["E", "A whole ounce. He'll pay for the expensive stuff. Just never the tip."]]], ["QP", "QUARTER POUND", [["E", "A quarter pound. That's why the Harley sits so low."]]]],
      got: [["S", "Fine. You got me."], ["E", "Pay up. In coins. Not in that."]],
      stumped: [["S", "Wrong! It's all oregano."], ["E", "Sure, Sonny. Oregano. That's why you ate the whole buffet."]] },
  ],
  eddie: [
    { intro: [["S", "Eddie! Let me guess your weight."], ["E", "One-sixty-five."], ["S", "Not you. What's in your pocket."]],
      guesses: [["1g", "ONE GRAM", [["S", "One gram. He's too cheap to buy more."]]], ["5g", "FIVE GRAMS", [["E", "Lower your voice!"], ["S", "Five grams. He won it double or nothing."]]], ["⅛", "AN EIGHTH", [["S", "An eighth. And he charged Mom a delivery fee."]]]],
      got: [["E", "Lucky guess."], ["S", "I'm your brother. I know where you hide it."]],
      stumped: [["E", "Ha! Wrong! I sold it."], ["S", "Of course you did. At a markup."]] },
    { intro: [["E", "Guess my weight, Sonny. Double or nothing."], ["S", "You don't have anything to double, Eddie."]],
      guesses: [["2g", "TWO GRAMS", [["S", "Two grams."]]], ["¼", "A QUARTER", [["E", "I wish!"], ["S", "A quarter ounce. Four marriages. The man needs it."]]], ["½", "HALF OUNCE", [["S", "Half an ounce. He keeps it right next to the unicorn."]]]],
      got: [["E", "How'd you know?"], ["S", "You never share anything, so you've always got plenty left."]],
      stumped: [["E", "Wrong! I lost it all in a poker game."], ["S", "That, I believe."]] },
  ],
};
window.D_MORE = [[["S", "More?! Somebody check the saddlebags."]], [["E", "More? I knew he was holding out on me."]], [["S", "More? And he never shares. Not once."]]];
window.D_LESS = [[["E", "Less? He must've smoked the evidence."]], [["S", "Less? He's even cheaper than I thought."]], [["E", "Less? Somebody owes somebody twenty bucks."]]];

// ---------- Nick, the booth worker (in the referee shirt) ----------
window.N_OPEN = [
  ["N", "Step right up! I'm Nick. I work the booth, and I keep these two honest."],
  ["N", "Welcome to the booth! I'm the referee. Somebody has to watch Sonny and Eddie."],
  ["N", "Hi, I'm Nick! I run the scoreboard. They're not allowed to touch it."],
  ["N", "Official referee, Nick, on duty. No cheating, no bribes, and no double or nothing."],
  ["N", "Step on up! Don't worry. I counted the coins before Eddie got here."],
  ["N", "I'm Nick. I just work here. I'm not related to these two. Okay, I am. Please don't tell anyone."],
];
window.N_WIN = [
  ["N", "Official ruling: the booth got it. I checked the scoreboard twice."],
  ["N", "Booth wins. And for once, nobody cheated. I was watching."],
  ["N", "Ruling stands! Sonny, put the coins down. Those aren't yours."],
];
window.N_STUMP = [
  ["N", "Tweet! Three misses! Official ruling: you stumped them!"],
  ["N", "That's three strikes. You win! Eddie, hand over the coins. All of them."],
  ["N", "Stumped! I'm paying you myself, because these two won't."],
];
window.N_DRUG = [
  ["N", "Uh, I'm the referee. I didn't see anything. I'm looking at the ceiling."],
  ["N", "This part of the booth isn't my department. I'm going on break."],
  ["N", "For the record, I'm just the scoreboard guy. I don't know these men."],
];
window.FIB.push([["N", "Flag on the play! That's a fib. Try again."]], [["N", "Tweet! Referee says no fibbing at the booth. Try again."]]);
window.KISS.push(
  [["N", "Before you ask, the referee does not kiss anybody's ass."], ["E", "Lucky."], ["S", "He's the only one in the family with a clean record."]],
  [["S", "Nick, help us out here."], ["N", "No way. I'm the referee. Pucker up, Uncle Sonny."], ["E", "Even the help is against us."]],
  [["E", "Nick, I'll give you a dollar to kiss it for me."], ["N", "Uncle Eddie, you've never given anybody a dollar."], ["S", "He's got you there."]],
);
