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
        const getProducts = result.map(item=> {
          return {
            quantity :item.quantity,
            id:item.Product.id,
            name: item.Product.name,
            price: item.Product.price,
            img_url: item.Product.img_url
          }
        })
        setOrderProducts(getProducts)
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

  const handleBack = () => {
    history.push("/user/myorders");
  };
  return {
    id,
    orderDetail,
    orderProducts,
    handleBack
  }
}

export default useSingleTransaction

