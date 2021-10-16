import styled from "styled-components";
import noLoginusericon from "../img/icon/user.svg";
import Loginusericon from "../img/icon/users-svgrepo-com.svg";
import cart from "../img/icon/shopping-cart.svg";
import search from "../img/icon/search.svg";
import faq from "../img/icon/question.svg";
import { MEDIA_QUERY_MD, MEDIA_QUERY_SD } from "../Style/style";
import { useState, useContext } from "react";
import { AuthContexts } from "../../context";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import { setAuthToken } from "../../utils";
const Navbar = styled.div`
  background: #fbf3ea;
  height: 110px;
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
`;
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Logo = styled.div`
  padding: 12px 0 0 0;
  font-size: 46px;
  color: #9e7a7a;
  font-weight: bold;
  cursor: pointer;
  text-align: center;
  ${MEDIA_QUERY_MD} {
    font-size: 40px;
    padding: 0;
  }
  ${MEDIA_QUERY_SD} {
    font-size: 32px;
    padding: 0;
  }
`;
const List = styled.div`
  display: flex;
  ${MEDIA_QUERY_MD} {
    display: none;
  }
`;
const Item = styled(Link)`
  text-align: center;
  text-decoration: none;
  color: #9ea3b0;
  font-weight: bold;
  padding: 6px 12px;
  border-radius: 6px;
  & + & {
    margin-left: 30px;
  }
  cursor: pointer;
  &:hover {
    background: #b4a582;
    color: white;
  }
  transition: background 0.5s ease-out;
`;
const Icon = styled.div`
  display: flex;
  position: absolute;
  right: 0;
  padding: 12px;
  ${MEDIA_QUERY_MD} {
    display: none;
  }
`;
const Img = styled.img`
  width: 24px;
  padding: 0 2px;
  & + & {
    margin-left: 12px;
  }
  cursor: pointer;
`;
const MenuButton = styled.label`
  display: none;
  ${MEDIA_QUERY_MD} {
    cursor: pointer;
    width: 40px;
    height: 40px;
    display: block;
    position: absolute;
    top: 5px;
    right: 10px;
    &::before {
      content: "";
      position: absolute;
      height: 2px;
      left: 2px;
      right: 2px;
      width: 36px;
      background: #9e7a7a;
      top: 0;
      bottom: 0;
      margin: auto;
      box-shadow: 0 8px 0 #9e7a7a, 0 -8px 0 #9e7a7a;
    }
  }
`;

const Menu = styled.nav`
  ${MEDIA_QUERY_MD} {
    width: 70%;
    height: calc(100vh - 110px);
    background: #255359;
    opacity: 0.9;
    position: absolute;
    left: 0%;
    top: 110px;
    transition: all 0.3s linear;
    z-index: 2;
    transform: ${(props) =>
      props.hamburgerOpen ? "translateX(0)" : "translateX(-100%)"};
  }
`;

const MenuItem = styled(Link)`
  display: none;
  ${MEDIA_QUERY_MD} {
    display: block;
    text-decoration: none;
    color: white;
    font-weight: bold;
    padding: 10px 20px;
    border-bottom: 1px solid white;
    cursor: pointer;
  }
`;
const ImgLink = styled.div`
  & + & {
    margin-left: 12px;
  }
  display: flex;
  align-items: center;
`;
const SearchBar = styled.input`
  border: 1px solid #b4a582;
  border-radius: 4px;
  outline: none;
  ${(props) => props.value === false && "display: none;"}
`;
function Header() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const { user, setUser } = useContext(AuthContexts);
  const toggleHamburger = () => {
    if (hamburgerOpen) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
    setHamburgerOpen(!hamburgerOpen);
  };
  const [show, searchBarShow] = useState(false);
  const searchBar = () => {
    searchBarShow(!show);
  };
  const handleLogout = () => {
    setAuthToken("");
    setUser(null);
    alert("已登出");
  };
  return (
    <div>
      <Router>
        <Navbar>
          <Wrap>
            <Logo>Fat Cat dessert ฅ</Logo>
            <MenuButton onClick={toggleHamburger}></MenuButton>
            <Menu hamburgerOpen={hamburgerOpen}>
              <MenuItem to="/login" onClick={toggleHamburger}>
                會員登入
              </MenuItem>
              <MenuItem to="#" onClick={toggleHamburger}>
                新品上市
              </MenuItem>
              <MenuItem to="#" onClick={toggleHamburger}>
                促銷商品
              </MenuItem>
              <MenuItem to="/products" onClick={toggleHamburger}>
                商品一覽
              </MenuItem>
              <MenuItem to="#" onClick={toggleHamburger}>
                購物車
              </MenuItem>
              <MenuItem to="/user" onClick={toggleHamburger}>
                會員中心
              </MenuItem>
              <MenuItem to="/faq" onClick={toggleHamburger}>
                FAQ
              </MenuItem>
              <MenuItem to="/about" onClick={toggleHamburger}>
                關於我們
              </MenuItem>
            </Menu>
            <List>
              <Item to="#">新品上市</Item>
              <Item to="#">促銷商品</Item>
              <Item to="/products">商品一覽</Item>
            </List>
          </Wrap>
          <Icon>
            {!user && (
              <ImgLink as={Link} to="/login">
                <Img src={noLoginusericon} />
              </ImgLink>
            )}
            {user && (
              <ImgLink onClick={handleLogout}>
                <Img src={Loginusericon} />
              </ImgLink>
            )}
            <ImgLink as={Link} to="#">
              <Img src={cart} />
            </ImgLink>
            <ImgLink to="#">
              <Img src={search} onClick={searchBar} />
              {show && <SearchBar type="text" placeholder="輸入商品名稱" />}
            </ImgLink>
            <ImgLink as={Link} to="/faq">
              <Img src={faq} />
            </ImgLink>
          </Icon>
        </Navbar>
      </Router>
    </div>
  );
}

export default Header;
