import { createHash } from 'crypto'
import fetch from 'node-fetch'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i

let handler = async function (m, { text, usedPrefix, command }) {
	function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
	let namae = conn.getName(m.sender)
	const sections = [
	{
	title: "Select Your Age Here !",
	rows: [
	    {title: "𝙏𝘼𝙃𝙐𝙉 𝙍𝘼𝙉𝘿𝙊𝙈", rowId: '.daftar ' + namae + '.' + pickRandom(['30','29','28','27','26','25','24','23','22','21','20','19','18','17','16','15','14','13','12','11','10','9'])}
	]
    },
    {
	title: "𝙐𝙈𝙐𝙍 21-30 𝙏𝘼𝙃𝙐𝙉",
	rows: [
	    {title: "30 Years", rowId: '.daftar ' + namae + '.30 '},
	    {title: "29 Years", rowId: '.daftar ' + namae + '.29 '},
	    {title: "28 Years", rowId: '.daftar ' + namae + '.28 '},
	{title: "27 Years", rowId: '.daftar ' + namae + '.27 '},
	{title: "26 Years", rowId: '.daftar ' + namae + '.26 '},
	{title: "25 Years", rowId: '.daftar ' + namae + '.25 '},
	{title: "24 Years", rowId: '.daftar ' + namae + '.24 '},
	{title: "23 Years", rowId: '.daftar ' + namae + '.23 '},
	{title: "22 Years", rowId: '.daftar ' + namae + '.22 '},
	{title: "21 Years", rowId: '.daftar ' + namae + '.21 '}
	]
    },
    {
	title: "𝙐𝙈𝙐𝙍  9-20 𝙏𝘼𝙃𝙐𝙉",
	rows: [
	    {title: "20 Years", rowId: '.daftar ' + namae + '.20 '},
	    {title: "19 Years", rowId: '.daftar ' + namae + '.19 '},
	    {title: "18 Years", rowId: '.daftar ' + namae + '.18 '},
	{title: "17 Years", rowId: '.daftar ' + namae + '.17 '},
	{title: "16 Years", rowId: '.daftar ' + namae + '.16 '},
	{title: "15 Years", rowId: '.daftar ' + namae + '.15 '},
	{title: "14 Years", rowId: '.daftar ' + namae + '.14 '},
	{title: "13 Years", rowId: '.daftar ' + namae + '.13 '},
	{title: "12 Years", rowId: '.daftar ' + namae + '.12 '},
	{title: "11 Years", rowId: '.daftar ' + namae + '.11 '},
	{title: "10 Years", rowId: '.daftar ' + namae + '.10 '},
	{title: "9 Years", rowId: '.daftar ' + namae + '.9 '}
	]
    },
]

const listMessage = {
  text: `Harap di baca beberapa rules berikut`,
  footer: `
  *ᴜsᴇʀɴᴀᴍᴇ :* ${conn.getName(m.sender)}\nʀᴜʟᴇs :
  𝟷. ᴊᴀɴɢᴀɴ sᴘᴀᴍ ᴋᴇ ʙᴏᴛ
  𝟸. ᴊᴀɴɢᴀɴ ᴛᴇʟғᴏɴ ʙᴏᴛ ᴊɪᴋᴀ ᴍᴇɴᴇʟғᴏɴ ʙᴏᴛ ʙɪsᴀ ᴛᴇʀᴋᴇɴᴀ ʙᴀɴɴᴇᴅ
  𝟹. ᴊɪᴋᴀ sᴀᴀᴛ.ᴍᴇɴᴜ ʙᴏᴛ ᴛɪᴅᴀᴋ ᴍᴇɴᴊᴀᴡᴀʙ ʙᴇʀᴀʀᴛɪ ʙᴏᴛ ᴍᴀᴛɪ
  𝟺. ɢᴜɴᴀᴋᴀɴ ғɪᴛᴜʀ ᴅᴇɴɢᴀɴ ʙɪᴊᴀᴋ
  
  https://trakteer.id/notsakaa/tip`,
  title: "===== 𝗥𝗨𝗟𝗘𝗦 =====",
  buttonText: "Click Here !",
  sections
}

  let user = global.db.data.users[m.sender]
  if (user.registered === true) throw `[💬] Kamu sudah terdaftar\nMau daftar ulang? *${usedPrefix}unreg <SERIAL NUMBER>*`
  if (!Reg.test(text)) return conn.sendMessage(m.chat, listMessage, { quoted: m })
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'Nama tidak boleh kosong (Alphanumeric)'
  if (!age) throw 'Umur tidak boleh kosong (Angka)'
  age = parseInt(age)
  if (age > 30) throw 'umur umur mendekati kematian'
  if (age < 5) throw 'Bocil bau bawang'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.fromMe ? conn.user.jid : m.sender
  let cap = `
┏─• *ᴜsᴇʀs*
│▸ *sᴛᴀᴛᴜs:* ☑️ sᴜᴄᴄᴇssғᴜʟ
│▸ *ɴᴀᴍᴇ:* ${name}
│▸ *ᴀɢᴇ:* ${age} ʏᴇᴀʀs
│▸ *sɴ:* ${sn}
┗────···

ᴅᴀᴛᴀ ᴜsᴇʀ ʏᴀɴɢ ᴛᴇʀsɪᴍᴘᴀɴ ᴅɪᴅᴀᴛᴀʙᴀsᴇ ʙᴏᴛ, ᴅɪᴊᴀᴍɪɴ ᴀᴍᴀɴ ᴛᴀɴᴘᴀ ᴛᴇʀsʜᴀʀᴇ (. ❛ ᴗ ❛.)
`
  let buttonMessage= {
'document':{'url':sgc},
'mimetype':global.ddocx,
'fileName':'- - - - - ʀᴇɢɪsᴛᴇʀ - - - - -',
'fileLength':fsizedoc,
'pageCount':fpagedoc,
'contextInfo':{
'forwardingScore':555,
'isForwarded':true,
'externalAdReply':{
'mediaUrl':global.sig,
'mediaType':2,
'previewType':'pdf',
'title':global.titlebot,
'body':global.titlebot,
'thumbnail':await(await fetch('https://telegra.ph/file/551f95b345d9d3c10c7aa.jpg')).buffer(),
'sourceUrl':sgc}},
'caption':cap,
'footer':botdate,
'buttons':[
{'buttonId':'.menu','buttonText':{'displayText':'ᴍᴇɴᴜ'},'type':1},
{'buttonId':'.donasi','buttonText':{'displayText':'ᴅᴏɴᴀsɪ'},'type':1}
],
'headerType':6}
    await conn.sendMessage(m.chat,buttonMessage, { quoted:m})
}
handler.help = ['daftar', 'register'].map(v => v + ' <nama>.<umur>')
handler.tags = ['xp']

handler.command = /^(akumauo|daftar|verify|reg(ister)?)$/i

export default handler
