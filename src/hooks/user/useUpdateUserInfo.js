import { useContext, useReducer } from "react";

import { AuthContexts, AuthLoadingContext } from "../../context";
import { updateUser } from "../../WEBAPI";
export default function useUpdateUserInfo() {
  const { user } = useContext(AuthContexts);
  const { setLoading } = useContext(AuthLoadingContext);
  const phoneRe = /^0\d{9}$/;
  const initFormValue = {
    lastname: user.lastname,
    firstname: user.firstname,
    username: user.username,
    phone: user.phone,
    address: user.address,
  };
  const [formValue, setFormValue] = useReducer(
    (state, action) => ({ ...state, ...action }),
    initFormValue
  );
  const { lastname, firstname, username, phone, address } = formValue;
  //重新填寫
  const handleEmpty = (e) => {
    e.preventDefault();
    setFormValue(initFormValue);
    setError(initError);
  };
  const handleChange = (e) => {
    setFormValue({ [e.target.id]: e.target.value });
  };
  // formValue change end
  const initError = {
    lastname: null,
    firstname: null,
    username: null,
    phone: null,
    address: null,
  };
  const [error, setError] = useReducer(
    (state, action) => ({ ...state, ...action }),
    initError
  );
  // 更新user
  const handleUpdateUser = (e) => {
    e.preventDefault();
    setLoading(true);
    //資料不齊全
    if (!username || !phone || !lastname || !firstname || !address) {
      setError({
        lastname: lastname ? null : "*請填寫",
        firstname: firstname ? null : "*請填寫",
        username: username ? null : "*請填寫",
        phone: phone ? null : "*請填寫",
        address: address ? null : "*請填寫",
      });
      return setLoading(false);
    }
    if (!phoneRe.test(phone)) {
      setError({
        ...initError,
        phone: "*電話格式錯誤",
      });
      return setLoading(false);
    }
    //串api
    updateUser(username, firstname, lastname, phone, address).then(
      (response) => {
        if (!response.success) {
          return setLoading(false);
        }
        setError(initError);
        alert("資料更改完成");
      }
    );
    setLoading(false);
  };
  return {
    user,
    lastname,
    firstname,
    username,
    phone,
    address,
    error,
    handleEmpty,
    handleChange,
    handleUpdateUser,
  };
}
