import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { searchProducts } from "../../WEBAPI";
import { AuthLoadingContext } from "../../context";

export default function useSearchProducts() {
  const [num, setNum] = useState(0);
  const [pagenum, setPageNum] = useState(1);
  const { context } = useParams();
  const [productOptions, setProductOptions] = useState("");
  const { setLoading } = useContext(AuthLoadingContext);
  useEffect(() => {
    setLoading(true);
    setNum(0);
    setPageNum(1);
    searchProducts(context).then((response) => {
      setProductOptions(response.data.filter((product) => !product.is_deleted));
    });
    setLoading(false);
  }, [context, setLoading]);
  return {
    context,
    productOptions,
    setProductOptions,
    num,
    setNum,
    pagenum,
    setPageNum,
  };
}
