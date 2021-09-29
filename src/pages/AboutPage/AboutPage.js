import React from "react"
import styled from "styled-components"
import homeIcon from '../../components/img/icon/home.svg'

const AboutWrapper = styled.div`
  max-width:1042px;
  margin:30px auto;
  padding:0 16px;
  min-height:73vh;
`
const IconMark = styled.div`
  margin-top:10px;
  display:flex;
`
const Icon = styled.img`
  padding:0 px;
  width:15px;
  height:15px;
`

const Mark = styled.p`
  padding-left:8px;
  margin:0;
`
const AboutContentWrapper = styled.section`
  padding:60px;
  font-size:18px;
  line-height:40px;
  letter-spacing:0.15em;
  color:#212529;
`

const aboutContent = `(等確定 logo 和品牌名稱我再來編故事，這裡先copy法米)
          2007年法米法式甜點在創辦人的家鄉雲林斗六開幕。

          法米,源自法文“La Famille”有著 家庭,家人的意思

          法米 以 “家” 為概念, 將從小居住的老屋重新翻修，

          以白色簡約的風格，巧妙的呈現對歐式風情及保留對老家懷舊心情的甜點咖啡小舖，

          法米甜點就是為家人製作的點心，不計成本使用各國頂級食材，

          搭配家鄉盛產的新鮮蔬果，融合巴黎藍帶所學的甜點技巧製作天然、樸實的鄉村點心。

          法米希望除了甜點的美味之外，也能在每個重要的時刻陪伴大家留下最有溫度的記憶。

          因為法米所以有     美好記憶.記憶~好美`

const AboutPage = () => {
  return (
    <>
      <AboutWrapper>
        <IconMark>
          <Icon src={homeIcon} />
          <Mark>{'>'} 關於我們</Mark>
        </IconMark>
        <AboutContentWrapper>
          {aboutContent}
        </AboutContentWrapper>
      </AboutWrapper>
    </>
  )

}

export default AboutPage