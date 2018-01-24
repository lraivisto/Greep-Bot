const Discord = require('discord.js');
const notes = require('../data/notes.js');

exports.run = (client, message, args) => {
    if (args.length > 0)
    {
      if (args[0] == "del")
      {
        console.log(notes.data);
        var foundNotes = notes.data.find(note=>note.author===message.author);
        if (foundNotes == null) 
          outputNotes = "Couldn't find note " + args[1];
        else
        {
          var success = false;
          for (var i in foundNotes.list)
            if (i == args[1])
            {
              outputNotes = "Deleted note " + args[1];  
              delete notes.data.find(note=>note.author===message.author)[i];
              success = true; 
            }
          if (!success) outputNotes = "Couldn't find note " + args[1]; 
        }
        var e = new Discord.RichEmbed()
        .setAuthor(`Greep - Notes`,client.user.avatarURL)
        .addField("Note management",outputNotes)
        .setColor("#ECEDEE")
        .setFooter(message.createdAt)
        .setThumbnail(`https://u.got-no.life/7f701253.png`)
        message.channel.send("",{embed:e}); 
      }
      else if (args[0] == "add")
      {
        var e = new Discord.RichEmbed()
        .setAuthor(`Greep - Note`,client.user.avatarURL)
        .setDescription(`Note added!`)
        .addField("Your added note:",`${args[1]}`)
        .setColor("#ECEDEE")
        .setFooter(message.createdAt)
        .setThumbnail(`https://u.got-no.life/7f701253.png`)

        message.channel.send("",{embed:e});
        var note = notes.data.find(note=>note.author===message.author);
        if(!note) notes.data.push({author:message.author,list:[args[1]]});
        else note.list.push(args[1]);
      }
      else if (args[0] == "list")
      {
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
      else
      {
        var e = new Discord.RichEmbed()
        .setAuthor(`Greep - Notes`,client.user.avatarURL)
        .addField("Note management","Unrecognized command " + args[0])
        .setColor("#ECEDEE")
        .setFooter(message.createdAt)
        .setThumbnail(`https://u.got-no.life/7f701253.png`)
        message.channel.send("",{embed:e}); 
      }
    }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['to-dos'],
  permLevel: 0
};

exports.help = {
  name: 'notes',
  description: 'Add, view and delete your notes.',
  usage: 'notes [del | add | list] [param]'
}