import { useState, useContext, useEffect } from "react";
import { AuthLoadingContext } from "../../context";
import { PostDataAPI } from "../../API/fetchAPI";
import { getAuthToken } from "../../utils";
import { useParams } from "react-router-dom";
import { FindDataAPI } from "../../API/fetchAPI";

export default function useEditDiscount() {
  const { id } = useParams();
  const [threshold, setThreshold] = useState("");
  const [shipment, setShipment] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const { setLoading } = useContext(AuthLoadingContext);

  const api = id ? "/updateDiscounts" : "/createDiscounts";

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
  useEffect(() => {
    if (id) {
      setLoading(true);
      FindDataAPI({ authorization: getAuthToken() }, `/findDiscounts/${id}`)
        .then((data) => {
          const { Discount } = data;
          if (Discount) {
            setThreshold(Discount.threshold);
            setShipment(Discount.shipment);
            setPrice(Discount.price);
            setDesc(Discount.desc);
          }
          return setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          return setLoading(false);
        });
    }
  }, [id, setLoading]);
  return {
    threshold,
    shipment,
    price,
    desc,

    setThreshold,
    setShipment,
    setPrice,
    setDesc,
    handleChange,
    handleSubmit,
  };
}
