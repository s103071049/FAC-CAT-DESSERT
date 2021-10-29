import { useState, useEffect, useRef, useContext } from "react";
import { getAllProducts } from "../../WEBAPI";
import { useHistory } from "react-router-dom";
import { AuthLoadingContext } from '../../context'

const useFindProducts = (selectedCategory) => {
  const {loading, setLoading} = useContext(AuthLoadingContext)
  const [products, setProducts] = useState([])
  const [section, setSection] = useState("sqares");
  const dataAmount = useRef(null)
  const history = useHistory();
  
  //分頁
  const [pagenum, setPageNum] =  useState(1)
  const [num, setNum] = useState(0)

  
  useEffect(()=> {
    setLoading(true)
    setPageNum(1)
    setNum(0)
    const fetchAllproducts = async() => {
      setLoading(true)
      const result = await getAllProducts()
      try {
        if(!result.success){
          return history.goBack()
        }
        let getSelectedProducts = result.products.filter(product=> !product.is_deleted)
        
        if(selectedCategory !== '全部品項') {
          getSelectedProducts = getSelectedProducts.filter(product => product.category === selectedCategory)
        }

        dataAmount.current = getSelectedProducts.length

        setProducts(getSelectedProducts)
        setLoading(false)


      } catch(err) {
        return history.goBack()
      }
    }

    fetchAllproducts()

  }, [history,selectedCategory, setLoading])
  

 
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
    dataAmount,
    loading,
    setLoading,
    pagenum,
    setPageNum,
    num,
    setNum
  }
}

export default useFindProducts