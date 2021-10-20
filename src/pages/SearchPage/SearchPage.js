import React, { useState, useEffect } from "react";
import styled from "styled-components";
import IconMark from "../../components/common/IconMark";
import SearchItem from "./components/SearchItem";
import PageChange from "../../components/common/PageChange";
import { useParams } from "react-router";
import { searchProducts } from "../../WEBAPI";

const SearchWrapper = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  min-height: 73vh;
  margin-bottom: 30px;
`;
const Span = styled.span`
  color: #e8a360;
  font-weight: bold;
`;
const SearchPage = () => {
  const { context } = useParams();
  const [productOptions, setProductOptions] = useState("");
  useEffect(() => {
    searchProducts(context).then((response) => {
      setProductOptions(response.data);
    });
  }, [context]);
  return (
    <div>
      <IconMark>
        「<Span>{context}</Span>」的收尋結果
      </IconMark>
      <SearchWrapper>
        {productOptions && (
          <SearchItem searchKey={context} productOptions={productOptions} />
        )}
        {productOptions.length !== 0 && <PageChange />}
      </SearchWrapper>
    </div>
  );
};

export default SearchPage;
