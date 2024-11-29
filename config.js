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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_11_18_11_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDksXG4gICAgICAgIDg5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA5MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAzNyxcbiAgICAgICAgNzQsXG4gICAgICAgIDIwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE4LFxuICAgICAgICA2NSxcbiAgICAgICAgMTUwLFxuICAgICAgICA5NixcbiAgICAgICAgMzgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDY3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDc1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTczLFxuICAgICAgICAxODEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTExLFxuICAgICAgICAxMzEsXG4gICAgICAgIDYwLFxuICAgICAgICA1MixcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTMxLFxuICAgICAgICAyMixcbiAgICAgICAgMTE3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDcwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjMzLFxuICAgICAgICA0OSxcbiAgICAgICAgNzksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE3LFxuICAgICAgICA3MCxcbiAgICAgICAgMjM2LFxuICAgICAgICA5LFxuICAgICAgICA2NixcbiAgICAgICAgMTcsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTUzLFxuICAgICAgICAxODcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTIwLFxuICAgICAgICA2LFxuICAgICAgICAxNCxcbiAgICAgICAgOSxcbiAgICAgICAgMjgsXG4gICAgICAgIDYsXG4gICAgICAgIDY2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDgwLFxuICAgICAgICAxODQsXG4gICAgICAgIDk3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTQxLFxuICAgICAgICA0NyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNjksXG4gICAgICAgIDE3NixcbiAgICAgICAgMTcwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjA3LFxuICAgICAgICA1MixcbiAgICAgICAgMTQxLFxuICAgICAgICA3MyxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM4LFxuICAgICAgICA3MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDcyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDY2LFxuICAgICAgICA1NCxcbiAgICAgICAgMTg1LFxuICAgICAgICA3MyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDk5LFxuICAgICAgICAxNixcbiAgICAgICAgMTUwLFxuICAgICAgICA5OSxcbiAgICAgICAgMTkzLFxuICAgICAgICA1MCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTQxLFxuICAgICAgICA5MixcbiAgICAgICAgMjIzLFxuICAgICAgICAxNDksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxODksXG4gICAgICAgIDY3LFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICA3MSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDgyLFxuICAgICAgICA5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTc0LFxuICAgICAgICAzOSxcbiAgICAgICAgMjExLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNDcsXG4gICAgICAgIDMyLFxuICAgICAgICA5OCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMSxcbiAgICAgICAgNjksXG4gICAgICAgIDcyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDc5LFxuICAgICAgICAxNjksXG4gICAgICAgIDc2LFxuICAgICAgICA3MCxcbiAgICAgICAgMjI1LFxuICAgICAgICAzOCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA1MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDExLFxuICAgICAgICAxODcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTI2LFxuICAgICAgICA0OSxcbiAgICAgICAgNSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTQxLFxuICAgICAgICAzNCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTE1LFxuICAgICAgICA1MSxcbiAgICAgICAgNjUsXG4gICAgICAgIDYyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNzFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA5OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgODUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTA3LFxuICAgICAgICAzMCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDc5LFxuICAgICAgICAyNSxcbiAgICAgICAgMjM1LFxuICAgICAgICA4OSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDYsXG4gICAgICAgIDExLFxuICAgICAgICAxNTksXG4gICAgICAgIDIyMyxcbiAgICAgICAgNjEsXG4gICAgICAgIDk5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxODMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIwLFxuICAgICAgICAxNCxcbiAgICAgICAgMTIwLFxuICAgICAgICA4MixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDU4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTEzLFxuICAgICAgICAyMCxcbiAgICAgICAgNzgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgOTMsXG4gICAgICAgIDc2LFxuICAgICAgICA4NSxcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZjlZUU5JRE5Zc1lrUUNRMEJjdlk5NFZhMDZPMm5IN1M3Mkw4NGVDUk9Xcz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MDI4MzYwODYzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzMEFDMTlDNUY5QjMyQTA0NTgwNDMxQTdCM0ZBREFFRlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzI4NzkxMzZcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiVi04Q1BMRFVSdmF5X3dQWGJzVndhUVwiLFxuICBcInBob25lSWRcIjogXCI1MjY2M2IxOS0zOTRjLTQ2OTQtOWE4OS1iZjk0YzJhOGJhNThcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMwLFxuICAgICAgNTEsXG4gICAgICAxODksXG4gICAgICAxNTksXG4gICAgICAxNjksXG4gICAgICAxNTUsXG4gICAgICAzMixcbiAgICAgIDE3NixcbiAgICAgIDIyOSxcbiAgICAgIDE2NixcbiAgICAgIDE2OSxcbiAgICAgIDE1MSxcbiAgICAgIDEwOSxcbiAgICAgIDI0OCxcbiAgICAgIDE2MyxcbiAgICAgIDE0OCxcbiAgICAgIDUyLFxuICAgICAgMTcxLFxuICAgICAgOTAsXG4gICAgICAxODJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzQsXG4gICAgICAyNDEsXG4gICAgICAxNDgsXG4gICAgICAxMzMsXG4gICAgICA2MSxcbiAgICAgIDE4NixcbiAgICAgIDE3NSxcbiAgICAgIDI0NyxcbiAgICAgIDEzNyxcbiAgICAgIDEyNixcbiAgICAgIDIxNCxcbiAgICAgIDE1MSxcbiAgICAgIDE4NCxcbiAgICAgIDU0LFxuICAgICAgMjUzLFxuICAgICAgMTM1LFxuICAgICAgMTE2LFxuICAgICAgMTU1LFxuICAgICAgMjQ1LFxuICAgICAgNzhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMlY1WkhTU0dcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwMjgzNjA4NjM6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTYwMTY0NTMxNjkzNDI6MkBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJtYWltdW5hYWxpeXUzOTVcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNblUwN3NDRUpiR3Byb0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIllLNy9RQXZYNXp5TUs0REx2cmVwMmZnWnA0ZDJLZ1k5Y3JHU083UUxhalE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUUpDK2FkV3FZcWJLbXJEUmh0SDJlWkdYdm1yVTlSV1hFdFNEM1o4ZmtIdm8xeVJ3ekpGd3VIUkFEdXF2dEplM1FpcnM4d3ZkQWtxY3dLV01EN0g3Q2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiaFBhd21FNmpwV001QXQwNTRPcFc3ZVM5aXVCT3BBRzgrOGxDSkx4ckxRWTFHRStnSDZZODVQWHFwOUJhUlczWWNxbWs0K3c4OERHTlBXRlNmcGcvQ1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTAyODM2MDg2MzoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDUyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzI4NzkxMzEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFHM3NcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUczcy5qc29uIjogIntcImtleURhdGFcIjpcImhGWW5jeC9QQ2ZqUUFXT1NUZ2N3bXdKTEgzRnBpYUxXZ3V2ZFhzN2V5MVE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NjYxOTczNTc3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzI4NzkxMzM5OTVcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


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
