let handler = async m => m.reply(`
╭─「 Donasi • Gopay 」
│ • Gopay : 089687033380 a/n Aqla Briyan
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
