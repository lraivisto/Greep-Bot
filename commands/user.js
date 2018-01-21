const Discord = require('discord.js');
exports.run = (client, message) => {

    var mentions = message.mentions.users.filter(user=>{if(user !== client.user) return user;}).first();
    var member = message.guild.member(mentions)||message.member;
    var e = new Discord.RichEmbed()
    .setAuthor("Greep - User Stats",client.user.avatarURL)
    .setDescription("Here are your requested user statistics.")
    .addField("Username:",member.user.username)
    .addField("Discriminator:",member.user.discriminator)
    .addField("Client ID",member.user.id)
    .addField("User created at:",member.user.createdAt)
    .addField("Is the specified user a bot?",member.user.bot)
    .addField("User Avatar in URL",member.user.avatarURL)
    .setFooter("Requested by: "+message.author.username, message.author.avatarURL)
    .setColor('#ECEDEE')
    .setThumbnail(`https://i.imgur.com/MRgN6Jf.png`)
   
    message.channel.send("",{embed:e});
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'user',
  description: 'View a users discord profile. (ID, Avatar, and more)',
  usage: 'user [mention]'
}
