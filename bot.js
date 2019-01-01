const request = require('request');//idk
const discord = require('discord.js'); //Discord.js is used to write bots in JavaScript
const roblox = require('roblox-js'); //Roblox-js is used to do some functions within www.roblox.com
const client = new discord.Client(); //Getting Discord Client
const prefix = ':';
const groupId = 3974672;
var issaVerify = false;
var verWord = (~~(Math.random() * 2) ? 'rutherfordium' : 'xenonite');
var verPeople = [];
var admissions = '397856542751326209';
var ausPers = '397855350595911682'
const config = require('./config.json');


//Console events.
client.on("ready", () => {
    client.user.setActivity(`Helping ${client.users.size} Icelandic Soldiers.`);
    console.log(`Iceland ${client.users.size} users.`)

});

//isCommand function
function isCommand(command, message) {
    var command = command.toLowerCase(); //If a user types a command with uppercase either lowercase
    var content = message.content.toLowerCase();//it will get it.
    return content.startsWith(prefix + command);//Checking if the message has a prefix first.
};
//isNotCommand function (needed sometimes)

client.on('message', (message) => {
    

if(isCommand('events', message)){
      let member = message.guild.member(message.author);
  var username = member.displayName
  let myRole = message.guild.roles.find("name", "Events");
    
     message.member.addRole(myRole)
}

  if(isCommand('basictraining', message)){
/*
message.channel.send({embed: {
color: 3447003,
author: {
  name: client.user.username,
  icon_url: client.user.avatarURL
},
title: "훈련 알람 봇",
description: "기초 훈련이 훈련소에서 이루어지고 있습니다",
fields: [{
  //`${LowRankRoleObject} 기초 훈련이 훈련소에서 이루어지고 있습니다[일병 OR-1], 훈련소로 집합하시기 바랍니다, 5분후에 기초 훈련이 잠깁니다. https://web.roblox.com/games/2433583525/Camp-Nonsan-V3`
  {
    name: "훈련 소식",
    value: "기초 훈련이 훈련소에서 이루어지고 있습니다[일병 OR-1], 훈련소로 집합하시기 바랍니다, 5분후에 기초 훈련이 잠깁니다. [링크](https://web.roblox.com/games/2433583525/Camp-Nonsan-V3)"
  }
],
timestamp: new Date(),
footer: {
  icon_url: client.user.avatarURL,
  text: "hexcore-roka"
}
}
}});


*/
   let LowRankRoleObject= message.guild.roles.find('name', 'Events');
  if(message.member.roles.find("name", "High Rank")|| message.member.roles.find("name", "Chief Staff")){
    message.delete(1000);
    message.channel.send(`${LowRankRoleObject},`)
    message.channel.send({embed: {
        color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Basic Training [For LR-1]",
        url: "https://www.roblox.com/games/1660656584/NEW-Keflakvik-Military-Academy",
        description: "Basic Training is being hosted in Keflakvik Military Academy, report to academy now",
        fields: [
          {
            name: "Event notifier",
            value: `${LowRankRoleObject} Report to academy, only for LR-1. The training will be locked within 5 mins [Link](https://www.roblox.com/games/1660656584/NEW-Keflakvik-Military-Academy). `
          },
          {
            name: "Host",
            value: message.member.displayName
          }
        ],
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL,
          text: "hexcore-ia"
        }
      }
    });
    setTimeout(function(){
      message.channel.send("Basic Training is locked.")
    }, 300000)
  } else{
    message.reply("Error:1|| You do not have permmission.")
  }



  }


if(isCommand('ssu', message)){

 let LowRankRoleObject= message.guild.roles.find('name', 'Events');
if(message.member.roles.find("name", "Chief Staff")|| message.member.roles.find("name", "High Rank")){
  message.delete(1000);
  message.channel.send(`${LowRankRoleObject},`)
  message.channel.send({embed: {
      color: 3447003,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL
      },
      title: "Server Start Up",
      url: "https://www.roblox.com/games/1660656584/NEW-Keflakvik-Military-Academy",
      description: "Server Start Up",
      fields: [
        {
          name: "Event notifier",
          value: `${LowRankRoleObject} Server Start up [Link](https://www.roblox.com/games/1660656584/NEW-Keflakvik-Military-Academy). `
        },
        {
          name: "Host",
          value: message.member.displayName
        }
      ],
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL,
        text: "hexcore-ia"
      }
    }
  });
  setTimeout(function(){
    message.channel.send("Join Academy.")
  }, 300000)
} else{
  message.reply("Error:1|| You do not have permmission")
}



}



//MP || TRADOC || SWC || NCO || KMA || DSSC
if(isCommand("tagme", message)){
  let member = message.guild.member(message.author);
  var username = member.displayName
  var ads = 4617531;
  var cg = 4617519;
  var cru = 4607595;
  var np = 4607711;
  let myRole = message.guild.roles.find("name", "ADS");
  let myRole1 = message.guild.roles.find("name", "CG");
  let myRole2 = message.guild.roles.find("name", "CRU");
  let myRole3 = message.guild.roles.find("name", "NP");

  if (username){
    roblox.getIdFromUsername(username)
  .then(function(id){
    roblox.getRankNameInGroup(ads, id)
    .then(function(rank){
      if(rank === 'Guest'){
        message.member.removeRole(myRole)
      } else {
        message.member.addRole(myRole)
      }
    })
    roblox.getRankNameInGroup(cg, id)
    .then(function(rank){
      if(rank === 'Guest'){
        message.member.removeRole(myRole1)
      } else {
        message.member.addRole(myRole1)
      }
    })

    roblox.getRankNameInGroup(cru, id)
    .then(function(rank){
      if(rank === 'Guest'){
        message.member.removeRole(myRole2)
      } else {
        message.member.addRole(myRole2)
      }
    })

    roblox.getRankNameInGroup(np, id)
    .then(function(rank){
      if(rank === 'Guest'){
        message.member.removeRole(myRole3)
      } else {
        message.member.addRole(myRole3)
      }
    })

})


}
message.reply("Check your tags.")
}
    if (isCommand('update', message)){

      var args = message.content.split(/[ ]+/)
      let member = message.guild.member(message.author);
       var username = args[1];
      var text = member.displayName
      console.log(`${text} has use "update" command`)

        roblox.getIdFromUsername(text)
        .then(function(id){
            roblox.getRankInGroup(groupId, id)
            .then(function(rank){
              let maj = message.guild.roles.find("name", "Low Rank");
              let maj2 = message.guild.roles.find("name", "Middle Rank");
              let maj1 = message.guild.roles.find("name", "High Rank");
              let maj3 = message.guild.roles.find("name", "Chief Staff");
                if (rank === 10) {
                    message.member.addRole(maj)
                }
                if(rank === 30) {
                      message.member.addRole(maj)
                } else if(rank === 40) {
                      message.member.addRole(maj)
                } else if(rank === 50) {
                      message.member.addRole(maj)
                } else if(rank === 60) {
                      message.member.addRole(maj)
                } else if(rank === 70) {
                      message.member.addRole(maj2)
                } else if(rank === 75) {
                      message.member.addRole(maj2)
                } else if(rank === 79) {
                      message.member.addRole(maj2)
                } else if(rank === 80) {
                      message.member.addRole(maj1)
                } else if(rank === 90) {
                      message.member.addRole(maj1)
                } else if(rank === 210) {
                      message.member.addRole(maj1)
                } else if(rank === 230) {
                      message.member.addRole(maj1)
                } else if(rank === 245) {
                      message.member.addRole(maj1)
                } else if(rank === 250) {
                      message.member.addRole(maj3)
                } else if(rank === 251) {
                      message.member.addRole(maj3)
                }

            })
        })
    }

});



client.login(process.env.BOT_TOKEN);
