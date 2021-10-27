import { useState } from "react";

export default function useDiscount(discount) {
  const [threshold, setThreshold] = useState("");
  const [shipment, setShipment] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");

  const changeDiscount = (discount) => {
    if (discount) {
      setThreshold(discount.threshold);
      setShipment(discount.shipment);
      setPrice(discount.price);
      setDesc(discount.desc);
    }
  };

  const handleChange = (setValue) => (e) => setValue(e.target.value);

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
  };
}
