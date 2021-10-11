import React from "react";
import styled from "styled-components";
import { MEDIA_QUERY_MD,MEDIA_QUERY_SD  } from '../../../components/Style/style'
import { Link } from "react-router-dom";

export const TdContext = ({tdcontext})=>{
  return(
    <Tr>
      <Td data-title="id">{tdcontext.id}</Td>
      <Td data-title="免運門檻"><Pricespan>{tdcontext.freeDeliveryPrizce}</Pricespan></Td>
      <Td data-title="免運說明">{tdcontext.desc}</Td>
      <Td data-title="刪除" ><ProductTdButton to="#">刪除</ProductTdButton></Td>
      <Td data-title="編輯"><ProductTdButton to="#">編輯</ProductTdButton></Td>
    </Tr>
  )
}
const Tr = styled.tr`
`
const Phote = styled.div`
  background-image:url(${props=>props.img});
  width: 100%;
  padding-bottom: 100%;
  background-size: cover;
  background-position:center center ;
  ${MEDIA_QUERY_MD} {
    display: block;
    width: 50%;
    padding-bottom: 50%;
  }
`
const Pricespan = styled.span`
  color:red;
  display: inline;
`
const ProductTdButton = styled(Link)`
  text-decoration: none;
  color: #000;
  padding:5px 10px;
  border:1px solid #C9BA98;
  border-radius: 8px;
  font-size: 20px;
  ${MEDIA_QUERY_MD} {
    display:inline-block;
  }
`
const Td = styled.td`
${props=>props.$photo&&`
width:100%;
display:inline-flex;
justify-content:center;
`
}
  ${MEDIA_QUERY_MD} {
    padding-left: 10%;
    margin-bottom: 12px;
    &:before{
    content: attr(data-title);
    display: inline-block;
    width: auto;
    min-width: 20%;
    font-weight: 900;
    padding-right: 1rem;
    }
  }
`