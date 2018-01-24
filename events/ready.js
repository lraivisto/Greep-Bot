const Discord = require('discord.js');
const client = new Discord.Client();
const settings = require('../settings.json');
const chalk = require('chalk');
const moment = require('moment');

module.exports = client => { // eslint-disable-line no-unused-vars

const snekfetch = require('snekfetch')

setInterval(() => {
  snekfetch.post(`https://discordbots.org/api/bots/stats`)
    .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQwMDcwOTI0NzExNTA2NzM5MiIsImJvdCI6dHJ1ZSwiaWF0IjoxNTE2ODE1NjA2fQ.e2dFEHAJPIhBVvzSAt6y4MJSf0QAz42fvL-bockEvYA')
    .send({ server_count: client.guilds.size })
    .then(() => console.log('Updated discordbots.org stats.'))
    .catch(err => console.error(`Whoops something went wrong: ${err.body}`));
}, 3600000)
  
const snek = require('snekfetch')

snek.post(`https://botsfordiscord.com/api/v1/bots/400709247115067392`)
  .set('Authorization', "985255e064d56a8c13f33d95de07f0167b8feeb537aea65ca27caae2336fd6d3af2a41e10e6823887b837045f1246738209179ff3bdcd331d3da5594741cb101")
  .send({
    server_count: client.guilds.size
  })
  .then(() => console.log('The bot has restarted, so I have updated the discord bot stats.'))
  .catch(err => console.error(`Whoops something went wrong why trying to update server count over botsfordiscord.com : ${err.body}`));
  
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