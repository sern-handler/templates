import { BOT } from '#client';
import { Sern, Dependencies, Singleton, single } from '@sern/handler';
import { Sparky } from '#handler';
import mongoose from 'mongoose';

export const client = new BOT();

interface MyDependencies extends Dependencies {
	'@sern/client': Singleton<BOT>;
	'@sern/logger': Singleton<Sparky>;
	mongoose: Singleton<mongoose.Connection>;
}

export const useContainer = Sern.makeDependencies<MyDependencies>({
	build: (root) =>
		root
			.add({ '@sern/client': single(() => client) })
			.upsert({
				'@sern/logger': single(() => new Sparky('debug', 'highlight')),
			})
			.add({ mongoose: single(() => mongoose.connection) }),
});
client.start(useContainer);
