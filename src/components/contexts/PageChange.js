import styled from "styled-components";

const PageChangeWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items:center;
  text-align:center;
`
const NowPage = styled.div`
  font-size: 24px;
  font-weight:bold;
  width:50px;
  margin-left:5px;
`
const PreviousPageButton = styled.button`
  font-size: 18px;
  border: 2px solid #dac9a6;
  color: #dac9a6;
  padding: 12px 20px;
  border-radius: 6%;
  text-align: center;
  cursor: pointer;
  transition: background 0.5s ease-out;
`
const NextPageButton = styled(PreviousPageButton)`
  margin-left:5px;
`
export default function PageChange(){
  return(
    <PageChangeWrapper>
      <PreviousPageButton>{"<"}</PreviousPageButton>
      <NowPage>1</NowPage>
      <NextPageButton>{">"}</NextPageButton>
    </PageChangeWrapper>
  )
}