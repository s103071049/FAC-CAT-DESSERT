import React, { useState } from "react";
import styled from 'styled-components'
import Item from '../components/Item.js'
import { Wrapper, Section, MEDIA_QUERY_MD, MEDIA_QUERY_SD } from '../components/Style/style.js'
import ProductsSectionTiTleContent from "../components/contexts/ProductsSectionTiTleContent.js";
import { Counter } from '../components/Counter'

import cake from './HomePage/components/Image/cake.jpg'
import cake3 from './HomePage/components/Image/cake3.jpg'
import cake4 from './HomePage/components/Image/cake4.jpg'

const SingleProductWrapper = styled.div`
  margin: 50px 0px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  ${MEDIA_QUERY_MD} {
    flex-direction:column;
    margin-top: 0;
  }
  ${MEDIA_QUERY_SD}{
    display: block;
  }
`
const SingleProductImage = styled.img`
  width: 50%;
  object-fit: cover;
  border-radius: 10px;
  ${MEDIA_QUERY_MD} {
    border-radius: 0;
    width: 100%;
  }
`
const SingleProductDescription = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-left: 100px;
  ${MEDIA_QUERY_MD} {
    width: 100%;
    margin-left: 0;
  }
`
const SingleProductInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${MEDIA_QUERY_MD} {
    flex-direction: column;
    justify-content: center;
  }
`
const SingleProductTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
`
const SingleProductPrice = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #ff5a5f;
`
const SingleProductDescriptionText = styled.div`
  margin-top: 24px;
  width: 100%;
  font-size: 18px;
  white-space: pre-line;
  align-items: center;
  ${MEDIA_QUERY_MD} {
    padding: 0px 10px;
    text-align: center;
  }
`
const SingleProduct = ({ dessert }) => {
  return (
    <SingleProductWrapper>
      <SingleProductImage src={dessert.imgUrl} />
      <SingleProductDescription>
        <SingleProductInfo>
          <SingleProductTitle>{dessert.name}</SingleProductTitle>
          <SingleProductPrice>$NT{dessert.price}</SingleProductPrice>
        </SingleProductInfo>
        <SingleProductDescriptionText>
          {dessert.desc}
        </SingleProductDescriptionText>
        <Counter />
      </SingleProductDescription>
    </SingleProductWrapper>
  )
}

const SingleProductPage = () => {
  const desserts = [
    {
      id: 1,
      name: '阿嬤的蘋果派',
      price: '160',
      imgUrl: cake,
      desc: `2020新品

      日本柚子帶出輕盈微酸的口感，臺灣鐵觀音帶出濃郁茶香
      
      －
      
      日本100%柚子汁，柚子輕盈甘納許，臺灣鐵觀音甘納許
      
      
      **甘納許為巧克力加上鮮奶油製成
      
      照片中白色的部分為柚子輕盈甘納許，非鮮奶油打發製作而成
      
      而有一種更輕盈順口的口感`
    },
    {
      id: 2,
      name: '我的梅果花園',
      price: '180',
      imgUrl: cake3,
    },
    {
      id: 3,
      name: '青春橘子派',
      price: '260',
      imgUrl: cake4,
    },
    {
      id: 4,
      name: '青春橘子派',
      price: '260',
      imgUrl: cake,
    }
  ]

  const numbers = ["2","3","4","5","6","7"]

  return (
    <div>
      <Wrapper>
        <SingleProduct dessert={desserts[0]} numbers={numbers} key={0}/>
        <ProductsSectionTiTleContent context={'推薦商品'}/>
        <Section>
          {desserts.map((dessert,i) => <Item dessert={dessert} key={i}/>)}
        </Section>
      </Wrapper>
    </div>
  );
}

export default SingleProductPage