export default {
  header: {
    home: 'Home',
    kuriyamabot: 'KuriyamaBot',
    functions: 'Functions',
    commands: 'Commands',
    chatcommands: 'Chat Command',
    admins: 'Admin Functions',
    inlinequery: 'Inline Query',
    server: 'Server',
    kaorukobot: 'KaorukoBot',
    changelang: 'Change Language'
  },
  footer: {
    copyright: 'Copyright 2018. small-sunshine all rights reserved.'
  },
  sidebar: {
    home: 'Home',
    introduce: 'Introduce',
    bot: 'KuriyamaBot',
    functions: 'Functions',
    command: 'Command',
    chatCommand: 'Chat Command',
    admin: 'Admin Function',
    inline: 'Inline Query',
    env: 'Environment',
    server: 'Server',
    discord: 'Discord',
    kaorukoBot: 'KaorukoBot'
  },
  index: {
    hello: 'Hello. I am Mirai Kuriyama.',
    telegram: 'KuriyamaBot with Telegram',
    git: 'Explore to KuriyamaBot'
  },
  introduce: {
    content:
`### Hello. I am Mirai Kuriyama.

**This bot is a new bot made to replace any bot I used.**

Mirai Kuriyama is a character in the japanese manga Kyoukai no Kanata.
The copyright of the character is in the original author and Kyoto Animation corp.`,
    git: 'Explore to KuriyamaBot'
  },
  running: {
    env: 'KuriyamaBot work environment'
  },
  kaorukobot: {
    content:
`"ABABABABABABABABABABA"

Kaorukobot is a Discord version of KuriyamaBot and is currently under production.
Moeta Kaoruko is a character in Comic Girls.

The character's copyright is on the original author and Nexus.`
  },
  functions: {
    index: {
      command: {
        title: 'Command',
        content: 'Introducing KuriyamaBot\'s commands!'
      },
      chatCommand: {
        title: 'Chat Command',
        content: 'Introducing KuriyamaBot only Chat Command!'
      },
      admin: {
        title: 'Admin Function',
        content: 'Introducing the admin functions of KuriyamaBot!'
      },
      inline: {
        title: 'Inline Query',
        content: 'Introduces KuriyamaBot\'s Inline Query!'
      },
      go: 'Shortcuts!'
    },
    admins: {
      welcome: {
        header: 'Commands to set entry messages',
        content:
`
This is a command to set KuriyamaBot\'s welcome message.

It is a command that can not be used when chatting with bot 1: 1.

In groups and super groups, set the group's entry message. At this time, only the administrator of the group can use this command.


##### How to use

\`\`\`
/welcome Welcome to {roomid}, {userid}!
\`\`\`

##### Turn Off Message of Entry

\`\`\`
/welcome off
\`\`\`
`
      },
      leave: {
        header: 'Commands to set exit messages',
        content: 
`
This is a command to set KuriyamaBot\'s exit message.

It is a command that can not be used when chatting with bot 1: 1.

In groups and super groups, set the group's entry message. At this time, only the administrator of the group can use this command.

##### How to use

\`\`\`
/leave {userid} has left {roomid}.
\`\`\`

##### Turn Off Message of Leave

\`\`\`
/leave off
\`\`\`
`
      },
      lang: {
        header: 'Commands that can set the bot\'s language',
        content:
`
It is a command that can set the language of Kuriyama bot.

Set your own language when speaking 1: 1 with the bot.

In groups and super groups, set the language of the group. At this time, only the administrator of the group can write the command.

##### How to use

\`\`\`
/lang
\`\`\`
`
      }
    },
    chatcommands: {
      img: {
        header: 'Commands to search images mixed with chat',
        content: 
`
It is a command to search images in Google that can be mixed with chat.

##### How to use

\`\`\`
{img ReLU}
\`\`\`
`
      },
      search: {
        header: 'Commands to search Google to mix with chat',
        content: 
`
This is a searchable command to Google that can be mixed with chat.

##### How to use

\`\`\`
{search Krebs Circuit}
\`\`\`
`
      }
    },
    commands: {
      start: {
        header: 'Commands to start the bot',
        content: 
`
It is a command to write if you first encounter KuriyamaBot.

##### How to use

\`\`\`
/start
\`\`\`
`
      },
      help: {
        header: 'Commands to get help',
        content: 
`
You can see the help of commands in KuriyamaBot.

##### How to use

\`\`\`
/help
\`\`\`
`
      },
      img: {
        header: 'Commands to search for images',
        content: 
`
The command to search for images in Google.

##### How to use

\`\`\`
/img Event Horizon
\`\`\`
`
      },
      google: {
        header: 'Commands to search Google',
        content: 
`
This is a command that you can search on Google.

##### How to use

\`\`\`
/search Vue.js
\`\`\`
`
      },
      uptime: {
        header: 'Working time to command',
        content: 
`
You can check the time that KuriyamaBot was activated.

##### How to use

\`\`\`
/uptime
\`\`\`
`
      },
      lang: {
        header: 'A command to change the language to use',
        content: 
`
Change the language used by this bot.

##### How to use

\`\`\`
/lang
\`\`\`
`
      },
      me: {
        header: 'Commands to view your information',
        content: 
`
It is a command which can see information of oneself.

##### How to use

\`\`\`
/me
\`\`\`
`
      },
      whatanime: {
        header: 'Search for animation to screenshots',
        content: 
`
You can find out what animations are in the screenshots of the animation.
Use of the API [trace.moe](https://trace.moe/).

##### How to use

\`\`\`
/whatanime
\`\`\`
`
      },
      msginfo: {
        header: 'Message Debugging Commands',
        content: 
`
You can see the information of the message.

##### How to use

\`\`\`
/msginfo
\`\`\`
`
      },
      homepage: {
        header: 'Go to the homepage!',
        content: 
`
You can go to KuriyamaBot\'s homepage.

##### How to use

\`\`\`
/homepage
\`\`\`
`
      },
      weather: {
        header: 'Browse the weather!',
        content: 
`
You can find weather for your area.

##### How to use

\`\`\`
/weather
\`\`\`

\`\`\`
/weather Washington D.C.
\`\`\`
`
      }
    },
    inline: {
      img: {
        header: 'Commands to search for images',
        content: 
`
The command to search for images in Google.

##### How to use

\`\`\`
@kuriyamabot img Event Horizon
\`\`\`
`
      },
      search: {
        header: 'Commands to search Google',
        content: 
`
The command to search for keyword in Google.

##### How to use

\`\`\`
@kuriyamabot search Vue.js
\`\`\`
`
      },
      youtube: {
        header: 'Search commands on YouTube',
        content: 
`
This is a command to search for videos on YouTube.

##### How to use

\`\`\`
@kuriyamabot youtube Rainbow Six Siege
\`\`\`
`
      },
      help: {
        header: 'Commands to get help',
        content: 
`
This is a command to get help of Inline Command.

##### How to use

\`\`\`
@kuriyamabot help
\`\`\`
`
      },
      calculate: {
        header: 'Calculations in an instant?',
        content:
`
You can calculate the formula you want.


##### How to use

\`\`\`
/calc 1/sin(pi/2)
\`\`\`
`
      },
      translate: {
        header: 'A command to translate the desired message',
        content: 
`
You can translate any message or phrase you want.


##### How to use

\`\`\`
/tr Welcome|ko
\`\`\`
`
      }
    }
  },
  OG: {
    index: {
      siteName: 'KuriyamaBot',
      desc: 'KuriyamaBot homepage.'
    },
    introduce: {
      siteName: 'Introduce :: KuriyamaBot',
      desc: 'This page introduces KuriyamaBot.'
    },
    kaorukobot: {
      siteName: 'KaorukoBot :: KuriyamaBot',
      desc: 'This page introduces KuriyamaBot\'s discord transplantation version, Kaorukobot.'
    },
    running: {
      siteName: 'Running :: KuriyamaBot',
      desc: 'This page introduces KuriyamaBot\'s operating environment.'
    },
    functions: {
      index: {
        siteName: 'Functions :: KuriyamaBot',
        desc: 'This page introduces KuriyamaBot\'s features.'
      },
      admins: {
        siteName: 'Admins :: Functions :: KuriyamaBot',
        desc: 'This page introduces KuriyamaBot\'s admin function.'
      },
      chatcommands: {
        siteName: 'ChatCommands :: Functions :: KuriyamaBot',
        desc: 'This page introduces KuriyamaBot\'s Chat Command function.'
      },
      commands: {
        siteName: 'Commands :: Functions :: KuriyamaBot',
        desc: 'This page introduces KuriyamaBot\'s commands.'
      },
      inline: {
        siteName: 'Inline Queries :: Functions :: KuriyamaBot',
        desc: 'This page introduces KuriyamaBot\'s Inline Query function.'
      }
    }
  },
  not_found: {
    content: "There is no page.",
    button: "Home page!"
  }
}
