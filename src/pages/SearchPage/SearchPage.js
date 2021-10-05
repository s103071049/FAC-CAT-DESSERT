import React from "react";
import styled from "styled-components";
import { MEDIA_QUERY_SD } from '../../components/Style/style'
import IconMark from "../../components/contexts/IconMark"
import SearchItem from "./components/SearchItem"; 
import PageChange from "../../components/contexts/PageChange";

const SearchWrapper =styled.div`
  max-width: 1024px;
  margin: 0 auto;
`



const SearchPage = () => {
  return (
    <div>
      <IconMark context={"「」的收尋結果"}/>
      <SearchWrapper>
        <SearchItem/>
        <PageChange/>
      </SearchWrapper>
    </div>
    )
}

export default SearchPage