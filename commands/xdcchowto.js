const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {
    message.delete().catch(O_o=>{});
    message.channel.send({embed: {
        color: 10181046,
        title: 'How To Use XDCC',
        description: 'https://rickyhorror.com/#xdcctut'
        }
    })
}

module.exports.help = {
    name: "xdcchowto"
}