import React, { useState } from "react";
import styled from "styled-components";
import { MEDIA_QUERY_SD, MEDIA_QUERY_MD } from "../../components/style/style";
import Popup from "./components/Popup";
import { TdContext } from "./components/TdContext";
import { thcontexts, tdcontexts } from "./components/popupItem";
// import { Link } from "react-router-dom"

const OrderPopupWrapper = styled.div`
  margin: 0 auto;
  max-width: 1024px;
  padding: 15px;
  min-height: 73vh;
`;
const Mark = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
`;
const OrderPopupContext = styled.h2`
  margin: 0px;
  & + & {
    padding-top: 15px;
  }
  ${MEDIA_QUERY_SD} {
    font-size: 20px;
  }
`;
const OrderSection = styled.section`
  padding-top: 40px;
  ${MEDIA_QUERY_MD} {
    padding-top: 20px;
  }
`;

const Table = styled.table`
  border-spacing: 1;
  border-collapse: collapse;
  border-radius: 6px;
  overflow: hidden;
  width: 100%;
  font-size: 20px;

  & td,
  & th {
    text-align: center;
  }
  ${MEDIA_QUERY_MD} {
    display: block;
    & tr,
    & td,
    & th {
      display: block;
      text-align: start;
    }
    & td {
    }
  }
`;
const Thead = styled.thead`
  & tr {
    height: 60px;
    font-size: 24px;
    color: #917856;
    font-weight: bold;
  }
  ${MEDIA_QUERY_MD} {
    display: none;
  }
`;
const Tbody = styled.tbody`
  & tr {
    height: 60px;
    border-bottom: 1px solid #917856;
  }
  & tr:last-child {
    border: 0;
  }
  ${MEDIA_QUERY_MD} {
    display: block;
    & tr {
      height: auto;
      padding: 8px 0;
    }
  }
`;
const Th = styled.th``;

const Tr = styled.tr``;
const OrderTotal = styled.div`
  font-size: 24px;
  padding-top: 40px;
  display: flex;
  justify-content: flex-end;
  ${MEDIA_QUERY_MD} {
    padding-top: 20px;
    justify-content: flex-start;
  }
`;
const TotalSpan = styled.span`
  color: #917856;
  padding-right: 40px;
`;
const OrderRejectConfirm = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 40px;
`;
const AcceptButton = styled.button`
  font-size: 18px;
  background: #c9ba98;
  color: #fff;
  padding: 5px 10px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background: #60373e;
  }
`;
const RejectButton = styled(AcceptButton)`
  color: #917856;
  background: #fff;
  border: 1px #c9ba98 solid;
  margin-left: 20px;
  &:hover {
    background: #c9ba98;
    color: #fff;
  }
`;

export default function OrderWholeListPage() {
  const [popup, setPopup] = useState(false);
  const handleOpenPopup = () => {
    setPopup(true);
  };
  const handleClosePopup = () => {
    setPopup(false);
  };
  return (
    <OrderPopupWrapper>
      <OrderPopupContext>訂單編號 : 123456789AB</OrderPopupContext>
      <OrderPopupContext>訂單時間 : 2021-09-20-15-34</OrderPopupContext>
      <OrderPopupContext>訂單狀態 : unhandling</OrderPopupContext>
      <OrderSection>
        <Table>
          <Thead>
            <Tr>
              {thcontexts.map((thcontext, index) => (
                <Th key={index}>{thcontext}</Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {tdcontexts.map((tdcontext, index) => (
              <TdContext tdcontext={tdcontext} key={index} />
            ))}
          </Tbody>
        </Table>
      </OrderSection>
      <OrderTotal>
        <TotalSpan>總計</TotalSpan>700
      </OrderTotal>
      <OrderRejectConfirm>
        <AcceptButton onClick={handleOpenPopup}>Accept</AcceptButton>
        <RejectButton onClick={handleOpenPopup}>Reject</RejectButton>
      </OrderRejectConfirm>
      {popup && <Mark />}
      {popup && <Popup handleClosePopup={handleClosePopup} />}
    </OrderPopupWrapper>
  );
}
