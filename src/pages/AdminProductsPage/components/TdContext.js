import React from "react";
import styled from "styled-components";
import {
  MEDIA_QUERY_MD,
} from "../../../components/Style/style";
import { Link } from "react-router-dom";
import PopModal from '../../../components/common/PopModal'
export const TdContext = ({ tdcontext, index, handleDeleteBtnClick}) => {
 
  const {id, name, img_url, price, desc} = tdcontext
  return (
    <Tr>
      <Td data-title=" ">{index+1}</Td>
      <Td data-title="商品名">{name}</Td>
      <Td data-title="商品介紹">
        <PopModal desc={desc} img_url={img_url} btnTitle={"詳細資訊"} title={name}/>
      </Td>
      <Td data-title="商品圖" $photo={true}>
        <Photo img={img_url} />
      </Td>
      <Td data-title="價格">
        <Pricespan>{price}</Pricespan>
      </Td>
      <Td data-title="刪除">
        <ActionBtn onClick={() => handleDeleteBtnClick(id)}>刪除</ActionBtn>
      </Td>
      <Td data-title="編輯">
        <ActionBtn>
          <Link to={`/admin/updateProduct/${id}`}>編輯</Link>
        </ActionBtn>
      </Td>
    </Tr>
  );
};
const Tr = styled.tr`
  ${MEDIA_QUERY_MD} {
    & td:first-child{
      margin-left:-22%;
    }
  }
`;
const Photo = styled.div`
  background-image: url(${(props) => props.img});
  width: 80%;
  padding-bottom: 80%;
  background-size: cover;
  background-position: center center;
  ${MEDIA_QUERY_MD} {
    display: block;
    width: 50%;
    padding-bottom: 50%;
  }
`;
const Pricespan = styled.span`
  color: red;
  display: inline;
`;
const ActionBtn = styled.button`
  padding: 5px 10px;
  border: 1px solid #c9ba98;
  border-radius: 8px;
  font-size: 16px;
  background:#fff;
  cursor:pointer;
  &:hover {
    background: #60373e;
    color: #fff;
  }
   ${MEDIA_QUERY_MD} {
    display: inline-block;
  }

  & a {
    text-decoration:none;
    color: #000;
    &:hover{
      color: #fff;
    }
  }
`

const Td = styled.td`
  margin-bottom: 10px;
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
    padding-left: 10%;
    margin-bottom: 12px;
    margin-top: 0px;
    &:before {
      content: attr(data-title);
      display: inline-block;
      width: auto;
      min-width: 20%;
      font-weight: 900;
      padding-right: 1rem;
    }
  }
`;
