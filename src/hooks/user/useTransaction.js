import { useState, useEffect, useCallback, useContext } from "react";
import { useHistory } from "react-router-dom";

import { getHistory } from "../../WEBAPI";
import { AuthLoadingContext } from "../../context";

const useTransaction = () => {
  const transactionTableHeads = [
    { id: 1, title: "訂單編號" },
    { id: 2, title: "總金額" },
    { id: 3, title: "收件者" },
    { id: 4, title: "交易日期" },
    { id: 5, title: "收貨日期" },
    { id: 6, title: "處理情形" },
  ];
  const { setLoading } = useContext(AuthLoadingContext);

  const [transactions, setTransactions] = useState([]);
  const history = useHistory();
  //初始分頁
  const [num, setNum] = useState(0);
  const [pagenum, setPageNum] = useState(1);

  const fetchTransactions = useCallback(() => {
    const fetchingTransactions = async () => {
      setLoading(true);
      setNum(0);
      setPageNum(1);
      const result = await getHistory();
      try {
        if (!result.success) {
          setLoading(false);
          return history.goBack();
        }
        const getTransactions = result.data.sort(
          (a, b) => Date.parse(b.updatedAt) - Date.parse(a.updatedAt)
        );
        setTransactions(getTransactions);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        return history.goBack();
      }
    };
    fetchingTransactions();
  }, [history, setLoading]);

  useEffect(() => {
    fetchTransactions();
  }, [fetchTransactions]);

  return {
    transactionTableHeads,
    transactions,
    num,
    setNum,
    pagenum,
    setPageNum,
  };
};

export default useTransaction;
