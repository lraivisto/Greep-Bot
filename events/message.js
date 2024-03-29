const settings = require('../settings.json');

module.exports = message => {

  const client = message.client;
  
  if (message.author.bot) return;
  if (!message.content.startsWith(settings.prefix)) return;
  
  const command = message.content.split(' ')[0].slice(settings.prefix.length);
  const params = message.content.split(' ').slice(1);
  const perms = client.elevation(message);
  
  let cmd;
  
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  
  }
  
    if(message.channel.type==="text"&&!message.channel.permissionsFor(message.guild.me).has('SEND_MESSAGES'))
    
    {
    
      message.author.send("It appears that I don't have permission to talk in the server/channel you tried to talk to me, please change it or notify an admin.");
      
      return;
    
    }
  
  if (cmd) {
  
    if (perms < cmd.conf.permLevel) return;
    
    cmd.run(client, message, params, perms);
  
  }


};