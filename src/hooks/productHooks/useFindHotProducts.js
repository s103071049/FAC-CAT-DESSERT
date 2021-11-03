import { useState, useEffect, useContext } from "react";
import { getAllProducts } from "../../API/WEBAPI";
import { AuthLoadingContext } from "../../context";

export default function useFindHotProducts() {
  const { setLoading } = useContext(AuthLoadingContext);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setLoading(true);
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
      setLoading(false);
    });
  }, [setLoading]);
  return {
    products,
  };
}
