import { useContainer } from '#BOT';
import fs from 'fs';
import { load } from './load.js';

export const rds = fs.readdirSync;
export const logger = () => useContainer('@sern/logger')[0];
export const env = load({
	DISCORD_TOKEN: String,
	CONNECT: String,
	ownerIDs: Array,
});
