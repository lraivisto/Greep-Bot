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
  description: 'This is a command jost for fun.',
  usage: 'testing'
}