import { useEffect, useState, useContext, useCallback } from "react";
import { useHistory,} from "react-router-dom";

import { getAllProducts,searchProducts, deleteProduct } from "../../WEBAPI";
import { AuthLoadingContext } from '../../context'
import useDebounce from "../carts/useDebounce";

const useAdminProduct = () => {
  const thcontexts = [
    " ",
    "商品名",
    "商品介紹",
    "商品圖",
    "類別",
    "價格",
    "刪除",
    "編輯",
  ];
  const history = useHistory();

  const debounce = useDebounce();
  const [search, setSearch] = useState('')
  const [tdcontexts, setTdcontexts] = useState([])
  const {setLoading} = useContext(AuthLoadingContext)

  const [num, setNum] = useState(0)
  const [pagenum, setPageNum] =  useState(1)

  const fetchProducts = useCallback(()=> {
      const fetchingProduct = async() => {
      setLoading(true)
      setNum(0)
      setPageNum(1)
      const result = await getAllProducts()
      try {
        if(!result.success) {
          setTdcontexts([])
          setLoading(false)
          return  history.goBack()
        }
        let getProducts = result.products.filter(product => !product.is_deleted)
        if(getProducts.length === 0) setTdcontexts([])
        setTdcontexts(getProducts)
      

        
        setLoading(false)

      } catch (err) {
        return history.goBack()
      }
    }
    fetchingProduct()
  },[setLoading, history])

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
  const fetchingSearchProduct = async (search) => {
    setLoading(true)
    if(!search) return fetchProducts()
    const result = await searchProducts(search)
    try{
      if(!result.success){
        setSearch('')
        setLoading(false)
        return history.goBack()
      }
      let getSearchedProducts = result.data.filter(product=> !product.is_deleted)
      if(result.success && getSearchedProducts.length === 0){
        setTdcontexts([])
        setSearch('')
        return setLoading(false)
      }

      setTdcontexts(getSearchedProducts)
      setSearch('')

      return setLoading(false)

    }catch(err) {
      setLoading(false)
      return history.goBack()
    }
  }
  const handleChange = (e) => {
    setSearch(e.target.value)
    debounce(() => fetchingSearchProduct(e.target.value),1000)
  }

  return {
    thcontexts, 
    tdcontexts,
    handleDeleteBtnClick,
    fetchProducts,
    search,
    handleChange,
    fetchingSearchProduct,
    num,
    setNum,
    pagenum,
    setPageNum
  }

}

export default useAdminProduct