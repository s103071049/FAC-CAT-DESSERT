import styled from "styled-components";
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

const Total = styled.div`
  color: #e33333;
`;

const CartPreCheckout = ({ items, shipments }) => {
  let price = 0;
  let shipment;
  items.map((item) => {
    return (price += item.product_quantity * item["Product.price"]);
  });
  let rules = shipments;
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
          <span>NT${shipment + price}</span>
        </Total>
      </Item>
    </>
  );
};
export default CartPreCheckout;
