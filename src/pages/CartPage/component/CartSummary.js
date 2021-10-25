import { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import arrowUp from "../../../components/img/icon/arrowUp.svg";
import { getAllCartItems, findAllDiscount } from "../../../WEBAPI";
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
const CartPreCheckout = ({ items, shipments }) => {
  let price = 0;
  let shipment;
  items.map((item) => {
    return (price += item.product_quantity * item["Product.price"]);
  });
  let rules = shipments
    .filter((item) => {
      return item.is_deleted !== true;
    })
    .sort((a, b) => {
      return a.threshold - b.threshold;
    });
  for (let i = 0; i < rules.length; i++) {
    if (price < rules[i].threshold) {
      shipment = rules[i].shipment;
      break;
    } else {
      shipment = 0;
    }
  }
  return (
    <>
      <Item>
        <div>商品小計</div>
        <div>${price}</div>
      </Item>
      <Item>
        <div>運費</div>
        <div>${shipment}</div>
      </Item>
      <Item>
        <div>應付總額</div>
        <Total>
          NT$<span>{shipment + price}</span>
        </Total>
      </Item>
    </>
  );
};
// 沒有登入到不了購物車這頁
const CartSummary = ({ data, setData, discountRules, setDiscountRules }) => {
  const [show, switchShow] = useState(false);

  const { loading, setLoading } = useContext(AuthLoadingContext);
  useEffect(() => {
    const listener = () => {
      switchShow(window.scrollY > 300);
    };
    document.addEventListener("scroll", listener);

    return () => document.removeEventListener("scroll", listener);
  }, [show]);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const [AllCartItems, DiscountRules] = await Promise.all([
        fetchAllCartItems(),
        fetchDiscountsRules(),
      ]);
      setLoading(false);
      setDiscountRules(DiscountRules);
      setData(AllCartItems);
    };
    fetchData();
  }, [setLoading, setData]);
  const fetchAllCartItems = () => {
    return getAllCartItems().then((response) => {
      if (!response.success) {
        return alert("系統載入異常，非常抱歉");
      }
      return response.message;
    });
  };
  const fetchDiscountsRules = () => {
    return findAllDiscount().then((response) => {
      if (!response.success) {
        return alert("系統運費處理異常，非常抱歉");
      }
      return response.Discounts;
    });
  };

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
