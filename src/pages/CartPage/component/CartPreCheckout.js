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

function CartPreCheckout({ items, shipments }) {
  let shipment = 0;
  let price = 0;
  items.map((item) => {
    return (price += item.product_quantity * item["Product.price"]);
  });

  for (let i = 0; i < shipments.length; i++) {
    if (price > shipments[i].threshold) {
      shipment = shipments[i].shipment;
      break;
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
}
export default CartPreCheckout;
