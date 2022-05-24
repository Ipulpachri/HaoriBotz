let fs = require('fs')
let handler = async (m) => {
let stc = fs.readFileSync('./sticker/sok-keras.webp')
conn.fakeReply(m.chat, stc, '0@s.whatsapp.net', '*Awkwk Tolol:v*', 'status@broadcast')
}

handler.customPrefix = /^(tolol)$/i
handler.command = new RegExp

module.exports = handler
