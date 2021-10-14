import React, { useState } from "react";
import styled from "styled-components";
import { MEDIA_QUERY_SD, MEDIA_QUERY_MD } from "../../components/style/style";
import PageChange from "../../components/common/PageChange.js";
const Wrapper = styled.div`
  max-width: 1024px;
  min-height: 80vh;
  margin: 0 auto;
  padding: 12px;
`;

const Title = styled.h2`
  color: #333;
`;

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
const Column = styled.th`
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
      white-space: nowrap;
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
  width: 100%;
  padding: 12px;
  background: #77969a;
  white-space: nowrap;
  ${MEDIA_QUERY_MD} {
    display: block;
  }
`;
const Row = styled.tr`
  margin: 0 auto;
  white-space: nowrap;
  ${MEDIA_QUERY_MD} {
    display: block;
    margin: 0 0 16px 0;
    background: ${(props) => (props.id % 2 === 1 ? "#77969A" : "white")};
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
  padding: 12px;
`;
function Head({ data }) {
  const listItems = data.map((each) => (
    <GrayColumn key={each.id}>{each.title}</GrayColumn>
  ));
  return (
    <Thead>
      <RowHeader>{listItems}</RowHeader>
    </Thead>
  );
}
function Body({ data, id }) {
  const listItems = data.map((each) => (
    <Column key={each.id}>{each.data}</Column>
  ));
  return (
    <Tbody>
      <Row id={id}>{listItems}</Row>
    </Tbody>
  );
}
const TransactionPage = () => {
  const data = [
    { id: 1, title: "訂單編號", data: "ASSWQSCG" },
    { id: 2, title: "總金額", data: "$2000" },
    { id: 3, title: "收件者", data: "Peter 大" },
    { id: 4, title: "交易日期", data: "2021-09-09 9:00" },
    { id: 5, title: "收貨日期", data: "2021-09-11 11:00 前" },
    { id: 6, title: "處理情形", data: "訂單處理中" },
    { id: 7, title: "繳款情形", data: "已繳款" },
  ];
  return (
    <div>
      <Wrapper>
        <Title>交易紀錄查詢</Title>
        <Table>
          <Head data={data} />
          <Body data={data} id={1} />
          <Body data={data} id={2} />
          <Body data={data} id={3} />
        </Table>
      </Wrapper>
      <Page>
        <PageChange></PageChange>
      </Page>
    </div>
  );
};
export default TransactionPage;
