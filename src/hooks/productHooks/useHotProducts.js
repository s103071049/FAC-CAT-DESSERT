import { useState, useEffect } from "react";
import { FindDataAPI } from "../../API/fetchAPI";

export default function useFindHotProducts(sliceLimit) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    FindDataAPI({}, "/getHotSell").then((response) => {
      const sliceEND = Math.min(response.length, sliceLimit);
      const Products = [];
      if (response.length === 0) {
        return setProducts(Products);
      }
      for (let i = 0; i < sliceEND; i++) {
        if (response[i].Product.is_deleted !== true) {
          Products.push(response[i].Product);
        }
      }
      setProducts(Products);
    });
  }, []);
  return products;
}
