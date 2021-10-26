import React from "react";
import styled from "styled-components";
import { MEDIA_QUERY_MD } from "../../components/Style/style";
import { Link } from "react-router-dom";
import { PostDataAPI } from "../../API/fetchAPI";
import { getAuthToken } from "../../utils";

export const TdContext = ({ tdcontext, isRestore }) => {
  const buttonText = isRestore ? "還原" : "刪除";
  const handleButton = async (e) => {
    e.preventDefault();
    tdcontext.is_deleted = !isRestore;
    const res = await PostDataAPI(
      { data: tdcontext, authorization: getAuthToken() },
      "/updateDiscounts"
    );
    if (res.success === true) {
      window.location.reload();
    } else {
      console.log(res.message);
    }
  };
  return (
    <Tr>
      <Td data-title="id">{tdcontext.id}</Td>
      <Td data-title="免運門檻">
        <Pricespan>{tdcontext.threshold}</Pricespan>
      </Td>
      <Td data-title="免運說明" $block={true}>
        <TdcontextDesc title={tdcontext.desc}>{tdcontext.desc}</TdcontextDesc>
      </Td>
      <Td data-title="運費">
        <Pricespan>{tdcontext.shipment}</Pricespan>
      </Td>
      <Td data-title={buttonText} $none={true}>
        <ProductTdButton onClick={handleButton}>{buttonText}</ProductTdButton>
      </Td>
      <Td data-title="編輯" $none={true}>
        <ProductTdLink to={`/admin/updateDiscount/${tdcontext.id}`}>
          編輯
        </ProductTdLink>
      </Td>
      <RWDButtonWrapper>
        <ProductTdButton onClick={handleButton}>${buttonText}</ProductTdButton>
        <ProductTdLink to={`/admin/updateDiscount/${tdcontext.id}`}>
          編輯
        </ProductTdLink>
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
const ProductTdButton = styled.button`
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
const ProductTdLink = styled(Link)`
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

export const thcontexts = [
  "id",
  "運費門檻",
  "免運說明",
  "運費",
  "設定",
  "編輯",
];
