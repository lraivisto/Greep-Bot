exports.run = (client, message, args) => {
const messagecount = parseInt(args.join(' '));
 
  message.channel.fetchMessages({
    limit: messagecount
  }).then(messages => message.channel.bulkDelete(messages));
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