module.exports = {
  name: "ping",
  cooldown: 10,
  description: "__`Show the bot's average ping`__",
  execute(message) {
    message.reply(`📈 Average ping to API: ${Math.round(message.client.ws.ping)} ms`).catch(console.error);
  }
};
