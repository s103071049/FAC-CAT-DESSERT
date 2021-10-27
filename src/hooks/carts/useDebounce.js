import { useState } from "react";

export default function useDebounce() {
  const [clickTimeout, setclickTimeout] = useState("");
  function debounce(func, wait) {
    clearTimeout(clickTimeout);
    const timeout = setTimeout(() => {
      func();
    }, wait);
    setclickTimeout(timeout);
  }
  return debounce;
}
