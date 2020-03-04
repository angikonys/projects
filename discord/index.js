const Discord = require('discord.js');

const bot = new Discord.Client();

const config = require("./config");

const token = config.discord.token;

const commandHandler = require('./commandHandler')

const prefix = '!'

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();
	
	

	
	
});

bot.login(token);




