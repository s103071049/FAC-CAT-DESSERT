import { useEffect, useState, useContext, useRef } from "react";
import { getAllProducts, deleteProduct } from "../../WEBAPI";
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
  const dataAmount = useRef(null)

  const {eachPageAmount} = usePagination()
  const [showDataIndex, setShowDataIndex] = useState(0)

  const [tdcontexts, setTdcontexts] = useState([])
  const {setLoading} = useContext(AuthLoadingContext)

  useEffect(() => {
    const fetchProducts = async() => {
      setLoading(true)
      const result = await getAllProducts()
      try {
        if(!result.success) {
         return  console.log(result)
        }
        let getProducts = result.products
        dataAmount.current = getProducts.length
        const showDataArr = getProducts.slice(showDataIndex, showDataIndex+ eachPageAmount).filter(product => !product.is_deleted)

        setTdcontexts(showDataArr)
        setLoading(false)

      } catch (err) {
        console.log(err)
      }
    }
    fetchProducts()
  },[setLoading, eachPageAmount, showDataIndex])

  const handleDeleteBtnClick = async(id) => {
    const result = await deleteProduct(id)
    setLoading(true)
    
    try {
      if(!result.message){
        return console.log(result)
      }
      const fetchNewProducts = await getAllProducts()
      let getProducts = fetchNewProducts.products
      dataAmount.current = getProducts.length

      const showDataArr = getProducts.slice(showDataIndex, showDataIndex+ eachPageAmount).filter(product => !product.is_deleted)

      setTdcontexts(showDataArr)
      setLoading(false)

    }catch(err) {
      console.log(err)
    }
  }

  return {
    thcontexts, 
    tdcontexts,
    dataAmount,
    showDataIndex, 
    setShowDataIndex,
    handleDeleteBtnClick
  }

}

export default useAdminProduct