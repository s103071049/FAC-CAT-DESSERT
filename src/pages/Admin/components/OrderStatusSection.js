import styled from "styled-components"
import { Link } from 'react-router-dom'
import { useState } from "react/cjs/react.development"


const OrderSection = styled.section`
  margin-top:90px;
`

const Table = styled.table`
  border-spacing: 1;
  box-shadow: rgb(201,186,152) 0px 0px 0px 2px, rgb(201,186,152) 0px 4px 6px -1px, rgb(201,186,152) 0px 1px 0px inset;

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
  
  & td, & th {
    padding-left:8px;
    text-align:center;
  }

  @media screen and (max-width: 535px) {
    display:block;
    & *, & tr, & td, & th {
      display:block;
    }
  }
`
const Thead = styled.thead`
  & tr {
    height: 60px;
    font-size: 20px;
    color:#917856;
    font-weight:bold;
  }
  @media screen and (max-width: 535px) {
    display:none;
  }
`
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
      height:auto;
      padding: 8px 0;
    }
  }
`
const Th = styled.th``
const Tr = styled.tr`
 &:hover {
   color:#C9BA98;
 }
 
`
const Td = styled.td`
  ${props => props.$active && `
    color:#E55555;
    font-weight:bold;
  `}
  @media screen and (max-width: 535px) {
    padding-left: 45%;
    margin-bottom: 12px;
  }
`
const OrderNumber = styled(Link)`
  text-decoration:none;
  color:#917856;
  font-weight:bold;
`
// 1-待處理訂單, 2-已處理訂單, 3-全部訂單, 4-已處裡/accpeted訂單, 5已處理/rejected-all 訂單, 
const orderTableHeads = [
  {
    statusCode: 1,
    heads: ['訂單編號', '訂單時間']
  },
  {
    statusCode: 2,
    heads: ['訂單編號', '訂單時間', '處理時間', '訂單狀態']
  },
  {
    statusCode: 3,
    heads: ['訂單編號', '訂單時間', '處理時間', '訂單狀態']
  },
  {
    statusCode: 4,
    heads: ['訂單編號', '訂單時間', '處理時間']
  },
  {
    statusCode: 5,
    heads: ['訂單編號', '訂單時間', '處理時間', '拒單原因']
  },
]
export default function OrderStatusSection({ orders, selectOrderStatus }) {


  const RenderOrderTr = () => {
    return orders.map((order, index) => {
      return (
        <Tr key={order.order_id}>
          {/* 待處理訂單 */}
          <Td>
            {index + 1}
          </Td>
          <Td>
            <OrderNumber to={`/admin/orders/${order.order_id}`}>{order.order_id}</OrderNumber>
          </Td>
          <Td>
            {order.created_at}
          </Td>
          {/* 已處理訂單 - all */}
          {(selectOrderStatus === 2 || selectOrderStatus === 6) && (
            <>
              <Td>
                {order.accepted_at}
              </Td>
              <Td>
                {order.is_accepted === 1 && '系統拒單'}
                {order.is_accepted === 2 && '人工拒單'}
                {order.is_accepted === 3 && 'Accepted'}
              </Td>
            </>
          )}
          {/* 全部訂單 */}
          {(selectOrderStatus === 3) && (
            <>
              <Td>
                {order.accepted_at ? order.accepted_at : '-'}
              </Td>
              <Td $active={order.is_accepted === 0}>
                {order.is_accepted === 0 && '待處理'}
                {order.is_accepted === 1 && '系統拒單'}
                {order.is_accepted === 2 && '人工拒單'}
                {order.is_accepted === 3 && 'Accepted'}

              </Td>
            </>
          )}
        </Tr>
      )
    })
  }

  const RenderOrderTableHeads = () => {
    console.log('selectOrderStatus', selectOrderStatus)
    const [selectTableHeads] = orderTableHeads.filter(orderTableHead => orderTableHead.statusCode === selectOrderStatus)
    const { heads } = selectTableHeads
    return heads.map(head => {
      return (
        <Th key={head}>{head}</Th>
      )
    })
  }

  return (
    <OrderSection>
      <Table>
        <Thead>
          <Tr>
            <Th></Th>
            <RenderOrderTableHeads />
          </Tr>
        </Thead>
        <Tbody>
          <RenderOrderTr />
        </Tbody>
      </Table>
    </OrderSection>
  )
}