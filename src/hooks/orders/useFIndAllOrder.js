import React, { useState, useContext, useEffect } from "react";
import { AuthContexts } from "../../context";
import { getAllOrder } from "../../WEBAPI";

const useFindAllOrder = () => {
  const { user, setUser } = useContext(AuthContexts);
  const [currentOrders, setCurrentOrders] = useState([]);
  //pending(未處理),solved(以處理),all
  const [selectOrderStatus, setSelectOrderStatus] = useState("pending");

  const handleOrderFilterClick = (selectedStatus) => {
    setSelectOrderStatus(selectedStatus);
  };

  useEffect(() => {
    if (user) {
      getAllOrder().then((response) => {
        setCurrentOrders(response.data);
      });
    }
  }, [user]);
  return {
    user,
    setUser,
    currentOrders,
    setCurrentOrders,
    selectOrderStatus,
    setSelectOrderStatus,
    handleOrderFilterClick,
  };
};

export default useFindAllOrder;
