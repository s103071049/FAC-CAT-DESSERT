import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import styled from "styled-components";
import arrowUp from '../../../components/img/icon/arrowUp.svg'

const SummaryCard = styled.div`
  background:#F9F9F9;
  position:fixed;
  width:200px;
  top:45%;
  right:18px;
  z-index:2;
  padding:16px;
  opacity:0.9;


  @media screen and (max-width: 698px) {
    display:none;
  }
`

const GoToTop = styled.div`
  cursor:pointer;
  text-align:end;
`

const Item = styled.div`
  padding: 10px 0;
  color:#8E979E;
  font-size:16px;
  display:flex;
  justify-content:space-between;

  & + & {
    border-top:1px solid #8E979E;
  }
`
const Title = styled.div`
  font-size:18px;
  color:#57656E;

  margin:6px 0;
`


const Total = styled.div`
  color:#E33333;
`

const fakeCart = [
  {
    productId:'1',
    productName:'老媽媽檸檬塔 - 7吋(20cm)',
    qty:1,
    price:880
  },
  {
    productId:'2',
    productName:'水果戚風(自取限定) - 波本香草6吋',
    qty:2,
    price:850
  },

]

const CartDetail = ({items}) => {
  return items.map(item => {
    return (
      <Item key={item.productId}>
        <div>{item.productName}</div>
        <div>x<span>{item.qty}</span></div>
      </Item>
    )
  })
}

const CartPreCheckout = () => {

  return (
    <>
       <Item>
        <div>商品小計</div>
        <div>2580</div>
      </Item>
      <Item>
        <div>運費</div>
        <div>0</div>
      </Item>
      <Item>
        <div>應付總額</div>
        <Total>NT$<span>2580</span></Total>
      </Item>
    </>
  )
}

const CartSummary = () => {
  const [show, switchShow] = useState(false)

  useEffect(()=>{
    const listener = () => {
      switchShow(window.scrollY > 300)
    } 
    document.addEventListener('scroll', listener)

    return () => document.removeEventListener('scroll', listener) 
  }, [show])

  return (
    <SummaryCard>
      {show? (
        <GoToTop onClick={()=> window.scrollTo(0,0)}>
          <img src={arrowUp} alt="go to top" />
        </GoToTop>): ''}
      <Title>購物車內容</Title>
      <CartDetail items={fakeCart}/>
      <Title>結帳金額</Title>
      <CartPreCheckout />
    </SummaryCard>
  )
}

export default CartSummary