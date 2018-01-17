const Discord = require('discord.js');

exports.run = (client, message) => {
  let messageArray = message.content.split(/\s+/g);
  
  let args = messageArray.slice(1);
  
    if(!message.member.hasPermission("MANAGE_MESSAGES")) {message.reply("You don't have permission __***MANAGE_MESSAGES***__"); return;}
  
    if(!message.member.hasPermission("EMBED_LINKS")) {message.reply("You don't have permission __***EMBED_LINKS***__"); return;}
   
    var e = new Discord.RichEmbed()
   
    .setAuthor(`${message.guild.name} announcement`, message.guild.iconURL)
    .setDescription(args.join(" "))
    .setColor('#ECEDEE')
    .setFooter(`Server Announcement | ${message.createdAt}`)
   
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
  name: 'announce',
  description: 'Announce a message in your server.',
  usage: 'announce'
}