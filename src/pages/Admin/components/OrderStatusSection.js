import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const OrderSection = styled.section`
  margin-top: 90px;
`;

const Table = styled.table`
  border-spacing: 1;
  box-shadow: rgb(201, 186, 152) 0px 0px 0px 2px,
    rgb(201, 186, 152) 0px 4px 6px -1px, rgb(201, 186, 152) 0px 1px 0px inset;

  border-collapse: collapse;
  background: white;
  border-radius: 6px;
  overflow: hidden;
  max-width: 1042px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  & * {
    position: relative;
  }

  & td,
  & th {
    padding-left: 8px;
    text-align: center;
  }

  @media screen and (max-width: 535px) {
    display: block;
    & *,
    & tr,
    & td,
    & th {
      display: block;
    }
  }
`;
const Thead = styled.thead`
  & tr {
    height: 60px;
    font-size: 20px;
    color: #917856;
    font-weight: bold;
  }
  @media screen and (max-width: 535px) {
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

  @media screen and (max-width: 535px) {
    & tr {
      height: auto;
      padding: 8px 0;
    }
  }
`;
const Th = styled.th``;
const Tr = styled.tr`
  &:hover {
    color: #c9ba98;
  }
`;
const Td = styled.td`
  ${(props) =>
    props.$active &&
    `
    color:#E55555;
    font-weight:bold;
  `}
  @media screen and (max-width: 535px) {
    padding-left: 45%;
    margin-bottom: 12px;
  }
`;
const OrderNumber = styled(Link)`
  text-decoration: none;
  color: #917856;
  font-weight: bold;
`;
// 1-待處理訂單, 2-已處理訂單, 3-全部訂單, 4-已處裡/accpeted訂單, 5已處理/rejected-all 訂單,
const orderTableHeads = [
  {
    heads: ["訂單編號", "訂單時間"],
  },
  {
    heads: ["訂單編號", "訂單時間", "處理時間", "訂單狀態"],
  },
  {
    heads: ["訂單編號", "訂單時間", "處理時間", "訂單狀態"],
  },
];
const OrderContentPendingTr = ({ order, index }) => {
  return (
    <Tr>
      <Td style={{ paddingLeft: "15px" }}>{index + 1}</Td>
      <Td>
        <OrderNumber to={`/admin/order/${order.id}`}>{order.id.slice(-10)}</OrderNumber>
      </Td>
      <Td>{new Date(order.createdAt).toLocaleString()}</Td>
    </Tr>
  );
};
const OrderContentSolvedTr = ({ order, index }) => {
  return (
    <Tr>
      <Td style={{ paddingLeft: "15px" }}>{index + 1}</Td>
      <Td>
        <OrderNumber to={`/admin/order/${order.id}`}>{order.id.slice(-10)}</OrderNumber>
      </Td>
      <Td>{new Date(order.createdAt).toLocaleString()}</Td>
      <Td>{order.accepted_at ? new Date(order.accepted_at).toLocaleString() : "-"}</Td>
      <Td>
        {order.is_accepted && "接受"}
        {order.is_accepted === false && "拒單"}
        {order.is_accepted === null && (
          <span style={{ color: "red" }}>未處理</span>
        )}
      </Td>
    </Tr>
  );
};
export default function OrderStatusSection({ orders, selectOrderStatus }) {
  return (
    <OrderSection>
      <Table>
        <Thead>
          <Tr>
            <Th></Th>
            {selectOrderStatus === "pending" &&
              orderTableHeads[0].heads.map((head) => (
                <Th key={head}>{head}</Th>
              ))}
            {selectOrderStatus === "solved" &&
              orderTableHeads[1].heads.map((head) => (
                <Th key={head}>{head}</Th>
              ))}
            {selectOrderStatus === "all" &&
              orderTableHeads[2].heads.map((head) => (
                <Th key={head}>{head}</Th>
              ))}
          </Tr>
        </Thead>
        <Tbody>
          {selectOrderStatus === "pending" &&
            orders.map((order, index) => (
              <OrderContentPendingTr
                order={order}
                key={order.id}
                index={index}
              />
            ))}
          {selectOrderStatus === "solved" &&
            orders.map((order, index) => (
              <OrderContentSolvedTr
                order={order}
                key={order.id}
                index={index}
              />
            ))}
          {selectOrderStatus === "all" &&
            orders.map((order, index) => (
              <OrderContentSolvedTr
                order={order}
                key={order.id}
                index={index}
              />
            ))}
        </Tbody>
      </Table>
    </OrderSection>
  );
}
