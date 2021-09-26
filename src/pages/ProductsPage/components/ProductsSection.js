import styled from "styled-components"
import {MEDIA_QUERY_MD, MEDIA_QUERY_SD}from "../../../components/Style/style"
import squares from "../../../components/img/icon/squares.svg"
import list from "../../../components/img/icon/list.svg"
import cake1 from "../../HomePage/components/Image/cake.jpg"
import cake2 from "../../HomePage/components/Image/cake4.jpg"
import cake3 from "../../HomePage/components/Image/cake3.jpg"

function ProductsSectionTiTle() {
  return(
    <ProductsSectionTiTleWapper>
      <ProductsSectionTiTleContent>所有甜點</ProductsSectionTiTleContent>
      <ProductsSectionTiTleInfo>
      <ProductsSectionTiTleInfoContent>共6個商品</ProductsSectionTiTleInfoContent>
      <TitleButtonWrapper>
        <TitleButton><Icon src={squares}/></TitleButton>
        <TitleButton><Icon src={list}/></TitleButton>
      </TitleButtonWrapper>
      </ProductsSectionTiTleInfo>
    </ProductsSectionTiTleWapper>
  )
}
const ProductsSectionTiTleWapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 15px ;
  margin-bottom: 20px;
  ${MEDIA_QUERY_SD}{
    display: block;
  }
`
const ProductsSectionTiTleInfo = styled.div`
  display: flex;
  align-items: center;
`
const ProductsSectionTiTleContent = styled.h2`
  margin: 0;
  padding-left: 15px;
  border-left: 3px solid#D49E6A;
  ${MEDIA_QUERY_SD}{
    display: block;
    margin-bottom: 10px;
  }
`
const ProductsSectionTiTleInfoContent = styled.p`
margin: 0px 15px 0 0;
`
const TitleButtonWrapper = styled.div`
  border: 1px solid #E2E2E2;
  border-radius: 8px;
`
const TitleButton = styled.button`
display: inline-flex;
justify-content: center;
align-items: center;
width: 30px;
height: 30px;
border:none;
background-color:#E2E2E2;
border-radius: 8px 0 0 8px;
&+&{
  border-radius: 0 8px 8px 0;
  background-color:white;
}
&:hover {
  background-color:#E2E2E2;
}
`
const Icon = styled.img`
  padding:0px;
  width: 15px;
  height: 15px;
  fill: red;
`
function ProductsSectionContents() {
  return(
    <ProductsSectionContentsWrapper>
      <ProductWapper>
      <ProductImageWrapper>
        <ProductImage src={cake1}/>
      </ProductImageWrapper>
        <ProductName>阿嬤的蘋果派</ProductName>
        <ProductPrice>NT$ 160</ProductPrice>
      </ProductWapper>
      <ProductWapper>
      <ProductImageWrapper>
        <ProductImage src={cake2}/>
      </ProductImageWrapper>
        <ProductName>我的梅果花園</ProductName>
        <ProductPrice>NT$ 180</ProductPrice>
      </ProductWapper>
      <ProductWapper>
      <ProductImageWrapper>
        <ProductImage src={cake3}/>
      </ProductImageWrapper>
        <ProductName>藍莓珠寶盒</ProductName>
        <ProductPrice>NT$ 100</ProductPrice>
      </ProductWapper>
      <ProductWapper>
      <ProductImageWrapper>
        <ProductImage src={cake1}/>
      </ProductImageWrapper>
        <ProductName>阿嬤的蘋果派</ProductName>
        <ProductPrice>NT$ 160</ProductPrice>
      </ProductWapper>
      <ProductWapper>
      <ProductImageWrapper>
        <ProductImage src={cake2}/>
      </ProductImageWrapper>
        <ProductName>我的梅果花園</ProductName>
        <ProductPrice>NT$ 180</ProductPrice>
      </ProductWapper>
      <ProductWapper>
      <ProductImageWrapper>
        <ProductImage src={cake3}/>
      </ProductImageWrapper>
        <ProductName>藍莓珠寶盒</ProductName>
        <ProductPrice>NT$ 100</ProductPrice>
      </ProductWapper>

    </ProductsSectionContentsWrapper>
  )
}
const ProductsSectionContentsWrapper = styled.div`
  display: flex;
  padding:0 10px;
  justify-content: space-between;
  flex-wrap: wrap;
`
const ProductWapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  padding:10px 0 ;
  margin-bottom: 20px;
  ${MEDIA_QUERY_MD}{
    width: 47%;
  }
  @media screen and (max-width: 460px){
    width: 98%;
  }
`
const ProductImageWrapper =styled.div`
  width:100%;
  height: 250px;
  margin-bottom:10px;
`
const ProductImage  = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`
const ProductName = styled.p`
  font-size: 18px;
  margin:0 0 15px 0;
`
const ProductPrice = styled.p`
  margin:0 ;
`
export default function ProductsSection() {
  return(
    <div>
    <ProductsSectionTiTle/>
    <ProductsSectionContents/>
    </div>
  )
}