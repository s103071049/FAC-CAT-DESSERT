import styled from "styled-components";
import numeric1 from "../../../components/img/icon/numeric1.svg";
import closeCircle from "../../../components/img/icon/close-circle.svg";
import {
  getAllCartItems,
  deleteCartItem,
  updateCartItem,
} from "../../../WEBAPI";
import { AuthContexts, AuthLoadingContext } from "../../../context";
import { useEffect, useState, useContext } from "react";

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
const Tfoot = styled.tfoot`
  display: none;

  & tr {
    height: 30px;
  }
  & tr :first-child {
    text-align: right;
    padding-right: 80px;
  }

  & tr:last-child td:last-child {
    color: #e33333;
  }

  @media screen and (max-width: 698px) {
    display: block;
    & tr :first-child {
      text-align: left;
      padding-right: 0;
      margin-top: 20px;
    }
    & tr {
      border-bottom: 0;
    }
    & td {
      min-width: 150px;
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

const CartTableFoot = ({ data, setLoading, setData }) => {
  return (
    <>
      <Tr>
        <Td colSpan="4">運費</Td>
        <Td colSpan="2">0</Td>
      </Tr>
      <Tr>
        <Td colSpan="4">總計</Td>
        <Td colSpan="2">2580</Td>
      </Tr>
      <Tr>
        <Td colSpan="4">應付總額</Td>
        <Td colSpan="2">NT$2580</Td>
      </Tr>
    </>
  );
};

const CartTableData = ({ data, setData }) => {
  const { setLoading } = useContext(AuthLoadingContext);
  return data.map((item) => {
    const handleDecreaseProduct = async () => {
      let quantity = item.product_quantity - 1;
      await updateCartItem(item.ProductId, quantity).then((response) => {
        if (!response.success) {
          return alert("更新商品數量處理異常，系統修復中");
        }
        return alert(`更新 ${item["Product.name"]} 購買數量 ${quantity}`);
      });
      await getAllCartItems().then((response) => {
        if (!response.success) {
          setLoading(false);
          return alert("系統異常，非常抱歉");
        }
        setLoading(false);
        setData(response.message);
      });
    };
    const handleButtonDelete = async () => {
      await deleteCartItem(item.ProductId).then((response) => {
        if (!response.success) {
          return alert("刪除品項處理異常，系統修復中");
        }
        return alert(`刪除成功`);
      });
      await getAllCartItems().then((response) => {
        if (!response.success) {
          setLoading(false);
          return alert("系統異常，非常抱歉");
        }
        setLoading(false);
        setData(response.message);
      });
    };
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
          <QtyBtn onClick={handleDecreaseProduct}>-</QtyBtn>
          <ItemQty>{item.product_quantity}</ItemQty>
          <QtyBtn>+</QtyBtn>
        </Td>
        <Td data-title="小計">
          <ItemPrice>{item.product_quantity * item["Product.price"]}</ItemPrice>
        </Td>
        <Td data-title="">
          <ItemAction onClick={handleButtonDelete}>
            <img src={closeCircle} alt="delete this item from cart" />
          </ItemAction>
        </Td>
      </Tr>
    );
  });
};
const CartTableHead = () => {
  return (
    <Tr>
      <Th colSpan="2">商品明細</Th>
      <Th>單價</Th>
      <Th>數量</Th>
      <Th colSpan="2">小計</Th>
    </Tr>
  );
};

const CartContent = ({
  data,
  setData,
  discountRules,
  setDiscountRules,
  handleButtonDelete,
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
            <CartTableHead />
          </Thead>
          <Tbody>
            <CartTableData data={data} setData={setData} />
          </Tbody>
          <Tfoot>
            <CartTableFoot
              discountRules={discountRules}
              setDiscountRules={setDiscountRules}
            />
          </Tfoot>
        </Table>
      </Body>
    </Container>
  );
};

export default CartContent;
