const settings = require('../settings.json');
const Discord = require('discord.js');
const message = require('discord.js');
var prefixes = []
function addPrefix(message) {
   prefixes.push( [message.guild.id,message.content.split(" ").slice(1).join(" ")] )
}
function changePrefix(message){
   prefixes.find(item=>{if(item[0]===message.guild.id) return item;})[1] === message.content.split(" ").slice(1).join(" ");  
}

exports.run = (client, message, args) => {

if(prefixes.find(item=>{if(item[0]===message.guild.id) return item;})) return changePrefix(message)
return addPrefix(message);
  
    var e = new Discord.RichEmbed()
    .setAuthor("Prefix changed!",client.user.avatarURL)
    .setDescription("Prefix has been successfully changed")
    .addField(`Prefix set to`,`\`${args.join(" ")}\``)
    .setColor('#ECEDEE')
    .setFooter(`Success | ${message.createdAt}`)
    .setThumbnail(`https://i.imgur.com/OsKgQ3g.png`)
    message.channel.send("",{embed:e});  
    message.delete();
  
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'setprefix',
  description: 'This is a command to set the bots prefix. (every guild can have any prefix)',
  usage: 'setprefix [input]'
}