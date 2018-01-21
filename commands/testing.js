exports.run = (client, message) => {
  
  const Discord = require('discord.js');
  message.channel.send("Testing command executed!")
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'testing',
  description: 'This is a base-command that helps me test stuff, doesn\'t do anything to you guys though.',
  usage: 'testing'
}