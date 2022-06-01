import { Args, CommandType, Context, sernModule } from '@sern/handler';

export default sernModule([], {
	type: CommandType.Both,
	description: 'A ping command',
	//alias : [],
	execute: (ctx: Context, args: Args) => {
		ctx.reply({ content: 'Pong 🏓' });
	}
});
