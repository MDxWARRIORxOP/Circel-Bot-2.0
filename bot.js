
                (async()=>{
                let process = require('process');
                process.on('uncaughtException', function (err) {
                    console.log(`𝕖𝕣𝕣𝕠𝕣❕`);
                    console.log(err);
                  });
                  let Discord = require("discord.js")
let Database  = require("easy-json-database")
let { MessageEmbed, MessageButton, MessageActionRow, Intents, Permissions, MessageSelectMenu }= require("discord.js")
let logs = require("discord-logs")
let dootabase = new Database("./database.json")
const smartestchatbot = require('smartestchatbot');
    const client = new smartestchatbot.Client();
    
const akinator = require("discord.js-akinator");
const os = require("os-utils");
const lyricsFinder = require('lyrics-finder');
let Invite = require("discord-inviter-tracker")
let URL = require('url')
const ticket = require('tickets-discord');
const { start, login } = require('tickets-discord');
const ms = require("ms")
let DIG = require("discord-image-generation")
let canvas = require("discord-canvas") 
let https = require("https")
const { DiscordTogether } = require('discord-together');
const Captcha = require("@haileybot/captcha-generator");
const AntiSpam = require("discord-anti-spam");
                    require('events').EventEmitter.defaultMaxListeners = 50;
let fs = require('fs');
                    const devMode = typeof __E_IS_DEV !== "undefined" && __E_IS_DEV;
                    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
                    const s4d = {
                        Discord,
                        database: new Database(`./database.json`),
fire:null,
                        joiningMember:null,
                        reply:null,
                        tokenInvalid:false,
                        tokenError: null,
                        player:null,
                        manager:null,
                        Inviter:null,
                        message:null,
                        notifer:null,
                        checkMessageExists() {
                            if (!s4d.client) throw new Error('You cannot perform message operations without a Discord.js client')
                            if (!s4d.client.readyTimestamp) throw new Error('You cannot perform message operations while the bot is not connected to the Discord API')
                        }
                    };
                    s4d.client = new s4d.Discord.Client({
                    intents: [Object.values(s4d.Discord.Intents.FLAGS).reduce((acc, p) => acc | p, 0)],
                    partials: ["REACTION", "CHANNEL"]
                    });
                    s4d.client.on('ready', () => {
                        console.log(s4d.client.user.tag + " is alive!")
                    })
                    logs(s4d.client);
s4d.Inviter = new Invite(s4d.client)
s4d.Inviter.on("WARN",function(e){
        console.log('WARN: '+e)
    })
s4d.client.discordTogether = new DiscordTogether(s4d.client);         
                    var arguments2, command, beg_random_coins, member_xp, mode, member_level, image, list, member, Song_Name, gamemode, Song_Author;

function colourRandom() {
  var num = Math.floor(Math.random() * Math.pow(2, 24));
  return '#' + ('00000' + num.toString(16)).substr(-6);
}

function mathRandomInt(a, b) {
  if (a > b) {
    // Swap a and b to ensure a is smaller.
    var c = a;
    a = b;
    b = c;
  }
  return Math.floor(Math.random() * (b - a + 1) + a);
}

function listsGetRandomItem(list, remove) {
  var x = Math.floor(Math.random() * list.length);
  if (remove) {
    return list.splice(x, 1)[0];
  } else {
    return list[x];
  }
}


await s4d.client.login((process.env.TOKEN)).catch((e) => {
        s4d.tokenInvalid = true;
        s4d.tokenError = e;
        if (e.toString().toLowerCase().includes("token")) {
            console.log("An invalid token was provided!")
        } else {
            console.log("Intents are not turned on!")
        }
    });

s4d.client.on('ready', async () => {
  s4d.client.user.setPresence({status: "online",activities:[{name:'to my users :)',type:"LISTENING"}]});

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  if ((((s4dmessage.content).toLowerCase()) || '').startsWith('cb!invites' || '')) {
    s4dmessage.reply({content:String((['You currently have `',await s4d.Inviter.getInvites((s4dmessage.author)),'` invites'].join(''))), allowedMentions: {
            repliedUser: true
        }});
  }

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  if (!((s4dmessage.author).bot)) {
    if (!s4d.database.has(String((['xp-memberid-',(s4dmessage.author).id,'-serverid-',(s4dmessage.guild).id].join(''))))) {
      s4d.database.set(String((['xp-memberid-',(s4dmessage.author).id,'-serverid-',(s4dmessage.guild).id].join(''))), 1);
      return
    }
    s4d.database.add(String((['xp-memberid-',(s4dmessage.author).id,'-serverid-',(s4dmessage.guild).id].join(''))), parseInt(1));
    member_xp = s4d.database.get(String((['levels-memberid-',(s4dmessage.author).id,'-serverid-',(s4dmessage.guild).id].join(''))));
    member_level = s4d.database.get(String((['levels-memberid-',(s4dmessage.author).id,'-serverid-',(s4dmessage.guild).id].join(''))));
    if (member_xp == 100 && member_level == 0) {
      s4d.database.set(String((['levels-memberid-',(s4dmessage.author).id,'-serverid-',(s4dmessage.guild).id].join(''))), 1);
      s4d.database.set(String((['xp-memberid-',(s4dmessage.author).id,'-serverid-',(s4dmessage.guild).id].join(''))), 0);
    }
    if (member_xp == 155 && member_level == 1) {
      s4d.database.set(String((['levels-memberid-',(s4dmessage.author).id,'-serverid-',(s4dmessage.guild).id].join(''))), 2);
      s4d.database.set(String((['xp-memberid-',(s4dmessage.author).id,'-serverid-',(s4dmessage.guild).id].join(''))), 0);
    }
    if (member_xp == 220 && member_level == 2) {
      s4d.database.set(String((['levels-memberid-',(s4dmessage.author).id,'-serverid-',(s4dmessage.guild).id].join(''))), 3);
      s4d.database.set(String((['xp-memberid-',(s4dmessage.author).id,'-serverid-',(s4dmessage.guild).id].join(''))), 0);
    }
    if (member_xp == 295 && member_level == 3) {
      s4d.database.set(String((['levels-memberid-',(s4dmessage.author).id,'-serverid-',(s4dmessage.guild).id].join(''))), 4);
      s4d.database.set(String((['xp-memberid-',(s4dmessage.author).id,'-serverid-',(s4dmessage.guild).id].join(''))), 0);
    }
    if (member_xp == 380 && member_level == 4) {
      s4d.database.set(String((['levels-memberid-',(s4dmessage.author).id,'-serverid-',(s4dmessage.guild).id].join(''))), 5);
      s4d.database.set(String((['xp-memberid-',(s4dmessage.author).id,'-serverid-',(s4dmessage.guild).id].join(''))), 0);
    }
    if (member_xp == 475 && member_level == 4) {
      s4d.database.set(String((['levels-memberid-',(s4dmessage.author).id,'-serverid-',(s4dmessage.guild).id].join(''))), 5);
      s4d.database.set(String((['xp-memberid-',(s4dmessage.author).id,'-serverid-',(s4dmessage.guild).id].join(''))), 0);
    }
    if (member_xp == 580 && member_level == 5) {
      s4d.database.set(String((['levels-memberid-',(s4dmessage.author).id,'-serverid-',(s4dmessage.guild).id].join(''))), 6);
      s4d.database.set(String((['xp-memberid-',(s4dmessage.author).id,'-serverid-',(s4dmessage.guild).id].join(''))), 0);
    }
    if (member_xp == 695 && member_level == 6) {
      s4d.database.set(String((['levels-memberid-',(s4dmessage.author).id,'-serverid-',(s4dmessage.guild).id].join(''))), 7);
      s4d.database.set(String((['xp-memberid-',(s4dmessage.author).id,'-serverid-',(s4dmessage.guild).id].join(''))), 0);
    }
    if (member_xp == 820 && member_level == 7) {
      s4d.database.set(String((['levels-memberid-',(s4dmessage.author).id,'-serverid-',(s4dmessage.guild).id].join(''))), 8);
      s4d.database.set(String((['xp-memberid-',(s4dmessage.author).id,'-serverid-',(s4dmessage.guild).id].join(''))), 0);
    }
    if (member_xp == 955 && member_level == 8) {
      s4d.database.set(String((['levels-memberid-',(s4dmessage.author).id,'-serverid-',(s4dmessage.guild).id].join(''))), 9);
      s4d.database.set(String((['xp-memberid-',(s4dmessage.author).id,'-serverid-',(s4dmessage.guild).id].join(''))), 0);
    }
    if (member_xp == 1100 && member_level == 9) {
      s4d.database.set(String((['levels-memberid-',(s4dmessage.author).id,'-serverid-',(s4dmessage.guild).id].join(''))), 10);
      s4d.database.set(String((['xp-memberid-',(s4dmessage.author).id,'-serverid-',(s4dmessage.guild).id].join(''))), 0);
    }
    if (member_xp == 1255 && member_level == 10) {
      s4d.database.set(String((['levels-memberid-',(s4dmessage.author).id,'-serverid-',(s4dmessage.guild).id].join(''))), 11);
      s4d.database.set(String((['xp-memberid-',(s4dmessage.author).id,'-serverid-',(s4dmessage.guild).id].join(''))), 0);
    }
  }

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  if (s4d.database.has(String(('chatmode-' + String(s4dmessage.member.id)))) && !(((s4dmessage.content) || '').startsWith('cb!' || ''))) {
    client.chat({message:s4dmessage.content, name:'Circel Bot', owner:"scratch-for-discord-469-dev-ahqminessyt", user: 849690256945184828, language:"en"}).then(reply => {
            s4dmessage.channel.send(String(reply));
            });}

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  arguments2 = (s4dmessage.content).split(' ');
  command = arguments2.splice(0, 1)[0];
  if (command == 'cb!chatmode') {
    mode = arguments2.splice(0, 1)[0];
    if (!mode) {
      s4dmessage.channel.send({content:String('You needa say `on` or `off` lmao')});
      return
    }
    if (mode.toLowerCase() == 'on') {
      if (s4d.database.has(String(('chatmode-' + String(s4dmessage.member.id))))) {
        s4dmessage.channel.send({content:String('Chatmode is already on!')});
        return
      }
      s4d.database.set(String(('chatmode-' + String(s4dmessage.member.id))), true);
      s4dmessage.channel.send({content:String('Chatmode enabled. ~~imagine chatting with a bot~~')});
    } else if (mode.toLowerCase() == 'off') {
      if (!s4d.database.has(String(('chatmode-' + String(s4dmessage.member.id))))) {
        s4dmessage.channel.send({content:String('Cha~~d~~t mode is already off xD')});
        return
      }
      s4d.database.delete(String(('chatmode-' + String(s4dmessage.member.id))));
      s4dmessage.channel.send({content:String('Chatmode off, it was nice talking to you :)')});
    } else {
      s4dmessage.channel.send({content:String('you needa say `on` or `off` to turn it on or off lmao')});
    }
  }

});

//ticketv3.0.0 login code
ticket.start(s4d.client, (process.env.MONGO), true)
//ahq mod api

        const deepai = require('deepai');
        deepai.setApiKey(process.env.ANTINSFW);
        async function nsfw(test, reply) {
    if (test) {
        var gifFrames = require('gif-frames');
        gifFrames({ url: test.url, frames: "0-10" }).then(async function (frameData) {
    frameData.forEach(async frame => {
       await deepai.callStandardApi("nsfw-detector", {
            image: frame.getImage(),
    }).then((resp) => {
        console.log(resp.output.nsfw_score)
    if (resp.output.nsfw_score > 0.2) {
        reply.reply(`No bad image
Timeout for 1 hr`).then((m) => {
            reply.delete()
           reply.member.timeout(60 * 60 * 1000, "NSFW image").catch(e => m.edit("Error in muting!"))
        });
    }
    });
    });
}).catch(async () => {
            await deepai.callStandardApi("nsfw-detector", {
            image: test.url,
    }).then((resp) => {
        console.log(resp.output.nsfw_score)
    if (resp.output.nsfw_score > 0.2) {
        reply.reply(`No bad image
Timeout for 1 hr`).then((m) => {
            reply.delete()
           reply.member.timeout(60 * 60 * 1000, "NSFW image").catch(e => m.edit("Error in muting!"))
        });
    }
    });
});
    }
}
    s4d.client.on("messageCreate", async(m) => m.attachments.forEach(a => nsfw(a, m)));

    const {AntiRaid} = require('discord-antiraid');
    const antiraid = new AntiRaid(s4d.client, {
        rateLimit: 3,
        time: 10000,
        ban: true,
        kick: false,
        unrank: true,
        exemptMembers: [],
        exemptRoles: [],
        exemptEvent: [],
        reason: "antiraid"
    });
    const antiSpam = new AntiSpam({
        warnThreshold: 3,
        muteThreshold: 4,
        kickThreshold: 10,
        banThreshold: 20,
        maxInterval: 5000,
        warnMessage: "{@user}, Please stop spamming.",
        kickMessage: "**{user_tag}** has been kicked for spamming.",
        muteMessage: "**{user_tag}** has been muted for spamming.",
        banMessage: "**{user_tag}** has been banned for spamming.",
        maxDuplicatesWarning: 3,
        maxDuplicatesKick: 8,
        maxDuplicatesBan: 9,
        maxDuplicatesMute: 5,
        ignoredPermissions: [],
        ignoreBots: false,
        verbose: true,
        ignoredMembers: ["849690256945184828", "478868428728434694", "691111067807514685", "706536914408177726"],
        muteRoleName: "Muted",
        unMuteTime: 0,
        removeMessages: true,
        modLogsEnabled: true,
        modLogsChannelName: "mod-logs-auto",
        modLogsMode: "embed",
    });
    s4d.client.on("messageCreate", async(s4dm, m) => {
        m = s4dm;
        antiSpam.message(s4dm)
        if ((m.mentions.members.size || 0) + (m.mentions.roles.size || 0) > 3) {
            m.reply(`Timeout for 10mins
Reason: Mass Mention`).then(() => {
               m.member.timeout(10 * 60 * 1000, "Mass Role Mention").catch(e => console.log(e))
                m.guild.channels.cache.find(c => c.name == "mod-logs-auto").send({
                   embeds: [new MessageEmbed()
                           .setTitle("Mute Log")
                           .setDescription(`${m.member.user} was muted for mass mention`)
                           .setColor("RED")]
                });
                m.member.send({
                   embeds: [new MessageEmbed()
                           .setTitle("Mute Log")
                           .setDescription(`You were muted in ${m.guild.name} for mass mention`)
                           .setColor("RED")]
                });
            });
        }
    });

s4d.client.on('messageCreate', async (s4dmessage) => {
  // This will set your ticket channel to mentioned channel
  if (((s4dmessage.content) || '').startsWith('cb!ticket' || '')) {
    try{
      ticket.setup(s4dmessage, s4dmessage.mentions.channels.first().id);s4dmessage.channel.send({content:String((['I have set the ticket channel to ','<#',s4dmessage.mentions.channels.first(),'>'].join('')))});

    }catch(err){
      s4dmessage.channel.send({content:String('You needa mention a channel lol')});

    };
  }
  if (((s4dmessage.content) || '').startsWith('cb!close' || '')) {
    ticket.close(s4dmessage.channel);s4dmessage.channel.send({content:String('okay, closed the ticket')});
  }
  if (((s4dmessage.content) || '').startsWith('cb!archive' || '')) {
    s4dmessage.channel.send({content:String('Nice, I archived the ticket')});
    ticket.archive(s4dmessage.channel);}
  if (((s4dmessage.content) || '').startsWith('cb!unarchive' || '')) {
    s4dmessage.channel.send({content:String('okay, unarchived the ticket')});
    ticket.unarchive(s4dmessage.channel);}

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  if (!((s4dmessage.author).bot)) {
    arguments2 = (s4dmessage.content).split(' ');
    command = arguments2.splice(0, 1)[0];
    if (command == 'cb!aki') {
      command = arguments2.splice(0, 1)[0];
      if (command == 'c') {
        gamemode = 'character';
      } else if (command == 'a') {
        gamemode = 'animal';
      } else if (command == 'o') {
        gamemode = 'object';
      } else {
        gamemode = 'character';
      }
      akinator(s4dmessage, {
              language: "en",
              childMode: true,
              gameType: gamemode,
              useButtons: true
      })}
  }

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  arguments2 = (s4dmessage.content).split(' ');
  command = arguments2.splice(0, 1)[0];
  if (command == 'cb!clear') {
    try{
      if ((s4dmessage.member).permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) {
        if ((arguments2 % 2 == 0 || arguments2 % 2 == 1) && arguments2 <= 99 && arguments2 >= 1) {
          (s4dmessage.channel).bulkDelete((arguments2|1));
        } else {
          s4dmessage.channel.send({content:String('Ayo you need to enter a number between "1 to 99", get good, be a robot')});
        }
      } else {
        s4dmessage.channel.send({content:String('You dont have the powers to clear msgs lol')});
      }

    }catch(err){
      s4dmessage.reply({content:String('A unknown error has occurred, please try again later'), allowedMentions: {
              repliedUser: true
          }});

    };
  }

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  if ((s4dmessage.content) == '!ping') {
    s4dmessage.reply({content:String((['pong! ','bot ping: ',s4d.client.ws.ping].join(''))), allowedMentions: {
            repliedUser: true
        }});
  }

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  if ((((s4dmessage.content).toLowerCase()) || '').startsWith('cb!verify' || '')) {
    try{
      let captcha = new Captcha()
      s4d.client.channels.cache.find((channel) => channel.name === 'verification').send({files:[(new Discord.MessageAttachment(captcha.JPEGStream, "captcha.jpeg") )]});
      (s4dmessage.channel).send(String('type the characters you see in the captcha img below to get verified')).then(() => { (s4dmessage.channel).awaitMessages({filter:(m) => m.author.id === (s4dmessage.member).id,  time: (1*60*1000), max: 1 }).then(async (collected) => { s4d.reply = collected.first().content;
       s4d.message = collected.first();
         if ((s4d.reply).toUpperCase() == (captcha.value)) {
          s4dmessage.channel.send({content:String('**LETS GO** The code you said turned out to be correct! now you\'ll get access to other channels in 5 secs, thank me later')});
          await delay(Number(5)*1000);
          (s4dmessage.author).send({content:String((['you got verified in **',s4dmessage.guild,'** (',(s4dmessage.guild).iconURL({ dynamic: true }),')'].join('')))});
          (s4dmessage.member).roles.add(((s4dmessage.guild).roles.cache.find((role) => role.name === 'Verified')));
          await delay(Number(1)*1000);
          (s4dmessage.channel).bulkDelete((4|1));
        } else {
          s4dmessage.channel.send({content:String('Ayo the code you entered dosent seem to be correct lmao, do the command again to get verified')});
          await delay(Number(2)*1000);
          (s4dmessage.channel).bulkDelete((4|1));
        }

       s4d.reply = null; }).catch(async (e) => { console.error(e);   s4dmessage.channel.send({content:String('Ayo you need to reply lol, do the command again to get verified')});
        await delay(Number(2)*1000);
        (s4dmessage.channel).bulkDelete((3|1));
       });
      })

    }catch(err){
      s4dmessage.reply({content:String('A unknown error has occurred, please try again later'), allowedMentions: {
              repliedUser: true
          }});

    };
  }

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  if ((((s4dmessage.content).toLowerCase()) || '').startsWith('cb!kick' || '')) {
    try{
      if ((s4dmessage.member).permissions.has(Permissions.FLAGS.KICK_MEMBERS)) {
        if ((((s4dmessage.guild).members.cache.get('936221662515462206') || await (s4dmessage.guild).members.fetch('936221662515462206'))).permissions.has(Permissions.FLAGS.KICK_MEMBERS)) {
          if ((s4dmessage.mentions.members.first().user) != null) {
            (s4dmessage.mentions.members.first()).kick({ reason: ('Got Kicked By: ' + String(s4dmessage.author)) });
            (s4dmessage.mentions.members.first()).send({content:String((['You just got kicked from **',(s4dmessage.guild || {}).name,'** Man got rekt '].join('')))});
            s4dmessage.channel.send({content:String('Member Has Been Kicked. Nice')});
            s4dmessage.react('👍');} else {
            s4dmessage.channel.send({content:String('Bruh you hafta "@" mention a person, lmao')});
          }
        } else {
          s4dmessage.channel.send({content:String('Bruh I dont have the perms to kick a member, lmao.')});
        }
      } else {
        s4dmessage.channel.send({content:String('Bruh you dont have the perms to kick a member, lmao.')});
      }

    }catch(err){
      s4dmessage.reply({content:String('A unknown error has occurred, please try again later'), allowedMentions: {
              repliedUser: true
          }});

    };
  }

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  if ((((s4dmessage.content).toLowerCase()) || '').startsWith('cb!ban' || '')) {
    try{
      if ((s4dmessage.member).permissions.has(Permissions.FLAGS.BAN_MEMBERS)) {
        if ((((s4dmessage.guild).members.cache.get('936221662515462206') || await (s4dmessage.guild).members.fetch('936221662515462206'))).permissions.has(Permissions.FLAGS.CREATE_INSTANT_INVITE)) {
          if ((s4dmessage.mentions.members.first().user) != null) {
            (s4dmessage.mentions.members.first()).ban({ reason: ('Got Banned By: ' + String(s4dmessage.author)) });
            s4dmessage.reply({content:String('le member has been banned/he got rekt'), allowedMentions: {
                    repliedUser: true
                }});
            s4dmessage.react('👍');(s4dmessage.mentions.members.first()).send({content:String((['you got banned in **',(s4dmessage.guild || {}).name,'** man got owned'].join('')))});
          } else {
            s4dmessage.channel.send({content:String('Ayo you hafta `@` mention a person lol')});
          }
        } else {
          s4dmessage.channel.send({content:String('I dont have the powers to do this lmao')});
        }
      } else {
        s4dmessage.channel.send({content:String('You dont have the powers to do this lmao')});
      }

    }catch(err){
      s4dmessage.reply({content:String('A unknown error has occurred, please try again later'), allowedMentions: {
              repliedUser: true
          }});

    };
  }

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  arguments2 = (s4dmessage.content).split(' ');
  command = arguments2.splice(0, 1)[0];
  if (command == 'cb!warn') {
    try{
      if ((s4dmessage.member).permissions.has(Permissions.FLAGS.KICK_MEMBERS)) {
        if ((((s4dmessage.guild).members.cache.get('936221662515462206') || await (s4dmessage.guild).members.fetch('936221662515462206'))).permissions.has(Permissions.FLAGS.KICK_MEMBERS)) {
          if (!(s4dmessage.mentions.members.first()).permissions.has(Permissions.FLAGS.ADMINISTRATOR)) {
            if ((s4dmessage.mentions.members.first().user) != null) {
              if (!s4d.database.has(String(s4d.database.get(String((['warns-',(s4dmessage.mentions.members.first().user).id,'-',(s4dmessage.guild || {}).id].join(''))))))) {
                s4d.database.set(String((['warns-',(s4dmessage.mentions.members.first().user).id,'-',(s4dmessage.guild || {}).id].join(''))), 1);
                s4dmessage.reply({content:String('They got ~~owned~~ warned lmao,'), allowedMentions: {
                        repliedUser: true
                    }});
                return
              }
              s4d.database.add(String((['warns-',(s4dmessage.mentions.members.first().user).id,'-',(s4dmessage.guild || {}).id].join(''))), parseInt(1));
              s4dmessage.reply({content:String('They got ~~owned~~ warned lmao,'), allowedMentions: {
                      repliedUser: true
                  }});
            } else {
              s4dmessage.reply({content:String('You needa `@` mention a user xD'), allowedMentions: {
                      repliedUser: true
                  }});
            }
          } else {
            s4dmessage.reply({content:String('Ayo that guy is a admin lol'), allowedMentions: {
                    repliedUser: true
                }});
          }
        } else {
          s4dmessage.reply({content:String('brug i dont have the powers to do this lmao'), allowedMentions: {
                  repliedUser: true
              }});
        }
      } else {
        s4dmessage.reply({content:String('Bro you aint got the owers to do this'), allowedMentions: {
                repliedUser: true
            }});
      }

    }catch(err){
      s4dmessage.reply({content:String('A unknown error has occurred, please try again later'), allowedMentions: {
              repliedUser: true
          }});

    };
  }

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  arguments2 = (s4dmessage.content).split(' ');
  command = arguments2.splice(0, 1)[0];
  if (command == 'cb!clearwarns') {
    try{
      if ((s4dmessage.member).permissions.has(Permissions.FLAGS.KICK_MEMBERS)) {
        if ((((s4dmessage.guild).members.cache.get('936221662515462206') || await (s4dmessage.guild).members.fetch('936221662515462206'))).permissions.has(Permissions.FLAGS.KICK_MEMBERS)) {
          if (!(s4dmessage.mentions.members.first()).permissions.has(Permissions.FLAGS.ADMINISTRATOR)) {
            if ((s4dmessage.mentions.members.first().user) != null) {
              if (s4d.database.get(String((['warns-',(s4dmessage.mentions.members.first().user).id,'-',(s4dmessage.guild || {}).id].join('')))) >= 1) {
                s4d.database.set(String(s4d.database.get(String((['warns-',(s4dmessage.mentions.members.first().user).id,'-',(s4dmessage.guild || {}).id].join(''))))), 0);
                s4dmessage.reply({content:String('His/Her warns were cleared lol'), allowedMentions: {
                        repliedUser: true
                    }});
              } else {
                s4dmessage.reply({content:String('they already has 0 warns xD'), allowedMentions: {
                        repliedUser: true
                    }});
              }
            } else {
              s4dmessage.reply({content:String('You needa `@` mention a user xD'), allowedMentions: {
                      repliedUser: true
                  }});
            }
          } else {
            s4dmessage.reply({content:String('that guy is an admin lmao'), allowedMentions: {
                    repliedUser: true
                }});
          }
        } else {
          s4dmessage.reply({content:String('Ayo i dont have the perms to do this lmao'), allowedMentions: {
                  repliedUser: true
              }});
        }
      } else {
        s4dmessage.reply({content:String('You dont have the perms to do this lmfao'), allowedMentions: {
                repliedUser: true
            }});
      }

    }catch(err){
      s4dmessage.reply({content:String('A unknown error has occurred, please try again later'), allowedMentions: {
              repliedUser: true
          }});

    };
  }

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  arguments2 = (s4dmessage.content).split(' ');
  command = arguments2.splice(0, 1)[0];
  if (command == 'cb!image') {
    try{
      image = arguments2.splice(0, 1)[0];
      member = arguments2.splice(0, 1)[0];
      if (member == null) {
        if (image == 'triggered') {
          (s4dmessage.channel).send({files:[(new Discord.MessageAttachment((await new DIG.Triggered().getImage(((s4dmessage.author).displayAvatarURL({format:"png"})))), "image.gif"))]});
        } else if (image == 'gay') {
          (s4dmessage.channel).send({files:[(new Discord.MessageAttachment((await new DIG.Gay().getImage(((s4dmessage.author).displayAvatarURL({format:"png"})))), "image.png"))]});
        } else if (image == 'invert') {
          (s4dmessage.channel).send({files:[(new Discord.MessageAttachment((await new DIG.Invert().getImage(((s4dmessage.author).displayAvatarURL({format:"png"})))), "image.png"))]});
        } else if (image == 'greyscale') {
          (s4dmessage.channel).send({files:[(new Discord.MessageAttachment((await new DIG.Greyscale().getImage(((s4dmessage.author).displayAvatarURL({format:"png"})))), "image.png"))]});
        } else if (image == 'affect') {
          (s4dmessage.channel).send({files:[(new Discord.MessageAttachment((await new DIG.Affect().getImage(((s4dmessage.author).displayAvatarURL({format:"png"})))), "image.png"))]});
        } else if (image == 'ad') {
          (s4dmessage.channel).send({files:[(new Discord.MessageAttachment((await new DIG.Ad().getImage(((s4dmessage.author).displayAvatarURL({format:"png"})))), "image.png"))]});
        } else if (image == 'sepia') {
          (s4dmessage.channel).send({files:[(new Discord.MessageAttachment((await new DIG.Sepia().getImage(((s4dmessage.author).displayAvatarURL({format:"png"})))), "image.png"))]});
        } else if (image == 'beautiful') {
          (s4dmessage.channel).send({files:[(new Discord.MessageAttachment((await new DIG.Beautiful().getImage(((s4dmessage.author).displayAvatarURL({format:"png"})))), "image.png"))]});
        } else if (image == 'bobross') {
          (s4dmessage.channel).send({files:[(new Discord.MessageAttachment((await new DIG.Bobross().getImage(((s4dmessage.author).displayAvatarURL({format:"png"})))), "image.png"))]});
        } else if (image == 'confused-stonk') {
          (s4dmessage.channel).send({files:[(new Discord.MessageAttachment((await new DIG.ConfusedStonk().getImage(((s4dmessage.author).displayAvatarURL({format:"png"})))), "image.png"))]});
        } else if (image == 'delete') {
          (s4dmessage.channel).send({files:[(new Discord.MessageAttachment((await new DIG.Delete().getImage(((s4dmessage.author).displayAvatarURL({format:"png"})))), "image.png"))]});
        } else if (image == 'discord-black') {
          (s4dmessage.channel).send({files:[(new Discord.MessageAttachment((await new DIG.DiscordBlack().getImage(((s4dmessage.author).displayAvatarURL({format:"png"})))), "image.png"))]});
        } else if (image == 'discord-blue') {
          (s4dmessage.channel).send({files:[(new Discord.MessageAttachment((await new DIG.DiscordBlue().getImage(((s4dmessage.author).displayAvatarURL({format:"png"})))), "image.png"))]});
        } else if (image == 'facepalm') {
          (s4dmessage.channel).send({files:[(new Discord.MessageAttachment((await new DIG.Facepalm().getImage(((s4dmessage.author).displayAvatarURL({format:"png"})))), "image.png"))]});
        } else if (image == 'hitler') {
          (s4dmessage.channel).send({files:[(new Discord.MessageAttachment((await new DIG.Hitler().getImage(((s4dmessage.author).displayAvatarURL({format:"png"})))), "image.png"))]});
        } else if (image == 'jail') {
          (s4dmessage.channel).send({files:[(new Discord.MessageAttachment((await new DIG.Jail().getImage(((s4dmessage.author).displayAvatarURL({format:"png"})))), "image.png"))]});
        }
        if (image == 'karaba') {
          (s4dmessage.channel).send({files:[(new Discord.MessageAttachment((await new DIG.Karaba().getImage(((s4dmessage.author).displayAvatarURL({format:"png"})))), "image.png"))]});
        } else if (image == 'mms') {
          (s4dmessage.channel).send({files:[(new Discord.MessageAttachment((await new DIG.Mms().getImage(((s4dmessage.author).displayAvatarURL({format:"png"})))), "image.png"))]});
        } else if (image == 'not-stonk') {
          (s4dmessage.channel).send({files:[(new Discord.MessageAttachment((await new DIG.NotStonk().getImage(((s4dmessage.author).displayAvatarURL({format:"png"})))), "image.png"))]});
        } else if (image == 'poutine') {
          (s4dmessage.channel).send({files:[(new Discord.MessageAttachment((await new DIG.Poutine().getImage(((s4dmessage.author).displayAvatarURL({format:"png"})))), "image.png"))]});
        } else if (image == 'rip') {
          (s4dmessage.channel).send({files:[(new Discord.MessageAttachment((await new DIG.Rip().getImage(((s4dmessage.author).displayAvatarURL({format:"png"})))), "image.png"))]});
        } else if (image == 'stonk') {
          (s4dmessage.channel).send({files:[(new Discord.MessageAttachment((await new DIG.Stonk().getImage(((s4dmessage.author).displayAvatarURL({format:"png"})))), "image.png"))]});
        } else if (image == 'tattoo') {
          (s4dmessage.channel).send({files:[(new Discord.MessageAttachment((await new DIG.Tatoo().getImage(((s4dmessage.author).displayAvatarURL({format:"png"})))), "image.png"))]});
        } else if (image == 'thomas') {
          (s4dmessage.channel).send({files:[(new Discord.MessageAttachment((await new DIG.Thomas().getImage(((s4dmessage.author).displayAvatarURL({format:"png"})))), "image.png"))]});
        } else if (image == 'trash') {
          (s4dmessage.channel).send({files:[(new Discord.MessageAttachment((await new DIG.Trash().getImage(((s4dmessage.author).displayAvatarURL({format:"png"})))), "image.png"))]});
        } else if (image == 'circle') {
          (s4dmessage.channel).send({files:[(new Discord.MessageAttachment((await new DIG.Circle().getImage(((s4dmessage.author).displayAvatarURL({format:"png"})))), "image.png"))]});
        }
      } else if (member == (s4dmessage.mentions.members.first().user)) {
        if (image == 'karaba') {
          (s4dmessage.channel).send({files:[(new Discord.MessageAttachment((await new DIG.Karaba().getImage(((s4dmessage.mentions.members.first().user).displayAvatarURL({format:"png"})))), "image.png"))]});
        } else if (image == 'mms') {
          (s4dmessage.channel).send({files:[(new Discord.MessageAttachment((await new DIG.Mms().getImage(((s4dmessage.mentions.members.first().user).displayAvatarURL({format:"png"})))), "image.png"))]});
        } else if (image == 'not-stonk') {
          (s4dmessage.channel).send({files:[(new Discord.MessageAttachment((await new DIG.NotStonk().getImage(((s4dmessage.mentions.members.first().user).displayAvatarURL({format:"png"})))), "image.png"))]});
        } else if (image == 'poutine') {
          (s4dmessage.channel).send({files:[(new Discord.MessageAttachment((await new DIG.Poutine().getImage(((s4dmessage.mentions.members.first().user).displayAvatarURL({format:"png"})))), "image.png"))]});
        } else if (image == 'rip') {
          (s4dmessage.channel).send({files:[(new Discord.MessageAttachment((await new DIG.Rip().getImage(((s4dmessage.mentions.members.first().user).displayAvatarURL({format:"png"})))), "image.png"))]});
        } else if (image == 'stonk') {
          (s4dmessage.channel).send({files:[(new Discord.MessageAttachment((await new DIG.Stonk().getImage(((s4dmessage.mentions.members.first().user).displayAvatarURL({format:"png"})))), "image.png"))]});
        } else if (image == 'tattoo') {
          (s4dmessage.channel).send({files:[(new Discord.MessageAttachment((await new DIG.Tatoo().getImage(((s4dmessage.mentions.members.first().user).displayAvatarURL({format:"png"})))), "image.png"))]});
        } else if (image == 'thomas') {
          (s4dmessage.channel).send({files:[(new Discord.MessageAttachment((await new DIG.Thomas().getImage(((s4dmessage.mentions.members.first().user).displayAvatarURL({format:"png"})))), "image.png"))]});
        } else if (image == 'trash') {
          (s4dmessage.channel).send({files:[(new Discord.MessageAttachment((await new DIG.Trash().getImage(((s4dmessage.mentions.members.first().user).displayAvatarURL({format:"png"})))), "image.png"))]});
        } else if (image == 'circle') {
          (s4dmessage.channel).send({files:[(new Discord.MessageAttachment((await new DIG.Circle().getImage(((s4dmessage.mentions.members.first().user).displayAvatarURL({format:"png"})))), "image.png"))]});
        }
        if (image == 'triggered') {
          (s4dmessage.channel).send({files:[(new Discord.MessageAttachment((await new DIG.Triggered().getImage(((s4dmessage.mentions.members.first().user).displayAvatarURL({format:"png"})))), "image.gif"))]});
        } else if (image == 'gay') {
          (s4dmessage.channel).send({files:[(new Discord.MessageAttachment((await new DIG.Gay().getImage(((s4dmessage.mentions.members.first().user).displayAvatarURL({format:"png"})))), "image.png"))]});
        } else if (image == 'invert') {
          (s4dmessage.channel).send({files:[(new Discord.MessageAttachment((await new DIG.Invert().getImage(((s4dmessage.mentions.members.first().user).displayAvatarURL({format:"png"})))), "image.png"))]});
        } else if (image == 'greyscale') {
          (s4dmessage.channel).send({files:[(new Discord.MessageAttachment((await new DIG.Greyscale().getImage(((s4dmessage.mentions.members.first().user).displayAvatarURL({format:"png"})))), "image.png"))]});
        } else if (image == 'affect') {
          (s4dmessage.channel).send({files:[(new Discord.MessageAttachment((await new DIG.Affect().getImage(((s4dmessage.mentions.members.first().user).displayAvatarURL({format:"png"})))), "image.png"))]});
        } else if (image == 'ad') {
          (s4dmessage.channel).send({files:[(new Discord.MessageAttachment((await new DIG.Ad().getImage(((s4dmessage.mentions.members.first().user).displayAvatarURL({format:"png"})))), "image.png"))]});
        } else if (image == 'sepia') {
          (s4dmessage.channel).send({files:[(new Discord.MessageAttachment((await new DIG.Sepia().getImage(((s4dmessage.mentions.members.first().user).displayAvatarURL({format:"png"})))), "image.png"))]});
        } else if (image == 'beautiful') {
          (s4dmessage.channel).send({files:[(new Discord.MessageAttachment((await new DIG.Beautiful().getImage(((s4dmessage.mentions.members.first().user).displayAvatarURL({format:"png"})))), "image.png"))]});
        } else if (image == 'bobross') {
          (s4dmessage.channel).send({files:[(new Discord.MessageAttachment((await new DIG.Bobross().getImage(((s4dmessage.mentions.members.first().user).displayAvatarURL({format:"png"})))), "image.png"))]});
        } else if (image == 'confused-stonk') {
          (s4dmessage.channel).send({files:[(new Discord.MessageAttachment((await new DIG.ConfusedStonk().getImage(((s4dmessage.mentions.members.first().user).displayAvatarURL({format:"png"})))), "image.png"))]});
        } else if (image == 'delete') {
          (s4dmessage.channel).send({files:[(new Discord.MessageAttachment((await new DIG.Delete().getImage(((s4dmessage.mentions.members.first().user).displayAvatarURL({format:"png"})))), "image.png"))]});
        } else if (image == 'discord-black') {
          (s4dmessage.channel).send({files:[(new Discord.MessageAttachment((await new DIG.DiscordBlack().getImage(((s4dmessage.mentions.members.first().user).displayAvatarURL({format:"png"})))), "image.png"))]});
        } else if (image == 'discord-blue') {
          (s4dmessage.channel).send({files:[(new Discord.MessageAttachment((await new DIG.DiscordBlue().getImage(((s4dmessage.mentions.members.first().user).displayAvatarURL({format:"png"})))), "image.png"))]});
        } else if (image == 'facepalm') {
          (s4dmessage.channel).send({files:[(new Discord.MessageAttachment((await new DIG.Facepalm().getImage(((s4dmessage.mentions.members.first().user).displayAvatarURL({format:"png"})))), "image.png"))]});
        } else if (image == 'hitler') {
          (s4dmessage.channel).send({files:[(new Discord.MessageAttachment((await new DIG.Hitler().getImage(((s4dmessage.mentions.members.first().user).displayAvatarURL({format:"png"})))), "image.png"))]});
        } else if (image == 'jail') {
          (s4dmessage.channel).send({files:[(new Discord.MessageAttachment((await new DIG.Jail().getImage(((s4dmessage.mentions.members.first().user).displayAvatarURL({format:"png"})))), "image.png"))]});
        }
      }

    }catch(err){
      s4dmessage.reply({content:String('A unknown error has occurred, please try again later'), allowedMentions: {
              repliedUser: true
          }});

    };
  }

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  arguments2 = (s4dmessage.content).split(' ');
  command = arguments2.splice(0, 1)[0];
  if (command == 'cb!say') {
    try{
      s4dmessage.channel.send({content:String((arguments2.join(' ')))});

    }catch(err){
      s4dmessage.reply({content:String('A unknown error has occurred, please try again later'), allowedMentions: {
              repliedUser: true
          }});

    };
  }

});

s4d.client.on('guildMemberAdd', async (param1) => {
s4d.joiningMember = param1;
  s4d.client.channels.cache.get('941052570795909151').send({content:(['Hey **',s4d.joiningMember.user.username,'**! Welcome to **',s4d.joiningMember.guild.name,'**! Hope you enjoy your stay!'].join('')),files:[{attachment:(await new canvas.Welcome()  .setUsername((s4d.joiningMember.user.username)).setMemberCount(((s4d.joiningMember.guild).memberCount)).setDiscriminator(((s4d.joiningMember.user).discriminator)).setBackground('https://cdn.discordapp.com/attachments/894260496725835776/941572485630021662/Rankcardbg.png').setAvatar(((s4d.joiningMember.user).displayAvatarURL({format:"png"}))).setGuildName(((s4d.joiningMember.guild).name)).setColor("border", "#cc66cc").setColor("username-box", "#cc66cc").setColor("discriminator-box", "#cc66cc").setColor("member-count", "#cc66cc").toAttachment()).toBuffer()}]});
  (s4d.joiningMember).send({content:String((['Hey **',s4d.joiningMember.user.username,'**! Welcome to **',s4d.joiningMember.guild.name,'**! You will have to verify in #verification to get access to the server :). Hope you enjoy your stay!'].join('')))});
s4d.joiningMember = null
});

s4d.client.on('messageCreate', async (s4dmessage) => {
  arguments2 = (s4dmessage.content).split(' ');
  command = arguments2.splice(0, 1)[0];
  if (command == 'cb!capture') {
    try{
      if (!((((arguments2.join(' ')) || '').startsWith('https://' || '')) || (((arguments2.join(' ')) || '').startsWith('http://' || '')))) {
        let embed = new Discord.MessageEmbed()
           embed.setTitle((arguments2.join(' ')));
          embed.setImage(('https://api.popcat.xyz/screenshot?url=https://' + String(arguments2.join(' '))));
          (s4dmessage.channel).send({embeds:[embed]});

      } else {
        let embed = new Discord.MessageEmbed()
           embed.setTitle((arguments2.join(' ')));
          embed.setImage(('https://api.popcat.xyz/screenshot?url=' + String(arguments2.join(' '))));
          (s4dmessage.channel).send({embeds:[embed]});

      }

    }catch(err){
      s4dmessage.reply({content:String('A unknown error has occurred, please try again later'), allowedMentions: {
              repliedUser: true
          }});

    };
  }

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  arguments2 = (s4dmessage.content).split(' ');
  command = arguments2.splice(0, 1)[0];
  if (command == 'cb!lyrics') {
    try{
      (s4dmessage.channel).send(String(' ayo whats the song\'s name? answer in 2 min or you\'d hafta do the command again lol')).then(() => { (s4dmessage.channel).awaitMessages({filter:(m) => m.author.id === (s4dmessage.author).id,  time: (2*60*1000), max: 1 }).then(async (collected) => { s4d.reply = collected.first().content;
       s4d.message = collected.first();
         Song_Name = (s4d.reply);
        (s4dmessage.channel).send(String('Whats the name of the author of the song? ~~your mom~~')).then(() => { (s4dmessage.channel).awaitMessages({filter:(m) => m.author.id === (s4dmessage.author).id,  time: (2*60*1000), max: 1 }).then(async (collected) => { s4d.reply = collected.first().content;
         s4d.message = collected.first();
           Song_Author = (s4d.reply);
          (async function(artist, title) {
                  let lyrics = await lyricsFinder(artist, title) || "Not Found!";

                    s4dmessage.reply({content:String((lyrics)), allowedMentions: {
                    repliedUser: true
                }});

              })(Song_Author, Song_Name);
         s4d.reply = null; }).catch(async (e) => { console.error(e);   s4dmessage.reply({content:String('oof no answer recieved, now you needa do the command again lmao'), allowedMentions: {
                  repliedUser: true
              }});
         });
        })

       s4d.reply = null; }).catch(async (e) => { console.error(e);   s4dmessage.reply({content:String('oof no answer recieved, now you needa do the command again lmao'), allowedMentions: {
                repliedUser: true
            }});
       });
      })

    }catch(err){
      s4dmessage.reply({content:String('A unknown error has occurred, please try again later'), allowedMentions: {
              repliedUser: true
          }});

    };
  }

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  arguments2 = (s4dmessage.content).split(' ');
  command = arguments2.splice(0, 1)[0];
  if (command == 'cb!meme') {

        const musakui = require('musakui');
        musakui('meme')
      .then(result => {
      var postTitle = result.title
      var postUrl = result.reddit_url
      var postImg = result.media_url
      var postUpvotes = result.upvotes
      var postComs = result.comments
         let embed = new Discord.MessageEmbed()
         embed.setColor((colourRandom()));
        embed.setTitle((postTitle));
        embed.setURL((postUrl));
        embed.setDescription((postUpvotes));
        embed.setImage((postImg));
        (s4dmessage.channel).send({embeds:[embed]});


     })
      .catch(error => console.log(error));
  }

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  arguments2 = (s4dmessage.content).split(' ');
  command = arguments2.splice(0, 1)[0];
  if (command == 'cb!youtube') {
    try{
      s4d.client.discordTogether.createTogetherCode((s4dmessage.member.voice.channel.id), "youtube").then(async invite => {
        s4dmessage.reply({content:String((invite.code)), allowedMentions: {
                repliedUser: true
            }});

      })
    }catch(err){
      s4dmessage.reply({content:String('Your not in a voice channel lmao'), allowedMentions: {
              repliedUser: true
          }});

    };
  } else if (command == 'cb!poker') {
    try{
      s4d.client.discordTogether.createTogetherCode((s4dmessage.member.voice.channel.id), "youtube").then(async invite => {
        s4dmessage.reply({content:String((invite.code)), allowedMentions: {
                repliedUser: true
            }});

      })
    }catch(err){
      s4dmessage.reply({content:String('Your not in a voice channel lmao'), allowedMentions: {
              repliedUser: true
          }});

    };
  } else if (command == 'cb!chess') {
    try{
      s4d.client.discordTogether.createTogetherCode((s4dmessage.member.voice.channel.id), "chess").then(async invite => {
        s4dmessage.reply({content:String((invite.code)), allowedMentions: {
                repliedUser: true
            }});

      })
    }catch(err){
      s4dmessage.reply({content:String('Your not in a voice channel lmao'), allowedMentions: {
              repliedUser: true
          }});

    };
  } else if (command == 'cb!betrayal') {
    try{
      s4d.client.discordTogether.createTogetherCode((s4dmessage.member.voice.channel.id), "chess").then(async invite => {
        s4dmessage.reply({content:String((invite.code)), allowedMentions: {
                repliedUser: true
            }});

      })
    }catch(err){
      s4dmessage.reply({content:String('Your not in a voice channel lmao'), allowedMentions: {
              repliedUser: true
          }});

    };
  } else if (command == 'cb!fishing') {
    try{
      s4d.client.discordTogether.createTogetherCode((s4dmessage.member.voice.channel.id), "fishing").then(async invite => {
        s4dmessage.reply({content:String((invite.code)), allowedMentions: {
                repliedUser: true
            }});

      })
    }catch(err){
      s4dmessage.reply({content:String('Your not in a voice channel lmao'), allowedMentions: {
              repliedUser: true
          }});

    };
  } else if (command == 'cb!lettertile') {
    try{
      s4d.client.discordTogether.createTogetherCode((s4dmessage.member.voice.channel.id), "lettertile").then(async invite => {
        s4dmessage.reply({content:String((invite.code)), allowedMentions: {
                repliedUser: true
            }});

      })
    }catch(err){
      s4dmessage.reply({content:String('Your not in a voice channel lmao'), allowedMentions: {
              repliedUser: true
          }});

    };
  } else if (command == 'cb!lettertile') {
    try{
      s4d.client.discordTogether.createTogetherCode((s4dmessage.member.voice.channel.id), "lettertile").then(async invite => {
        s4dmessage.reply({content:String((invite.code)), allowedMentions: {
                repliedUser: true
            }});

      })
    }catch(err){
      s4dmessage.reply({content:String('Your not in a voice channel lmao'), allowedMentions: {
              repliedUser: true
          }});

    };
  } else if (command == 'cb!wordsnack') {
    try{
      s4d.client.discordTogether.createTogetherCode((s4dmessage.member.voice.channel.id), "wordsnack").then(async invite => {
        s4dmessage.reply({content:String((invite.code)), allowedMentions: {
                repliedUser: true
            }});

      })
    }catch(err){
      s4dmessage.reply({content:String('Your not in a voice channel lmao'), allowedMentions: {
              repliedUser: true
          }});

    };
  } else if (command == 'cb!doodlecrew') {
    try{
      s4d.client.discordTogether.createTogetherCode((s4dmessage.member.voice.channel.id), "doodlecrew").then(async invite => {
        s4dmessage.reply({content:String((invite.code)), allowedMentions: {
                repliedUser: true
            }});

      })
    }catch(err){
      s4dmessage.reply({content:String('Your not in a voice channel lmao'), allowedMentions: {
              repliedUser: true
          }});

    };
  }

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  if ((((s4dmessage.content).toLowerCase()) || '').startsWith('cb!s4d' || '')) {
    (s4dmessage.channel).send({content:String((`s4d means scratch for discord
        s4d was created mainly by \`Androz\`
        The Devs of the current preview \`469\` are:-
        1. Androz (of course)
        2. Jose (454 coder)
        3. Redo (454 coder)
        4. Frostzzone (pull request 469 owner)
        5. Retro
        6. AHQSoftwares
        7. HenPokPok
        8. AlexCdDg

        Official s4d server:- https://discord.gg/cB2g5f4Ypq
        s4d 469 official server:- https://discord.gg/A7yttWszfD`))});
  }

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  if (!((s4dmessage.author).bot)) {
    if (!s4d.database.has(String(('wallet_coins-' + String((s4dmessage.author).id))))) {
      s4d.database.set(String(('wallet_coins-' + String((s4dmessage.author).id))), 1000);
    }
    if (!s4d.database.has(String(('bank_capacity-' + String((s4dmessage.author).id))))) {
      s4d.database.set(String(('bank_capacity-' + String((s4dmessage.author).id))), 10000);
    }
    if (!s4d.database.has(String(('bank_coins-' + String((s4dmessage.author).id))))) {
      s4d.database.set(String(('bank_coins-' + String((s4dmessage.author).id))), 0);
    }
  }

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  if ((s4dmessage.content).toLowerCase() == 'cb!bal') {
    try{
      let embed = new Discord.MessageEmbed()
         embed.setColor((colourRandom()));
        embed.setAuthor((s4dmessage.member.user.username),((s4dmessage.author).displayAvatarURL({format:"png"})));
        embed.setTitle('balance');
        embed.setDescription((['Wallet: ',s4d.database.get(String(('wallet_coins-' + String((s4dmessage.author).id)))),'\n','Bank: ',s4d.database.get(String(('bank_coins-' + String((s4dmessage.author).id)))),' / ',s4d.database.get(String(('bank_capacity-' + String((s4dmessage.author).id))))].join('')));
        embed.setFooter('whoa, richy rich!','https://cdn.discordapp.com/attachments/894260496725835776/942693018341879888/stonks.jpg');
        (s4dmessage.channel).send({embeds:[embed]});


    }catch(err){
      s4dmessage.reply({content:String('A unknown error has occurred, please try again later'), allowedMentions: {
              repliedUser: true
          }});

    };
  }
  if ((((s4dmessage.content).toLowerCase()) || '').startsWith('cb!bal' || '')) {
    if (!((s4dmessage.content).toLowerCase() == 'cb!bal')) {
      try{
        let embed = new Discord.MessageEmbed()
           embed.setColor((colourRandom()));
          embed.setAuthor(((s4dmessage.mentions.members.first().user).username),((s4dmessage.mentions.members.first().user).displayAvatarURL({format:"png"})));
          embed.setTitle('account');
          embed.setDescription((['Wallet: ',s4d.database.get(String(('wallet_coins-' + String((s4dmessage.mentions.members.first().user).id)))),'\n','Bank: ',s4d.database.get(String(('bank_coins-' + String((s4dmessage.author).id)))),' / ',s4d.database.get(String(('bank_coins-' + String((s4dmessage.author).id))))].join('')));
          embed.setFooter('haha',);
          (s4dmessage.channel).send({embeds:[embed]});


      }catch(err){
        s4dmessage.reply({content:String('Ping a valid member lol'), allowedMentions: {
                repliedUser: true
            }});

      };
    }
  }

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  arguments2 = (s4dmessage.content).split(' ');
  command = arguments2.splice(0, 1)[0];
  if (command == 'cb!dep') {
    if (arguments2 % 2 == 0 || arguments2 % 2 == 1 || arguments2 == 'all' || arguments2 == 'a') {
      if (arguments2 < s4d.database.get(String(('wallet_coins-' + String((s4dmessage.author).id))))) {
        if (arguments2 <= s4d.database.get(String(('bank_capacity-' + String((s4dmessage.author).id))))) {
          s4d.database.subtract(String(('wallet_coins-' + String((s4dmessage.author).id))), parseInt((Number(arguments2))));
          s4d.database.add(String(('bank_coins-' + String((s4dmessage.author).id))), parseInt((Number(arguments2))));
          s4dmessage.reply({content:String((['okay i have deposit `',arguments2,'` coins to your bank account'].join(''))), allowedMentions: {
                  repliedUser: true
              }});
        } else {
          s4dmessage.reply({content:String('your bank capacity is lower than the coins you wanna deposit lol'), allowedMentions: {
                  repliedUser: true
              }});
        }
      } else {
        s4dmessage.reply({content:String('You dont even have that many coins lmao'), allowedMentions: {
                repliedUser: true
            }});
      }
    } else {
      s4dmessage.reply({content:String('Ayo you needa type a valid number, or just `all` or `a` is fine aswell'), allowedMentions: {
              repliedUser: true
          }});
    }
  }

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  if ((((s4dmessage.content).toLowerCase()) || '').startsWith('cb!beg' || '')) {
    try{
      beg_random_coins = mathRandomInt(300, 3000);
      s4d.database.add(String(('wallet_coins-' + String((s4dmessage.author).id))), parseInt((Number(beg_random_coins))));
      list = ['Oh my, A dirty Beggar? keep this money and go take a bath!', 'Oh you poor soul, here keep this money', 'ew, go away! ill keep the money down here', 'you should get a job lmao, but untill then keep this money', 'i was thinking to not give you a single penny, but here keep this money, and get a job!', 'ah another begger, keep this money and go away'];
      let embed = new Discord.MessageEmbed()
         embed.setColor((colourRandom()));
        embed.setTitle('BEG');
        embed.setDescription((['"',listsGetRandomItem(list, false),'"','well you got ',beg_random_coins,' coins'].join('')));
        (s4dmessage.channel).send({embeds:[embed]});


    }catch(err){
      s4dmessage.reply({content:String('A unknown error has occurred, please try again later'), allowedMentions: {
              repliedUser: true
          }});

    };
  }

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  arguments2 = (s4dmessage.content).split(' ');
  command = arguments2.splice(0, 1)[0];
  if (command == 'cb!give') {
    if (arguments2 % 2 == 0 || arguments2 % 2 == 1) {
      if (arguments2 >= 1 && arguments2 < s4d.database.get(String(('wallet_coins-' + String((s4dmessage.author).id)))) + 1) {
        if ((s4dmessage.mentions.members.first().user) != null) {
          try{
            s4d.database.add(String(('wallet_coins-' + String((s4dmessage.mentions.members.first().user).id))), parseInt((Number(arguments2))));
            s4d.database.subtract(String(('wallet_coins-' + String((s4dmessage.author).id))), parseInt((Number(arguments2))));
            s4dmessage.reply({content:String((['Okay you gave `',arguments2,'` coins to ',(s4dmessage.mentions.members.first().user).username].join(''))), allowedMentions: {
                    repliedUser: true
                }});

          }catch(err){
            s4dmessage.reply({content:String('A unknown error has occurred, please try again later'), allowedMentions: {
                    repliedUser: true
                }});

          };
        } else {
          s4dmessage.reply({content:String('You needa `@` mention a person lmao'), allowedMentions: {
                  repliedUser: true
              }});
        }
      } else {
        s4dmessage.reply({content:String('You dont even have that mnay coins, dont try to get free coins bc that wont happen'), allowedMentions: {
                repliedUser: true
            }});
      }
    } else {
      s4dmessage.reply({content:String('You needa enter a number lmao'), allowedMentions: {
              repliedUser: true
          }});
    }
  }

});

s4d.Inviter.on('UserInvited',async function (member,uses,inviter,invite) {
  if (!s4d.database.has(String(('invites-' + String((Inviter).id))))) {
    s4d.database.set(String(('invites-' + String((Inviter).id))), 1);
    return
  }
  s4d.database.add(String(('invites-' + String((Inviter).id))), parseInt(1));

});

s4d.Inviter.on('UserLeave', async function (member,uses,inviter,invite) {
  s4d.database.subtract(String(('invites-' + String((Inviter).id))), parseInt(1));

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  if ((((s4dmessage.content).toLowerCase()) || '').startsWith('cb!invites' || '')) {
    if (s4d.database.has(String(('invites-' + String((s4dmessage.author).id))))) {
      s4dmessage.reply({content:String((['You currently have `',s4d.database.get(String(('invites-' + String((s4dmessage.author).id)))),'Invites'].join(''))), allowedMentions: {
              repliedUser: true
          }});
    } else {
      s4dmessage.reply({content:String('You never invited anyone lmao'), allowedMentions: {
              repliedUser: true
          }});
    }
  }

});

                    return s4d
                    })();
                    