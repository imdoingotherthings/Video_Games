const Discord = require('discord.js');
const client = new Discord.Client();
const gJSON = require('get-json');
const fetch = require('node-fetch');
const config = require('./config.json'); 


client.on('ready', () => {
    console.log('Ready');
  });
  
client.on('message', function (message) {
    if (message.content === config.prefix + 'ping') {
        message.channel.send('pong');
    }
});
  
  client.login(config.token);