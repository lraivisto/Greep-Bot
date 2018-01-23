const Discord = require('discord.js');
const notes = require('../data/notes.js');

exports.run = (client, message, args) => {
    var e = new Discord.RichEmbed()
    .setAuthor(`Greep - Note`,client.user.avatarURL)
    .setDescription(`Note added!`)
    .addField("Your added note:",`${args[0]}`)
    .setColor("#ECEDEE")
    .setFooter(message.createdAt)
    .setThumbnail(`https://u.got-no.life/7f701253.png`)
   
    message.channel.send("",{embed:e});
    var note = notes.data.find(note=>note.author===message.author);
    if(!note) notes.data.push({author:message.author,list:[args.join(" ")]});
    else note.list.push(args.join(" "));
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['to-do'],
  permLevel: 0
};

exports.help = {
  name: 'note',
  description: 'Add yourself a note - view your notes with `g"notes`',
  usage: 'note [input]'
}