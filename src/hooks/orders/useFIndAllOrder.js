import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router";
import { AuthContexts } from "../../context";
import { getAllOrder } from "../../WEBAPI";

const useFindAllOrder = () => {
  const { user, setUser } = useContext(AuthContexts);
  const [currentOrders, setCurrentOrders] = useState([]);
  //pending(未處理),solved(以處理),all
  const [selectOrderStatus, setSelectOrderStatus] = useState("pending");
  const history = useHistory();
  const handleOrderFilterClick = (selectedStatus) => {
    setSelectOrderStatus(selectedStatus);
  };

  useEffect(() => {
    if (user.authority !== 1) {
      return history.push("/");
    }
    getAllOrder().then((response) => {
      setCurrentOrders(response.data);
    });
  }, [history, user.authority]);
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
