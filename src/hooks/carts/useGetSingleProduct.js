import { useState, useEffect, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import { AuthLoadingContext } from "../../context";
import { getProduct } from "../../API/WEBAPI";
const useGetSingleProduct = () => {
  const [dessert, setDessert] = useState("");
  const { setLoading } = useContext(AuthLoadingContext);
  const { id } = useParams();
  const history = useHistory();
  useEffect(() => {
    setLoading(true);
    getProduct(id).then((response) => {
      if (!response.success) {
        setLoading(false);
        return history.goBack();
      }
      setLoading(false);
      setDessert(response.product);
    });
  }, [id, history, setLoading]);
  return {
    dessert,
  };
};
export default useGetSingleProduct;
