const Discord = require('discord.js');
const embed = new Discord.RichEmbed();
exports.run = (client, message, args) => {
const messagecount = parseInt(args.join(' '));
 
  message.channel.fetchMessages({
    limit: messagecount
  }).then(messages => message.channel.bulkDelete(messages));
 
   var e = new Discord.RichEmbed()
   
    .setAuthor("Greep - Purge",client.user.avatarURL)
    .addField("Messages Purged:",args[0])
    .setThumbnail('https://cdn.discordapp.com/attachments/398185503045976064/403910716572041216/Delete_White_PNG.png')
    .setColor('#ECEDEE')
    .setFooter(`Success | ${message.createdAt}`)

   
    message.channel.send("",{embed:e});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'purge',
  description: 'Purges amount of message you input. (max 100)',
  usage: 'purge <number>'
};
