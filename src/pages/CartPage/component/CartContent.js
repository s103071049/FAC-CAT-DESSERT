import { useState } from "react"
import styled from "styled-components"

import numeric1 from '../../../components/img/icon/numeric1.svg'
import cake from '../../../components/img/product/cake.jpg'

const Container = styled.div`
  margin-top:55px;
  border: 1px solid #9CA4AA;
  padding:16px 22px;
  font-size:18px;

`
const Header = styled.div`
  display:flex;
  align-items:center;
`
const Title = styled.div`
  margin-left:12px;
`
const Body = styled.div``

const Table = styled.table`
  border-collapse: collapse;
  background: white;
  overflow: hidden;
  max-width: 1042px;
  width: 100%;
  margin: 26px auto;
  position: relative;

  & * {
    position: relative;
    margin-top:20px;
  }
  
  @media screen and (max-width: 698px) {
    display:block;
    & *, & tr, & td, & th {
      display:block;
    }

    & * {
      margin-top:0;
    }
  }
`
const Thead = styled.thead`
  & tr {
    height: 40px ;
    font-size: 18px;
    color:#565656;
  }
  @media screen and (max-width: 698px) {
    display:none;
  }
`
const Tbody = styled.tbody`
 

  @media screen and (max-width: 698px) {
     & tr {
      height:auto;
    }
  }
`
const Th = styled.th`
  background:#F0F1F3;
  font-weight:normal;
  text-align:left;
  padding:0 8px;

`

const Tr = styled.tr`
  height: 60px;
  @media screen and (max-width: 698px) {
    border-bottom:1px solid #ccc;
    &+& {
      margin-top:20px;
    }
  }
`

const Td = styled.td`
  text-align:left;
  padding:0 8px;
  min-width:60px;
  
  & * {
    display:inline-block;
  }

  ${props => props.$active && `
    color:#E55555;
    font-weight:bold;
  `}
  @media screen and (max-width: 698px) {
    margin-bottom: 12px;

    &:not(:first-of-type):before {
      content:attr(data-title);
      display: inline-block;
      width: auto;
      min-width: 30%;
      font-weight: 900;
      padding-right: 1rem;
      text-decoration: underline
    }

    &:last-of-type{
      position:absolute;
      top:0;
      right:0;
      bottom:0;
    }
   
  }
`
const Img =styled.div`
  height: 0;
  width: 100%;
  background: url(${(props) => props.$url});
  padding-bottom: 100%;
  overflow: hidden;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  cursor: pointer;

  @media screen and (max-width: 698px) {
    width: 50%;
    padding-bottom: 50%;
  }
`
const CartItemInfo = styled.div`
`
const QtyBtn = styled.button`
  background:#fff;
  border:none;
  cursor:pointer;
  font-size:20px;

  @media screen and (max-width: 698px) {
    padding: 0 ;
  }
  
`

const ItemQty = styled.div`
    margin: 0 12px ;
 @media screen and (max-width: 698px) {
    margin: 0 12px ;
  }
`

const ItemPrice = styled.div``
const ItemActionBtn = styled.button`
  color:#E33333;
  border:1px solid #E33333;
  background:#fff;
  cursor:pointer;
  line-height:1;
  border-radius:50%;
`
const fakeCartData = [
  {
    id:1,
    imgUrl:cake,
    info:'老媽媽檸檬塔 - 7吋(20cm)',
    qty:1,
    price:880
  },
  {
    id:2,
    imgUrl:cake,
    info:'水果戚風(自取限定) - 波本香草6吋',
    qty:2,
    price:850
  }
]
const CartTableData = () => {
  return fakeCartData.map(item => {
    return (
      <Tr key={item.id}>
        <Td data-title="">
          <Img $url={item.imgUrl}/>
        </Td>
        <Td data-title="商品名稱">
          <CartItemInfo>{item.info}</CartItemInfo>
        </Td>
        <Td data-title="商品單價">
          <ItemPrice>{item.price}</ItemPrice>
        </Td>
        <Td data-title="數量">
          <QtyBtn>-</QtyBtn>
          <ItemQty >{item.qty}</ItemQty>
          <QtyBtn>+</QtyBtn>
        </Td>
        <Td data-title="小計">
          <ItemPrice>{item.qty * item.price}</ItemPrice>
        </Td>
        <Td data-title="">
          <ItemActionBtn>x</ItemActionBtn>
        </Td>
      </Tr>
    )
  })
}
const CartTableHead = () => {
  return (
    <Tr>
      <Th colSpan="2">商品明細</Th>
      <Th>單價</Th>
      <Th>數量</Th>
      <Th>小計</Th>
      <Th></Th>
    </Tr>
  )
}
const CartContent = () => {
  return (
    <Container>
      <Header>
        <div><img src={numeric1} alt="shopping cart cotent" /></div>
        <Title>購物車內容</Title>
      </Header>
      <Body>
        <Table>
          <Thead>
              <CartTableHead />
          </Thead>
          <Tbody>
            <CartTableData/>
          </Tbody>
        </Table>
      </Body>
    </Container>
  )
}


export default CartContent