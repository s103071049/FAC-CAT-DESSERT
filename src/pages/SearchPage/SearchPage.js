import React from "react";
import styled from "styled-components";
import IconMark from "../../components/common/IconMark";
import SearchItem from "./components/SearchItem";
import useSearchProducts from "../../hooks/productHooks/useSearchProducts";
import usePagination from "../../hooks/common/usePagination";
import PageBtn from "../../components/common/PageBtn";

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
  const { context, productOptions, num, setNum, pagenum, setPageNum } =
    useSearchProducts();
  //分頁設置 pageSize 為 每頁要顯示的筆數
  const pageSize = 12;
  const { pageDetail, pageNext } = usePagination(productOptions, pageSize);
  return (
    <div>
      <IconMark>
        「<Span>{context}</Span>」的收尋結果
      </IconMark>
      <SearchWrapper>
        {productOptions && (
          <SearchItem
            searchKey={context}
            productOptions={pageDetail.indexList}
          />
        )}
        {productOptions.length !== 0 && (
          <PageBtn
            pageNext={pageNext}
            pageDetail={pageDetail}
            num={num}
            setNum={setNum}
            pagenum={pagenum}
            setPageNum={setPageNum}
          />
        )}
      </SearchWrapper>
    </div>
  );
};

export default SearchPage;
