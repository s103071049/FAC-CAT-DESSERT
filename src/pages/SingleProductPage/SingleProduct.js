import useCount from "../../hooks/carts/useCount";
import styled from "styled-components";
import {
  CartButton,
  MEDIA_QUERY_MD,
  MEDIA_QUERY_SD,
} from "../../components/Style/style.js";
import { Counter } from "../../components/common/Counter";
import { addCartItem } from "../../WEBAPI";
import { AuthContexts } from "../../context";
import { useContext } from "react";
const SingleProductWrapper = styled.div`
  margin: 50px 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  ${MEDIA_QUERY_MD} {
    flex-direction: column;
    margin-top: 0;
    margin: 50px 10px;
  }
  ${MEDIA_QUERY_SD} {
    display: block;
  }
`;
const Img = styled.div`
  width: 50%;
  ${MEDIA_QUERY_MD} {
    width: 100%;
  }
`;
const SingleProductImage = styled.div`
  display: block;
  width: 100%;
  height: 0;
  background: url(${(props) => props.imgUrl});
  border: 1px sold red;
  padding-bottom: 100%;
  overflow: hidden;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border-radius: 8px;
`;
const SingleProductDescription = styled.div`
  width: 50%;
  height: 442px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-left: 100px;
  ${MEDIA_QUERY_MD} {
    width: 100%;
    margin-left: 0;
  }
`;
const SingleProductInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${MEDIA_QUERY_MD} {
    flex-direction: column;
    justify-content: center;
  }
`;
const SingleProductTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;
const SingleProductPrice = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #ff5a5f;
`;
const SingleProductDescriptionText = styled.div`
  margin-top: 24px;
  width: 100%;
  height: 216px;
  font-size: 18px;
  white-space: pre-line;
  align-items: center;
  line-height: 1.5;
  ${MEDIA_QUERY_MD} {
    padding: 0px 10px;
    text-align: center;
  }
`;
const FlexCenter = styled.div`
  display: flex;
  align-items: center;
`;
const SingleProduct = ({ dessert, setLoading }) => {
  const { count, handleIncrement, handleDecrement } = useCount();
  const { user } = useContext(AuthContexts);
  const handleAddProducts = (e) => {
    if (!user) {
      return alert("請登入再進行購買");
    }
    setLoading(true);
    addCartItem(dessert.id, count).then((response) => {
      console.log(response);
      if (!response.success) {
        setLoading(false);
        return alert("系統異常中，正迅速修復!");
      }
      setLoading(false);
      alert(`添加 ${count} 個 ${dessert.name} 到購物車!`);
    });
  };
  return (
    <SingleProductWrapper>
      <Img>
        <SingleProductImage imgUrl={dessert.img_url} />
      </Img>
      <SingleProductDescription>
        <SingleProductInfo>
          <SingleProductTitle>{dessert.name}</SingleProductTitle>
          <SingleProductPrice>$NT{dessert.price}</SingleProductPrice>
        </SingleProductInfo>
        <SingleProductDescriptionText>
          {dessert.desc}
        </SingleProductDescriptionText>
        <FlexCenter>
          <Counter
            count={count}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
          />
        </FlexCenter>
        <CartButton onClick={handleAddProducts}>加入購物車</CartButton>
      </SingleProductDescription>
    </SingleProductWrapper>
  );
};
export default SingleProduct;
