const errorReducer = (state, action) => {
  switch (action.type) {
    case "ERROR_MESS_LAW":
      return {
        ...state,
        errorLaw: action.payload,
      };
    case "ERROR_MESS_COMPANYINVOICE_NOT_FILL":
      return {
        ...state,
        errorInvoice: action.payload,
      };
    case "ERROR_MESS_DELIVER_DATE_NOT_PICK":
      return {
        ...state,
        errorDate: action.payload,
      };
    case "ERROR_MESS_DELIVER_DATE_PAST_TIME":
      return {
        ...state,
        errorDate: action.payload,
      };
    case "ERROR_MESS_TRANSACTION_NUMBER_EMPTY":
      return {
        ...state,
        errorLastFiveNumber: action.payload,
      };
    case "ERROR_MESS_TRANSACTION_NUMBER_LENGTH":
      return {
        ...state,
        errorLastFiveNumber: action.payload,
      };
    case "ERROR_MESS_NAME_EMPTY":
      return {
        ...state,
        errorName: action.payload,
      };
    case "ERROR_MESS_PHONE_EMPTY":
      return {
        ...state,
        errorPhone: action.payload,
      };
    case "ERROR_MESS_PHONE_LENGTH":
      return {
        ...state,
        errorPhone: action.payload,
      };
    case "ERROR_MESS_ADDRESS_EMPTY":
      return {
        ...state,
        errorAddress: action.payload,
      };
    case "ERROR_MESS_RECEIVERNAME_EMPTY":
      return {
        ...state,
        errorReceiverName: action.payload,
      };
    case "ERROR_MESS_RECEIVERPHONE_EMPTY":
      return {
        ...state,
        errorReceiverPhone: action.payload,
      };
    case "ERROR_MESS_RECEIVERPHONE_LENGTH":
      return {
        ...state,
        errorReceiverPhone: action.payload,
      };
    case "ERROR_MESS_RECEIVERADDRESS_EMPTY":
      return {
        ...state,
        errorReceiverAddress: action.payload,
      };
    case "CLEAR_ERR_MESS":
      return {
        ...state,
        [action.field]: "",
      };
    default:
      return state;
  }
};
export default errorReducer;
