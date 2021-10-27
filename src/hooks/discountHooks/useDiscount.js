import { useState, useContext, useRef } from "react";
import { AuthLoadingContext } from "../../context";
import { FindDataAPI, searchAPI } from "../../API/fetchAPI";
import { getAuthToken } from "../../utils";
import usePagination from "../paginationHooks/usePagination";

export default function useDiscount(isRestore) {
  const [discounts, setDiscounts] = useState([]);
  const [search, setSearch] = useState("");
  const { loading, setLoading } = useContext(AuthLoadingContext);
  const [showDataIndex, setShowDataIndex] = useState(0);
  const { eachPageAmount } = usePagination();
  const dataAmount = useRef(null);

  const fetchDiscounts = () => {
    setLoading(true);
    console.log("fetchDiscounts");
    FindDataAPI({ authorization: getAuthToken() }, "/findAllDiscounts")
      .then((data) => {
        const { Discounts } = data;
        const newDiscounts = [];
        Discounts.forEach((discount) => {
          if (discount.is_deleted === isRestore.isRestore) {
            newDiscounts.push(discount);
          }
        });
        dataAmount.current = newDiscounts.length;
        const showDataArr = newDiscounts.slice(
          showDataIndex,
          showDataIndex + eachPageAmount
        );
        setDiscounts(showDataArr);
        return setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        return setLoading(false);
      });
  };

  const searchDiscounts = (search) => {
    setLoading(true);
    searchAPI(
      { authorization: getAuthToken(), key: search },
      "/searchDiscounts"
    )
      .then((response) => {
        const { data } = response;
        if (data.success && data.length === 0) {
          setDiscounts([]);
          return setLoading(false);
        }
        const newDiscounts = [];
        data.forEach((discount) => {
          if (discount.is_deleted === isRestore.isRestore) {
            newDiscounts.push(discount);
          }
        });
        setDiscounts(newDiscounts);
        return setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        return setLoading(false);
      });
  };

  const handleChange = (setValue) => (e) => setValue(e.target.value);

  return {
    discounts,
    search,
    showDataIndex,
    dataAmount,

    setDiscounts,
    setSearch,
    fetchDiscounts,
    searchDiscounts,
    handleChange,
    setShowDataIndex,
  };
}
