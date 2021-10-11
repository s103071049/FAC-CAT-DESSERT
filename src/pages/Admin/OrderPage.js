import styled from "styled-components"
import { Link } from 'react-router-dom'
import IconMark from "../../components/contexts/IconMark"
import PageChange from "../../components/contexts/PageChange"
import OrderStatusFilter from "./components/OrderStatusFilter"
import { useState } from "react"

const Wrapper = styled.div`
  max-width:1042px;
  margin:30px auto;
  padding:0 16px;
`
const Main = styled.main`
  margin-bottom:60px;
`

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

const fakeOrders = [
  {
    order_id: '123456789AB',
    created_at: '2021-09-20-15:34',
    accepted_at: '2021-09-20-16:10',
    completed_at: null,
    is_accepted: true
  },
  {
    order_id: '987654321CD',
    created_at: '2021-09-21-15:34',
    accepted_at: '2021-09-21-16:10',
    completed_at: '2021-09-22-09:30',
    is_accepted: true
  },
  {
    order_id: '888878888AA',
    created_at: '2021-09-20-15:34',
    accepted_at: null,
    completed_at: null,
    is_accepted: false
  },
  {
    order_id: '888wefew8AA',
    created_at: '2021-09-28-15:34',
    accepted_at: '2021-09-28-16:10',
    completed_at: null,
    is_accepted: true
  },
  {
    order_id: '668wefew8AA',
    created_at: '2021-09-28-15:34',
    accepted_at: '2021-09-28-16:10',
    completed_at: '2021-09-29-08:30',
    is_accepted: true
  },
]



const RenderOrderData = ({ orders }) => {

  return orders.map((order, index) => {
    return (
      <Tr key={order.order_id}>
        <Td>
          {index}
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


const RenderOrderSection = () => {
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
          <RenderOrderData orders={fakeOrders} />
        </Tbody>
      </Table>
    </OrderSection>
  )
}
const OrderPage = () => {
  const [selectOrderStatus, setSelectOrderStatus] = useState('unhandled')
  const handleOrderFilterClick = (selectedStatus) => {
    setSelectOrderStatus(selectedStatus)
  }
  return (
    <>
      <Wrapper>
        <IconMark context={"訂單管理"} />
        <Main>
          <OrderStatusFilter selectOrderStatus={selectOrderStatus} handleOrderFilterClick={handleOrderFilterClick} />
          <RenderOrderSection />
        </Main>
        <PageChange />
      </Wrapper>
    </>
  )
}

export default OrderPage