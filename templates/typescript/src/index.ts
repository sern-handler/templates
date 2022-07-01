import { Client, GatewayIntentBits } from 'discord.js';
import { Sern } from '@sern/handler';

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMembers,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent, //Make sure this is enabled for text commands!
	],
});
//View docs for all options
Sern.init({
	client,
	defaultPrefix: '!', // removing defaultPrefix will shut down text commands
	commands: 'dist/commands',
	events: '', // join discord server to learn how to load events!
});

client.login();
