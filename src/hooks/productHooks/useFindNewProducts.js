import { useState, useEffect, useContext } from "react";
import { getAllProducts } from "../../API/WEBAPI";
import { AuthLoadingContext } from "../../context";

export default function useFindNewProducts() {
  const { setLoading } = useContext(AuthLoadingContext);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setLoading(true);
    getAllProducts().then((response) => {
      setProducts(
        response.products
          .filter((product) => !product.is_deleted)
          .reverse()
          .slice(0, 12)
      );
      setLoading(false);
    });
  }, [setLoading]);
  return {
    products,
  };
}
