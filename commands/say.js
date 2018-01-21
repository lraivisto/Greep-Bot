const Discord = require('discord.js');
exports.run = (client, message, args) => {
  
    var e = new Discord.RichEmbed()
   
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription(args.join(" "))
    .setColor("#ECEDEE")
    .setFooter(message.createdAt)
    .setThumbnail(`https://i.imgur.com/bXAYrUz.png`)
   
    message.channel.send("",{embed:e});
    
    message.delete();
  
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'say',
  description: 'Say something in the channel.',
  usage: 'say [mesage]'
}