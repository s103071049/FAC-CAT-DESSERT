import styled from "styled-components";
import { MEDIA_QUERY_MD, MEDIA_QUERY_SD } from "../style/style.js";
import instagram from "../img/icon/instagram.svg";
import youtube from "../img/icon/youtube.svg";
import facebook from "../img/icon/facebook.svg";

const Wrap = styled.footer``;
const Img = styled.img`
  width: 24px;
  & + & {
    margin-left: 12px;
  }
`;
const FooterTop = styled.div`
  background: #fbf3ea;
  padding: 16px;
  color: #9e7a7a;
`;
const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  ${(MEDIA_QUERY_SD, MEDIA_QUERY_MD)} {
    flex-direction: column-reverse;
  }
`;
const FooterInfo = styled.div`
  margin-right: 32px;
  line-height: 18px;
  word-break: break-word;
  ${(MEDIA_QUERY_SD, MEDIA_QUERY_MD)} {
    margin-right: 0px;
  }
  ${"@media screen and (max-width: 170px)"} {
    font-size: 14px;
  }
`;
const Info = styled.div`
  & + & {
    margin-top: 4px;
  }
`;
const AboutMe = styled.div`
  ${(MEDIA_QUERY_SD, MEDIA_QUERY_MD)} {
    margin-bottom: 16px;
  }
`;
const FooterSite = styled.div`
  font-size: 32px;
  color: #967249;
  font-weight: bold;
  white-space: nowrap;
  ${MEDIA_QUERY_SD} {
    font-size: 24px;
  }
  ${"@media screen and (max-width: 265px)"} {
    font-size: 20px;
  }
  ${"@media screen and (max-width: 170px)"} {
    font-size: 14px;
    white-space: wrap;
  }
`;
const FooterLink = styled.div`
  padding-top: 4px;
  display: flex;
  align-items: center;
`;
const FooterBottom = styled.div`
  background-color: #9e7a7a;
  padding: 6px 0;
  text-align: center;
  color: white;
  font-size: 14px;
  font-weight: bold;
  line-height: 14px;
`;
function Footer() {
  return (
    <div>
      <Wrap>
        <FooterTop>
          <FooterWrapper>
            <FooterInfo>
              <Info>烘焙坊地址: 高雄市岡山區貓貓路三段84巷33號</Info>
              <Info>訂購專線：07-626-5566</Info>
              <Info>
                營業時間：週一〜週五 09:00~18:00 /
                週六、週日、國定假日（含連假）休息
              </Info>
              <Info>email：dessert@fatcat.com.tw</Info>
              <Info>
                <FooterLink>
                  <Img src={facebook} />
                  <Img src={instagram} />
                  <Img src={youtube} />
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
