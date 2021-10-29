import React from "react";
import styled from "styled-components";

const LoginFormContextWrapper = styled.div`
  font-size: 18px;
  & + & {
    padding-top: 25px;
  }
`;
const LoginFormContextLabel = styled.label`
  display: block;
  text-align: start;
  margin-bottom: 15px;
`;
const LoginFormContextInput = styled.input`
  width: 100%;
  padding: 5px 5px;
  border-radius: 8px;
`;

export default function LoginFormContext({
  labalfor,
  children,
  id,
  type,
  name,
  value,
  handleChange,
}) {
  return (
    <LoginFormContextWrapper>
      <LoginFormContextLabel htmlFor={labalfor}>
        {children}
      </LoginFormContextLabel>
      <LoginFormContextInput
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
      />
    </LoginFormContextWrapper>
  );
}
