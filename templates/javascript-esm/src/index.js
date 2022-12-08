import { Client, GatewayIntentBits } from 'discord.js';
import { Sern, single, DefaultLogging } from '@sern/handler';

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMembers,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent, // Make sure this is enabled for text commands!
	],
});

/**
 * Where all of your dependencies are composed. 
 * '@sern/client' is usually your Discord Client.
 * View documentation for pluggable dependencies
 * Configure your dependency root to your liking.
 * It follows the npm package iti https://itijs.org/.
 * Use this function to access all of your dependencies.
 * This is used for external event modules as well 
 */
export const useContainer = Sern.makeDependencies({	
    build: root => root
        .add({ '@sern/client': single(client)  })
        .add({ '@sern/logger': single(new DefaultLogging()) })
});

//View docs for all options
Sern.init({
	defaultPrefix: '!', // removing defaultPrefix will shut down text commands
	commands: 'src/commands',
	// events: 'src/events' (optional),
	containerConfig : {
		get: useContainer
	}
});

client.login();
