const { version } = require("discord.js");
const os = require('os');
const Discord = require('discord.js');
const moment = require("moment");
require("moment-duration-format");
exports.run = (client, message, args, level) => { // eslint-disable-line no-unused-vars
  const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]"); 

  var e = new Discord.RichEmbed()

    
    .setAuthor("Greep - Bot Statistics",client.user.avatarURL)
    .setDescription("Here is the bot's current statistics.")
    .addField("Author",`\`Protocol#5817\``)
    .addField("Bot Client ID",`\`400709247115067392\``)
    .addField("Official Guild",`https://discord.gg/C26rGtA`)
    .addField("Bot Uptime",`\`${duration}\``)
    .addField("Users",`\`${client.users.size.toLocaleString()}\``)
    .addField("Channels",`\`${client.channels.size.toLocaleString()}\``)
    .addField("Servers",`\`${client.guilds.size.toLocaleString()}\``)
    .addField("Library",`\`discord.js v${version}\``)
    .addField("Node",`\`${process.version}\``)
    .addField("Memory Usage",`\`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.floor(os.totalmem() / 1024**3 * 100) / 100}GB\``)
    .addField("Server OS",`\`${os.type()}\``)
    .setColor('#ECEDEE')
    .setThumbnail(`https://i.imgur.com/9FtWWxf.png`)
    .setFooter("Requested by: "+message.author.username, message.author.avatarURL)

    message.channel.send("",{embed:e});
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['stat', 'bstats', 'bstat'],
  permLevel: "User"
};

exports.help = {
  name: "stats",
  category: "Miscelaneous",
  description: "Gives some useful bot statistics",
  usage: "stats"
};
