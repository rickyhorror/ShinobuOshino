const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {
    message.delete().catch(O_o=>{});
    message.channel.send({embed: {
        color: 10181046,
        title: "RH's BluRay Collection",
        description: 'https://www.blu-ray.com/community/collection.php?u=422805'
        }
    })
}

module.exports.help = {
    name: "bluraycollection"
}