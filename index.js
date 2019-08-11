const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!')
  }
})

client.login('NjEwMTQ3NDgzNzAzNTc0NTQ3.XVBD-w.z8Hb0vJGaGBa6D1RP16EyeePA8Q')
