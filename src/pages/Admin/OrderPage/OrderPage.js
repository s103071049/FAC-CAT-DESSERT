import styled from "styled-components"

import IconMark from "../../../components/contexts/IconMark"
import PageChange from "../../../components/contexts/PageChange"
import { MEDIA_QUERY_SD } from "../../../components/Style/style"

const Wrapper = styled.div`
  max-width:1042px;
  margin:30px auto;
  padding:0 16px;
`
const Main = styled.main``
const OrderStatus = styled.div`
  margin-top:50px;
  display:flex;
  justify-content:space-around;
  
  ${MEDIA_QUERY_SD} {
    flex-direction:column;
  }
`
const OrderFilterBtn = styled.button`
  background:#fff;
  padding:12px 30px;
  color:#444;
  border-radius:6px;
  border:2px solid #444;
  &:hover {
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
const Tr = styled.tr`
 &:hover {
   color:#C9BA98;
 }
 
`
const Td = styled.td`
  &.orderNumber {
    color:#917856;
    cursor:pointer;
  }
  ${MEDIA_QUERY_SD} {
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
    margin-left:10px;
  }
  &:hover {
    background:#C9BA98;
    color:#fff;
  }

   ${MEDIA_QUERY_SD} {
    display:inline-block;
  }
`

const OrderPage = () => {
  return (
    <>

      <Wrapper>
        <IconMark context={"訂單管理"} />
        <Main>
          <OrderStatus>
            <OrderFilterBtn>待處理訂單</OrderFilterBtn>
            <OrderFilterBtn>已處理訂單</OrderFilterBtn>
            <OrderFilterBtn>全部訂單</OrderFilterBtn>
          </OrderStatus>
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
                <Tr>
                  <Td>
                    #001
                  </Td>
                  <Td className={"orderNumber"}>
                    123456789AB
                  </Td>
                  <Td>
                    2021-09-20-15:34
                  </Td>
                  <Td>
                    <OrderAction>
                      Accept
                    </OrderAction>
                    <OrderAction>
                      Reject
                    </OrderAction>
                  </Td>
                </Tr>

                <Tr>
                  <Td>
                    #002
                  </Td>
                  <Td className={"orderNumber"}>
                    987654321CD
                  </Td>
                  <Td>
                    2021-09-21-15:34
                  </Td>
                  <Td>
                    <OrderAction>
                      Accept
                    </OrderAction>
                    <OrderAction>
                      Reject
                    </OrderAction>
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    #002
                  </Td>
                  <Td className={"orderNumber"}>
                    987654321CD
                  </Td>
                  <Td>
                    2021-09-21-15:34
                  </Td>
                  <Td>
                    <OrderAction>
                      Accept
                    </OrderAction>
                    <OrderAction>
                      Reject
                    </OrderAction>
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    #002
                  </Td>
                  <Td className={"orderNumber"}>
                    987654321CD
                  </Td>
                  <Td>
                    2021-09-21-15:34
                  </Td>
                  <Td>
                    <OrderAction>
                      Accept
                    </OrderAction>
                    <OrderAction>
                      Reject
                    </OrderAction>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </OrderSection>
        </Main>
        <PageChange />
      </Wrapper>
    </>
  )
}

export default OrderPage