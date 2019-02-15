const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {
    let whenUser = message.author;
    message.channel.send("You're beyond help, " + whenUser)
}

module.exports.help = {
    name: "help"
}