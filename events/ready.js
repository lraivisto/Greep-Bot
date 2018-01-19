const Discord = require('discord.js');
const client = new Discord.Client();
const settings = require('../settings.json');
const chalk = require('chalk');
const moment = require('moment');

module.exports = client => { // eslint-disable-line no-unused-vars

  client.user.setPresence({
  
    status: settings.status,
    game: {
      name: settings.game,
      type: 2
    }
  });
  console.log(``)
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Loaded every module successfully.`)
 
  console.log(`Online, ${client.guilds.size} servers, ${client.users.size} users.`);
 }