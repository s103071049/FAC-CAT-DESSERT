import styled from "styled-components"

import { MEDIA_QUERY_SD } from "../../../components/Style/style"

const OrderStatusWrapper = styled.div`
  margin-top:50px;
  display:flex;
  justify-content:space-around;
  
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

export default function OrderStatus() {
  return (
    <OrderStatusWrapper>
      <OrderFilterBtn className="active">待處理訂單</OrderFilterBtn>
      <OrderFilterBtn >已處理訂單</OrderFilterBtn>
      <OrderFilterBtn>全部訂單</OrderFilterBtn>
    </OrderStatusWrapper>
  )
}