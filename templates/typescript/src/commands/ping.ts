import type { Interaction } from 'discord.js';
import { apply, sernModule } from '@sern/handler/dist/handler/plugins/plugin';
import { CommandType } from '@sern/handler/dist/handler/sern';
import type { Context } from '@sern/handler/dist/handler/structures/structxports';

export const module = sernModule(apply(), {
	type: CommandType.Text,
	description: 'A ping command',
	alias: [],
	execute: (ctx: Context, args: unknown) => {
		ctx.channel?.send('Pong 🏓');
	},
});
