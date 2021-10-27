import {
  useHistory,
} from "react-router-dom";
import { useEffect, useState, useContext, useRef, useCallback } from "react";
import { getAllProducts, deleteProduct, searchProducts } from "../../WEBAPI";
import { AuthLoadingContext } from '../../context'

const useAdminProduct = () => {
  const thcontexts = [
    "id",
    "商品名",
    "商品介紹",
    "商品圖",
    "價格",
    "刪除",
    "編輯",
  ];
  const history = useHistory();
  const dataAmount = useRef(null)
  const [search, setSearch] = useState("");
  const [tdcontexts, setTdcontexts] = useState([])
  const {setLoading} = useContext(AuthLoadingContext)

  
  const fetchProducts = useCallback(()=> {
      const fetchingProduct = async() => {
      setLoading(true)
      const result = await getAllProducts()
      try {
        if(!result.success) {
          setTdcontexts([])
          return  history.goBack()
        }
        let getProducts = result.products.filter(product => !product.is_deleted)
        setTdcontexts(getProducts)
        setLoading(false)

      } catch (err) {
        return  history.goBack()
      }
    }
    fetchingProduct()
  },[setLoading,history])

  useEffect(() => {
    fetchProducts()
  },[fetchProducts])


  const handleDeleteBtnClick = async(id) => {
    const result = await deleteProduct(id)
    setLoading(true)
    
    try {
      if(!result.message){
        return console.log(result)
      }
      fetchProducts()
    }catch(err) {
      console.log(err)
    }
  }


  const fetchSearchProduct = async (search) => {
    setLoading(true)
    const result = await searchProducts(search)
    try {
      console.log(result)
      if(!result.success){
        setTdcontexts([])
        return setLoading(false)
      }
      let getSearchedProducts = result.data.filter(product => !product.is_deleted)

      if (getSearchedProducts.success && getSearchedProducts.length === 0) {
        setTdcontexts([])
        return setLoading(false)
      }
      
      dataAmount.current = getSearchedProducts.length

      setTdcontexts(getSearchedProducts)
      setLoading(false)

    } catch(err) {
      return setLoading(false)
    }
  }
   const handleChange = (setValue) => (e) => setValue(e.target.value);



  return {
    thcontexts, 
    tdcontexts,
    dataAmount,
    handleDeleteBtnClick,
    fetchProducts,
    search,
    setSearch,
    handleChange,
    fetchSearchProduct
  }

}

export default useAdminProduct