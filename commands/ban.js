const {RichEmbed} = require('discord.js');
const {caseNumber} = require('../utilities/casenum.js');
const {parseUser} = require('../utilities/userparse.js');
const settings = require('../settings.json');
exports.run = async (client, message, args) => {
 
  const user = message.mentions.users.first();
  parseUser(message, user);
  const modlog = client.channels.find('name', 'mod-log');
  const caseNum = await caseNumber(client, modlog);
  if (!modlog) return message.reply('I cannot find a mod-log channel');
  if (message.mentions.users.size < 1) return message.reply('You must mention someone to ban them.').catch(console.error);
  // message.guild.ban(user, 2);

  const reason = args.splice(1, args.length).join(' ') || `Awaiting moderator's input. Use ${settings.prefix}reason ${caseNum} <reason>.`;
  const embed = new RichEmbed()
  .setColor(0xECEDEE)
  .setTitle("Greep - Moderation")
  .setTimestamp()
  .setDescription(`**Action:** Ban\n**Target:** ${user.tag}\n**Moderator:** ${message.author.tag}\n**Reason:** ${reason}`)
  .setFooter(`Case ${caseNum}`);
  return client.channels.get(modlog.id).send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'ban',
  description: 'Bans the mentioned user.',
  usage: 'ban [mention] [reason]'
};
