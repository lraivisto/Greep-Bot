const Discord = require('discord.js');
const notes = require('../data/notes.js');

exports.run = (client, message, args) => {
    var outputNotes = "";
    var foundNotes = notes.data.find(note=>note.author===message.author);
    if (foundNotes == null) 
      outputNotes = "You haven't added any notes yet! :(";
    else
      for (var i in foundNotes.list)
        outputNotes += "**" + (parseInt(i) + 1) + "**: " + foundNotes.list[i] + "\n";
  
    var e = new Discord.RichEmbed()
    .setAuthor(`Greep - Notes`,client.user.avatarURL)
    .addField("Your notes:",outputNotes)
    .setColor("#ECEDEE")
    .setFooter(message.createdAt)
    .setThumbnail(`https://u.got-no.life/7f701253.png`)
    message.channel.send("",{embed:e});
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['to-dos'],
  permLevel: 0
};

exports.help = {
  name: 'notes',
  description: 'View your notes.',
  usage: 'notes'
}