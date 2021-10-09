import React from "react";
import styled from "styled-components";
import {MEDIA_QUERY_MD, MEDIA_QUERY_SD}from "../../../components/Style/style"

const LoginFormContextWrapper = styled.div`
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

export default function LoginFormContext  ({labalfor,children,id,type ,name}){
  return(
    <LoginFormContextWrapper>
    <LoginFormContextLabel for={labalfor}>{children}</LoginFormContextLabel>
    <LoginFormContextInput id={id} type={type} name={name}/>
  </LoginFormContextWrapper>
  )
}