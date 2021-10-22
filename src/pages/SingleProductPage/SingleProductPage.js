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
import { Link, useParams, useHistory } from "react-router-dom";
import { Counter } from "../../components/common/Counter";
import { getProduct, getAllProduct } from "../../WEBAPI";
import { useState } from "react";
import { useEffect } from "react/cjs/react.development";

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
const FlexCenter = styled.div`
  display: flex;
  align-items: center;
`;
const Limit = styled.p`
  margin: 0;
  margin-left: 10px;
`;
const SingleProduct = ({ dessert }) => {
  return (
    <SingleProductWrapper>
      <Img>
        <SingleProductImage imgUrl={dessert.img_url} />
      </Img>
      <SingleProductDescription>
        <SingleProductInfo>
          <SingleProductTitle>{dessert.name}</SingleProductTitle>
          <SingleProductPrice>$NT{dessert.price}</SingleProductPrice>
        </SingleProductInfo>
        <SingleProductDescriptionText>
          {dessert.desc}
        </SingleProductDescriptionText>
        <FlexCenter>
          <Counter />
        </FlexCenter>
        <CartButton>加入購物車</CartButton>
      </SingleProductDescription>
    </SingleProductWrapper>
  );
};
function randomArr(allProducts, totalRecommends) {
  let arr = [];
  for (let i = 0; i < allProducts; i++) {
    arr.push(i);
  }
  arr.sort(() => {
    return Math.random() - 0.5;
  });
  arr.length = totalRecommends;
  return arr;
}
const SingleProductPage = () => {
  const totalRecommends = 2;
  const [dessert, setDessert] = useState("");
  const { id } = useParams();
  let randomResult = [];
  const history = useHistory();
  useEffect(() => {
    getProduct(id).then((response) => {
      if (!response.success) {
        return history.goBack();
      }
      setDessert(response.product);
    });
  }, [id, history]);
  const [recommends, setRecommend] = useState([]);
  useEffect(() => {
    getAllProduct()
      .then((response) => {
        if (!response.success) {
          return alert("QQ 推薦商品處理異常，非常抱歉!");
        }
        let data = response.products.filter((each) => each.id !== id);
        return data;
      })
      .then((data) => {
        let randArr = randomArr(data.length, totalRecommends);
        for (let i = 0; i < randArr.length; i++) {
          let key = randArr[i];
          randomResult.push(data[key]);
        }
        setRecommend(randomResult); // loading + link
      });
  }, []);
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
