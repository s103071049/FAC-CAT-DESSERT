import styled from 'styled-components'

const Wrap = styled.div`
  background: #FBF3EA;
  height: 110px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Logo = styled.div`
  font-size: 46px;
  color: #9e7a7a;
  font-weight: bold;
  cursor: pointer;
`
const List = styled.div`
  display: flex;
`
const Item = styled.ul`
  text-align: center;
  text-decoration: none;
  color: #9ea3b0;
  font-weight: bold;
  padding: 4px 12px;
  border-radius: 6px;
  & + & {
    margin-left: 30px;
  }
  cursor: pointer;
  &: hover {
    background: #b4a582;
    color: white;
  }
`
function Header() {
  return (
    <div>
      <Wrap>
        <Logo>Fat Cat dessert ฅ</Logo>
        <List>
          <Item>新品上市</Item>
          <Item>促銷商品</Item>
          <Item>商品一覽</Item>
        </List>
      </Wrap>
    </div>
  );
}

export default Header;