import styled from 'styled-components'
import user from '../img/icon/user.svg'
import cart from '../img/icon/shopping-cart.svg'
import search from '../img/icon/search.svg'
import faq from '../img/icon/question.svg'
import {MEDIA_QUERY_MD, MEDIA_QUERY_SD} from '../Style/style.js'
import {useState} from 'react';
const Navbar = styled.div`
  background: #FBF3EA;
  height: 110px;
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
`

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Logo = styled.div`
  padding: 12px 0 0 0;
  font-size: 46px;
  color: #9e7a7a;
  font-weight: bold;
  cursor: pointer;
  text-align: center;
  ${MEDIA_QUERY_MD} {
    font-size: 32px;
    padding: 0;
  }
`
const List = styled.div`
  display: flex;
  ${MEDIA_QUERY_MD} {
    display: none;
  }
`
const Item = styled.ul`
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
  &: hover {
    background: #b4a582;
    color: white;
  }
  transition: background 0.5s ease-out;
`
const Icon = styled.div`
  display: flex;
  position: absolute;
  right: 0;
  padding: 12px;
  ${MEDIA_QUERY_MD} {
    display: none;
  }
`
const Img = styled.img`
  width: 24px;
  padding: 0 2px;
  & + & {
    margin-left: 12px;
  }
  cursor: pointer;
`
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
    &:: before {
      content: '';
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
`

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
    transform: ${props => props.hamburgerOpen ? 'translateX(0)' : 'translateX(-100%)'};
  }
`

const MenuItem = styled.a`
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
`
function Header() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen)
  }
  return (
    <div>
      <Navbar>
        <Wrap>
          <Logo>Fat Cat dessert ฅ</Logo>
          <MenuButton onClick={toggleHamburger}>
          </MenuButton>
          <Menu hamburgerOpen={hamburgerOpen}>
            <MenuItem href="#">會員登入</MenuItem>
            <MenuItem href="#">新品上市</MenuItem>
            <MenuItem href="#">促銷商品</MenuItem>
            <MenuItem href="#">商品一覽</MenuItem>
            <MenuItem href="#">購物車</MenuItem>
            <MenuItem href="#">會員中心</MenuItem>
            <MenuItem href="#">FAQ</MenuItem>
          </Menu>
          <List>
            <Item>新品上市</Item>
            <Item>促銷商品</Item>
            <Item>商品一覽</Item>
          </List>
        </Wrap>
        <Icon>
          <Img src={user}/>
          <Img src={cart}/>
          <Img src={search}/>
          <Img src={faq}/>
        </Icon>
      </Navbar>
    </div>
  );
}

export default Header;