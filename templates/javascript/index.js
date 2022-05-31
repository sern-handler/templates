import { Client, GatewayIntentBits } from 'discord.js';
import { Sern } from '@sern/handler';

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMembers,
		GatewayIntentBits.GuildMessages,
	],
});

Sern.init({
	client,
	defaultPrefix : '!', // removing defaultPrefix will shut down text commands
	commands: 'commands',
});

client.login();
