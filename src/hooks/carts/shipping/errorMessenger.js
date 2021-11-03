function errorMessenger(formState, errorState, dispatchErr) {
  let temp = true;
  if (formState.invoice === "withCompanyNum" && !formState.companyInvoice) {
    dispatchErr({
      type: "ERROR_MESS_COMPANYINVOICE_NOT_FILL",
      payload: "*統編尚未填寫完成",
    });
    temp = false;
  }
  if (!formState.dbDate) {
    dispatchErr({
      type: "ERROR_MESS_DELIVER_DATE_NOT_PICK",
      payload: "*尚未選定配送時間",
    });
    temp = false;
  }
  if (formState.dbDate < new Date()) {
    dispatchErr({
      type: "ERROR_MESS_DELIVER_DATE_PAST_TIME",
      payload: "*請再確認您選擇的日期是否正確",
    });
    temp = false;
  }
  if (!formState.transactionNumber) {
    dispatchErr({
      type: "ERROR_MESS_TRANSACTION_NUMBER_EMPTY",
      payload: "*尚未輸入信用卡或轉帳帳號的後五碼",
    });
    temp = false;
  }
  if (formState.transactionNumber.length !== 5) {
    dispatchErr({
      type: "ERROR_MESS_TRANSACTION_NUMBER_LENGTH",
      payload: "*資料長度錯誤",
    });
    temp = false;
  }
  if (!formState.name) {
    dispatchErr({
      type: "ERROR_MESS_NAME_EMPTY",
      payload: "*尚未填寫購買人姓名",
    });
    temp = false;
  }
  if (!formState.phone) {
    dispatchErr({
      type: "ERROR_MESS_PHONE_EMPTY",
      payload: "*尚未填寫購買人手機號碼",
    });
    temp = false;
  }
  if (formState.phone.length !== 10) {
    dispatchErr({
      type: "ERROR_MESS_PHONE_LENGTH",
      payload: "*資料長度錯誤",
    });
    temp = false;
  }
  if (!formState.address) {
    dispatchErr({
      type: "ERROR_MESS_ADDRESS_EMPTY",
      payload: "*尚未填寫配送地址",
    });
    temp = false;
  }
  if (!formState.receiverName) {
    dispatchErr({
      type: "ERROR_MESS_RECEIVERNAME_EMPTY",
      payload: "*尚未輸入收件人姓名",
    });
    temp = false;
  }
  if (!formState.receiverPhone) {
    dispatchErr({
      type: "ERROR_MESS_RECEIVERPHONE_EMPTY",
      payload: "*尚未填寫收件人連絡電話",
    });
    temp = false;
  }
  if (formState.receiverPhone.length !== 10) {
    dispatchErr({
      type: "ERROR_MESS_RECEIVERPHONE_LENGTH",
      payload: "*資料長度錯誤",
    });
    temp = false;
  }
  if (!formState.receiverAddress) {
    dispatchErr({
      type: "ERROR_MESS_RECEIVERADDRESS_EMPTY",
      payload: "*尚未填寫配送地址",
    });
    temp = false;
  }
  return temp;
}
export default errorMessenger;
