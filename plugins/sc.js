let handler  = async (m, { conn, usedPrefix: _p }) => {
	let fetch = require('node-fetch')
    let fs = require('fs')
const ftrol = {
    key : {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 2022,
    status: 1,
    surface : 1,
    message: 'Script FachriBotz By Fachri 🎨', 
    orderTitle: `Menu ▸`,
    thumbnail: await (await fetch(fla + 'Script')).buffer(), //Gambarnye
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }
let pp = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=Source+code'
let info = `◪ 📮 *SCRIPT BOT*
│ *Script FachriBotz :* 
│ ╰ https://github.com/Ipulpachri/fachribotzv3
│ ╰ https://www.mediafire.com/file/vvy7ki9a2cshl56/fachribotzv3-FachriBotzv3.zip/file
│ 
│ *Base :*
│ ╰ https://github.com/Aziz01pro/HaoriBotz
│ *Base Ori :* 
│ ╰ https://github.com/bochilgaming/games-wabot
│ *RestApi :* https://hardianto.xyz
╰─────═┅═────────
📍 *Note :* 
• Jangan lupa minta izin owner sebelum menggunakan scriptnya kak!
• Jangan Lupa kasih star & kasih credit
`.trim()
await conn.send2Button(m.chat, info, `© ᴹᴿ᭄fαchríвσtzン`, 'Ok Fachri', 'ok', '💌 OWNER', '.owner', ftrol)
}
handler.help = ['sc']
handler.tags = ['info']
handler.command = /^(sc)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

module.exports = handler

let botol = global.botwm
