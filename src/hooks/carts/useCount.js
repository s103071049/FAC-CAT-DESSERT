import { useState } from "react";
const useCount = () => {
  const [count, setCount] = useState(1);
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const handleDecrement = () => {
    if (count === 0) {
      return;
    }
    setCount((prevCount) => prevCount - 1);
  };
  return {
    count,
    setCount,
    handleIncrement,
    handleDecrement,
  };
};
export default useCount;
