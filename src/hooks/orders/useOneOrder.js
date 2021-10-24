import { useContext, useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getOneOrder, acceptOrder, deleteOrder } from "../../WEBAPI";
import { AuthLoadingContext, AuthContexts } from "../../context";

export default function useOneOrder() {
  const { user, setUser } = useContext(AuthContexts);
  const [popup, setPopup] = useState(false);
  const [order, setOrder] = useState(null);
  const [orderState, setOrderState] = useState(null);
  const history = useHistory();
  const { loading, setLoading } = useContext(AuthLoadingContext);
  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    if (user.authority !== 1) {
      history.push("/");
      return setLoading(false);
    }
    getOneOrder(id).then((response) => {
      setOrder(response.data);
      setLoading(false);
    });
  }, [setLoading, id, history, user.authority]);
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
    user,
    setUser,
    popup,
    setPopup,
    order,
    setOrder,
    orderState,
    setOrderState,
    history,
    loading,
    setLoading,
    handleUpdateOrder,
    handleACceptPopup,
    handleRejectPopup,
    handleClosePopup,
    handleBack,
  };
}
