  const Discord = require('discord.js');

exports.run = (client, message) => {
   
    var roasts=["You're so fake, that even china denied that they made you.", 
                "What? You had a brain freeze? Doesn't that require a brain?",
                "If you were a million times smarter you would be dumber than an ant.",
                "If ugliness was measured in bricks, you'd be the great wall of china.",
                "Yo mamma so old she has a picture of Moses in her yearbook.",
                "Have you been to the mall lately? They're selling lives, you should get one.",
                "Yo mama smells so horrible that, now North Korea wants her as a nuclear weapon",
                "The closest thing you could get to a girlfriend is a disabled donkey.",
                "Yo mama so stupid she told a yo mama joke in at an orphanage.",
                "You're a failed abortion whose birth certificate is an apology from the condom factory.",
                "Can I take a picture of you? I want to prove to my family that trolls exist.",
                "You must have been born on a highway, because that's where most accidents happen.",
                "You're so ugly Hello Kitty said goodbye to you.",
                "Your family tree is a cactus, because everybody on it is a prick.",
                "You are so ugly that when yo mama dropped you off at school she got a fine for littering.",
                "It looks like your face caught on fire and someone tried to put it out with a fork.",
                "Do you have to leave so soon? I was just about to poison the tea.",
                "Your so ugly when you popped out the doctor said aww what a treasure and your mom said yeah lets bury it.",
                "We all sprang from apes, but you didn't spring far enough.",
                "I hear when you were a child your mother wanted to hire somebody to take care of you, but the mafia wanted too much.",
                "I would ask how old you are, but I know you can't count that high.",
                "If you really want to know about mistakes, you should ask your parents.",
                "Yo mama so fat she has to wear 2 watches because she covers two time zones.",
                "You're so fat you need cheat codes to play Wii Fit.",
                "You're like the universe, constantly expanding.",
                "If I throw a stick, will you go away?",
                "Yeah you're pretty ... pretty stupid",
                "When I saw your face on TV it said viewer description is advised",
                "You're so fat the only letters of the alphabet you know are KFC.",
                "(Phone ringing)... Excuse me it's your village, they want their idiot back",
                "Do you still love nature....despite what it did to you?",
                "Wow, I'm so sorry, i﻿ wish I could have helped you when that lion clawed your face to pieces, what, it didn't, I was gonna say, even a lion couldn't have done something as bad as that.",
                "Me: Dude, you're fat. You: It runs in the family. Me: Dude nobody runs in your family.",
                "The only positive thing about you is your HIV status.",
                "Here's 20 cents, call all your friends and give me back the change.",
                "Please, I could remove 90% of your 'beauty' with a tissue",
                "Two wrongs don't make a right, take your parents as an example.",
                "The only thing that goes erect when I'm near you is my middle finger.",
                "Is your ass jealous of the amount of shit that just came out of your mouth?",
                "I'm not saying I hate you, but I would unplug your life support to charge my phone.",
                "If laughter is the best medicine, your face must be curing the world.",
                "I wasn't born with enough middle fingers to let you know how I feel about you.",
                "What's the difference between you and eggs? Eggs get laid and you don't.",
                "You're the reason they invented double doors!",
                "If I had a penny for every brain cell you have I'd have nothing",
                "I'm jealous of all the people that haven't met you!",
                "I would slap you but that would be animal abuse",
                "Hi! I'm a human being. What are you?",
                "If your brain was donated to science, science would return it.",
                "I'd like to see things from your point of view but I can't seem to get my head that far up my ass.",
                "You shouldn't play hide and seek, no one would look for you.",
                "Their was an accident years ago. The accident wasn't on a highway, but in your mom's bedroom.",
                "If you're gonna be a smartass, first you have to be smart. Otherwise you're just an ass.",
                "At least when I do a handstand my stomach doesn't hit me in the face.",
                "Did the mental hospital test too many drugs on you today?",
                "Somewhere out there is a tree, tirelessly producing oxygen so you can breathe. I think you owe it an apology.",
                "What are you going to do for a face when the baboon wants his butt back?",
                "Roses are red violets are blue, God made me pretty, what happened to you?",
                "If you had one more brain cell, it would be lonely.",
                "You're so stupid, brain surgeons are having a hard time",
                "When I saw your face on TV it said viewer description is advised",
                "The only way you'll ever get laid is if you crawl up a chicken's ass and wait.",
               
]

    
    var roastsans = roasts[Math.floor(Math.random()*roasts.length)];
    
    var roastanswer = roastsans.toString();
  
    var mentions = message.mentions.users.filter(user=>{if(user !== client.user) return user;}).first();
    var member = message.guild.member(mentions)||message.member;  
  
    message.channel.send(`<@!${member.user.id}> ${roastanswer}`);
  
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['insult'],
  permLevel: 0
};

exports.help = {
  name: 'roast',
  description: 'roast someone.',
  usage: 'roast [mention]'
}