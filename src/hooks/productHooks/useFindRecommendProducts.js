import { useState, useEffect } from "react";
import { FindDataAPI } from "../../API/fetchAPI";

export default function useFindRecommendProducts(sliceLimit) {
  const [products, setProducts] = useState([]);
  const random = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  useEffect(() => {
    FindDataAPI({}, "/findAllProducts").then((response) => {
      const newProducts = response.products.filter((product) => {
        return product.is_deleted === false;
      });
      setProducts(random(newProducts).slice(0, sliceLimit));
    });
  }, []);
  return products;
}
