import { useState, useEffect } from "react";
import { getAllProducts } from "../../WEBAPI";
import { useHistory } from "react-router-dom";

const useFindProducts = () => {
  const [products, setProducts] = useState([])
  const [section, setSection] = useState("sqares");

  const history = useHistory();

  useEffect(()=> {
    const fetchAllproducts = async() => {
      const result = await getAllProducts()

      try {
        if(!result.success){
          return history.goBack()
        }
        setProducts(result.products)
      } catch(err) {
        return history.goBack()
      }
    }
    fetchAllproducts()
  }, [history])

  const handletoggleSquares = () => {
    setSection("sqares");
  };

  const handletoggleLists = () => {
    setSection("lists");
  };

  return {
    products,
    setProducts,
    history,
    handletoggleLists,
    handletoggleSquares,
    section,
    setSection
  }
}

export default useFindProducts