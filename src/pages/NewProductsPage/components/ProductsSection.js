import styled from "styled-components";
import {
  MEDIA_QUERY_MD,
  MEDIA_QUERY_SD,
} from "../../../components/Style/style";
import PageChange from "../../../components/common/PageChange";
import ProductsSectionTiTleContent from "../../../components/common/ProductsSectionTiTleContent";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllProducts } from "../../../WEBAPI";
import useFindNewProducts from "../../../hooks/productHooks/useFindNewProducts";
import useAddCartItems from "../../../hooks/carts/useAddCartItems";

const ProductsSectionContentsWrapper = styled.div`
  margin-bottom: 40px;
  display: flex;
  padding: 0 10px;
  justify-content: space-between;
  flex-wrap: wrap;
`;

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

const ProductsSectionTiTleWapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 15px;
  margin-bottom: 20px;
  ${MEDIA_QUERY_SD} {
    display: block;
  }
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

const RenderCotentItemsSection = ({ product }) => {
  const { handleAddProducts } = useAddCartItems(product, 1);
  return (
    <ProductWapper key={product.id}>
      <ProductImageWrapper>
        <Link to={`/product/${product.id}`}>
          <ProductImage img={product.img_url} />
        </Link>
      </ProductImageWrapper>
      <ProductName>{product.name}</ProductName>
      <ProductPrice>NT$ {product.price}</ProductPrice>
      <ProductButton onClick={handleAddProducts}>加入購物車</ProductButton>
    </ProductWapper>
  );
};

const RenderContentSection = ({ products }) => {
  return (
    <ProductsSectionContentsWrapper>
      {products.map((product, i) => (
        <RenderCotentItemsSection product={product} key={i} />
      ))}
      <ProductWapper />
      <ProductWapper />
    </ProductsSectionContentsWrapper>
  );
};

function ProductsSectionTiTle() {
  return (
    <ProductsSectionTiTleWapper>
      <ProductsSectionTiTleContent>新品上市</ProductsSectionTiTleContent>
    </ProductsSectionTiTleWapper>
  );
}
export default function ProductsSection() {
  const { products } = useFindNewProducts();
  return (
    <>
      <div>
        <ProductsSectionTiTle />
        <RenderContentSection products={products} />
      </div>
    </>
  );
}
