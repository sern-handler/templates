import { useContainer } from '#BOT';
import { env } from '#utils';
import mongoose from 'mongoose';
const { connect, set } = mongoose;

export async function mongoConnect(url?: string) {
	useContainer('mongoose');
	const dbOptions = {
		keepAlive: true,
		keepAliveInitialDelay: 300000,
		autoIndex: true,
		connectTimeoutMS: 10000,
		family: 4,
	};

	set('strictQuery', true);
	await connect(url ? url : env.CONNECT!, dbOptions);
}
