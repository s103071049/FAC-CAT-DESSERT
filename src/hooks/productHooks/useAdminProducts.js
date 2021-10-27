import {
  useHistory,
} from "react-router-dom";
import { useEffect, useState, useContext, useRef, useCallback } from "react";
import { getAllProducts, deleteProduct, searchProducts } from "../../WEBAPI";
import { AuthLoadingContext } from '../../context'
import usePagination from "../paginationHooks/usePagination";

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
  const {eachPageAmount} = usePagination()
  const [showDataIndex, setShowDataIndex] = useState(0)
  const [tdcontexts, setTdcontexts] = useState([])
  const {setLoading} = useContext(AuthLoadingContext)
  const {currentPageNum,setCurrentPageNum} = usePagination()

  
  const fetchProducts = useCallback(()=> {
      const fetchingProduct = async() => {
      setLoading(true)
      const result = await getAllProducts()
      try {
        if(!result.success) {
          setTdcontexts([])
          return  console.log(result)
        }
        let getProducts = result.products.filter(product => !product.is_deleted)
        dataAmount.current = getProducts.length
        const showDataArr = getProducts.slice(showDataIndex, showDataIndex+ eachPageAmount)
        setTdcontexts(showDataArr)
        setLoading(false)

      } catch (err) {
        console.log(err)
      }
    }
    fetchingProduct()
  },[eachPageAmount, setLoading, showDataIndex])

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
    setShowDataIndex(0)
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

      const showDataArr = getSearchedProducts.slice(showDataIndex, showDataIndex+ eachPageAmount)
      console.log(showDataIndex, showDataIndex, eachPageAmount)
      setTdcontexts(showDataArr)
      setLoading(false)

    } catch(err) {
      console.log(err)
      return setLoading(false)
    }
  }
   const handleChange = (setValue) => (e) => setValue(e.target.value);



  return {
    thcontexts, 
    tdcontexts,
    dataAmount,
    showDataIndex, 
    setShowDataIndex,
    handleDeleteBtnClick,
    fetchProducts,
    search,
    setSearch,
    handleChange,
    fetchSearchProduct
  }

}

export default useAdminProduct