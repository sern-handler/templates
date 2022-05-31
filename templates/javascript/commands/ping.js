const { CommandType, sernModule } = require('@sern/handler');

exports.default = sernModule([], {
	type: CommandType.Both,
	description: 'A ping command',
	//alias : [],
	execute: (ctx, args) => {
		ctx.reply({ content : 'Pong 🏓' });
	},
});
