export const dataFetchStatus = ({status,number}) => {
  
  return {
    type: "FETCH_STATUS",
    status,
    number
  };
};

export const dataFetchFailure = ({status,number}) => {
  return {
    type: "DATA_FETCH_FAILED",
    status,
    number
  };
};
export const setOutgoingCallStatus = ({status}) => {
  
  return {
    type: "CALL_STATUS",
    status,
  };
};