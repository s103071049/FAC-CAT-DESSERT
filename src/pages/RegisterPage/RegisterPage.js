import React from "react";
import styled from "styled-components";
import { MEDIA_QUERY_MD, MEDIA_QUERY_SD } from "../../components/style/style";
import IconMark from "../../components/common/IconMark";
import ProductsSectionTiTleContent from "../../components/common/ProductsSectionTiTleContent";
import RegisterFormContext from "./components/RegisterFormContext";
import { Link } from "react-router-dom";

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
          <RegisterForm>
            <RegisterFormContext
              labalfor="name"
              id="name"
              type="text"
              name="name"
            >
              姓名<span style={{ color: "red" }}>*</span>
            </RegisterFormContext>
            <RegisterFormContext
              labalfor="email"
              id="email"
              type="email"
              name="email"
            >
              電子郵件<span style={{ color: "red" }}>*</span>
            </RegisterFormContext>
            <RegisterFormContext
              labalfor="tele"
              id="tele"
              type="tel"
              name="tele"
            >
              手機
            </RegisterFormContext>
            <RegisterFormContext
              labalfor="birth"
              id="birth"
              type="date"
              name="birth"
            >
              生日
            </RegisterFormContext>
            <RegisterFormContext
              labalfor="password"
              id="password"
              type="password"
              name="password"
            >
              密碼<span style={{ color: "red" }}>*</span>
            </RegisterFormContext>
            <RegisterFormContext
              labalfor="confirmPassword"
              id="confirmPassword"
              type="password"
              name="confirmPassword"
            >
              確認密碼<span style={{ color: "red" }}>*</span>
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
