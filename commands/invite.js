exports.run = (client, message) => {
  
  const Discord = require('discord.js');
  message.channel.send("My invite link is https://goo.gl/mYpidb\n\nYou will need the **MANAGE_MESSAGES** permission to add me to your server, or ask a user who has the permission to add it.")
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'invite',
  description: 'Get the bot invite, and invite it to a server.',
  usage: 'invite'
}