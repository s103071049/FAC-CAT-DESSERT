import React, { useState, useEffect, useLayoutEffect } from "react";
import styled from "styled-components";
import { MEDIA_QUERY_SD } from "../../../components/Style/style";
import SearchContextProduct from "./SearchContextProduct";
import cake1 from "../../../components/img/product/cake.jpg";
import cake2 from "../../../components/img/product/cake4.jpg";
import cake3 from "../../../components/img/product/cake3.jpg";
import ProductsSectionTiTleContent from "../../../components/common/ProductsSectionTiTleContent";
import { searchProducts } from "../../../WEBAPI";

const SearchContextProducts = styled.div`
  display: flex;
  padding: 0 10px;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 20px;
`;
export default function SearchItem({ productOptions }) {
  // const [productOptions, setProductOptions] = useState("");
  // useLayoutEffect(() => {
  //   searchProducts(searchKey).then((response) => {
  //     setProductOptions(response.data);
  //   });
  // }, [searchKey]);

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
          </SearchContextProducts>
        </div>
      )}
    </div>
  );
}
