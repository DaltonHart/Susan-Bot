const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
  }
});

client.login("NDc4NjYzNzk3MjcyMzQ2NjI1.DlN-8w.RORafpFjssoSORQPCSykV_e5hAk");