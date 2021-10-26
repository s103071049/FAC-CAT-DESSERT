import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import IconMark from "../../components/common/IconMark";
import PageChange from "../../components/common/PageChange";
import { getAllOrder } from "../../WEBAPI";
import OrderStatusFilter from "./components/OrderStatusFilter";
import OrderStatusSection from "./components/OrderStatusSection";
import { AuthContexts } from "../../context";
import useFindAllOrder from "../../hooks/orders/useFIndAllOrder";
import useHeader from "../../components/Header/useHeader";

const Wrapper = styled.div`
  max-width: 1042px;
  margin: 30px auto;
  padding: 0 16px;
  min-height: 73vh;
`;
const Main = styled.main`
  margin-bottom: 60px;
`;
// 0-unhandled,1-rejected(系統拒單), 2-reject(人工拒單), 3-accepted
const fakeOrders = [
  {
    id: "123456789AB",
    created_at: "2021-09-20-15:34",
    accepted_at: null,
    is_accepted: false,
  },
  {
    id: "987654321CD",
    created_at: "2021-09-21-15:14",
    accepted_at: "2021-09-21-15:24",
    is_accepted: true,
  },
];

const OrderPage = () => {
  const {
    user,
    setUser,
    currentOrders,
    setCurrentOrders,
    selectOrderStatus,
    setSelectOrderStatus,
    handleOrderFilterClick,
  } = useFindAllOrder();


  return (
    <Wrapper>
      <IconMark>訂單管理</IconMark>
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
  );
};

export default OrderPage;
