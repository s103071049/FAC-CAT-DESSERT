import styled from "styled-components";
import {
  MEDIA_QUERY_MD,
  MEDIA_QUERY_SD,
} from "../../../components/style/style.js";
import cake from "../../../components/img/product/cake.jpg";
import cake3 from "../../../components/img/product/cake3.jpg";
import cake4 from "../../../components/img/product/cake4.jpg";
import orangePie from "../../../components/img/product/orangePie.jpg";

const Section = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2%;
  width: 100%;
`;
const Category = styled(Section)`
  flex-direction: column;
  align-items: center;
`;
const SectionTitle = styled.div`
  font-size: 24px;
  color: #64363c;
  font-weight: bold;
  padding: 5px 0;
  text-align: center;
`;
const SectionLine = styled.div`
  border: 1px solid #dac9a6;
  width: 100px;
`;
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
`;
const DessertImg = styled.div`
  width: 100%;
  height: 0;
  background: url(${(props) => props.url});
  border: 1px sold red;
  padding-bottom: 100%;
  overflow: hidden;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    filter: brightness(110%);
  }
`;
const DessertName = styled.div`
  text-align: center;
  margin-top: 8px;
  font-size: 18px;
  color: #a96360;
`;
const DessertPrice = styled.div`
  margin-top: 4px;
  text-align: center;
  color: #a96360;
  margin-bottom: 8px;
`;
const CartButton = styled.div`
  margin: 0 auto;
  border: 2px solid #dac9a6;
  color: #dac9a6;
  padding: 3%;
  border-radius: 6%;
  text-align: center;
  cursor: pointer;
  transition: background 0.5s ease-out;
  white-space: nowrap;
`;
const Img = styled.div``;
function Advertisement({ enTitle, chTitle }) {
  return (
    <>
      <SectionTitle>{enTitle}</SectionTitle>
      <SectionLine />
      <SectionTitle>{chTitle}</SectionTitle>
    </>
  );
}
function Sales({ url, name, price }) {
  return (
    <Dessert>
      <Img>
        <DessertImg url={url} />
      </Img>
      <DessertName>{name}</DessertName>
      <DessertPrice>{price}</DessertPrice>
      <CartButton>加入購物車</CartButton>
    </Dessert>
  );
}
function HotSales() {
  return (
    <div>
      <Category>
        <Advertisement enTitle={"Recommended Goods"} chTitle={"主廚推薦"} />
        <Section>
          <Sales url={cake} name={"阿嬤的蘋果派"} price={"NT$ 160"} />
          <Sales url={cake4} name={"我的梅果花園"} price={"NT$ 180"} />
          <Sales url={orangePie} name={"青春橘子派"} price={"NT$ 260"} />
          <Sales url={cake3} name={"藍莓珠寶盒"} price={"NT$ 100"} />
        </Section>
      </Category>
      <Category>
        <Advertisement enTitle={"Hot Sales"} chTitle={"熱銷甜點"} />
        <Section>
          <Sales url={cake} name={"阿嬤的蘋果派"} price={"NT$ 160"} />
          <Sales url={cake4} name={"我的梅果花園"} price={"NT$ 180"} />
          <Sales url={orangePie} name={"青春橘子派"} price={"NT$ 260"} />
          <Sales url={cake3} name={"藍莓珠寶盒"} price={"NT$ 100"} />
        </Section>
      </Category>
    </div>
  );
}

export default HotSales;
