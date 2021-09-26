import styled from "styled-components"
import { Link } from "react-router-dom"
import {MEDIA_QUERY_MD}from "../../../components/Style/style"

const CategoryWrapper = styled.ul`
  padding:0 20px;
  margin-top:10px;
  margin-bottom: 50px;
  display: flex;
  justify-content: space-between;
  ${MEDIA_QUERY_MD}{
    display: block;
  }
`
const Li = styled.li`
  list-style-type: none;
  width:100%;
  ${MEDIA_QUERY_MD}{
    &+&{
      margin-top:10px;
    }
  }
`
const CategoryItem = styled(Link)`
  padding:10px;
  display: inline-block;
  text-decoration: none;
  color:#000000;
  width: 80%;
  text-align:center;
  border-bottom:1px solid #000000;
  ${MEDIA_QUERY_MD}{
    width: 100%;
  }
`
export default function  ProductsCategory(){
  return(
    <CategoryWrapper>
      <Li><CategoryItem to="#">全部品項</CategoryItem></Li>
      <Li><CategoryItem to="#">餅乾</CategoryItem></Li>
      <Li><CategoryItem to="#">蛋糕</CategoryItem></Li>
      <Li><CategoryItem to="#">巧克力</CategoryItem></Li>
      <Li><CategoryItem to="#">手工飲料</CategoryItem></Li>
    </CategoryWrapper>
  )
}