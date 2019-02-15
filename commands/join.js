const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {
    message.delete().catch(O_o=>{});
    var role = message.guild.roles.find(role => role.name === "Member");
    message.member.addRole(role);
}

module.exports.help = {
    name: "join"
}