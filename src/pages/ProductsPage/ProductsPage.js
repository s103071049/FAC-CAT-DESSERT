import styled from 'styled-components'
import Banner from '../../components/Banner.js'
import Item from '../../components/Item.js'
import HomeIcon from '../../components/HomeIcon'
import banner from '../../components/img/productsbanner.jpg'
import { AiFillHome } from "react-icons/ai";
import {MEDIA_QUERY_MD, MEDIA_QUERY_SD} from '../../components/Style/style.js'

import cake from '../HomePage/components/Image/cake.jpg'
import cake3 from '../HomePage/components/Image/cake3.jpg'
import cake4 from '../HomePage/components/Image/cake4.jpg'

const Wrapper = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  
`
const Section = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 24px;
`
const SectionLine = styled.div`
  padding: 8px 16px;
  border-bottom: 4px solid #dac9a6;
  width: 100px;
`
const ProductsCategory = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
  ${MEDIA_QUERY_SD} {
    flex-direction: column;
    justify-content: space-between;
  }
`

const Category = styled.div`
  padding: 4px 12px;
  margin-bottom: 12px;
  font-size: 16px;
  text-align: center;
`

const Title = ( {titleName} ) => {
  const style = {
    'border-left': '4px solid #dac9a6',
    'padding':'12px',
    'margin-top':'24px'
  }
  return (
    <div style={style}> {titleName} </div>
  );
}

function ProductsPage() {
  const desserts = [
    {
      id: 1,
      name: '阿嬤的蘋果派',
      price: '160',
      img: cake,
    },
    {
      id: 2,
      name: '我的梅果花園',
      price: '180',
      img: cake3,
    },
    {
      id: 3,
      name: '青春橘子派',
      price: '260',
      img: cake4,
    },
    {
      id: 4,
      name: '藍莓珠寶盒',
      price: '100',
      img: cake,
    },
    {
      id: 5,
      name: '阿嬤的蘋果派',
      price: '160',
      img: cake,
    },
    {
      id: 6,
      name: '我的梅果花園',
      price: '180',
      img: cake3,
    },
    {
      id: 7,
      name: '青春橘子派',
      price: '260',
      img: cake4,
    },
    {
      id: 8,
      name: '藍莓珠寶盒',
      price: '100',
      img: cake,
    }
  ]

  const categories = [
    {
      id: 1,
      name: '全部商品',
    },
    {
      id: 2,
      name: '餅乾',
    },
    {
      id: 3,
      name: '蛋糕',
    },
    {
      id: 4,
      name: '巧克力',
    },
    {
      id: 5,
      name: '飲料',
    }
  ]

  return (
    <div>
      <Wrapper>
        <HomeIcon pageName={'所有甜點'}/>
        <ProductsCategory>
          {categories.map(category => <Category><SectionLine>{category.name}</SectionLine></Category>)}
        </ProductsCategory>
        <Banner imgUrl={banner}/>
        <Title titleName={'常見點心'}/>
        <Section>
          {desserts.map((dessert,i) => <Item dessert={dessert} key={i}/>)}
        </Section>
      </Wrapper>
    </div>
  );
}

export default ProductsPage;