import { env, logger } from "#utils";
import { EventType, eventModule } from "@sern/handler";
import { Client, Events } from "discord.js";
import { mongoConnect } from "#handler";

export default eventModule({
	type: EventType.Discord,
	name: Events.ClientReady,
	async execute(client: Client) {
		logger().success(`[CLIENT] Logged into Discord as ${client.user?.tag}`);
		if (!env.CONNECT) return;
		mongoConnect();
	},
});
