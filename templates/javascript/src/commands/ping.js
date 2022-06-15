const { CommandType, sernModule } = require('@sern/handler');

module.exports = sernModule([], {
	type: CommandType.Both,
	description: 'A ping command',
	//alias : [],
	execute: (ctx, args) => {
		ctx.reply({ content: 'Pong 🏓' });
	},
});
