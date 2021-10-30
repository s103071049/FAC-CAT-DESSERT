import { useState, useCallback, useEffect, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";

import { AuthLoadingContext } from '../../context'
import { getOneOrder } from "../../WEBAPI";

const useSingleTransaction = () => {
  const history = useHistory();
  const { id } = useParams();
  const { setLoading } = useContext(AuthLoadingContext)
  const [ orderDetail, setOrderDetail ] = useState({})

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
        console.log(result)

      }catch(err){
        setLoading(false)
        return history.goBack()
      }
    }
    fetchingOrderDetail()
  }, [id, history, setLoading])

  useEffect(()=>{
    fetchOrderDetail()
  },[fetchOrderDetail])

  return {
    id,
    orderDetail
  }
}

export default useSingleTransaction

