exports.run = (client, message, args) => {

message.channel.send("Please input")
  
 if (args.length > 0)
    {
      if (args[0] == "guild")
  
  console.log("Here are all the current guild names:");
  console.log("");
    client.guilds.forEach(guild => {

    console.log(guild.name);
  
  })
 console.log("");
  message.channel.send("Please view the console.")
}
  
    {
    if (args[0] == "limit")
    message.channel.send("Here is the limit")
    }
    
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'owsvs',
  description: 'This is a owner command, it will output important stuff to the console.',
  usage: 'owsvs'
}