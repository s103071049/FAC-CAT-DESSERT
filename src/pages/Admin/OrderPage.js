import { useEffect, useState } from "react";
import styled from "styled-components";
import IconMark from "../../components/common/IconMark";
import PageChange from "../../components/common/PageChange";
import OrderStatusFilter from "./components/OrderStatusFilter";
import OrderStatusSection from "./components/OrderStatusSection";

const Wrapper = styled.div`
  max-width: 1042px;
  margin: 30px auto;
  padding: 0 16px;
`;
const Main = styled.main`
  margin-bottom: 60px;
`;
// 0-unhandled,1-rejected(系統拒單), 2-reject(人工拒單), 3-accepted
const fakeOrders = [
  {
    order_id: "123456789AB",
    created_at: "2021-09-20-15:34",
    accepted_at: null,
    is_accepted: 0,
  },
  {
    order_id: "987654321CD",
    created_at: "2021-09-21-15:14",
    accepted_at: "2021-09-21-15:24",
    is_accepted: 1,
  },
  {
    order_id: "888878888AA",
    created_at: "2021-09-20-15:34",
    accepted_at: "2021-09-20-15:44",
    is_accepted: 2,
  },
  {
    order_id: "888wefew8AA",
    created_at: "2021-09-28-15:34",
    accepted_at: "2021-09-28-16:10",
    is_accepted: 3,
  },
  {
    order_id: "668wefew8AA",
    created_at: "2021-09-28-15:34",
    accepted_at: "2021-09-28-16:10",
    is_accepted: 3,
  },
];

const OrderPage = () => {
  const [currentOrders, setCurrentOrders] = useState(fakeOrders);
  const [selectOrderStatus, setSelectOrderStatus] = useState(1);

  const handleOrderFilterClick = (selectedStatus) => {
    setSelectOrderStatus(selectedStatus);
  };

  useEffect(() => {
    if (selectOrderStatus === 1) {
      setCurrentOrders(fakeOrders.filter((order) => order.is_accepted === 0));
    }
    if (selectOrderStatus === 2)
      return setCurrentOrders(
        fakeOrders.filter((order) => order.is_accepted !== 0)
      );
    if (selectOrderStatus === 3) return setCurrentOrders(fakeOrders);
    if (selectOrderStatus === 4)
      return setCurrentOrders(
        fakeOrders.filter((order) => order.is_accepted === 3)
      );
    if (selectOrderStatus === 5)
      return setCurrentOrders(
        fakeOrders.filter(
          (order) => order.is_accepted === 1 || order.is_accepted === 2
        )
      );
  }, [selectOrderStatus]);

  return (
    <>
      <Wrapper>
        <IconMark context={"訂單管理"} />
        <Main>
          <OrderStatusFilter
            selectOrderStatus={selectOrderStatus}
            handleOrderFilterClick={handleOrderFilterClick}
          />
          <OrderStatusSection
            orders={currentOrders}
            selectOrderStatus={selectOrderStatus}
          />
        </Main>
        <PageChange />
      </Wrapper>
    </>
  );
};

export default OrderPage;
