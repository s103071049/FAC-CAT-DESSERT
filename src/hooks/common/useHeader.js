import { useState, useContext, useEffect, useRef } from "react";
import { AuthContexts } from "../../context";
import { useHistory, useLocation } from "react-router-dom";

const useHeader = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [searchProduct, setSearchProduct] = useState("");
  const [adminViewOpen, setAdminViewOpen] = useState(false);
  let location = useLocation();

  const history = useHistory();
  const { user } = useContext(AuthContexts);
  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
    setSearchBarShow(false);
  };
  const [searchBarShow, setSearchBarShow] = useState(false);
  const ref = useRef();
  const handleSearchBarClick = () => {
    setHamburgerOpen(false);
    setSearchBarShow(!searchBarShow);
  };

  useEffect(() => {
    setHamburgerOpen(false);
    const regex = new RegExp("/admin");
    if (regex.test(location.pathname)) {
      return setAdminViewOpen(true);
    }
    return setAdminViewOpen(false);
  }, [location, setHamburgerOpen]);

  useEffect(() => {
    const handleBodyClick = (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }
      setSearchBarShow(false);
      setHamburgerOpen(false);
    };

    document.body.addEventListener("click", handleBodyClick, { capture: true });

    return () => {
      document.body.removeEventListener("click", handleBodyClick, {
        capture: true,
      });
    };
  }, []);

  const handleEnter = () => {
    if (searchProduct) {
      history.push(`/search/${searchProduct}`);
      setSearchProduct("");
      setSearchBarShow(!searchBarShow);
    }
  };

  return {
    hamburgerOpen,
    searchProduct,
    setSearchProduct,
    adminViewOpen,
    searchBarShow,
    user,
    toggleHamburger,
    handleSearchBarClick,
    handleEnter,
    ref,
    setAdminViewOpen,
  };
};

export default useHeader;
