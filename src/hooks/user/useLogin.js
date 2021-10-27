import React, { useContext, useState } from "react";
import { useHistory, Redirect } from "react-router-dom";
import { login, getUser } from "../../WEBAPI";
import { setAuthToken } from "../../utils";
import { AuthContexts, AuthLoadingContext } from "../../context";

export default function useLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory();
  const { user, setUser } = useContext(AuthContexts);
  const { loading, setLoading } = useContext(AuthLoadingContext);
  //填寫資料改變
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  // 登入
  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    if (!email || !password) {
      setErrorMessage("資料不齊全");
      return setLoading(false);
    }
    login(email, password).then((response) => {
      if (!response.success) {
        setErrorMessage(response.message);
        return setLoading(false);
      }
      setAuthToken(response.token);
      getUser().then((response) => {
        if (response.success) {
          setUser(response.user);
          <Redirect push to="/" />;
          return setLoading(false);
        }
        setAuthToken("");
      });
      setLoading(false);
    });
  };
  return {
    email,
    setEmail,
    password,
    setPassword,
    errorMessage,
    setErrorMessage,
    handleLogin,
    handleEmailChange,
    handlePasswordChange,
  };
}
