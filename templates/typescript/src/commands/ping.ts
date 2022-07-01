import { Args, CommandType, Context, commandModule } from '@sern/handler';

export default commandModule({
	type: CommandType.Both,
	plugins : [],
	description: 'A ping command',
	//alias : [],
	execute: async (ctx, args) => {
		await ctx.reply({ content: 'Pong 🏓' });
	},
});
