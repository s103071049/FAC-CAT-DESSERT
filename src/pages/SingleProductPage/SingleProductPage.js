import React from "react";
import styled from "styled-components";
import Item from "../../components/common/Item.js";
import {
  Wrapper,
  Section,
  CartButton,
  MEDIA_QUERY_MD,
  MEDIA_QUERY_SD,
} from "../../components/Style/style.js";
import ProductsSectionTiTleContent from "../../components/common/ProductsSectionTiTleContent.js";
import { Counter } from "../../components/common/Counter";

import cake from "../../components/img/product/cake.jpg";
import cake3 from "../../components/img/product/cake3.jpg";
import cake4 from "../../components/img/product/cake4.jpg";

const SingleProductWrapper = styled.div`
  margin: 50px 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  ${MEDIA_QUERY_MD} {
    flex-direction: column;
    margin-top: 0;
    margin: 50px 10px;
  }
  ${MEDIA_QUERY_SD} {
    display: block;
  }
`;
const Img = styled.div`
  width: 50%;
  ${MEDIA_QUERY_MD} {
    width: 100%;
  }
`;
const SingleProductImage = styled.div`
  display: block;
  width: 100%;
  height: 0;
  background: url(${(props) => props.imgUrl});
  border: 1px sold red;
  padding-bottom: 100%;
  overflow: hidden;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border-radius: 8px;
  cursor: pointer;
  &: hover {
    filter: brightness(110%);
    width: 100%;
  }
`;
const SingleProductDescription = styled.div`
  width: 50%;
  height: 442px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-left: 100px;
  ${MEDIA_QUERY_MD} {
    width: 100%;
    margin-left: 0;
  }
`;
const SingleProductInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${MEDIA_QUERY_MD} {
    flex-direction: column;
    justify-content: center;
  }
`;
const SingleProductTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;
const SingleProductPrice = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #ff5a5f;
`;
const SingleProductDescriptionText = styled.div`
  margin-top: 24px;
  width: 100%;
  height: 216px;
  font-size: 18px;
  white-space: pre-line;
  align-items: center;
  line-height: 1.5;
  ${MEDIA_QUERY_MD} {
    padding: 0px 10px;
    text-align: center;
  }
`;
const SingleProduct = ({ dessert }) => {
  return (
    <SingleProductWrapper>
      <Img>
        <SingleProductImage imgUrl={dessert.imgUrl} />
      </Img>
      <SingleProductDescription>
        <SingleProductInfo>
          <SingleProductTitle>{dessert.name}</SingleProductTitle>
          <SingleProductPrice>$NT{dessert.price}</SingleProductPrice>
        </SingleProductInfo>
        <SingleProductDescriptionText>
          {dessert.desc}
        </SingleProductDescriptionText>
        <Counter />
        <CartButton>加入購物車</CartButton>
      </SingleProductDescription>
    </SingleProductWrapper>
  );
};

const SingleProductPage = () => {
  const desserts = [
    {
      id: 1,
      name: "阿嬤的蘋果派",
      price: "160",
      imgUrl: cake,
      desc: `2020新品

      日本柚子帶出輕盈微酸的口感，臺灣鐵觀音帶出濃郁茶香
      
      日本100%柚子汁，柚子輕盈甘納許，臺灣鐵觀音甘納許
      
      **甘納許為巧克力加上鮮奶油製成
      `,
    },
    {
      id: 2,
      name: "我的梅果花園",
      price: "180",
      imgUrl: cake3,
    },
    {
      id: 3,
      name: "青春橘子派",
      price: "260",
      imgUrl: cake4,
    },
    {
      id: 4,
      name: "青春橘子派",
      price: "260",
      imgUrl: cake,
    },
  ];

  const numbers = ["2", "3", "4", "5", "6", "7"];

  return (
    <div>
      <Wrapper>
        <SingleProduct dessert={desserts[0]} key={0} />
        <ProductsSectionTiTleContent context={"推薦商品"} />
        <Section>
          {desserts.map((dessert, i) => (
            <Item dessert={dessert} key={i} />
          ))}
        </Section>
      </Wrapper>
    </div>
  );
};

export default SingleProductPage;
