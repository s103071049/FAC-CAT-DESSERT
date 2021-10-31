import React from "react";
import styled from "styled-components";
import { MEDIA_QUERY_MD } from "../../../components/Style/style";
import SearchContextProduct from "./SearchContextProduct";
import ProductsSectionTiTleContent from "../../../components/common/ProductsSectionTiTleContent";

const SearchContextProducts = styled.div`
  display: flex;
  padding: 0 10px;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 20px;
  /* &:after {
    content: " ";
    flex: auto;
  } */
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
export default function SearchItem({ productOptions }) {
  return (
    <div style={{ padding: "15px" }}>
      {productOptions && (
        <div>
          <ProductsSectionTiTleContent>
            商品搜尋結果{" "}
            <span style={{ color: "#D49E6A" }}>{productOptions.length}</span> 筆
          </ProductsSectionTiTleContent>
          <SearchContextProducts>
            {productOptions.map((productOption) => (
              <SearchContextProduct
                productOption={productOption}
                key={productOption.id}
              />
            ))}
            <ProductWapper />
            <ProductWapper />
          </SearchContextProducts>
        </div>
      )}
    </div>
  );
}
