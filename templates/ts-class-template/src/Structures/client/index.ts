import { Client, GatewayIntentBits, Partials } from 'discord.js';
import { Sern } from '@sern/handler';
import type { useContainer } from '#BOT';
import { env } from '#utils';

export class BOT extends Client {
	constructor() {
		super({
			intents: [
				GatewayIntentBits.Guilds,
				GatewayIntentBits.GuildMembers,
				GatewayIntentBits.GuildMessages,
				GatewayIntentBits.MessageContent, //Make sure this is enabled for text commands!
			],
			partials: [
				Partials.Channel,
				Partials.GuildMember,
				Partials.GuildScheduledEvent,
				Partials.Message,
				Partials.Reaction,
				Partials.ThreadMember,
				Partials.User,
			],
			shards: 'auto',
			/**
			 * uncomment this to prevent bot from replying to users.
			 * allowedMentions: {
			 *  repliedUser: false,
			 *  users: [],
			 * },
			 */
		});
		this.token = env.DISCORD_TOKEN;
	}

	async start(container: typeof useContainer) {
		Sern.init({
			defaultPrefix: 'astra!',
			commands: 'dist/commands',
			events: 'dist/events',
			containerConfig: {
				get: container,
			},
		});
		this.setMaxListeners(0);
		await this.login(this.token!);
	}
}
