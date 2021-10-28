import styled from "styled-components";
import { useState,useEffect } from "react";


const PageChangeWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width:200px;
`;
const NowPage = styled.div`
  font-size: 18px;
  font-weight: bold;
  width: 50px;
  margin-left: 5px;
  color:#917856;
`;
const PreviousPageButton = styled.button`
  font-size: 18px;
  border:none;
  color: #917856;
  padding: 6px 10px;
  text-align: center;
  cursor: pointer;
  background:#fff;
  transition: background 0.5s ease-out;
  &:hover {
    font-weight: bold;
  }
`;
const NextPageButton = styled(PreviousPageButton)`
  margin-left: 5px;
`;

export default function PageBtn({pageNext ,pageDetail}) {
  const {totalPage,current,pageSize, } = pageDetail
  const [num, setNum] = useState(0)
  const [pagenum, setPageNum] =  useState(current)
  

  //上一頁
  const handlePreClick = () => {
    if(pagenum > 1) {
      setNum(num - pageSize)
      setPageNum(pagenum - 1)
      
    }
  }
  useEffect(()=>{
    pageNext(num)
  },[ pageNext,num])

  //下一頁
  const handleNextClick = () => {
    if(pagenum < totalPage) {
      setNum(num + pageSize)
      setPageNum(pagenum+1)

    }
  }
  return (
    <PageChangeWrapper>
        {pagenum !== 1 && (
          <PreviousPageButton onClick={handlePreClick}>
            {"<"}
          </PreviousPageButton>
        )}
        
        <NowPage>{pagenum}</NowPage> / <NowPage>{totalPage}</NowPage>
        {pagenum !== totalPage && (
          <NextPageButton onClick={handleNextClick}>{">"}</NextPageButton>
        )}
        
    </PageChangeWrapper>
  );
}
