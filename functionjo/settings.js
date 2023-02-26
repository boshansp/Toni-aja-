const fs = require('fs')
const chalk = require('chalk')

global.owner = ['6285733142868']
global.ownerNumber = ["6285733142868@s.whatsapp.net"]
global.nomerOwner = "6285733142868"
global.namabotnya = 'TONI STORE'
global.namaownernya = 'TONI STORE'
global.packname = '© TONI STORE||+6285733142868🇲🇨\nI`m From Indonesia'
global.author = 'Wa : +6285733142868\nYT : ALEX C'
global.sessionName = 'session'
global.lolkey = 'RINTISAJA'
global.email = 'Email Lu'
global.group = 'letak link grup bokep'
global.youtube = 'letak link YouTube mu'
global.website = 'letak link bokep'
global.github = 'letak link github mu'
global.nomorowner = 'https://wa.me/6285733142868'
global.region = 'I`m From Indonesia'
global.prefa = ['','!','.','#','-','•']
global.krmd = 
{
    success: '```Success✅```',
    admin: '```Fitur Khusus Admin Group!!!```',
    botAdmin: '```Bot Harus Menjadi Admin Terlebih Dahulu!!!```',
    owner: '```Fitur Khusus Owner Bot!!!```',
    group: '```Fitur Digunakan Hanya Untuk Group!!!```',
    private: '```Fitur Digunakan Hanya Untuk Private Chat!!!```',
    bot: '```Fitur Khusus Pengguna Nomor Bot!!!```',
    error: '```Mungkin Lagi Error Kak Harap Lapor Owner Biar Langsung Di Benerin🙏```',
    wait: '```Waittt...```'
}

global.thumb = fs.readFileSync('./THE JO BOT/image/thumb.jpg')
global.videokir = fs.readFileSync('./THE JO BOT/image/jobotz.mp4')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})