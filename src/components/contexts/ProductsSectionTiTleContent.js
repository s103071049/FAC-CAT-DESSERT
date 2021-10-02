import styled from "styled-components";
import {MEDIA_QUERY_SD} from "../Style/style"
const ProductsSectionTiTleContentContent = styled.h2`
margin: 0;
padding-left: 15px;
border-left: 3px solid#D49E6A;
${MEDIA_QUERY_SD}{
  display: block;
  margin-bottom: 10px;
}
`
export default function ProductsSectionTiTleContent({context}){
  return(
    <ProductsSectionTiTleContentContent>{context}</ProductsSectionTiTleContentContent>
  )
}