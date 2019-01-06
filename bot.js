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

// star promotion system start
if(isCommand("promotion", message)){
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Only HR can rank people!")
var groupId = 3974672;
var maximumRank = 70;
let staffc = message.guild.channels.find("name", "promotion-request") 
const args = message.content.slice(prefix.length).trim().split(/ +/g);

roblox.login({username: process.env.username, password: process.env.password}).then((success) => {

}).catch(() => {console.log("Failed to login.");});

    	var username = args[0]
    	if (username){
    		roblox.getIdFromUsername(username)
			.then(function(id){
				roblox.getRankInGroup(groupId, id)
			        
				.then(function(rank){
					if(maximumRank <= rank){
						message.channel.send(`${id} is rank ${rank} and not promotable.`)
					} else {
						roblox.promote(groupId, id)
						
						.then(function(roles){
							message.channel.send(`Promoted user ${username} from ${roles.oldRole.Name} to ${roles.newRole.Name}`)
							const embed = new Discord.RichEmbed()
							    .setColor(0x8cff00)
							    .setTimestamp()
							    .setDescription(`**Action:** Promote\n**Target:** ${username}\n**User:** ${message.author.tag}\n**Old Rank:** ${roles.oldRole.Name}\n**New Rank:** ${roles.newRole.Name}`);
							staffc.send({embed});
						}).catch(function(err){
							message.channel.send("Failed to promote.")
						});
					}
				}).catch(function(err){
					message.channel.send("Couldn't get them in the group.")
				});
			}).catch(function(err){ 
				message.channel.send(`Sorry, but ${username} doesn't exist on ROBLOX.`)
			});
    	} else {
    		message.channel.send("Please enter a username.")
    	}
    	return;
}

if(isCommand("sps", message)){
  message.channel.send("**Star Promotion System** also known as SPS is a new promotion system that is recently applied to Iceland Army.\n **FAQ** \n *Q: How does it work?* \n `A: When you attend a event or do a training, you will be rewarded a **star** (amount of stars differs by each events). If you have certain amount of star, you can request a promotion from the main group or either the regiment. **Q: What kind of stars do we have?** \n `A: We have 4 kind of stars, Blue Star(Star of Bravery), Green Star(Star of Intelligence), Red Star(Star of Activity), Gold Star(Star of Inspection).`")
}

//star promotion system end

if(isCommand('help', message)){
  message.author.send("These are few of the commands\n events: This commands gives you event role \n ibt: This command annouces IBT in the discord server \n nptryout: This command annouces national police tryout \n crutryout: This command annouces crisis respond unit tryout \n ssu: This command announces the Server Start Up in academy \n tstryout: This command announces Training Service tryout ")
}

//event role giver
if(isCommand('events', message)){
      let member = message.guild.member(message.author);
  var username = member.displayName
  let myRole = message.guild.roles.find("name", "Events");

     message.member.addRole(myRole)
    message.reply("Gave you a event role");
}
//event role giver endMeasure
//event annoucement start
  if(isCommand('ibt', message)){
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

  if(isCommand('nptryout', message)){
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
         title: "National Police Tryout",
         url: "https://www.roblox.com/games/1660656584/NEW-Keflakvik-Military-Academy",
         description: "National Police",
         fields: [
           {
             name: "Event notifier",
             value: `${LowRankRoleObject} Ever wanted to join the strictest regiment of Iceland Army? This is your chance click the link and join the academy for NP tryout, Tryout will lock in 7 mins. [Link](https://www.roblox.com/games/1660656584/NEW-Keflakvik-Military-Academy). `
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
       message.channel.send("NP tryout is locked")
     }, 420000)
   } else{
     message.reply("Error:1 || You do not have permmission")
   }
  }

  if(isCommand('tstryout', message)){
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
         title: "Training Service Tryout",
         url: "https://www.roblox.com/games/1660656584/NEW-Keflakvik-Military-Academy",
         description: "Training Service Tryout",
         fields: [
           {
             name: "Event notifier",
             value: `${LowRankRoleObject} Ever wanted to join the training regiment of Iceland Army? This is your chance click the link and join the academy for TS tryout, Tryout will lock in 7 mins. [Link](https://www.roblox.com/games/1660656584/NEW-Keflakvik-Military-Academy). `
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
       message.channel.send("TS tryout is locked")
     }, 420000)
   } else{
     message.reply("Error:1 || You do not have permmission")
   }
  }

if(isCommand('crutryout', message)){
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
       title: "Crisis Respond Unit Tryout",
       url: "https://www.roblox.com/games/1931780914/tryhardedgelordtops-2?privateServerLinkCode=v19cRiujjm3FnlS_mG6djWk85korFq-x",
       description: "Crisis Respond Unit",
       fields: [
         {
           name: "Event notifier",
           value: `${LowRankRoleObject} Ever wanted to join the elite regiment of Iceland Army? This is your chance click the link and join the tryhardedgelordtops for CRU tryout, Tryout will lock in 7 mins. [Link](https://www.roblox.com/games/1931780914/tryhardedgelordtops-2?privateServerLinkCode=v19cRiujjm3FnlS_mG6djWk85korFq-x). `
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
     message.channel.send("CRU tryout is locked")
   }, 420000)
 } else{
   message.reply("Error:1 || You do not have permmission")
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
          value: `${LowRankRoleObject} Events are being hosted in academy, please report to the academy. [Link](https://www.roblox.com/games/1660656584/NEW-Keflakvik-Military-Academy). `
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
} else{
  message.reply("Error:1 || You do not have permmission")
}

}

//event annoucement end

});



client.login(process.env.BOT_TOKEN);
