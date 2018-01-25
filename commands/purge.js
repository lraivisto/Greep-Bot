const Discord = require('discord.js');
const embed = new Discord.RichEmbed();
exports.run = (client, message, args) => {
const messagecount = parseInt(args.join(' '));

    if(message.channel.type==="text"&&!message.channel.permissionsFor(message.guild.me).has('MANAGE_MESSAGES'))
    
    {
    
      message.channel.send("__**ERROR**__\nIt appears that I don't have permission to remove messages in the server/channel you tried to execute purge, please change it or notify an admin.");
      
      return;
    
    }
  
          if(!message.member.hasPermission("MANAGE_MESSAGES")){
          message.reply("__**ERROR**__\nYou need the Manage Messages permission to purge messages from this channel.");
         
          return;
        }
  
  
  message.channel.fetchMessages({
    limit: messagecount
  }).then(messages => message.channel.bulkDelete(messages));
 
   var e = new Discord.RichEmbed()
   
    .setAuthor("Greep - Purge",client.user.avatarURL)
    .addField("Messages Purged:",args[0])
    .setThumbnail('https://i.imgur.com/ZrYz5GU.png')
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
