import { Args, CommandType, Context, commandModule } from '@sern/handler';

export default commandModule({
	type: CommandType.Both,
	plugins : [],
	description: 'A ping command',
	//alias : [],
	execute: (ctx, args) => {
		ctx.reply({ content: 'Pong 🏓' });
	},
});
