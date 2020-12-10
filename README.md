[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/eritislami/evobot)

![logo](https://repository-images.githubusercontent.com/186841818/8aa95700-7730-11e9-84be-e80f28520325)

# 🤖 EvoBot (Discord Music Bot)
> EvoBot is a Discord Music Bot built with discord.js & uses Command Handler from [discordjs.guide](https://discordjs.guide)

## Requirements

1. Discord Bot Token **[Guide](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot)**
2. YouTube Data API v3 Key **[Guide](https://developers.google.com/youtube/v3/getting-started)**  
2.1 **(Optional)** Soundcloud Client ID **[Guide](https://github.com/zackradisic/node-soundcloud-downloader#client-id)**
3. Node.js v12.0.0 or newer

## 🚀 Getting Started

If deploying to Heroku make sure to create config variables

![heroku](https://i.imgur.com/iaoUePg.png?1)

```
git clone https://github.com/eritislami/evobot.git
cd evobot
npm install
```

After installation finishes you can use `node index.js` to start the bot.

## ⚙️ Configuration

Copy or Rename `config.json.example` to `config.json` and fill out the values:

⚠️ **Note: Never commit or share your token or api keys publicly** ⚠️

```json
{
  "TOKEN": "",
  "YOUTUBE_API_KEY": "",
  "SOUNDCLOUD_CLIENT_ID": "",
  "MAX_PLAYLIST_SIZE": 10,
  "PREFIX": "a!",
  "PRUNING": false,
  "STAY_TIME": 30
}
```

## 📝 Features & Commands

> Note: The default prefix is 'a!'

a! 🎶 Play music from YouTube via url

`/play https://www.youtube.com/watch?v=GLvohMXgcBo`

a! 🔎 Play music from YouTube via search query

`/play under the bridge red hot chili peppers`

a! 🎶 Play music from Soundcloud via url

`/play https://soundcloud.com/blackhorsebrigade/pearl-jam-alive`

a! 🔎 Search and select music to play

`/search Pearl Jam`

Reply with song number or numbers seperated by comma that you wish to play

Examples: `1` or `1,2,3`

a! 📃 Play youtube playlists via url

`/playlist https://www.youtube.com/watch?v=YlUKcNNmywk&list=PL5RNCwK3GIO13SR_o57bGJCEmqFAwq82c`

a! 🔎 Play youtube playlists via search query

`/playlist linkin park meteora`
a! Now Playing (a!np)
a! Queue system (a!queue, a!q)
a! Loop / Repeat (a!loop)
a! Shuffle (a!shuffle)
a! Volume control (a!volume, a!v)
a! Lyrics (a!lyrics, a!ly)
a! Pause (a!pause)
a! Resume (a!resume, a!r)
a! Skip (a!skip, a!s)
a! Skip to song # in queue (a!skipto, a!st)
a! Remove song # from queue (a!remove, a!rm)
a! Toggle pruning of bot messages (a!pruning)
a! Help (a!help, a!h)
a! Command Handler from [discordjs.guide](https://discordjs.guide/)
a! Media Controls via Reactions
![reactions](https://i.imgur.com/j7CevsH.png)

## 🤝 Contributing

1. [Fork the repository](https://github.com/eritislami/evobot/fork)
2. Clone your fork: `git clone https://github.com/your-username/evobot.git`
3. Create your feature branch: `git checkout -b my-new-feature`
4. Commit your changes: `git commit -am 'Add some feature'`
5. Push to the branch: `git push origin my-new-feature`
6. Submit a pull request

## 📝 Credits

[@iCrawl](https://github.com/iCrawl) For the queue system used in this application which was adapted from [@iCrawl/discord-music-bot](https://github.com/iCrawl/discord-music-bot)