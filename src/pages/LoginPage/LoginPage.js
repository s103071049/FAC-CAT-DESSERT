import React from "react";
import styled from "styled-components";
import { MEDIA_QUERY_MD,MEDIA_QUERY_SD  } from '../../components/Style/style'
import IconMark from "../../components/contexts/IconMark"
import ProductsSectionTiTleContent from "../../components/contexts/ProductsSectionTiTleContent";
import { Link } from "react-router-dom";

const LoginWrapper = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  margin-top:15px;
  padding:10px;
  min-height:70vh;
`
const LoginContentWrapper = styled.div`
  width: 100%;
  border: 1px solid #E2E2E2;
  text-align:center;
  margin-top:15px;
  padding:15px;
`
const LoginContentTitle = styled.h2`
font-size: 24px;
`
const FBButton = styled.button`
  color:#fff;
  background: #3A59A4;
  border: none;
  box-shadow: 3px 3px 3px #6f89c7;
  border-radius: 8px;
  padding: 5px 40px;
  font-size: 24px;
  cursor:pointer;
  margin-bottom: 15px;
`
const Hr = styled.hr`
  border:0;
  height: 1px;
  background-color: #E2E2E2;
  width: 90%;
`
const LoginForm = styled.form`
  margin:0 auto;
  padding: 30px 0;
  max-width: 390px;
`
const LoginFormContext = styled.div`
font-size: 18px;
  &+&{
    padding-top: 25px;
  }
`
const LoginFormContextLabel = styled.label`
  display: block;
  text-align: start;
  margin-bottom:15px;
`
const LoginFormContextInput = styled.input`
  width:100%; 
  padding:5px 5px; 
  border-radius: 8px;
`
const TextAlignStartWrapper =styled.div`
  text-align:start;
`
const LoginFormSubmit = styled.button`
  margin-top:20px;
  color:#fff;
  background:#E1C09F;
  border: none;
  box-shadow: 3px 3px 3px #f0cdab;
  border-radius: 8px;
  padding: 5px 60px;
  font-size: 24px;
  cursor:pointer;
`
const KeepLogin = styled.div`
padding-top:10px;
`

const LoginFormContextCheckboxInput = styled.input`
`
const LoginFormContextCheckboxInputlabel = styled.label`
    margin-left:15px;
`
const LoginAnotherInfo = styled.div`

`

const PasswordForget = styled(Link)`
  text-decoration:none;
  color: #33A4E8;
  font-size:18px;
`
const RegesterLink = styled(PasswordForget)`
  margin-left:30px;
`
const LoginPage = () => {
  return (
    <div>
      <IconMark context={"會員登入"}/>
      <LoginWrapper>
        <ProductsSectionTiTleContent context={"會員登入"}/>
        <LoginContentWrapper>
          <LoginContentTitle>歡迎回來</LoginContentTitle>
          <FBButton>快速登入</FBButton>
          <Hr/>
          <LoginForm>
          <LoginFormContext>
            <LoginFormContextLabel for="email">電子郵件</LoginFormContextLabel>
            <LoginFormContextInput id="email" type="email" name="email"/>
          </LoginFormContext>
          <LoginFormContext>
            <LoginFormContextLabel for="password">密碼</LoginFormContextLabel>
            <LoginFormContextInput id="password" type="password" name="password"/>
          </LoginFormContext>
          <TextAlignStartWrapper>
            <LoginFormSubmit>會員登入</LoginFormSubmit>
            <KeepLogin>
              <LoginFormContextCheckboxInput type="checkbox" name="keepLogin" id="keepLogin" value="yes"/><LoginFormContextCheckboxInputlabel for="keepLogin">保持登入</LoginFormContextCheckboxInputlabel>
            </KeepLogin>
          </TextAlignStartWrapper >
          </LoginForm>
          <LoginAnotherInfo>
            <PasswordForget to="#">忘記密碼嗎?</PasswordForget>
            <RegesterLink to="#">註冊新會員</RegesterLink>
          </LoginAnotherInfo>
        </LoginContentWrapper>
      </LoginWrapper>
    </div>
    )
}

export default LoginPage