const Discord = require('discord.js');
var dice =['1','2','3','4','5','6']
var dicer =dice[Math.floor(Math.random()*dice.length)];
exports.run = (client, message) => {
 
    var e = new Discord.RichEmbed()
   
    .setAuthor("Greep - Dice",client.user.avatarURL)
    .setDescription(`You have rolled a dice, the result is \`${dicer}\``)
    .setThumbnail('https://cdn.discordapp.com/attachments/398185503045976064/402869354779377664/White_Dice_PNG.png')
    .setColor('#ECEDEE')
    .setFooter("Requested by: "+message.author.username, message.author.avatarURL)

   
    message.channel.send("",{embed:e});
    
  
  
  };
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'dice',
  description: 'Role the dice.',
  usage: 'dice'
}
