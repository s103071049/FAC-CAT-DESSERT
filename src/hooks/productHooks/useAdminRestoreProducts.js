import { useCallback, useContext, useState } from "react";
import { useHistory,} from "react-router-dom";

import { getAllProducts, searchProducts, updateProducts } from "../../WEBAPI";
import { AuthLoadingContext } from '../../context'
import { useEffect } from "react/cjs/react.development";

const useAdminRestoreProduct = () => {
  const thcontexts = [
    "id",
    "商品名",
    "商品介紹",
    "商品圖",
    "價格",
    "重上架",
    "編輯",
  ]
  const history = useHistory();
  const [search, setSearch] = useState('')
  const [tdcontexts, setTdcontexts] = useState([])
  const {setLoading} = useContext(AuthLoadingContext)

  const fetchDeletedProduct = useCallback(() => {
    const fetchingDeletedProduct = async () => {
      setLoading(true)
      const result = await getAllProducts()
      try {
        if(!result.success) {
          setTdcontexts([])
          setLoading(false)
          return console.log(result.success)
          //return  history.goBack()
        }
        let getDeletedProducts = result.products.filter(product => product.is_deleted)
        if(getDeletedProducts.length === 0) setTdcontexts([])
        setTdcontexts(getDeletedProducts)
        setLoading(false)
      } catch(err) {
        console.log(err)
        //return history.goBack()
      }
    }
      fetchingDeletedProduct()

  },[setLoading])

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

        return console.log(result)
      }
      fetchDeletedProduct()
    }catch(err) {
      setLoading(false)
      console.log(err)
    }
  }

  const fetchingSearchDeletedProduct = async (search) => {
    setLoading(true)
    const result = await searchProducts(search)
    try{
      if(!result.success){
        setTdcontexts([])
        return setLoading(false)
      }
      let getSearchedProducts = result.data.filter(product=> product.is_deleted)
      if(result.success && getSearchedProducts.length === 0){
        setTdcontexts([])
        return setLoading(false)
      }

      setTdcontexts(getSearchedProducts)
      return setLoading(false)

    }catch(err) {
      return setLoading(false)
    }
  }

  return {
    thcontexts,
    tdcontexts,
    handleRestoreBtnClick,
    fetchingSearchDeletedProduct,
    search,
    setSearch,
    fetchDeletedProduct
  }
}

export default useAdminRestoreProduct