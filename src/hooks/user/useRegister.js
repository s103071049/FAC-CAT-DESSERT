import { useContext, useReducer } from "react";
import { useHistory } from "react-router-dom";
import { getUser, register } from "../../WEBAPI";
import { setAuthToken } from "../../utils";
import { AuthContexts, AuthLoadingContext } from "../../context";
export default function useRegister() {
  const passwordRe = /^(?=.*[a-zA-Z])(?=.*\d).{6,}$/;
  const phoneRe = /^0\d{9}$/;
  const history = useHistory();
  const { user, setUser } = useContext(AuthContexts);
  const { loading, setLoading } = useContext(AuthLoadingContext);
  const initFormErrorState = {
    username: null,
    email: null,
    phone: null,
    lastname: null,
    firstname: null,
    address: null,
    password: null,
    confirmPassword: null,
  };
  const [error, setError] = useReducer(
    (state, action) => ({ ...state, ...action }),
    initFormErrorState
  );
  const initFormState = {
    username: "",
    email: "",
    phone: "",
    lastname: "",
    firstname: "",
    address: "",
    password: "",
    confirmPassword: "",
  };
  const [formValue, setFormValue] = useReducer(
    (state, action) => ({ ...state, ...action }),
    initFormState
  );
  const {
    username,
    email,
    phone,
    lastname,
    firstname,
    address,
    password,
    confirmPassword,
  } = formValue;
  //input change
  const handleChange = (e) => {
    setFormValue({ [e.target.name]: e.target.value });
  };
  //註冊
  const handleRegister = (e) => {
    e.preventDefault();
    setLoading(true);
    //資料不齊全
    if (
      !username ||
      !email ||
      !phone ||
      !lastname ||
      !firstname ||
      !address ||
      !password ||
      !confirmPassword
    ) {
      setError({
        username: username ? null : "*請填寫",
        email: email ? null : "*請填寫",
        phone: phone ? null : "*請填寫",
        lastname: lastname ? null : "*請填寫",
        firstname: firstname ? null : "*請填寫",
        address: address ? null : "*請填寫",
        password: password ? null : "*請填寫",
        confirmPassword: confirmPassword ? null : "*請填寫",
      });
      return setLoading(false);
    }
    if (!phoneRe.test(phone)) {
      setError({
        ...initFormErrorState,
        phone: "*電話格式錯誤",
      });
      return setLoading(false);
    }
    // 密碼強度不足
    if (!passwordRe.test(password)) {
      setError({
        ...initFormErrorState,
        password: "*密碼強度不足",
      });
      return setLoading(false);
    }
    if (password !== confirmPassword) {
      setError({
        ...initFormErrorState,
        password: "*密碼不相同",
      });
      return setLoading(false);
    }
    register(
      username,
      password,
      firstname,
      lastname,
      phone,
      email,
      address
    ).then((response) => {
      if (!response.success) {
        return setLoading(false);
      }
      setAuthToken(response.token);
      getUser().then((response) => {
        if (response.success) {
          setUser(response.user);
          history.push("/");
          return setLoading(false);
        }
        setAuthToken("");
        setLoading(false);
      });
    });
  };
  return {
    user,
    setUser,
    loading,
    setLoading,
    username,
    email,
    phone,
    lastname,
    firstname,
    address,
    password,
    confirmPassword,
    handleChange,
    handleRegister,
    error,
  };
}
