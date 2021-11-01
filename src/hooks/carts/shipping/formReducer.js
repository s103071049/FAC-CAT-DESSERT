const formReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_PAYMENT":
      return {
        ...state,
        payment: action.payload,
      };
    case "TYPE_BUYER_NAME":
      return {
        ...state,
        name: action.payload,
      };
    case "TYPE_BUYER_PHONE":
      return {
        ...state,
        phone: action.payload,
      };
    case "TYPE_BUYER_ADDRESS":
      return {
        ...state,
        address: action.payload,
      };
    case "TYPE_RECEIVER_NAME":
      return {
        ...state,
        receiverName: action.payload,
      };
    case "TYPE_RECEIVER_PHONE":
      return {
        ...state,
        receiverPhone: action.payload,
      };
    case "TYPE_RECEIVER_ADDRESS":
      return {
        ...state,
        receiverAddress: action.payload,
      };
    case "CHOSE_DATE":
      return {
        ...state,
        dbDate: action.payload,
        date: action.date,
      };
    case "TYPE_TRANSACTION_NUMBER":
      return {
        ...state,
        transactionNumber: action.payload,
      };
    case "CHOSE_DONATE_INVOICE":
      return {
        ...state,
        isDonateInvoice: action.payload,
        dbIsDonateInvoice: action.payload === "withPackage" ? false : true,
      };
    case "CHOSE_INVOICE_TYPE":
      return {
        ...state,
        invoice: action.payload,
      };
    case "TYPE_COMPANY_INVOICE":
      return {
        ...state,
        companyInvoice: action.payload,
      };
    case "IS_RECEIVER_SAME_WITH_BUYER":
      return {
        ...state,
        isSameConsignee: action.payload,
      };
    case "CHECK_FIRST_LAW":
      return {
        ...state,
        checkOne: action.payload,
      };
    case "CHECK_SECOND_LAW":
      return {
        ...state,
        checkTwo: action.payload,
      };
    case "RECEIVER_SAME_WITH_BUYER":
      return {
        ...state,
        receiverName: action.payload[0],
        receiverPhone: action.payload[1],
        receiverAddress: action.payload[2],
      };
    case "RECEIVER_DIFFERENT_WITH_BUYER":
      return {
        ...state,
        receiverName: action.payload,
        receiverPhone: action.payload,
        receiverAddress: action.payload,
      };
    default:
      return state;
  }
};
export default formReducer;
