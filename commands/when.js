const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) return errors.noPerms(message, "ADMINISTRATOR");
    let whenUser = message.author;
    message.channel.send('Soon™, ' + whenUser)
}

module.exports.help = {
    name: "when"
}