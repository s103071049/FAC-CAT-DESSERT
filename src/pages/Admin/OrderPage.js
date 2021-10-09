import styled from "styled-components"

import IconMark from "../../components/contexts/IconMark"
import PageChange from "../../components/contexts/PageChange"
import OrderStatus from "./components/OrderStatus"

const Wrapper = styled.div`
  max-width:1042px;
  margin:30px auto;
  padding:0 16px;
`
const Main = styled.main`
  margin-bottom:60px;
`

const OrderSection = styled.section`
  padding-top:40px;
`

const Table = styled.table`
  border-spacing: 1;
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
const OrderAction = styled.button`
  text-decoration:none;
  background:#fff;
  color:#C9BA98;
  padding:6px 20px;
  border:1px solid #C9BA98;
  border-radius:6px;
  transition: all 0.15s;
  & + & {
    margin-left:6px;
  }
  &:hover {
    background:#C9BA98;
    color:#fff;
  }
  @media screen and (max-width: 535px) {
    & + & {
      margin-left:10px;
    }
    display:inline-block;
  }
`

const fakeOrders = [
  {
    id: '#001',
    orderNum: '123456789AB',
    orderDate: '2021-09-20-15:34',
    orderStatus: null
  },
  {
    id: '#002',
    orderNum: '987654321CD',
    orderDate: '2021-09-21-15:34',
    orderStatus: null
  },
  {
    id: '#003',
    orderNum: '888888888AA',
    orderDate: '2021-09-20-15:34',
    orderStatus: null
  },
  {
    id: '#004',
    orderNum: '888wefew8AA',
    orderDate: '2021-09-28-15:34',
    orderStatus: null
  },
  {
    id: '#005',
    orderNum: '888wefew8AA',
    orderDate: '2021-09-28-15:34',
    orderStatus: null
  },
]

const OrderActions = () => {
  return (
    <>
      <OrderAction>
        Accept
      </OrderAction>
      <OrderAction>
        Reject
      </OrderAction>
    </>
  )
}

const RenderOrderData = ({ orders }) => {
  return orders.map(order => {
    return (
      <Tr key={order.id}>
        <Td>
          {order.id}
        </Td>
        <Td>
          {order.orderNum}
        </Td>
        <Td>
          {order.orderDate}
        </Td>
        <Td>
          <OrderActions />
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
              id
            </Th>
            <Th>
              訂單編號
            </Th>
            <Th>
              訂單時間
            </Th>
            <Th>
              訂單處理
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
  return (
    <>
      <Wrapper>
        <IconMark context={"訂單管理"} />
        <Main>
          <OrderStatus />
          <RenderOrderSection />
        </Main>
        <PageChange />
      </Wrapper>
    </>
  )
}

export default OrderPage