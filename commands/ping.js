const Discord = require('discord.js');
const embed = new Discord.RichEmbed();
exports.run = (client, message) => {

    
  var messageping = message.channel.send(`**Pinging...**`)
   
  messageping.then(m => m.edit(
  
    embed
    .setAuthor("Greep - Ping Statistics",client.user.avatarURL)
    .setDescription(`Here are the bot's current ping statistics!`)
    .setColor(0xECEDEE)
    .addField("Latency",`\`${m.createdTimestamp - message.createdTimestamp}ms\``,true)
    .addField("API Latency",`\`${Math.round(client.ping)}ms\``,true)      .setFooter("Pinged by: "+message.author.username, message.author.avatarURL)
    .setThumbnail(`https://i.imgur.com/OzBghri.png`)))
      }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Check the bots ping',
  usage: 'ping'
};
