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
	    {title: "ππΌπππ ππΌππΏππ", rowId: '.daftar ' + namae + '.' + pickRandom(['30','29','28','27','26','25','24','23','22','21','20','19','18','17','16','15','14','13','12','11','10','9'])}
	]
    },
    {
	title: "ππππ 21-30 ππΌπππ",
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
	title: "ππππ  9-20 ππΌπππ",
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
  *α΄sα΄ΚΙ΄α΄α΄α΄ :* ${conn.getName(m.sender)}\nΚα΄Κα΄s :
  π·. α΄α΄Ι΄Ι’α΄Ι΄ sα΄α΄α΄ α΄α΄ Κα΄α΄
  πΈ. α΄α΄Ι΄Ι’α΄Ι΄ α΄α΄Κ?α΄Ι΄ Κα΄α΄ α΄Ιͺα΄α΄ α΄α΄Ι΄α΄Κ?α΄Ι΄ Κα΄α΄ ΚΙͺsα΄ α΄α΄Κα΄α΄Ι΄α΄ Κα΄Ι΄Ι΄α΄α΄
  πΉ. α΄Ιͺα΄α΄ sα΄α΄α΄.α΄α΄Ι΄α΄ Κα΄α΄ α΄Ιͺα΄α΄α΄ α΄α΄Ι΄α΄α΄α΄‘α΄Κ Κα΄Κα΄Κα΄Ιͺ Κα΄α΄ α΄α΄α΄Ιͺ
  πΊ. Ι’α΄Ι΄α΄α΄α΄Ι΄ ?Ιͺα΄α΄Κ α΄α΄Ι΄Ι’α΄Ι΄ ΚΙͺα΄α΄α΄
  
  https://trakteer.id/notsakaa/tip`,
  title: "===== π₯π¨πππ¦ =====",
  buttonText: "Click Here !",
  sections
}

  let user = global.db.data.users[m.sender]
  if (user.registered === true) throw `[π¬] Kamu sudah terdaftar\nMau daftar ulang? *${usedPrefix}unreg <SERIAL NUMBER>*`
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
βββ’ *α΄sα΄Κs*
ββΈ *sα΄α΄α΄α΄s:* βοΈ sα΄α΄α΄α΄ss?α΄Κ
ββΈ *Ι΄α΄α΄α΄:* ${name}
ββΈ *α΄Ι’α΄:* ${age} Κα΄α΄Κs
ββΈ *sΙ΄:* ${sn}
βββββΒ·Β·Β·

α΄α΄α΄α΄ α΄sα΄Κ Κα΄Ι΄Ι’ α΄α΄ΚsΙͺα΄α΄α΄Ι΄ α΄Ιͺα΄α΄α΄α΄Κα΄sα΄ Κα΄α΄, α΄Ιͺα΄α΄α΄ΙͺΙ΄ α΄α΄α΄Ι΄ α΄α΄Ι΄α΄α΄ α΄α΄ΚsΚα΄Κα΄ (. β α΄ β.)
`
  let buttonMessage= {
'document':{'url':sgc},
'mimetype':global.ddocx,
'fileName':'- - - - - Κα΄Ι’Ιͺsα΄α΄Κ - - - - -',
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
{'buttonId':'.menu','buttonText':{'displayText':'α΄α΄Ι΄α΄'},'type':1},
{'buttonId':'.donasi','buttonText':{'displayText':'α΄α΄Ι΄α΄sΙͺ'},'type':1}
],
'headerType':6}
    await conn.sendMessage(m.chat,buttonMessage, { quoted:m})
}
handler.help = ['daftar', 'register'].map(v => v + ' <nama>.<umur>')
handler.tags = ['xp']

handler.command = /^(akumauo|daftar|verify|reg(ister)?)$/i

export default handler
