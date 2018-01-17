exports.run = (client, message) => {
  
  const Discord = require('discord.js');
  
        if(message.author.id!='396003871434211339'){
                message.channel.send("Only the founder can execute this.") }
        else {
        const evalprefix = ";eval";
      var evalto = message.content.slice(evalprefix.length);
       var toeval = evalto.split(1).join(" ");
       
       var evaled = eval(toeval);
          if(evaled!=("undefined")){       message.channel.send(
           new Discord.RichEmbed()
           .setTitle(`Greep - Evaluate`)
           .setColor('#ECEDEE')
           .addField("**Input**\n",`\`\`\`javascript\n${toeval}\`\`\``)
           .addField("**Output**\n",`\`\`\`javascript\n ${evaled}\`\`\``)
          
       )}
          else{
            message.channel.send("error");
          }
        } 
        
  
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'eval',
  description: 'This is a command that only the bot founder can execute.',
  usage: 'eval [input]'
}