import styled from "styled-components";
import arrowUp from "../../../components/img/icon/arrowUp.svg";
import CartPreCheckout from "./CartPreCheckout";
import useScroll from "../../../hooks/carts/useScroll";
const SummaryCard = styled.div`
  background: #f9f9f9;
  position: fixed;
  width: 200px;
  top: 45%;
  right: 18px;
  z-index: 2;
  padding: 16px;
  opacity: 0.9;

  @media screen and (max-width: 698px) {
    display: none;
  }
`;

const GoToTop = styled.div`
  cursor: pointer;
  text-align: end;
`;

const Item = styled.div`
  padding: 10px 0;
  color: #8e979e;
  font-size: 16px;
  display: flex;
  justify-content: space-between;

  & + & {
    border-top: 1px solid #8e979e;
  }
`;
const Title = styled.div`
  font-size: 18px;
  color: #57656e;

  margin: 6px 0;
`;

const CartDetail = ({ items }) => {
  return items.map((item) => {
    return (
      <Item key={item.id}>
        <div>{item["Product.name"]}</div>
        <div>
          x<span>{item.product_quantity}</span>
        </div>
      </Item>
    );
  });
};

const CartSummary = ({ data, discountRules }) => {
  const [show] = useScroll();
  return (
    <SummaryCard>
      {show ? (
        <GoToTop onClick={() => window.scrollTo(0, 0)}>
          <img src={arrowUp} alt="go to top" />
        </GoToTop>
      ) : (
        ""
      )}
      <Title>購物車內容</Title>
      <CartDetail items={data} />
      <Title>結帳金額</Title>
      {discountRules && (
        <CartPreCheckout items={data} shipments={discountRules} />
      )}
    </SummaryCard>
  );
};

export default CartSummary;
