const { version } = require("discord.js");
const os = require('os');
const Discord = require('discord.js');
const moment = require("moment");
const fs = require('fs');
require("moment-duration-format");
exports.run = (client, message, args, level) => { // eslint-disable-line no-unused-vars
  const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]"); 

fs.readdir('./commands/', (err, files) => {
  if (err) console.error(err);
  
  var e = new Discord.RichEmbed()

    
    .setAuthor("Greep - Bot Statistics",client.user.avatarURL)
    .setDescription("Here is the bot's current statistics.")
    .addField("Bot Invite",`https://discordapp.com/oauth2/authorize?client_id=400709247115067392&permissions=402058311&scope=bot`,true)
    .addField("Author",`\`Protocol#5817\``,true)
    .addField("Bot Client ID",`\`400709247115067392\``,true)
    .addField("Bot Commands",`\`${files.length}\``,true)
    .addField("Official Guild",`https://discord.gg/C26rGtA`,true)
    .addField("Bot Uptime",`\`${duration}\``,true)
    .addField("Users",`\`${client.users.size.toLocaleString()}\``,true)
    .addField("Channels",`\`${client.channels.size.toLocaleString()}\``,true)
    .addField("Servers",`\`${client.guilds.size.toLocaleString()}\``,true)
    .addField("Library",`\`discord.js v${version}\``,true)
    .addField("Node",`\`${process.version}\``,true)
    .addField("Memory Usage",`\`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.floor(os.totalmem() / 1024**3 * 100) / 100}GB\``,true)
    .addField("Server OS",`\`${os.type()}\``,true)
    .setColor('#ECEDEE')
    .setThumbnail(`https://i.imgur.com/9FtWWxf.png`)
    .setFooter("Requested by: "+message.author.username, message.author.avatarURL)

    message.channel.send("",{embed:e});
}
           )}

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
