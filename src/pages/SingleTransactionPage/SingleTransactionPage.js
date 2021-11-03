import styled from "styled-components";
import useSingleTransaction from "../../hooks/user/useSingleTransaction";

const Container = styled.div`
  margin: 20px auto;
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
  margin: 0 auto;
  font-size: 22px;
  font-weight: bold;
`;
const Body = styled.div`
  margin-top: 40px;

  &:last-of-type {
    margin-top: 80px;
  }
`;

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
  background: #f0f1f3;
  ${(props) =>
    props.$active &&
    `
    background: #FBF6EA;
  `}
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
    ${(props) =>
      props.$show &&
      `
      &:first-child {
        text-align: left;
        margin-bottom: 10px;
      }
      &:first-of-type:before {
        content: attr(data-title);
        display: inline-block;
        width: auto;
        min-width: 40%;
        font-weight: 900;
        padding-right: 1rem;
        text-decoration: underline;
      }
    `}
  }
`;
const Img = styled.div`
  height: 0;
  width: 80%;
  background: url(${(props) => props.$url});
  padding-bottom: 80%;
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

const ItemPrice = styled.div`
  ${(props) =>
    props.$is_accepted === false &&
    `
      color:#E55555;
   `}
`;

const Summary = styled.div``;
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

const BackBtn = styled.button`
  font-size: 18px;
  border-radius: 8px;
  padding: 5px 10px;
  cursor: pointer;
  color: #917856;
  background: #fff;
  border: 1px #c9ba98 solid;
  margin-left: 20px;
  margin: 60px auto;
  display: block;
  &:hover {
    background: #c9ba98;
    color: #fff;
  }
`;

const SingleTransactionPage = () => {
  const { id, orderDetail, orderProducts, handleBack } = useSingleTransaction();
  const {
    deliverDate,
    createdAt,
    is_accepted,
    lastFiveNumber,
    price,
    sum,
    invoiceNumber,
    invoiceType,
    receiverAddress,
    receiverName,
    receiverPhone,
  } = orderDetail;
  return (
    <Container>
      <Header>
        <Title>{id.slice(-6)} - 訂單內容</Title>
      </Header>
      <Body>
        <Table>
          <Thead>
            <Tr>
              <Th>交易日期</Th>
              <Th>末五碼</Th>
              <Th>訂單狀態</Th>
              <Th>發票類型</Th>
              <Th>統編</Th>
            </Tr>
          </Thead>
          <Tbody>
                <Tr>
                  <Td data-title="交易日期" $show={true}>
                    <ItemPrice>{new Date(createdAt).toLocaleString()}</ItemPrice>
                  </Td>
                  <Td data-title="末五碼" >
                    <CartItemInfo>{lastFiveNumber}</CartItemInfo>
                  </Td>
                  <Td data-title="訂單狀態">
                    <ItemPrice $is_accepted={is_accepted}>
                     {is_accepted ? "已接受":is_accepted === null? '待處理':'拒絕'}
                    </ItemPrice>
                  </Td>
                    <Td data-title="發票類型">
                    <ItemPrice>
                     {invoiceType === 'normal'? '二聯式':'開立統編'}
                    </ItemPrice>
                  </Td>
                    <Td data-title="統編">
                    <ItemPrice>
                     {invoiceNumber? invoiceNumber:'-'}
                    </ItemPrice>
                  </Td>
                </Tr>

          </Tbody>
        </Table>
      </Body>
      <Body>
        <Table>
          <Thead>
            <Tr>
              <Th>收件日期</Th>
              <Th>收件人</Th>
              <Th>收件手機</Th>
              <Th colSpan="2">收件地址</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td data-title="收件日期" $show={true}>
                <ItemPrice>
                  {new Date(deliverDate).toLocaleDateString()}
                </ItemPrice>
              </Td>
              <Td data-title="收件人">
                <ItemPrice>{receiverName}</ItemPrice>
              </Td>
              <Td data-title="收件手機">
                <ItemPrice>{receiverPhone}</ItemPrice>
              </Td>
              <Td data-title="收件地址" colSpan="2">
                <ItemPrice>{receiverAddress}</ItemPrice>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </Body>
      <Body>
        <Table>
          <Thead $active={true}>
            <Tr>
              <Th>商品照片</Th>
              <Th>商品名稱</Th>
              <Th>單價</Th>
              <Th>數量</Th>
              <Th>小計</Th>
            </Tr>
          </Thead>
          <Tbody>
            {orderProducts.map((product) => {
              const { quantity, img_url, price, name, id } = product;
              return (
                <Tr key={id}>
                  <Td data-title="">
                    <Img $url={img_url} />
                  </Td>
                  <Td data-title="商品名稱">
                    <CartItemInfo>{name}</CartItemInfo>
                  </Td>
                  <Td data-title="商品單價">
                    <ItemPrice>{price}</ItemPrice>
                  </Td>
                  <Td data-title="數量">
                    <ItemPrice>{quantity}</ItemPrice>
                  </Td>
                  <Td data-title="小計">
                    <ItemPrice>{quantity * price}</ItemPrice>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
          <Summary>
            <Item>
              <div>運費</div>
              {(price-sum) <=0 && <div>'免運'</div>}
              {(price-sum) >0 && <div>{price-sum}</div>}
            </Item>
            <Item>
              <div>訂單總額</div>
              <Total>
                <span>{price}</span>
              </Total>
            </Item>
          </Summary>
       
      </Body>
      <BackBtn onClick={handleBack}>回訂單列表</BackBtn>
    </Container>
  );
};

export default SingleTransactionPage;
