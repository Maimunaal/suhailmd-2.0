const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : ""2349028360863;




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_20_18_11_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDQ0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDQ1LFxuICAgICAgICA0NCxcbiAgICAgICAgMjE2LFxuICAgICAgICA0MSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTAzLFxuICAgICAgICAyNSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTE5LFxuICAgICAgICAzMCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNjMsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NyxcbiAgICAgICAgMTA1LFxuICAgICAgICA5NSxcbiAgICAgICAgODgsXG4gICAgICAgIDk5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDU2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI0LFxuICAgICAgICA2NixcbiAgICAgICAgMTI0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDk1LFxuICAgICAgICAxODMsXG4gICAgICAgIDk0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTk3LFxuICAgICAgICA4OCxcbiAgICAgICAgMjUyLFxuICAgICAgICA1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjQwLFxuICAgICAgICAzNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDcwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTcyLFxuICAgICAgICAzMixcbiAgICAgICAgMjE4LFxuICAgICAgICAxOSxcbiAgICAgICAgNzIsXG4gICAgICAgIDMyLFxuICAgICAgICA0MSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxLFxuICAgICAgICA3NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDkyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTEsXG4gICAgICAgIDksXG4gICAgICAgIDYzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDMzLFxuICAgICAgICAwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEwMixcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDYzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEwNixcbiAgICAgICAgODUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDQ4LFxuICAgICAgICA4NCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNCxcbiAgICAgICAgOTgsXG4gICAgICAgIDkwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDczLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTg2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTEsXG4gICAgICAgIDY2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNTgsXG4gICAgICAgIDI0NixcbiAgICAgICAgNzEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA3MSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDY5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDk0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjAyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDcxLFxuICAgICAgICAzNyxcbiAgICAgICAgMjExLFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzUsXG4gICAgICAgIDM1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTI2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI1LFxuICAgICAgICA0MixcbiAgICAgICAgOTUsXG4gICAgICAgIDMxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDY5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDYwLFxuICAgICAgICA0MCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyOCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTEzLFxuICAgICAgICA0OCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDkwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDQwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIxLFxuICAgICAgICAyNyxcbiAgICAgICAgNTYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMzcsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTgyLFxuICAgICAgICAzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgODUsXG4gICAgICAgIDQxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTI1LFxuICAgICAgICA5NyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIzLFxuICAgICAgICAyLFxuICAgICAgICAyMDksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxODQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNTUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTc5LFxuICAgICAgICA1MyxcbiAgICAgICAgOTcsXG4gICAgICAgIDMzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNDAsXG4gICAgICAgIDU3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTQxLFxuICAgICAgICAyNixcbiAgICAgICAgMTYsXG4gICAgICAgIDgxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDY3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEzOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTc4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIktWRS9mSlBJSDJDM1EwZFg4TWN4TSs3SWZqbE1VVGR2OUdvckdKZmI2dGM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTAyODM2MDg2M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQkMxRkU3MUJCRjIyNTlCMTBGNkE4QTI3NkE3RURBQ0ZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMyOTExNDg3XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjF1TUstNjFSUzlhWWpCcmpzNDNUVHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMGY0MDMzZWQtMGVmNy00MmVmLTk3NjQtMThiM2ZjYWVkNjg4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwNyxcbiAgICAgIDExNCxcbiAgICAgIDY4LFxuICAgICAgMTk1LFxuICAgICAgMjgsXG4gICAgICAxMixcbiAgICAgIDEwNCxcbiAgICAgIDIzNixcbiAgICAgIDY2LFxuICAgICAgMTk2LFxuICAgICAgNTgsXG4gICAgICA3NyxcbiAgICAgIDE1MSxcbiAgICAgIDIyMSxcbiAgICAgIDI1MSxcbiAgICAgIDE1NSxcbiAgICAgIDE4NyxcbiAgICAgIDI0LFxuICAgICAgMTg4LFxuICAgICAgMjAyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4NSxcbiAgICAgIDExMCxcbiAgICAgIDM2LFxuICAgICAgNDcsXG4gICAgICAyMTEsXG4gICAgICAxMjMsXG4gICAgICA2MixcbiAgICAgIDE2NCxcbiAgICAgIDMsXG4gICAgICA3LFxuICAgICAgNjgsXG4gICAgICAxMDYsXG4gICAgICAyNSxcbiAgICAgIDI0OCxcbiAgICAgIDIyMixcbiAgICAgIDE3MixcbiAgICAgIDE2OCxcbiAgICAgIDg3LFxuICAgICAgMjI3LFxuICAgICAgMjZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWU1WMVZIWlJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwMjgzNjA4NjM6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTYwMTY0NTMxNjkzNDI6M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNblUwN3NDRVBmQ3FMb0dHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIllLNy9RQXZYNXp5TUs0REx2cmVwMmZnWnA0ZDJLZ1k5Y3JHU083UUxhalE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWTRSMHE5eW9kNGlZeUN0SDcvcHZNOUowR3RsbEV2cytEMnpSZUlUOWgyMHhIc3pUNThMSkVqUVl3MC9Zb29YcHJFNmhIZGoxNzRISUNzVm9uSFUrQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwicmJRWWZqbjltZ21lR3dPRzd1d3VFbzdyNmF3TFhMcmxRMUo4NEhCazdpKzJGRTZSL20wNGQwbDN0QjE2clBiUEI1Vnl0WDBqQTBjVzNEOVo4NEkzaVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTAyODM2MDg2MzozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDUyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzI5MTE0ODMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFHM3NcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUczcy5qc29uIjogIntcImtleURhdGFcIjpcImhGWW5jeC9QQ2ZqUUFXT1NUZ2N3bXdKTEgzRnBpYUxXZ3V2ZFhzN2V5MVE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NjYxOTczNTc3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzI4NzkxMzM5OTVcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",2349028360863


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
