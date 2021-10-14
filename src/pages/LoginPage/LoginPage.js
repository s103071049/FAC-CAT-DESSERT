import React from "react";
import styled from "styled-components";
import { MEDIA_QUERY_MD, MEDIA_QUERY_SD } from "../../components/style/style";
import IconMark from "../../components/common/IconMark";
import ProductsSectionTiTleContent from "../../components/common/ProductsSectionTiTleContent";
import LoginFormContext from "./components/LoginFormContext";
import { Link } from "react-router-dom";

const LoginWrapper = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  margin-top: 15px;
  padding: 10px;
  min-height: 70vh;
`;
const LoginContentWrapper = styled.div`
  width: 100%;
  border: 1px solid #e2e2e2;
  text-align: center;
  margin: 15px 0;
  padding: 15px;
`;
const LoginContentTitle = styled.h2`
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
const LoginForm = styled.form`
  margin: 0 auto;
  padding: 30px 0;
  max-width: 390px;
`;

const TextAlignStartWrapper = styled.div`
  text-align: start;
`;
const LoginFormSubmit = styled.button`
  width: 100%;
  margin-top: 20px;
  color: #fff;
  background: #e1c09f;
  border: none;
  box-shadow: 3px 3px 3px #f0cdab;
  border-radius: 8px;
  padding: 5px 60px;
  font-size: 24px;
  cursor: pointer;
`;
const KeepLogin = styled.div`
  padding-top: 10px;
`;

const LoginFormContextCheckboxInput = styled.input``;
const LoginFormContextCheckboxInputlabel = styled.label`
  margin-left: 15px;
`;
const LoginAnotherInfo = styled.div``;

const PasswordForget = styled(Link)`
  text-decoration: none;
  color: #33a4e8;
  font-size: 18px;
`;
const RegesterLink = styled(PasswordForget)`
  margin-left: 30px;
`;
const LoginPage = () => {
  return (
    <div>
      <IconMark context={"會員登入"} />
      <LoginWrapper>
        <ProductsSectionTiTleContent context={"會員登入"} />
        <LoginContentWrapper>
          <LoginContentTitle>歡迎回來</LoginContentTitle>
          <FBButton>快速登入</FBButton>
          <Hr />
          <LoginForm>
            <LoginFormContext
              labalfor="email"
              id="email"
              type="email"
              name="email"
            >
              電子郵件
            </LoginFormContext>
            <LoginFormContext
              labalfor="password"
              id="password"
              type="password"
              name="password"
            >
              密碼
            </LoginFormContext>
            <TextAlignStartWrapper>
              <LoginFormSubmit>會員登入</LoginFormSubmit>
              <KeepLogin>
                <LoginFormContextCheckboxInput
                  type="checkbox"
                  name="keepLogin"
                  id="keepLogin"
                  value="yes"
                />
                <LoginFormContextCheckboxInputlabel htmlFor="keepLogin">
                  保持登入
                </LoginFormContextCheckboxInputlabel>
              </KeepLogin>
            </TextAlignStartWrapper>
          </LoginForm>
          <LoginAnotherInfo>
            <PasswordForget to="#">忘記密碼嗎?</PasswordForget>
            <RegesterLink to="#">註冊新會員</RegesterLink>
          </LoginAnotherInfo>
        </LoginContentWrapper>
      </LoginWrapper>
    </div>
  );
};

export default LoginPage;
