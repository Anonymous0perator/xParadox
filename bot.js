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
    message.reply("Gave you a event role");
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
    
    if(isCommand('updatename', message)){
     if(message.member.roles.find("name", "Verified")){
    let member = message.guild.member(message.author);
    member.setNickname(`[${member.highestRole.name}] ${member.displayName}`)
      }
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
              let pvt = message.guild.roles.find("name", "PVT");
                let lcpl = message.guild.roles.find("name", "LCPL");
                let cpl = message.guild.roles.find("name", "CPL");
                let sgt = message.guild.roles.find("name", "SGT");
                let sfc = message.guild.roles.find("name", "SFC");
                let ssgt = message.guild.roles.find("name", "SSGT");
                let lt = message.guild.roles.find("name", "LT");
                let cpt = message.guild.roles.find("name", "CPT");
                let major = message.guild.roles.find("name", "MAJ");
                let ltcol = message.guild.roles.find("name", "LTCOL");
                let col = message.guild.roles.find("name", "COL");
                let brig = message.guild.roles.find("name", "BRIG");
                let os = message.guild.roles.find("name", "OS");
                let dev = message.guild.roles.find("name", "DEV");
                let majgen = message.guild.roles.find("name", "MAJGEN");
                let ltgen = message.guild.roles.find("name", "LTGEN");
                let gen = message.guild.roles.find("name", "GEN");
                
                if (rank === 10) {
                    message.member.addRole(maj)
                    message.member.addRole(pvt)
                }
                if(rank === 30) {
                      message.member.addRole(maj)
                    message.member.addRole(lcpl)
                    message.member.removeRole(pvt)
                } else if(rank === 40) {
                      message.member.addRole(maj)
                    message.member.addRole(cpl)
                    message.member.removeRole(lcpl)
                } else if(rank === 50) {
                      message.member.addRole(maj)
                    message.member.addRole(sgt)
                    message.member.removeRole(cpl)
                } else if(rank === 60) {
                      message.member.addRole(maj)
                    message.member.addRole(sfc)
                    message.member.removeRole(sgt)
                } else if(rank === 70) {
                      message.member.addRole(maj2)
                    message.member.addRole(ssgt)
                    message.member.removeRole(sfc)
                } else if(rank === 75) {
                      message.member.addRole(maj2)
                    message.member.addRole(lt)
                    message.member.removeRole(ssgt)
                } else if(rank === 79) {
                      message.member.addRole(maj2)
                    message.member.addRole(cpt)
                    message.member.removeRole(lt)
                } else if(rank === 80) {
                      message.member.addRole(maj1)
                    message.member.addRole(major)
                    message.member.removeRole(cpt)
                } else if(rank === 90) {
                      message.member.addRole(maj1)
                    message.member.addRole(ltcol)
                    message.member.removeRole(major)
                } else if(rank === 210) {
                      message.member.addRole(maj1)
                    message.member.addRole(col)
                    message.member.removeRole(ltcol)
                } else if(rank === 230) {
                      message.member.addRole(maj1)
                    message.member.addRole(brig)
                    message.member.removeRole(col)
                } else if(rank === 245) {
                      message.member.addRole(maj1)
                    message.member.addRole(os)
                    message.member.removeRole(brig)
                } else if(rank === 246) {
                      message.member.addRole(maj3)
                    message.member.addRole(majgen)
                    message.member.removeRole(os)
                } else if(rank === 250) {
                      message.member.addRole(maj3)
                    message.member.addRole(ltgen)
                    message.member.removeRole(majgen)
                } else if(rank === 251) {
                      message.member.addRole(maj3)
                    message.member.addRole(gen)
                    message.member.removeRole(ltgen)
                }
                

            })
        })

    }

});



client.login(process.env.BOT_TOKEN);
