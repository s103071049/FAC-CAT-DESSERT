import styled from 'styled-components'
import {MEDIA_QUERY_MD, MEDIA_QUERY_SD} from '../../../components/Style/style.js'
import cake from './Image/cake.jpg'
import cake3 from './Image/cake3.jpg'
import cake4 from './Image/cake4.jpg'
import orangePie from './Image/orangePie.jpg'

const Section = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2%;
  width: 100%;
`

const Category = styled(Section)`
  flex-direction: column;
  align-items: center;
  ${MEDIA_QUERY_MD} {
    
  }
`
const SectionTitle = styled.div`
  font-size: 24px;
  color: #64363c;
  font-weight: bold;
  padding: 5px 0;
  text-align: center;
`
const SectionLine = styled.div`
  border: 1px solid #dac9a6;
  width: 100px;
`
const Dessert = styled.div`
  display: flex;
  width: 20%;
  & + & {
    margin-left: 2%;
  }
  flex-direction: column;
  ${MEDIA_QUERY_MD} {
    width: 50%;
    padding: 2%;
    & + & {
      margin-left: 0%;
    }
  }
  ${MEDIA_QUERY_SD} {
    & + & {
      margin-left: 0%;
    }
  }
`
const DessertImg = styled.div`
  width: 100%;
  height: 0;
  background: url(${props => props.url});
  border: 1px sold red;
  padding-bottom: 100%;
  overflow: hidden;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border-radius: 8px;
  cursor: pointer;
  &: hover {
    filter: brightness(110%);
  }
`
const DessertName = styled.div`
  text-align: center;
  margin-top: 8px;
  font-size: 18px;
  color: #a96360;
`
const DessertPrice = styled.div`
  margin-top: 4px;
  text-align: center;
  color: #a96360;
  margin-bottom: 8px;
`
const CartButton = styled.div`
  margin: 0 auto;
  border: 2px solid #dac9a6;
  color: #dac9a6;
  padding: 3%;
  border-radius: 6%;
  text-align: center;
  cursor: pointer;
  transition: background 0.5s ease-out;
  
`
const Img = styled.div`
  
`
function HotSales() {
  return (
    <div>
      <Category>
        <SectionTitle>Recommended Goods</SectionTitle>
        <SectionLine/>
        <SectionTitle>主廚推薦</SectionTitle>
        <Section>
          <Dessert>
            <Img><DessertImg url={cake}/></Img>
            <DessertName>阿嬤的蘋果派</DessertName>
            <DessertPrice>NT$ 160</DessertPrice>
            <CartButton>加入購物車</CartButton>
          </Dessert>
          <Dessert>
            <Img><DessertImg url={cake4}/></Img>
            <DessertName>我的梅果花園</DessertName>
            <DessertPrice>NT$ 180</DessertPrice>
            <CartButton>加入購物車</CartButton>
          </Dessert>
          <Dessert>
            <Img><DessertImg url={orangePie}/></Img>
            <DessertName>青春橘子派</DessertName>
            <DessertPrice>NT$ 260</DessertPrice>
            <CartButton>加入購物車</CartButton>
          </Dessert>
          <Dessert>
            <Img><DessertImg url={cake3}/></Img>
            <DessertName>藍莓珠寶盒</DessertName>
            <DessertPrice>NT$ 100</DessertPrice>
            <CartButton>加入購物車</CartButton>
          </Dessert>
        </Section>
      </Category>
      <Category>
        <SectionTitle>Hot Sales</SectionTitle>
        <SectionLine/>
        <SectionTitle>熱銷甜點</SectionTitle>
        <Section>
          <Dessert>
            <Img><DessertImg url={cake}/></Img>
            <DessertName>阿嬤的蘋果派</DessertName>
            <DessertPrice>NT$ 160</DessertPrice>
            <CartButton>加入購物車</CartButton>
          </Dessert>
          <Dessert>
            <Img><DessertImg url={cake4}/></Img>
            <DessertName>我的梅果花園</DessertName>
            <DessertPrice>NT$ 180</DessertPrice>
            <CartButton>加入購物車</CartButton>
          </Dessert>
          <Dessert>
            <Img><DessertImg url={orangePie}/></Img>
            <DessertName>青春橘子派</DessertName>
            <DessertPrice>NT$ 260</DessertPrice>
            <CartButton>加入購物車</CartButton>
          </Dessert>
          <Dessert>
            <Img><DessertImg url={cake3}/></Img>
            <DessertName>藍莓珠寶盒</DessertName>
            <DessertPrice>NT$ 100</DessertPrice>
            <CartButton>加入購物車</CartButton>
          </Dessert>
        </Section>
      </Category>
    </div>
  );
}

export default HotSales;
