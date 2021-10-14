import React from "react";
import styled from "styled-components";
import homeIcon from "../../components/img/icon/home.svg";
import { MEDIA_QUERY_SD } from "../../components/style/style";

const AboutWrapper = styled.div`
  max-width: 1042px;
  margin: 30px auto;
  padding: 0 16px;
  min-height: 73vh;
`;
const IconMark = styled.div`
  margin-top: 10px;
  display: flex;
`;
const Icon = styled.img`
  padding: 0 px;
  width: 15px;
  height: 15px;
`;

const Mark = styled.p`
  padding-left: 8px;
  margin: 0;
`;
const AboutContentWrapper = styled.section`
  padding: 60px;
  font-size: 18px;
  line-height: 40px;
  letter-spacing: 0.15em;
  color: #212529;
  margin-top: 20px;

  div + div {
    margin-top: 80px;
  }

  ${MEDIA_QUERY_SD} {
    padding: 20px;
  }
`;
const ShopMap = styled.iframe`
  width: 100%;
`;

const aboutContent = `(等確定 logo 和品牌名稱我再來編故事，這裡先copy法米)
          2007年法米法式甜點在創辦人的家鄉雲林斗六開幕。

          法米,源自法文“La Famille”有著 家庭,家人的意思

          法米 以 “家” 為概念, 將從小居住的老屋重新翻修，

          以白色簡約的風格，巧妙的呈現對歐式風情及保留對老家懷舊心情的甜點咖啡小舖，

          法米甜點就是為家人製作的點心，不計成本使用各國頂級食材，

          搭配家鄉盛產的新鮮蔬果，融合巴黎藍帶所學的甜點技巧製作天然、樸實的鄉村點心。

          法米希望除了甜點的美味之外，也能在每個重要的時刻陪伴大家留下最有溫度的記憶。

          因為法米所以有     美好記憶.記憶~好美`;

const AboutPage = () => {
  return (
    <>
      <AboutWrapper>
        <IconMark>
          <Icon src={homeIcon} />
          <Mark>{">"} 關於我們</Mark>
        </IconMark>
        <AboutContentWrapper>
          <div>{aboutContent}</div>
          <div>
            <ShopMap
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.211768404918!2d120.28109231526243!3d22.794615730528527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e0c2656db11c1%3A0xeb41f83a6fbc1573!2zODIw6auY6ZuE5biC5bKh5bGx5Y2A5YWs5ZyS6KW_6Lev5LiJ5q61ODTlt7czM-iZnw!5e0!3m2!1szh-TW!2stw!4v1633022800098!5m2!1szh-TW!2stw"
              width="600"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              title="shop map"
            ></ShopMap>
          </div>
        </AboutContentWrapper>
      </AboutWrapper>
    </>
  );
};

export default AboutPage;
