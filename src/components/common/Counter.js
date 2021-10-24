import React, { useState } from "react";
import styled from "styled-components";

const CounterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 12px;
`;

const CounterButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  border: none;
  background-color: #f5f5f5;
  font-size: 24px;
  font-weight: bold;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #e5e5e5;
  }
`;

const CounterContainer = styled.div`
  width: 41px;
  height: 41px;
  border: 1px solid #f5f5f5;
  font-size: 20px;
  text-align: center;
  line-height: 37px;
`;

export function Counter({ count, handleIncrement, handleDecrement }) {
  return (
    <CounterWrapper>
      <CounterButton onClick={handleDecrement}>-</CounterButton>
      <CounterContainer>{count}</CounterContainer>
      <CounterButton onClick={handleIncrement}>+</CounterButton>
    </CounterWrapper>
  );
}
