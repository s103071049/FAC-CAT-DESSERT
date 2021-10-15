import React from "react";
import styled from "styled-components";
import {
  MEDIA_QUERY_MD,
} from "../../../components/Style/style";
import { Link } from "react-router-dom";

export const TdContext = ({ tdcontext }) => {
  return (
    <Tr>
      <Td data-title="id">{tdcontext.id}</Td>
      <Td data-title="免運門檻">
        <Pricespan>{tdcontext.freeDeliveryPrizce}</Pricespan>
      </Td>
      <Td data-title="免運說明" $block={true}>
        <TdcontextDesc title={tdcontext.desc}>{tdcontext.desc}</TdcontextDesc>
      </Td>
      <Td $none={true}>
        <ProductTdButton to="#">還原</ProductTdButton>
      </Td>
      <Td $none={true}>
        <ProductTdButton to="#">編輯</ProductTdButton>
      </Td>
      <RWDButtonWrapper>
        <ProductTdButton to="#">還原</ProductTdButton>
        <ProductTdButton to="#">編輯</ProductTdButton>
      </RWDButtonWrapper>
    </Tr>
  );
};
const Tr = styled.tr`
  ${MEDIA_QUERY_MD} {
    display: block;
    padding: 10px;
  }
`;
const Pricespan = styled.span`
  color: red;
  display: inline;
`;
const ProductTdButton = styled(Link)`
  text-decoration: none;
  color: #000;
  padding: 5px 10px;
  border: 1px solid #c9ba98;
  border-radius: 8px;
  font-size: 20px;
  &:hover {
    background: #60373e;
    color: #fff;
  }
  ${MEDIA_QUERY_MD} {
    & + & {
      margin-left: 20px;
    }
  }
`;
const Td = styled.td`
  width: 0;
  ${MEDIA_QUERY_MD} {
    width: 100%;
    padding-left: 10%;
    margin-bottom: 12px;
    display: block;
    ${(props) => props.$none && `display: none;`}
    &:before {
      content: attr(data-title);
      display: inline-block;
      ${(props) => props.$block && `display: block;`}
      text-decoration:underline;
      width: auto;
      min-width: 20%;
      font-weight: 900;
      padding-right: 1rem;
      margin-bottom: 8px;
    }
  }
`;
const TdcontextDesc = styled.p`
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2; //行數
  -webkit-box-orient: vertical;
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  ${MEDIA_QUERY_MD} {
    display: block;
  }
`;
const RWDButtonWrapper = styled.td`
  display: none;
  ${MEDIA_QUERY_MD} {
    display: flex;
    justify-content: center;
  }
`;
