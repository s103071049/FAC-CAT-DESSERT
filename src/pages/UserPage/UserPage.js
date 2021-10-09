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
import EditPassword from "./components/EditPassword"
import { MEDIA_QUERY_MD } from "../../components/Style/style"


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

  ${MEDIA_QUERY_MD} {
    flex-direction:column;
    padding:0;
    margin:0 auto;
    justify-content:space-between;
  }

`
const SideBar = styled.div`
  padding:12px;
  width:250px;
  
  ${MEDIA_QUERY_MD} {
   padding:0;
   width:100%;
   box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }
`

const SideBarHeader = styled.div`
  background:#FBF6EA;
  padding:12px 24px;
  text-align:center;
  color:#424242;

  ${MEDIA_QUERY_MD} {
    display:none;
  }
`

const SideBarbody = styled.div`
  margin-top:20px;
  display:flex;
  flex-direction:column;

  ${MEDIA_QUERY_MD} {
     flex-direction:row;
     margin:0;
  }
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

  &:not(:last-child)::after {
    content:">";
    position: absolute;
    top: 30%;
    right: 0px;
  }

  ${MEDIA_QUERY_MD} {
    width:25%;
    padding:20px;
    border-bottom: 0;
    text-align:center;
    &:not(:last-child)::after {
      content:"";
    }
  }
`
const Main = styled.div`
  flex-grow:1;
   ${MEDIA_QUERY_MD} {
    border-top:2px solid #E2E2E2;
    padding-top:40px;
  }
`
const UserPage = () => {
  let location = useLocation()
  let { path, url } = useRouteMatch()

  const SideBarItems = ({ toUrl, title }) => {
    let newUrl = url + toUrl
    return (
      <SideBarItem
        to={`${newUrl}`}
        $active={location.pathname === `${newUrl}`}
      >
        {title}
      </SideBarItem>
    )
  }

  return (
    <>
      <Wrapper>
        <IconMark context={"會員專區"} />
        <UserWrapper>
          <SideBar>
            <SideBarHeader>我的帳戶</SideBarHeader>
            <SideBarbody>
              <SideBarItems toUrl={''} title='更新個人資訊' />
              <SideBarItems toUrl={'/editPWD'} title='更改密碼' />
              <SideBarItems toUrl={'/myorders'} title='我的訂單' />
              <SideBarItems toUrl={'/logout'} title='登出' />

            </SideBarbody>
          </SideBar>
          <Switch>
            <Main>
              <Route exact path={path}>
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