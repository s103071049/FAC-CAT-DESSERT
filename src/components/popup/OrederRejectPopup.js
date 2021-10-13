import React from "react";
import styled from "styled-components";
import { MEDIA_QUERY_SD , }from "../Style/style"

const OrderPopupWrapper = styled.div`
  margin: 0 auto;
  /* display: fixed; */
  /* top:64px; */
  max-width: 1024px;
  padding: 15px;
`
const OrderPopupContext = styled.h2`
margin:0px
&+&{
  padding-top:15px ;
}
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

  ${MEDIA_QUERY_SD} {
    display:block;
    & *, & tr, & td, & th {
      display:block;
      text-align:start;
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

  ${MEDIA_QUERY_SD} {
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

  ${MEDIA_QUERY_SD} {
    & tr {
      height:auto;
      padding: 8px 0;
    }
  }
`
const Th = styled.th`

`
const RWDTitleSpan = styled.span`
  display: none;
  font-size: 20px;
  color:#917856;
  font-weight:bold;
  padding-right: 15px;
  ${MEDIA_QUERY_SD} {
    display: inline-block;
  }
`
const Tr = styled.tr`
  
`
const Td = styled.td`
  ${MEDIA_QUERY_SD} {
      padding-left: 45%;
      margin-bottom: 12px;
  }
`
const OrderTotal = styled.div`
  font-size: 24px;
  padding-top: 40px;
  display: flex;
  justify-content: flex-end;
  ${MEDIA_QUERY_SD}{
    padding-top: 20px;
    justify-content: flex-start;
  }
`
const TotalSpan = styled.span`
  color:#917856;
  padding-right: 40px;
`
const OrderRejectConfirm = styled.div`
  display: flex;
  justify-content: center;
  padding-top:40px;
`
const ConfirmButton = styled.button`
  font-size: 18px;
  background: #C9BA98;
  color:#fff;
  padding:5px 10px;
  border:none;
  border-radius: 8px;
  cursor:pointer;
`
const CancelButton = styled(ConfirmButton)`
  color:#917856;
  background: #fff;
  border:1px #C9BA98 solid;
  margin-left:20px;
`
export default function OrderRejectPopup(){
  return(
    <OrderPopupWrapper>
      <OrderPopupContext>訂單編號 : 123456789AB</OrderPopupContext>
      <OrderPopupContext>訂單時間:2021-09-20-15-34</OrderPopupContext>
      <OrderPopupContext>訂單狀態 : unhandling</OrderPopupContext>
      <OrderSection>
        <Table>
          <Thead>
            <Tr>
              <Th>
                商品id
              </Th>
              <Th>
                商品名稱
              </Th>
              <Th>
                價格
              </Th>
              <Th>
                數量
              </Th>
              <Th>
                備註
              </Th>
              <Th>
                小計
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>
                <RWDTitleSpan>商品id</RWDTitleSpan>#123
              </Td>
              <Td>
                <RWDTitleSpan>商品名稱</RWDTitleSpan>柚香鐵觀音
              </Td>
              <Td>
                <RWDTitleSpan>價格</RWDTitleSpan>120
              </Td>
              <Td>
                <RWDTitleSpan>數量</RWDTitleSpan>5
              </Td>
              <Td>
                <RWDTitleSpan>備註</RWDTitleSpan>附上蠟燭
              </Td>
              <Td>
                <RWDTitleSpan>小計</RWDTitleSpan>600
              </Td>
            </Tr>
            <Tr>
              <Td>
                <RWDTitleSpan>商品id</RWDTitleSpan>#123
              </Td>
              <Td>
                <RWDTitleSpan>商品名稱</RWDTitleSpan>提拉米蘇
              </Td>
              <Td>
                <RWDTitleSpan>價格</RWDTitleSpan>50
              </Td>
              <Td>
                <RWDTitleSpan>數量</RWDTitleSpan>2
              </Td>
              <Td>
                <RWDTitleSpan>備註</RWDTitleSpan>-
              </Td>
              <Td>
                <RWDTitleSpan>小計</RWDTitleSpan>100
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </OrderSection>
      <OrderTotal><TotalSpan>總計</TotalSpan>700</OrderTotal>
      <OrderRejectConfirm>
        <ConfirmButton>Confirm Reject</ConfirmButton>
        <CancelButton>Cancel</CancelButton>
      </OrderRejectConfirm>
    </OrderPopupWrapper>
  )
}