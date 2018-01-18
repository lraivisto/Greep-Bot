exports.run = (client, message, args) => {
  
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed();
  
        if(message.author.id!='396003871434211339'){
                message.channel.send("Only the founder can execute this.") }
        else { 
  
  let command;
  if (client.commands.has(args[0])) {
    command = args[0];
  } else if (client.aliases.has(args[0])) {
    command = client.aliases.get(args[0]);
  }
  if (!command) {
    return message.channel.send(    new Discord.RichEmbed()
    
        .setAuthor("Greep - Module Reload",client.user.avatarURL)
        .setDescription(`The module \`${args[0]}\` has not been found.`)
        .setColor('#ECEDEE')
      .setFooter(`Failed | ${message.createdAt}`)
        .setThumbnail(client.user.avatarURL));
  } else { //\`${args[0]}\`
    message.channel.send(`Reloading: \`${command}\``)
      .then(m => {
        client.reload(command)
          .then(() => {
                 m.edit(
    
    new Discord.RichEmbed()
    
        .setTitle(`Greep - Module Reload`)
        .setDescription(`The module \`${command}\` has been reloaded.`)
        .setColor('#ECEDEE')
        .setFooter(`Success | ${message.createdAt}`)
        .setThumbnail(`https://cdn.discordapp.com/attachments/398185503045976064/402892450533998592/Reload_PNG_White.png`))
     //\`${command}\`\n\`\`\`${e.stack}\`\`\` 
          })
          .catch(e => {
            m.edit(
    
    new Discord.RichEmbed()
    
        .setTitle(`G - Reload`)
        .setDescription(`The module \`${command}\` has failed to reload, here is the error:\n\n \`\`\`${e.stack}\`\`\``)
        .setColor('#ECEDEE')
        .setFooter("Failed")
        .setThumbnail(client.user.avatarURL))
          });
      });
  }
        }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['r'],
  permLevel: 4
};

exports.help = {
  name: 'reload',
  description: 'Reloads the command file, if it\'s been updated or modified.',
  usage: 'reload <commandname>'
};
