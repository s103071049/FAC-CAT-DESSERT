import { useState, useEffect, useRef } from "react";
import { getAllProducts } from "../../WEBAPI";
import { useHistory } from "react-router-dom";
import usePagination from "../paginationHooks/usePagination";

const useFindProducts = () => {
  const {eachPageAmount} = usePagination()
  const [products, setProducts] = useState([])
  const [section, setSection] = useState("sqares");
  const [showDataIndex, setShowDataIndex] = useState(0)

  const dataAmount = useRef(null)
  const history = useHistory();

  useEffect(()=> {
    const fetchAllproducts = async() => {
      const result = await getAllProducts()

      try {
        if(!result.success){
          return history.goBack()
        }
        dataAmount.current = result.products.length
        const showDataArr = result.products.slice(showDataIndex, showDataIndex+eachPageAmount)
        setProducts(showDataArr)
      } catch(err) {
        return history.goBack()
      }
    }
    fetchAllproducts()
  }, [history, showDataIndex, eachPageAmount])
  

 
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
    setSection,
    showDataIndex,
    setShowDataIndex,
    dataAmount
  }
}

export default useFindProducts