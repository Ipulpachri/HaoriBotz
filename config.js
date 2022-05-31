// Bismillahirrahmanirrahim
// thank you to ALLAH Swt
// thank you to Nurutomo as wabot-aq
// thank you to ariffb as stikerinbot
// thank you to botstylee
// thank you to bochilgaming as games-wabot
// thank you to benni ismael
// thank you to zerochanBot
// thank you to fernazer
// thank you to King Of Bear Official
// thank you to MikeBot Dev Team
// thank you to ALL Bot creator
// thank you to Fachri
// and thanks you to who support my Bot

//wektukk
let moment = require('moment-timezone')
let d = new Date(new Date + 3600000)
let locale = 'id'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})

let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let wktu = moment.tz('Asia/Jakarta').format('HH:mm:ss')

gc1 = ''
gc2 = ''
gc3 = ''
global.linkGC = ['https://chat.whatsapp.com/GimZmhA2XTQFfPXk4XMrv6', ''] // ganti jadi group lu
global.owner = ['6285713041886'] // Put your number here //owner eval
global.kontak = ['6285713041886','62896853821126'] //Ketika ada yang ngetik #owner
global.mods = ['6285713041886'] // Want some help?
global.prems = ['6285713041886'] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com', 
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  dhnjing: 'https://dhnjing.xyz',
  zeks: 'https://api.zeks.me',
  pencarikode: 'https://pencarikode.xyz',
  bear: 'https://apikey-bear.herokuapp.com',
  bear2: 'https://apikey-bear2.herokuapp.com',
  bear3: 'https://apikey-bear3.herokuapp.com',
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey' (apikey kalian)
  'https://api.xteam.xyz': 'buy',
  'https://api.lolhuman.xyz': 'ed6c4f2c72b6f92f7d201464',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'CpGSLymOQy9KfTKgQZr9eDSYqqR',
  'https://pencarikode.xyz': 'pais',
  'https://apikey-bear.herokuapp.com': 'buy',
  'https://apikey-bear2.herokuapp.com': 'buy',
  'https://apikey-bear3.herokuapp.com': 'buy',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}

lolkey = 'ed6c4f2c72b6f92f7d201464'
zekskey = 'CpGSLymOQy9KfTKgQZr9eDSYqqR'
xteamkey = '7cf3fc56c3103d90'
leyskey = 'dappakntlll'
bearkey = 'buy'

//xteam        MIMINETBOT
namaig = 'https://instagram.com/sfdesign_id'
namagithub = 'https://github.com/Ipulpachri'
kasihcaption = `Nih kak`
namakontak1 = ''
namakontak2 = ''

//kasihcaption = `Nih Kak`

// Sticker WM
global.packname = 'fαchrí вσtzོン' // ganti aja
global.author = '@sfdesign_id' // ganti aja

//yyy
bc = 'fαchrí-вσtz' //King Of Bear Broadcast
footer = '\nᴹᴿ᭄fαchríвσtzོン'
namabot = '© ᴹᴿ᭄fαchríвσtzོン'
namalu = 'ᴹᴿ᭄fαchríོン'
global.botwm = '© ζαchrιβοτzོ'//UBAH JADI NAMAMU


// 
wait = '⏳ Tunggu Sebentar, Jangan Kemana Mana Ya...'
global.wait = '⏳ Tunggu, Jangan Kemana Mana Ya Kak...'
global.rpg = 'Fitur Rpg Dimatikan\nKetik *!enable* *rpg* untuk menggunakan fitur ini!\nKalo Mau main Disini aja\nhttps://chat.whatsapp.com/'
global.nsfw = 'Fitur NSFW Dimatikan\nKetik *!enable* *nsfw* untuk menggunakan fitur ini!\n“Katakanlah kepada orang laki-laki yang beriman: Hendaklah mereka menahan pandanganya, dan memelihara kemaluannya; … Katakanlah kepada wanita yang beriman: Hendaklah mereka menahan pandangannya, dan kemaluannya, dan janganlah mereka Menampakkan perhiasannya, kecuali yang (biasa) nampak dari padany,” \n(TQS. Al-Nur [24]: 30-31).'
global.eror = '❗ Server Nya Error Kak'
global.botdate = `❏ ${wktu}\n❏ ${week} ${date}`

global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&doScale=true&scaleWidth=500&scaleHeight=500&fontsize=100&fillTextType=0&backgroundColor=%23101820&text='

// tingkat kesulitan, semakin tinggi semakin susah
global.multiplier = 36 // The higher, The harder levelup

//*****************PEMBATAS*********************
// JANGAN DI GANTI NTAR KLO GABISA JAN TANYA GW 

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
