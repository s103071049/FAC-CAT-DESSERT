import { useState } from "react";
const useAddOneProduct = () => {
  const handleAddProducts = (e) => {
    if (!user) {
      return alert("請登入再進行購買");
    }
    setLoading(true);
    addCartItem(dessert.id, count).then((response) => {
      console.log(response);
      if (!response.success) {
        setLoading(false);
        return alert("系統異常中，正迅速修復!");
      }
      setLoading(false);
      alert(`添加 ${count} 個 ${dessert.name} 到購物車!`);
    });
  };
  return {};
};
export default useAddOneProduct;
