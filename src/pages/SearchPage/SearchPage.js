import React from "react";
import styled, { ThemeContext } from "styled-components";
import IconMark from "../../components/common/IconMark";
import SearchItem from "./components/SearchItem";
import PageChange from "../../components/common/PageChange";
import { useParams } from "react-router";

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
  return (
    <div>
      <IconMark>
        「<Span>{context}</Span>」的收尋結果
      </IconMark>
      <SearchWrapper>
        <SearchItem searchKey={context} />
        <PageChange />
      </SearchWrapper>
    </div>
  );
};

export default SearchPage;
