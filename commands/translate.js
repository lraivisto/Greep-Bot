const Discord = require('discord.js');
const transl = require('google-translate-api');
exports.run = (client, message) => {

    let words = message.content.split(" ").slice(1).join(" ");

  transl(words, {to: 'en'}).then(res => {
  
    const embed = new Discord.RichEmbed()
  
     .setAuthor("Greep - Google Translate",client.user.avatarURL)
     .addField(`Input: `,`${words}`)
     .addField(`Output:`,`${res.text}`)
     .addField(`Language: `,`${res.from.language.iso}`)
     .setFooter("Requested by: "+message.author.username, message.author.avatarURL)
     .setThumbnail(`https://cdn.discordapp.com/attachments/398185503045976064/402890696643706902/Translate_White.png`)
     .setColor('#ECEDEE');
 
   message.channel.send(embed)

  }).catch(err => {
  
    message.channel.send(err)

  });

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['gtranslate'],
  permLevel: 0
};

exports.help = {
  name: 'translate',
  description: 'Translate some stuff.',
  usage: 'translate [word or sentence]'
}
