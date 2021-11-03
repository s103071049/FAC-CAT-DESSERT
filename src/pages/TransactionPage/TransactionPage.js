import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { MEDIA_QUERY_SD, MEDIA_QUERY_MD } from "../../components/Style/style";
import useTransaction from "../../hooks/user/useTransaction";
import usePagination from "../../hooks/common/usePagination";
import PageBtn from "../../components/common/PageBtn";

const Wrapper = styled.div`
  padding: 80px 0 15px 20px;
  display: flex;
  flex-direction: column;
`;

const Table = styled.table`
  border-collapse: collapse;
  border: 1px solid #bdc0ba;
  margin-bottom: 60px;
  text-align: center;
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
const IDLink = styled(Link)`
  color: #000;
  &:hover {
    color: #789c9a;
  }
`;
const Column = styled.td`
  border: 1px solid #bdc0ba;
  padding: 12px;

  ${(props) =>
    props.$is_accepted === false &&
    `
    color:#E33333;
  `}

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
    &:nth-child(odd) {
      background: #77969a;
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
const TransactionPage = () => {
  const {
    transactionTableHeads,
    transactions,
    num,
    setNum,
    pagenum,
    setPageNum,
  } = useTransaction();
  const pageSize = 4;
  const { pageDetail, pageNext } = usePagination(transactions, pageSize);

  function Head() {
    return (
      <Thead>
        <RowHeader>
          {transactionTableHeads.map((head) => {
            return <GrayColumn key={head.id}>{head.title}</GrayColumn>;
          })}
        </RowHeader>
      </Thead>
    );
  }

  function Body() {
    const listItems = pageDetail.indexList.map((transaction) => {
      const { id, price, receiverName, createdAt, deliverDate, is_accepted } =
        transaction;

      return (
        <Row key={id}>
          <Column>
            <IDLink to={`/user/myorder/${id}`}>{id.slice(-6)}</IDLink>
          </Column>
          <Column>{price}</Column>
          <Column>{receiverName}</Column>
          <Column>{new Date(createdAt).toLocaleString()}</Column>
          <Column>{new Date(deliverDate).toLocaleDateString()}</Column>
          <Column $is_accepted={is_accepted}>
            {is_accepted ? "已接受" : is_accepted === null ? "待處理" : "拒絕"}
          </Column>
        </Row>
      );
    });
    return <Tbody>{listItems}</Tbody>;
  }

  return (
    <>
      <Wrapper>
        {transactions.length ? (
          <>
            <Table>
              <Head />
              <Body />
            </Table>
            {/* 分頁元件 */}
            <PageBtn
              pageNext={pageNext}
              pageDetail={pageDetail}
              num={num}
              setNum={setNum}
              pagenum={pagenum}
              setPageNum={setPageNum}
            />
          </>
        ) : (
          <p>尚未有訂單</p>
        )}
      </Wrapper>
    </>
  );
};
export default TransactionPage;
