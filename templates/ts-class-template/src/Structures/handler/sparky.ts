import type { Logging, LogPayload } from '@sern/handler';
import { Logger, LogLevel, LogStyle } from '@spark.ts/logger';
import { bold, italic } from 'colorette';

export class Sparky implements Logging {
	private _spark!: Logger;
	private _date!: Date;
	constructor(logLevel: LogLevel, logStyle: LogStyle) {
		console.clear();
		this._spark = new Logger({ logLevel, logStyle });
		this._date = new Date();
	}

	success(payload: LogPayload<unknown> | any): void {
		payload = payload.message || { payload }.payload;
		this._spark.success(
			bold(italic(this._date.toISOString() + ' => ' + payload))
		);
	}
	info(payload: LogPayload<unknown> | any): void {
		payload = payload.message || { payload }.payload;
		this._spark.info(bold(italic(this._date.toISOString() + ' => ' + payload)));
	}
	warning(payload: LogPayload<unknown> | any): void {
		payload = payload.message || { payload }.payload;
		this._spark.warn(bold(italic(this._date.toISOString() + ' => ' + payload)));
	}
	debug(payload: LogPayload<unknown> | any): void {
		payload = payload.message || { payload }.payload;
		this._spark.debug(
			bold(italic(this._date.toISOString() + ' => ' + payload))
		);
	}
	error(payload: LogPayload<unknown> | any): void {
		payload = payload.message || { payload }.payload;
		this._spark.error(
			bold(italic(this._date.toISOString() + ' => ' + payload))
		);
	}
}
