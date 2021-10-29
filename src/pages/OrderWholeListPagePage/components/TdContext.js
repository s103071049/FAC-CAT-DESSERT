import React from "react";
import styled from "styled-components";
import { MEDIA_QUERY_MD } from "../../../components/Style/style";
import { Link } from "react-router-dom";

export const TdContext = ({ tdcontext, index }) => {
  const { Product } = tdcontext;
  return (
    <Tr>
      <Td data-title="id">{index + 1}</Td>
      <Td data-title="商品名稱">{Product.name}</Td>
      <Td data-title="價格">
        <Pricespan>{Product.price}</Pricespan>
      </Td>
      <Td data-title="數量">{tdcontext.quantity}</Td>
      <Td data-title="備註">
        <TdcontextDesc title={tdcontext.note}>{tdcontext.note}</TdcontextDesc>
      </Td>
      <Td data-title="小計">{tdcontext.quantity * Product.price}</Td>
    </Tr>
  );
};
const Tr = styled.tr``;
const Pricespan = styled.span`
  color: red;
  display: inline;
`;

const Td = styled.td`
  margin-bottom: 10px;
  width: 0;
  & + & {
    margin-top: 10px;
  }
  ${(props) =>
    props.$photo &&
    `
width:100%;
display:inline-flex;
justify-content:center;
`}
  ${MEDIA_QUERY_MD} {
    width: 100%;
    padding-left: 10%;
    margin-bottom: 12px;
    margin-top: 0px;
    display: block;
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
