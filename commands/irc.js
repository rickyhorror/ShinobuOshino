const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {
    message.delete().catch(O_o=>{});
    message.channel.send({embed: {
        color: 10181046,
        title: 'IRC',
        description: '#rickyhorror@irc.rizon.net\nirc://irc.rizon.net/rickyhorror'
        }
    })
}

module.exports.help = {
    name: "irc"
}