import { useState, useEffect } from "react";
import { FindDataAPI } from "../../API/fetchAPI";

export default function useFindHotProducts(sliceLimit) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    FindDataAPI({}, "/getHotSell").then((response) => {
      const sliceEND = Math.min(response.length, sliceLimit);
      setProducts(response.slice(0, sliceEND));
    });
  }, []);
  return products;
}
