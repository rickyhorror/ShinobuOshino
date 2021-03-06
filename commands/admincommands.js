const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {
    message.delete().catch(O_o=>{});
    if (!message.member.hasPermission("ADMINISTRATOR")) return errors.noPerms(message, "ADMINISTRATOR");
    let adminCommandsUser = message.author;
    try {
      adminCommandsUser.send({embed: {
        color: 10181046,
        title: "Admin Command List",
        description: "List of usable commands by admins\n```Do not respond to PMs, I will not reply.```",
        author: {
          name: 'Shinobu Oshino',
          icon_url: 'https://i.imgur.com/ajdKcrD.png'
        },
        thumbail: {
          url: 'https://i.imgur.com/ajdKcrD.png'
        },
        fields: [{
            name: ".giverole",
            value: "EX: `.giverole @ricky horror Member`\nCan also use `.giverole help`",
            inline: true
          }
        ],
        timestamp: new Date(),
        footer: {
            icon_url: message.author.avatarURL,
            text: 'Message generated by ' + message.author.username
        }
      }
    });
  } catch (e) {
    console.log(e.stack);
    message.channel.send('Command list is only sent via DMs, and your DMs are locked, ' + commandsUser)
  }
}

module.exports.help = {
    name: "admincommands"
}