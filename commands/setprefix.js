const Discord = require('discord.js');

module.exports.run = async (client, message, args, prefix, player, db) => {
  let startembed = new Discord.MessageEmbed()
  .setTitle('Setprefix')
  .setDescription("This command is temporarily turned off due to maintenance. Try again soon? \n[Check out our Discord Server!](https://discord.com/invite/42vkvZMv7d)")
  .setColor("#7f7fff")
  .setTimestamp();
  message.channel.createMessage({embed:startembed});
}

module.exports.help = {
  name: "setprefix",
  desc: "setprefix",
}

/*const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (client, message, args, prefix, player, db) => {

  if(!message.member.hasPermission("manageGuild")) return message.reply("buddy you didn't meet the requirement to use this command. Missing Permission: ``MANAGE_SERVER``");
  if(!args[0] || args[0 == "help"]) return message.reply(`Usage: ${prefix}prefix <new prefix>`);
  
  let sEmbed = new Discord.MessageEmbed()
  .setColor("#7f7fff")
  .setTitle("New prefix set to")
  .setDescription(`${args[0]}`);
  
  db.collection("guilds").updateOne({_id: message.guild.id}, {$set: {prefix: args[0]}});

  message.channel.createMessage({embed:sEmbed});

}

module.exports.help = {
  name: "setprefix",
  aliases: ["sp"]
}*/