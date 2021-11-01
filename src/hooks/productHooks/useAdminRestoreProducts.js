import { useCallback, useContext, useState, useEffect } from "react";
import { useHistory,} from "react-router-dom";

import { getAllProducts, searchProducts, updateProducts } from "../../WEBAPI";
import { AuthLoadingContext } from '../../context'
import useDebounce from "../carts/useDebounce";

const useAdminRestoreProduct = () => {
  const thcontexts = [
    " ",
    "商品名稱",
    "商品介紹",
    "商品圖",
    "價格",
    "重上架",
    "編輯",
  ]
  const history = useHistory();
  const debounce = useDebounce();
  const [search, setSearch] = useState('')
  const [tdcontexts, setTdcontexts] = useState([])
  const {setLoading} = useContext(AuthLoadingContext)

  const [num, setNum] = useState(0)
  const [pagenum, setPageNum] =  useState(1)

  const fetchDeletedProduct = useCallback(() => {
    const fetchingDeletedProduct = async () => {
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
        let getDeletedProducts = result.products.filter(product => product.is_deleted)
        if(getDeletedProducts.length === 0) setTdcontexts([])
        setTdcontexts(getDeletedProducts)
        setLoading(false)
      } catch(err) {
        return history.goBack()
      }
    }
      fetchingDeletedProduct()

  },[setLoading, history])

  useEffect(() => {
    fetchDeletedProduct()
  }, [fetchDeletedProduct])

  const handleRestoreBtnClick = async(selectedProduct) => {
    let {name, desc, img_url, price, category, id, is_deleted} = selectedProduct

    is_deleted = false

    const result = await updateProducts(name, desc, img_url, price, category, id, is_deleted)
    setLoading(true)
    
    try {
      if(!result.message){
        setLoading(false)
        return  history.goBack()
      }
      fetchDeletedProduct()
    }catch(err) {
      setLoading(false)
      return  history.goBack()
    }
  }

  const fetchingSearchDeletedProduct = async (search) => {
    setLoading(true)
    if(!search) return fetchDeletedProduct()
    const result = await searchProducts(search)
    try{
      if(!result.success){
        setTdcontexts([])
        setSearch('')
        return setLoading(false)
      }
      let getSearchedProducts = result.data.filter(product=> product.is_deleted)
      if(result.success && getSearchedProducts.length === 0){
        setTdcontexts([])
        setSearch('')
        return setLoading(false)
      }

      setTdcontexts(getSearchedProducts)
      setSearch('')

      return setLoading(false)

    }catch(err) {
      return setLoading(false)
    }
  }
  const handleChange = (e) => {
    setSearch(e.target.value)
    debounce(() => fetchingSearchDeletedProduct(e.target.value),1000)
  }

  return {
    thcontexts,
    tdcontexts,
    handleRestoreBtnClick,
    fetchingSearchDeletedProduct,
    search,
    setSearch,
    handleChange,
    fetchDeletedProduct,
    num,
    setNum,
    pagenum,
    setPageNum
  }
}

export default useAdminRestoreProduct