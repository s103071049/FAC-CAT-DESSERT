import styled from 'styled-components'
import {MEDIA_QUERY_MD, MEDIA_QUERY_SD} from '../Style/style.js'
const Wrap = styled.footer`
  margin-top : 48px;
`

const FooterTop = styled.div`
  background: #FBF3EA;
  padding: 32px;
  color: #9e7a7a;
`
const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  ${MEDIA_QUERY_SD, MEDIA_QUERY_MD} {
    flex-direction: column-reverse;
  }
`
const FooterInfo = styled.div`
  margin-right: 16px;
`
const Info = styled.div`
 & + & {
  margin-top: 10px;
 }
`
const AboutMe = styled.div`
  ${MEDIA_QUERY_SD, MEDIA_QUERY_MD} {
    margin-bottom: 12px;
  }
`
const FooterSite = styled.div`
  font-size: 36px;
  color: #967249;
  font-weight: bold;
`
const FooterLink = styled.div``
const FooterBottom = styled.div`
  background-color: #9e7a7a;
  padding: 12px;
  text-align: center;
  color: white;
  font-size: 16px;
  font-weight: bold;
`
function Footer() {
  return (
    <div>
      <Wrap>
        <FooterTop>
          <FooterWrapper>
            <FooterInfo>
              <Info>烘焙坊地址: 高雄市岡山區貓貓路三段84巷33號</Info>
              <Info>訂位專線：07-626-5566</Info>
              <Info>營業時間：週一〜週五 09:00~18:00 / 週六、週日、國定假日（含連假）休息</Info>
              <Info>email：dessert@fatcat.com.tw</Info>
            </FooterInfo>
            <AboutMe>
              <FooterSite> Fat Cat Dessert ฅ</FooterSite>
              <FooterLink>Facebook / Instagram / Youtube</FooterLink>
            </AboutMe>
          </FooterWrapper>
        </FooterTop>
        <FooterBottom>
          Copyright © 2021 Fat Cat Dessert All Rights Reserved. 肥貓甜點股份有限公司版權所有
        </FooterBottom>
      </Wrap>
    </div>
  );
}

export default Footer;
