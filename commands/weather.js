const Discord = require('discord.js');
var weather = require('yahoo-weather');
exports.run = (client, message) => {

    let place = message.content.split(" ").slice(1).join(" ");
    
    weather(place, 'c').then(info => {
      
      const embed = new Discord.RichEmbed()
      
      .setAuthor("Greep - Weather",client.user.avatarURL)
      .addField(`Location: `,`${place}`)
      .addField(`Tempature: `,`${info.item.condition.temp}C°`)
      .addField(`Condition: `,`${info.item.condition.text}`)
      .setThumbnail(`https://cdn.discordapp.com/attachments/398185503045976064/402874773060845582/Weather_White_PNG.png`)
      .setFooter("Requested by: "+message.author.username, message.author.avatarURL)
      .setColor('#ECEDEE')
      
      message.channel.send(embed)

    }).catch(err => {
  
      message.channel.send('Sorry, but the input you have given me is either invalid, or a country. Please enter a city/town.')

    })
  
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'weather',
  description: 'Display the weather of a city/town.',
  usage: 'weather [city or town]'
}
