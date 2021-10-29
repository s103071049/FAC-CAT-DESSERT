import { addCartItem } from "../../WEBAPI";
import { AuthContexts, AuthLoadingContext } from "../../context";
import { useContext } from "react";

const useAddCartItems = (dessert, count) => {
  const { user } = useContext(AuthContexts);
  const { setLoading } = useContext(AuthLoadingContext);
  const handleAddProducts = (e) => {
    if (!user) {
      return alert("請登入再進行購買");
    }
    setLoading(true);
    addCartItem(dessert.id, count).then((response) => {
      if (!response.success) {
        setLoading(false);
        return alert("系統異常中，正迅速修復!");
      }
    });
    setLoading(false);
    alert(`添加 ${count} 個 ${dessert.name} 到購物車!`);
    console.log(`添加 ${count} 個 ${dessert.name} 到購物車!`);
  };
  return {
    handleAddProducts,
  };
};
export default useAddCartItems;
