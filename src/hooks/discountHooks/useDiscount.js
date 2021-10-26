import { useState, useContext, useEffect } from "react";
import { AuthLoadingContext } from "../../context";
import { FindDataAPI, searchAPI } from "../../API/fetchAPI";
import { getAuthToken } from "../../utils";

export default function useDiscount(isRestore) {
  const [discounts, setDiscounts] = useState([]);
  const [search, setSearch] = useState("");
  const { loading, setLoading } = useContext(AuthLoadingContext);

  const fetchDiscounts = () => {
    console.log("fetchDiscounts");
    setLoading(true);
    FindDataAPI({ authorization: getAuthToken() }, "/findAllDiscounts")
      .then((data) => {
        const { Discounts } = data;
        const newDiscounts = [];
        Discounts.forEach((discount) => {
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

  const searchDiscounts = (search) => {
    console.log("searchDiscounts");
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

    setDiscounts,
    setSearch,
    fetchDiscounts,
    searchDiscounts,
    handleChange,
  };
}
