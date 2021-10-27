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

  return {
    thcontexts,
    tdcontexts,
    handleRestoreBtnClick
  }
}

export default useAdminRestoreProduct