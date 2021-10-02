import React,{useState} from "react";
import styled from "styled-components";
import { MEDIA_QUERY_SD } from '../../../components/Style/style'
import SearchContextProduct from "./SearchContextProduct";
import cake1 from "../../HomePage/components/Image/cake.jpg"
import cake2 from "../../HomePage/components/Image/cake4.jpg"
import cake3 from "../../HomePage/components/Image/cake3.jpg"

const searchOptions = [
  {
    name:"阿嬤的蘋果派",
    photo:cake1,
    prize:"NT$ 160"
  },
  {
    name:"我的梅果花園",
    photo:cake2,
    prize:"NT$ 180"
  },
  {
    name:"藍莓珠寶盒",
    photo:cake3,
    prize:"NT$ 100"
  },
  {
    name:"阿嬤的蘋果派",
    photo:cake1,
    prize:"NT$ 160"
  },
  {
    name:"我的梅果花園",
    photo:cake2,
    prize:"NT$ 180"
  },
  {
    name:"藍莓珠寶盒",
    photo:cake3,
    prize:"NT$ 100"
  }
]

const ProductsSectionTiTleContent = styled.h2`
margin: 0;
margin-top: 20px;
padding-left: 15px;
border-left: 3px solid#D49E6A;
${MEDIA_QUERY_SD}{
  display: block;
  margin-bottom: 10px;
}
`
const SearchContextProducts = styled.div`
  display: flex;
  padding:0 10px;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top:20px;
`
export default function SearchItem(){
  const [productOptions,setProductOptions] = useState(searchOptions)
  // console.log(searchOptions)
  return (
    <div>
      <ProductsSectionTiTleContent>商品搜尋結果 {<span style={{color:"#D49E6A"}}>6</span>} 筆</ProductsSectionTiTleContent >
      <SearchContextProducts>
      {productOptions.map(productOption=><SearchContextProduct productOption={productOption}/>)}
      </SearchContextProducts>
    </div>
    )
}