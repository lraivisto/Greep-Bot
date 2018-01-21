const settings = require('../settings.json');
const Discord = require('discord.js');
const embed = new Discord.RichEmbed();
exports.run = (client, message, params) => {
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(
    
    new Discord.RichEmbed()
   
    .setAuthor("Greep - Help",client.user.avatarURL)
    .setDescription(`\n\nUse \`${settings.prefix}help [commandname]\` for more information about the command.\n**Commands**\n\n${client.commands.map(c => `${settings.prefix}**${c.help.name}**${''.repeat(longest - c.help.name.length)} **❯❯** ${c.help.description}`).join('\n')}`)
    .setColor('#ECEDEE')
    .setThumbnail(`https://cdn.discordapp.com/attachments/398185503045976064/402872301777059840/Help_PNG.png`)
      .setFooter("Requested by: "+message.author.tag, message.author.avatarURL)
   )
 
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.channel.send(
    
    new Discord.RichEmbed()
   
    .setTitle(`Command Help`)
    .setDescription(`**${command.help.name}** **❯❯** \n${command.help.description}\n**command usage** **❯❯** ${command.help.usage}`)
    .setColor('#ECEDEE')
    .setThumbnail(client.user.avatarURL)
   )
    }
  }
};//`= Command List =\n\n[Use ${settings.prefix}help <commandname> for details]\n\n${client.commands.map(c => `${settings.prefix}${c.help.name}${' '.repeat(longest - c.help.name.length)} :: ${c.help.description}`).join('\n')}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp'],
  permLevel: 0
};

exports.help = {
  name: 'help',
  description: 'Displays all the available commands for your permission level.',
  usage: 'help [command]'
};

