import styled from "styled-components";
import noLoginusericon from "../img/icon/user.svg";
import Loginusericon from "../img/icon/users-svgrepo-com.svg";
import cart from "../img/icon/shopping-cart.svg";
import search from "../img/icon/search.svg";
import faq from "../img/icon/question.svg";
import menu from "../img/icon/menu.svg";
import { MEDIA_QUERY_MD, MEDIA_QUERY_SD } from "../Style/style";
import { HashRouter as Router, Link } from "react-router-dom";

import useHeader from "../../hooks/common/useHeader";

const Navbar = styled.div`
  background: #fbf3ea;
  height: 110px;
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  ${MEDIA_QUERY_MD} {
    height: 70px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
  }
`;
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  ${MEDIA_QUERY_MD} {
    flex-direction: row;
    justify-content: space-between;
    padding: 0 20px;
  }
`;
const Logo = styled(Link)`
  padding: 12px 0 0 0;
  font-size: 2.5rem;
  color: #9e7a7a;
  font-weight: bold;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  ${MEDIA_QUERY_MD} {
    font-size: 2rem;
    padding: 0;
  }
  ${MEDIA_QUERY_SD} {
    font-size: 1.2rem;
    padding: 0;
  }
`;
const RwdBtns = styled.div`
  display: none;
  ${MEDIA_QUERY_MD} {
    display: block;
    position: relative;
    display: flex;
  }
`;
const RwdSearch = styled.div``;

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

const MenuBtn = styled.div``;

const Menu = styled.nav`
  ${MEDIA_QUERY_MD} {
    width: 70%;
    height: calc(100vh - 110px);
    background: #255359;
    opacity: 0.9;
    position: absolute;
    left: 0%;
    top: 70px;
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
const SearchBarWrap = styled.div`
  width: 100%;
  position: fixed;
  top: 70px;
  left: 0;
  padding: 6px 20px;
  background: #fbf3ea;
  text-align: center;
  & input {
    width: 100%;
    padding: 6px 12px;
  }
`;

const SearchBar = styled.input`
  border: 1px solid #b4a582;
  border-radius: 4px;
  outline: none;
  ${(props) => props.value === false && "display: none;"}
`;

function Header() {
  const {
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
    ref,
  } = useHeader();

  const RenderAdminItem = () => {
    return (
      <>
        {adminViewOpen ? (
          <Item to="/">訪問前台</Item>
        ) : (
          <Item to="/admin/orders">訪問後台</Item>
        )}
      </>
    );
  };
  const VistorItems = () => {
    return (
      <>
        <Item to="/newProducts">新品上市</Item>
        <Item to="/hotProducts">促銷商品</Item>
        <Item to="/products">商品一覽</Item>
      </>
    );
  };
  const RenderMenuItems = () => {
    if (user && user.authority === 1) {
      return (
        <List>
          {adminViewOpen ? (
            <>
              <Item to="/admin/products">商品管理</Item>
              <Item to="/admin/discounts">促銷管理</Item>
              <Item to="/admin/orders">訂單管理</Item>
            </>
          ) : (
            <VistorItems />
          )}
          <RenderAdminItem />
        </List>
      );
    } else {
      return (
        <List>
          <VistorItems />
        </List>
      );
    }
  };

  const RenderRWDItems = () => {
    return (
      <>
        {user ? (
          <MenuItem to="/user" onClick={toggleHamburger}>
            會員中心
          </MenuItem>
        ) : (
          <MenuItem to="/login" onClick={toggleHamburger}>
            會員登入
          </MenuItem>
        )}
        <MenuItem to="/faq" onClick={toggleHamburger}>
          FAQ
        </MenuItem>
        <MenuItem to="/about" onClick={toggleHamburger}>
          關於我們
        </MenuItem>
        <MenuItem to="/newProducts" onClick={toggleHamburger}>
          新品上市
        </MenuItem>
        <MenuItem to="/hotProducts" onClick={toggleHamburger}>
          促銷商品
        </MenuItem>
        <MenuItem to="/products" onClick={toggleHamburger}>
          商品一覽
        </MenuItem>
        <MenuItem to="/cart" onClick={toggleHamburger}>
          購物車
        </MenuItem>
      </>
    );
  };
  const RenderRWDMenu = () => {
    if (user && user.authority === 1) {
      return (
        <Menu hamburgerOpen={hamburgerOpen}>
          {adminViewOpen ? (
            <>
              <MenuItem
                to="/user"
              >
                會員中心
              </MenuItem>
              <MenuItem
                to="/admin/products"
              >
                商品管理
              </MenuItem>
              <MenuItem
                to="/admin/discounts"
              >
                促銷管理
              </MenuItem>
              <MenuItem
                to="/admin/orders"
              >
                訂單管理
              </MenuItem>
              <MenuItem
                to="/"
              >
                訪問前台
              </MenuItem>
            </>
          ) : (
            <>
              <RenderRWDItems />
              <MenuItem
                to="/admin/orders"
              >
                訪問後台
              </MenuItem>
            </>
          )}
        </Menu>
      );
    } else {
      return (
        <Menu hamburgerOpen={hamburgerOpen}>
          <RenderRWDItems />
        </Menu>
      );
    }
  };
  return (
    <Router>
      <Navbar ref={ref}>
        <Wrap>
          <Logo to="/">Fat Cat dessert ฅ</Logo>
          <RwdBtns>
            <RwdSearch to="#">
              <Img src={search} onClick={handleSearchBarClick} />
              {searchBarShow && (
                <SearchBarWrap>
                  <SearchBar
                    type="text"
                    placeholder="輸入商品名稱"
                    value={searchProduct}
                    onChange={(e) => setSearchProduct(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        handleEnter();
                      }
                    }}
                  />
                </SearchBarWrap>
              )}
            </RwdSearch>
            <MenuBtn onClick={toggleHamburger}>
              <Img src={menu} />
            </MenuBtn>
          </RwdBtns>
          <RenderRWDMenu />
          <RenderMenuItems />
        </Wrap>
        <Icon>
          {!user && (
            <ImgLink as={Link} to="/login">
              <Img src={noLoginusericon} />
            </ImgLink>
          )}
          {user && (
            <ImgLink as={Link} to="/user">
              <Img src={Loginusericon} />
            </ImgLink>
          )}
          {user && (
            <ImgLink as={Link} to="/cart">
              <Img src={cart} />
            </ImgLink>
          )}
          <ImgLink to="#">
            <Img src={search} onClick={handleSearchBarClick} />
            {searchBarShow && (
              <SearchBar
                type="text"
                placeholder="輸入商品名稱"
                value={searchProduct}
                onChange={(e) => setSearchProduct(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    handleEnter();
                  }
                }}
              />
            )}
          </ImgLink>
          <ImgLink as={Link} to="/faq">
            <Img src={faq} />
          </ImgLink>
        </Icon>
      </Navbar>
    </Router>
  );
}

export default Header;
