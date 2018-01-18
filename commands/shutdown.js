const Discord = require('discord.js');
exports.run = async (client, message, args, level) => {// eslint-disable-line no-unused-vars

        if(message.author.id!='396003871434211339'){
                message.channel.send("Only the founder can execute this.") }
        else { 
  
          var e = new Discord.RichEmbed()
  
          .setAuthor("Greep - Bot Shutdown",client.user.avatarURL)
          .setDescription(`The bot is stopping every module and is now shutting down temporarily, ${message.author.username}`)
          .setColor('#ECEDEE')
          .setFooter(`Success | ${message.createdAt}`)
          .setThumbnail(`https://cdn.discordapp.com/attachments/398185503045976064/402893358655340554/Shutdown_PNG_White.png`)
  
          await message.channel.send("",{embed:e});
    
          message.delete();

          client.commands.forEach( async cmd => {
            await client.unloadCommand(cmd);
  
          });
  
          process.exit(1);

        };

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['botshut', 'shutoff', 'off', 'stop', 'shutbotoff'],
  permLevel: 0,
};

exports.help = {
  name: "shutdown",
  description: "The bot will shutdown.",
  usage: "shutdown"
};
