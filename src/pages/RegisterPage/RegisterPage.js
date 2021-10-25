import React, { useState, useContext } from "react";
import styled from "styled-components";
import IconMark from "../../components/common/IconMark";
import EachErrorMessage from "../../components/common/EachErrorMessage";
import ProductsSectionTiTleContent from "../../components/common/ProductsSectionTiTleContent";
import RegisterFormContext from "./components/RegisterFormContext";
import { Link, useHistory } from "react-router-dom";
import { getUser, register } from "../../WEBAPI";
import { setAuthToken, getAuthToken } from "../../utils";
import { AuthContexts, AuthLoadingContext } from "../../context";

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
  const passwordRe = /^(?=.*[a-zA-Z])(?=.*\d).{6,}$/;
  const history = useHistory();
  const { user, setUser } = useContext(AuthContexts);
  const { loading, setLoading } = useContext(AuthLoadingContext);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  // const [birth, setBirth] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(Array(8).fill(null));
  //input change
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };
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
      const newError = JSON.parse(JSON.stringify(error));
      if (!username) {
        newError[0] = "*請填寫";
      } else {
        newError[0] = null;
      }
      if (!email) {
        newError[1] = "*請填寫";
      } else {
        newError[1] = null;
      }
      if (!phone) {
        newError[2] = "*請填寫";
      } else {
        newError[2] = null;
      }
      if (!lastname) {
        newError[3] = "*請填寫";
      } else {
        newError[3] = null;
      }
      if (!firstname) {
        newError[4] = "*請填寫";
      } else {
        newError[4] = null;
      }
      if (!address) {
        newError[5] = "*請填寫";
      } else {
        newError[5] = null;
      }
      if (!password) {
        newError[6] = "*請填寫";
      } else {
        newError[6] = null;
      }
      if (!confirmPassword) {
        newError[7] = "*請填寫";
      } else {
        newError[7] = null;
      }
      setError(newError);
      return setLoading(false);
    }
    // 密碼強度不足
    if (!passwordRe.test(password)) {
      const newError = Array(8).fill(null);
      newError[6] = "*密碼強度不足";
      setError(newError);
      return setLoading(false);
    }
    if (password !== confirmPassword) {
      const newError = Array(8).fill(null);
      newError[6] = "*密碼不相同";
      console.log(newError);
      setError(newError);
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
        console.log(response.message);
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
  return (
    <div>
      <IconMark>註冊新帳號</IconMark>
      <RegisterWrapper>
        <ProductsSectionTiTleContent>註冊新帳號</ProductsSectionTiTleContent>
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
              {error[0] && <EachErrorMessage>{error[0]}</EachErrorMessage>}
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
              {error[1] && <EachErrorMessage>{error[1]}</EachErrorMessage>}
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
              {error[2] && <EachErrorMessage>{error[2]}</EachErrorMessage>}
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
              value={lastname}
              onChange={handleLastnameChange}
            >
              姓{error[3] && <EachErrorMessage>{error[3]}</EachErrorMessage>}
            </RegisterFormContext>
            <RegisterFormContext
              labalfor="lastname"
              id="lastname"
              type="text"
              name="lastname"
              value={firstname}
              onChange={handleFirstnameChange}
            >
              名{error[4] && <EachErrorMessage>{error[4]}</EachErrorMessage>}
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
              {error[5] && <EachErrorMessage>{error[5]}</EachErrorMessage>}
            </RegisterFormContext>
            <RegisterFormContext
              labalfor="password"
              id="password"
              type="password"
              name="password"
              value={password}
              placeholder={"密碼六字以上，須包含字母與數字"}
              onChange={handlePasswordChange}
            >
              密碼
              {error[6] && <EachErrorMessage>{error[6]}</EachErrorMessage>}
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
              {error[7] && <EachErrorMessage>{error[7]}</EachErrorMessage>}
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
