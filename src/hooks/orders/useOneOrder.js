import { useContext, useEffect, useState, useLayoutEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import {
  getOneOrder,
  acceptOrder,
  deleteOrder,
  getTractions,
} from "../../WEBAPI";
import { AuthLoadingContext, AuthContexts } from "../../context";

export default function useOneOrder() {
  const { user } = useContext(AuthContexts);
  const [popup, setPopup] = useState(false);
  const [order, setOrder] = useState(null);
  const [transations, setTransations] = useState(null);
  const [orderState, setOrderState] = useState(null);
  const history = useHistory();
  const { setLoading } = useContext(AuthLoadingContext);
  const { id } = useParams();
  useLayoutEffect(() => {
    setLoading(true);
    if (user.authority !== 1) {
      history.push("/");
      return setLoading(false);
    }
    getOneOrder(id).then((response) => {
      if (!response.success) {
        history.push("/admin/orders");
        return setLoading(false);
      }
      setOrder(response.data);
    });
  }, [setLoading, id, history, user.authority]);
  useEffect(() => {
    getTractions(id).then((response) => {
      if (response.success === false) {
        history.push("/admin/orders");
        return setLoading(false);
      }
      setTransations(response);
      setLoading(false);
    });
  }, [id, setLoading, history]);
  const handleUpdateOrder = () => {
    setLoading(true);
    if (orderState) {
      acceptOrder(id).then((response) => {
        setLoading(false);
      });
      history.push("/admin/orders");
    }
    if (!orderState) {
      deleteOrder(id).then((response) => {
        setLoading(false);
      });
      history.push("/admin/orders");
    }
  };
  const handleACceptPopup = () => {
    setPopup(true);
    setOrderState(true);
  };
  const handleRejectPopup = () => {
    setPopup(true);
    setOrderState(false);
  };
  const handleClosePopup = () => {
    setPopup(false);
    setOrderState(null);
  };
  const handleBack = () => {
    history.push("/admin/orders");
  };
  return {
    id,
    popup,
    order,
    transations,
    handleUpdateOrder,
    handleACceptPopup,
    handleRejectPopup,
    handleClosePopup,
    handleBack,
  };
}
