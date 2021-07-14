const outgoingCallStatus = (
	state = {
    status : "DISCONNECTED",
	},
	action
) => {
	switch (action.type) {
		case "CALL_STATUS":
      console.log("my data"+action.status)
			return {
        status : action.status,
      };
		default:
			return state;
	}
};

export default outgoingCallStatus;