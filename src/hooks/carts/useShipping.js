import { useContext, useReducer, useLayoutEffect } from "react";
import { AuthContexts } from "../../context";
import formReducer from "./shipping/formReducer";
import errorReducer from "./shipping/errorReducer";
const useShipping = () => {
  const { user } = useContext(AuthContexts);
  const initialFormState = {
    isSameConsignee: true,
    isDonateInvoice: "withPackage",
    dbIsDonateInvoice: false,
    payment: "card",
    name: `${user.lastname + user.firstname}`,
    phone: user.phone,
    address: user.address,
    date: "",
    dbDate: "",
    transactionNumber: "",
    invoice: "normal",
    companyInvoice: "",
    receiverName: "",
    receiverPhone: "",
    receiverAddress: "",
    checkOne: false,
    checkTwo: false,
  };
  const initalErrState = {
    errorLaw: "",
    errorInvoice: "",
    errorReceiverName: "",
    errorReceiverAddress: "",
    errorLastFiveNumber: "",
    errorDate: "",
    errorAddress: "",
    errorPhone: "",
    errorName: "",
  };
  const [formState, dispatch] = useReducer(formReducer, initialFormState);
  const [errorState, dispatchErr] = useReducer(errorReducer, initalErrState);
  // useCallback
  const handlePayment = (e) => {
    dispatch({
      type: "CHANGE_PAYMENT",
      payload: e.target.value,
    });
  };
  const handleNameChange = (e) => {
    // setErrorName("");
    dispatch({
      type: "TYPE_BUYER_NAME",
      payload: e.target.value,
    });
    dispatchErr({
      type: "CLEAR_ERR_MESS",
      field: "errorName",
    });
  };
  const handlePhoneChange = (e) => {
    dispatch({
      type: "TYPE_BUYER_PHONE",
      payload: e.target.value,
    });
    dispatchErr({
      type: "CLEAR_ERR_MESS",
      field: "errorPhone",
    });
  };
  const handleAddress = (e) => {
    dispatch({
      type: "TYPE_BUYER_ADDRESS",
      payload: e.target.value,
    });
    dispatchErr({
      type: "CLEAR_ERR_MESS",
      field: "errorAddress",
    });
  };
  const handleDate = (e) => {
    dispatch({
      type: "CHOSE_DATE",
      date: e.target.value,
      payload: new Date(e.target.value),
    });
    dispatchErr({
      type: "CLEAR_ERR_MESS",
      field: "errorDate",
    });
  };
  const handleTransactionNumber = (e) => {
    dispatch({
      type: "TYPE_TRANSACTION_NUMBER",
      payload: e.target.value,
    });
    dispatchErr({
      type: "CLEAR_ERR_MESS",
      field: "errorLastFiveNumber",
    });
  };
  const handleDonateInvoice = (e) => {
    dispatch({
      type: "CHOSE_DONATE_INVOICE",
      payload: e.target.value,
    });
  };
  const handleInvoice = (e) => {
    // 處理發票類型
    dispatch({
      type: "CHOSE_INVOICE_TYPE",
      payload: e.target.value,
    });
    dispatchErr({
      type: "CLEAR_ERR_MESS",
      field: "errorInvoice",
    });
  };
  const handleCompanyInvoice = (e) => {
    // 處理公司統編
    dispatch({
      type: "TYPE_COMPANY_INVOICE",
      payload: e.target.value,
    });
    dispatchErr({
      type: "CLEAR_ERR_MESS",
      field: "errorInvoice",
    });
  };
  const handleConsignee = (e) => {
    dispatch({
      type: "IS_RECEIVER_SAME_WITH_BUYER",
      payload: !formState.isSameConsignee,
    });
  };
  const handleReceiverName = (e) => {
    dispatch({
      type: "TYPE_RECEIVER_NAME",
      payload: e.target.value,
    });
    dispatchErr({
      type: "CLEAR_ERR_MESS",
      field: "errorReceiverName",
    });
  };
  const handleReceiverPhone = (e) => {
    dispatch({
      type: "TYPE_RECEIVER_PHONE",
      payload: e.target.value,
    });
    dispatchErr({
      type: "CLEAR_ERR_MESS",
      field: "errorReceiverPhone",
    });
  };
  const handleReceiverAddress = (e) => {
    dispatch({
      type: "TYPE_RECEIVER_ADDRESS",
      payload: e.target.value,
    });
    dispatchErr({
      type: "CLEAR_ERR_MESS",
      field: "errorReceiverAddress",
    });
  };
  const handleCheckOne = (e) => {
    dispatch({
      type: "CHECK_FIRST_LAW",
      payload: !formState.checkOne,
    });
  };
  const handleCheckTwo = (e) => {
    dispatch({
      type: "CHECK_SECOND_LAW",
      payload: !formState.checkTwo,
    });
  };

  useLayoutEffect(() => {
    if (formState.checkOne === true && formState.checkTwo === true) {
      dispatchErr({
        type: "ERROR_MESS_LAW",
        payload: "",
      });
    } else {
      dispatchErr({
        type: "ERROR_MESS_LAW",
        payload: "*為保障雙方權益，送出訂單前請同意上述條款",
      });
    }
  }, [formState.checkOne, formState.checkTwo]);

  useLayoutEffect(() => {
    // 最終判定資料以 receiver 為主，所以收件人與購買人相同時，要將購買人資料同步到收件人去
    if (formState.isSameConsignee) {
      dispatch({
        type: "RECEIVER_SAME_WITH_BUYER",
        payload: [formState.name, formState.phone, formState.address],
      });
    }
    // 若收件人與購買人不同，如果收件人資料同購買人，預設將輸入欄位清空。
    if (!formState.isSameConsignee) {
      if (
        formState.receiverName === formState.name ||
        formState.receiverPhone === formState.phone ||
        formState.receiverAddress === formState.address
      ) {
        dispatch({
          type: "RECEIVER_DIFFERENT_WITH_BUYER",
          payload: "",
        });
      }
    }
  }, [
    formState.address,
    formState.isSameConsignee,
    formState.name,
    formState.phone,
    formState.receiverAddress,
    formState.receiverName,
    formState.receiverPhone,
  ]);

  return {
    handlePayment,
    handleNameChange,
    handlePhoneChange,
    handleAddress,
    handleDate,
    handleTransactionNumber,
    handleDonateInvoice,
    handleInvoice,
    handleCompanyInvoice,
    handleConsignee,
    handleReceiverName,
    handleReceiverPhone,
    handleReceiverAddress,
    handleCheckOne,
    handleCheckTwo,
    formState,
    errorState,
    dispatch,
    dispatchErr,
  };
};
export default useShipping;
