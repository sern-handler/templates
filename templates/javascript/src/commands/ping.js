const { CommandType, commandModule } = require('@sern/handler');

exports.default = commandModule({
	type: CommandType.Both,
	plugins : [],
	description: 'A ping command',
	//alias : [],
	execute: (ctx, args) => {
		ctx.reply('Pong 🏓');
	},
});
