const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');

cmd({
    pattern: "alive",
    alias: ["status", "runtime", "uptime"],
    desc: "Check uptime and system status",
    category: "main",
    react: "👋",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Generate system status message
        const status = `          
╭━━〔 *𝐐𝐔𝐄𝐄𝐍 𝐕𝐈𝐒𝐇𝐔 -MD* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• *👋Hi*: ${pushname}
┃◈┃• *⏳Uptime*:  ${runtime(process.uptime())} 
┃◈┃• *📟 Ram*: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${(os.totalmem() / 1024 / 1024).toFixed(2)}MB
┃◈┃• *👨‍💻 Owner*: 𝐕𝐈𝐒𝐇𝐔 Tech </>
┃◈└───────────┈⊷
╰──────────────┈⊷

  *𝐐𝐔𝐄𝐄𝐍 𝐕𝐈𝐒𝐇𝐔 -MD Multidevice Whatsapp Bot Make By Hashiya Tech*

     ⭕ FOLLOW 𝗢𝗨𝗥 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 𝗖𝗛𝗔𝗡𝗡𝗘𝗟
     
 _https://whatsapp.com/channel/0029Vb7OtqeBPzjalZqMb81k_

  
> *POWERED BY 𝐐𝐔𝐄𝐄𝐍 𝐕𝐈𝐒𝐇𝐔 -MD 📌️`;


        await conn.sendMessage(from, { 
            image: { url: `/storage/emulated/0/Pictures/WhatsApp/IMG-20260407-WA0013.jpg` },  // Image URL
            caption: status,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363395674230271@newsletter',
                    newsletterName: '𝐐𝐔𝐄𝐄𝐍 𝐕𝐈𝐒𝐇𝐔-MD',
                    serverMessageId: 190
                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.error("Error in alive command:", e);
        reply(`An error occurred: ${e.message}`);
    }
});
