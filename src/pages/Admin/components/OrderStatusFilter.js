import styled from "styled-components"

import { MEDIA_QUERY_SD } from "../../../components/Style/style"

const OrderStatusWrapper = styled.div`
  margin-top:50px;
  display:flex;
  justify-content:flex-start;
  
  ${MEDIA_QUERY_SD} {
    flex-direction:column;
    align-items:center;
  }
`
const OrderFilterBtn = styled.button`
  background:#fff;
  width:20%;
  padding:6px 12px;
  color:#444;
  border-radius:6px;
  border:2px solid #444;
  cursor:pointer;
  
  & + & {
    margin-left:12px;
  }

  &:hover, &.active {
    color:#C9BA98;
    border:2px solid #C9BA98;
    font-weight:bold;
  }
  
  ${MEDIA_QUERY_SD} {
    width:50%;
    & + & {
      margin-top:12px;
      margin-left:0;
    }
  }
`
const ordersStatus = [
  {
    status: 1,
    title: '待處理訂單'
  },
  {
    status: 2,
    title: '已處理訂單',
  },
  {
    status: 3,
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
    <>
      <OrderStatusWrapper>
        <RenderOrderStatusBtn />
      </OrderStatusWrapper>
    </>
  )
}