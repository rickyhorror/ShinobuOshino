const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {
    message.delete().catch(O_o => { });
    const randNeko = Math.floor(Math.random() * 867) + 1;
    function zeroPad(num, places) {
        var zero = places - num.toString().length + 1;
        return Array(+(zero > 0 && zero)).join("0") + num;
    }
    const nekoUrl = 'https://neko.rickyhorror.com/assets/nekos/' + zeroPad(randNeko, 5);
    message.channel.send({
        embed: {
            color: 10181046,
            title: 'Neko #' + randNeko + ' ,,,^.^,,,',
            image: { url: nekoUrl + '.png' }
        }
    })
}

module.exports.help = {
    name: "neko"
}