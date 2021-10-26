import { useEffect, useState, useContext } from "react";
import { getAllProducts } from "../../WEBAPI";
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

  const [tdcontexts, setTdcontexts] = useState([])
  const {loading, setLoading} = useContext(AuthLoadingContext)

  useEffect(() => {
    const fetchProducts = async() => {
      setLoading(true)

      const result = await getAllProducts()
      try {
        if(!result.success) {
          console.log(result)
        }
        console.log(result.products)
        setTdcontexts(result.products)
        setLoading(false)

      } catch (err) {
        console.log(err)
      }
    }
    fetchProducts()
  },[setLoading])

  //const tdcontexts = [
  //  {
  //    id: 1,
  //    name: "柚香鐵觀音",
  //    photo: cake2,
  //    price: "NT$220",
  //    limit: "null",
  //  },
  //  {
  //    id: 2,
  //    name: "珠寶盒藍梅塔",
  //    photo: cake3,
  //    price: "NT$105",
  //    limit: "80",
  //  },
  //];

  return {thcontexts, tdcontexts}

}

export default useAdminProduct