import { createHash } from 'crypto' 
import PhoneNumber from 'awesome-phonenumber'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix }) => {
let pp = 'https://telegra.ph/The-MikuBot-MDV5-05-17.jpg'
//const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => './src/avatar_contact.png')
let user = global.db.data.users[m.sender]
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
try {
pp = await conn.getProfilePicture(who)         //pp = await conn.getProfilePicture(who)
} catch (e) {

} finally {
let { name, limit, lastclaim, registered, regTime, age } = global.db.data.users[who]
//let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
let prem = global.prems.includes(who.split`@`[0])
let sn = createHash('md5').update(who).digest('hex')
let str =
`𝐓𝐡𝐞-𝐌𝐢𝐤𝐮𝐁𝐨𝐭-𝐌𝐃𝐕5
᯽𝐄𝐬𝐭𝐚𝐝𝐨: 𝐀𝐜𝐭𝐢𝐯𝐨
᯽𝐅𝐮𝐧𝐜𝐢𝐨𝐧𝐚𝐛𝐢𝐥𝐢𝐝𝐚𝐝: 𝐄𝐬𝐭𝐚𝐛𝐥𝐞
᯽𝐃𝐞𝐬𝐞𝐦𝐩𝐞𝐧̃𝐨: 𝐑𝐞𝐠𝐮𝐥𝐚𝐫 - 𝐄𝐬𝐭𝐚𝐛𝐥𝐞`.trim()
    conn.sendFile(m.chat, pp, 'Menu.jpg', str, fkontak, false, { contextInfo: { mentionedJid }}) 
  }
}
handler.help = ['profile [@user]']
handler.tags = ['xp']
handler.command = /^ac?$/i
export default handler
