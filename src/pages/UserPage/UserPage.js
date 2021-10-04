import styled from "styled-components"
import {
  Switch,
  Route,
  Link,
  useRouteMatch,
  useLocation
} from 'react-router-dom'
import IconMark from "../../components/contexts/IconMark"
import UserInfo from "./components/UserInfo"

const Wrapper = styled.div`
  max-width:1042px;
  margin:30px auto 60px;
  padding:0 16px;
`
const UserWrapper = styled.div`
  max-width:1042px;
  margin:30px auto;
  padding:0 16px;
  display:flex;

`
const SideBar = styled.div`
  padding:12px;
  width:250px;
`
const Main = styled.div`
  flex-grow:1;
  padding:12px;
`
const SideBarHeader = styled.div`
  background:#FBF6EA;
  padding:12px 24px;
  text-align:center;
  color:#424242;
`

const SideBarbody = styled.div`
  margin-top:20px;
  display:flex;
  flex-direction:column;
`
const SideBarItem = styled(Link)`
  display:block;
  text-decoration:none;
  color:#808080;
  padding:20px;
  border-bottom: 1px solid #808080;
  position:relative;
  ${props => props.$active && `
    color:#D49E6A;
    font-weight:700;
  `}

  &::after {
    content:">";
    position: absolute;
    top: 30%;
    right: 0px;
  }
`
const UserPage = () => {
  let location = useLocation()

  let { path, url } = useRouteMatch()
  return (
    <>
      <Wrapper>
        <IconMark context={"會員專區"} />
        <UserWrapper>
          <SideBar>
            <SideBarHeader>我的帳戶</SideBarHeader>
            <SideBarbody>

              <SideBarItem
                to={`${url}/info`}
                $active={location.pathname === `${url}/info`}
              >
                更新個人資訊
              </SideBarItem>
              <SideBarItem
                to={`${url}/editPWD`}
                $active={location.pathname === `${url}/editPWD`}
              >
                更改密碼
              </SideBarItem>
              <SideBarItem
                to={`${url}/myorders`}
                $active={location.pathname === `${url}/myorders`}
              >
                我的訂單
              </SideBarItem>
            </SideBarbody>
          </SideBar>
          <Switch>
            <Main>
              <Route exact path={path}>第一個畫面</Route>
              <Route path={`${path}/info`}>
                <UserInfo />
              </Route>
              <Route path={`${path}/editPWD`}>
                修改密碼
              </Route>
              <Route path={`${path}/myorders`}>
                我的訂單
              </Route>
            </Main>
          </Switch>

        </UserWrapper>
      </Wrapper>

    </>
  )
}

export default UserPage