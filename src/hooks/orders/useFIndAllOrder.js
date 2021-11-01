import {
  useState,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
} from "react";
import { useHistory } from "react-router";
import { AuthContexts } from "../../context";
import { getAllOrder } from "../../WEBAPI";
import { AuthLoadingContext } from "../../context";

const useFindAllOrder = () => {
  const { user } = useContext(AuthContexts);
  const { setLoading } = useContext(AuthLoadingContext);
  const [fackOrders, setFackOrders] = useState([]);
  const [currentOrders, setCurrentOrders] = useState([]);
  const dataAmount = useRef(null);
  //pending(未處理),solved(以處理),all
  const [selectOrderStatus, setSelectOrderStatus] = useState("pending");
  const history = useHistory();
  const handleOrderFilterClick = (selectedStatus) => {
    setSelectOrderStatus(selectedStatus);
  };
  //初始分頁
  const [num, setNum] = useState(0);
  const [pagenum, setPageNum] = useState(1);
  useLayoutEffect(() => {
    setLoading(true);
    if (user.authority !== 1) {
      history.push("/");
      return setLoading(false);
    }
    getAllOrder().then((response) => {
      setFackOrders(response.data.sort((a,b) => Date.parse(b.createdAt) - Date.parse(a.createdAt)));
      setLoading(false);
    });
  }, [history, user.authority, setLoading]);
  useEffect(() => {
    setNum(0);
    setPageNum(1);
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
    dataAmount.current = fackOrders.length;
    const interval = setInterval(() => {
      window.location.reload();
    }, 600000);

    return () => clearInterval(interval);
  }, [fackOrders, selectOrderStatus]);
  return {
    currentOrders,
    selectOrderStatus,
    handleOrderFilterClick,
    num,
    setNum,
    pagenum,
    setPageNum,
  };
};

export default useFindAllOrder;
