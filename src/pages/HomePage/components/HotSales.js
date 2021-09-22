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
  margin-top: 24px;
`

const Category = styled(Section)`
  flex-direction: column;
  align-items: center;
`
const SectionTitle = styled.div`
  font-size: 24px;
  color: #64363c;
  font-weight: bold;
  padding: 5px 0;
`
const SectionLine = styled.div`
  border: 1px solid #dac9a6;
  width: 100px;
`
const Dessert = styled.div`
  display: flex;
  width: 20%;
  & + & {
    margin-left: 4%;
  }
  flex-direction: column;
  ${MEDIA_QUERY_MD} {
    width: 50%;
    & + & {
      margin-left: 0%;
    }
  }
`
const DessertImg = styled.img`
  width: 100%;
  height: 50%;
  object-fit: cover;
  margin: 0 auto;
  border-radius: 8px;
`
const DessertName = styled.div`
  text-align: center;
  margin-top: 8px;
  font-size: 18px;
  color: #a96360;
`
const DessertPrice = styled.div`
  text-align: center;
  color: #a96360;
  margin-bottom: 8px;
`
const CartButton = styled.div`
  width: 50%;
  margin: 0 auto;
  border: 2px solid #dac9a6;
  color: #dac9a6;
  padding: 3%;
  border-radius: 6%;
  text-align: center;
  cursor: pointer;
  &: hover {
    background: #60373e;
  }
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
            <DessertImg src={cake}/>
            <DessertName>阿嬤的蘋果派</DessertName>
            <DessertPrice>NT$ 160</DessertPrice>
            <CartButton>加入購物車</CartButton>
          </Dessert>
          <Dessert>
            <DessertImg src={cake4}/>
            <DessertName>我的梅果花園</DessertName>
            <DessertPrice>NT$ 180</DessertPrice>
            <CartButton>加入購物車</CartButton>
          </Dessert>
          <Dessert>
            <DessertImg src={orangePie}/>
            <DessertName>青春橘子派</DessertName>
            <DessertPrice>NT$ 260</DessertPrice>
            <CartButton>加入購物車</CartButton>
          </Dessert>
          <Dessert>
            <DessertImg src={cake3}/>
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
            <DessertImg src={cake}/>
            <DessertName>阿嬤的蘋果派</DessertName>
            <DessertPrice>NT$ 160</DessertPrice>
            <CartButton>加入購物車</CartButton>
          </Dessert>
          <Dessert>
            <DessertImg src={cake4}/>
            <DessertName>我的梅果花園</DessertName>
            <DessertPrice>NT$ 180</DessertPrice>
            <CartButton>加入購物車</CartButton>
          </Dessert>
          <Dessert>
            <DessertImg src={orangePie}/>
            <DessertName>青春橘子派</DessertName>
            <DessertPrice>NT$ 260</DessertPrice>
            <CartButton>加入購物車</CartButton>
          </Dessert>
          <Dessert>
            <DessertImg src={cake3}/>
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
