import styled from "styled-components"

import { MEDIA_QUERY_SD } from "../../../components/Style/style"

const OrderStatusWrapper = styled.div`
  margin-top:50px;
  display:flex;
  justify-content:space-between;
  
  ${MEDIA_QUERY_SD} {
    flex-direction:column;
  }
`
const OrderFilterBtn = styled.button`
  background:#fff;
  padding:6px 12px;
  color:#444;
  border-radius:6px;
  border:2px solid #444;
  cursor:pointer;
  &:hover, &.active {
    color:#C9BA98;
    border:2px solid #C9BA98;
    font-weight:bold;
  }

  ${MEDIA_QUERY_SD} {
    & + & {
      margin-top:12px;
    }
  }
`
const ordersStatus = [
  {
    status: 'unhandled',
    title: '待處理訂單'
  },
  {
    status: 'handled',
    title: '已處理訂單'
  },
  {
    status: 'all',
    title: '全部訂單'
  }
]



export default function OrderStatusFilter({ selectOrderStatus, handleOrderFilterClick }) {
  const RenderOrderStatusBtn = () => {
    return ordersStatus.map(orderStatus => {
      const { status, title } = orderStatus
      return (
        <OrderFilterBtn
          className={status === selectOrderStatus ? 'active' : ''}
          key={orderStatus.status}
          onClick={() => { handleOrderFilterClick(status) }}
        >
          {title}
        </OrderFilterBtn>
      )
    })
  }
  return (
    <OrderStatusWrapper>
      <RenderOrderStatusBtn />
    </OrderStatusWrapper>
  )
}