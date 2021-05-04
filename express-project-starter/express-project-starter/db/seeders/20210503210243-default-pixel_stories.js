'use strict';

//Testing can you see this comment?


module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Pixel_Stories', [
      { title: "Chasm", body: "Chasm is a 2D Action-RPG Platformer. Taking equal inspiration from hack 'n slash dungeon crawlers (procedurally generated dungeons, loot drops, etc) and Metroidvania-style platformers, the game aims to immerse you in its 2D fantasy world full of exciting treasure, deadly enemies, and abundant secrets. Players assume the role of a soldier passing through a remote mining town on their journey home from a long war. The town's miners have recently disappeared after breaching a long-forgotten temple far below the town, and reawakened an ancient slumbering evil. Now trapped in the town by supernatural forces, you're left with no option but to explore the mines below, battle enemies and bosses, and increase your abilities in hopes of finally escaping and returning home.", summary: "This is a summary", authorId: 1, genre: "Platformer", imageUrl: "xxx", categoryId: 1, viewCount: 0, createdAt: "2000-01-01", updatedAt: "2000-01-01" },
      { title: "Here They Lie", body: "Here They Lie is a psychological horror experience that injects you into a frightening, surreal world riddled with strange and malevolent creatures. Horrors lurk around every corner, just out of sight, haunting and infecting your mind. Dare yourself to go deeper down the rabbit hole and confront the meaning of your existence. The game focuses on narrative, and the experience of dread.", summary: "This is a summary", authorId: 2, genre: "Shooter", imageUrl: "xxx", categoryId: 2, viewCount: 0, createdAt: "2000-01-01", updatedAt: "2000-01-01" },
      { title: "Tekken 3", body: " An ancient evil force has reawakened, attacking in secret and feeding on the souls of mighty warriors. To lure it out of hiding will take the greatest fighting contest the world has ever seen...Tekken 3. Some are fighting for revenge, some for honor, Ultimately, all are fighting for their lives and the fate of all mankind. ", summary: "This is a summary", authorId: 3, genre: "Fighting", imageUrl: "xxx", categoryId: 3, viewCount: 0, createdAt: "2000-01-01", updatedAt: "2000-01-01" },
      { title: "Cyberpunk 2077", body: "Cyberpunk 2077 is an open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification. Assume the role of V, a mercenary outlaw going after a one-of-a-kind implant that is the key to immortality. You can customize your character’s cyberware, skillset and playstyle, and explore a vast city where the choices you make shape the story and the world around you. Become a cyberpunk, an urban mercenary equipped with cybernetic enhancements and build your legend on the streets of Night City. Take the riskiest job of your life and go after a prototype implant that is the key to immortality. ", summary: "This is a summary", authorId: 4, genre: "Action RPG", imageUrl: "xxx", categoryId: 1, viewCount: 0, createdAt: "2000-01-01", updatedAt: "2000-01-01" },
      { title: "Lost Orbit", body: " LOST ORBIT tells the story of Harrison, an astronaut and his struggle to return home. Despite his lack of resources, Harrison will relentlessly strive to survive hopeless conditions. Along his mission he encounters evidence that his accident was not an isolated incident and confronts a strange and dangerous alien race.", summary: "This is a summary", authorId: 1, genre: "Platformer", imageUrl: "xxx", categoryId: 2, viewCount: 0, createdAt: "2000-01-01", updatedAt: "2000-01-01" },
      { title: "Battlefield V", body: "Enter mankind's greatest conflict with Battlefield 5 as the series goes back to its roots with a never-before-seen portrayal of World War 2. Lead your squad to victory with new ways to turn the battlefield to your advantage. Assemble your Company of customized soldiers, weapons, and vehicles then take them on an epic journey through the Tides of War. Experience the most intense, immersive Battlefield yet. You will never be the same.", summary: "This is a summary", authorId: 2, genre: "Shooter", imageUrl: "xxx", categoryId: 3, viewCount: 0, createdAt: "2000-01-01", updatedAt: "2000-01-01" },
      { title: "Mortal Kombat", body: "Mortal Kombat Komplete Edition delivers the critically acclaimed game, all previously released downloadable content (DLC), plus digital downloads of the 2011 release of Mortal Kombat: Songs Inspired by the Warriors album with a bonus track, and the 1995 Mortal Kombat film on the PlayStation Store or Xbox Live Zune. The DLC includes fan-favorite warriors Skarlet, Kenshi and Rain, as well as the infamous dream stalker Freddy Krueger. The game also offers 15 Klassic Skins and three Klassic Fatalities (Scorpion, Sub-Zero and Reptile). Mortal Kombat: Songs Inspired by the Warriors is a collection of electronic music inspired by the game and is executive produced by JFK (of the DJ/ production duo MSTRKRFT and Death From Above 1979).", summary: "This is a summary", authorId: 3, genre: "Fighting", imageUrl: "xxx", categoryId: 1, viewCount: 0, createdAt: "2000-01-01", updatedAt: "2000-01-01" },
      { title: "Wasteland 3", body: " In Wasteland 3 you take command of a squad of Desert Rangers, lawmen and women in a post-nuclear world, trying to rebuild society from the ashes. More than a century after the bombs fell, you’re fighting a losing battle to keep your beloved Arizona alive. Then the self-proclaimed Patriarch of Colorado radios, promising aid if you'll do a job he can only entrust to an outsider—rescue his land from the ambitions of his three bloodthirsty children. You’re dispatched on a desperate quest from the scorching deserts to the snowy mountains to start from scratch, building a new base, finding a snow-worthy vehicle, training new recruits, and fighting your way through hostile frozen wastes. All the while, you'll have to decide who to trust in this land torn apart by corruption, intrigue, warring factions, crazed cultists, cutthroat gangs, and bitter sibling rivalries. Build a reputation for yourself by making decisions that will profoundly impact Colorado, its inhabitants and the story you experience. Will you be Colorado’s savior or its worst nightmare? Wasteland 3 is a squad-based RPG from inXile entertainment, featuring challenging tactical turn-based combat and a deep, reactive story full of twists, turns, and brutal ethical decisions that will keep you hooked whether you’re a Wasteland veteran or new to the series. Create a squad of up to six Rangers and customize them with perks and abilities geared to your playstyle. You even get your own battle truck, which you can upgrade into a hardened war beast, bristling with weapons, to help mow down your enemies.", summary: "This is a summary", authorId: 4, genre: "Action RPG", imageUrl: "xxx", categoryId: 2, viewCount: 0, createdAt: "2000-01-01", updatedAt: "2000-01-01" },
      { title: "Teslagrad", body: "Teslagrad is a 2D puzzle-platformer, where you play as a young lad who suddenly finds himself embroiled in an ancient conflict that will shake the foundations of his entire existence, and bring a gruesome truth to light. The game revolves around the use of electricity and magnetism, and your ingenuity will be put to the test as you employ the amazing technology of the Teslamancers to traverse the abandoned Tesla Tower. The game is completely devoid of both text and dialogue, and prefers to tell the story purely through visual means.", summary: "This is a summary", authorId: 1, genre: "Platformer", imageUrl: "xxx", categoryId: 3, viewCount: 0, createdAt: "2000-01-01", updatedAt: "2000-01-01" },
      { title: "Call of Duty: Black Ops 4", body: "Black Ops returns - in your face. Featuring gritty, grounded, fluid Multiplayer combat, a massive Zombies offering with 3 full undead adventures at launch, and Blackout, where the universe of Black Ops comes to life in one huge battle royale experience featuring the largest map in Call of Duty history, signature Black Ops combat, characters, locations and weapons from the entire Black Ops series. Soldier up for all-out combat – tailor made for the Black Ops community. ", summary: "This is a summary", authorId: 2, genre: "Shooter", imageUrl: "xxx", categoryId: 1, viewCount: 0, createdAt: "2000-01-01", updatedAt: "2000-01-01" },
      { title: "Chasm", body: "Chasm is a 2D Action-RPG Platformer. Taking equal inspiration from hack 'n slash dungeon crawlers (procedurally generated dungeons, loot drops, etc) and Metroidvania-style platformers, the game aims to immerse you in its 2D fantasy world full of exciting treasure, deadly enemies, and abundant secrets. Players assume the role of a soldier passing through a remote mining town on their journey home from a long war. The town's miners have recently disappeared after breaching a long-forgotten temple far below the town, and reawakened an ancient slumbering evil. Now trapped in the town by supernatural forces, you're left with no option but to explore the mines below, battle enemies and bosses, and increase your abilities in hopes of finally escaping and returning home.", summary: "This is a summary dude", authorId: 5, genre: "Platformer", imageUrl: "xxx", categoryId: 1, viewCount: 0, createdAt: "2000-01-01", updatedAt: "2000-01-01" },
      { title: "Here They Lie", body: "Here They Lie is a psychological horror experience that injects you into a frightening, surreal world riddled with strange and malevolent creatures. Horrors lurk around every corner, just out of sight, haunting and infecting your mind. Dare yourself to go deeper down the rabbit hole and confront the meaning of your existence. The game focuses on narrative, and the experience of dread.", summary: "This is a summary", authorId: 6, genre: "Shooter", imageUrl: "xxx", categoryId: 2, viewCount: 0, createdAt: "2000-01-01", updatedAt: "2000-01-01" },
      { title: "Tekken 3", body: " An ancient evil force has reawakened, attacking in secret and feeding on the souls of mighty warriors. To lure it out of hiding will take the greatest fighting contest the world has ever seen...Tekken 3. Some are fighting for revenge, some for honor, Ultimately, all are fighting for their lives and the fate of all mankind. ", summary: "This is a summary", authorId: 3, genre: "Fighting", imageUrl: "xxx", categoryId: 3, viewCount: 0, createdAt: "2000-01-01", updatedAt: "2000-01-01" },
      { title: "Cyberpunk 2077", body: "Cyberpunk 2077 is an open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification. Assume the role of V, a mercenary outlaw going after a one-of-a-kind implant that is the key to immortality. You can customize your character’s cyberware, skillset and playstyle, and explore a vast city where the choices you make shape the story and the world around you. Become a cyberpunk, an urban mercenary equipped with cybernetic enhancements and build your legend on the streets of Night City. Take the riskiest job of your life and go after a prototype implant that is the key to immortality. ", summary: "This is a summary", authorId: 7, genre: "Action RPG", imageUrl: "xxx", categoryId: 1, viewCount: 0, createdAt: "2000-01-01", updatedAt: "2000-01-01" },
      { title: "Lost Orbit", body: " LOST ORBIT tells the story of Harrison, an astronaut and his struggle to return home. Despite his lack of resources, Harrison will relentlessly strive to survive hopeless conditions. Along his mission he encounters evidence that his accident was not an isolated incident and confronts a strange and dangerous alien race.", summary: "This is a summary", authorId: 8, genre: "Platformer", imageUrl: "xxx", categoryId: 2, viewCount: 0, createdAt: "2000-01-01", updatedAt: "2000-01-01" },
      { title: "Battlefield V", body: "Enter mankind's greatest conflict with Battlefield 5 as the series goes back to its roots with a never-before-seen portrayal of World War 2. Lead your squad to victory with new ways to turn the battlefield to your advantage. Assemble your Company of customized soldiers, weapons, and vehicles then take them on an epic journey through the Tides of War. Experience the most intense, immersive Battlefield yet. You will never be the same.", summary: "This is a summary", authorId: 5, genre: "Shooter", imageUrl: "xxx", categoryId: 3, viewCount: 0, createdAt: "2000-01-01", updatedAt: "2000-01-01" },
      { title: "Mortal Kombat", body: "Mortal Kombat Komplete Edition delivers the critically acclaimed game, all previously released downloadable content (DLC), plus digital downloads of the 2011 release of Mortal Kombat: Songs Inspired by the Warriors album with a bonus track, and the 1995 Mortal Kombat film on the PlayStation Store or Xbox Live Zune. The DLC includes fan-favorite warriors Skarlet, Kenshi and Rain, as well as the infamous dream stalker Freddy Krueger. The game also offers 15 Klassic Skins and three Klassic Fatalities (Scorpion, Sub-Zero and Reptile). Mortal Kombat: Songs Inspired by the Warriors is a collection of electronic music inspired by the game and is executive produced by JFK (of the DJ/ production duo MSTRKRFT and Death From Above 1979).", summary: "This is a summary", authorId: 6, genre: "Fighting", imageUrl: "xxx", categoryId: 1, viewCount: 0, createdAt: "2000-01-01", updatedAt: "2000-01-01" },
      { title: "Wasteland 3", body: " In Wasteland 3 you take command of a squad of Desert Rangers, lawmen and women in a post-nuclear world, trying to rebuild society from the ashes. More than a century after the bombs fell, you’re fighting a losing battle to keep your beloved Arizona alive. Then the self-proclaimed Patriarch of Colorado radios, promising aid if you'll do a job he can only entrust to an outsider—rescue his land from the ambitions of his three bloodthirsty children. You’re dispatched on a desperate quest from the scorching deserts to the snowy mountains to start from scratch, building a new base, finding a snow-worthy vehicle, training new recruits, and fighting your way through hostile frozen wastes. All the while, you'll have to decide who to trust in this land torn apart by corruption, intrigue, warring factions, crazed cultists, cutthroat gangs, and bitter sibling rivalries. Build a reputation for yourself by making decisions that will profoundly impact Colorado, its inhabitants and the story you experience. Will you be Colorado’s savior or its worst nightmare? Wasteland 3 is a squad-based RPG from inXile entertainment, featuring challenging tactical turn-based combat and a deep, reactive story full of twists, turns, and brutal ethical decisions that will keep you hooked whether you’re a Wasteland veteran or new to the series. Create a squad of up to six Rangers and customize them with perks and abilities geared to your playstyle. You even get your own battle truck, which you can upgrade into a hardened war beast, bristling with weapons, to help mow down your enemies.", summary: "This is a summary", authorId: 7, genre: "Action RPG", imageUrl: "xxx", categoryId: 2, viewCount: 0, createdAt: "2000-01-01", updatedAt: "2000-01-01" },
      { title: "Teslagrad", body: "Teslagrad is a 2D puzzle-platformer, where you play as a young lad who suddenly finds himself embroiled in an ancient conflict that will shake the foundations of his entire existence, and bring a gruesome truth to light. The game revolves around the use of electricity and magnetism, and your ingenuity will be put to the test as you employ the amazing technology of the Teslamancers to traverse the abandoned Tesla Tower. The game is completely devoid of both text and dialogue, and prefers to tell the story purely through visual means.", summary: "This is a summary", authorId: 8, genre: "Platformer", imageUrl: "xxx", categoryId: 3, viewCount: 0, createdAt: "2000-01-01", updatedAt: "2000-01-01" },
      { title: "Call of Duty: Black Ops 4", body: "Black Ops returns - in your face. Featuring gritty, grounded, fluid Multiplayer combat, a massive Zombies offering with 3 full undead adventures at launch, and Blackout, where the universe of Black Ops comes to life in one huge battle royale experience featuring the largest map in Call of Duty history, signature Black Ops combat, characters, locations and weapons from the entire Black Ops series. Soldier up for all-out combat – tailor made for the Black Ops community. ", summary: "This is a summary", authorId: 5, genre: "Shooter", imageUrl: "xxx", categoryId: 1, viewCount: 0, createdAt: "2000-01-01", updatedAt: "2000-01-01" },

    ], {});
  },

  down: (queryInterface, Sequelize) => {

   return queryInterface.bulkDelete('Pixel_Stories', null, {});
  }
};
