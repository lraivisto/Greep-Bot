exports.run = async (client, message, args) => {
    const Discord = require('discord.js');
  const embed = new Discord.RichEmbed();
  
  var mentions = message.mentions.users.filter(user=>{if(user !== client.user) return user;}).first();
  
  var member = message.guild.member(mentions)||message.member;
  
  let avataruser= member.user.displayAvatarURL;
  
  message.channel.send(
  
    new Discord.RichEmbed()
                        .setAuthor("Greep - User Avatar",client.user.avatarURL)
                        .setDescription(member.user!==message.author?`**<@!${message.author.id}>**\nhere is <@!${member.user.id}>'s avatar.`:`<@!${message.author.id}> avatar.`)
                        .setColor('#ECEDEE')
                        .setImage(avataruser)
                       );
                        
                        }
  


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['pp'],
    permLevel: 0
};
      
exports.help = {
    name: 'avatar',
    description: 'View your avatar or a mentioned users avatar.',
    usage: 'avatar'
};
