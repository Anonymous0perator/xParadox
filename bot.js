const request = require('request');//idk
const discord = require('discord.js'); //Discord.js is used to write bots in JavaScript
const roblox = require('roblox-js'); //Roblox-js is used to do some functions within www.roblox.com
const client = new discord.Client(); //Getting Discord Client
const prefix = ':';
const groupId = 4572431;
var issaVerify = false;
var verWord = (~~(Math.random() * 2) ? 'rutherfordium' : 'xenonite');
var verPeople = [];
var admissions = '397856542751326209';
var ausPers = '397855350595911682'

//Console events.
client.on("ready", () => {
    client.user.setActivity(`Serveing CAF, for ${client.users.size} users.`);
    console.log(`Ready to serve on 1 servers, for ${client.users.size} users.`)
});

//isCommand function
function isCommand(command, message) {
    var command = command.toLowerCase(); //If a user types a command with uppercase either lowercase
    var content = message.content.toLowerCase();//it will get it.
    return content.startsWith(prefix + command);//Checking if the message has a prefix first.
};
if(isCommand('rcaf_tryout', message)){

   let LowRankRoleObject= message.guild.roles.find('name', 'Low Rank');
  if(message.member.roles.find("name", "High Command")|| message.member.roles.find("name", "Chief Command")){
    message.delete(1000);
    message.channel.send(`${LowRankRoleObject} Royal Canadian Air Force tryout is being hosted in air force base, please report to the air force base. Tryout will be locked within 5 mins. https://www.roblox.com/games/2653638024/s-Place-Number-0`);
    setTimeout(function(){
      message.channel.send("Royal Canadian Air Force tryout is locked.")
    }, 300000)
  } else{
    message.reply("You do not have permission to use this command.")
  }



  }
//isNotCommand function (needed sometimes)

client.on('message', (message) => {
if(isCommand('cbt', message)){

 let LowRankRoleObject= message.guild.roles.find('name', 'Low Rank');
if(message.member.roles.find("name", "High Command")|| message.member.roles.find("name", "Chief Command")){
  message.delete(1000);
  message.channel.send(`${LowRankRoleObject} Canadian Armed Forces Basic Training is being hosted in academy, please report to the academy. CBT will be locked within 5 mins. https://www.roblox.com/games/2631939165/CFB-Suffield-Military-Academy`);
  setTimeout(function(){
    message.channel.send("Canadian Armed Forces Basic Training (CBT) is locked.")
  }, 300000)
} else{
  message.reply("You do not have permission to use this command.")
}



}


  if(isCommand('listrank', message)){
    if(message.member.hasPermission('ADMINISTRATOR')){
      roblox.getRoles(4572431)
                        .then(function (roles) {
                        roles.forEach(function(item){
                          message.channel.send('"' + item.Name + '",')
                        })
                        })
  }

  }


  if(isCommand("tagme", message)){
    let member = message.guild.member(message.author);
    var username = member.displayName
    var mp = 4576269;
    var ets = 4576266;
    var srr = 4576264;
    let myRole = message.guild.roles.find("name", "CANSOFCOM");
    let myRole1 = message.guild.roles.find("name", "RCAF");
    let myRole2 = message.guild.roles.find("name", "CFMP");

    if (username){
      roblox.getIdFromUsername(username)
    .then(function(id){
      roblox.getRankNameInGroup(mp, id)
      .then(function(rank){
        if(rank === 'Guest'){
          message.member.removeRole(myRole2)
        } else {
          message.member.addRole(myRole)
        }
      })
      roblox.getRankNameInGroup(ets, id)
      .then(function(rank){
        if(rank === 'Guest'){
          message.member.removeRole(myRole1)
        } else {
          message.member.addRole(myRole1)
        }
      })

      roblox.getRankNameInGroup(srr, id)
      .then(function(rank){
        if(rank === 'Guest'){
          message.member.removeRole(myRole)
        } else {
          message.member.addRole(myRole2)
        }
      })
  })


  }
  message.reply("Check your tags.")
  }
    if (isCommand('update', message)){
      console.log(`${text} has use "update" command`)
      var args = message.content.split(/[ ]+/)
      let member = message.guild.member(message.author);
       var username = args[1];
      var text = member.displayName

        roblox.getIdFromUsername(text)
        .then(function(id){
            roblox.getRankInGroup(groupId, id)
            .then(function(rank){
              let maj = message.guild.roles.find("name", "Low Rank");
              let maj2 = message.guild.roles.find("name", "Middle Rank");
              let maj1 = message.guild.roles.find("name", "High Command");
              let maj3 = message.guild.roles.find("name", "Chief Command");
                if (rank === 10) {
                    message.member.addRole(maj)
                }
                if(rank === 20) {
                      message.member.addRole(maj)
                } else if(rank === 30) {
                      message.member.addRole(maj)
                } else if(rank === 40) {
                      message.member.addRole(maj)
                } else if(rank === 50) {
                      message.member.addRole(maj)
                } else if(rank === 60) {
                      message.member.addRole(maj2)
                } else if(rank === 70) {
                      message.member.addRole(maj)
                } else if(rank === 80) {
                      message.member.addRole(maj1)
                } else if(rank === 90) {
                      message.member.addRole(maj1)
                } else if(rank === 100) {
                      message.member.addRole(maj1)
                } else if(rank === 110) {
                      message.member.addRole(maj1)
                } else if(rank === 120) {
                      message.member.addRole(maj3)
                } else if(rank === 130) {
                      message.member.addRole(maj3)
                } else if(rank === 150) {
                      message.member.addRole(maj3)
                }
            })
        })
    }

});


client.login(process.env.BOT_TOKEN);
