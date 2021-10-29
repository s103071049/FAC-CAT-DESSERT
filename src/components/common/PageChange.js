import styled from "styled-components";
import usePagination from "../../hooks/paginationHooks/usePagination";
const PageChangeWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const NowPage = styled.div`
  font-size: 24px;
  font-weight: bold;
  width: 50px;
  margin-left: 5px;
`;
const PreviousPageButton = styled.button`
  font-size: 18px;
  border: 2px solid #dac9a6;
  color: #dac9a6;
  padding: 6px 10px;
  border-radius: 6%;
  text-align: center;
  cursor: pointer;
  transition: background 0.5s ease-out;
  &:hover {
    background: #60373e;
  }
`;
const NextPageButton = styled(PreviousPageButton)`
  margin-left: 5px;
`;

export default function PageChange({
  dataAmount,
  showDataIndex,
  setShowDataIndex,
}) {
  const {
    currentPageNum,
    handleClickDecrementBtn,
    handleClickIncrementBtn,
    eachPageAmount,
  } = usePagination(dataAmount, showDataIndex, setShowDataIndex);

  const isFinalData = showDataIndex + eachPageAmount < dataAmount;
  const isAmountLessPageAmount = dataAmount <= eachPageAmount;
  return (
    <PageChangeWrapper>
      {currentPageNum > 1 && (
        <PreviousPageButton onClick={handleClickDecrementBtn}>
          {"<"}
        </PreviousPageButton>
      )}
      {isAmountLessPageAmount ? "" : <NowPage>{currentPageNum}</NowPage>}
      {isFinalData && (
        <NextPageButton onClick={handleClickIncrementBtn}>{">"}</NextPageButton>
      )}
    </PageChangeWrapper>
  );
}
