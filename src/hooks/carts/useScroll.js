import { useEffect, useState } from "react";
const useScroll = () => {
  const [show, switchShow] = useState(false);
  useEffect(() => {
    const listener = () => {
      switchShow(window.scrollY > 300);
    };
    document.addEventListener("scroll", listener);
    return () => document.removeEventListener("scroll", listener);
  }, [show]);
  return [show, switchShow];
};
export default useScroll;
