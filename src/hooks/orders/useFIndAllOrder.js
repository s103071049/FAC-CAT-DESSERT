import React, { useState, useContext, useEffect, useLayoutEffect } from "react";
import { useHistory } from "react-router";
import { AuthContexts } from "../../context";
import OrderStatusFilter from "../../pages/Admin/components/OrderStatusFilter";
import { getAllOrder } from "../../WEBAPI";
import { AuthLoadingContext } from "../../context";

const useFindAllOrder = () => {
  const { user, setUser } = useContext(AuthContexts);
  const { loading, setLoading } = useContext(AuthLoadingContext);
  const [fackOrders, setFackOrders] = useState([]);
  const [currentOrders, setCurrentOrders] = useState([]);
  const [time, setTime] = useState(false);
  //pending(未處理),solved(以處理),all
  const [selectOrderStatus, setSelectOrderStatus] = useState("pending");
  const history = useHistory();
  const handleOrderFilterClick = (selectedStatus) => {
    setSelectOrderStatus(selectedStatus);
  };
  useLayoutEffect(() => {
    setLoading(true);
    if (user.authority !== 1) {
      history.push("/");
      return setLoading(false);
    }
    getAllOrder().then((response) => {
      setFackOrders(response.data);
      setLoading(false);
    });
  }, [history, user.authority]);
  useEffect(() => {
    if (selectOrderStatus === "pending") {
      setCurrentOrders(
        fackOrders.filter((fackOrders) => fackOrders.is_accepted === null)
      );
    }
    if (selectOrderStatus === "solved") {
      setCurrentOrders(
        fackOrders.filter((fackOrders) => fackOrders.is_accepted !== null)
      );
    }
    if (selectOrderStatus === "all") {
      setCurrentOrders(fackOrders);
    }
    const interval = setInterval(() => {
      window.location.reload();
    }, 600000);

    return () => clearInterval(interval);
  }, [fackOrders, selectOrderStatus, time]);
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
