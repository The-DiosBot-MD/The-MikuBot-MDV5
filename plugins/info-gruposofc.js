let handler = async (m, { conn, command }) => {
let media = gataVidMenu
let str = `✿︎ʙɪᴇɴᴠᴇɴɪᴅᴏ ᴀ ʟᴏs ɢʀᴜᴘᴏs ᴏғɪᴄɪᴀʟᴇs ᴅᴇʟ ʙᴏᴛ .ᴀᴄᴏɴᴛɪɴᴜᴀᴄɪᴏɴ sᴇ ᴅᴇsᴘʟᴇɢᴀ ʟᴀ sɪɢᴜɪʀɴᴛᴇ ʟɪsᴛᴀ
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*Versión ${gt}*
➥ ${vs}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
༒︎ɢʀᴜᴘᴏ ᴏғᴄ ${gt}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✨ *Informate de las Novedades!!!*
   *${canal1}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝐒𝐨𝐩𝐨𝐫𝐭𝐞 𝐝𝐞𝐥 𝐛𝐨𝐭
*${soporteGB}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*Por favor, no ingresar con números de Bots, y mantener el respeto.*\n`
await conn.sendButton(m.chat, str, `𝐓𝐡𝐞-𝐌𝐢𝐤𝐮𝐁𝐨𝐭-𝐌𝐃𝐕5 𝐁𝐲 𝐀𝐬𝐢𝐬𝐭𝐞𝐧𝐜𝐢𝐚 𝐓𝐞𝐜\n${asistencia}\n\n` + wm, media, [
['𝐂𝐮𝐞𝐧𝐭𝐚𝐬 𝐎𝐅𝐂', '.cuentasgb'],
['𝐃𝐨𝐧𝐚𝐫', '.donar'],
['𝐌𝐞𝐧𝐮', '/menu']], null, [
['𝐓𝐡𝐞-𝐌𝐢𝐤𝐮𝐁𝐨𝐭-𝐌𝐃𝐕5', `${md}`]], fkontak)}
/*conn.sendHydrated(m.chat, str, `𝙂𝘼𝙏𝘼 𝘿𝙄𝙊𝙎 - 𝘼𝙎𝙄𝙎𝙏𝙀𝙉𝘾𝙄𝘼\n${asistencia}\n\n` + wm, media, 'https://github.com/GataNina-Li/GataBot-MD', '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
['𝘾𝙪𝙚𝙣𝙩𝙖𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 | 𝘼𝙘𝙘𝙤𝙪𝙣𝙩𝙨 ✅', '.cuentasgb'],
['🎁 𝘿𝙤𝙣𝙖𝙧 | 𝘿𝙤𝙣𝙖𝙩𝙚', '.donar'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
], m,)}*/

handler.command = /^linkgc|grupos|gruposgatabot|gatabotgrupos|gruposdegatabot|groupofc|gruposgb|grupogb|groupgb$/i
handler.exp = 33

export default handler
