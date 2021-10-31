import styled from "styled-components";
import { Wrapper } from "../../components/Style/style";
import CartContent from "./component/CartContent";
import Shipping from "./component/Shipping";
import CartSummary from "./component/CartSummary";
import useCartApi from "../../hooks/carts/useCartApi";
const CartWrapper = styled(Wrapper)`
  position: relative;
`;

const ShoppinCartDetail = styled.div`
  max-width: 1000px;
  margin-bottom: 100px;
`;

const CartPage = () => {
  const {
    data,
    setData,
    discountRules,
    handleButtonDelete,
    handleDecreaseProduct,
    handleIncreaseProduct,
  } = useCartApi();
  return (
    <>
      <CartWrapper>
        <CartSummary data={data} discountRules={discountRules} />
        <ShoppinCartDetail>
          <CartContent
            data={data}
            setData={setData}
            discountRules={discountRules}
            handleButtonDelete={handleButtonDelete}
            handleDecreaseProduct={handleDecreaseProduct}
            handleIncreaseProduct={handleIncreaseProduct}
          />
          <Shipping data={data} />
        </ShoppinCartDetail>
      </CartWrapper>
    </>
  );
};
export default CartPage;
