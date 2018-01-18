const Discord = require('discord.js');
exports.run = (client, message) => {

    var e = new Discord.RichEmbed()
   
    .setAuthor("Greep - Guild Stats",client.user.avatarURL)
    .setDescription(`Here are your requested guild stats, ${message.author.username}`)
    .addField("Guild name:",message.guild.name)
    .addField("Guild region:",message.guild.region)
    .addField("Guild owner:",message.guild.owner.user.username)
    .addField("Guild icon (URL):",message.guild.iconURL)
    .addField("Guild ID:",message.guild.id)
    .addField("Guild members:",message.guild.memberCount)
    .addField("Guild role count:",message.guild.roles.filter(roles => roles).size)
    .addField("Guild channel count:",message.guild.channels.filter(channels => channels).size)
    .addField("Guild created at:",message.guild.createdAt)
    .setColor('#ECEDEE')
    .setThumbnail(`https://cdn.discordapp.com/attachments/398185503045976064/402891300195794944/server_white.png`)
   
    message.channel.send("",{embed:e});
    
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'guild',
  description: 'View the stats of the server.',
  usage: 'guild'
}
