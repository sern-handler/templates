import mongoose from 'mongoose';
const { model, Schema } = mongoose;

const name: string = 'guild';
export default model(
	name,
	new Schema({
		name: String,
		guildId: String,
	}),
	name
);
