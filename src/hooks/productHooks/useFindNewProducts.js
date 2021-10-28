import { useState, useEffect } from "react";
import { getAllProducts } from "../../WEBAPI";

export default function useFindNewProducts() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getAllProducts().then((response) => {
      setProducts(response.products.reverse().slice(0, 12));
    });
  }, []);
  return {
    products,
  };
}
