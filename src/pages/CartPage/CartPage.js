import styled from "styled-components";
import { Wrapper } from "../../components/Style/style";
import CartContent from "./component/CartContent";
import Shipping from "./component/Shipping";
import CartSummary from "./component/CartSummary";
import { useEffect, useState, useContext } from "react";
import { getAllCartItems, deleteCartItem, updateCartItem } from "../../WEBAPI";
import { AuthContexts, AuthLoadingContext } from "../../context";
const CartWrapper = styled(Wrapper)`
  position: relative;
`;

const ShoppinCartDetail = styled.div`
  max-width: 1000px;
  margin-bottom: 100px;
`;
const CartPage = () => {
  const [data, setData] = useState([]);
  const { loading, setLoading } = useContext(AuthLoadingContext);
  //const [discountRules, setDiscountRules] = useState(null);
  useEffect(() => {
    getAllCartItems().then((response) => {
      if (!response.success) {
        setLoading(false);
        return alert("系統異常，非常抱歉");
      }
      setLoading(false);
      console.log(response.message);
      setData(response.message);
    });
  }, [setData]);

  return (
    <>
      <CartWrapper>
        {/* <CartSummary
            data={data}
            handleButtonDelete={handleButtonDelete}
            setData={setData}
          /> */}
        <ShoppinCartDetail>
          <CartContent data={data} setData={setData} />
          <Shipping />
        </ShoppinCartDetail>
      </CartWrapper>
    </>
  );
};
export default CartPage;
