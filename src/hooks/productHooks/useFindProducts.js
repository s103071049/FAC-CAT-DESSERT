import { useState, useEffect, useRef, useContext } from "react";
import { getAllProducts } from "../../API/WEBAPI";
import { useHistory } from "react-router-dom";
import { AuthLoadingContext } from "../../context";

const useFindProducts = (selectedCategory) => {
  const { loading, setLoading } = useContext(AuthLoadingContext);
  const [products, setProducts] = useState([]);
  const [section, setSection] = useState("sqares");
  const [showDataIndex, setShowDataIndex] = useState(0);

  const dataAmount = useRef(null);
  const history = useHistory();

  //初始分頁
  const [num, setNum] = useState(0);
  const [pagenum, setPageNum] = useState(1);

  useEffect(() => {
    setLoading(true);
    setNum(0);
    setPageNum(1);
    const fetchAllproducts = async () => {
      setLoading(true);
      const result = await getAllProducts();
      try {
        if (!result.success) {
          return history.goBack();
        }
        let getSelectedProducts = result.products.filter(
          (product) => !product.is_deleted
        );

        if (selectedCategory !== "全部品項") {
          getSelectedProducts = getSelectedProducts.filter(
            (product) => product.category === selectedCategory
          );
        }

        dataAmount.current = getSelectedProducts.length;

        setProducts(getSelectedProducts);
        setLoading(false);
      } catch (err) {
        return history.goBack();
      }
    };

    fetchAllproducts();
  }, [history, showDataIndex, selectedCategory, setLoading]);

  const handletoggleSquares = () => {
    setSection("sqares");
  };

  const handletoggleLists = () => {
    setSection("lists");
  };

  return {
    products,
    setProducts,
    history,
    handletoggleLists,
    handletoggleSquares,
    section,
    setSection,
    showDataIndex,
    setShowDataIndex,
    dataAmount,
    loading,
    setLoading,
    num,
    setNum,
    pagenum,
    setPageNum,
  };
};

export default useFindProducts;
