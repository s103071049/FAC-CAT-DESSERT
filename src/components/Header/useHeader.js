import { useState, useContext, useEffect, useRef } from "react";
import { AuthContexts } from "../../context";
import {
  useHistory,
} from "react-router-dom";

const useHeader = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [searchProduct, setSearchProduct] = useState("");
  const [adminViewOpen, setAdminViewOpen] = useState(false)

  const history = useHistory();
  const { user } = useContext(AuthContexts);
  const toggleHamburger = () => {
    if (hamburgerOpen) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
    setHamburgerOpen(!hamburgerOpen);
    setSearchBarShow(false)
  };
  const [searchBarShow, setSearchBarShow] = useState(false);
  const ref = useRef()
  const handleSearchBarClick = () => {
    setHamburgerOpen(false)
    setSearchBarShow(!searchBarShow);
  };

  useEffect(()=>{
    const handleBodyClick = (event) => {
      if(ref.current.contains(event.target)){
        return
      }
      setSearchBarShow(false)
      setHamburgerOpen(false)
    }

    document.body.addEventListener('click', handleBodyClick, {capture:true})
    
    return () => {
      document.body.removeEventListener('click', handleBodyClick, {capture:true})
    }
  }, [])
  
  const handleAdminViewClick = () => {
    setAdminViewOpen(!adminViewOpen)
    toggleHamburger()
  }

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
    handleAdminViewClick,
    handleEnter,
    ref
  }
}

export default useHeader