import styled from "styled-components";
import numeric1 from "../../../components/img/icon/numeric1.svg";
import closeCircle from "../../../components/img/icon/close-circle.svg";
import CartPreCheckout from "./CartPreCheckout";
const Container = styled.div`
  margin-top: 50px;
  border: 1px solid #9ca4aa;
  padding: 16px 22px;
  font-size: 18px;
  @media screen and (max-width: 698px) {
    font-size: 16px;
  }
`;
const Header = styled.div`
  display: flex;
  align-items: center;
`;
const Title = styled.div`
  margin-left: 12px;
`;
const Body = styled.div``;

const Table = styled.table`
  border-collapse: collapse;
  background: white;
  overflow: hidden;
  max-width: 1042px;
  width: 100%;
  margin: 26px auto;
  position: relative;
  & * {
    position: relative;
    margin-top: 20px;
  }
  @media screen and (max-width: 698px) {
    display: block;
    & *,
    & tr,
    & td,
    & th {
      display: block;
    }
    & * {
      margin-top: 0;
    }
  }
`;
const Thead = styled.thead`
  & tr {
    height: 40px;
    font-size: 18px;
    color: #565656;
  }
  @media screen and (max-width: 698px) {
    display: none;
  }
`;
const Tbody = styled.tbody`
  @media screen and (max-width: 698px) {
    & tr {
      height: auto;
    }
  }
`;

const Th = styled.th`
  background: #f0f1f3;
  font-weight: normal;
  text-align: left;
  padding: 0 8px;
`;

const Tr = styled.tr`
  @media screen and (max-width: 698px) {
    border-bottom: 1px solid #ccc;
    & + & {
      margin-top: 20px;
    }
  }
`;

const Td = styled.td`
  text-align: left;
  padding: 0 8px;
  min-width: 60px;
  & * {
    display: inline-block;
  }
  ${(props) =>
    props.$active &&
    `
    color:#E55555;
    font-weight:bold;
  `}
  @media screen and (max-width: 698px) {
    margin-bottom: 12px;
    &:first-child {
      text-align: center;
      margin-bottom: 20px;
    }
    &:not(:first-of-type):before {
      content: attr(data-title);
      display: inline-block;
      width: auto;
      min-width: 40%;
      font-weight: 900;
      padding-right: 1rem;
      text-decoration: underline;
    }
    &:last-of-type {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
    }
  }
`;
const Img = styled.div`
  height: 0;
  width: 100%;
  background: url(${(props) => props.$url});
  padding-bottom: 100%;
  overflow: hidden;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  cursor: pointer;
  @media screen and (max-width: 698px) {
    width: 50%;
    padding-bottom: 50%;
  }
`;
const CartItemInfo = styled.div``;
const QtyBtn = styled.button`
  background: #fff;
  border: none;
  cursor: pointer;
  font-size: 20px;
  @media screen and (max-width: 698px) {
    padding: 0;
  }
`;

const ItemQty = styled.div`
  margin: 0 12px;
  @media screen and (max-width: 698px) {
    margin: 0 12px;
  }
`;

const ItemPrice = styled.div``;
const ItemAction = styled.div`
  cursor: pointer;
  & img {
    margin-top: 0;
  }
`;

const CartContent = ({
  data,
  discountRules,
  handleButtonDelete,
  handleDecreaseProduct,
  handleIncreaseProduct,
}) => {
  return (
    <Container>
      <Header>
        <div>
          <img src={numeric1} alt="shopping cart cotent" />
        </div>
        <Title>購物車內容</Title>
      </Header>
      <Body>
        <Table>
          <Thead>
            <Tr>
              <Th colSpan="2">商品明細</Th>
              <Th>單價</Th>
              <Th>數量</Th>
              <Th colSpan="2">小計</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((item) => {
              return (
                <Tr key={item.id}>
                  <Td data-title="">
                    <Img $url={item["Product.img_url"]} />
                  </Td>
                  <Td data-title="商品名稱">
                    <CartItemInfo>{item["Product.name"]}</CartItemInfo>
                  </Td>
                  <Td data-title="商品單價">
                    <ItemPrice>{item["Product.price"]}</ItemPrice>
                  </Td>
                  <Td data-title="數量">
                    <QtyBtn
                      onClick={() => {
                        handleDecreaseProduct(item);
                      }}
                    >
                      -
                    </QtyBtn>
                    <ItemQty>{item.product_quantity}</ItemQty>
                    <QtyBtn
                      onClick={() => {
                        handleIncreaseProduct(item);
                      }}
                    >
                      +
                    </QtyBtn>
                  </Td>
                  <Td data-title="小計">
                    <ItemPrice>
                      {item.product_quantity * item["Product.price"]}
                    </ItemPrice>
                  </Td>
                  <Td data-title="">
                    <ItemAction
                      onClick={() => {
                        handleButtonDelete(item);
                      }}
                    >
                      <img src={closeCircle} alt="delete this item from cart" />
                    </ItemAction>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
        {discountRules && (
          <CartPreCheckout items={data} shipments={discountRules} />
        )}
      </Body>
    </Container>
  );
};

export default CartContent;
