import React from "react";
import styled from "styled-components";
import { MEDIA_QUERY_MD } from "../../../components/Style/style";
import { Link } from "react-router-dom";

const ProductWapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 23%;
  padding: 10px 0;
  margin-bottom: 20px;
  ${MEDIA_QUERY_MD} {
    width: 47%;
  }
  @media screen and (max-width: 460px) {
    width: 98%;
  }
`;
const ProductImageWrapper = styled.div`
  width: 100%;
`;
const ProductImage = styled.div`
  background-image: url(${(props) => props.img});
  width: 100%;
  height: 0px;
  padding-bottom: 100%;
  background-size: cover;
  background-position: center center;
  overflow: hidden;
  margin-bottom: 10px;
  &:hover {
    filter: brightness(110%);
  }
`;
const ProductName = styled.p`
  font-size: 18px;
  margin: 0 0 15px 0;
`;
const ProductPrice = styled.p`
  margin: 0;
`;
const ProductButton = styled.button`
  display: block;
  width: 125px;
  height: 40px;
  margin: 0 auto;
  border: 2px solid #dac9a6;
  color: #dac9a6;
  padding: 3%;
  border-radius: 6%;
  text-align: center;
  cursor: pointer;
  transition: background 0.5s ease-out;
  margin-top: 10px;
  &:hover {
    background: #60373e;
  }
`;
export default function SearchContextProduct({ productOption }) {
  return (
    <ProductWapper>
      <ProductImageWrapper>
        <Link to={`/product/${productOption.id}`}>
          <ProductImage img={productOption.img_url} />
        </Link>
      </ProductImageWrapper>
      <ProductName>{productOption.name}</ProductName>
      <ProductPrice>NT$ {productOption.price}</ProductPrice>
      <ProductButton>加入購物車</ProductButton>
    </ProductWapper>
  );
}
