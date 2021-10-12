import React from "react";
import styled from "styled-components";
import { MEDIA_QUERY_MD,MEDIA_QUERY_SD  } from '../../../components/Style/style'
import { Link } from "react-router-dom";

export const TdContext = ({tdcontext})=>{
  return(
    <Tr>
      <Td data-title="商品id">{tdcontext.id}</Td>
      <Td data-title="商品名稱">{tdcontext.name}</Td>
      <Td data-title="價格"><Pricespan>{tdcontext.price}</Pricespan></Td>
      <Td data-title="數量">{tdcontext.number}</Td>
      <Td data-title="備註">{tdcontext.note}</Td>
      <Td data-title="小計">{tdcontext.total}</Td>
    </Tr>
  )
}
const Tr = styled.tr`
`
const Phote = styled.div`
  background-image:url(${props=>props.img});
  width: 80%;
  padding-bottom: 80%;
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
  &:hover {
    background: #60373e;
    color:#fff;
  }
  ${MEDIA_QUERY_MD} {
    display:inline-block;
  }
`
const Td = styled.td`
  margin-bottom:10px;
&+&{
  margin-top:10px;
}
${props=>props.$photo&&`
width:100%;
display:inline-flex;
justify-content:center;
`
}
  ${MEDIA_QUERY_MD}{
    padding-left: 10%;
    margin-bottom: 12px;
    margin-top:0px;
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