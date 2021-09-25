import React from "react"
import styled from "styled-components"
// import { Link } from "react-router-dom"
import ProductsCategory from "./components/ProductsCategory"
import ProductsSection from "./components/ProductsSection"
import homeIcon from "../../components/img/icon/home.svg"
import productsbanner from "../../components/img/productsbanner.jpg"

const ProductsWrapper = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`

const IconMark = styled.div`
  margin-top: 10px;
  display: flex;
`

const Icon = styled.img`
  padding:0px;
  width: 15px;
  height: 15px;
`
const Mark = styled.p`
  padding-left:8px ;
  margin: 0;
`

const Hr = styled.hr`
  border:0;
  height: 1px;
  background-color: #E2E2E2;
`


const ProductsBanner =styled.div`
  height: 275px;
  background-image: url(${productsbanner});
  background-size: 1024px;
  margin-bottom: 80px;
`



export default function ProductsPage() {
  return (
    <div>
      <ProductsWrapper>
        <IconMark>
          <Icon src={homeIcon}/>
          <Mark>{'>'} 所有甜點</Mark>
        </IconMark>
      </ProductsWrapper>
        <Hr/>
      <ProductsWrapper>
        <ProductsCategory/>
        <ProductsBanner/>
        <ProductsSection/>
      </ProductsWrapper>
    </div>
  )
}