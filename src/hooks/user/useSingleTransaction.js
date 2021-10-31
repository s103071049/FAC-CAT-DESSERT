import { useState, useCallback, useEffect, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";

import { AuthLoadingContext } from '../../context'
import { getOneOrder, getTractions } from "../../WEBAPI";

const useSingleTransaction = () => {
  const history = useHistory();
  const { id } = useParams();
  const { setLoading } = useContext(AuthLoadingContext)
  const [ orderDetail, setOrderDetail ] = useState({})
  const [orderProducts, setOrderProducts] = useState([])

  const fetchOrderDetail = useCallback(() => {
    const fetchingOrderDetail = async() => {
      setLoading(true)

      const result = await getOneOrder(id)
      try{
        if(!result.success) {
          setLoading(false)
          return history.goBack()
        }
        setLoading(false)
        setOrderDetail(result.data)
      }catch(err){
        setLoading(false)
        return history.goBack()
      }
    }
    fetchingOrderDetail()
  }, [id, history, setLoading])

  const fetchOrderProduct = useCallback(()=> {
    const fetchingOrderProduct = async () => {
      setLoading(true)

      const result = await getTractions(id)
      try{
        setLoading(false)
        const getProducts = result.map(item=> item.Product)
        console.log(getProducts)

      }catch(err){
        setLoading(false)
        return history.goBack()
      }
    }
    fetchingOrderProduct()
  },[id, setLoading,history])

  useEffect(()=>{
    fetchOrderDetail()
    fetchOrderProduct()
  },[fetchOrderDetail, fetchOrderProduct])

  return {
    id,
    orderDetail,
    orderProducts
  }
}

export default useSingleTransaction

