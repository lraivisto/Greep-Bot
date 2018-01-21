const Discord = require('discord.js');
exports.run = (client, message) => {
   
    var pickups=["Are you a magician? Because whenever I look at you, everyone else disappears!",
                 "Is your daddy a Baker? Because you've got some nice buns!",
                 "Even if there wasn't gravity on earth, I'd still fall for you.",
                 "I seem to have lost my phone number. Can I have yours?",
                 "There must be a lightswitch on my forehead because everytime I see you, you turn me on!",
                 "Did you sit in a pile of sugar? Cause you have a pretty sweet ass.",
                 "Are you an interior decorator? Because when I saw you, the entire room became beautiful.",
                 "Are you a camera? Because every time I look at you, I smile.",
                 "You know, sweetie, my lips won't just kiss themselves...",
                 "Do you have a Band-Aid? Because I just scraped my knee falling for you.",
                 "Are you a campfire? Cause you're hot and I want s'more.",
                 "Do you know what my shirt is made of? Boyfriend material.",
                 "Do you work at Starbucks? Because I like you a latte.",
                 "If you were a vegetable you'd be a cute-cumber.",
                 "Have you been to the doctor lately? Cause I think you're lacking some Vitamin Me.",
                 "Do you have a sunburn, or are you always this hot?",
                 "Which is easier? You getting into those tight jeans or me getting you out of them?",
                 "Are you African? Because you're a frican babe.",
                 "Can I follow you home? Cause my parents always told me to follow my dreams.",
                 "I'm not a photographer, but I can picture me and you together.",
                 "If I bite my lip will you kiss it better?",
                 "Are you a parking ticket? 'Cause you've got fine written all over you.",
                 "I was feeling a little off today, but you definitely turned me on.",
                 "I'm not drunk, I'm just intoxicated by you.",
                 "Are you religious? Because you're the answer to all my prayers.",
                 "Do you have a pencil? Cause I want to erase your past and write our future.",
                 "Did you get those yoga pants on sale? Because at my house they're 100% off.",
                 "Do you have a map? I'm getting lost in your eyes.",
                 "Do you like Nintendo? Because Wii would look good together. ",

               
]

    
    var pickupsans = pickups[Math.floor(Math.random()*pickups.length)];
    
    var pickupanswer = pickupsans.toString();
  
    var mentions = message.mentions.users.filter(user=>{if(user !== client.user) return user;}).first();
    var member = message.guild.member(mentions)||message.member;  
  
    message.channel.send(`<@!${member.user.id}> ${pickupanswer}\n\nSent by: your secret admirer. (aka <@!${message.author.id}>)`);
  
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['flirt'],
  permLevel: 0
};

exports.help = {
  name: 'pickup',
  description: 'Use a pickup line on someone, or yourself.',
  usage: 'pickup [mention]'
}
