//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "false";
global.video = "false";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "false";
global.email = "rolithrathwa@gmail.com";
global.location = "Gujarat, India";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Kolkata";
global.github = process.env.GITHUB || "false";
global.gurl = process.env.GURL || "false";
global.website = process.env.GURL || "false";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "null";
global.devs = "null";
global.sudo = process.env.SUDO || "+918128729017";
global.owner = process.env.OWNER_NUMBER || "+919737825303";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "false";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "false";
global.scan = "false";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUI5U0tGcjdNZjl0QnFJclR6RUpuV2RNZ0ZybW9PdUtQWXFDWE9DL0hudz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEl5OE1vd3N1cWQwY0tvUldKWDRpV2tHUDVQeHBtVW1DNzV4elNHdWRTZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2SWEyMG1NakFJWmh4R1pwd1BsR2lKcmZmK1RrWUw5cmc0YmZxR2NnM2tzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1VERSZ0l2WWFOSmtpWEZWWklCYzBFNnVZRVg1eGwxKy80SmVKNFRnMFJvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFHNStaZEdUQ2oyTWJnczFZN0FVU2FaM1NHT1BlK1R4cjJEVEcxOElVSEU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InYvVmVTRGtUbSs4K2l6OG9Xa282bTlSWGcxV2lzNUpyS2hhdXBhUEVoeDQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNE9teW1kVWlzSzgvYTNHYkpPZWJwQ1NjMGExTUdhclFmbkhUTjBIaUUyND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia01sQXRURFhiaGtsSjB6enkxN2FKWGNNSVFuQUpKajFNS2pxYmFMWjBsbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlRR3B0S0JuZldxa2h4S3JaUFpFQmRhd0p6N2VGQW1ycFZtNUhJY3c2SDhSaVgzUjNhOHFSM2xDbG1yRTgzMllNMWsyZjgvZ2NMcGtXWkkrMTNadkR3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjMwLCJhZHZTZWNyZXRLZXkiOiJyWjJuSkFTYlpDSDQrYzgwOURaeDJic1VZdmwrb0tNenBSSXRLaS82QUJJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkxODEyODcyOTAxN0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJFMjcxOTRGQUQxNkU0QzQ5QzQ3QjIxQzY0QjhGNDNGNCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI1MTg3MDM2fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MTgxMjg3MjkwMTdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRjI1ODgwNkY2REYyNEVBM0ExQTY0NTREMkM3QzJEMzQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNTE4NzAzNn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiY0VOYUVzRklTZ202a3FxTk5DdTloQSIsInBob25lSWQiOiJkZDZlYmNiOC0xNDM4LTRlZGUtOTU1NS02Yjc4MTViYWMyMTQiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidytPOVJBZjlSa3ZGL3JuU2d2UTJCeStQN040PSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZqdllLOStmeXIxZkZ5L3ZDYTU1TzJralhDaz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJLUTFYOEs1MyIsIm1lIjp7ImlkIjoiOTE4MTI4NzI5MDE3OjEwQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkoifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05LTzNmTUdFTXFIMGJZR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ilg0VGo1T2tkckRpZnMybDhqSTB3bGpmb0RyUUQvMUZEZDA0STBBQm1peDQ9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkFYOHVUc0VpSlhFeFgxUnlkSU9haVRRUHh5Q2dvb3NwQWI5QVVPRnVheXdVMjRwbjFKN0draDUxOUxWTUlWRmQ2aUFMTWd6WFFSbGtraGF2THIzL0F3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJhSmVhb0VESXpLMmhGNG5ISUJBSHMxUy9zOHRJcnBNQkVGOEU3NjdWUFM0RVFBa1VSUmpyeHVKbjVSUGQzYUZLOU5pL1VsajBldi8rTDRjRkhOaitBZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkxODEyODcyOTAxNzoxMEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJWK0U0K1RwSGF3NG43TnBmSXlOTUpZMzZBNjBBLzlSUTNkT0NOQUFab3NlIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI1MTg3MDMzLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUsvOCJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "@",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "ℙ𝕆𝕎𝔼ℝ𝔼𝔻 𝔹𝕐 𝔼𝕊 𝕋𝔼𝔸𝕄𝕊-𝕍2👑",
  author: process.env.PACK_AUTHER || "ES TEAMS-V2",
  packname: process.env.PACK_NAME || "ES TEAMS",
  botname: process.env.BOT_NAME || "𝔼𝕊 𝕋𝔼𝔸𝕄𝕊-𝕍2👑",
  ownername: process.env.OWNER_NAME || "𝔼𝕊 𝕋𝔼𝔸𝕄𝕊-𝕋𝔼ℂℍ👑",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "ES TEAMS").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
