const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {
    message.delete().catch(O_o=>{});
    message.channel.send({embed: {
        color: 10181046,
        title: 'XDCC',
        description: 'https://xdcc.rickyhorror.com/'
        }
    })
}

module.exports.help = {
    name: "xdcc"
}