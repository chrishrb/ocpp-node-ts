import EventEmitter from "events";
import { Protocol } from "./Protocol";
import { OCPP_PROTOCOL_2_0_1 } from "./schemas";

export class BrowserClient extends EventEmitter {
	private connection: Protocol | null = null;

	private cpId: string;

	constructor(cpId: string) {
		super();
		this.cpId = cpId;
	}

	/* istanbul ignore next */
	protected getCpId(): string {
		return this.cpId;
	}

	/* istanbul ignore next */
	protected setConnection(connection: Protocol | null): void {
		this.connection = connection;
	}

	/* istanbul ignore next */
	protected callRequest(
		request: string,
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		payload: any
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	): Promise<any> {
		if (this.connection) {
			return this.connection.callRequest(
				request,
				payload
			);
		}
		throw new Error("Charging point not connected to central system");
	}

	/* istanbul ignore next */
	protected connect(centralSystemUrl: string) {
		const ws = new WebSocket(
			centralSystemUrl + this.getCpId(),
			[OCPP_PROTOCOL_2_0_1],
		);

		ws.onclose = (event) => {
				this.setConnection(null);
				this.emit(
					"close",
					event.code,
					event.reason
				);
			}

    ws.onopen = () => {
      this.setConnection(new Protocol(this, ws));
      this.emit("connect");
    };

    ws.onerror = (err) => {
      this.emit("error", err);
    };
	}
}