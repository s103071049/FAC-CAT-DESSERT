import styled from "styled-components";
import IconMark from "../../components/common/IconMark";
import EachErrorMessage from "../../components/common/EachErrorMessage";
import ProductsSectionTiTleContent from "../../components/common/ProductsSectionTiTleContent";
import RegisterFormContext from "./components/RegisterFormContext";
import { Link } from "react-router-dom";
import useRegister from "../../hooks/user/useRegister";

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
  padding-bottom: 15px;
  padding-top: 15px;
  font-size: 24px;
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
  const {
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
  } = useRegister();
  return (
    <div>
      <IconMark>註冊新帳號</IconMark>
      <RegisterWrapper>
        <ProductsSectionTiTleContent>註冊新帳號</ProductsSectionTiTleContent>
        <RegisterContentWrapper>
          <RegisterContentTitle>加入會員享受輕鬆購物</RegisterContentTitle>
          <Hr />
          <RegisterContentTitle>電子郵件註冊</RegisterContentTitle>
          <RegisterForm onSubmit={handleRegister}>
            <RegisterFormContext
              labalfor="username"
              id="username"
              type="text"
              name="username"
              value={username}
              onChange={handleChange}
            >
              暱稱
              {error.username && (
                <EachErrorMessage>{error.username}</EachErrorMessage>
              )}
            </RegisterFormContext>
            <RegisterFormContext
              labalfor="email"
              id="email"
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
            >
              電子郵件
              {error.email && (
                <EachErrorMessage>{error.email}</EachErrorMessage>
              )}
            </RegisterFormContext>
            <RegisterFormContext
              labalfor="phone"
              id="phone"
              type="tel"
              name="phone"
              value={phone}
              onChange={handleChange}
            >
              手機
              {error.phone && (
                <EachErrorMessage>{error.phone}</EachErrorMessage>
              )}
            </RegisterFormContext>
            <RegisterFormContext
              labalfor="firstname"
              id="firstname"
              type="text"
              name="lastname"
              value={lastname}
              onChange={handleChange}
            >
              姓
              {error.lastname && (
                <EachErrorMessage>{error.lastname}</EachErrorMessage>
              )}
            </RegisterFormContext>
            <RegisterFormContext
              labalfor="lastname"
              id="lastname"
              type="text"
              name="firstname"
              value={firstname}
              onChange={handleChange}
            >
              名
              {error.firstname && (
                <EachErrorMessage>{error.firstname}</EachErrorMessage>
              )}
            </RegisterFormContext>
            <RegisterFormContext
              labalfor="address"
              id="address"
              type="text"
              name="address"
              value={address}
              onChange={handleChange}
            >
              地址
              {error.address && (
                <EachErrorMessage>{error.address}</EachErrorMessage>
              )}
            </RegisterFormContext>
            <RegisterFormContext
              labalfor="password"
              id="password"
              type="password"
              name="password"
              value={password}
              placeholder={"密碼六字以上，須包含字母與數字"}
              onChange={handleChange}
            >
              密碼
              {error.password && (
                <EachErrorMessage>{error.password}</EachErrorMessage>
              )}
            </RegisterFormContext>
            <RegisterFormContext
              labalfor="confirmPassword"
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleChange}
            >
              確認密碼
              {error.confirmPassword && (
                <EachErrorMessage>{error.confirmPassword}</EachErrorMessage>
              )}
            </RegisterFormContext>
            <TextAlignStartWrapper>
              <RegisterFormSubmit>加入會員</RegisterFormSubmit>
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
