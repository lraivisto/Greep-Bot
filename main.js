const Discord = require('discord.js');
const client = new Discord.Client();
const settings = require('./settings.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
const db = require('quick.db');
require('./utilities/eventload')(client);

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./commands/', (err, files) => {
  if (err) console.error(err);
  log(`Loading a total of ${files.length} modules.`);
  files.forEach(f => {
    const props = require(`./commands/${f}`);
    log(`Module loaded: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});


client.on('guildCreate', guild => {
  const snek = require('snekfetch')

snek.post(`https://botsfordiscord.com/api/v1/bots/400709247115067392`)
  .set('Authorization', "985255e064d56a8c13f33d95de07f0167b8feeb537aea65ca27caae2336fd6d3af2a41e10e6823887b837045f1246738209179ff3bdcd331d3da5594741cb101")
  .send({
    server_count: client.guilds.size
  })
  .then(() => console.log('Someone has invited me to a guild, so I have updated discord bot stats.'))
  .catch(err => console.error(`Whoops something went wrong why trying to update server count over botsfordiscord.com : ${err.body}`));
  
});

client.on('guildDelete', guild => {
    const snek = require('snekfetch')

snek.post(`https://botsfordiscord.com/api/v1/bots/400709247115067392`)
  .set('Authorization', "985255e064d56a8c13f33d95de07f0167b8feeb537aea65ca27caae2336fd6d3af2a41e10e6823887b837045f1246738209179ff3bdcd331d3da5594741cb101")
  .send({
    server_count: client.guilds.size
  })
  .then(() => console.log('Someone has deleted me from a guild, so I have updated discord bot stats.'))
  .catch(err => console.error(`Whoops something went wrong why trying to update server count over botsfordiscord.com : ${err.body}`));
  
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./commands/${command}`)];
      const cmd = require(`./commands/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.elevation = message => {

  let permlvl = 0;
  const mod_role = message.guild.roles.find('name', settings.modrolename);
  if (mod_role && message.member.roles.has(mod_role.id)) permlvl = 2;
  const admin_role = message.guild.roles.find('name', settings.adminrolename);
  if (admin_role && message.member.roles.has(admin_role.id)) permlvl = 3;
  if (message.author.id === settings.ownerid) permlvl = 4;
  return permlvl;
};


var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(settings.token);