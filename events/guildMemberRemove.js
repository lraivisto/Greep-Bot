module.exports = member => {
  const guild = member.guild;
  guild.defaultChannel.send(`Bye ${member.user.username} we will miss you!`);
};