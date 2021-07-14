export const WEBSOCKET_STATUS = Object.freeze({
	CONNECTING: "CONNECTING",
	CONNECTED: "CONNECTED",
	DISCONNECTED: "DISCONNECTED",
	REGISTERED: "REGISTERED",
	UNREGISTERED: "UNREGISTERED",
	REGISTRATION_FAILED: "REGISTRATION_FAILED",
	NEW_MESSAGE: "NEW_MESSAGE",
	NEW_RTC_SESSION: "NEW_RTC_SESSION"
});

export const CALL_STATUS = Object.freeze({
	ICE_CANDIDATE: "ICE_CANDIDATE",
	PEER_CONNECTION: "PEER_CONNECTION",
	GET_USER_MEDIA_FAILED: "GET_USER_MEDIA_FAILED",
	NEW_DTMF: "NEW_DTMF",
	NEW_INFO: "NEW_INFO",
	CONNECTING: "CONNECTING",
	PROGRESS: "PROGRESS",
	ACCEPTED: "ACCEPTED",
	CONFIRMED: "CONFIRMED",
	ENDED: "ENDED",
	FAILED: "FAILED",
	HOLD: "HOLD",
	UNHOLD: "UNHOLD",
	MUTED: "MUTED",
	UNMUTED: "UNMUTED"
});

export const CONNECTION_ERROR = Object.freeze({
	AUTHENTICATION_ERROR: "AUTHENTICATION_ERROR",
	SERVER_ERROR: "SERVER_ERROR"
});

export const DTMF_TONE_DURATION = 120;
export const DTMF_INTER_TONE_GAP = 50;
export const ICE_GATHERING_TIMEOUT = 600;
export const MAX_GET_USER_MEDIA_RETRIES = 3;