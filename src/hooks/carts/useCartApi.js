import { useEffect, useState, useContext } from "react";
import {
  getAllCartItems,
  findAllDiscount,
  updateCartItem,
  deleteCartItem,
} from "../../WEBAPI";
import { AuthLoadingContext } from "../../context";
const useCartApi = () => {
  const [data, setData] = useState([]);
  const { setLoading } = useContext(AuthLoadingContext);
  const [discountRules, setDiscountRules] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const [AllCartItems, DiscountRules] = await Promise.all([
        fetchAllCartItems(),
        fetchDiscountsRules(),
      ]);
      setLoading(false);
      setDiscountRules(DiscountRules);
      setData(AllCartItems);
    };
    fetchData();
  }, [setLoading, setData]);
  const fetchAllCartItems = async () => {
    const response = await getAllCartItems();
    if (!response.success) {
      return alert("系統載入異常，非常抱歉");
    }
    return response.message;
  };
  const fetchDiscountsRules = async () => {
    const response = await findAllDiscount();
    if (!response.success) {
      return alert("系統運費處理異常，非常抱歉");
    }
    return response.Discounts;
  };
  const handleButtonDelete = async (item) => {
    await deleteCartItem(item.ProductId).then((response) => {
      if (!response.success) {
        return alert("刪除品項處理異常，系統修復中");
      }
      return alert(`刪除成功`);
    });
    await getAllCartItems().then((response) => {
      if (!response.success) {
        setLoading(false);
        return alert("系統異常，非常抱歉");
      }
      setLoading(false);
      setData(response.message);
    });
  };
  const handleDecreaseProduct = async (item) => {
    let quantity = item.product_quantity - 1;
    await updateCartItem(item.ProductId, quantity).then((response) => {
      if (!response.success) {
        return alert("更新商品數量處理異常，系統修復中");
      }
      return alert(`更新 ${item["Product.name"]} 購買數量 ${quantity}`);
    });
    await getAllCartItems().then((response) => {
      if (!response.success) {
        setLoading(false);
        return alert("系統異常，非常抱歉");
      }
      setLoading(false);
      setData(response.message);
    });
  };
  const handleIncreaseProduct = async (item) => {
    let quantity = item.product_quantity + 1;
    await updateCartItem(item.ProductId, quantity).then((response) => {
      if (!response.success) {
        return alert("更新商品數量處理異常，系統修復中");
      }
      return;
      // return alert(`更新 ${item["Product.name"]} 購買數量 ${quantity}`);
    });
    await getAllCartItems().then((response) => {
      if (!response.success) {
        setLoading(false);
        return alert("系統異常，非常抱歉");
      }
      setLoading(false);
      setData(response.message);
    });
  };
  return {
    data,
    setData,
    discountRules,
    setDiscountRules,
    handleIncreaseProduct,
    handleDecreaseProduct,
    handleButtonDelete,
  };
};
export default useCartApi;
