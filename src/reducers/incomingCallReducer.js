const incomingCallStatus = (
	state = {
    status : false,
    number : null
	},
	action
) => {
	switch (action.type) {
		case "FETCH_STATUS":
      console.log("my data"+action.status)
			return {
        status : action.status,
        number : action.number
      };
		default:
			return state;
	}
};

export default incomingCallStatus;