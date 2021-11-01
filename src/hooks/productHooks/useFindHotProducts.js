import { useState, useEffect } from "react";
import { getAllProducts } from "../../WEBAPI";

export default function useFindHotProducts() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getAllProducts().then((response) => {
      const random = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      };
      setProducts(
        random(
          response.products.filter((product) => !product.is_deleted)
        ).slice(0, 12)
      );
    });
  }, []);
  return {
    products,
  };
}
