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
import User from './components/User'
import EditPassword from "./components/EditPassword"
import { MEDIA_QUERY_SD } from "../../components/Style/style"


const Wrapper = styled.div`
  max-width:1042px;
  margin:30px auto 60px;
  padding:0 16px;
  min-height:60vh;
`
const UserWrapper = styled.div`
  max-width:1042px;
  margin:30px auto;
  padding:0 16px;
  display:flex;

  ${MEDIA_QUERY_SD} {
    flex-direction:column;
    align-items:center;
  }

`
const SideBar = styled.div`
  padding:12px;
  width:250px;
  ${MEDIA_QUERY_SD} {
   margin-bottom:40px;
  }
`
const Main = styled.div`
  flex-grow:1;
   ${MEDIA_QUERY_SD} {
    border-top:2px solid #E2E2E2;
    padding-top:40px;
  }
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

  &:hover {
    color:#D49E6A;
  }

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
              <Route exact path={path}>
                <User />
              </Route>
              <Route path={`${path}/info`}>
                <UserInfo />
              </Route>
              <Route path={`${path}/editPWD`}>
                <EditPassword />
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