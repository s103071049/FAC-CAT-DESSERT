import styled from "styled-components"
import { Link } from 'react-router-dom'


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

export default function OrderStatusSection({ orders }) {
  const RenderOrderData = () => {
    return orders.map((order, index) => {
      return (
        <Tr key={order.order_id}>
          <Td>
            {index + 1}
          </Td>
          <Td>
            <OrderNumber to={`/admin/orders/${order.order_id}`}>{order.order_id}</OrderNumber>
          </Td>
          <Td>
            {order.created_at}
          </Td>
        </Tr>
      )
    })
  }

  return (
    <OrderSection>
      <Table>
        <Thead>
          <Tr>
            <Th>
            </Th>
            <Th>
              訂單編號
            </Th>
            <Th>
              訂單時間
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          <RenderOrderData />
        </Tbody>
      </Table>
    </OrderSection>
  )
}