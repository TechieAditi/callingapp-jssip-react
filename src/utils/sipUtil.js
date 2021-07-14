import SIPBuddy from "./SIPBuddy";
import { CALL_STATUS } from "./constant";
import { dataFetchStatus, setOutgoingCallStatus } from "../actions/sagaActions";
import store from "./../store/index";
var sip;
var audioRemote = document.getElementById("audio_remote");
export function sipStart(virtualNumberConfig, asteriskConfig) {
  sip = new SIPBuddy(
    asteriskConfig.iceServers,
    audioRemote,
    registrationEventCallback,
    outgoingCallEventCallback,
    incomingCallEventCallback,
    incomingMessageEventCallback
  );
  sip.register(
    asteriskConfig.asteriskIp,
    virtualNumberConfig.sipUser,
    virtualNumberConfig.sipToken,
    virtualNumberConfig.virtualNumber
  );
}
function registrationEventCallback(e) {
  console.log("registeration status-->" + e);
}
function incomingCallEventCallback(e) {
  if (e == CALL_STATUS.CALL_INCOMING) {
    document.getElementById("audio").play();
    var callerId = sip.getIncomingMessage();
    var remote_identity = sip.getIncomingCallIdentity();
    console.log("CallerId :" + callerId + "callerNumber : " + remote_identity);
    debugger;
    store.dispatch(dataFetchStatus({ status: true, number: remote_identity }));
  }
}
//function for outgoing call
export function sipCall(phoneNumber) {
  if (sip.isSessionRegistered()) {
    var sip_headers = {
      "Do-Record": "true",
      UID: "Hello-123",
      "Platform ": "tovo",
      "agentId ": "agentId",
      "Phrase-Hint": "Hello",
      "Caller-ID": "12813051177",
      timeZone: "timezone",
      isDialPlanRequired: "false",
      isTranscriptRequired: "false",
      "isAutoSuggestedActionsRequired ": "false",
      "accountId ": "21505",
      sipTrunk: "twilioffit",
    };

    sip.call(phoneNumber, sip_headers);
  }
}
function outgoingCallEventCallback(e, cause = null) {
  console.log("outgoing call status-->" + e);
  store.dispatch(setOutgoingCallStatus({ status: e }));
}
function incomingMessageEventCallback(e, cause = null) {
  console.log("outgoing call status-->" + e);
  console.log("cause for failure" + cause);
}
// function to hangup or decline a call
export const hangupCall = () => {
  if (!sip) return;
	if (sip.isOnCall()) {
		sip.hangUp();
	}
};
// function to unregister sip
export function sipUnregister() {
  sip.unregister();
}
// function yo mute/unmute a call
export function callMuteUnmute() {
  sip.toggleMute();
}
// function to accept a call
export function answerCall() {
  sip.answerIncomingCall();
  document.getElementById("audio").pause();
}
//function to record a call by sending dtmf
export function recordCall() {
  sip.sendDTMF("#");
  sip.sendDTMF("7");
  sip.sendDTMF("9");
  sip.sendDTMF("6");
}
