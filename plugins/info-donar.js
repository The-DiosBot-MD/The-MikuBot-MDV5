let media = './media/menus/Menu4paypal.jpg'
let handler = async (m, { conn, command }) => {
let user = db.data.users[m.sender]
let str = `💖 𝙃𝙤𝙡𝙖!! 𝘼𝙜𝙧𝙖𝙙𝙚𝙯𝙘𝙤 𝙨𝙞 𝙢𝙚 𝘼𝙥𝙤𝙮𝙖𝙨 𝘿𝙤𝙣𝙖𝙣𝙙𝙤. 🎁 𝙈𝙚 𝙖𝙜𝙧𝙖𝙙𝙖 𝙚𝙡 𝙏𝙧𝙖𝙗𝙖𝙟𝙤 𝙦𝙪𝙚 𝙝𝙚 𝙇𝙤𝙜𝙧𝙖𝙙𝙤 𝙮 𝙡𝙤 𝘾𝙤𝙢𝙥𝙖𝙧𝙩𝙤 𝙘𝙤𝙣 𝙐𝙨𝙩𝙚𝙙𝙚𝙨. 𝙂𝙧𝙖𝙘𝙞𝙖𝙨!
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝐃𝐚𝐦𝐨𝐬 𝐠𝐫𝐚𝐜𝐢𝐚𝐬 𝐚 𝐯𝐮𝐞𝐬𝐭𝐫𝐚 𝐠𝐫𝐚𝐧 𝐚𝐲𝐮𝐝𝐚!!

*https://paypal.me/OficialGD*

𝐄𝐧 𝐓𝐡𝐞-𝐌𝐢𝐤𝐮𝐁𝐨𝐭-𝐌𝐃𝐕5

𝐏𝐮𝐞𝐝𝐞𝐬 𝐝𝐨𝐧𝐚𝐫𝐦𝐞 𝐩𝐨𝐫 𝐰𝐮𝐞𝐬𝐭𝐞𝐫 𝐮𝐧𝐢𝐨𝐫 𝐲 𝐩𝐚𝐫𝐚 𝐞𝐬𝐨 𝐩𝐮𝐞𝐝𝐞𝐬 𝐜𝐨𝐧𝐭𝐚𝐜𝐭𝐚𝐫𝐦𝐞 𝐩𝐨𝐫 wa.me/595976126756
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈`
await conn.sendButton(m.chat, str, `𝐓𝐡𝐞-𝐌𝐢𝐤𝐮𝐁𝐨𝐭-𝐌𝐃𝐕5 𝐁𝐲 𝐀𝐬𝐢𝐬𝐭𝐞𝐧𝐜𝐢𝐚\n${asistencia}\n\n` + wm, media, [
['𝐆𝐫𝐮𝐩𝐨𝐬', '.grupos'],
['𝐂𝐫𝐞𝐚𝐝𝐨𝐫', '#owner'],
['𝐈𝐧𝐬𝐭𝐚𝐥𝐚𝐫𝐁𝐨𝐭', '.instalarbot'],
['𝐌𝐞𝐧𝐮', '/menu']], null, [
['𝐃𝐨𝐧𝐚𝐫 𝐚 𝐜𝐨𝐥', `https://paypal.me/OficialGD`]], fkontak)}
/*conn.sendMessage(m.chat, { 
text: str, 
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[m.sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"thumbnail": imagen1, 
"title": `𝙂𝘼𝙏𝘼 𝘿𝙄𝙊𝙎 - 𝘼𝙎𝙄𝙎𝙏𝙀𝙉𝘾𝙄𝘼`, 
body: ig, 
"containsAutoReply": true,
"mediaType": 1, 
"mediaUrl": paypal, 
"sourceUrl": paypal, 
}}}, { quoted: fkontak })}*/
/*conn.sendHydrated(m.chat, str, `𝙂𝘼𝙏𝘼 𝘿𝙄𝙊𝙎 - 𝘼𝙎𝙄𝙎𝙏𝙀𝙉𝘾𝙄𝘼\n${asistencia}\n\n` + wm, media, 'https://paypal.me/OficialGD', '🎁 𝘿𝙤𝙣𝙖𝙧 | 𝘿𝙤𝙣𝙖𝙩𝙚', null, null, [
['𝙂𝙧𝙪𝙥𝙤𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 | 𝙂𝙧𝙤𝙪𝙥𝙨 🔰', '.grupos'],
['𝘾𝙧𝙚𝙖𝙙𝙤𝙧𝙖 | 𝘾𝙧𝙚𝙖𝙩𝙤𝙧 💗', '#owner'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
], m,)}*/
handler.command = /^dona(te|si)|donar|apoyar|paypal|donating$/i
handler.exp = 80
export default handler
