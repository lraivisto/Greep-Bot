const urban = require('urban-dictionary')
const Discord = require('discord.js');
exports.run = (client, message) => {
  
    var definition = message.content.split(" ").slice(1).join(" ");

    urban.term(definition, function (error, entries, tags, sounds) {
  
  if (error) {
    
    message.channel.send(error.message)
  } 
  else {
    
    const embed = new Discord.RichEmbed()
    
       .setAuthor("Greep - Urban dictionary",client.user.avatarURL)
       .addField(`Searched: `,`*\`${entries[0].word}\`*`)
       .addField(`Definition: `,`*\`${entries[0].definition}\`*`)
       .addField(`Usage: `,`*\`${entries[0].example}\`*`)
       .setThumbnail(`https://i.imgur.com/Cvl1b4K.png`)
       .setFooter("Requested by: "+message.author.username, message.author.avatarURL)
       .setColor('#ECEDEE')
    
    message.channel.send(embed)
  
  }
    }
              )
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'urban',
  description: 'View something from the urban dictionary',
  usage: 'urban [word]'
}
