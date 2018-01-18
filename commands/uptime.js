exports.run = (client, message) => {
  
  const Discord = require('discord.js');
    let uptime = client.uptime; {

  
    let days = 0;
  
    let hours = 0;
  
    let minutes = 0;
  
    let seconds = 0;
  
    let notCompleted = true;

  
    while (notCompleted) {

    
      if (uptime >= 8.64e+7) {
        
        days++;
        
        uptime -= 8.64e+7;

      }
  
      else if (uptime >= 3.6e+6) {

        hours++;
        
        uptime -= 3.6e+6;

      }
      
      else if (uptime >= 60000) {

        minutes++;
        uptime -= 60000;

      }
      
      else if (uptime >= 1000) {
          
        seconds++;
        uptime -= 1000;

      }

      if (uptime < 1000)  notCompleted = false;

  }

     message.channel.send(
    
    new Discord.RichEmbed()
    
        .setAuthor("Greep - Uptime",client.user.avatarURL)
        .setDescription("Here is the bot's current uptime.")
        .addField("Days",`\`${days}\``,true)
        .addField("Hours",`\`${hours}\``,true)
        .addField("Minutes",`\`${minutes}\``,true)
        .addField("Seconds",`\`${seconds}\``,true)
        .setColor('#ECEDEE')
        .setFooter("Requested by: "+message.author.username, message.author.avatarURL)
        .setThumbnail(client.user.avatarURL))
      

}}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'uptime',
  description: 'View the bots uptime.',
  usage: 'uptime'
}
