const settings = require('../settings.json');
const Discord = require('discord.js');

exports.run = (client, message) => {
        if(message.author.id!='396003871434211339'){
                message.channel.send("Only the founder can execute this.") }
        else {
          let messageArray = message.content.split(/\s+/g);

  let args = messageArray.slice(1);
  
  client.user.setPresence({
    status: settings.status,
    game: {
      name: args[0],
      type: 0
    }
  });
  
          var e = new Discord.RichEmbed()
  
          .setAuthor("Game changed!")
          .setDescription("Status has been successfully changed")
          .addField(`Game status set to`,`\`${args.join(" ")}\``)
          .setColor('#ECEDEE')
          .setFooter(`Success | ${message.createdAt}`)
          .setThumbnail(`https://cdn.discordapp.com/attachments/398185503045976064/402892855011704843/Chose_PNG_White.png`)
   
  message.channel.send("",{embed:e});  
    
          message.delete();

        }
  
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'setgame',
  description: 'This is a command to set the bots game. [owner]',
  usage: 'setgame [input]'
}