import { addCartItem } from "../../WEBAPI";
import { AuthContexts } from "../../context";
import { useContext } from "react";

const useAddCartItems = (dessert, count) => {
  const { user } = useContext(AuthContexts);
  const handleAddProducts = async (e) => {
    if (!user) {
      return alert("請登入再進行購買");
    }
    const response = await addCartItem(dessert.id, count);
    if (!response.success) {
      return alert("系統異常中，正迅速修復!");
    }
    alert(`添加 ${count} 個 ${dessert.name} 到購物車!`);
  };

  return {
    handleAddProducts,
  };
};
export default useAddCartItems;
