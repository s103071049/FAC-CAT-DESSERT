import React, { useState, useContext } from "react";
import styled from "styled-components";
import IconMark from "../../components/common/IconMark";
import ErrorMessage from "../../components/common/Errormessage";
import ProductsSectionTiTleContent from "../../components/common/ProductsSectionTiTleContent";
import RegisterFormContext from "./components/RegisterFormContext";
import { Link, useHistory } from "react-router-dom";
import { getUser, register } from "../../WEBAPI";
import { setAuthToken, getAuthToken } from "../../utils";
import { AuthContexts } from "../../context";

const RegisterWrapper = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  margin-top: 15px;
  margin-bottom: 20px;
  padding: 10px;
  min-height: 73vh;
`;
const RegisterContentWrapper = styled.div`
  width: 100%;
  border: 1px solid #e2e2e2;
  text-align: center;
  margin-top: 15px;
  padding: 15px;
`;
const RegisterContentTitle = styled.h2`
  margin: 0px;
  font-size: 24px;
`;
const FBButton = styled.button`
  color: #fff;
  background: #3a59a4;
  border: none;
  box-shadow: 3px 3px 3px #6f89c7;
  border-radius: 8px;
  padding: 5px 40px;
  font-size: 24px;
  cursor: pointer;
  margin-bottom: 15px;
`;
const Hr = styled.hr`
  border: 0;
  height: 1px;
  background-color: #e2e2e2;
  width: 90%;
`;
const RegisterForm = styled.form`
  margin: 0 auto;
  padding: 30px 0;
  max-width: 390px;
`;

const TextAlignStartWrapper = styled.div`
  text-align: start;
`;
const RegisterFormSubmit = styled.button`
  width: 100%;
  margin-top: 20px;
  color: #fff;
  background: #e1c09f;
  border: none;
  box-shadow: 3px 3px 3px #f0cdab;
  border-radius: 8px;
  padding: 5px 0;
  font-size: 24px;
  cursor: pointer;
`;
const KeepRegister = styled.div`
  padding-top: 10px;
`;

const RegisterFormContextCheckboxInput = styled.input``;
const RegisterFormContextCheckboxInputlabel = styled.label`
  margin-left: 15px;
`;
const RegisterAnotherInfo = styled.div``;
const IsmemberInfo = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
`;
const IsmemberTitle = styled.p`
  font-size: 16px;
  margin: 0;
`;
const LoginLink = styled(Link)`
  text-decoration: none;
  color: #33a4e8;
  font-size: 16px;
  margin-left: 15px;
`;

const ServerList = styled(Link)`
  text-decoration: none;
  color: #33a4e8;
  font-size: 16px;
`;
const Statement = styled(ServerList)``;
const RegisterPage = () => {
  const history = useHistory();
  const { user, setUser } = useContext(AuthContexts);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  // const [birth, setBirth] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };
  // const handleBirthChange = (e) => {
  //   setBirth(e.target.value);
  // };
  const handleFirstnameChange = (e) => {
    setFirstname(e.target.value);
  };
  const handleLastnameChange = (e) => {
    setLastname(e.target.value);
  };
  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };
  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return setErrorMessage("密碼不相同");
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
        return setErrorMessage(response.message);
      }
      setAuthToken(response.token);
      getUser().then((response) => {
        if (response.success) {
          setUser(response.user);
          return history.push("/");
        }
        setAuthToken("");
        console.log(response);
      });
    });
  };
  return (
    <div>
      <IconMark context={"註冊新帳號"} />
      <RegisterWrapper>
        <ProductsSectionTiTleContent context={"註冊新帳號"} />
        <RegisterContentWrapper>
          <RegisterContentTitle>加入會員享受輕鬆購物</RegisterContentTitle>
          <FBButton>快速註冊</FBButton>
          <Hr />
          <RegisterContentTitle>電子郵件註冊</RegisterContentTitle>
          <RegisterForm onSubmit={handleRegister}>
            <RegisterFormContext
              labalfor="username"
              id="username"
              type="text"
              name="username"
              value={username}
              onChange={handleUsernameChange}
            >
              暱稱
              {/* <span style={{ color: "red" }}>*</span> */}
            </RegisterFormContext>
            <RegisterFormContext
              labalfor="email"
              id="email"
              type="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
            >
              電子郵件
            </RegisterFormContext>
            <RegisterFormContext
              labalfor="phone"
              id="phone"
              type="tel"
              name="phone"
              value={phone}
              onChange={handlePhoneChange}
            >
              手機
            </RegisterFormContext>
            {/* <RegisterFormContext
              labalfor="birth"
              id="birth"
              type="date"
              name="birth"
              value={birth}
              onChange={handleBirthChange}
            >
              生日
            </RegisterFormContext> */}
            <RegisterFormContext
              labalfor="firstname"
              id="firstname"
              type="text"
              name="firstname"
              value={firstname}
              onChange={handleFirstnameChange}
            >
              姓
            </RegisterFormContext>
            <RegisterFormContext
              labalfor="lastname"
              id="lastname"
              type="text"
              name="lastname"
              value={lastname}
              onChange={handleLastnameChange}
            >
              名
            </RegisterFormContext>
            <RegisterFormContext
              labalfor="address"
              id="address"
              type="text"
              name="address"
              value={address}
              onChange={handleAddressChange}
            >
              地址
            </RegisterFormContext>
            <RegisterFormContext
              labalfor="password"
              id="password"
              type="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
            >
              密碼
            </RegisterFormContext>
            <RegisterFormContext
              labalfor="confirmPassword"
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            >
              確認密碼
            </RegisterFormContext>
            <TextAlignStartWrapper>
              <RegisterFormSubmit>加入會員</RegisterFormSubmit>
              <KeepRegister>
                <RegisterFormContextCheckboxInput
                  type="checkbox"
                  name="noSubscription"
                  id="noSubscription"
                  value="noSubscription"
                />
                <RegisterFormContextCheckboxInputlabel htmlFor="noSubscription">
                  不訂閱店家優惠
                </RegisterFormContextCheckboxInputlabel>
              </KeepRegister>
            </TextAlignStartWrapper>
            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
          </RegisterForm>
          <RegisterAnotherInfo>
            <IsmemberInfo>
              <IsmemberTitle>我已經有會員帳號了？</IsmemberTitle>
              <LoginLink to="/login">回登入頁面</LoginLink>
            </IsmemberInfo>
            <div style={{ fontSize: "16px" }}>
              註冊表示同意 &nbsp;
              <ServerList to="#">商店服務條例</ServerList>
              &nbsp;與 &nbsp;
              <Statement to="#">會員責任規範及個資聲明</Statement>
            </div>
          </RegisterAnotherInfo>
        </RegisterContentWrapper>
      </RegisterWrapper>
    </div>
  );
};

export default RegisterPage;
