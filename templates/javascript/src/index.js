const { Client, GatewayIntentBits } = require('discord.js');
const { Sern } = require('@sern/handler');

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMembers,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent, // Make sure this is enabled for text commands!
	],
});
//View docs for all options
Sern.init({
	client,
	defaultPrefix: '!', // removing defaultPrefix will shut down text commands
	commands: 'src/commands',
	// events: 'src/events' (optional),
});

client.login();
