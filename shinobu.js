const botconfig = require("./botconfig.json");
const Discord = require('discord.js');
const fs = require("fs");
const bot = new Discord.Client();
const botActivitiesList = [
    'Kizumonogatari',
    'you fap to futas',
    '.commands'
];
bot.commands = new Discord.Collection();
fs.readdir("./commands/", (err, files) => {
    if (err) console.log(err);
    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if (jsfile.length <= 0) {
        console.log("Couldn't find commands.");
        return;
    }
    jsfile.forEach((f, i) => {
        let props = require(`./commands/${f}`);
        console.log(`${f} loaded!`);
        bot.commands.set(props.help.name, props);
    });
});
bot.on('ready', async () => {
    setInterval(() => {
        const activityIndex = Math.floor(Math.random() * (botActivitiesList.length));
        bot.user.setActivity(botActivitiesList[activityIndex], { type: 'WATCHING' });
    }, 10000);
    console.log(`Logged in as ${bot.user.tag}!`);
});
bot.on('message', message => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;
    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if (commandfile) commandfile.run(bot, message, args);
    if (message.content.includes('monster')) {
        message.channel.send({ embed: { color: 10181046, image: { url: 'http://i.imgur.com/wcgiF44.jpg' } } });
    }
    if (message.content == ('I am thou')) {
        message.channel.send('Thou art I...');
    }
});
bot.login(botconfig.token);