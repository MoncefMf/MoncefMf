const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("553307295560499211")
setInterval(function() {
channel.send(`Moncef I Love You`);
}, 30)
})

client.login(process.env.BOT_TOKEN);