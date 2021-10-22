import React from "react";
import styled, { keyframes } from "styled-components";
import { MEDIA_QUERY_MD, MEDIA_QUERY_SD } from "../Style/style";

const Loadingwrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 20;
`;
const loading = keyframes`
  0% {
      transform: translate(-50%, -50%)
  }
  50% {
      transform: translate(-50%, -15px)
  }
  100% {
    transform: translate(-50%, -50%)
  }
`;
const LoadingContext = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  color: #fff;
  transform: translate(-50%, -50%);
  font-size: 70px;
  font-weight: bold;
  letter-spacing: 4px;
  margin: 0;
  animation: ${loading} 1.2s infinite ease-in-out;
  ${MEDIA_QUERY_SD} {
    font-size: 45px;
  }
`;

export default function Loading() {
  return (
    <Loadingwrapper>
      <LoadingContext>Loading...</LoadingContext>
    </Loadingwrapper>
  );
}
