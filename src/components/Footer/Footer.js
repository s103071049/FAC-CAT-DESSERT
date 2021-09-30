import styled from 'styled-components'
import {MEDIA_QUERY_MD, MEDIA_QUERY_SD} from '../Style/style.js'
import instagram from '../img/icon/instagram.svg'
import youtube from '../img/icon/youtube.svg'
import facebook from '../img/icon/facebook.svg'

const Wrap = styled.footer`
`
const Img = styled.img`
  width: 1.5rem;
  & + & {
    margin-left: 0.8rem;
  }
`
const FooterTop = styled.div`
  background: #FBF3EA;
  padding: 1rem;
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
  margin-right: 2rem;
  line-height: 1.2rem;
  word-break: break-word;
`
const Info = styled.div`
  & + & {
    margin-top: 0.3rem;
  }
`
const AboutMe = styled.div`
  ${MEDIA_QUERY_SD, MEDIA_QUERY_MD} {
    margin-bottom: 1rem;
  }
`
const FooterSite = styled.div`
  font-size: 2.4rem;
  color: #967249;
  font-weight: bold;
  white-space: nowrap;
  ${MEDIA_QUERY_SD} {
    font-size: 1.8rem;
  }
  ${'@media screen and (max-width: 265px)'} {
    font-size: 1.2rem;
  }
`
const FooterLink = styled.div`
  padding-top: 0.3rem;
  display: flex;
  align-items: center;
`
const FooterBottom = styled.div`
  background-color: #9e7a7a;
  padding: 0.4rem 0;
  text-align: center;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  line-height: 1.2rem;
`
function Footer() {
  return (
    <div>
      <Wrap>
        <FooterTop>
          <FooterWrapper>
            <FooterInfo>
              <Info>烘焙坊地址: 高雄市岡山區貓貓路三段84巷33號</Info>
              <Info>訂購專線：07-626-5566</Info>
              <Info>營業時間：週一〜週五 09:00~18:00 / 週六、週日、國定假日（含連假）休息</Info>
              <Info>email：dessert@fatcat.com.tw</Info>
              <Info>
                <FooterLink>
                  <Img src={facebook}/>
                  <Img src={instagram}/>
                  <Img src={youtube}/>
                </FooterLink>
              </Info>
            </FooterInfo>
            <AboutMe>
              <FooterSite> Fat Cat Dessert ฅ</FooterSite>
            </AboutMe>
          </FooterWrapper>
        </FooterTop>
        <FooterBottom>
          Copyright © 2021 Fat Cat Dessert All Rights Reserved.
        </FooterBottom>
      </Wrap>
    </div>
  );
}

export default Footer;
