const {RichEmbed} = require('discord.js');
const {caseNumber} = require('../utilities/casenum.js');
const {parseUser} = require('../utilities/userparse.js');
const settings = require('../settings.json');
exports.run = async (client, message, args) => {
  const user = message.mentions.users.first();
  parseUser(message, user);
  const modlog = client.channels.find('name', 'mod-log');
  const casenum = await casenum(client, modlog);
  if (!modlog) return message.reply('I cannot find a mod-log channel');
  if (message.mentions.users.size < 1) return message.reply('You must mention someone to kick them.').catch(console.error);

  // message.guild.member(user).kick();

  const reason = args.splice(1, args.length).join(' ') || `Awaiting moderator's input. Use ${settings.prefix}reason ${casenum} <reason>.`;
  const embed = new RichEmbed()
  .setColor(0xECEDEE)
  .setTimestamp()
  .setDescription(`**Action:** Kick\n**Target:** ${user.tag}\n**Moderator:** ${message.author.tag}\n**Reason:** ${reason}`)
  .setFooter(`Case ${casenum}`);
  return client.channels.get(modlog.id).send({embed});
};

exports.conf = {
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'kick',
  description: 'Kicks the mentioned user.',
  usage: 'kick [mention] [reason]'
};