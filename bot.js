const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By batatis");


client.on("ready", () => {
let channel =     client.channels.get("549715937797079043")
setInterval(function() {
channel.send(`ابفى كريديت يا بوت برو بوت عطوني كريديت ابفى كريديت يا بوت برو بوت عطوني كريديت ابفى كريديت يا بوت برو بوت عطوني كريديت `);
}, 30)
})

client.login(process.env.BOT_TOKEN);
