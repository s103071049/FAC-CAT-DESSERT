import { createOrder, deleteAllCartItems } from "../../API/WEBAPI";
import { useHistory } from "react-router-dom";

const ShippingApi = () => {
  let history = useHistory();
  const orderDone = async (products, order) => {
    try {
      const response = await createOrder(products, order);
      if (response.message === "please provide order info") {
        return;
      }
      if (response.message === "please provide products and order") {
        alert("請增加商品及建立訂單");
        return;
      }
      await deleteAllCartItems();
      alert("訂單建立完成");
      history.push("/");
    } catch (e) {
      alert(
        "系統處理異常，非常抱歉。請致電 07-626-5566，肥貓甜點將盡快為您服務!"
      );
      return;
    }
  };
  return {
    orderDone,
  };
};
export default ShippingApi;
