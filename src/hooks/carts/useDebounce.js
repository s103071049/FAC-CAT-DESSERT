import { useState } from "react";

export default function useDebounce() {
  const [clickTimeout, setClickTimeout] = useState("");
  function debounce(func, wait) {
    clearTimeout(clickTimeout); // 重設計時器
    const timeout = setTimeout(() => {
      func();
    }, wait);
    setClickTimeout(timeout);
  }
  return debounce;
}
