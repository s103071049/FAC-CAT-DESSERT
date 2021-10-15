
import styled from "styled-components"
import { Wrapper } from "../../components/Style/style"
import CartContent from './component/CartContent'
import Shipping from "./component/Shipping"
import ShoppingCart from './component/ShoppingCart'

const CartWrapper = styled(Wrapper)`
  max-width: 880px;
  position:relative;

  display:flex;
  justify-content:space-between;
`

const ShoppinCartDetail = styled.div``
const CartPage = () => {
  return (
    <>
      <CartWrapper>
        <ShoppingCart />
        <ShoppinCartDetail>
          <CartContent/>
          <Shipping/>
        </ShoppinCartDetail>
        
      </CartWrapper>
    </>
  )
}

export default CartPage