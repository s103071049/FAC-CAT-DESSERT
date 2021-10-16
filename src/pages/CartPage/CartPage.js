
import styled from "styled-components"
import { Wrapper } from "../../components/Style/style"
import CartContent from './component/CartContent'
import Shipping from "./component/Shipping"
import CartSummary from './component/CartSummary'

const CartWrapper = styled(Wrapper)`
  position:relative;
`



const ShoppinCartDetail = styled.div`
  max-width:1000px;
  margin-bottom:100px;
`
const CartPage = () => {
  return (
    <>
      <CartWrapper>
        <CartSummary />
        <ShoppinCartDetail>
          <CartContent/>
          <Shipping/>
        </ShoppinCartDetail>
      </CartWrapper>
    </>
  )
}

export default CartPage