import styled from 'styled-components'
import {MEDIA_QUERY_MD, MEDIA_QUERY_SD} from './Style/style.js'

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

const Item = ({dessert}) => (
  <Dessert>
    <DessertImg src={dessert.img}/>
    <DessertName>${dessert.name}</DessertName>
    <DessertPrice>${dessert.price}</DessertPrice>
    <CartButton>加入購物車</CartButton>
  </Dessert>
)

export default Item