import { useEffect, useState } from "react"
import styled from "styled-components"
import IconMark from "../../components/contexts/IconMark"
import PageChange from "../../components/contexts/PageChange"
import OrderStatusFilter from "./components/OrderStatusFilter"
import OrderStatusSection from "./components/OrderStatusSection"

const Wrapper = styled.div`
  max-width:1042px;
  margin:30px auto;
  padding:0 16px;
`
const Main = styled.main`
  margin-bottom:60px;
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

const OrderPage = () => {
  const [currentOrders, setCurrentOrders] = useState(fakeOrders)
  const [selectOrderStatus, setSelectOrderStatus] = useState('unhandled')
  const handleOrderFilterClick = (selectedStatus) => {
    setSelectOrderStatus(selectedStatus)
  }

  useEffect(() => {
    if (selectOrderStatus === 'all') {
      setCurrentOrders(fakeOrders)
      return
    }
    if (selectOrderStatus === 'unhandled') {
      setCurrentOrders(fakeOrders.filter(order => !order.is_accepted))
    }
    if (selectOrderStatus === 'handled') {
      setCurrentOrders(fakeOrders.filter(order => order.is_accepted))
    }

  }, [selectOrderStatus])

  return (
    <>
      <Wrapper>
        <IconMark context={"訂單管理"} />
        <Main>
          <OrderStatusFilter selectOrderStatus={selectOrderStatus} handleOrderFilterClick={handleOrderFilterClick} />
          <OrderStatusSection orders={currentOrders} />
        </Main>
        <PageChange />
      </Wrapper>
    </>
  )
}

export default OrderPage