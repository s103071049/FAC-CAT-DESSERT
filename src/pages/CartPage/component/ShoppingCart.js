import styled from "styled-components";

import arrowUp from '../../../components/img/icon/arrowUp.svg'
const ShoppingCartCard = styled.div`
  background:#F9F9F9;
  position:fixed;
  width:250px;
  top:25%;
  left:1%;
  z-index:2;
  padding:16px;
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
const GoToTop = styled.div`
  cursor:pointer;
`


const Total = styled.div`
  color:#E33333;
  font-weight:bold;
`
const ShoppingCart = () => {
  return (
    <ShoppingCartCard>
      <Item>
        <Title>購物車內容</Title>
        <GoToTop><img src={arrowUp} alt="go to top" /></GoToTop>
      </Item>
      <Item>
        <div>老媽媽檸檬塔 - 7吋(20cm)</div>
        <div>x<span>1</span></div>
      </Item>
      <Item>
        <div>水果戚風(自取限定) - 波本香草6吋</div>
        <div>x<span>2</span></div>
      </Item>
      <Title>結帳金額</Title>
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
    </ShoppingCartCard>
  )
}

export default ShoppingCart