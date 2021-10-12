import React from "react";
import styled from "styled-components";
import {MEDIA_QUERY_MD, MEDIA_QUERY_SD}from "../../../components/Style/style"

const RegisterFormContextWrapper = styled.div`
font-size: 18px;
  &+&{
    padding-top: 25px;
  }
`
const RegisterFormContextLabel = styled.label`
  display: block;
  text-align: start;
  margin-bottom:15px;
`
const RegisterFormContextInput = styled.input`
  width:100%; 
  padding:5px 5px; 
  border-radius: 8px;
`

export default function RegisterFormContext  ({labalfor,children,id,type ,name}){
  return(
    <RegisterFormContextWrapper>
    <RegisterFormContextLabel htmlFor={labalfor}>{children}</RegisterFormContextLabel>
    <RegisterFormContextInput id={id} type={type} name={name}/>
  </RegisterFormContextWrapper>
  )
}