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
     .setThumbnail(`https://i.imgur.com/1rbQ9o8.png`)
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
  description: 'Translate the input you give to the bot.',
  usage: 'translate [word or sentence]'
}
