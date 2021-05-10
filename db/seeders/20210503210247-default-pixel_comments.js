'use strict';

//Testing can you see this comment?

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Pixel_Comments',
      [
        { pixelStoryId: 1, pixelUserId: 1, body: "I like that part where the thing happened.", createdAt: "2021-01-01", updatedAt: "2021-01-01" },
        { pixelStoryId: 2, pixelUserId: 2, body: "These comments are so vanilla.", createdAt: "2021-01-01", updatedAt: "2021-01-01" },
        { pixelStoryId: 3, pixelUserId: 3, body: "Honey, where are my paaaaaannnnnts?", createdAt: "2021-01-01", updatedAt: "2021-01-01" },
        { pixelStoryId: 4, pixelUserId: 4, body: "I'm Batman", createdAt: "2021-01-01", updatedAt: "2021-01-01" },
        { pixelStoryId: 1, pixelUserId: 1, body: "Is this the real life?", createdAt: "2021-01-01", updatedAt: "2021-01-01" },
        { pixelStoryId: 2, pixelUserId: 2, body: "Is this just fantasy?", createdAt: "2021-01-01", updatedAt: "2021-01-01" },
        { pixelStoryId: 3, pixelUserId: 1, body: "Caught in a landslide, no escape from reality.", createdAt: "2021-01-01", updatedAt: "2021-01-01" },
        { pixelStoryId: 4, pixelUserId: 3, body: "Open your eyes, look up to the skies and see.", createdAt: "2021-01-01", updatedAt: "2021-01-01" },
        { pixelStoryId: 1, pixelUserId: 4, body: "I'm just a poor boy, I need no sympathy", createdAt: "2021-01-01", updatedAt: "2021-01-01" },
        { pixelStoryId: 2, pixelUserId: 1, body: "Because I'm easy come, easy go, little high, little low.", createdAt: "2021-01-01", updatedAt: "2021-01-01" },
        { pixelStoryId: 3, pixelUserId: 1, body: "Any way the wind blows, doesn't really matter to me.", createdAt: "2021-01-01", updatedAt: "2021-01-01" },
        { pixelStoryId: 2, pixelUserId: 27, body: "Best article ever!!", createdAt: "2021-01-01", updatedAt: "2021-01-01" },
        { pixelStoryId: 2, pixelUserId: 32, body: "Whoa I really want to play this now.", createdAt: "2021-01-01", updatedAt: "2021-01-01" },
        { pixelStoryId: 3, pixelUserId: 14, body: "Dude, I F***ING LOVE THIS GAME", createdAt: "2021-01-01", updatedAt: "2021-01-01" },
        { pixelStoryId: 3, pixelUserId: 45, body: "Language!!!", createdAt: "2021-01-01", updatedAt: "2021-01-01" },
        { pixelStoryId: 4, pixelUserId: 50, body: "Well, that changes my mind about this game.", createdAt: "2021-01-01", updatedAt: "2021-01-01" },
        { pixelStoryId: 4, pixelUserId: 36, body: "Huh.", createdAt: "2021-01-01", updatedAt: "2021-01-01" },
        { pixelStoryId: 5, pixelUserId: 42, body: "Wow, this looks awesome!", createdAt: "2021-01-01", updatedAt: "2021-01-01" },
        { pixelStoryId: 5, pixelUserId: 12, body: "I'm gonna go buy this game right now lol...", createdAt: "2021-01-01", updatedAt: "2021-01-01" },
        { pixelStoryId: 6, pixelUserId: 28, body: "First!!!!!!!", createdAt: "2021-01-01", updatedAt: "2021-01-01" },
        { pixelStoryId: 6, pixelUserId: 2, body: "I don't know about you, but I'm gonna pre-buy this game.", createdAt: "2021-01-01", updatedAt: "2021-01-01" },
        { pixelStoryId: 7, pixelUserId: 3, body: "It’s not much but it’s funny work.", createdAt: "2021-01-01", updatedAt: "2021-01-01" },
        { pixelStoryId: 7, pixelUserId: 4, body: "Every day I'm hustlin'", createdAt: "2021-01-01", updatedAt: "2021-01-01" },
        { pixelStoryId: 8, pixelUserId: 5, body: "This kind of thinking is exactly how someone can sincerely compare their 3-hour Google search to a medical degree.", createdAt: "2021-01-01", updatedAt: "2021-01-01" },
        { pixelStoryId: 8, pixelUserId: 6, body: "You just ain't on that Boss Babe grind.", createdAt: "2021-01-01", updatedAt: "2021-01-01" },
        { pixelStoryId: 9, pixelUserId: 7, body: "Healthcare alone is killing our entrepreneur innovation potential.", createdAt: "2021-01-01", updatedAt: "2021-01-01" },
        { pixelStoryId: 9, pixelUserId: 8, body: "Pulling yourself up by the bootstraps is hard when you can't afford to buy boots.", createdAt: "2021-01-01", updatedAt: "2021-01-01" },
        { pixelStoryId: 10, pixelUserId: 9, body: "Oh, that explains the pineapple", createdAt: "2021-01-01", updatedAt: "2021-01-01" },
        { pixelStoryId: 10, pixelUserId: 10, body: "Well, I'm never recovering from clicking on that.", createdAt: "2021-01-01", updatedAt: "2021-01-01" },
        { pixelStoryId: 11, pixelUserId: 11, body: "Best deal in the history of deals.", createdAt: "2021-01-01", updatedAt: "2021-01-01" },
        { pixelStoryId: 11, pixelUserId: 12, body: "Can you explain for those who know nothing about games?", createdAt: "2021-01-01", updatedAt: "2021-01-01" },
        { pixelStoryId: 12, pixelUserId: 13, body: "What’s up with that??", createdAt: "2021-01-01", updatedAt: "2021-01-01" },
        { pixelStoryId: 12, pixelUserId: 14, body: "Sir, this is a Wendy's.", createdAt: "2021-01-01", updatedAt: "2021-01-01" },
        { pixelStoryId: 13, pixelUserId: 15, body: "He seems like a really fungi", createdAt: "2021-01-01", updatedAt: "2021-01-01" },
        { pixelStoryId: 13, pixelUserId: 16, body: "If one could only be so lucky", createdAt: "2021-01-01", updatedAt: "2021-01-01" },
        { pixelStoryId: 14, pixelUserId: 17, body: "LEEERRRRROOOOYYYYY JEEEEEENNNNKKKIIIINNNNSSSS", createdAt: "2021-01-01", updatedAt: "2021-01-01" },
        { pixelStoryId: 14, pixelUserId: 18, body: "I'm in this story and I don't like it", createdAt: "2021-01-01", updatedAt: "2021-01-01" },
        { pixelStoryId: 15, pixelUserId: 19, body: "Well, well, well. If it isn't the feelings I've been trying to avoid.", createdAt: "2021-01-01", updatedAt: "2021-01-01" },
        { pixelStoryId: 15, pixelUserId: 20, body: "Brought back some fun memories", createdAt: "2021-01-01", updatedAt: "2021-01-01" },
        { pixelStoryId: 16, pixelUserId: 21, body: "It seems impossible until it’s done - Frosty the Snowman", createdAt: "2021-01-01", updatedAt: "2021-01-01" },
        { pixelStoryId: 16, pixelUserId: 22, body: "You miss 100% of the shots you don't take - Wayne Gretzky - Michael Scott", createdAt: "2021-01-01", updatedAt: "2021-01-01" },
        { pixelStoryId: 17, pixelUserId: 23, body: "If only if only the woodpecker sighs", createdAt: "2021-01-01", updatedAt: "2021-01-01" },
        { pixelStoryId: 17, pixelUserId: 24, body: "Please God make it Friday already", createdAt: "2021-01-01", updatedAt: "2021-01-01" },
        { pixelStoryId: 18, pixelUserId: 25, body: "Isn't there a world of Warcraft pacifist panda who has reached max level picking flowers in the beginner area", createdAt: "2021-01-01", updatedAt: "2021-01-01" },
        { pixelStoryId: 18, pixelUserId: 26, body: "Is that a I reached max level by killing slimes for 300 years reference?", createdAt: "2021-01-01", updatedAt: "2021-01-01" },
        { pixelStoryId: 19, pixelUserId: 27, body: "I see what you did there", createdAt: "2021-01-01", updatedAt: "2021-01-01" },
        { pixelStoryId: 19, pixelUserId: 28, body: "Do you also do all the side quests before you face the final boss?", createdAt: "2021-01-01", updatedAt: "2021-01-01" },
        { pixelStoryId: 20, pixelUserId: 29, body: "Reminds me of the South Park episode where they’re grinding boars.", createdAt: "2021-01-01", updatedAt: "2021-01-01" },
        { pixelStoryId: 20, pixelUserId: 30, body: "Skyrim: You have a sword… You're using the bow again, aren't you?", createdAt: "2021-01-01", updatedAt: "2021-01-01" },
        { pixelStoryId: 21, pixelUserId: 31, body: "IT A WAS A ME, MARIO, IT WAS A ME ALL ALONG!", createdAt: "2021-01-01", updatedAt: "2021-01-01" },
        { pixelStoryId: 21, pixelUserId: 32, body: "Why do they look terrifyingly realistic?", createdAt: "2021-01-01", updatedAt: "2021-01-01" },
        { pixelStoryId: 22, pixelUserId: 33, body: "I'll probably enjoy it 4 years from now when its on steam sale for $15", createdAt: "2021-01-01", updatedAt: "2021-01-01" },
        { pixelStoryId: 22, pixelUserId: 34, body: "I guess that's how parents see it when their kids hang out with online friends", createdAt: "2021-01-01", updatedAt: "2021-01-01" },
        { pixelStoryId: 23, pixelUserId: 35, body: "I literally won't empty my dishwasher for 3 days in real life, but I'll do menial chores in video games for hours.", createdAt: "2021-01-01", updatedAt: "2021-01-01" },
        { pixelStoryId: 23, pixelUserId: 36, body: "Chopping Wood is more fun in real life and videogames.", createdAt: "2021-01-01", updatedAt: "2021-01-01" },
        { pixelStoryId: 24, pixelUserId: 37, body: "Learning how to play Apex in a nutshell", createdAt: "2021-01-01", updatedAt: "2021-01-01" },
        { pixelStoryId: 24, pixelUserId: 38, body: "What episode of dark mirror is this?", createdAt: "2021-01-01", updatedAt: "2021-01-01" },
        { pixelStoryId: 25, pixelUserId: 39, body: "you're doing it wrong!", createdAt: "2021-01-01", updatedAt: "2021-01-01" },
        { pixelStoryId: 25, pixelUserId: 40, body: "This takes me back to like Rainbow Six on MSN Gaming Zone", createdAt: "2021-01-01", updatedAt: "2021-01-01" },
        { pixelStoryId: 26, pixelUserId: 41, body: "Where can i get that?", createdAt: "2021-01-01", updatedAt: "2021-01-01" },
        { pixelStoryId: 26, pixelUserId: 42, body: "I will now regrettably play it to the very end and will take no pleasure in doing it.", createdAt: "2021-01-01", updatedAt: "2021-01-01" },
        { pixelStoryId: 27, pixelUserId: 43, body: "Gotta Catch 'Em All!", createdAt: "2021-01-01", updatedAt: "2021-01-01" },
        { pixelStoryId: 27, pixelUserId: 44, body: "I played the GBA ones when I was a kid", createdAt: "2021-01-01", updatedAt: "2021-01-01" },
        { pixelStoryId: 28, pixelUserId: 45, body: "It is a sight to behold cuz it just looks majestic.", createdAt: "2021-01-01", updatedAt: "2021-01-01" },
        { pixelStoryId: 28, pixelUserId: 46, body: "I would buy this game, except I am unable to buy a graphics card that can run it", createdAt: "2021-01-01", updatedAt: "2021-01-01" },
        { pixelStoryId: 29, pixelUserId: 47, body: "I always feels sad about the direction EA went in because it had some really good games.", createdAt: "2021-01-01", updatedAt: "2021-01-01" },
        { pixelStoryId: 29, pixelUserId: 48, body: "At 45 I still have to look at my knuckles to tell me how many days are in each month, but I know the contra cheat code.", createdAt: "2021-01-01", updatedAt: "2021-01-01" },
        { pixelStoryId: 30, pixelUserId: 49, body: "Up Up Down Down Left Right Left Right B A", createdAt: "2021-01-01", updatedAt: "2021-01-01" },
        { pixelStoryId: 31, pixelUserId: 50, body: "When you spent your time solving puzzles and going through a long-ass dungeon and the enemy just goes in effortlessly through a random vent or some crap to get to the end...", createdAt: "2021-01-01", updatedAt: "2021-01-01" },
        { pixelStoryId: 32, pixelUserId: 52, body: "And yet they still haven’t unlocked all the characters", createdAt: "2021-01-01", updatedAt: "2021-01-01" },
        { pixelStoryId: 33, pixelUserId: 53, body: "I hear it can make the Super Mario 64 run in under 12 parsecs", createdAt: "2021-01-01", updatedAt: "2021-01-01" },
        { pixelStoryId: 34, pixelUserId: 54, body: "I've been known to demolish a building or 5000.", createdAt: "2021-01-01", updatedAt: "2021-01-01" },
        { pixelStoryId: 35, pixelUserId: 55, body: "There's that scene in on of the tomb raider games, where you reach the main chamber, huge, cool cave… And then the bad guys blow tf up of the top of it and rappel down lmao", createdAt: "2021-01-01", updatedAt: "2021-01-01" },
        { pixelStoryId: 36, pixelUserId: 56, body: "Everyone: you need 8 hours of sleep everyday bruh! Me playing minecraft at 5am: I don't need sleep. I need diamonds!!!", createdAt: "2021-01-01", updatedAt: "2021-01-01" },
        { pixelStoryId: 37, pixelUserId: 57, body: "I hope this is not gonna be one of those single player games that still require you to be online...", createdAt: "2021-01-01", updatedAt: "2021-01-01" },
        { pixelStoryId: 38, pixelUserId: 58, body: "Remember guys, if you want your wife to allow you to buy a new tv, get your kids to play wii sports!", createdAt: "2021-01-01", updatedAt: "2021-01-01" },
        { pixelStoryId: 39, pixelUserId: 59, body: "Video games peaked in 2006 when in lego star wars the original trilogy, they couldn't have the iconic dialogue of Darth Vader telling Luke Skywalker that he's Luke's father because Lego games didn't have dialogue at the time. So they just had Vader point to a photograph of Anakin and a pregnant padme.", createdAt: "2021-01-01", updatedAt: "2021-01-01" },
        { pixelStoryId: 40, pixelUserId: 60, body: "Me: I wish I had the money for a new console… Dad: Well what's this behing your ear?? *points to a job center*", createdAt: "2021-01-01", updatedAt: "2021-01-01" },
        { pixelStoryId: 41, pixelUserId: 61, body: "As a 50 year old gamer who started with a Pong console in the 70's, I sometimes just have to stop and marvel at how far we've come.", createdAt: "2021-01-01", updatedAt: "2021-01-01" },
        { pixelStoryId: 42, pixelUserId: 62, body: "There's an NPC in a game somewhere still waiting on you to finisht that side quest you forgot about that would change their life...", createdAt: "2021-01-01", updatedAt: "2021-01-01" },
        { pixelStoryId: 43, pixelUserId: 63, body: "I blame older JRPGs for this mindset", createdAt: "2021-01-01", updatedAt: "2021-01-01" },
        { pixelStoryId: 44, pixelUserId: 64, body: "Tbh I liked it more when they just had those weird grunts, it feels weird when they speak", createdAt: "2021-01-01", updatedAt: "2021-01-01" },
        { pixelStoryId: 45, pixelUserId: 65, body: "Best part of the game was extinguishing the lives out of your enemies and collecting their precious souls in coins. Loved me some blue ones", createdAt: "2021-01-01", updatedAt: "2021-01-01" },
        { pixelStoryId: 46, pixelUserId: 66, body: "Those games have absolutely zero business being as good as they are. On paper it sounds stupid and childish. But damn if they aren’t some of my favorite games of all time", createdAt: "2021-01-01", updatedAt: "2021-01-01" },
        { pixelStoryId: 47, pixelUserId: 67, body: "Hurry up and finish your food Boy", createdAt: "2021-01-01", updatedAt: "2021-01-01" },
        { pixelStoryId: 48, pixelUserId: 68, body: "Something tells me I should play Fallen Order today.", createdAt: "2021-01-01", updatedAt: "2021-01-01" },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Pixel_Comments', null, {});
  }
};
