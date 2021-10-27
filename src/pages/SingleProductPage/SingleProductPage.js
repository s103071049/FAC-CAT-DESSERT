import React from "react";
import Item from "../../components/common/Item.js";
import { Wrapper, Section } from "../../components/Style/style.js";
import ProductsSectionTiTleContent from "../../components/common/ProductsSectionTiTleContent.js";
import SingleProduct from "./SingleProduct.js";
import useRecommendsApi from "../../hooks/carts/useRecommendsApi.js";
import useGetSingleProduct from "../../hooks/carts/useGetSingleProduct.js";

const SingleProductPage = () => {
  const totalRecommends = 4;
  const { dessert } = useGetSingleProduct();
  const { recommends } = useRecommendsApi(totalRecommends);
  return (
    <div>
      {dessert && (
        <Wrapper>
          <SingleProduct dessert={dessert} />
          <ProductsSectionTiTleContent>推薦商品</ProductsSectionTiTleContent>
          <Section>
            {recommends.map((dessert, i) => (
              <Item dessert={dessert} key={i} />
            ))}
          </Section>
        </Wrapper>
      )}
    </div>
  );
};

export default SingleProductPage;
