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
      setDiscountRules(
        DiscountRules.filter((rule) => rule.is_deleted === false).sort(
          (a, b) => {
            return a.threshold - b.threshold;
          }
        )
      );
      setData(AllCartItems.filter((item) => item.product_quantity > 0));
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
    setData(data.filter((product) => product.id !== item.id));
    await deleteCartItem(item.ProductId).then((response) => {
      if (!response.success) {
        return alert("刪除品項處理異常，系統修復中");
      }
      return;
    });
    await getAllCartItems().then((response) => {
      if (!response.success) {
        setLoading(false);
        return alert("系統異常，非常抱歉");
      }
      setLoading(false);
      return;
    });
  };
  const handleDecreaseProduct = async (item) => {
    let quantity = item.product_quantity - 1;
    if (quantity <= 0) return;
    setData(
      data
        .filter((product) => product.product_quantity > 0)
        .map((product) => {
          if (product.id !== item.id) return product;
          return {
            ...product,
            product_quantity: quantity,
          };
        })
    );
    await updateCartItem(item.ProductId, quantity).then((response) => {
      if (!response.success) {
        return alert("更新商品數量處理異常，系統修復中");
      }
      return;
    });
    await getAllCartItems().then((response) => {
      if (!response.success) {
        setLoading(false);
        return alert("系統異常，非常抱歉");
      }
      setLoading(false);
      return;
    });
  };
  const handleIncreaseProduct = async (item) => {
    let quantity = item.product_quantity + 1;
    setData(
      data.map((product) => {
        if (product.id !== item.id) return product;
        return {
          ...product,
          product_quantity: quantity,
        };
      })
    );
    await updateCartItem(item.ProductId, quantity).then((response) => {
      if (!response.success) {
        return alert("更新商品數量處理異常，系統修復中");
      }
      return;
    });
    await getAllCartItems().then((response) => {
      if (!response.success) {
        setLoading(false);
        return alert("系統異常，非常抱歉");
      }
      setLoading(false);
      return;
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
