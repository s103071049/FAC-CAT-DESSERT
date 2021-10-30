import React from "react";
import styled from "styled-components";
import { MEDIA_QUERY_SD, MEDIA_QUERY_MD } from "../../components/Style/style";
import useTransaction from "../../hooks/user/useTransaction";

const Wrapper = styled.div`
  padding-top: 80px;
  padding-left: 20px;
`

const Table = styled.table`
  border-collapse: collapse;
  border: 1px solid #bdc0ba;
  ${MEDIA_QUERY_MD} {
    display: block;
    border: none;
  }
`;
const Thead = styled.thead`
  ${MEDIA_QUERY_MD} {
    display: block;
  }
`;
const Tbody = styled.tbody`
  ${MEDIA_QUERY_MD} {
    display: block;
  }
`;
const Column = styled.td`
  border: 1px solid #bdc0ba;
  padding: 12px;
  ${MEDIA_QUERY_MD} {
    display: block;
    font-size: 16px;
    position: relative;
    padding-left: 50%;
    &:before {
      position: absolute;
      left: 6px;
      width: 45%;
    }
    &:nth-of-type(1):before {
      content: "訂單編號";
    }
    &:nth-of-type(2):before {
      content: "總金額";
    }
    &:nth-of-type(3):before {
      content: "收件者";
    }
    &:nth-of-type(4):before {
      content: "交易日期";
    }
    &:nth-of-type(5):before {
      content: "收貨日期";
    }
    &:nth-of-type(6):before {
      content: "處理情形";
    }
    &:nth-of-type(7):before {
      content: "繳款情形";
    }
  }
  ${MEDIA_QUERY_SD} {
    white-space: pre-line;
    word-break: break-all;
  }
`;
const GrayColumn = styled.th`
  border: none;
  padding: 12px;
  background: #77969a;
  ${MEDIA_QUERY_MD} {
    display: block;
  }
`;
const Row = styled.tr`
  margin: 0 auto;
  ${MEDIA_QUERY_MD} {
    display: block;
    margin: 0 0 16px 0;
    &:nth-child(odd){
      background:#77969A;
    }
  }
`;
const RowHeader = styled(Row)`
  ${MEDIA_QUERY_MD} {
    position: absolute;
    top: -9999px;
    left: -9999px;
  }
`;
const Page = styled.div`
  margin-top:60px;
`;


const TransactionPage = () => {
  const {
    transactionTableHeads,
    transactions 
  } = useTransaction()


  function Head() {
    return (
      <Thead>
        <RowHeader>
          { transactionTableHeads.map(head=>{
            return <GrayColumn key={head.id}>{head.title}</GrayColumn>
          }) }
        </RowHeader>
      </Thead>

    )
  }

  function Body() {
  
    const listItems = transactions.map(transaction => {
        const {id, price, receiverName, createdAt, deliverDate, is_accepted, is_completed} = transaction

      return (
        <Row key={id}>
          <Column>{id.slice(-6)}</Column>
          <Column>{price}</Column>
          <Column>{receiverName}</Column>
          <Column>
            {new Date(createdAt).toLocaleString()}</Column>
          <Column>{new Date(deliverDate).toLocaleDateString()}</Column>
          <Column>
            {is_accepted ? "已接受":is_accepted === null? '待處理':'拒絕'}
          
          </Column>
          <Column>
            {is_completed? '已付款':'待付款'}
          </Column>
        </Row>
      )
    });
    return (
      <Tbody>
        {listItems}
      </Tbody>
    );
  }

  return (
    <>
      <Wrapper>
        {transactions.length ? (<Table>
          <Head />
          <Body />
        </Table>):(<p>尚未有訂單</p>)}
        <Page>
        </Page>
      </Wrapper>
    </>
  );
};
export default TransactionPage;
