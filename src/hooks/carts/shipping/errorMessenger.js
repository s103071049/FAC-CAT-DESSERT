function errorMessenger(formState, errorState, dispatchErr) {
  if (formState.invoice === "withCompanyNum" && !formState.companyInvoice) {
    dispatchErr({
      type: "ERROR_MESS_COMPANYINVOICE_NOT_FILL",
      payload: "*統編尚未填寫完成",
    });
  }
  if (!formState.dbDate) {
    dispatchErr({
      type: "ERROR_MESS_DELIVER_DATE_NOT_PICK",
      payload: "*尚未選定配送時間",
    });
  }
  if (formState.dbDate < new Date()) {
    dispatchErr({
      type: "ERROR_MESS_DELIVER_DATE_PAST_TIME",
      payload: "*請再確認您選擇的日期是否正確",
    });
  }
  if (!formState.transactionNumber) {
    dispatchErr({
      type: "ERROR_MESS_TRANSACTION_NUMBER_EMPTY",
      payload: "*尚未輸入信用卡或轉帳帳號的後五碼",
    });
  }
  if (formState.transactionNumber.length !== 5) {
    dispatchErr({
      type: "ERROR_MESS_TRANSACTION_NUMBER_LENGTH",
      payload: "*資料長度錯誤",
    });
  }
  if (!formState.name) {
    dispatchErr({
      type: "ERROR_MESS_NAME_EMPTY",
      payload: "*尚未填寫購買人姓名",
    });
  }
  if (!formState.phone) {
    dispatchErr({
      type: "ERROR_MESS_PHONE_EMPTY",
      payload: "*尚未填寫購買人手機號碼",
    });
  }
  if (formState.phone.length !== 10) {
    dispatchErr({
      type: "ERROR_MESS_PHONE_LENGTH",
      payload: "*資料長度錯誤",
    });
  }
  if (!formState.address) {
    dispatchErr({
      type: "ERROR_MESS_ADDRESS_EMPTY",
      payload: "*尚未填寫配送地址",
    });
  }
  if (!formState.receiverName) {
    dispatchErr({
      type: "ERROR_MESS_RECEIVERNAME_EMPTY",
      payload: "*尚未輸入收件人姓名",
    });
  }
  if (!formState.receiverPhone) {
    dispatchErr({
      type: "ERROR_MESS_RECEIVERPHONE_EMPTY",
      payload: "*尚未填寫收件人連絡電話",
    });
  }
  if (formState.receiverPhone.length !== 10) {
    dispatchErr({
      type: "ERROR_MESS_RECEIVERPHONE_LENGTH",
      payload: "*資料長度錯誤",
    });
  }
  if (!formState.receiverAddress) {
    dispatchErr({
      type: "ERROR_MESS_RECEIVERADDRESS_EMPTY",
      payload: "*尚未填寫配送地址",
    });
  }
  if (
    errorState.errorReceiverAddress ||
    errorState.errorReceiverPhone ||
    errorState.errorReceiverName ||
    errorState.errorAddress ||
    errorState.errorPhone ||
    errorState.errorName ||
    errorState.errorLastFiveNumber ||
    errorState.errorDate
  ) {
    alert("資料未填寫齊全或格式有誤 QAQ");
    return;
  }
  if (errorState.errorLaw) {
    alert("為保障雙方權益，送出訂單前請同意下列條款");
    return;
  }
}
export default errorMessenger;
