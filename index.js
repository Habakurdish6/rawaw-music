/**
 * Module Imports////revou
 */
const { Client, Collection } = require("discord.js"); //revou
const { readdirSync } = require("fs"); //revou
const { join } = require("path"); //revou
const { TOKEN, PREFIX } = require("./util/EvobotUtil"); //revou
//revou
const client = new Client({ disableMentions: "everyone" }); //revou
//revou
client.login("Nzc2MTAxMDAzMDI3MTUyODk2.X6v-Yg.1lrMjDjpCnqmJr9ONgnJWThRYLU"); ///revou
client.commands = new Collection(); ////reva
client.prefix = PREFIX;
("!");
client.queue = new Map(); ////revou
const cooldowns = new Collection();
const escapeRegex = str => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); ////revou

/**
 * Client Events /////revou
 */
client.on("ready", () => {
  //revou
  console.log(`${client.user.username} ready!`);
  client.user.setActivity(`${PREFIX}help and ${PREFIX}play`, { type: "LISTENING" }); //..//..//revou
});
client.on("warn", info => console.log(info)); ///revou
client.on("error", console.error); //revou
///revou
/**
 * Import all commands.////revoi
 */
const commandFiles = readdirSync(join(__dirname, "commands")).filter(file => file.endsWith(".js")); ///revou
for (const file of commandFiles) {
  const command = require(join(__dirname, "commands", `${file}`)); ///revou
  client.commands.set(command.name, command); //revou
} //revou
//revou
client.on("message", async message => {
  ///revou
  if (message.author.bot) return; //revou
  if (!message.guild) return; //revou
  ///revou
  const prefixRegex = new RegExp(`^(<@!?${client.user.id}>|${escapeRegex(PREFIX)})\\s*`); //\\revou
  if (!prefixRegex.test(message.content)) return; ////revou

  const [, matchedPrefix] = message.content.match(prefixRegex); ///revou
  ///revou///revou///
  const args = message.content
    .slice(matchedPrefix.length)
    .trim()
    .split(/ +/); //revou
  const commandName = args.shift().toLowerCase(); ////revou

  const command = ////revou
    client.commands.get(commandName) || /////revou
    client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName)); ////revou//////
  ///revou
  if (!command) return; /////revou

  if (!cooldowns.has(command.name)) {
    ////revou
    cooldowns.set(command.name, new Collection()); /////revou
  } ////revou

  const now = Date.now(); /////revou
  const timestamps = cooldowns.get(command.name); //////revou
  const cooldownAmount = (command.cooldown || 1) * 1000; ////revou
  ///revou
  if (timestamps.has(message.author.id)) {
    ////revou
    const expirationTime = timestamps.get(message.author.id) + cooldownAmount; ////revou

    if (now < expirationTime) {
      ////revou
      const timeLeft = (expirationTime - now) / 1000; ////revou
      return message.reply(
        ////reevou
        `please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.` ///revou
      );
    }
  }

  timestamps.set(message.author.id, now); ////revou
  setTimeout(() => timestamps.delete(message.author.id), cooldownAmount); /////revou

  try {
    /////revoi
    command.execute(message, args); ////revou
  } catch (error) {
    ////revou
    console.error(error); /////revou
    message.reply("There was an error executing that command.").catch(console.error); /////revou
  }
}); /////revou
