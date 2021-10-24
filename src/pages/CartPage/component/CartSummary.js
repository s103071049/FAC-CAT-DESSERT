import { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import arrowUp from "../../../components/img/icon/arrowUp.svg";
import { getAllCartItems } from "../../../WEBAPI";
import { AuthContexts, AuthLoadingContext } from "../../../context";
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

const Total = styled.div`
  color: #e33333;
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
// 這邊還沒串 api
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
        <Total>
          NT$<span>2580</span>
        </Total>
      </Item>
    </>
  );
};
// 沒有登入到不了購物車這頁
const CartSummary = () => {
  const [show, switchShow] = useState(false);
  const [data, setData] = useState([]);
  const { loading, setLoading } = useContext(AuthLoadingContext);
  useEffect(() => {
    const listener = () => {
      switchShow(window.scrollY > 300);
    };
    document.addEventListener("scroll", listener);

    return () => document.removeEventListener("scroll", listener);
  }, [show]);
  useEffect(() => {
    setLoading(true);
    getAllCartItems().then((response) => {
      if (!response.success) {
        setLoading(false);
        return alert("系統異常，非常抱歉");
      }
      setLoading(false);
      setData(response.message);
    });
  }, [setLoading]);
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
      <CartPreCheckout />
    </SummaryCard>
  );
};

export default CartSummary;
