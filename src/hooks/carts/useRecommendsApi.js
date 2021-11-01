import { useState, useEffect, useContext } from "react";
import { getAllProducts } from "../../WEBAPI";
import { AuthLoadingContext } from "../../context";
import { useParams } from "react-router-dom";
function randomArr(allProducts, totalRecommends) {
  let arr = [];
  for (let i = 0; i < allProducts; i++) {
    arr.push(i);
  }
  arr.sort(() => {
    return Math.random() - 0.5;
  });
  arr.length = totalRecommends;
  return arr;
}
const useRecommendsApi = (totalRecommends) => {
  const { setLoading } = useContext(AuthLoadingContext);
  const [recommends, setRecommend] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    let randomResult = [];
    getAllProducts()
      .then((response) => {
        if (!response.success) {
          setLoading(false);
          return alert("QQ 推薦商品處理異常，非常抱歉!");
        }
        setLoading(false);
        let data = response.products.filter((each) => each.id !== id).filter(each => !each.is_deleted);
        return data;
      })
      .then((data) => {
        let randArr = randomArr(data.length, totalRecommends);
        for (let i = 0; i < randArr.length; i++) {
          let key = randArr[i];
          randomResult.push(data[key]);
        }
        setRecommend(randomResult);
      });
  }, [id, setLoading, totalRecommends]);
  return {
    recommends,
  };
};
export default useRecommendsApi;
