import { useState, useContext } from "react";
import { AuthLoadingContext } from "../../context";
import { PostDataAPI } from "../../API/fetchAPI";
import { getAuthToken } from "../../utils";

export default function useEditDiscount(id) {
  const [threshold, setThreshold] = useState("");
  const [shipment, setShipment] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const { loading, setLoading } = useContext(AuthLoadingContext);

  const api = id ? "/updateDiscounts" : "/createDiscounts";
  const changeDiscount = (discount) => {
    if (discount) {
      setThreshold(discount.threshold);
      setShipment(discount.shipment);
      setPrice(discount.price);
      setDesc(discount.desc);
    }
  };

  const handleChange = (setValue) => (e) => setValue(e.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const data = id
      ? {
          id,
          threshold,
          shipment,
          price,
          desc,
        }
      : {
          threshold,
          shipment,
          price,
          desc,
        };

    const res = await PostDataAPI(
      {
        data,
        authorization: getAuthToken(),
      },
      api
    );
    if (res.success) {
      alert("成功");
      window.history.back(-1);
      return setLoading(false);
    } else {
      alert(res.message);
      return setLoading(false);
    }
  };

  return {
    threshold,
    shipment,
    price,
    desc,

    setThreshold,
    setShipment,
    setPrice,
    setDesc,

    changeDiscount,
    handleChange,
    handleSubmit,
  };
}
